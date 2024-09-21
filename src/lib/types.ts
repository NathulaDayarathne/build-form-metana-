import React from "react";

export type ComponentsType = {
  name: string;
  component: React.ReactNode;
  editComponent: React.ReactNode;
  id: string;
};

// Dynamic screen component type
export type WelcomeScreenPropertyTypes = {
  styles: {
    bgColor: string;
    textColor: string;
    buttonColor: string;
    buttonTextColor: string;
    textSize: "regular" | "medium";
    buttonRadius: "regular" | "medium" | "large";
    buttonSize: "regular" | "medium" | "large";
    // font: string // font family
    contentPlacement: "image-left" | "image-right";
  };
  content: {
    title: string;
    description: string;
    buttonText: string;
    imageURL: string;
  };
};

// Dynamic  Email screen component type
export type EmailScreenPropertyTypes = {
  styles: {
    bgColor: string;
    textColor: string;
    textSize: "regular" | "medium";
  };
  content: {
    title: string;
    description: string;
  };
};


// Dynamic  Section screen component type
export type SectionScreenPropertyTypes = {
  styles: {
    bgColor: string;
    textColor: string;
    textSize: "regular" | "medium";
  };
  content: {
    title: string;
    description: string;
  };
};

