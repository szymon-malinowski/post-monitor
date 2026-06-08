import { useState, useEffect } from "react";
import SearchInput from "./search.input";
import StatusArea from "./status.area";
import ExtraView from "./extra.view";

export default function PostMonitor() {
  const [searchTerm, setSearchTerm] = useState("");
  const [showExtraView, setShowExtraView] = useState(false);

  // Synchronizes the browser's document title with the state
  useEffect(() => {
    if (searchTerm.trim() === "") {
      document.title = "Post Monitor - Home";
    } else {
      document.title = `Search: ${searchTerm}`;
    }
  }, [searchTerm]);

  return (
    <div>
      <h1>Post Monitor</h1>

      {/* Search Input */}
      <SearchInput searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

      {/* Status Area */}
      <StatusArea searchTerm={searchTerm} />

      {/* Action Toggle Button */}
      <div>
        <button onClick={() => setShowExtraView(!showExtraView)}>
          {showExtraView ? "Hide" : "Show"} Extra View
        </button>
      </div>

      {/* Conditional Extra View */}
      {showExtraView && <ExtraView />}
    </div>
  );
}
