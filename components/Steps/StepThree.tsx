import { Button } from "@mui/material"
import { FC } from "react"
import { IFileUpload } from "../../types/track"
import FileUpload from "../FileUpload"

const StepThree: FC<IFileUpload> = ({ setFile, file }) => {
  return (
    <FileUpload setFile={setFile} accept="audio/*">
      {file ? null : (
        <Button fullWidth>
          Загрузить аудио
        </Button>
      )}


      {file && (
        <audio src={URL.createObjectURL(file)} controls />
      )}
    </FileUpload>
  )
}
export default StepThree