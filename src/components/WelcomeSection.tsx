import { useState } from 'react'
import UploadButton from './UploadButton'

type WelcomeSectionProps = {
    dataIndex: number
    dataStatus: "active" | "inactive"
    isUploaded: boolean
}

function WelcomeSection(props: WelcomeSectionProps) {
    const { dataIndex, dataStatus } = props
    const [selectedImage, setSelectedImage] = useState<any>(null)
    function handleImage(imageFile: File) {
        let reader = new FileReader();
        reader.readAsDataURL(imageFile);
        reader.onload = r => {
            setSelectedImage(r.target?.result)
        };
    }
    return (
        <section data-index={dataIndex}>
            <UploadButton onImageUploaded={(imageFile) => handleImage(imageFile)} />
            {selectedImage && <img title='selectedImage' src={selectedImage} className="w-auto max-h-screen" />}
        </section >
    );
}

export default WelcomeSection;