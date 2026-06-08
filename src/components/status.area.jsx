import React from "react";

export default function StatusArea({ searchTerm }) {
  return (
    <div>
      <p>
        <strong>Current Search Term:</strong>{" "}
        {searchTerm ? <span>{searchTerm}</span> : <em>None</em>}
      </p>
    </div>
  );
}
