import { Grid, TextField } from "@mui/material"
import { FC } from "react"

interface StepOneProps {
  name: any
  artist: any
  text: any
}

const StepOne: FC<StepOneProps> = ({name, artist, text}) => {
  return (
    <Grid container direction={"column"} padding={2} gap={5}>
      <TextField 
        {...name}
        label={"Название трека"}
      />

      <TextField
        {...artist}
        label={"Исполнитель"}
      />

      <TextField
        {...text}
        label={"Текст песни"}
        multiline
        rows={3}
      />
    </Grid>
  )
}
export default StepOne