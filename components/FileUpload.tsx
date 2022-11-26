import { FC, ReactNode, useRef} from "react"

interface FileUploadProps {
    setFile: Function
    accept: string
    children: ReactNode
}

const FileUpload: FC<FileUploadProps> = ({ setFile, accept, children }) => {
    const ref = useRef<any>()

    const onChange = (e: any) => {
        const file = e.target.files[0]
        setFile(file)
    }

    return (
        <div onClick={() => ref.current?.click()} style={{ display: "flex", justifyContent: "center", alignItems: "end" }}>
            <input
                type="file"
                accept={accept}
                style={{ display: "none" }}
                ref={ref}
                onChange={onChange}
            />

            {children}
        </div>
    )
}
export default FileUpload