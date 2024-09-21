import React from "react";
import { ComponentsType } from "../lib/types";
import { useAtom, useSetAtom } from "jotai";
import { selectedComponentAtom, componentsStore } from "../lib/store";
import { RxCross2 } from "react-icons/rx";
import { IoIosClose } from "react-icons/io";

type Props = {
  comp: ComponentsType;
};

function ComponentChip({ comp }: Props) {

  const setSelectedComponent = useSetAtom(selectedComponentAtom);
  const [components, setComponents] = useAtom(componentsStore);

// Remove this component from the list
  const handlerRemoveThisComponent = () => {
    const newComponents = components.filter((c) => c.id !== comp.id);
    setComponents(newComponents);

  }

  return (
    <button
      className="relative border rounded-xl flex w-full text-center items-center justify-center  bg-white hover:bg-stone-100 duration-300 overflow-hidden"
    >
      <span className="py-2"  onClick={() => {
        setSelectedComponent(comp);
      }}>{comp.name}</span>

     {comp.name !== "Welcome Screen" && <span onClick={handlerRemoveThisComponent} className="absolute text-3xl h-full right-0 duration-200 hover:text-red-400 pr-4 pl-3 grid place-items-center">
        <IoIosClose />
      </span>}
    </button>
  );
}

export default ComponentChip;
