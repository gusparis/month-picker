/**
 * Created by gparis on 11/10/17.
 */
import React from 'react';
import { connect } from 'react-redux';
import MonthTable from './components/MonthTable.jsx';
import YearSelector from './components/YearSelector.jsx';
import { selectMonth, selectYear } from './actions/pickerActions';
import styled from 'styled-components';

const MainContainer = styled.div`
    display: flex;
    place-content: space-between;
    flex-direction: column;
    width: 100%;
    height: 100%;
    font-weight: 400;
    transition: all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms;
`;

class MonthPicker extends React.Component {
    constructor(props) {
        super(props);
    }

    selectMonth = month => {
        return this.props.selectMonth(month);
    };

    selectYear = year => {
        return this.props.selectYear(year);
    };

    render() {
        const months = [["Jan","Feb","Mar"],["Apr","May","Jun"],["Jul","Aug","Sep"],["Oct","Nov","Dec"]];
        return (
            <MainContainer>
                <YearSelector onClick={this.selectYear} selected={this.props.year}/>
                <MonthTable onClick={this.selectMonth} selected={this.props.month} months={months}/>
            </MainContainer>
        )
    }
}

export default connect(
    state => {
        return {
            month: state.picker.month,
            year: state.picker.year,
        }
    }, { selectMonth, selectYear }
)(MonthPicker);