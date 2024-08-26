import React from "react";
import { QuizProblem, QuizScores } from "../../constants";


interface Props {
    current_quiz: number;
    setCurrentQuiz: React.Dispatch<React.SetStateAction<number>>;
    quiz_problems: QuizProblem[];
    quiz_scores: QuizScores;
    setQuizScores: React.Dispatch<React.SetStateAction<QuizScores>>;
}


function AnswerSection(props: Props) {
    return (
        <>
            <button onClick={() => { props.setCurrentQuiz(props.current_quiz + 1); props.setQuizScores({ ...props.quiz_scores, point: props.quiz_scores.point + 1}) }}>次へ（テスト用）</button>
            {props.quiz_problems[props.current_quiz].correct_choice}
            問題番号（テスト）: {props.current_quiz}
            スコア（テスト）: {props.quiz_scores.point}
        </>
    );
}


export default AnswerSection;
