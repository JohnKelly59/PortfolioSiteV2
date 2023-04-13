import React, { useEffect } from "react";
import Typography from "@mui/material/Typography";

import { loadBigCirclesPreset } from "tsparticles-preset-big-circles";
import { Grid, Box, Stack } from "@mui/material";
import ProjectCard from "@/components/ProjectCard";
import projects from "../../projects.json";
import Zoom from "@mui/material/Zoom";

export default function Projects() {
  const projectKeys = Object.keys(projects);
  const contentStyles = {
    paddingTop: "100px",
    backgroundColor: "#5BC5FF",
    paddingBottom: 40,
  };

  return (
    <>
      <Box style={contentStyles}>
        <Typography variant="h1" align="center" color="#A0EC70">
          Projects
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
