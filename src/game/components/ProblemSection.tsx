import React from 'react';
import { QuizProblem } from '../../_constants/constants';


interface Props {
    current_quiz: number
    quiz_problems: QuizProblem[];
}


// Show problems images
function ProblemSection(props: Props) {
    return (
        <>
            <div>
                <h2>この国は？</h2>
            </div>
            <div>
                <img src={`./images/flags/flag${props.quiz_problems[props.current_quiz].problem_id}.png`} alt="problem_img"></img>
            </div>
        </>
    );
}


export default ProblemSection;
