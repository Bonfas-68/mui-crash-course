import { Box } from "@mui/material";
import { Post } from "./Post";
import AddPost from "./AddPost";

function Feed() {
  return (
    <Box flex={4} p={2}>
      <AddPost />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
    </Box>
  );
}

export default Feed;
