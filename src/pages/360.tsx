import * as React from "react";
import VerticalPageLayout from "@/components/layouts/vertical-page";
import { defaultMeta } from "@/components/common/head";

export default function VerticalPage() {
  return (
    <VerticalPageLayout
      headProps={{
        ...defaultMeta,
        title: "360 | Laugh",
      }}
      logo={
        <img
          src="/images/logos/360.svg"
          className="w-[160px] h-auto"
          alt="home logo"
        />
      }
      color="yellow"
      //   noBg
    >
      <div className="container">360</div>
    </VerticalPageLayout>
  );
}
