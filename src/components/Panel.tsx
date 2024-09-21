import React from "react";
import Minimap from "./Minimap";
import { selectedComponentAtom, componentsStore } from "../lib/store";
import { useAtomValue, useAtom } from "jotai";
import EditScreenLayout from "./EditScreenLayout";
import { welcomeScreen } from "../lib/dynamicComponents";
import { generateId } from "../lib/utils";

function Panel() {
  const selectedComponent = useAtomValue(selectedComponentAtom);
const [components, setComponents] = useAtom(componentsStore);


// Add the welcome screen component if there are no components when the app loads
if (
  components.length === 0 && !selectedComponent
){
  setComponents([{
    component: welcomeScreen.components.screenComponent,
    editComponent: welcomeScreen.components.editComponent,
    id: generateId(),
    name: welcomeScreen.name
  }])
}


  return (
    <div className="flex flex-col gap-y-10 text-black flex-1 rounded-3xl bg-yellow-50 border-2 py-3 px-3">
      {/*  Panel  with content/design/share/Replies */}

      {/*  Components to add  */}
      {selectedComponent ? (
        <EditScreenLayout>{selectedComponent.editComponent}</EditScreenLayout>
      ) : (
        <Minimap />
      )}
    </div>
  );
}

export default Panel;
