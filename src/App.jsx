import { useState } from "react";
import "./App.css";
import PostMonitor from "./components/post.monitor";

function App() {
  return (
    <>
      <header></header>
      <main className="flex flex-col justify-center items-center flex-wrap">
        <PostMonitor />
      </main>
      <footer></footer>
    </>
  );
}

export default App;
