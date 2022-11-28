import { FC } from "react"

interface TrackProgressProps {
    left: number
    right: number
    onChange: (e: any) => void
    style?: object
}

const TrackProgress: FC<TrackProgressProps> = ({ left, right, onChange, style }) => {
    return (
        <div style={{ display: "flex" }}>
            <input
                type="range"
                min={left}
                max={right}
                value={left}
                onChange={onChange}
                style={style}
            />

            <div>
                {left} / {right}
            </div>
        </div>
    )
}
export default TrackProgress