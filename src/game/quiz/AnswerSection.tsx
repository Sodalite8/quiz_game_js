import React from "react";
import { Options, OPTIONS_CONST, PATH_SOUNDS_ANSWER_FEEDBACK, QuizAnswer, QuizOptions, QuizProblem, QuizResults } from "../../_constants/constants";
import { changeArray, changeValues, roundBy, waitFor } from "../../_scripts/func";
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
    quiz_answers: QuizAnswer[];
    setQuizAnswers: React.Dispatch<React.SetStateAction<QuizAnswer[]>>;
    answered: boolean;
    setAnswered: React.Dispatch<React.SetStateAction<boolean>>;
    display_feedbacks: boolean[];
    setDisplayFeedbacks: React.Dispatch<React.SetStateAction<boolean[]>>;
}


// Place the buttons to answer the problems
function AnswerSection(props: Props) {
    const [playCorrectAnswer] = useSound(PATH_SOUNDS_ANSWER_FEEDBACK.correct,
        { volume: props.options.effect_volume / OPTIONS_CONST.max_volume }),
        [playWrongAnswer] = useSound(PATH_SOUNDS_ANSWER_FEEDBACK.wrong,
            { volume: props.options.effect_volume / OPTIONS_CONST.max_volume });


    const answerProblem = async (e: React.MouseEvent<HTMLButtonElement>) => {
        const ans: number = parseInt(e.currentTarget.name);

        props.setAnswered(true);

        if (ans === props.quiz_problems[props.current_quiz].correct_choice) {
            changeValues<QuizResults>(
                props.quiz_results, props.setQuizResults,
                ["score", "correct_answer_rate"],
                [props.quiz_results.score + 1,
                roundBy((props.quiz_results.score + 1) * 100 / (props.quiz_options.problems_num), 2)]
            );

            const new_quiz_answers = [...props.quiz_answers];
            new_quiz_answers.push(
                {
                    answer: ans,
                    correct: ans === props.quiz_problems[props.current_quiz].correct_choice
                }
            );

            playCorrectAnswer();
        }
        else {
            playWrongAnswer();
        }

        changeArray<boolean>(
            props.display_feedbacks,
            props.setDisplayFeedbacks,
            [props.quiz_problems[props.current_quiz].correct_choice, ans],
            [false, false]
        );


        await waitFor(1500);


        changeArray<boolean>(
            props.display_feedbacks,
            props.setDisplayFeedbacks,
            [props.quiz_problems[props.current_quiz].correct_choice, ans],
            [true, true]
        );
        props.setCurrentQuiz(props.current_quiz + 1);
        props.setAnswered(false);
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
                correct={index === props.quiz_problems[props.current_quiz].correct_choice}
                img_disable={props.display_feedbacks[index]}
            />
        );
    });


    return (
        <div className="relative flex flex-col items-center justify-center p-4">
            <div className="grid grid-cols-2 gap-x-16 gap-y-4">
                {answer_buttons}
            </div>
        </div>
    );
}


export default AnswerSection;
