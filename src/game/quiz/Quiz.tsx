import React from 'react';
import ProblemSection from '../components/ProblemSection';
import AnswerSection from '../components/AnswerSection';
import { INITIAL_QUIZ_RESULTS, Options, QuizOptions, QuizProblem, QuizResults } from '../../_constants/constants';
import { SmallButton } from '../components/Buttons';


interface Props {
    options: Options;
    quiz_options: QuizOptions;
    current_quiz: number;
    setCurrentQuiz: React.Dispatch<React.SetStateAction<number>>;
    quiz_problems: QuizProblem[];
    setQuizProblems: React.Dispatch<React.SetStateAction<QuizProblem[]>>;
    quiz_results: QuizResults;
    setQuizResults: React.Dispatch<React.SetStateAction<QuizResults>>;
}


// The unit of quiz game components like button and image
function Quiz(props: Props) {
    const [answered, setAnswered] = React.useState<boolean>(false);
    const [correct, setCorrect] = React.useState<boolean>(false);


    // About finishing the quiz in the middle
    const exitQuiz = () => {
        const ans: boolean = window.confirm("本当に終了しますか？");
        if (ans) {
            props.setCurrentQuiz(-1);
            props.setQuizProblems([]);
            props.setQuizResults(INITIAL_QUIZ_RESULTS);
        }
    };


    return (
        <>
            <div className='relative flex w-full flex-col items-center px-8'>
                <ProblemSection current_quiz={props.current_quiz}
                    quiz_problems={props.quiz_problems} />
                <AnswerSection options={props.options} 
                    quiz_options={props.quiz_options} 
                    current_quiz={props.current_quiz}
                    setCurrentQuiz={props.setCurrentQuiz}
                    quiz_problems={props.quiz_problems}
                    quiz_results={props.quiz_results} 
                    setQuizResults={props.setQuizResults} 
                    answered={answered} 
                    setAnswered={setAnswered}
                    correct={correct}
                    setCorrect={setCorrect} />
            </div>


            <div className='absolute top-full flex w-full -translate-y-full 
                items-center justify-center border-t-4 border-yellow-400/60 
                p-4'>
                <SmallButton disable={answered}
                    click={exitQuiz}
                    text='クイズを終了' />
            </div>
        </>
    );
}


export default Quiz;
