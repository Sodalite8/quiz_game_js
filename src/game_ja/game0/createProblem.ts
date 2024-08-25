import React from "react";
import { INITIAL_QUIZ_PROBLEM, QuizOptions, QuizProblem } from "../../constants";
import { getRandomInt } from "../../func";


export const createProblems = (quiz_options: QuizOptions): QuizProblem[] => {
    const quiz_problems: QuizProblem[] = [];
    

    const new_problem: QuizProblem = INITIAL_QUIZ_PROBLEM;
    for(let i = 0; i < quiz_options.problems_num; i++) {
        new_problem.problem_id = getRandomInt(0, 99);
        new_problem.correct_choice = getRandomInt(0, 3);
        for(let j = 0; j < 4; j++) {
            if(j === new_problem.correct_choice) {
                new_problem.choice_ids.push(new_problem.problem_id);
            }
            new_problem.choice_ids.push(getRandomInt(0, 99));
        }
        quiz_problems.push(new_problem);
    }


    return quiz_problems;
};
