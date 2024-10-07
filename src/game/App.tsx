import React from 'react';
// import { useCookies } from "react-cookie";
import '../styles/tailwind.css';
import { SCREENS, Options, INITIAL_OPTIONS, QuizOptions, INITIAL_QUIZ_OPTIONS } from "../_constants/constants";
import Title from "./screens/Title";
import Option from "./screens/Option";
import Game0 from "./screens/Game0";
import List0 from "./screens/List0";


// クイズゲームの最上位コンポーネント
function App() {
    /*
    screen      : スクリーン番号（タイトル画面や設定画面、ゲーム画面などの切り替え）
    options     : ゲーム設定（音量やアニメーションの有効無効化など）
    quiz_options: クイズ設定（難易度や問題数など）
    */
    const [screen, setScreen] = React.useState<number>(SCREENS.TITLE);
    const [options, setOptions] = React.useState<Options>(INITIAL_OPTIONS);
    const [quiz_options, setQuizOptions] = React.useState<QuizOptions>(INITIAL_QUIZ_OPTIONS);


    // screenによって映し出す画面を変更
    const renderScreen = () => {
        switch (screen) {
            case SCREENS.TITLE:     // タイトル
                return (
                    <Title
                        screen={screen}
                        setScreen={setScreen}
                        options={options}
                    />
                );


            case SCREENS.OPTION:    // ゲーム設定
                return (
                    <Option
                        screen={screen}
                        setScreen={setScreen}
                        options={options}
                        setOptions={setOptions}
                    />
                );


            case SCREENS.GAME0:     // ゲーム画面
                return (
                    <Game0
                        screen={screen}
                        setScreen={setScreen}
                        options={options}
                        quiz_options={quiz_options}
                        setQuizOptions={setQuizOptions}
                    />
                );


            case SCREENS.LIST0:     // 図鑑
                return (
                    <List0
                        screen={screen}
                        setScreen={setScreen}
                        options={options}
                    />
                );
        }
    };


    return (
        <div
            className='relative mx-auto my-8 box-content h-game-height 
            w-game-width rounded-lg border-4 border-yellow-400/60 
            bg-yellow-50'
        >
            {renderScreen()}
        </div>
    );
}


export default App;
