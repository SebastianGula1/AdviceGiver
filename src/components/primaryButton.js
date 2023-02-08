import React from 'react';
import DiceIcon from '../assets/icon-dice.svg';
import '../styling/primaryButton.css';

export const PrimaryButton =  () =>{
    return <button><img src={DiceIcon} alt="diceIcon" /></button>
}