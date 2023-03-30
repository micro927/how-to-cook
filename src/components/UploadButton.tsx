import { useRef } from 'react';
import { css } from '@emotion/react'

type UploadButtonProps = {
    onImageUploaded: (params: any) => void
}

const styles = css({}) // put css object here

function UploadButton(props: UploadButtonProps) {
    const { onImageUploaded } = props

    const hiddenFileInput = useRef<HTMLInputElement>(null)

    const handleClick = () => {
        hiddenFileInput.current?.click();
    };

    const handleChange = (event: React.FormEvent<HTMLInputElement>) => {
        console.log('it changed!')
        const fileReader = new FileReader();

        const target = event.target as HTMLInputElement
        const files = target.files ?? [];
        const fileUploaded = files[0];
        onImageUploaded(fileUploaded);
    };
    return (
        <>
            <button
                onClick={handleClick}
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
                onChange={handleChange}
                className='hidden'
                accept="image/*"
            />
        </>
    );
}

export default UploadButton;