import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import GitHubIcon from "@mui/icons-material/GitHub";
import AppleIcon from "@mui/icons-material/Apple";
import OpenInBrowserIcon from "@mui/icons-material/OpenInBrowser";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

const ProjectCard = (props) => {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ maxWidth: 500 }}>
      <CardHeader
        title={props.project.title}
        subheader={props.project.subheader}
      />
      <CardMedia
        component="img"
        sx={{
          height: "300px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
        image={props.project.image}
        alt={props.project.title}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {props.project.tools}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        {props.project.button === "Visit Site" ? (
          <IconButton
            aria-label="Go to Site"
            onClick={() => window.open(props.project.url, "_blank")}
          >
            <OpenInBrowserIcon />
          </IconButton>
        ) : (
          <IconButton
            aria-label="Download App"
            onClick={() => window.open(props.project.url, "_blank")}
          >
            <AppleIcon />
          </IconButton>
        )}

        <IconButton
          aria-label="view code"
          onClick={() => window.open(props.project.code, "_blank")}
        >
          <GitHubIcon />
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Method:</Typography>
          <Typography paragraph>{props.project.dropdown}</Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
};

export default ProjectCard;
