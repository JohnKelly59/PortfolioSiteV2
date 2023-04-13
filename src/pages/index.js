import React, { useEffect } from "react";
import Typography from "@mui/material/Typography";
import { Engine } from "tsparticles-engine";
import Particles from "react-particles";
import { loadBigCirclesPreset } from "tsparticles-preset-big-circles";
import { Grid, Box, Stack } from "@mui/material";
import ProjectCard from "@/components/ProjectCard";
import projects from "../../projects.json";
import Zoom from "@mui/material/Zoom";

export default function Home() {
  const projectKeys = Object.keys(projects).slice(0, 3);
  function particlesInit(tsParticles) {
    console.log("init", tsParticles);

    loadBigCirclesPreset(tsParticles);
  }
  const options = {
    preset: "bigCircles",
    color: "#BFBFBF",
  };

  const coverPageStyles = {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f0f0f0",
    position: "fixed",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    zIndex: -1,
  };

  const contentStyles = {
    paddingTop: "100px", // adjust this value as needed
    paddingBottom: 40,
  };

  return (
    <>
      <Box style={coverPageStyles}>
        <Particles options={options} init={particlesInit} />
      </Box>
      <Box style={contentStyles}>
        <Typography variant="h1" align="center" color="white">
          Software Developer
        </Typography>
        <Stack sx={{ mt: 4 }} spacing={4}>
          <Grid
            container
            spacing={4}
            justifyContent="center"
            alignItems="center"
          >
            {projectKeys.map((key) => {
              const project = projects[key];
              return (
                <Grid item xs={12} sm={6} md={4} key={key}>
                  <Zoom in={true} timeout={800}>
                    <Grid container justifyContent="center" alignItems="center">
                      <ProjectCard project={project} />
                    </Grid>
                  </Zoom>
                </Grid>
              );
            })}
          </Grid>
        </Stack>
      </Box>
    </>
  );
}
