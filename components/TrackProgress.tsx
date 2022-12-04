import moment from "moment"
import { FC } from "react"

interface TrackProgressProps {
    left: number
    right: number
    onChange: (e: any) => void
    style?: object
    progress?: boolean
}

const TrackProgress: FC<TrackProgressProps> = ({ left, right, onChange, style, progress }) => {
    return (
        <div style={{ display: "flex" }}>
            <input
                type="range"
                min={0}
                max={right}
                value={left}
                onChange={onChange}
                style={style}
            />

            <div>
                {progress ? (
                    <div>
                        {moment.utc(left * 1000).format("mm:ss")}
                    </div>
                ) : (
                    <div>
                        {left} / {right}
                    </div>
                )}
            </div>
        </div>
    )
}
export default TrackProgress