import React from 'react';
import { useAtom } from 'jotai';
import { EmailScreenAtom } from '../../../lib/store';
import TextInputField from '../../TextInputField';

function Edit() {


    const [EmailScreenState, setEmailScreenState] = useAtom(EmailScreenAtom);

    // Handle on change for title
    const handleOnChangeForTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmailScreenState((prev) => {
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
        setEmailScreenState((prev) => {
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
        setEmailScreenState((prev) => {
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
            <p className='text-xs text-stone-600 pl-1' >Email</p>
            {/* Tile */}
            <TextInputField label='Title' placeholder='Welcome' value={EmailScreenState.content.title} onChange={handleOnChangeForTitle} key={"Title text"}/>

            {/* Descrtiption */}

            <TextInputField label='Description' placeholder='Welcome' value={EmailScreenState.content.description} onChange={handleOnChangeForDescription} key={"Description text"}/>
           
        </div>
    );
}




export default Edit;


