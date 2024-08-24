export const SCREENS = {
    TITLE: 0,
    OPTION: 1,
    MENU0: 10,
    GAME0: 20,
    LIST0: 30
} as const;


export interface Options {
    music_volume: number;
    effect_volume: number;
    animation: boolean;
};
export const INITIAL_OPTIONS: Options = {
    music_volume: 100,
    effect_volume: 100,
    animation: true
};

export interface Options_Const {
    max_volume: number;
    min_volume: number;
};
export const OPTIONS_CONST: Options_Const = {
    max_volume: 100,
    min_volume: 0
};

export interface Quiz_Options {
    difficulty: string;
    problems_num: number;
};
export const INITIAL_QUIZ_OPTIONS: Quiz_Options = {
    difficulty: "easy",
    problems_num: 10
};
