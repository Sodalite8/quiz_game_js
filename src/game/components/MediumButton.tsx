import React from "react";


interface Props {
    btn_func: React.MouseEventHandler<HTMLButtonElement> | undefined;
    btn_name: string;
}


function MediumButton(props: Props) {
    return (
        <>
            <button className='m-4 block h-normal-screen-btn-h
                w-normal-screen-btn-w cursor-pointer rounded-lg 
                border-2 border-orange-300 bg-orange-400 text-xl 
                font-bold text-white' 
                onClick={props.btn_func}>
                {props.btn_name}
            </button>
        </>
    );
}


export default MediumButton;
