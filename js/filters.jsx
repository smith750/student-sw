import React from 'react'
import numeral from 'numeral'

const TableFilters = React.createClass({
    render() {
        return (
            <div id="filters">
                <NameFilter nameFilter={this.props.nameFilter}/>
            </div>
        )
    }
});

const NameFilter = React.createClass({
    contextTypes: {
        nameFilterChange: React.PropTypes.func,
    },
    render() {
        return (
            <span>Name: <input type="text" id="name_filter" value={this.props.nameFilter} onChange={this.context.nameFilterChange}/></span>
        )
    }
});

export default TableFilters;