// プロジェクト内で使用する定数や型定義
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
    min_volume: 0,
    max_volume: 100
} as const;


// Quiz options
export interface QuizOptions {
    difficulty: number;
    problems_num: number;
}
export const INITIAL_QUIZ_OPTIONS: QuizOptions = {
    difficulty: 2,
    problems_num: 10
} as const;


// Quiz options constants
export interface QuizOptionsConst {
    min_problems_num: number;
    max_problems_num: number;
}
export const QUIZ_OPTIONS_CONST: QuizOptionsConst = {
    min_problems_num: 10,
    max_problems_num: 20
} as const;


// Quiz problem format
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


// Quiz results
export interface QuizResults {
    score: number;
    correct_answer_rate: number;
}
export const INITIAL_QUIZ_RESULTS: QuizResults = {
    score: 0,
    correct_answer_rate: 0
} as const;


// Flag data format
export interface FlagData {
    id: number;
    available: boolean,
    name: string;
    period: string;
    level: number;
    category: number;
}
export const INITIAL_FLAG_DATA: FlagData = {
    id: -1,
    available: false,
    name: "",
    period: "",
    level: -1,
    category: -1
} as const;


// Flag data constants
export interface FlagDataConst {
    level_num: number;
}
export const FLAG_DATA_CONST: FlagDataConst = {
    level_num: 3
} as const;
