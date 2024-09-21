import { useRef } from "react";
import { useAtom } from "jotai";
import { useOnClickOutside } from "usehooks-ts";

import { componentsStore, selectedComponentAtom } from "../lib/store";

import { IoIosClose } from "react-icons/io";
import { data } from "../lib/dynamicComponents";
import { generateId } from "../lib/utils";

type Props = {
  handleCloseModal: () => void;
};



export default function ComponentCatalogue({ handleCloseModal }: Props) {
  const [components, setComponents] = useAtom(componentsStore);
  const [selectedComponent, setSelectedComponent] = useAtom(
    selectedComponentAtom
  );

  const catalogueRef = useRef<HTMLDivElement>(null);

//   Close the modal when the user clicks outside the modal
  useOnClickOutside(catalogueRef, handleCloseModal)


  const handleAddComponent = (item: any, id: string) => {
    const newComponent = {
      component: item.components.screenComponent,
      editComponent: item.components.editComponent,
      id: id,
      name: item.name,
    };

    // Add the component to the components array
    setComponents((prev) => {
      return [...prev, newComponent];
    });

    // Set the selected component to the new component if there is no selected component
    if (!selectedComponent) {
      setSelectedComponent(newComponent);
    }

    // Close the modal
    handleCloseModal();
  };

  return (
    <section className="w-full h-full bg-[#0004] flex justify-center items-start  fixed top-0">

        {/* Catalogue */}
      <div ref={catalogueRef} className="min-w-[600px] w-2/5 px-4 py-4 bg-stone-100 rounded-xl translate-y-40 flex flex-col gap-y-5">
        <div className="flex justify-between items-center">
          <h1 className="text-xl font-bold">Add field</h1>

          <span
            onClick={handleCloseModal}
            className="text-3xl duration-200 text-stone-500 hover:text-red-400 px-1 py-1 grid place-items-center cursor-pointer"
          >
            <IoIosClose />
          </span>
        </div>

        <div className="flex gap-x-10 gap-y-8">
          {data.map((item) => {
            const id = generateId();

            return (
              <button
                onClick={() => handleAddComponent(item, id)}
                key={item.name + id}
                className="flex gap-3 flex-nowrap items-center font-semibold whitespace-nowrap"
              >
                <span className="text-2xl">{item.icon}</span> {item.name}
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
