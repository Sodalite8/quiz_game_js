import React from 'react';
import { useCookies } from "react-cookie";
import '../styles/tailwind.css';
import { SCREENS, Options, INITIAL_OPTIONS, QuizOptions, INITIAL_QUIZ_OPTIONS } from "../_constants/constants";
import Title from "./screens/Title";
import Option from "./screens/Option";
import Game0 from "./screens/Game0";
import List0 from "./screens/List0";


// クイズゲームの最上位コンポーネント
function App() {
    // クッキー
    // クッキーが存在するか
    // 初期メッセージを表示するか
    // 初期メッセージの表示時間
    const [cookies, setCookie, removeCookie] = useCookies(['options', 'quiz_options']);
    const [exist_cookies, setExistCookies] = React.useState<boolean>(false);
    const [show_message, setShowMessage] = React.useState<boolean>(true);
    const time_show_message: number = 3000;

    // クッキーが存在するか確認
    React.useEffect(() => {
        if (cookies.options && cookies.quiz_options) {
            setExistCookies(true);
            setShowMessage(false);
        }
        else {
            setCookie('options', INITIAL_OPTIONS);
            setCookie('quiz_options', INITIAL_QUIZ_OPTIONS);
        }
    });

    // 初期メッセージ表示用のタイマー
    React.useEffect(() => {
        const startTimer = setTimeout(() => {
            setShowMessage(false);
        }, time_show_message);

        return () => clearTimeout(startTimer);
    }, []);


    // スクリーン番号（タイトル画面や設定画面、ゲーム画面などの切り替え）
    // ゲーム設定（音量やアニメーションの有効無効化など）
    // クイズ設定（難易度や問題数など）
    const [screen, setScreen] = React.useState<number>(SCREENS.TITLE);
    const [options, setOptions] = React.useState<Options>(INITIAL_OPTIONS);
    const [quiz_options, setQuizOptions] = React.useState<QuizOptions>(INITIAL_QUIZ_OPTIONS);


    // screenによって映し出す画面を変更
    const renderScreen = () => {
        // ページに入ってから数秒間表示するメッセージ
        if (show_message) {
            return (
                <>
                    <div className='relative flex size-full flex-col items-center'>
                        <h1 className='relative top-1/4 text-center text-6xl font-bold'>
                            注意！
                        </h1>

                        <h2 className='relative top-1/3 text-center text-4xl font-bold'>
                            本ゲームは音が出ます<br />
                            周囲の環境と音量に注意してお楽しみください
                        </h2>
                    </div>

                </>
            );
        }




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
