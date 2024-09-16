import React from "react"
import { INITIAL_QUIZ_RESULTS, QuizProblem, QuizResults, SCREENS } from "../../_constants/constants";
import { MediumButton } from "../components/Buttons";
import useSound from "use-sound";


interface Props {
    screen: number;
    setScreen: React.Dispatch<React.SetStateAction<number>>;
    current_quiz: number;
    setCurrentQuiz: React.Dispatch<React.SetStateAction<number>>;
    quiz_problems: QuizProblem[];
    setQuizProblems: React.Dispatch<React.SetStateAction<QuizProblem[]>>;
    quiz_results: QuizResults;
    setQuizResults: React.Dispatch<React.SetStateAction<QuizResults>>;
}


// Show the results of games
function Result(props: Props) {
    // About finishing the quiz
    const exitQuiz = () => {
        props.setCurrentQuiz(-1);
        props.setQuizProblems([]);
        props.setQuizResults(INITIAL_QUIZ_RESULTS);
    };


    return (
        <>
            <div className="relative flex h-32 w-full items-center 
                justify-center border-b-4 border-yellow-400/60">
                <h2 className="text-4xl font-bold">
                    リザルト
                </h2>
            </div>


            <div className="relative flex w-full items-center 
                justify-around px-8">
                <div className="flex flex-col items-center justify-center p-4">
                    <h3 className="p-2 text-2xl font-bold">
                        スコア
                    </h3>
                    <h2 className="p-2 text-4xl font-bold">
                        {props.quiz_results.score} / {props.current_quiz}
                    </h2>
                </div>
                <div className="flex flex-col items-center justify-center p-4">
                    <span className="p-2 text-2xl font-bold">
                        正答率
                    </span>
                    <h3 className="p-2 text-4xl font-bold">
                        {props.quiz_results.correct_answer_rate}%
                    </h3>
                </div>
            </div>



            <div className='absolute top-full flex w-full -translate-y-full 
                items-center justify-center border-t-4 border-yellow-400/60 
                p-4'>
                <MediumButton
                    click={exitQuiz}
                    text="問題設定に戻る" />
                <MediumButton
                    click={() => props.setScreen(SCREENS.TITLE)}
                    text='タイトルに戻る' />
            </div>
        </>
    );
}


export default Result;
