import { useState } from "react";
import "./App.css";
import PostMonitor from "./components/post.monitor";

function App() {
  return (
    <>
      <header></header>
      <main className="flex justify-center items-center flex-wrap">
        <h1>Post Monitor</h1>
        <PostMonitor />
      </main>
      <footer></footer>
    </>
  );
}

export default App;
