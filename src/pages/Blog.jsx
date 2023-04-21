import React, { useRef, useState } from "react";
import JoditEditor from "jodit-react";
import { Box, Typography } from "@mui/material";

// const config = {
//   buttons: ["bold", "italic", "link", "unlink", "underline", "source"],
// };

const Blog = () => {
  const [content, setContent] = useState("");
  const editor = useRef(null);

  return (
    <Box
      sx={{
        width: '85%',
        margin: '5rem auto'
      }}
    >
      <Typography
        sx={{
          m: '2rem auto',
          fontFamily: "'Oswald', sans-serif",
          textAlign: 'center'
        }}
        variant="h3"
      >
        Create a new blog
      </Typography>
      <JoditEditor
        ref={editor}
        value={content}
        // config={config}
        tabIndex={1}
        //   onBlur={(newContent) => getValue(newContent)}
        onChange={(newContent) => setContent(newContent)}
      />
      <Typography
        sx={{
          m: '2rem auto'
        }}
      >
        {content}
      </Typography>
    </Box>
  );
};

export default Blog;