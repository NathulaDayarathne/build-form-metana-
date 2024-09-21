import React from "react";
import { useAtomValue } from "jotai";
import { componentsStore, selectedComponentAtom } from "../lib/store";
import WelcomeScreen from "./dynamic components/welcomeScreen/Screen";

function PreviewScreen() {
  const selectedComponent = useAtomValue(selectedComponentAtom);
  const components = useAtomValue(componentsStore);

  return (
    <div
      id="preview-screen"
      className="w-[80%] h-[97vh] rounded-3xl bg-black text-white px-16 py-5"
    >
      {selectedComponent ? (
        // If a component is selected render only that component
        <div className="w-full h-full flex flex-col overflow-y-scroll ">
          {selectedComponent.component}
        </div>
      ) : (
        <>
          {/*  Rendering container  */}
          {components.length > 0 ? (
            <div className="w-full h-full flex flex-col overflow-y-scroll ">
              {components.map((comp) => {
                return (
                  <div key={comp.id} className="w-full h-full  ">
                    {comp.component}
                  </div>
                );
              })}
            </div>
          ) : (
            // If the components array is empty
            <div className="w-full h-full flex justify-center items-center">
              <h1 className="text-3xl text-center">No components to render</h1>
            </div>
          )}
        </>
      )}
    </div>
  );
}

export default PreviewScreen;
