/**
 * Created by gparis on 11/10/17.
 */
import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
    border: 10px;
    box-sizing: border-box;
    display: inline-block;
    font-family: Roboto, sans-serif;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
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
    will-change: opacity, transform !important;
    transition: all .3s ease-out !important;
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
    transform: scale(1);
    transition: all 450ms cubic-bezier(0.05, 0.1, 0.64, 1) 0ms;
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
    transition: transform 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms, opacity 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms;
`;

const MonthTableContainer = styled.div`
    position: relative;
    overflow: hidden;
    height: 140px
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

export default MonthTable;