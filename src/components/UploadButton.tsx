import { css } from '@emotion/react'

function UploadButton() {

    const style = css({}) // put css object here

    return (
        <button
            type="button"
            className="
            bg-orange-400
            hover:bg-orange-300
            shadow-xl
            drop-shadow-lg
            transition
            text-white 
            font-bold
            text-3xl
            py-2
            px-4
            rounded-3xl"
            css={style}>
            Click/Drag your Food here <br /> to Upload
        </button>
    );
}

export default UploadButton;