import React from 'react';
import { SCREENS } from "../constants";


interface Props {
    screen: number;
    setScreen: React.Dispatch<React.SetStateAction<number>>;
}

function List0(props: Props) {
    return (
        <>
            <h2 className="list0_text">分類を選択（工事中）</h2>
            <div>
                
            </div>
            <div>
                <button onClick={() => props.setScreen(SCREENS.TITLE)}>タイトルに戻る</button>
            </div>
        </>
    );
}

export default List0;
