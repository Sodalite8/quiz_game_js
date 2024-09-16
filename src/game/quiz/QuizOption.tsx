import React from "react";
import { QUIZ_OPTIONS_CONST, QuizOptions, QuizProblem, SCREENS } from "../../_constants/constants";
import { changeValues, validateNumber } from "../../_scripts/func";
import { createProblems } from "../scripts/createProblems";
import { MediumButton } from "../components/Buttons";
import { RangeAndNumber } from "../components/Ranges";


interface Props {
    screen: number;
    setScreen: React.Dispatch<React.SetStateAction<number>>;
    quiz_options: QuizOptions;
    setQuizOptions: React.Dispatch<React.SetStateAction<QuizOptions>>;
    current_quiz: number;
    setCurrentQuiz: React.Dispatch<React.SetStateAction<number>>;
    quiz_problems: QuizProblem[];
    setQuizProblems: React.Dispatch<React.SetStateAction<QuizProblem[]>>
}


// Quiz options
function QuizOption(props: Props) {
    // About quiz difficulty
    const changeDifficulty = (e: React.ChangeEvent<HTMLSelectElement>) => {
        changeValues<QuizOptions>(props.quiz_options, props.setQuizOptions, 
            ["difficulty"], [parseInt(e.target.value)]);
    };


    // About the number of problems in the quiz
    const changeProblemsNum = (e: React.ChangeEvent<HTMLInputElement>) => {
        if(!isNaN(parseInt(e.target.value))) {
            changeValues<QuizOptions>(props.quiz_options, props.setQuizOptions, 
                ["problems_num"], [parseInt(e.target.value)]);
        }
    };
    const validateProblemsNum = () => {
        validateNumber<QuizOptions>(props.quiz_options, props.setQuizOptions, "problems_num", QUIZ_OPTIONS_CONST.min_problems_num, QUIZ_OPTIONS_CONST.max_problems_num);
    };


    // About creating the problems and starting the quiz
    const startQuiz = () => {
        props.setQuizProblems(createProblems(props.quiz_options));
        props.setCurrentQuiz(0);
    };


    return (
        <>
            <div className='relative flex h-32 w-full items-center 
                justify-center border-b-4 border-yellow-400/60'>
                <h2 className='text-4xl font-bold'>
                    クイズ設定
                </h2>
            </div>


            <div className="relative flex w-full flex-col items-center 
                justify-center px-8">
                <div className="flex w-full items-center
                    justify-between p-4">
                    <span className="p-2 text-lg font-bold">
                        難易度
                    </span>
                    <select name="sel_difficulty" value={props.quiz_options.difficulty} onChange={changeDifficulty}>
                        <option value="0">Easycore</option>
                        <option value="1">Easy</option>
                        <option value="2">Normal</option>
                        <option value="3">Hard</option>
                        <option value="4">Hardcore</option>
                    </select>
                </div>


                <div className="flex w-full items-center
                    justify-between p-4">
                    <span className="p-2 text-lg font-bold">
                        問題数
                    </span>
                    <RangeAndNumber min={QUIZ_OPTIONS_CONST.min_problems_num}
                        max={QUIZ_OPTIONS_CONST.max_problems_num} step={1}
                        value={props.quiz_options.problems_num}
                        change={changeProblemsNum}
                        blur={validateProblemsNum} />
                </div>

                <div className="mt-8 flex w-full flex-col
                    items-center justify-center p-4">
                    <MediumButton click={startQuiz}
                        text="クイズスタート" />
                </div>
            </div>


            <div className='absolute top-full flex w-full -translate-y-full 
                flex-col items-center justify-center border-t-4 
                border-yellow-400/60 p-4'>
                <MediumButton
                    click={() => props.setScreen(SCREENS.TITLE)}
                    text='タイトルに戻る' />
            </div>
        </>
    );
}


export default QuizOption;
