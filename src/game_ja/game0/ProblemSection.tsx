import React from 'react';
import test_img from "./flags/Test.png";
import { QuizProblem } from '../../constants';


interface Props {
    current_quiz: number
    quiz_problems: QuizProblem[];
}


function ProblemSection(props: Props) {
    return (
        <>
            <div>
                <h2>この国は？</h2>
            </div>
            <div>
                <h2>{props.quiz_problems[props.current_quiz].problem_id}</h2>
            </div>
        </>
    );
}


export default ProblemSection;
