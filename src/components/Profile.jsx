import React from "react";
import {
  Button,
  Card,
  CardActions,
  IconButton,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar,
  ListItemSecondaryAction,
} from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import {
  AccountCircle as AccountCircleIcon,
  PermIdentity as PermIdentityIcon,
  Email as EmailIcon,
  PhoneAndroid as PhoneAndroidIcon,
  VpnKey as PasswordIcon,
  Edit as EditIcon,
} from "@mui/icons-material";

const cardTheme = createTheme({
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: "#4477CE",
        },
      },
    },
  },
});
const card2Theme = createTheme({
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: "#35155d",
          color: "white",
          margin: "1rem",
          padding: "1rem",
        },
      },
    },
  },
});

const Profile = () => {
  return (
    <div className="profilePage">
      <h1>Profile</h1>
      <ThemeProvider theme={cardTheme}>
        <Card className="profileCard" variant={"elevation"}>
          <div>
            <IconButton edge="end" aria-label="edit">
              <AccountCircleIcon sx={{ fontSize: "23rem", color: "white" }} />
            </IconButton>
            <List
              sx={{
                width: "80%",
              }}
            >
              <ListItem>
                <ListItemAvatar>
                  <Avatar sx={{ backgroundColor: "white", color: "black" }}>
                    <PermIdentityIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText
                  primary="Name"
                  secondary="Example Name"
                  primaryTypographyProps={{ sx: { color: "black" } }}
                  secondaryTypographyProps={{ sx: { color: "black" } }}
                />
                <ListItemSecondaryAction>
                  <IconButton edge="end" aria-label="edit">
                    <EditIcon sx={{ color: "black" }} />
                  </IconButton>
                </ListItemSecondaryAction>
              </ListItem>
            </List>
          </div>
          <hr />
          <ThemeProvider theme={card2Theme}>
            <Card variant={"elevation"} style={{ position: "relative" }}>
              <List
                sx={{
                  width: "100%",
                }}
              >
                <ListItem>
                  <ListItemAvatar>
                    <Avatar sx={{ backgroundColor: "black" }}>
                      <EmailIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary="Email"
                    secondary="email@example.com"
                    secondaryTypographyProps={{ sx: { color: "white" } }}
                  />
                  <ListItemSecondaryAction>
                    <IconButton edge="end" aria-label="edit">
                      <EditIcon sx={{ color: "white" }} />
                    </IconButton>
                  </ListItemSecondaryAction>
                </ListItem>
                <ListItem>
                  <ListItemAvatar>
                    <Avatar sx={{ backgroundColor: "black" }}>
                      <PhoneAndroidIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary="Mobile No."
                    secondary="+91XXXXXXXXXX"
                    secondaryTypographyProps={{ sx: { color: "white" } }}
                  />
                  <ListItemSecondaryAction>
                    <IconButton edge="end" aria-label="edit">
                      <EditIcon sx={{ color: "white" }} />
                    </IconButton>
                  </ListItemSecondaryAction>
                </ListItem>
                <ListItem>
                  <ListItemAvatar>
                    <Avatar sx={{ backgroundColor: "black" }}>
                      <PasswordIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary="Password"
                    secondary="********"
                    secondaryTypographyProps={{ sx: { color: "white" } }}
                  />
                  <ListItemSecondaryAction>
                    <IconButton edge="end" aria-label="edit">
                      <EditIcon sx={{ color: "white" }} />
                    </IconButton>
                  </ListItemSecondaryAction>
                </ListItem>
              </List>
              <CardActions sx={{ justifyContent: "flex-end" }}>
                <Button
                  color="primary"
                  variant={"contained"}
                  style={{
                    position: "absolute",
                    bottom: "1rem",
                    right: "1rem",
                  }}
                >
                  Save
                </Button>
              </CardActions>
            </Card>
          </ThemeProvider>
        </Card>
      </ThemeProvider>
    </div>
  );
};

export default Profile;
