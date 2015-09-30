import React from 'react'
import numeral from 'numeral'

const StarshipsTable = React.createClass({
    render() {
        let starshipRows = this.props.starships.map((starship, idx) => {
            let key = "stsrship" + idx;
            return <StarshipRow starship={starship} key={key}/>
        });
        return (
            <table>
                <StarshipHeader/>
                {starshipRows}
            </table>
        )
    }
});

const StarshipHeader = React.createClass({
    render() {
        return (
            <tr>
                <th>Name</th>
                <th>Cost (in Credits)</th>
                <th>Length</th>
                <th>Crew Size</th>
                <th>Passenger Size</th>
                <th>Class</th>
            </tr>
        )
    }
});

let simpleFormat = function(number) {
    return numeral(number).format('0,0');
}

const StarshipRow = React.createClass({
    render() {
        return (
            <tr>
                <td>{this.props.starship.name}</td>
                <td>{simpleFormat(this.props.starship.cost_in_credits)}</td>
                <td>{simpleFormat(this.props.starship['length'])}</td>
                <td>{simpleFormat(this.props.starship.crew)}</td>
                <td>{simpleFormat(this.props.starship.passengers)}</td>
                <td>{this.props.starship.starship_class}</td>
            </tr>
        )
    }
});

export default StarshipsTable;