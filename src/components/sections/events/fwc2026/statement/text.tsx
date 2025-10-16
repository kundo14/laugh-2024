import FadeIn from "@/components/common/animations/fade-in";
import { Button } from "@/components/design-system/button";
import { useRouter } from "next/router";

export const StatementText = () => {
  const router = useRouter();
  return (
    <div className="container z-10 relative">
      <div className="flex flex-col text-gray-200 text-[15px] sm:text-16 max-w-[768px] mx-auto pt-20 sm:pt-32 pb-12 space-y-4 leading-relaxed">
        <FadeIn>
          <p>
            The <span className="!text-yellow">FIFA World Cup 2026</span> is
            only <span className="!text-yellow">9 months away</span>, and with{" "}
            <span className="!text-yellow">70M+ Hispanic soccer fans</span>{" "}
            expected to watch in the US, it is an{" "}
            <span className="!text-yellow">$80 billion opportunity</span> to
            authentically reach the US Hispanic audience around a core passion
            point in 2026.
          </p>
        </FadeIn>
        <FadeIn>
          <p>
            If that is something you&apos;re looking for, then don&apos;t miss
            out!
          </p>
        </FadeIn>{" "}
        <FadeIn>
          <p>
            Most agencies understand marketing OR Hispanic audiences OR
            fútbol/soccer. But we&apos;re the{" "}
            <span className="!text-yellow">only content studio</span> that
            combines Hispanic sports expertise with US market strategy - we
            understand the culture, the sport, AND the business.
          </p>{" "}
        </FadeIn>{" "}
        <FadeIn>
          <p>
            <span className="!text-yellow">Book a FREE strategy session</span>{" "}
            and get a board-ready presentation within 7 days showing exactly how
            to capture this opportunity for your company.
          </p>{" "}
        </FadeIn>{" "}
        <FadeIn>
          <p>
            What you&apos;ll receive from a 30-minute World Cup opportunity
            assessment with sports marketing experts:
          </p>
        </FadeIn>
        <ul className="list-disc list-inside space-y-2 mb-4">
          <FadeIn>
            <li>Market opportunity size and audience data.</li>
          </FadeIn>
          <FadeIn delay={0.1}>
            <li>
              FIFA World Cup data & why it&apos;s important for Hispanic
              audiences.
            </li>
          </FadeIn>{" "}
          <FadeIn delay={0.2}>
            <li>Hispanic audience data specific to your industry/vertical.</li>{" "}
          </FadeIn>{" "}
          <FadeIn delay={0.3}>
            <li>Tailored insight to meet your business objectives.</li>{" "}
          </FadeIn>{" "}
          <FadeIn delay={0.4}>
            <li>
              <span className="!text-yellow">
                Custom board-ready presentation delivered within 7 days.
              </span>
            </li>
          </FadeIn>{" "}
          <FadeIn delay={0.5}>
            <li>Clear next steps for implementation.</li>
          </FadeIn>
        </ul>
        <FadeIn>
          <p>
            No obligation, just expert guidance to help you capture this
            opportunity.
          </p>
        </FadeIn>
        <FadeIn>
          <p>Would that be of interest?</p>
        </FadeIn>
        <FadeIn>
          <p>
            If the above resonates, why not{" "}
            <span className="!text-yellow">book a FREE consultation</span> here
            and we can discuss how your brand can achieve the same outcomes as
            our other clients.
          </p>
        </FadeIn>
        <div className="">
          <button
            name="book"
            onClick={() => {
              router.push("/contact");
            }}
            aria-label="book a free"
            className="w-full sm:w-max px-4 py-2 text-[15px] sm:text-16 border rounded-sm border-yellow text-yellow bg-transparent font-medium hover:transform hover:scale-105 transition-all duration-200 mt-8"
          >
            Book a free consultation
          </button>
        </div>
      </div>
    </div>
  );
};
