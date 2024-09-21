import React from "react";
import { useAtomValue } from "jotai";
import { SectionScreenAtom } from "../../../lib/store";
import { cn } from "../../../lib/utils";
import { SectionScreenPropertyTypes } from "../../../lib/types";

function Screen() {
  const data: SectionScreenPropertyTypes = useAtomValue(SectionScreenAtom);

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
    <div className={cn("flex flex-1 h-[90vh]", bgColor)}>
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
        </div>
      </div>
    </div>
  );
}

export default Screen;
