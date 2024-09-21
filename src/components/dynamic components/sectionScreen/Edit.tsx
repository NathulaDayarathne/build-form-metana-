import React from 'react';
import { useAtom } from 'jotai';
import { SectionScreenAtom } from '../../../lib/store';
import TextInputField from '../../TextInputField';

function Edit() {


    const [SectionScreenState, setSectionScreenState] = useAtom(SectionScreenAtom);

    // Handle on change for title
    const handleOnChangeForTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSectionScreenState((prev) => {
            return {
                ...prev,
                content: {
                    ...prev.content,
                    title: e.target.value
                }
            }
        })
    }

    const handleOnChangeForDescription = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSectionScreenState((prev) => {
            return {
                ...prev,
                content: {
                    ...prev.content,
                    description: e.target.value
                }
            }
        })
    }

    const handleOnChangeForButtonText = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSectionScreenState((prev) => {
            return {
                ...prev,
                content: {
                    ...prev.content,
                    buttonText: e.target.value
                }
            }
        })
    }


    return (
        <div >
            <p className='text-xs text-stone-600 pl-1' >Section</p>
            {/* Tile */}
            <TextInputField label='Title' placeholder='Welcome' value={SectionScreenState.content.title} onChange={handleOnChangeForTitle} key={"Title text"}/>

            {/* Descrtiption */}

            <TextInputField label='Description' placeholder='Welcome' value={SectionScreenState.content.description} onChange={handleOnChangeForDescription} key={"Description text"}/>
           
        </div>
    );
}




export default Edit;


