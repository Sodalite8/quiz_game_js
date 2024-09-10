import React from 'react';
import { SCREENS } from '../../_constants/constants';
import { LargeButton } from '../components/Buttons';


interface Props {
    screen: number;
    setScreen: React.Dispatch<React.SetStateAction<number>>;
}


// Game title
function Title(props: Props) {
    return (
        <>
            <div className='relative flex h-48 w-full items-center 
                justify-center'>
                <h1 className='text-6xl font-bold italic'>
                    Old Flags Quiz
                </h1>
            </div>


            <div className='absolute top-full flex w-full -translate-y-full 
                flex-col items-center justify-center p-4'>
                <LargeButton
                    click={() => props.setScreen(SCREENS.GAME0)}
                    text="スタート" />
                <LargeButton
                    click={() => props.setScreen(SCREENS.LIST0)}
                    text="図鑑" />
                <LargeButton
                    click={() => props.setScreen(SCREENS.OPTION)}
                    text="ゲーム設定" />
            </div>
        </>
    );
}


export default Title;
