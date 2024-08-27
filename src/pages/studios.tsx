import * as React from "react";
import VerticalPageLayout from "@/components/layouts/vertical-page";
import { defaultMeta } from "@/components/common/head";

export default function StudiosPage() {
  return (
    <VerticalPageLayout
      headProps={{
        ...defaultMeta,
        title: "Studios | Laugh",
      }}
      logo={
        <img
          src="/images/logos/studios.svg"
          className="w-[200px] h-auto"
          alt="studios logo"
        />
      }
      color="gold"
      //   noBg
    >
      <div className="container">Studios</div>
    </VerticalPageLayout>
  );
}
