import { Box, Container, Grid2, styled, Typography } from "@mui/material"
import DownloadIcon from '@mui/icons-material/Download';
import EmailIcon from '@mui/icons-material/Email';
import StyledButton from "../../../../components/StyledButton/StyledButton";
import { AnimatedBackground } from "../../../../components/AnimatedBackground/AnimatedBackground";

const Hero = () => {

    const StyledHero = styled("div")(({ theme }) => ({
        backgroundColor: theme.palette.primary.main,
        height: "100vh",
        display: "flex",
        alignItems: "center"
    }))

    return (
        <>
            <StyledHero>
                <Container maxWidth="lg">
                    <Grid2>
                        <Grid2 size={{ xs: 12, md: 7 }}>
                            <Box position="relative">
                            <Grid2>
                                <Box position="absolute" width={"60%"} top={-200} right={180}>
                                    <img src="" alt="" />
                                    <AnimatedBackground />
                                </Box>
                                </Grid2>
                                <Grid2 justifyContent="center">
                                <Box position="relative" >
                                    <Typography color="primary.contrastText" variant="h1" textAlign="center" pb={2}>Nicholas Gomes</Typography>
                                    <Typography color="primary.contrastText" variant="h2" textAlign="center">I'm a Copmuter Engineer student</Typography>
                                    <Grid2 container display="flex" justifyContent="center" spacing={3}  pt={3}>
                                        <Grid2 size={{ xs: 12, md: 4 }} display="flex" justifyContent="center">
                                            <StyledButton>
                                                <DownloadIcon />
                                                <Typography>Download CV</Typography>
                                            </StyledButton>
                                        </Grid2>
                                        <Grid2 size={{ xs: 12, md: 4 }} display="flex" justifyContent="center">
                                            <StyledButton>
                                                <EmailIcon />
                                                <Typography>Contact me</Typography>
                                            </StyledButton>
                                        </Grid2>
                                    </Grid2>
                                </Box>
                                </Grid2>
                            </Box>
                        </Grid2>
                    </Grid2>
                </Container>
            </StyledHero>
        </>
    )
}

export default Hero
