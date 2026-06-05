import React, { useState, useEffect } from "react";

export default function PostMonitor() {
  const [searchTerm, setSearchTerm] = useState("");

  const defaultTitle = "Post Monitor";
  useEffect(() => {
    if (searchTerm.trim === "") {
      document.title = defaultTitle;
    } else {
      document.title = searchTerm;
    }
  }, [searchTerm]);
  return (
    <>
      <h1>Post Monitor</h1>
    </>
  );
}
