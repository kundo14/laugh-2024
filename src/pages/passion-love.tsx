import * as React from "react";
import PageLayout from "@/components/layouts/page";
import { defaultMeta } from "@/components/common/head";

export default function PassionLove() {
  return (
    <PageLayout
      headProps={{
        ...defaultMeta,
        title: "Passion Love | Laugh",
      }}
    >
      <div className="container">passion love</div>
    </PageLayout>
  );
}
