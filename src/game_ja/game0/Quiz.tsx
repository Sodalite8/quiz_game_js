import React from 'react';
import ProblemSection from './ProblemSection';
import AnswerSection from './AnswerSection';
import { INITIAL_QUIZ_SCORES, QuizProblem, QuizScores } from '../../constants';


interface Props {
    current_quiz: number;
    setCurrentQuiz: React.Dispatch<React.SetStateAction<number>>;
    quiz_problems: QuizProblem[];
    setQuizProblems: React.Dispatch<React.SetStateAction<QuizProblem[]>>;
    quiz_scores: QuizScores;
    setQuizScores: React.Dispatch<React.SetStateAction<QuizScores>>;
}


// The unit of quiz game components like button and image
function Quiz(props: Props) {
    // About finishing the quiz in the middle
    const exitQuiz = () => {
        const ans: boolean = window.confirm("本当に終了しますか？");
        if (ans) {
            props.setCurrentQuiz(-1);
            props.setQuizProblems([]);
            props.setQuizScores(INITIAL_QUIZ_SCORES);
        }
    };


    return (
        <>
            <div>
                <ProblemSection current_quiz={props.current_quiz} quiz_problems={props.quiz_problems} />
            </div>
            <div>
                <AnswerSection current_quiz={props.current_quiz} setCurrentQuiz={props.setCurrentQuiz} 
                    quiz_problems={props.quiz_problems}
                    quiz_scores={props.quiz_scores} setQuizScores={props.setQuizScores} />
            </div>
            <div>
                <button onClick={exitQuiz}>クイズを終了する</button>
            </div>
        </>
    );
}


export default Quiz;
