import React from "react";


interface Props {
    setScreen: React.Dispatch<React.SetStateAction<number>>;
    screen_num: number;
    btn_name: string;
}


function NormalButton(props: Props) {
    return (
        <>
            <button className='m-4 block h-normal-screen-btn-h
                w-normal-screen-btn-w cursor-pointer rounded-lg 
                border-2 border-orange-300 bg-orange-400 text-xl font-bold 
                text-white' 
                onClick={() => { props.setScreen(props.screen_num) }}>
                {props.btn_name}
            </button>
        </>
    );
}


export default NormalButton;
