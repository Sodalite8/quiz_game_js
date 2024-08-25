import React from 'react';
import { QuizOptions, SCREENS } from "../constants";
import Quiz from "./game0/Quiz";


interface Props {
    screen: number;
    setScreen: React.Dispatch<React.SetStateAction<number>>;
    quiz_options: QuizOptions;
}


// Display the quiz
function Game0(props: Props) {
    const [current_quiz, setCurrentQuiz] = React.useState<number>(0);


    // About rendering the quiz and changing problems
    const renderQuiz = () => {
        if(current_quiz < props.quiz_options.problems_num) {
            return (
                <>
                    <button onClick={() => {setCurrentQuiz(current_quiz + 1)}}>次へ（テスト用）</button>
                    問題番号（テスト）: {current_quiz}
                </>
            );
        }

        else if(current_quiz === props.quiz_options.problems_num) {
            return (
                <>
                    <h2>結果発表</h2>
                    <button onClick={() => {props.setScreen(SCREENS.MENU0)}}>問題設定に戻る</button>
                </>
            );
        }

        else {
            return (
                <>
                    <h2>不正な問題番号に設定されています</h2>
                </>
            );
        }
    };


    // About finishing the quiz in the middle
    const exitQuiz = () => {
        const ans: boolean = window.confirm("本当に終了しますか？");
        if (ans) {
            props.setScreen(SCREENS.MENU0);
        }
    };


    return (
        <>
            <h2 className="game0_text">ゲーム画面（工事中）</h2>
            <div>
                {renderQuiz()}
            </div>
            <div>
                <button onClick={exitQuiz}>クイズを終了する</button>
            </div>
        </>
    );
}


export default Game0;
