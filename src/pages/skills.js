import React from "react";
import Typography from "@mui/material/Typography";
import { loadBigCirclesPreset } from "tsparticles-preset-big-circles";
import {
  Grid,
  Box,
  Paper,
  List,
  ListItem,
  ListItemText,
  ListItemButton,
  Divider,
} from "@mui/material";
import Zoom from "@mui/material/Zoom";

export default function Skills() {
  const skills = [
    "AWS",
    "AWS AMplify",
    "AWS CodeBuild",
    "AWS CodePipeline",
    "AWS CloudWatch",
    "AWS IAMS",
    "AWS SNS",
    "Bootstrap",
    "Brivity",
    "CSS",
    "Composer",
    "DBeaver",
    "Express.js",
    "Firepoint",
    "Follow Up Boss",
    "GitHub",
    "Heroku",
    "Heroku Add-ons",
    "Heroku Buildpacks",
    "Heroku CLI",
    "Heroku Dashboard",
    "Heroku Dynos",
    "HTML",
    "JavaScript",
    "JIRA",
    "Linux",
    "Livia",
    "MariaDB",
    "Material UI",
    "Microsoft 365",
    "MongoDB",
    "MongoDB Atlas",
    "Next.js",
    "Node.js",
    "NVM",
    "Opcity",
    "PHP",
    "Passport.js",
    "PostegreSQL",
    "Postman",
    "React",
    "React Native",
    "RapidAPI",
    "Salesforce",
    "SCSS",
    "Sierra Interactive",
    "SISU",
    "SQL",
    "SQLite",
    "Showcase IDX",
    "Slack",
    "Stripe",
    "TypeScript",
    "Ubuntu",
    "VIM",
    "VStudio Code",
    "Windows",
    "WSL",
    "WSL2",
    "WordPress",
    "Zillow",
  ];

  const contentStyles = {
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    paddingTop: "100px",
    backgroundColor: "#A0EC70",
    paddingBottom: 40,
  };

  const SkillsList = () => {
    return (
      <List
        sx={{
          width: "100%",
          maxWidth: 360,
          bgcolor: "background.paper",
          position: "relative",
          overflow: "auto",
          maxHeight: 500,
          "& ul": { padding: 0 },
        }}
      >
        {skills.map((skill) => (
          <>
            <ListItem key={skill} disablePadding>
              <ListItemButton>
                <ListItemText primary={skill} />
              </ListItemButton>
            </ListItem>
            <Divider />
          </>
        ))}
      </List>
    );
  };

  return (
    <>
      <Box style={contentStyles}>
        <Typography variant="h1" align="center" color="#5BC5FF">
          Skills
        </Typography>
        <Zoom in={true} timeout={800}>
            <Paper elevation={10} style={{ padding: "2rem", maxWidth: "80vh", margin: "0 auto"  }}>
              <Grid
                container
                spacing={4}
                justifyContent="center"
                alignItems="center"
              >
                <SkillsList />
              </Grid>
            </Paper>
        </Zoom>
      </Box>
    </>
  );
}
