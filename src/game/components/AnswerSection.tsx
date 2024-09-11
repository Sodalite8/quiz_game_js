import React from "react";
import { QuizProblem, QuizResults } from "../../_constants/constants";
import { changeNumber } from "../../_scripts/func";
import { FLAG_DATA_LIST } from "../scripts/readFlagData";


interface Props {
    current_quiz: number;
    setCurrentQuiz: React.Dispatch<React.SetStateAction<number>>;
    quiz_problems: QuizProblem[];
    quiz_results: QuizResults;
    setQuizResults: React.Dispatch<React.SetStateAction<QuizResults>>;
}


// Place the buttons to answer the problems
function AnswerSection(props: Props) {
    const answerProblem = (e: React.MouseEvent<HTMLButtonElement>) => {
        if (parseInt(e.currentTarget.name) === props.quiz_problems[props.current_quiz].correct_choice) {
            changeNumber(props.quiz_results, "score", props.quiz_results.score + 1, props.setQuizResults);
        }
        props.setCurrentQuiz(props.current_quiz + 1);
    };


    const answer_buttons = props.quiz_problems[props.current_quiz].choice_ids.map((id, index) => {
        return (
            <button name={String(index)} onClick={answerProblem}>{FLAG_DATA_LIST[id].name}({FLAG_DATA_LIST[id].period})</button>
        );
    });


    return (
        <div className="mt-16 grid grid-cols-2 gap-4 p-4">
            {answer_buttons}
        </div>
    );
}


export default AnswerSection;
