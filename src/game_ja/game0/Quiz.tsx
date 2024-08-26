import React from 'react';
import ProblemSection from './ProblemSection';
import AnswerSection from './AnswerSection';
import { QuizProblem, SCREENS } from '../../constants';


interface Props {
    screen: number;
    setScreen: React.Dispatch<React.SetStateAction<number>>;
    current_quiz: number;
    setCurrentQuiz: React.Dispatch<React.SetStateAction<number>>;
    quiz_problems: QuizProblem[]
}


// The unit of quiz game components like button and image
function Quiz(props: Props) {
    // About finishing the quiz in the middle
    const exitQuiz = () => {
        const ans: boolean = window.confirm("本当に終了しますか？");
        if (ans) {
            props.setScreen(SCREENS.GAME0);
        }
        console.log(props.current_quiz);
    };


    return (
        <>
            <div>
                <ProblemSection current_quiz={props.current_quiz} quiz_problems={props.quiz_problems} />
            </div>
            <div>
                <AnswerSection current_quiz={props.current_quiz} setCurrentQuiz={props.setCurrentQuiz} quiz_problems={props.quiz_problems} />
            </div>
            <div>
                <button onClick={exitQuiz}>クイズを終了する</button>
            </div>
        </>
    );
}


export default Quiz;
