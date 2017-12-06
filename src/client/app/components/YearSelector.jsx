/**
 * Created by gparis on 12/6/17.
 */
import React from 'react';
import styled from 'styled-components';

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
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    cursor: pointer;
    text-decoration: none;
    margin: 0px;
    padding: 12px;
    outline: none;
    font-size: 0px;
    font-weight: inherit;
    position: relative;
    overflow: visible;
    transition: all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms;
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
    transition: transform 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms, opacity 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms; 
`;

const YearText = styled.div`
    height: inherit;
    padding-top: 18px;
    font-family: sans-serif;
    font-weight: bold;
`;

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

export default YearSelector;