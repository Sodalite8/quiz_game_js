export const SCREENS = {
    TITLE: 0,
    OPTION: 1,
    MENU0: 10,
    GAME0: 20,
    LIST0: 30
} as const;


export interface Options{
    music_volume: number;
    effect_volume: number;
    animation: boolean;
}

export const INITIAL_OPTIONS: Options = {
    music_volume: 100,
    effect_volume: 100,
    animation: true
}
