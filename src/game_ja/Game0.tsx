import React from 'react';
import { INITIAL_QUIZ_SCORES, QuizOptions, QuizProblem, QuizScores, SCREENS } from "../constants";
import Quiz from "./game0/Quiz";
import Result from './game0/Result';


interface Props {
    screen: number;
    setScreen: React.Dispatch<React.SetStateAction<number>>;
    quiz_options: QuizOptions;
}


// Display the quiz
function Game0(props: Props) {
    const [current_quiz, setCurrentQuiz] = React.useState<number>(0);
    const [quiz_problems, setQuizProblems] = React.useState<QuizProblem[]>([]);
    const [quiz_scores, setQuizScores] = React.useState<QuizScores>(INITIAL_QUIZ_SCORES);


    // About rendering the quiz and changing problems
    const renderQuiz = () => {
        if(current_quiz < props.quiz_options.problems_num) {
            return (
                <>
                    <Quiz current_quiz={current_quiz} setCurrentQuiz={setCurrentQuiz} />
                </>
            );
        }

        else if(current_quiz === props.quiz_options.problems_num) {
            return (
                <>
                    <Result screen={props.screen} setScreen={props.setScreen}/>
                </>
            );
        }

        else {
            return (
                <>
                    <h2>不正な問題番号に設定されています</h2>
                    <button onClick={() => { props.setScreen(SCREENS.MENU0) }}></button>
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
