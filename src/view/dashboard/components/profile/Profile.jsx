import  React from "react";
import Tab from "react-bootstrap/Tab";
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tabs from "react-bootstrap/Tabs";
import "./Profie.css";
import Account from "./component/Account";
import Contact from "./component/Contact";

const Profile = () => {
  return (
    <div className="profile-container">
      {/* <Tabs
        defaultActiveKey="profile"
        
        className="mb-3"
      >
        <Tab eventKey="home" title="Account Setting" className="tab-item" style={{width: "100%"}}>
        <Account/>
        <h2>Tab content for ProfileTab content for ProfileTab content for ProfileTab content for ProfileTab content for Profile</h2>
        </Tab>
        <Tab eventKey="profile" title="Notification ">
          Tab content for Profile
        </Tab>
        <Tab eventKey="contact" title="Emergency Contact" >
          Tab content for Contact
        </Tab>
      </Tabs> */}

<Tab.Container id="left-tabs-example" defaultActiveKey="first">
      <Row>
        <Col sm={3}>
          <Nav variant="pills" className="flex-column">
            <Nav.Item>
              <Nav.Link eventKey="first">Account Setting</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="second">Notification</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="thrid">Emergency Contact</Nav.Link>
            </Nav.Item>
          </Nav>
        </Col>
        <Col md={9} >
          <Tab.Content>
            <Tab.Pane eventKey="first" style={{width: "100%"}}>
              <Account/>
              
              </Tab.Pane>
            <Tab.Pane eventKey="second" style={{width: "100%"}}>Second tab content</Tab.Pane>
            <Tab.Pane eventKey="thrid" style={{width: "100%"}}>
              <Contact/>
            </Tab.Pane>
          </Tab.Content>
        </Col>
      </Row>
    </Tab.Container>
    </div>
  );
};

export default Profile;
