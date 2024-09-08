import React from "react";
import { QUIZ_OPTIONS_CONST, QuizOptions, QuizProblem, SCREENS } from "../../_constants/constants";
import { changeString, changeNumber, validateNumber } from "../../_scripts/func";
import { createProblems } from "../scripts/createProblems";


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
        changeNumber<QuizOptions>(props.quiz_options, "difficulty", e.target.value, props.setQuizOptions);
    };

    // About the number of problems in the quiz
    const changeProblemsNum = (e: React.ChangeEvent<HTMLInputElement>) => {
        changeNumber<QuizOptions>(props.quiz_options, "problems_num", e.target.value, props.setQuizOptions);
    };
    const validateProblemsNum = () => {
        validateNumber<QuizOptions>(props.quiz_options, "problems_num", QUIZ_OPTIONS_CONST.min_problems_num, QUIZ_OPTIONS_CONST.max_problems_num, props.setQuizOptions);
    };

    // About creating the problems and starting the quiz
    const startQuiz = () => {
        props.setQuizProblems(createProblems(props.quiz_options));
        props.setCurrentQuiz(0);
    };


    return (
        <>
            <h2 className="menu0_text">問題設定</h2>
            <div>
                難易度
                <div>
                    <select name="sel_difficulty" value={props.quiz_options.difficulty} onChange={changeDifficulty}>
                        <option value="0">Easycore</option>
                        <option value="1">Easy</option>
                        <option value="2">Normal</option>
                        <option value="3">Hard</option>
                        <option value="4">Hardcore</option>
                    </select>
                </div>
                問題数
                <div>
                    <input type="range" name="ran_problems_num"
                        min={QUIZ_OPTIONS_CONST.min_problems_num} max={QUIZ_OPTIONS_CONST.max_problems_num} step="1"
                        value={props.quiz_options.problems_num} onChange={changeProblemsNum}></input>
                    <input type="number" name="num_problems_num"
                        min={QUIZ_OPTIONS_CONST.min_problems_num} max={QUIZ_OPTIONS_CONST.max_problems_num} step="1"
                        value={props.quiz_options.problems_num} onChange={changeProblemsNum} onBlur={validateProblemsNum}></input>
                </div>
            </div>
            <div>
                <button onClick={startQuiz}>クイズ開始</button>
            </div>
            <div>
                <button onClick={() => props.setScreen(SCREENS.TITLE)}>タイトルに戻る</button>
            </div>
        </>
    );
}


export default QuizOption;
