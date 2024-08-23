import React from 'react';
import { SCREENS } from "../constants";


interface Props {
    screen: number;
    setScreen: React.Dispatch<React.SetStateAction<number>>;
}

function Option(props: Props) {
    return (
        <>
        <h2 className="option_text">設定</h2>
        <button onClick={() => props.setScreen(SCREENS.TITLE)}>タイトルに戻る</button>
        </>
    );
}

export default Option;
