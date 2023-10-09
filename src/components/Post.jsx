import {
  CheckBox,
  Favorite,
  FavoriteBorder,
  MoreVert,
  Share,
} from "@mui/icons-material";
import {
  Avatar,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Checkbox,
  IconButton,
  Typography,
} from "@mui/material";

export function Post() {
  return (
    <Card sx={{ marginBottom: "24px" }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: "red" }} arial-label="recipe">
            B
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVert></MoreVert>
          </IconButton>
        }
        title="Best Plan for a concrete Puzzle"
        subheader={new Date().toISOString().slice(0, 10)}
      />
      <CardMedia
        component="img"
        width={"20%"}
        image="1.jpeg"
        alt="bonfas Oluoch"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
          praesentium ullam provident optio consequuntur, similique neque
          ailquid non. Laborum, soluta!
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add-to-favorite">
          <CheckBox
            icon={<FavoriteBorder />}
            color="red"
            checkedIcon={<Favorite />}
          />
        </IconButton>
        <IconButton aria-label="add-to-favorite">
          <Share />
        </IconButton>
      </CardActions>
    </Card>
  );
}
