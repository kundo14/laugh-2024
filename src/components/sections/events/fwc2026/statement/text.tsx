import FadeIn from "@/components/common/animations/fade-in";
import { Button } from "@/components/design-system/button";
import { cn } from "@/lib/cn";
import { Cross1Icon } from "@radix-ui/react-icons";
import Link from "next/link";
import { useRouter } from "next/router";

export const StatementText = ({
  textColor = "white",
}: {
  textColor?: "black" | "white";
}) => {
  const router = useRouter();
  return (
    <div className="container z-10 relative">
      <div
        className={cn(
          "flex flex-col text-[15px] sm:text-16 max-w-[768px] mx-auto space-y-4 leading-relaxed",
          {
            "text-gray-200": textColor === "white",
            "text-gray-900": textColor === "black",
          }
        )}
      >
        <FadeIn>
          <p>
            The{" "}
            <span
              className={textColor === "white" ? "!text-yellow" : "!text-red"}
            >
              FIFA World Cup 2026
            </span>{" "}
            is only{" "}
            <span
              className={textColor === "white" ? "!text-yellow" : "!text-red"}
            >
              9 months away
            </span>
            , and with{" "}
            <span
              className={textColor === "white" ? "!text-yellow" : "!text-red"}
            >
              70M+ Hispanic soccer fans
            </span>{" "}
            expected to watch in the US, it is an{" "}
            <span
              className={textColor === "white" ? "!text-yellow" : "!text-red"}
            >
              $80 billion opportunity
            </span>{" "}
            to authentically reach the US Hispanic audience around a core
            passion point in 2026.
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
            <span
              className={textColor === "white" ? "!text-yellow" : "!text-red"}
            >
              only content studio
            </span>{" "}
            that combines Hispanic sports expertise with US market strategy - we
            understand the culture, the sport, AND the business.
          </p>{" "}
        </FadeIn>{" "}
        <FadeIn>
          <p>
            <span
              className={textColor === "white" ? "!text-yellow" : "!text-red"}
            >
              Book a FREE strategy session
            </span>{" "}
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
        <div className="flex flex-col gap-2">
          <FadeIn>
            <div className="flex items-start gap-2">
              <Cross1Icon
                className={cn("w-[14px] h-[14px] mt-[5px]", {
                  "text-red": textColor === "black",
                  "text-yellow": textColor === "white",
                })}
              />
              <p>Market opportunity size and audience data.</p>
            </div>
          </FadeIn>
          <FadeIn delay={0.1}>
            {" "}
            <div className="flex items-start gap-2">
              <Cross1Icon
                className={cn("w-[14px] h-[14px] mt-[5px]", {
                  "text-red": textColor === "black",
                  "text-yellow": textColor === "white",
                })}
              />
              <p>
                FIFA World Cup data & why it&apos;s important for Hispanic
                audiences.
              </p>
            </div>
          </FadeIn>{" "}
          <FadeIn delay={0.2}>
            <div className="flex items-start gap-2">
              <Cross1Icon
                className={cn("w-[14px] h-[14px] mt-[5px]", {
                  "text-red": textColor === "black",
                  "text-yellow": textColor === "white",
                })}
              />
              <p>Hispanic audience data specific to your industry/vertical.</p>{" "}
            </div>
          </FadeIn>{" "}
          <FadeIn delay={0.3}>
            <div className="flex items-start gap-2">
              <Cross1Icon
                className={cn("w-[14px] h-[14px] mt-[5px]", {
                  "text-red": textColor === "black",
                  "text-yellow": textColor === "white",
                })}
              />
              <p>Tailored insight to meet your business objectives.</p>{" "}
            </div>
          </FadeIn>{" "}
          <FadeIn delay={0.4}>
            <div className="flex items-start gap-2">
              <Cross1Icon
                className={cn("w-[14px] h-[14px] mt-[5px]", {
                  "text-red": textColor === "black",
                  "text-yellow": textColor === "white",
                })}
              />
              <p>
                <span
                  className={
                    textColor === "white" ? "!text-yellow" : "!text-red"
                  }
                >
                  Custom board-ready presentation delivered within 7 days.
                </span>
              </p>
            </div>
          </FadeIn>{" "}
          <FadeIn delay={0.5}>
            <div className="flex items-center gap-2">
              <Cross1Icon
                className={cn("w-[14px] h-[14px]", {
                  "text-red": textColor === "black",
                  "text-yellow": textColor === "white",
                })}
              />
              <p>Clear next steps for implementation.</p>
            </div>
          </FadeIn>
        </div>
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
            <Link
              href={"https://meetings-eu1.hubspot.com/dsmyth"}
              target="_blank"
              aria-label="book a free consultation"
              className={textColor === "white" ? "!text-yellow" : "!text-red"}
            >
              book a FREE consultation
            </Link>{" "}
            here and we can discuss how your brand can achieve the same outcomes
            as our other clients.
          </p>
        </FadeIn>
        <FadeIn className="!mt-8">
          <Link
            href="https://meetings-eu1.hubspot.com/dsmyth"
            target="_blank"
            aria-label="book a free"
            className={cn(
              "w-full sm:w-max px-4 py-2 text-[15px] sm:text-16 border rounded-sm bg-transparent font-medium transition-all duration-200",
              {
                "border-yellow text-yellow hover:text-black hover:bg-yellow":
                  textColor === "white",
                "border-red text-red hover:bg-red hover:text-white":
                  textColor === "black",
              }
            )}
          >
            Book a free consultation
          </Link>
        </FadeIn>
      </div>
    </div>
  );
};
