import React from "react";
import { QuizProblem, QuizResults } from "../../constants";


interface Props {
    current_quiz: number;
    setCurrentQuiz: React.Dispatch<React.SetStateAction<number>>;
    quiz_problems: QuizProblem[];
    quiz_results: QuizResults;
    setQuizResults: React.Dispatch<React.SetStateAction<QuizResults>>;
}


function AnswerSection(props: Props) {
    return (
        <>
            <button onClick={() => { props.setCurrentQuiz(props.current_quiz + 1); props.setQuizResults({ ...props.quiz_results, score: props.quiz_results.score + 1}) }}>次へ（テスト用）</button>
            {props.quiz_problems[props.current_quiz].correct_choice}
            問題番号（テスト）: {props.current_quiz}
            スコア（テスト）: {props.quiz_results.score}
        </>
    );
}


export default AnswerSection;
