import * as React from "react";
import VerticalPageLayout from "@/components/layouts/vertical-page";
import { defaultMeta } from "@/components/common/head";

export default function PassionLove() {
  return (
    <VerticalPageLayout
      headProps={{
        ...defaultMeta,
        title: "Passion Love | Laugh",
      }}
      logo={
        <img
          src="/images/logos/passion-love.svg"
          className="w-[200px] h-auto"
          alt="home logo"
        />
      }
      color="red"
    >
      <div className="container">passion love</div>
    </VerticalPageLayout>
  );
}
