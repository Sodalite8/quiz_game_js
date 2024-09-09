import React from "react";


interface Props {
    setScreen: React.Dispatch<React.SetStateAction<number>>;
    screen_num: number;
    btn_name: string;
}


function TitleButton(props: Props) {
    return (
        <>
            <button className='m-8 block h-title-screen-btn-h
                w-title-screen-btn-w cursor-pointer rounded-lg 
                border-2 border-orange-300 bg-orange-400 text-2xl font-bold 
                text-white' 
                onClick={() => { props.setScreen(props.screen_num) }}>
                {props.btn_name}
            </button>
        </>
    );
}


export default TitleButton;
