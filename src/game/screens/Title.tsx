import React from 'react';
import '../../styles/tailwind.css';
import { SCREENS } from '../../_constants/constants';
import ScreenButton from '../components/ScreenButton';


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
                <ScreenButton setScreen={props.setScreen} screen_num={SCREENS.GAME0} btn_name="スタート" />
                <ScreenButton setScreen={props.setScreen} screen_num={SCREENS.LIST0} btn_name="図鑑" />
                <ScreenButton setScreen={props.setScreen} screen_num={SCREENS.OPTION} btn_name="ゲーム設定" />
            </div>
        </>
    );
}


export default Title;
