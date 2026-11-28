import { Reveal } from "./reveal";

type PageHeaderProps = {
  eyebrow: string;
  title: string;
  description?: string;
};

export function PageHeader({ eyebrow, title, description }: PageHeaderProps) {
  return (
    <section className="bg-navy relative overflow-hidden px-6 pt-40 pb-20 text-center">
      <div className="bg-gold/10 absolute -top-24 left-1/2 size-96 -translate-x-1/2 rounded-full blur-[120px]" />
      <Reveal className="relative mx-auto max-w-3xl">
        <p className="text-gold text-sm tracking-[0.4em] uppercase">
          {eyebrow}
        </p>
        <h1 className="text-cream mt-5 font-serif text-5xl md:text-6xl">
          {title}
        </h1>
        <div className="bg-gold mx-auto mt-6 h-px w-20" />
        {description && (
          <p className="text-cream/75 mx-auto mt-6 max-w-xl text-lg">
            {description}
          </p>
        )}
      </Reveal>
    </section>
  );
}