import React from "react"
import { INITIAL_QUIZ_RESULTS, QuizProblem, QuizResults, SCREENS } from "../../constants";


interface Props {
    screen: number;
    setScreen: React.Dispatch<React.SetStateAction<number>>;
    current_quiz: number;
    setCurrentQuiz: React.Dispatch<React.SetStateAction<number>>;
    quiz_problems: QuizProblem[];
    setQuizProblems: React.Dispatch<React.SetStateAction<QuizProblem[]>>;
    quiz_results: QuizResults;
    setQuizResults: React.Dispatch<React.SetStateAction<QuizResults>>;
}


function Result(props: Props) {
    // About finishing the quiz
    const exitQuiz = () => {
        props.setCurrentQuiz(-1);
        props.setQuizProblems([]);
        props.setQuizResults(INITIAL_QUIZ_RESULTS);
    };


    return (
        <>
            <h2>結果発表</h2>
            <div>
                得点：{props.quiz_results.score} / {props.current_quiz}
                正答率：{Math.round((props.quiz_results.score * 100 / props.current_quiz) * (10 ** 2)) / (10 ** 2)}%
            </div>
            <div>
                <button onClick={exitQuiz}>問題設定に戻る</button>
                <button onClick={() => { props.setScreen(SCREENS.TITLE) }}>タイトルに戻る</button>
            </div>
        </>
    );
}


export default Result;
