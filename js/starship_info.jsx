import React from 'react'
import { Link } from 'react-router'
import axios from 'axios'
import {simpleFormat} from './starships_utils.js'

const StarshipInfo = React.createClass({
    render() {
       return (
           <div>
               <table className="starship">

                   <StarshipInfoRow label="Name" info={this.props.params.starship.name}/>
                   <StarshipInfoRow label="Model" info={this.props.params.starship.model}/>
                   <StarshipInfoRow label="Manufacturer" info={this.props.params.starship.manufacturer}/>
                   <StarshipInfoRow label="Cost (in Credits)" info={simpleFormat(this.props.params.starship.cost_in_credits)}/>
                   <StarshipInfoRow label="Length" info={simpleFormat(this.props.params.starship['length'])}/>
                   <StarshipInfoRow label="Maximum Atmosphering Speed" info={simpleFormat(this.props.params.starship.max_atmosphering_speed)}/>
                   <StarshipInfoRow label="Crew" info={simpleFormat(this.props.params.starship.crew)}/>
                   <StarshipInfoRow label="Passengers" info={simpleFormat(this.props.params.starship.passengers)}/>
                   <StarshipInfoRow label="Cargo Capacity" info={this.props.params.starship.cargo_capacity}/>
                   <StarshipInfoRow label="Consumables" info={this.props.params.starship.consumables}/>
                   <StarshipInfoRow label="Hyperdrive Rating" info={this.props.params.starship.hyperdrive_rating}/>
                   <StarshipInfoRow label="MGLT" info={this.props.params.starship.MGLT}/>
                   <StarshipInfoRow label="Starship Class" info={this.props.params.starship.starship_class}/>
                   <StarshipInfoRow label="Pilots" info={this.props.params.starship.pilots.map((pilot) => { return pilot.name; }).join(',')}/>

               </table>
               <div><Link to="/">Back</Link></div>
           </div>
       )
    }
});

const StarshipInfoRow = React.createClass({
    render() {
       return (
           <tr>
               <td className="label">{this.props.label}</td>
               <td className="info">{this.props.info}</td>
           </tr>
       )
    }
});

export default StarshipInfo;