import React from "react";
import { QuizProblem } from "../../constants";


interface Props {
    current_quiz: number;
    setCurrentQuiz: React.Dispatch<React.SetStateAction<number>>;
    quiz_problems: QuizProblem[];
}


function AnswerSection(props: Props) {
    return (
        <>
            <button onClick={() => { props.setCurrentQuiz(props.current_quiz + 1) }}>次へ（テスト用）</button>
            問題番号（テスト）: {props.current_quiz}
        </>
    );
}


export default AnswerSection;
