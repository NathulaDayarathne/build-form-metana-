import React from "react";
import { useAtomValue } from "jotai";
import { z } from "zod";

import { EmailScreenAtom } from "../../../lib/store";
import { cn } from "../../../lib/utils";
import { EmailScreenPropertyTypes } from "../../../lib/types";

function Screen() {
  const data: EmailScreenPropertyTypes = useAtomValue(EmailScreenAtom);

  //   Styles
  const bgColor = `bg-[${data.styles.bgColor}]`;
  const textColor = `text-[${data.styles.textColor}]`;

  const textSize = (): { title: string; description: string } => {
    switch (data.styles.textSize) {
      case "regular":
        return { title: "text-3xl", description: "text-md" };
      case "medium":
        return { title: "text-5xl", description: "text-xl" };
      default:
        return { title: "text-3xl", description: "text-md" };
    }
  };

  return (
    <div className={cn("flex flex-1", bgColor)}>
      {/*    Text content*/}
      <div className="flex flex-col gap-y-4 items-center justify-center h-screen w-full">
        <div className="w-2/3 min-w-[500px] flex flex-col gap-y-12">
          <div className="flex flex-col gap-y-4">
          <h1 className={cn(textColor, textSize().title)}>
            {data.content.title}
          </h1>
          <p className={cn(textColor, textSize().description)}>
            {data.content.description}
          </p>
          </div>
          <input
            type="email"
            disabled
            className="w-full h-12 bg-transparent border-b-2 border-b-stone-400 text-white active:border-b-transparent focus:border-b-transparent outline-none"
          />
        </div>
      </div>
    </div>
  );
}

export default Screen;
