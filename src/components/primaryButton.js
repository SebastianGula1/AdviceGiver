import React from 'react';
import DiceIcon from '../assets/icon-dice.svg';
import '../styling/primaryButton.css';

export const PrimaryButton =  ({getAdviceFunc}) =>{
    return <button onClick={getAdviceFunc}><img src={DiceIcon} alt="diceIcon" /></button>
}