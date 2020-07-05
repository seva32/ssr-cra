import React from "react";
import { Header, Icon, Image, Menu, Segment, Sidebar } from "semantic-ui-react";
import PropTypes from "prop-types";
import { Container } from "./App.style";

const SidebarExampleVisible = ({ children }) => (
  <Container>
    <Sidebar.Pushable as={Segment} style={{ width: "100%" }}>
      <Sidebar
        as={Menu}
        animation="overlay"
        icon="labeled"
        inverted
        vertical
        visible
        width="thin"
      >
        <Menu.Item as="a">
          <Icon name="home" />
          Home
        </Menu.Item>
        <Menu.Item as="a">
          <Icon name="gamepad" />
          Games
        </Menu.Item>
        <Menu.Item as="a">
          <Icon name="camera" />
          Channels
        </Menu.Item>
      </Sidebar>

      <Sidebar.Pusher>
        <Segment basic>
          <Header as="h3">Application Content</Header>
          {children}
          <Image src="/images/wireframe/paragraph.png" />
        </Segment>
      </Sidebar.Pusher>
    </Sidebar.Pushable>
  </Container>
);

SidebarExampleVisible.propTypes = {
  children: PropTypes.node.isRequired,
};

export default SidebarExampleVisible;
