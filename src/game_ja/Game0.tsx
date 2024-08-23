import React from 'react';
import { SCREENS } from "../constants";


interface Props {
    screen: number;
    setScreen: React.Dispatch<React.SetStateAction<number>>;
}

function Game0(props: Props) {
    return (
        <>
        <h2 className="menu0_text">テスト</h2>
        <button onClick={() => props.setScreen(SCREENS.TITLE)}>タイトルに戻る</button>
        </>
    );
}

export default Game0;
