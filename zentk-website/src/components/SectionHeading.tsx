type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  accent?: string;
  description?: string;
  align?: 'left' | 'center';
};

export function SectionHeading({
  eyebrow,
  title,
  accent,
  description,
  align = 'left',
}: SectionHeadingProps) {
  const alignment = align === 'center' ? 'text-center items-center' : 'text-left items-start';

  return (
    <div className={`flex flex-col gap-4 ${alignment}`}>
      <span className="eyebrow">{eyebrow}</span>
      <h2 className="max-w-4xl font-display text-4xl font-semibold tracking-[-0.04em] text-white sm:text-5xl">
        {title}{' '}
        {accent ? <span className="display-gradient">{accent}</span> : null}
      </h2>
      {description ? (
        <p className="max-w-3xl text-base leading-7 text-slate-300 sm:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  );
}
