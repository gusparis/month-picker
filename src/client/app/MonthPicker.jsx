/**
 * Created by gparis on 11/10/17.
 */
import React from 'react';
import { connect } from 'react-redux';
import MonthTable from './components/MonthTable.jsx';
import { select } from './actions/pickerActions';

class MonthPicker extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const months = [["Jan","Feb","Mar"],["Apr","May","Jun"],["Jul","Aug","Sep"],["Oct","Nov","Dec"]];
        return (
            <MonthTable months={months} selected={this.props.month}/>
        )
    }
}

export default connect(
    state => {
        return {
            month: state.picker.month,
            year: state.picker.year,
        }
    }, { select }
)(MonthPicker);