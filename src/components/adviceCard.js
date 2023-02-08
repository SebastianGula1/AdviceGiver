import React from 'react';
import { PrimaryButton } from './primaryButton';
import '../styling/adviceCard.css';

export const AdviceCard = ({adviceText,adviceId}) => {
    return (
        <div className='advice-card_container'>
            <div className="advice-card_header">
                <p>ADVICE #{adviceId}</p>
            </div>
            <p>"{adviceText}"</p>
            <div className='advice-card_button'>
                <PrimaryButton />
            </div>
        </div>
    )
}