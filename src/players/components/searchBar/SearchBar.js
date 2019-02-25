import React from 'react';
import { connect } from 'react-redux';
import { func } from 'prop-types';
import searchAction from '../../actions/searchActions';
import { PLAYER_POSITIONS } from '../../constants/constants';

export class SearchBar extends React.Component {
  state = {
    name: '',
    position: '',
    age: ''
  };

  renderOption = position => {
    const { value } = position;
    return (
      <option value={value} key={value}>{value}</option>
    );
  }

  render() {
    //const { name, position, age } = this.state;
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light pl-0" >
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <input className="form-control mr-sm-2" type="Player Name" placeholder="Player Name" aria-label="Name" onChange={this.handleInput}></input>
            </li>
            <li className="nav-item dropdown show ml-4">
              <div className="form-group">
                <select className="form-control" multiple="" onChange={this.handleInput}>
                  {PLAYER_POSITIONS.map(this.renderOption)}
                </select>
              </div>
            </li>
            <li className="nav-item ml-4">
              <input className="form-control mr-sm-2" type="search" placeholder="Age" aria-label="Age" onChange={this.handleInput} min={18} max={40}></input>
            </li>
            <li className="nav-item ml-8">
              <button className="btn btn-outline-success my-2 my-sm-0" type="submit" onClick={this.handleSubmit}>Search</button>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

SearchBar.propTypes = {
  searchAction: func.isRequired
}

export default connect(null, { searchAction })(SearchBar);