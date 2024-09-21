import React, {useState} from 'react';
import {useAtom} from 'jotai';
import {componentsStore} from '../lib/store';
import ComponentChip from "./ComponentChip";
import { createPortal } from 'react-dom';
import ComponentCatalogue from './ComponentCatalogue';

function Minimap() {
    const [components, setComponents] = useAtom(componentsStore);

    const [showModal, setShowModal] = useState<boolean>(false);

    const handleCloseModal = () => {
        setShowModal(false);
    }

    return (
       <>
        <div className="flex flex-col gap-y-5 p-3 rounded-2xl border border-black">
            <span className="flex flex-col gap-2">
                <h6 className="font-semibold text-xl">Steps</h6>
            <p className="text-sm">The steps users will take to complete the form</p>
            </span>

            {/*  Components */}
            {components.length > 0 && <div className="flex flex-col gap-y-2">
                {components.map((comp) => {
                    return (
                        <ComponentChip key={comp.id} comp={comp}/>
                    )
                })}
            </div>}

            {/*    Add component button*/}
            <button onClick={() => {
                setShowModal(true);
            }}
             className="bg-black text-white py-2 px-4 rounded-md">Add component
            </button>

        </div>

        {
            showModal && createPortal(
                <ComponentCatalogue handleCloseModal={handleCloseModal}/>,
                document.body
            )
        }
       </>
    );
}

export default Minimap;

