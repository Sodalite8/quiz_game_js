// Screen numbers
export const SCREENS = {
    TITLE: 0,
    OPTION: 1,
    GAME0: 10,
    LIST0: 20
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
} as const;

// Game options constants
export interface OptionsConst {
    max_volume: number;
    min_volume: number;
}
export const OPTIONS_CONST: OptionsConst = {
    max_volume: 100,
    min_volume: 0
} as const;


// Quiz options
export interface QuizOptions {
    difficulty: string;
    problems_num: number;
}
export const INITIAL_QUIZ_OPTIONS: QuizOptions = {
    difficulty: "easy",
    problems_num: 10
} as const;

// Quiz options constants
export interface QuizOptionsConst {
    max_problems_num: number;
    min_problems_num: number;
}
export const QUIZ_OPTIONS_CONST: QuizOptionsConst = {
    max_problems_num: 40,
    min_problems_num: 10
} as const;


// Quiz problem
export interface QuizProblem {
    problem_id: number;
    choice_ids: number[];
    correct_choice: number;
}
export const INITIAL_QUIZ_PROBLEM: QuizProblem = {
    problem_id: 0,
    choice_ids: [],
    correct_choice: 0
};


// Quiz Scores
export interface QuizScores {
    point: number;
}
export const INITIAL_QUIZ_SCORES: QuizScores = {
    point: 0
} as const;
