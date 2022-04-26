import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Picture from "./Picture.jsx";

function Skills(props) {
  return (
    <section id="skills">
      <Container className="section-container">
        <Row>
          <Col className="skills-container">
            <h1 class="section-header">Skills</h1>
            <hr />
            <Picture class="skill-img" source="../images/big-3.png" desc="javascript" />
            <Picture class="skill-img" source="../images/java.png" desc="java" />
            <Picture class="skill-img" source="../images/spring-boot.png" desc="spring-boot" />
            <Picture class="skill-img" source="../images/react.png" desc="react" />
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Skills;
