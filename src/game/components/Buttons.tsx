import React from "react";


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
    disable?: boolean;
    animation?: boolean;
}


export function SmallButton(props: Props) {
    return (
        <>
            <button className={`${props.animation ? "animation-button" : ""} 
                m-2 block w-small-btn-w cursor-pointer rounded-lg 
                border-2 border-orange-300 bg-orange-400 p-1 text-lg 
                font-bold text-white`}
                disabled={props.disable}
                onClick={props.click}>
                {insertLineBreak(props.text)}
            </button>
        </>
    );
}


export function MediumButton(props: Props) {
    return (
        <>

            <button className={`${props.animation ? "animation-button" : ""} 
                m-4 block w-medium-btn-w cursor-pointer rounded-lg border-2 
                border-orange-300 bg-orange-400 p-2 text-xl font-bold 
                text-white`}
                disabled={props.disable}
                onClick={props.click}>
                {insertLineBreak(props.text)}
            </button>
        </>
    );
}


export function LargeButton(props: Props) {
    return (
        <>

            <button className={`${props.animation ? "animation-button" : ""} 
                m-8 block w-large-btn-w cursor-pointer rounded-lg border-2 
                border-orange-300 bg-orange-400 p-4 text-2xl font-bold 
                text-white`}
                disabled={props.disable}
                onClick={props.click}>
                {insertLineBreak(props.text)}
            </button>
        </>
    );
}


interface Props1 {
    text?: string;
    name?: string;
    click?: (e: React.MouseEvent<HTMLButtonElement>) => void;
    disable?: boolean;
    animation?: boolean;
}


export function AnswerButton(props: Props1) {
    return (
        <div>
            <button className={`${props.animation ? "animation-button" : ""} 
                m-2 block h-answer-btn-h w-answer-btn-w cursor-pointer 
                rounded-lg border-2 border-orange-300 bg-orange-400 p-2 
                text-xl font-bold text-white`}
                name={props.name}
                disabled={props.disable}
                onClick={props.click}>
                {insertLineBreak(props.text)}
            </button>
        </div>
    );
}

