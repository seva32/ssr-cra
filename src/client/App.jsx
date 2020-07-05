import React from "react";
import { Card, Container } from "./App.style";
import SideBar from "./SideBarUI.jsx";
import { ReactComponent as Logo } from "./assets/img/logo.svg";

function App() {
  return (
    <Container>
      <SideBar>
        <h1>Hanging here...</h1>
        <Logo />
        <Card color="green">Im green!</Card>
        <Card color="blue">Red hot!</Card>
      </SideBar>
    </Container>
  );
}

export default App;
