import "./styles.css";
import React from "react";
import SortableTree from "./components/SortableTree";

const Wrapper = ({ children }: any) => (
  <div
    style={{
      maxWidth: 600,
      padding: 10,
      margin: "0 auto",
      marginTop: "10%",
    }}
  >
    {children}
  </div>
);

export default function App() {
  return (
    <div className="App">
      <Wrapper>
        <SortableTree indicator />
      </Wrapper>
    </div>
  );
}
