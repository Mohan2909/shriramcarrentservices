"use client";

type Props = {
  title: string;
  subtitle: string;
  centerLabel: string;
  locations: string[];
};

const orbitPositions = [
  { x: 0, y: -98, align: "center" },
  { x: 106, y: -70, align: "left" },
  { x: 154, y: -6, align: "left" },
  { x: 148, y: 58, align: "left" },
  { x: 104, y: 116, align: "left" },
  { x: -104, y: 116, align: "right" },
  { x: -154, y: -6, align: "right" },
  { x: -106, y: -70, align: "right" },
] as const;

export default function OrbitCard({
  title,
  subtitle,
  centerLabel,
  locations,
}: Props) {
  return (
    <div className="w-full overflow-hidden rounded-[2.25rem] border border-[#f5e7d8] bg-[linear-gradient(180deg,#fff9f3_0%,#fffdf9_100%)] p-6 shadow-[0_28px_80px_-48px_rgba(180,83,9,0.28)] sm:p-8">
      <p className="sr-only">{title}</p>
      <h2 className="sr-only">{subtitle}</h2>

      <div className="relative min-h-[240px] sm:min-h-[278px]">
        <div className="absolute left-1/2 top-1/2 h-[202px] w-[202px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#f6d9bc] bg-[#fff5ea] sm:h-[220px] sm:w-[220px]" />
        <div className="absolute left-1/2 top-1/2 h-[162px] w-[162px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#f6dfcb] bg-transparent sm:h-[176px] sm:w-[176px]" />
        <div className="absolute left-1/2 top-1/2 h-[132px] w-[132px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#ffb072]/70 bg-[radial-gradient(circle_at_30%_30%,#ff8426_0%,#f26a11_78%)] shadow-[0_16px_36px_-18px_rgba(249,115,22,0.95)] sm:h-[144px] sm:w-[144px]" />

        <svg className="absolute inset-0 h-full w-full" viewBox="0 0 420 278" fill="none" preserveAspectRatio="none" aria-hidden="true">
          {locations.map((loc, index) => {
            const position = orbitPositions[index % orbitPositions.length];
            const centerX = 210;
            const centerY = 139;
            const dotX = centerX + position.x;
            const dotY = centerY + position.y;

            return (
              <g key={`${loc}-line`}>
                <path
                  d={`M ${centerX} ${centerY} Q ${(centerX + dotX) / 2} ${dotY > centerY ? centerY + 6 : centerY - 6} ${dotX} ${dotY}`}
                  stroke="#f5c9a5"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                />
                <circle cx={dotX} cy={dotY} r="3" fill="#f39a58" />
              </g>
            );
          })}
        </svg>

        <div className="absolute left-1/2 top-1/2 z-10 flex h-[132px] w-[132px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full text-center text-[2.1rem] font-semibold text-white sm:h-[144px] sm:w-[144px]">
          {centerLabel}
        </div>

        {locations.map((loc, index) => {
          const position = orbitPositions[index % orbitPositions.length];
          const justifyClass =
            position.align === "left"
              ? "justify-start text-left"
              : position.align === "right"
                ? "justify-end text-right"
                : "justify-center text-center";

          return (
            <div
              key={loc}
              className={`absolute left-1/2 top-1/2 flex min-w-[102px] -translate-x-1/2 -translate-y-1/2 rounded-[1.1rem] border border-[#f3e1d1] bg-[linear-gradient(180deg,#fff8f1_0%,#fff1e6_100%)] px-4 py-2 text-[0.72rem] font-medium text-[#8b4c24] shadow-[0_10px_22px_-18px_rgba(180,83,9,0.5)] sm:min-w-[118px] sm:text-sm ${justifyClass}`}
              style={{ transform: `translate(calc(-50% + ${position.x}px), calc(-50% + ${position.y}px))` }}
            >
              {loc}
            </div>
          );
        })}
      </div>
    </div>
  );
}
