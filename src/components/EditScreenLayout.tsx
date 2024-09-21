import { useSetAtom } from "jotai";
import { selectedComponentAtom } from "../lib/store";
import { IoMdSettings } from "react-icons/io";
import { CgCloseR } from "react-icons/cg";

export default function EditScreenLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const setSelectedComponent = useSetAtom(selectedComponentAtom);

  const handleClose = () => {
    setSelectedComponent(null);
  };

  return (
    <div className="flex flex-col">
      <div className="flex justify-between items-center">
        <span className="flex flex-nowrap gap-x-3 items-center font-bold">
          <IoMdSettings /> <p>Settings</p>
        </span>

        <CgCloseR
          onClick={handleClose}
          className="text-2xl hover:text-rose-400 duration-300"
        />
      </div>
      <>{children}</>
    </div>
  );
}
