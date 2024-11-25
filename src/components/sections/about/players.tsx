import FadeIn from "@/components/common/animations/fade-in";
import { cn } from "@/lib/cn";
import { Peep } from "@/models";

export const Players = ({
  className,
  peeps,
}: {
  className?: string;
  peeps: Peep[];
}) => {
  return (
    <div>
      <FadeIn className={cn("max-w-full overflow-x-hidden", className)}>
        <h1
          style={{ fontSize: "clamp(1rem, 13.5vw, 244.448px)" }}
          className="text-gold font-archivo italic uppercase text-center lg:pr-8"
        >
          our&nbsp;players
        </h1>
      </FadeIn>
      <div className="flex flex-wrap gap-2 container justify-center">
        {peeps.map((peep, idx) => (
          <FadeIn key={peep.name} delay={0.1 * idx}>
            <div className="relative">
              <img
                src={peep.image}
                alt={`${peep.name} img`}
                className="w-full rounded-3xl max-w-[170px] sm:max-w-[220px] border border-gray-800"
              />
            </div>
          </FadeIn>
        ))}
      </div>
    </div>
  );
};
