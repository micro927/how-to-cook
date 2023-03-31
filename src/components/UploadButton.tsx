import { useRef } from 'react';
import { css } from '@emotion/react'
import { useAppContext } from './AppContextProvider';
//////////////////////// ABORT //////////////////////////////////////////////////////////////////////////
const styles = css({}) // put css object here

function UploadButton() {
    const { selectedImage, readFileToImage } = useAppContext()
    const hiddenFileInput = useRef<HTMLInputElement>(null)

    const handleButtonClick = () => {
        hiddenFileInput.current?.click();
    };

    const handleInputChange = (event: React.FormEvent<HTMLInputElement>) => {
        console.log('it changed!')
        const target = event.target as HTMLInputElement
        const files = target.files ?? [];
        const fileUploaded = files[0];
        readFileToImage(fileUploaded);
    };
    return (
        <>
            <button
                onClick={handleButtonClick}
                type="button"
                className="
            bg-orange-400
            hover:bg-orange-300
            text-white 
            font-bold
            text-xl
            sm:text-3xl
            px-10
            py-10
            rounded-full
            shadow-2xl
            drop-shadow-2xl
            transition
            hover:scale-110
            sm:hover:scale-125
            hover:duration-300"
                css={styles}>
                Click/Drag your Food HERE
            </button>
            <input
                title='hiddenFileInput'
                type="file"
                // id={uploadId}
                ref={hiddenFileInput}
                onChange={handleInputChange}
                className='hidden'
                accept="image/*"
            />
        </>
    );
}

export default UploadButton;