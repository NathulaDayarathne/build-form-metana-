import { SectionScreenPropertyTypes, WelcomeScreenPropertyTypes } from "./types";
import { EmailScreenPropertyTypes } from "./types";

export const welcomeScreenPlaceholderData: WelcomeScreenPropertyTypes = {
  styles: {
    bgColor: "#ff00ff",
    textColor: "#000",
    buttonColor: "#ffff00",
    buttonTextColor: "#000",
    textSize: "medium",
    buttonRadius: "large",
    buttonSize: "medium",
    contentPlacement: "image-left",
  },
  content: {
    title: "Welcome to your form",
    description: "Give a description to your form",
    buttonText: "Get Started",
    imageURL: "./assets/images/image.jpg",
  },
};

export const EmailScreenPlaceholderData: EmailScreenPropertyTypes = {
  styles: {
    bgColor: "#ff00ff",
    textColor: "#000",
    textSize: "medium",
  },
  content: {
    title: "Email Title",
    description: "Email Description",
  },
};


export const SectionScreenPlaceholderData: SectionScreenPropertyTypes = {
  styles: {
    bgColor: "#ff00ff",
    textColor: "#000",
    textSize: "medium",
  },
  content: {
    title: "Section Title",
    description: "Section Description",
  },
};