import React, { useEffect } from "react";
import Typography from "@mui/material/Typography";
import { loadBigCirclesPreset } from "tsparticles-preset-big-circles";
import { Box, Container, Paper } from "@mui/material";
import projects from "../../projects.json";
import Zoom from "@mui/material/Zoom";

export default function AboutMe() {
  const contentStyles = {
    height: "100vh",
    paddingTop: "100px",
    backgroundColor: "#FEEB75",
    paddingBottom: 40,
    overflowY: "auto"
  };

  return (
    <>
      <Box style={contentStyles}>
        <Typography variant="h1" align="center" color="#FF8283">
          About Me
        </Typography>
        <Zoom in={true} timeout={800}>
          <Container maxWidth="lg">
            <Paper elevation={10} style={{ padding: "2rem" }}>
              <Typography variant="h5" align="center">
                <p>
                  "My name is John Kelly, and I am a full stack developer. I
                  began coding during my Senior year of college. One day after
                  football practice, my fraternity brother and I had a serious
                  conversation. The conversation ended with me realizing that I
                  had a choice of either going to graduate school and continuing
                  a profession that I was not passionate about or developing a
                  new skill that I have been interested in for years. Needless
                  to say, I picked the latter and I’m so glad that I did.
                </p>
                <p>
                  Since I graduated college, I have been learning and
                  programming every day. My journey as a programmer began with
                  me pursuing Harvard’s CS50x certificate. After completing
                  Harvard’s 11-week course, I began and completed the App
                  Brewer’s full-stack web development course. Since then, I have
                  continued to learn a lot more about web development through
                  the cultivation of various projects and applications.{" "}
                </p>
                <p>
                  I love to code. My day is not successful until I learn
                  something new about programming or implement a new technology
                  into a solution. I like to compare programming to playing a
                  video game, Pacman to be specific. For example, each day I
                  learn something new or implement a new technology, I equate it
                  to the feeling of eating a power pellet in Pac-Man and
                  levelling up in the game. That determination and excitement to
                  continue to level up by deepening my understanding and
                  perfecting my craft really fuels my passion for programming
                  even more. I am eager and excited to enhance my knowledge and
                  strive towards becoming the best engineer I can be."
                </p>
              </Typography>
            </Paper>
          </Container>
        </Zoom>
      </Box>
    </>
  );
}
