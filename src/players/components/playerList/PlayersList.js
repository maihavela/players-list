import React from "react";
import { connect } from "react-redux";
import { fetchPlayers } from "../../actions/playersActions";
import  moment  from 'moment';
import { arrayOf, number, shape, string } from 'prop-types';

class PlayersList extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchPlayers());
  }

  render() {
    const { error, loading, players } = this.props;

    if (error) {
      return <div>Error! {error.message}</div>;
    }

    if (loading) {
      return <div>Loading...</div>;
    }

    return (
      <table class="table table-striped">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Position</th>
            <th scope="col">Nationality</th>
            <th scope="col">Age</th>
          </tr>
        </thead>
        <tbody>
          {players.map(player => (
            <tr>
              <th>{player.name}</th>
              <th>{player.position}</th>
              <th>{player.nationality}</th>
              <th>{moment().diff(player.dateOfBirth, 'years')}</th>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}
PlayersList.propTypes = {
  players: arrayOf(shape({
    name: string.isRequired,
    position: string.isRequired,
    age: number.isRequired
  }))
};

const mapStateToProps = state => ({
  players: state.players.items,
  loading: state.players.loading,
  error: state.players.error
});

//export default PlayersList;
export default connect(mapStateToProps)(PlayersList);
/*

import React from 'react';
import { arrayOf, number, shape, string } from 'prop-types';

const renderPlayer = player => {
  const { name, nationality, position, age } = player;

  return (
    <tr key={name}>
      <td>{name}</td>
      <td>{position}</td>
      <td>{nationality}</td>
      <td>{age}</td>
    </tr>
  );
};

const PlayerList = props => {
  const { players } = props;

  return (
    <table className="table is-hoverable is-fullwidth is-narrow">
      <thead>
        <tr className='is-selected'>
          <th>Player</th>
          <th>Position</th>
          <th>Team</th>
          <th>Age</th>
        </tr>
      </thead>
      <tbody>
        {players.map(renderPlayer)}
      </tbody>
    </table>
  );
};

PlayerList.defaultProps = {};
PlayerList.propTypes = {
  players: arrayOf(shape({
    name: string.isRequired,
    position: string.isRequired,
    nationality: string.isRequired,
    age: number.isRequired
  }))
};

export default PlayerList;*/
