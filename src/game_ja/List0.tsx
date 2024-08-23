import React from 'react';
import { SCREENS } from "../constants";


interface Props {
    screen: number;
    setScreen: React.Dispatch<React.SetStateAction<number>>;
}

function List0(props: Props) {
    return (
        <>
        <h2 className="menu0_text">分類を選択</h2>
        <button onClick={() => props.setScreen(SCREENS.TITLE)}>タイトルに戻る</button>
        </>
    );
}

export default List0;
