import React from 'react';
import { useAtom } from 'jotai';
import { welcomeScreenAtom } from '../../../lib/store';
import TextInputField from '../../TextInputField';

function Edit() {


    const [welcomeScreenState, setWelcomeScreenState] = useAtom(welcomeScreenAtom);

    // Handle on change for title
    const handleOnChangeForTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
        setWelcomeScreenState((prev) => {
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
        setWelcomeScreenState((prev) => {
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
        setWelcomeScreenState((prev) => {
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
            {/* Tile */}
            <TextInputField label='Title' placeholder='Welcome' value={welcomeScreenState.content.title} onChange={handleOnChangeForTitle} key={"Title text"}/>

            {/* Descrtiption */}

            <TextInputField label='Description' placeholder='Welcome' value={welcomeScreenState.content.description} onChange={handleOnChangeForDescription} key={"Description text"}/>


            {/* Button text */}
            <TextInputField label='ButtonText' placeholder='Welcome' value={welcomeScreenState.content.buttonText} onChange={handleOnChangeForButtonText} key={"Button text"}/>
        </div>
    );
}




export default Edit;


