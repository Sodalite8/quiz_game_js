import React from "react";
import { Options, OPTIONS_CONST, QuizOptions, QuizProblem, QuizResults } from "../../_constants/constants";
import { changeValues, roundBy, waitFor } from "../../_scripts/func";
import { FLAG_DATA_LIST } from "../scripts/readFlagData";
import { AnswerButton } from "../components/Buttons";
import useSound from "use-sound";


interface Props {
    options: Options;
    quiz_options: QuizOptions;
    current_quiz: number;
    setCurrentQuiz: React.Dispatch<React.SetStateAction<number>>;
    quiz_problems: QuizProblem[];
    quiz_results: QuizResults;
    setQuizResults: React.Dispatch<React.SetStateAction<QuizResults>>;
    answered: boolean;
    setAnswered: React.Dispatch<React.SetStateAction<boolean>>;
    correct: boolean;
    setCorrect: React.Dispatch<React.SetStateAction<boolean>>;
}


// Place the buttons to answer the problems
function AnswerSection(props: Props) {
    const [playCorrectAnswer] = useSound("./audio/correct_answer.mp3",
        { volume: props.options.effect_volume / OPTIONS_CONST.max_volume }),
        [playWrongAnswer] = useSound("./audio/wrong_answer.mp3",
            { volume: props.options.effect_volume / OPTIONS_CONST.max_volume });


    const answerProblem = async (e: React.MouseEvent<HTMLButtonElement>) => {
        const ans = parseInt(e.currentTarget.name);

        if (ans === props.quiz_problems[props.current_quiz].correct_choice) {
            changeValues<QuizResults>(props.quiz_results, props.setQuizResults,
                ["score", "correct_answer_rate"],
                [props.quiz_results.score + 1,
                roundBy((props.quiz_results.score + 1) * 100 / (props.quiz_options.problems_num), 2)]);
            props.setCorrect(true);
            playCorrectAnswer();
        }
        else {
            playWrongAnswer();
        }

        props.setAnswered(true);
        await waitFor(1000);

        props.setAnswered(false);
        props.setCorrect(false);
        props.setCurrentQuiz(props.current_quiz + 1);
    };


    const answer_buttons = props.quiz_problems[props.current_quiz].choice_ids.map((id, index) => {
        return (
            <AnswerButton
                key={index}
                text={`${FLAG_DATA_LIST[id].name}(${FLAG_DATA_LIST[id].period})`}
                name={String(index)}
                disable={props.answered}
                click={answerProblem}
                animation={props.options.animation}
            />
        );
    });


    return (
        <div className="relative flex flex-col items-center justify-center p-4">
            <div className="grid grid-cols-2 gap-x-16 gap-y-4">
                {answer_buttons}
            </div>


            <div className="absolute">
                {props.answered &&
                    <img
                        className="size-64 opacity-80"
                        src={((props.correct) ? "./images/ui/correct.svg" : "./images/ui/incorrect.svg")}
                        alt="result_img"
                    />
                }
            </div>
        </div>
    );
}


export default AnswerSection;
