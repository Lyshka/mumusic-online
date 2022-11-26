import { Grid, TextField } from "@mui/material"

const StepOne = () => {
  return (
    <Grid container direction={"column"} padding={2} gap={5}>
      <TextField 
        label={"Название трека"}
      />

      <TextField
        label={"Исполнитель"}
      />

      <TextField
        label={"Текст песни"}
        multiline
        rows={3}
      />
    </Grid>
  )
}
export default StepOne