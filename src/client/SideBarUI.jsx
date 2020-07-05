import React from "react";
import { Header, Icon, Image, Menu, Segment, Sidebar } from "semantic-ui-react";
import PropTypes from "prop-types";
// import { Container } from "./App.style";

const { Pushable, Pusher } = Sidebar;
const { Item } = Menu;

const SidebarExampleVisible = ({ children }) => (
  // <Container>
  <Pushable as={Segment} style={{ width: "100%" }}>
    <Sidebar
      as={Menu}
      animation="overlay"
      icon="labeled"
      inverted
      vertical
      visible
      width="thin"
    >
      <Item as="a">
        <Icon name="home" />
        Home
      </Item>
      <Item as="a">
        <Icon name="gamepad" />
        Games
      </Item>
      <Item as="a">
        <Icon name="camera" />
        Channels
      </Item>
    </Sidebar>

    <Pusher>
      <Segment basic>
        <Header as="h3">Application Content</Header>
        {children}
        <Image src="/images/wireframe/paragraph.png" />
      </Segment>
    </Pusher>
  </Pushable>
  // </Container>
);

SidebarExampleVisible.propTypes = {
  children: PropTypes.node.isRequired,
};

export default SidebarExampleVisible;
