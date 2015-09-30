import React from 'react'
import axios from 'axios'
import { Router, Route } from 'react-router'
import StarshipsTable from './starship_table.jsx'
import TableFilters from './filters.jsx'
import StarshipInfo from './starship_info.jsx'

const getStarshipData = function getStarshipData(component, url) {
  axios
      .get(url)
      .then((response) => {
        let updatedStarships = component.state.starships.concat(response.data.results);
        component.setState({starships: updatedStarships});
        if (response.data.next) {
          getStarshipData(component, response.data.next);
        }
      })
      .catch((response) => {
        throw new Error(response);
      })
}

const StarWarsRouter = React.createClass({
  render() {
    return (
        <Router>
          <Route path="/" component={StarWarsIndex}/>
          <Route path="starship" component={StarshipInfo}/>
        </Router>
    )
  }
});

const StarWarsIndex = React.createClass({
  childContextTypes: {
    nameFilterChange: React.PropTypes.func,
  },
  getChildContext() {
    return {
      nameFilterChange: this.nameFilterChange,
    }
  },

  nameFilterChange(event) {
    this.setState({nameFilter: event.target.value});
  },

  filterStarships(starships) {

    return starships.filter((starship) => {
      if (this.state.nameFilter) {
        return starship.name.toLowerCase().indexOf(this.state.nameFilter.toLowerCase()) > -1;
      } else {
        return true;
      }
    });
  },

  getInitialState() {
    return {
      starships: [],
      nameFilter: ""
    }
  },
  componentWillMount() {
    getStarshipData(this, 'http://swapi.co/api/starships/');
  },
  render() {
    return (
      <div>
        <h1>KualiCo Recruitment</h1>
        <TableFilters nameFilter={this.state.nameFilter}/>
        <StarshipsTable starships={this.filterStarships(this.state.starships)}/>
      </div>
    )
  }
});



React.render(<StarWarsRouter />, document.querySelector('.app'));
