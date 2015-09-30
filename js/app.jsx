import React from 'react'
import axios from 'axios'
import StarshipsTable from './starship_table.jsx'

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

const StartWars = React.createClass({
  getInitialState() {
    return {starships: []}
  },
  componentWillMount() {
    getStarshipData(this, 'http://swapi.co/api/starships/');
  },
  render() {
    return (
      <div>
        <h1>KualiCo Recruitment</h1>
        <StarshipsTable starships={this.state.starships}/>
      </div>
    )
  }
});



React.render(<StartWars />, document.querySelector('.app'));
