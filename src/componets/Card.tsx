import * as React from 'react';
import { ICard } from '../global'
import { useState } from 'react';
import { idText, setConstantValue } from 'typescript';
type Props = {
    temp: ICard;
    flipCard: (index: number) => void;
    index: number;
}
export function Card({ temp, flipCard, index }: Props) {
    return (
        <div >
            <button  className='MyCardButton'  disabled={temp.isOpen} style={{
                border: "1px solid black",
                height: "50px",
                width: "50px",
                backgroundColor: temp.isOpen ? "green" : "white",
                fontSize: "25px",
                color: "black",
                
            }} onClick={() => flipCard(index)} >{temp.isOpen ? temp.data : ""}</button>
        </div>
    )

}
