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
            <div className='w-full h-1/3 absolute'>
                <h1 className='block w-full text-6xl font-bold italic absolute 
                top-16 mx-auto text-center'>
                    Old Flags Quiz
                </h1>
            </div>
            <div className='w-full h-1/2 absolute transform -translate-y-full top-full'>
                <button className='block w-screen-button-width h-screen-button-height
                    mx-auto my-12'
                    onClick={() => props.setScreen(SCREENS.GAME0)}>スタート</button>
                <button className='block w-screen-button-width h-screen-button-height
                    mx-auto my-12'
                    onClick={() => props.setScreen(SCREENS.LIST0)}>国旗リスト</button>
                <button className='block w-screen-button-width h-screen-button-height
                    mx-auto my-12'
                    onClick={() => props.setScreen(SCREENS.OPTION)}>設定</button>
            </div>
        </>
    );
}


export default Title;
