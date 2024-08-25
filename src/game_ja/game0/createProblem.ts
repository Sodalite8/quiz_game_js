import React from "react";
import { INITIAL_QUIZ_PROBLEM, QuizProblem } from "../../constants";
import { getRandomInt } from "../../func";


export const createProblems = (problems_num: number): QuizProblem[] => {
    const quiz_problems: QuizProblem[] = [];
    

    const new_problem: QuizProblem = INITIAL_QUIZ_PROBLEM;
    for(let i = 0; i < problems_num; i++) {
        new_problem.problem_num = getRandomInt(0, 99);
        new_problem.correct_ans_num = getRandomInt(0, 3);
        for(let j = 0; j < 4; j++) {
            if(j === new_problem.correct_ans_num) {
                new_problem.choices.push(new_problem.problem_num);
            }
            new_problem.choices.push(getRandomInt(0, 99));
        }
        quiz_problems.push(new_problem);
    }

    
    return quiz_problems;
};
