/**
 * Created by gparis on 11/10/17.
 */
import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import moment from 'moment';
const SELECT_MONTH = '@@picker/select_month', SELECT_YEAR = '@@picker/select_year';

const MainContainer = styled.div`
    display: flex;
    place-content: space-between;
    flex-direction: column;
    width: 100%;
    height: 100%;
    font-weight: 400;
    overflow: hidden;
`;

const Button = styled.button`
    border: 10px;
    box-sizing: border-box;
    display: inline-block;
    font-family: Roboto, sans-serif;
    cursor: pointer;
    text-decoration: none;
    margin: 0px;
    padding: 4px 0px;
    outline: none;
    font-size: inherit;
    font-weight: 400;
    position: relative;
    width: 33.3%;
    background: none;
`;

const MonthText = styled.span`
    color: ${props=>props.style.color};
    font-weight: 400;
    position: relative;
    text-transform: uppercase;
`;

const MonthSelected = styled.div`
    background-color: #005fab;
    height: 34px;
    left: -5px;
    opacity: 1;
    position: absolute;
    margin-left: 5px;
    top: 0px;
    width: 100%;
`;

const MonthRow = styled.div`
    display: flex;    
    flex-direction: row;
    justify-content: space-around;
    height: 34px;
    margin-bottom: 2px;
`;

const MonthRowList = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    font-weight: 400;
    height: 140px;
    line-height: 2;
    position: relative;
    text-align: center;
`;

const Table = styled.div`
    position: absolute;
    width: 100%;
    top: 0px;
    left: 0px;
`;

const MonthTableContainer = styled.div`
    position: relative;
    overflow: hidden;
    height: 140px
`;

const YearContainer = styled.div`
    display: flex;
    justify-content: space-between;
    background-color: inherit;
    height: 48px;
`;

const YearNavigateButton = styled.button`
    border: 10px;
    box-sizing: border-box;
    display: inline-block;
    font-family: Roboto, sans-serif;
    cursor: pointer;
    text-decoration: none;
    margin: 0px;
    padding: 12px;
    outline: none;
    font-size: 0px;
    font-weight: inherit;
    position: relative;
    overflow: visible;
    width: 48px;
    height: 48px;
    background: none;
`;

const YearTextContainer = styled.div`
    position: relative;
    overflow: hidden;
    height: 100%;
    font-size: 14px;
    font-weight: 500;
    text-align: center;
    width: 50%;
`;

const Year = styled.div`
    position: absolute;
    height: 100%;
    width: 100%;
    top: 0px;
    left: 0px;
`;

const YearText = styled.div`
    height: inherit;
    padding-top: 18px;
    font-family: sans-serif;
    font-weight: bold;
`;

const MonthButton = ({
    month,
    selected,
    onClick,
    number
}) => (
    <Button onClick={()=>onClick(number)}>
        {selected ? <MonthSelected/> : null}
        <MonthText style={{color: `${!selected ? 'rgba(0, 0, 0, 0.87)' : 'white'}`}}>{month}</MonthText>
    </Button>
);

const MonthTable = ({
    months,
    selected,
    onClick
}) => (
    <MonthTableContainer>
        <Table>
            <MonthRowList>
                {
                    months.map((row,k)=>{ return <MonthRow key={k}>
                        {row.map((month,l)=>{ return <MonthButton onClick={onClick} number={+(3*k)+(l+1)} month={month} key={l} selected={selected === +(3*k)+(l+1)}/>})}
                    </MonthRow>
                    })
                }
            </MonthRowList>
        </Table>
    </MonthTableContainer>
);

const YearSelector = ({
    selected,
    onClick
}) => (
    <YearContainer>
        <YearNavigateButton style={{left: '5%'}} onClick={()=>onClick(selected-1)}>
            <svg>
                <path d="M 15.41 7.41 L 14 6 l -6 6 l 6 6 l 1.41 -1.41 L 10.83 12 Z"/>
            </svg>
        </YearNavigateButton>
        <YearTextContainer>
            <Year>
                <YearText>{selected}</YearText>
            </Year>
        </YearTextContainer>
        <YearNavigateButton style={{right: '5%'}} onClick={()=>onClick(+selected+1)}>
            <svg>
                <path d="M 10 6 L 8.59 7.41 L 13.17 12 l -4.58 4.59 L 10 18 l 6 -6 Z"/>
            </svg>
        </YearNavigateButton>
    </YearContainer>
);


const formatDate = (m,y, format) => {
    return moment(`${y}-${m}`).format(format);
};

const MonthPicker = ({
     year,
     month,
     selectYear,
     selectMonth,
     onChange,
     months = [["Jan","Feb","Mar"],["Apr","May","Jun"],["Jul","Aug","Sep"],["Oct","Nov","Dec"]],
     format = 'MMM YYYY'
}) => (
    <MainContainer>
        <YearSelector onClick={selectYear} selected={year}/>
        <MonthTable onClick={(m)=>{onChange(formatDate(m, year, format)); selectMonth(m)}} selected={month} months={months}/>
    </MainContainer>
);

const INITIAL_STATE = {month: moment().get('month'), year: moment().get('year')};
export const monthPickerReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case SELECT_MONTH:
            return {...state, month: action.payload};
        case SELECT_YEAR:
            return {...state, year: action.payload};
    }
    return state;
};

export default connect(
    state => {
        return {
            month: state.monthPicker.month,
            year: state.monthPicker.year
        }
    }, dispatch => {
        return {
            selectYear: (year) => dispatch({
                type : SELECT_YEAR, payload: year
            }),
            selectMonth: (month) => dispatch({
                type : SELECT_MONTH, payload: month
            })
        }
    }
)(MonthPicker);