import React, { useState, useEffect } from "react";
import SearchBar from "./search.bar";

export default function PostMonitor() {
  const [searchTerm, setSearchTerm] = useState("");

  const defaultTitle = "Post Monitor";
  document.title = defaultTitle;
  useEffect(() => {
    if (searchTerm.trim() === "") {
      document.title = defaultTitle;
    } else {
      document.title = searchTerm;
    }
  }, [searchTerm]);

  return (
    <>
      <h1>Post Monitor</h1>
      <SearchBar searchTerm={searchTerm} onChange={setSearchTerm} />
    </>
  );
}
