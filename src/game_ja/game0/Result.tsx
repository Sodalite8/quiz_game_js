import React from "react"
import { SCREENS } from "../../constants";


interface Props {
    screen: number;
    setScreen: React.Dispatch<React.SetStateAction<number>>;
}


function Result(props: Props) {
    return (
        <>
            <h2>結果発表</h2>
            <div>
                {/* <button onClick={() => { props.setScreen(SCREENS.GAME0) }}>再挑戦</button> */}
                <button onClick={() => { props.setScreen(SCREENS.GAME0) }}>問題設定に戻る</button>
            </div>
        </>
    );
}


export default Result;
