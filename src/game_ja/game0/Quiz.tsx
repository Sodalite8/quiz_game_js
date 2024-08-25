import React from 'react';
import ProblemSection from './ProblemSection';
import AnswerSection from './AnswerSection';
import { QuizProblem } from '../../constants';


interface Props {
    current_quiz: number;
    setCurrentQuiz: React.Dispatch<React.SetStateAction<number>>;
    quiz_problems: QuizProblem[]
}


// The unit of quiz game components like button and image
function Quiz(props: Props) {
    return (
        <>
            <div>
                <ProblemSection current_quiz={props.current_quiz} quiz_problems={props.quiz_problems} />
            </div>
            <div>
                <AnswerSection current_quiz={props.current_quiz} setCurrentQuiz={props.setCurrentQuiz} quiz_problems={props.quiz_problems} />
            </div>
        </>
    );
}


export default Quiz;
