
import {useAtomValue} from "jotai";
import {welcomeScreenAtom} from "../../../lib/store";
import {cn} from "../../../lib/utils";
import {WelcomeScreenPropertyTypes} from "../../../lib/types";
import img from "/src/assets/images/image.jpg"

function Screen() {
    const data: WelcomeScreenPropertyTypes = useAtomValue(welcomeScreenAtom);

    const layoutAlignment = data.styles.contentPlacement === "image-left" ? "flex-row" : "flex-row-reverse";
    const bgColor = `bg-[${data.styles.bgColor}]`;
    const textColor = `text-[${data.styles.textColor}]`;
    const buttonColor = `bg-[${data.styles.buttonColor}]`;
    const buttonTextColor = `text-[${data.styles.buttonTextColor}]`;
    const buttonRadius = (): string => {
        switch (data.styles.buttonRadius) {
            case "regular":
                return "rounded-md";
            case "medium":
                return "rounded-lg";
            case "large":
                return "rounded-xl";
            default:
                return "rounded-md";
        }
    }
    const buttonSize = (): string => {
        switch (data.styles.buttonSize) {
            case "regular":
                return "py-2 px-4 text-base";
            case "medium":
                return "py-3 px-6 text-lg";
            case "large":
                return "py-4 px-8 text-xl";
            default:
                return "py-2 px-4 text-base";
        }
    }
    const textSize = (): { title: string, description: string } => {
        switch (data.styles.textSize) {
            case "regular":
              return { title: "text-3xl", description: "text-md" };
            case "medium":
              return { title: "text-5xl", description: "text-xl" };
            default:
              return { title: "text-3xl", description: "text-md" };
          }
    }


    return (
        <div className={cn("flex flex-1 h-[90vh] ", layoutAlignment, bgColor)}>

            {/*    Text content*/}
            <div className="flex flex-col gap-y-10 items-start justify-center h-full  w-1/2 px-10">
                <h1 className={cn( "text-wrap overflow-hidden w-full line-clamp-2",textColor, textSize().title)}>{data.content.title}</h1>
                <p className={cn( "text-wrap overflow-hidden w-full line-clamp-3",textColor, textSize().description)}>{data.content.description}</p>
                <button
                    className={cn(buttonColor, buttonTextColor, buttonRadius, buttonSize,  "bg-white py-3 px-5 rounded-full text-black font-semibold hover:bg-stone-200 duration-300")}>{data.content.buttonText}</button>
            </div>

            {/*    Image content*/}
            <div className="h-full w-1/2">
                <img className="rounded-3xl object-cover object-center w-full h-full" 
                src={img}
                     alt="Welcome screen image"/>
            </div>


        </div>
    );
}

export default Screen;