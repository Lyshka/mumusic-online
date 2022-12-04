import { Pause, PlayArrow, VolumeUp } from "@mui/icons-material"
import { Grid, IconButton } from "@mui/material"
import { useEffect } from "react"
import { useActions } from "../hooks/useActions"
import { useTypedSelector } from "../hooks/useTypedSelector"
import styles from "../styles/Player.module.scss"
import { ITrack } from "../types/track"
import TrackProgress from "./TrackProgress"

export let audio: HTMLAudioElement

const Player = () => {
    const { pause, volume, active, currentTime, duration } = useTypedSelector(state => state.player)
    const { pauseTrack, playTrack, setDuration, setVolume, setCurrentTime, setActiveTrack } = useActions()

    useEffect(() => {
        if (!audio) {
            audio = new Audio()
        } else {
            setAudio()
            play()
        }
    }, [active])

    const setAudio = () => {
        if(active) {
            audio.src = "http://localhost:5000/" + active.audio
            audio.volume = volume / 100

            audio.onloadedmetadata = () => {
                setDuration(Math.ceil(audio.duration))
            }

            audio.ontimeupdate = () => {
                setCurrentTime(Math.ceil(audio.currentTime))
            }
        }
    }

    const play = () => {
        if (pause) {
            playTrack()
            audio.play()
        }
        else {
            pauseTrack()
            audio.pause()
        }

    }

    const changeVolume = (e: React.ChangeEvent<HTMLInputElement>) => {
        setVolume(e.target.valueAsNumber)
        audio.volume = e.target.valueAsNumber / 100
    }

    const changeCurrentTime = (e: React.ChangeEvent<HTMLInputElement>) => {
            setCurrentTime(e.target.valueAsNumber)
            audio.currentTime = e.target.valueAsNumber
    }

    if(!active) {
        return null
    }

    return (
        <div className={styles.player}>
            <IconButton onClick={play} style={{ marginRight: "15px" }}>
                {!pause ? <Pause /> : <PlayArrow />}
            </IconButton>

            <Grid container direction="column" style={{ width: 200, margin: "0 20px" }}>
                <div>
                    {active?.name}
                </div>

                <div style={{ fontSize: 12, color: "gray" }}>
                    {active?.artist}
                </div>
            </Grid>

            <TrackProgress left={currentTime} right={duration} onChange={changeCurrentTime} style={{ minWidth: 800 }} progress={true}/>

            <VolumeUp style={{ marginLeft: "auto" }} />

            <TrackProgress left={volume} right={100} onChange={changeVolume} />
        </div>
    )
}
export default Player