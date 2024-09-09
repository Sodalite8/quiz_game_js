import React from 'react';
import '../../styles/tailwind.css';
import { SCREENS } from '../../_constants/constants';
import TitleScreenButton from '../components/TitleScreenButton';


interface Props {
    screen: number;
    setScreen: React.Dispatch<React.SetStateAction<number>>;
}


// Game title
function Title(props: Props) {
    return (
        <>
            <div className='absolute flex h-48 w-full items-center 
                justify-center'>
                <h1 className='text-6xl font-bold italic'>
                    Old Flags Quiz
                </h1>
            </div>


            <div className='absolute top-full flex w-full -translate-y-full 
                flex-col items-center justify-center py-4'>
                <div className='flex w-full flex-col items-center 
                    justify-center'>
                    <TitleScreenButton setScreen={props.setScreen}
                        screen_num={SCREENS.GAME0} btn_name="スタート" />
                    <TitleScreenButton setScreen={props.setScreen}
                        screen_num={SCREENS.LIST0} btn_name="図鑑" />
                    <TitleScreenButton setScreen={props.setScreen}
                        screen_num={SCREENS.OPTION} btn_name="ゲーム設定" />
                </div>
            </div>
        </>
    );
}


export default Title;
