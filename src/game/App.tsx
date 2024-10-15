import React from 'react';
import { useCookies } from "react-cookie";
import '../styles/tailwind.css';
import { SCREENS, Options, INITIAL_OPTIONS, QuizOptions, INITIAL_QUIZ_OPTIONS } from "../_constants/constants";
import Title from "./screens/Title";
import Option from "./screens/Option";
import Game0 from "./screens/Game0";
import List0 from "./screens/List0";
import { MediumButton } from './components/Buttons';


// クイズゲームの最上位コンポーネント
function App() {
    // クッキー
    // クッキーが存在するか
    // 初期メッセージを表示するか
    const [cookies, setCookie, removeCookie] = useCookies(['options', 'quiz_options']);
    const [accept_cookies, setAcceptCookies] = React.useState<boolean>(false);
    const [reject_cookies, setRejectCookies] = React.useState<boolean>(false);


    // スクリーン番号（タイトル画面や設定画面、ゲーム画面などの切り替え）
    // ゲーム設定（音量やアニメーションの有効無効化など）
    // クイズ設定（難易度や問題数など）
    const [screen, setScreen] = React.useState<number>(SCREENS.TITLE);
    const [options, setOptions] = React.useState<Options>(INITIAL_OPTIONS);
    const [quiz_options, setQuizOptions] = React.useState<QuizOptions>(INITIAL_QUIZ_OPTIONS);


    // クッキーが許可された際の処理
    const acceptCookies = (): void => {
        setAcceptCookies(true);

        // 設定を読み込む
        setCookie('options', INITIAL_OPTIONS);
        setCookie('quiz_options', INITIAL_QUIZ_OPTIONS);
    };


    // クッキーが拒否された際の処理
    const rejectCookies = (): void => {
        setRejectCookies(true);

        // 拒否した時間のタイプスタンプを記録
        localStorage.setItem('cookieRejected', new Date().getTime().toString());
    };


    /**
     *  タイプスタンプから、クッキーが拒否されているか判定
     *  タイプスタンプは3日間有効
     */
    const isRejected = (): boolean => {
        const temp_time: string | null = localStorage.getItem('cookieRejected');
        // 拒否されていない場合
        if(temp_time === null) {
            return false;
        }

        const time_reject_cookies: number = parseInt(temp_time, 10);
        const time_now: number = new Date().getTime();
        const validity_period: number = 60 * 60 * 24 * 3 * 1000;


        // タイプスタンプの期限が切れている場合true、有効な場合false
        return time_now - time_reject_cookies <= validity_period;
    };


    // クッキーがすでに許可されているか、拒否されているか確認
    React.useEffect(() => {
        // クッキーが許可されており、存在する場合
        if (cookies.options && cookies.quiz_options) {
            setAcceptCookies(true);

            setOptions(cookies.options);
            setQuizOptions(cookies.quiz_options);
        }
        
        // クッキーが供されていた場合
        else if (isRejected()) {
            setRejectCookies(true);
        }
    }, []);


    // screenによって映し出す画面を変更
    const renderScreen = () => {
        // クッキーをまだ許可しておらず、かつ拒否もしていない場合にのみ確認する
        if (!accept_cookies && !reject_cookies) {
            return (
                <div className='relative flex size-full flex-col items-center'>
                    <h2 className='relative text-center text-4xl font-bold'>
                        クッキーについて
                    </h2>

                    <h3 className='relative text-center text-2xl font-bold px-16'>
                        本ゲームではユーザーエクスペリエンス向上のため、<br />
                        クッキーを使用しています<br />
                        許可する場合は次のボタンを押してください
                    </h3>

                    <div className='relative '>
                        <MediumButton
                            text='許可する'
                            click={() => acceptCookies()}
                            animation={options.animation}
                        />
                        <MediumButton
                            text='拒否する'
                            click={() => rejectCookies()}
                            animation={options.animation}
                        />
                    </div>

                    <h3 className='relative text-center text-2xl font-bold'>
                        本ゲームでは音が出ます<br />
                        周囲の環境と音量に注意してお楽しみください
                    </h3>
                </div>
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
