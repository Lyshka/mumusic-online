import { Card, Container, Grid, Step, StepLabel, Stepper } from "@mui/material"
import { FC } from "react"

interface StepWrapperProps {
    children: React.ReactNode
    activeStep: number
}

const steps = ["Информация о треке", "Загрузка обложки", "Загрузка трека"]

const StepWrapper: FC<StepWrapperProps> = ({activeStep, children}) => {
  return (
    <Container>
        <Stepper activeStep={activeStep}>
            {steps.map((step, index) => (
                <Step key={index} completed={activeStep > index}>
                    <StepLabel>
                        {step}
                    </StepLabel>
                </Step>
            ))}
        </Stepper>

        <Grid container justifyContent={"center"} alignItems="center" style={{margin: "70px 0", height: 270}}>
            <Card style={{width: 600}}>
                {children}
            </Card>
        </Grid>
    </Container>
  )
}
export default StepWrapper