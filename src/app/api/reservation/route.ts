import { NextResponse } from "next/server";
import { reservationSchema } from "@/features/book-room/model/schema";
import { rooms } from "@/entities/room";
import { createMailer, mailConfigured, escapeHtml } from "@/shared/api";

export const runtime = "nodejs";

export async function POST(req: Request) {
  const json = await req.json().catch(() => null);
  const parsed = reservationSchema.safeParse(json);

  if (!parsed.success) {
    return NextResponse.json({ message: "Invalid form data" }, { status: 400 });
  }
  if (!mailConfigured()) {
    return NextResponse.json(
      { message: "Email service is not configured" },
      { status: 500 }
    );
  }

  const d = parsed.data;
  const room = rooms.find((r) => r.id === d.roomId);
  if (!room) {
    return NextResponse.json({ message: "Unknown room" }, { status: 400 });
  }

  const mailer = createMailer();
  const from = `"Highway Fusion" <${process.env.SMTP_USER}>`;

  const rows: [string, string][] = [
    ["Name", d.fullName],
    ["Email", d.email],
    ["Phone", d.phone],
    ["Room", room.name],
    ["Guests", d.guests],
    ["Check-in", d.checkIn],
    ["Check-out", d.checkOut],
    ["Notes", d.notes || "-"],
  ];

  const html = `
    <h2>New room reservation request</h2>
    <table cellpadding="6" style="border-collapse:collapse">
      ${rows
        .map(
          ([k, v]) =>
            `<tr><td><b>${k}</b></td><td>${escapeHtml(v)}</td></tr>`
        )
        .join("")}
    </table>`;
  const text = rows.map(([k, v]) => `${k}: ${v}`).join("\n");

  try {
    await mailer.sendMail({
      from,
      to: process.env.MAIL_TO,
      replyTo: d.email,
      subject: `New reservation: ${room.name} (${d.checkIn} to ${d.checkOut})`,
      html,
      text,
    });
  } catch (err) {
    console.error("Reservation email failed", err);
    return NextResponse.json(
      { message: "Could not send email. Please try again." },
      { status: 500 }
    );
  }

  try {
    await mailer.sendMail({
      from,
      to: d.email,
      subject: "We received your reservation request - Highway Fusion",
      html: `<p>Hi ${escapeHtml(d.fullName)},</p>
        <p>Thank you! We received your request for the <b>${escapeHtml(
          room.name
        )}</b> from ${escapeHtml(d.checkIn)} to ${escapeHtml(
          d.checkOut
        )}. Our team will contact you soon to confirm.</p>
        <p>Highway Fusion - Grand Highway Resort</p>`,
    });
  } catch (err) {
    console.error("Guest confirmation email failed", err);
  }

  return NextResponse.json({ ok: true });
}