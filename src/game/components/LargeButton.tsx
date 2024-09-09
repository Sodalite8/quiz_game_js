import React from "react";


interface Props {
    btn_func: React.MouseEventHandler<HTMLButtonElement> | undefined;
    btn_name: string;
}


function LargeButton(props: Props) {
    return (
        <>
            <button className='m-8 block h-title-screen-btn-h
                w-title-screen-btn-w cursor-pointer rounded-lg 
                border-2 border-orange-300 bg-orange-400 text-2xl 
                font-bold text-white' 
                onClick={props.btn_func}>
                {props.btn_name}
            </button>
        </>
    );
}


export default LargeButton;
