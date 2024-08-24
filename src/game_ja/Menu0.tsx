import React from 'react';
import { Quiz_Options, SCREENS } from "../constants";


interface Props {
    screen: number;
    setScreen: React.Dispatch<React.SetStateAction<number>>;
    quiz_options: Quiz_Options;
    setQuizOptions: React.Dispatch<React.SetStateAction<Quiz_Options>>
}

function Menu0(props: Props) {
    const changeDifficulty = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const new_quiz_options = { ...props.quiz_options, difficulty: e.target.value };
        props.setQuizOptions(new_quiz_options);
    };
    const changeProblemsNum = (e: React.ChangeEvent<HTMLInputElement>) => {
        const new_quiz_options = { ...props.quiz_options, problems_num: parseInt(e.target.value) };
        new_quiz_options.problems_num = (isNaN(new_quiz_options.problems_num))? props.quiz_options.problems_num: new_quiz_options.problems_num;
        props.setQuizOptions(new_quiz_options);
    };
    const validateProblemsNum = () => {
        const new_quiz_options = { ...props.quiz_options };
        new_quiz_options.problems_num = ((new_quiz_options.problems_num < 10)? 10: new_quiz_options.problems_num);
        new_quiz_options.problems_num = ((new_quiz_options.problems_num > 40)? 40: new_quiz_options.problems_num);
        props.setQuizOptions(new_quiz_options);
    };


    return (
        <>
            <h2 className="menu0_text">問題設定</h2>
            <div>
                難易度
                <div>
                    <select name="sel_difficulty" value={props.quiz_options.difficulty} onChange={changeDifficulty}>
                        <option value="easy">Easy</option>
                        <option value="normal">Normal</option>
                        <option value="hard">Hard</option>
                        <option value="hardcore">Hardcore</option>
                    </select>
                </div>
                問題数
                <div>
                    <input type="range" name="ran_problems_num" min="10" max="40" step="1" value={props.quiz_options.problems_num} onChange={changeProblemsNum}></input>
                    <input type="number" name="num_problems_num" min="10" max="40" step="1" value={props.quiz_options.problems_num} onChange={changeProblemsNum} onBlur={validateProblemsNum}></input>
                </div>
            </div>
            <div>
                <button onClick={() => props.setScreen(SCREENS.TITLE)}>タイトルに戻る</button>
            </div>
            <p>Test: {props.quiz_options.problems_num}</p>
        </>
    );
}

export default Menu0;
