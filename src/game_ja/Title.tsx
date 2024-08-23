import React from 'react';
import { SCREENS } from "../constants";


interface Props {
    screen: number;
    setScreen: React.Dispatch<React.SetStateAction<number>>;
}

function Title(props: Props) {
    return (
        <>
        <h1 className='title'>
            国旗クイズゲーム
        </h1>
        <button onClick={() => props.setScreen(SCREENS.MENU0)}>スタート</button>
        <button onClick={() => props.setScreen(SCREENS.LIST0)}>国旗リスト</button>
        <button onClick={() => props.setScreen(SCREENS.OPTION)}>設定</button>
        </>
    );
}

export default Title;
