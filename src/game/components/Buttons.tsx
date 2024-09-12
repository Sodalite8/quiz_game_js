import React from "react";
import { play_normal_btn } from "../scripts/loadSound";


const insertLineBreak = (str: string | undefined) => {
    if (str === undefined) {
        return null;
    }

    const strs = (str as string).split('\n').map((item, index) => {
        return (
            <React.Fragment key={index}>
                {item}<br />
            </React.Fragment>
        );
    });
    return strs;
};


interface Props {
    text?: string;
    name?: string;
    click?: () => void;
}


export function SmallButton(props: Props) {
    const clickSmallButton = () => {
        play_normal_btn();
        if(props.click !== undefined) {
            props.click();
        }
    }


    return (
        <>
            <button className='m-2 w-small-btn-w cursor-pointer 
                rounded-lg border-2 border-orange-300 bg-orange-400 
                p-1 text-lg font-bold text-white'
                onClick={clickSmallButton}>
                {insertLineBreak(props.text)}
            </button>
        </>
    );
}


export function MediumButton(props: Props) {
    const clickMediumButton = () => {
        play_normal_btn();
        if(props.click !== undefined) {
            props.click();
        }
    }


    return (
        <>
            <button className='m-4 block w-medium-btn-w cursor-pointer 
                rounded-lg border-2 border-orange-300 bg-orange-400 
                p-2 text-xl font-bold text-white'
                onClick={clickMediumButton}>
                {insertLineBreak(props.text)}
            </button>
        </>
    );
}


export function LargeButton(props: Props) {
    const clickLargeButton = () => {
        console.log("音がなります")
        play_normal_btn();
        if(props.click !== undefined) {
            props.click();
        }
    }


    return (
        <>
            <button className='m-8 block w-large-btn-w cursor-pointer 
                rounded-lg border-2 border-orange-300 bg-orange-400 
                p-4 text-2xl font-bold text-white'
                onClick={clickLargeButton}>
                {insertLineBreak(props.text)}
            </button>
        </>
    );
}


interface Props1 {
    text?: string;
    name?: string;
    click?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}


export function AnswerButton(props: Props1) {
    return (
        <>
            <button className="m-2 block h-answer-btn-h w-answer-btn-w 
                cursor-pointer rounded-lg border-2 border-orange-300 
                bg-orange-400 p-2 text-xl font-bold text-white"
                name={props.name}
                onClick={props.click}>
                {insertLineBreak(props.text)}
            </button>
        </>
    );
}

