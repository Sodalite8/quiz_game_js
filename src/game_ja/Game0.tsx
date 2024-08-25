import React from 'react';
import { SCREENS } from "./constants";


interface Props {
    screen: number;
    setScreen: React.Dispatch<React.SetStateAction<number>>;
}

function Game0(props: Props) {
    const exitQuiz = () => {
        const ans: boolean = window.confirm("本当に終了しますか？");
        if(ans) {
            props.setScreen(SCREENS.MENU0);
        }
    };


    return (
        <>
            <h2 className="game0_text">ゲーム画面（工事中）</h2>
            <div>
                
            </div>
            <div>
                <button onClick={exitQuiz}>クイズ終了する</button>
            </div>
        </>
    );
}

export default Game0;
