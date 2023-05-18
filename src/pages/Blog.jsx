import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
import ReactQuill from 'react-quill';
import "react-quill/dist/quill.snow.css";
// const config = {
//   buttons: ["bold", "italic", "link", "unlink", "underline", "source"],
// };

const modules = {
  toolbar: [
    [{headers: [1, 2, 3, 4, 5, 6, false]}],
    [{ font: [] }],
    [{ size: [] }],
    ["bold", "italic", "underline", "strike", "blockquote"],
    [
      {list: "ordered"},
      {list: "bullet"},
      {indent: "+1"},
      {indent: "-1"}
    ],
    ["link", "image", "video"]
  ]
}

const formats = [
  "header", "bold", "italic", "underline", "strike", "blockquote", "list", "bullet", "indent", "link", "image"
]

const Blog = () => {
  const [content, setContent] = useState("");

  return (
    <Box
      sx={{
        width: '85%',
        margin: '5rem auto',
        height: '60vh'
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
      <ReactQuill
        theme="snow"
        value={content}
        onChange={setContent}
        modules={modules}
        formats={formats}
        className="editor-input"
      />
    </Box>
  );
};

export default Blog;
