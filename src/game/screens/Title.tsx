import React from 'react';
import { Options, SCREENS } from '../../_constants/constants';
import { LargeButton } from '../components/Buttons';


interface Props {
    screen: number;
    setScreen: React.Dispatch<React.SetStateAction<number>>;
    options: Options;
}


// タイトル画面
function Title(props: Props) {
    return (
        <>
            <div className='relative flex h-64 w-full items-center justify-center'>
                <h1 className='text-6xl font-bold italic'>
                    Old Flags Quiz
                </h1>
            </div>


            <div
                className='absolute top-full flex w-full -translate-y-full 
                flex-col items-center justify-center p-4'
            >
                <LargeButton
                    text="スタート"
                    click={() => props.setScreen(SCREENS.GAME0)}
                    animation={props.options.animation}
                />
                <LargeButton
                    text="図鑑"
                    click={() => props.setScreen(SCREENS.LIST0)}
                    animation={props.options.animation}
                />
                <LargeButton
                    text="ゲーム設定"
                    click={() => props.setScreen(SCREENS.OPTION)}
                    animation={props.options.animation}
                />
            </div>
        </>
    );
}


export default Title;
