import React from "react";


interface Props {
    btn_func: React.MouseEventHandler<HTMLButtonElement> | undefined;
    btn_name: string;
}


const insertLineBreak = (str: string) => {
    const strs = str.split('\n').map((item, index) => {
        return (
            <React.Fragment key={index}>
                {item}<br />
            </React.Fragment>
        );
    });
    return strs;
};


export function SmallButton(props: Props) {
    return (
        <>
            <button className='m-2 w-small-btn-w cursor-pointer 
                rounded-lg border-2 border-orange-300 bg-orange-400 
                p-1 text-lg font-bold text-white' 
                onClick={props.btn_func}>
                {insertLineBreak(props.btn_name)}
            </button>
        </>
    );
}


export function MediumButton(props: Props) {
    return (
        <>
            <button className='m-4 block w-medium-btn-w cursor-pointer 
                rounded-lg border-2 border-orange-300 bg-orange-400 
                py-2 text-xl font-bold text-white' 
                onClick={props.btn_func}>
                {insertLineBreak(props.btn_name)}
            </button>
        </>
    );
}


export function LargeButton(props: Props) {
    return (
        <>
            <button className='m-8 block w-large-btn-w cursor-pointer 
                rounded-lg border-2 border-orange-300  bg-orange-400 
                py-4 text-2xl font-bold text-white' 
                onClick={props.btn_func}>
                {insertLineBreak(props.btn_name)}
            </button>
        </>
    );
}
