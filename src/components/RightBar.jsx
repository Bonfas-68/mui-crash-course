import {
  Avatar,
  AvatarGroup,
  Box,
  ImageList,
  ImageListItem,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
  backdropClasses,
} from "@mui/material";
import React from "react";

function RightBar() {
  return (
    <Box
      flex={2}
      p={2}
      sx={{
        display: {
          xs: "none",
          sm: "block",
        },
      }}
    >
      <Box position={"fixed"} width={300}>
        <Typography variant="h6" fontWeight={100} mt={2} mb={2}>
          Online Users
        </Typography>
        <AvatarGroup max={7}>
          <Avatar src="5.jpeg" alt="Vite Svg" />
          <Avatar src="vite.svg" alt="Vite Svg" />
          <Avatar src="2.jpeg" alt="Vite Svg" />
          <Avatar src="4.jpeg" alt="Vite Svg" />
          <Avatar src="vite.svg" alt="Vite Svg" />
          <Avatar src="1.jpeg" alt="Vite Svg" />
          <Avatar src="2.jpeg" alt="Vite Svg" />
          <Avatar src="4.jpeg" alt="Vite Svg" />
          <Avatar src="vite.svg" alt="Vite Svg" />
          <Avatar src="1.jpeg" alt="Vite Svg" />
        </AvatarGroup>
        <Typography variant="h6" fontWeight={100} mt={2} mb={2}>
          Latest Photos
        </Typography>
        <ImageList cols={3} rowHeight={100} gap={5}>
          <ImageListItem>
            <img src="2.jpeg" alt="vite image" />
          </ImageListItem>
          <ImageListItem>
            <img src="4.jpeg" alt="vite image" />
          </ImageListItem>
          <ImageListItem>
            <img src="3.jpeg" alt="vite image" />
          </ImageListItem>
        </ImageList>

        <Typography variant="h6" fontWeight={100} mt={2} mb={2}>
          Latest Conversations
        </Typography>
        <List
          sx={{
            width: "100%",
            maxWidth: 360,
            bgcolor: "background.paper",
          }}
        >
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="bonfas" src="6.jpeg" />
            </ListItemAvatar>
            <ListItemText
              primary="Cool dance for mega deeds"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    To bondo Aloo Jenny
                  </Typography>
                  {
                    " -Was to come for the music but e meet later in the mega long run love you "
                  }
                </React.Fragment>
              }
            ></ListItemText>
          </ListItem>
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="bonfas" src="2.jpeg" />
            </ListItemAvatar>
            <ListItemText
              primary="Cool dance for mega deeds"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    To bondo Aloo Jenny
                  </Typography>
                  {
                    " -Was to come for the music but e meet later in the mega long run love you "
                  }
                </React.Fragment>
              }
            ></ListItemText>
          </ListItem>
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="bonfas" src="3.jpeg" />
            </ListItemAvatar>
            <ListItemText
              primary="Cool dance for mega deeds"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    To bondo Aloo Jenny
                  </Typography>
                  {
                    " -Was to come for the music but e meet later in the mega long run love you "
                  }
                </React.Fragment>
              }
            ></ListItemText>
          </ListItem>
        </List>
      </Box>
    </Box>
  );
}

export default RightBar;
