type GoogleMapProps = {
  query: string;
  title: string;
  className?: string;
  iframeClassName?: string;
};

export function GoogleMap({ query, title, className, iframeClassName }: GoogleMapProps) {
  const src = `https://www.google.com/maps?q=${encodeURIComponent(query)}&z=13&output=embed`;
  const wrapperClassName = ["overflow-hidden rounded-[2rem] border border-zinc-200 bg-white shadow-soft", className]
    .filter(Boolean)
    .join(" ");
  const embeddedMapClassName = ["h-[320px] w-full md:h-[420px]", iframeClassName].filter(Boolean).join(" ");

  return (
    <div className={wrapperClassName}>
      <iframe title={title} src={src} className={embeddedMapClassName} loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
    </div>
  );
}
