import * as React from "react";
import { useRouter } from "next/router";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import DesignServicesIcon from "@mui/icons-material/DesignServices";
import Avatar from "@mui/material/Avatar";
import ConnectWithoutContactIcon from "@mui/icons-material/ConnectWithoutContact";
import HomeIcon from "@mui/icons-material/Home";
import AppsIcon from "@mui/icons-material/Apps";
import Person2Icon from "@mui/icons-material/Person2";

const drawerWidth = 240;

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  })
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

export default function Navbar() {
  const router = useRouter();
  const sidebarInfo = [
    { title: "Home", icon: <HomeIcon />, link: "/" },
    {
      title: "Projects",
      icon: <AppsIcon />,
      link: "/projects",
    },
    {
      title: "Skills",
      icon: <DesignServicesIcon />,
      link: "/skills",
    },
    {
      title: "About Me",
      icon: <Person2Icon />,
      link: "/aboutme",
    },
    {
      title: "Contact",
      icon: <ConnectWithoutContactIcon />,
      link: "/contact",
    },
  ];
  const [state, setState] = React.useState({
    left: false,
  });
  const [anchorEl, setAnchorEl] = React.useState(null);

  const toggleDrawer = (anchor, open) => (event) => {
    if ((anchor = true)) {
      anchor = "left";
    }
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setState({ ...state, [anchor]: open });
  };

  const drawerItemSelect = (route) => {
    toggleDrawer("left", false);
    router.push(route);
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const list = (anchor) => (
    <Box
      sx={{ width: 250 }}
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <Divider />
      <List>
        {sidebarInfo.map((info, index) => (
          <ListItem key={index} disablePadding>
            <ListItemButton onClick={() => drawerItemSelect(info.link)}>
              <ListItemIcon>{info.icon}</ListItemIcon>
              <ListItemText primary={info.title} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
    </Box>
  );

  return (
    <>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar position="static" sx={{ backgroundColor: "black" }}>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={toggleDrawer("left", true)}
              edge="start"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ flexGrow: 1 }}
            >
              John Kelly
            </Typography>
            <div>
              <IconButton
                size="large"
                aria-label="make an appointment"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <Avatar
                  aria-controls="menu-appbar"
                  sx={{ width: 64, height: 64, mr: 0 }}
                  alt="John Kelly"
                  src="https://media.licdn.com/dms/image/C4D03AQHJC4rHEGcZiQ/profile-displayphoto-shrink_800_800/0/1634426410117?e=2147483647&v=beta&t=B1xi8pOt_edeGuhX30AtIC71mC3REiGYLpfsqeQQFBI"
                />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorEl)}
                onClose={handleMenuClose}
              >
                <MenuItem
                  onClick={() => {
                    handleMenuClose, router.push("/");
                  }}
                >
                  Home
                </MenuItem>
                <MenuItem
                  onClick={() => {
                    handleMenuClose, router.push("/contact");
                  }}
                >
                  Contact
                </MenuItem>
              </Menu>
            </div>
          </Toolbar>
        </AppBar>
      </Box>
      <Drawer
        anchor="left"
        open={state.left}
        onClose={toggleDrawer("left", true)}
      >
        <DrawerHeader sx={{ display: "flex", justifyContent: "flex-start" }}>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ marginRight: "auto" }}
          >
            John Kelly
          </Typography>
          <IconButton onClick={toggleDrawer("left", false)}>
            <ChevronLeftIcon />
          </IconButton>
        </DrawerHeader>
        {list(state.left)}
      </Drawer>
    </>
  );
}
