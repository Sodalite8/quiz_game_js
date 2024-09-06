import React from 'react';
import { SCREENS } from "../constants";


interface Props {
    screen: number;
    setScreen: React.Dispatch<React.SetStateAction<number>>;
}


// Game title
function Title(props: Props) {
    return (
        <>
            <h1 className='text-white'>
                国旗クイズゲーム
            </h1>
            <div>
                <button onClick={() => props.setScreen(SCREENS.GAME0)}>スタート</button>
                <button onClick={() => props.setScreen(SCREENS.LIST0)}>国旗リスト</button>
                <button onClick={() => props.setScreen(SCREENS.OPTION)}>設定</button>
            </div>
        </>
    );
}


export default Title;
