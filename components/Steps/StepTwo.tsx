import { Button } from "@mui/material"
import Image from "next/image"
import { FC } from "react"
import { IFileUpload } from "../../types/track"
import FileUpload from "../FileUpload"

const StepTwo: FC<IFileUpload> = ({ setFile, file }) => {
    return (
        <FileUpload setFile={setFile} accept="image/*">
            {file ? null : (
                <Button fullWidth>
                    Загрузить изображение
                </Button>
            )}


            {file && (
                <Image
                    height={200}
                    width={200}
                    src={URL.createObjectURL(file)}
                    alt="audio"
                />
            )}
        </FileUpload>
    )
}
export default StepTwo