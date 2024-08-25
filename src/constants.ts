// Screen numbers
export const SCREENS = {
    TITLE: 0,
    OPTION: 1,
    MENU0: 10,
    GAME0: 20,
    LIST0: 30
} as const;


// Game options
export interface Options {
    music_volume: number;
    effect_volume: number;
    animation: boolean;
}
export const INITIAL_OPTIONS: Options = {
    music_volume: 100,
    effect_volume: 100,
    animation: true
};

// Game options constants
export interface OptionsConst {
    max_volume: number;
    min_volume: number;
}
export const OPTIONS_CONST: OptionsConst = {
    max_volume: 100,
    min_volume: 0
};


// Quiz options
export interface QuizOptions {
    difficulty: string;
    problems_num: number;
}
export const INITIAL_QUIZ_OPTIONS: QuizOptions = {
    difficulty: "easy",
    problems_num: 10
};

// Quiz options constants
export interface QuizOptionsConst {
    max_problems_num: number;
    min_problems_num: number;
}
export const QUIZ_OPTIONS_CONST: QuizOptionsConst = {
    max_problems_num: 40,
    min_problems_num: 10
};


// Quiz problem
export interface QuizProblem {
    problem_num: number;
    correct_ans_num: number;
    choices: number[];
}
export const INITIAL_QUIZ_PROBLEM: QuizProblem = {
    problem_num: 0,
    correct_ans_num: 0,
    choices: []
};


// Quiz Scores
export interface QuizScores {
    point: number;
}
export const INITIAL_QUIZ_SCORES: QuizScores = {
    point: 0
};
