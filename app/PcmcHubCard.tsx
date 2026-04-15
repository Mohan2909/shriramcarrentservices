import { Building2, Laptop2, TrainFront } from "lucide-react";

type HubItem = {
  title: string;
  subtitle: string;
  icon: "building" | "laptop" | "train";
  className: string;
  sizeClassName?: string;
  titleClassName?: string;
  subtitleClassName?: string;
};

const hubItems: HubItem[] = [
  { title: "Pimpri", subtitle: "Commercial Area", icon: "building", className: "left-[10%] top-[20%]" },
  { title: "Chinchwad", subtitle: "Railway Station", icon: "building", className: "left-1/2 top-[8%] -translate-x-1/2", sizeClassName: "h-[92px] w-[92px] sm:h-[108px] sm:w-[108px]", titleClassName: "text-[0.64rem] sm:text-[0.78rem]" },
  { title: "Akurdi", subtitle: "Industrial Area", icon: "building", className: "right-[10%] top-[20%]" },
  { title: "Pimple-\nSaudaar", subtitle: "Residential Area", icon: "building", className: "left-[4%] top-[47%]", sizeClassName: "h-[92px] w-[92px] sm:h-[108px] sm:w-[108px]", titleClassName: "text-[0.62rem] sm:text-[0.74rem]", subtitleClassName: "text-[0.46rem] sm:text-[0.54rem]" },
  { title: "Nigdi", subtitle: "Bus Depot", icon: "train", className: "right-[4%] top-[47%]" },
  { title: "Hinjewadi", subtitle: "IT Hub", icon: "laptop", className: "left-[14%] bottom-[10%]" },
  { title: "Rahatani", subtitle: "Residential Area", icon: "building", className: "left-1/2 bottom-[1%] -translate-x-1/2", sizeClassName: "h-[92px] w-[92px] sm:h-[108px] sm:w-[108px]" },
];

function HubIcon({ icon }: { icon: HubItem["icon"] }) {
  const className = "h-6 w-6 text-[#ff6d16] sm:h-7 sm:w-7";

  if (icon === "laptop") return <Laptop2 className={className} strokeWidth={2.2} />;
  if (icon === "train") return <TrainFront className={className} strokeWidth={2.2} />;
  return <Building2 className={className} strokeWidth={2.2} />;
}

export default function PcmcHubCard() {
  return (
    <div className="relative overflow-hidden rounded-[1.75rem] bg-[radial-gradient(circle_at_center,rgba(255,140,40,0.16),transparent_38%),linear-gradient(135deg,#ff6c0f_0%,#ff6508_38%,#f15908_72%,#e3520b_100%)] p-4 text-white shadow-[0_24px_80px_-42px_rgba(249,115,22,0.85)] sm:p-5">
      <div className="absolute inset-0 opacity-[0.08] [background-image:radial-gradient(circle_at_1px_1px,white_1px,transparent_0)] [background-size:16px_16px]" />
      <div className="relative min-h-[390px] sm:min-h-[430px]">
        <div className="absolute left-1/2 top-1/2 h-[215px] w-[215px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/15 sm:h-[240px] sm:w-[240px]" />

        <svg className="absolute inset-0 h-full w-full" viewBox="0 0 900 760" fill="none" aria-hidden="true">
          {[
            [450, 380, 255, 165],
            [450, 380, 450, 98],
            [450, 380, 650, 165],
            [450, 380, 208, 405],
            [450, 380, 695, 405],
            [450, 380, 300, 610],
            [450, 380, 450, 664],
          ].map(([x1, y1, x2, y2], index) => (
            <path
              key={index}
              d={`M ${x1} ${y1} Q ${(x1 + x2) / 2} ${(y1 + y2) / 2} ${x2} ${y2}`}
              stroke="#ffd1b1"
              strokeWidth="4"
              strokeLinecap="round"
              opacity="0.9"
            />
          ))}
        </svg>

        <div className="absolute left-1/2 top-1/2 z-10 flex h-[128px] w-[128px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-[4px] border-[#ffb682] bg-[radial-gradient(circle_at_35%_30%,#fffaf5_0%,#fff4eb_100%)] text-[1.9rem] font-semibold text-[#ff6408] shadow-[0_30px_60px_-24px_rgba(255,255,255,0.35)] sm:h-[146px] sm:w-[146px] sm:text-[2.2rem]">
          PCMC
        </div>

        {hubItems.map((item) => (
          <div
            key={`${item.title}-${item.subtitle}-${item.className}`}
            className={`absolute z-20 flex h-[78px] w-[78px] flex-col items-center justify-center rounded-full border-[3px] border-[#ffc39a] bg-[radial-gradient(circle_at_35%_30%,#fffaf4_0%,#fff4e9_100%)] px-2 text-center text-[#ff6408] shadow-[0_22px_46px_-24px_rgba(255,255,255,0.45)] sm:h-[88px] sm:w-[88px] ${item.sizeClassName ?? ""} ${item.className}`}
          >
            <HubIcon icon={item.icon} />
            <p className={`mt-1 whitespace-pre-line text-[0.6rem] font-semibold leading-tight sm:text-[0.68rem] ${item.titleClassName ?? ""}`}>{item.title}</p>
            {item.subtitle ? <p className={`mt-0.5 leading-tight text-[#ff7820] text-[0.48rem] sm:text-[0.56rem] ${item.subtitleClassName ?? ""}`}>{item.subtitle}</p> : null}
          </div>
        ))}
      </div>
    </div>
  );
}