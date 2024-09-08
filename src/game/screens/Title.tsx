import React from 'react';
import '../../styles/tailwind.css';
import { SCREENS } from '../../_constants/constants';


interface Props {
    screen: number;
    setScreen: React.Dispatch<React.SetStateAction<number>>;
}


// Game title
function Title(props: Props) {
    return (
        <>
            <div className='absolute h-1/3 w-full'>
                <h1 className='absolute top-16 mx-auto block w-full text-center 
                text-6xl font-bold italic'>
                    Old Flags Quiz
                </h1>
            </div>
            <div className='absolute top-full h-1/2 w-full -translate-y-full'>
                <button className='mx-auto my-12 block
                    h-screen-button-height w-screen-button-width rounded-lg border-2 border-yellow-500'
                    onClick={() => props.setScreen(SCREENS.GAME0)}>スタート</button>
                <button className='mx-auto my-12 block
                    h-screen-button-height w-screen-button-width'
                    onClick={() => props.setScreen(SCREENS.LIST0)}>図鑑</button>
                <button className='mx-auto my-12 block
                    h-screen-button-height w-screen-button-width'
                    onClick={() => props.setScreen(SCREENS.OPTION)}>ゲーム設定</button>
            </div>
        </>
    );
}


export default Title;
