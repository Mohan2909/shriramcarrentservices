type GoogleMapProps = {
  query: string;
  title: string;
};

export function GoogleMap({ query, title }: GoogleMapProps) {
  const src = `https://www.google.com/maps?q=${encodeURIComponent(query)}&z=13&output=embed`;

  return (
    <div className="overflow-hidden rounded-[2rem] border border-zinc-200 bg-white shadow-soft">
      <iframe title={title} src={src} className="h-[320px] w-full md:h-[420px]" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
    </div>
  );
}
