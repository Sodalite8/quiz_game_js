import React from "react";
import { QuizProblem, QuizResults } from "../../constants";
import { changeNumber } from "../../func";


interface Props {
    current_quiz: number;
    setCurrentQuiz: React.Dispatch<React.SetStateAction<number>>;
    quiz_problems: QuizProblem[];
    quiz_results: QuizResults;
    setQuizResults: React.Dispatch<React.SetStateAction<QuizResults>>;
}


function AnswerSection(props: Props) {
    const answerProblem = (e: React.MouseEvent<HTMLButtonElement>) => {
        if (parseInt(e.currentTarget.name) === props.quiz_problems[props.current_quiz].correct_choice) {
            changeNumber(props.quiz_results, "score", props.quiz_results.score + 1, props.setQuizResults);
        }
        props.setCurrentQuiz(props.current_quiz + 1);
    };


    const answer_buttons = props.quiz_problems[props.current_quiz].choice_ids.map((id, index) => {
        return (
            <button name={String(index)} onClick={answerProblem}>{id}</button>
        );
    });


    return (
        <>
            {answer_buttons}
            問題番号（テスト）: {props.current_quiz}
            スコア（テスト）: {props.quiz_results.score}
        </>
    );
}


export default AnswerSection;
