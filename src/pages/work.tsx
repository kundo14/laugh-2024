import * as React from "react";
import PageLayout from "@/components/layouts/page";
import { defaultMeta } from "@/components/common/head";

export default function WOrk() {
  return (
    <PageLayout
      headProps={{
        ...defaultMeta,
        title: "Our Work | Laugh",
      }}
    >
      <img
        src="/images/textures/paper-2.jpg"
        className="w-full h-full absolute top-0 left-0 opacity-10"
        alt="texture bg"
      />
      {/* so we get the full screen. We dont take into account the nav */}
      <div className="container items-start justify-between !mt-20">
        <div className="w-full max-w-[1100px]">
          <div className="w-full flex items-end justify-between">
            <div className="flex flex-col max-w-[980px]">
              <p className="text-42 uppercase leading-[1.3]">
                At <b className="scratch">Laugh</b> we have worked with some of
                the <b>most ambitious and exciting brands</b> in the world,{" "}
                <span className="font-extralight">
                  and that is because of one thing and one thing only…
                </span>
              </p>
              <p className="uppercase font-black ml-auto italic text-92 -mt-20">
                Our work.
              </p>
            </div>
            <img
              src="/images/scratches/yellow-arrow.svg"
              alt="yellow arrow"
              className="-mb-8"
            />
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
