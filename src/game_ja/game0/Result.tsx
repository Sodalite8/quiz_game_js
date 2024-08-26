import React from "react"
import { INITIAL_QUIZ_SCORES, QuizProblem, QuizScores } from "../../constants";


interface Props {
    current_quiz: number;
    setCurrentQuiz: React.Dispatch<React.SetStateAction<number>>;
    quiz_problems: QuizProblem[];
    setQuizProblems: React.Dispatch<React.SetStateAction<QuizProblem[]>>;
    quiz_scores: QuizScores;
    setQuizScores: React.Dispatch<React.SetStateAction<QuizScores>>;
}


function Result(props: Props) {
    // About finishing the quiz in the middle
    const exitQuiz = () => {
        props.setCurrentQuiz(-1);
        props.setQuizProblems([]);
        props.setQuizScores(INITIAL_QUIZ_SCORES);

    };



    return (
        <>
            <h2>結果発表</h2>
            <div>
                {/* <button onClick={() => { props.setScreen(SCREENS.GAME0) }}>再挑戦</button> */}
                <button onClick={exitQuiz}>問題設定に戻る</button>
            </div>
        </>
    );
}


export default Result;
