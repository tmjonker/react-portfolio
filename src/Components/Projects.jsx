import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Picture from "./Picture";

function Projects(props) {
  return (
    <section id="projects">
      <Container>
        <Row>
          <Col className="section-container">
            <h1 class="section-header">Projects</h1>
            <hr />
            <Carousel className="carousel">
              <Carousel.Item>
                <Picture
                  class="d-block w-40 project-img"
                  source="../images/password_manager.png"
                  desc="password-manager"
                />
                
              </Carousel.Item>
              <Carousel.Item>
              <Picture
                  class="d-block w-40 project-img"
                  source="../images/pong.png"
                  desc="password-manager"
                />

              </Carousel.Item>
              <Carousel.Item>
              <Picture
                  class="d-block w-40 project-img"
                  source="../images/food2u.png"
                  desc="password-manager"
                />

              </Carousel.Item>
            </Carousel>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Projects;
