import React from "react";


interface Props {
    setScreen: React.Dispatch<React.SetStateAction<number>>;
    screen_num: number;
    btn_name: string;
}


function ScreenButton(props: Props) {
    return (
        <>
            <button className='mx-auto my-12 block
                h-screen-button-height w-screen-button-width cursor-pointer 
                rounded-lg border-2 border-orange-300 bg-orange-400 text-2xl 
                font-bold text-white' 
                onClick={() => { props.setScreen(props.screen_num) }}>
                {props.btn_name}
            </button>
        </>
    );
}


export default ScreenButton;
