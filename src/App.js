import React, { Component } from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import PlayersList from "./players/components/playerList/PlayersList";
import Title from "./players/components/title/Title";
import SearchBar from "./players/components/searchBar/SearchBar";
import "bootstrap/dist/css/bootstrap.css";

class App extends Component {

  render() {
    return (
      <div className="App">
        <Container>
          <Row>
            <Col xs={4} md={8} lg={12}>
              <Title title={'Football Player Finder'} />
            </Col>
            <Col xs={4} md={8} lg={12}>
              <SearchBar />
            </Col>
            <Col xs={4} md={8} lg={12}>
              <PlayersList />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;