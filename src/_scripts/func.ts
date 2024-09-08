import React from "react";


// The union of the primitive types
type Primitive = number | boolean | string | symbol | null | undefined;


// Return minimum number in a and b
export const min = (a: number, b: number): number => {
    return ((a < b) ? a : b);
};


// Return maximum number in a and b
export const max = (a: number, b: number): number => {
    return ((a > b) ? a : b);
};


// Return random int in [min max]
export const getRandomInt = (min: number, max: number): number => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};


// Shuffle array by Fisher-Yates algorithm
export const fisherYatesShuffle = <T extends Primitive>(array: T[]): T[] => {
    const shuffled: T[] = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(getRandomInt(0, i));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
};


// Change obj[key] to value and update obj
export const changeNumber = <T extends object>(obj: T, key: keyof T, value: number | string, setObj: React.Dispatch<React.SetStateAction<T>>): void => {
    if (typeof obj[key] !== "number") {
        throw new Error("The key's value is not number.");
    }

    const new_obj: T = { ...obj };
    if (typeof value === "number") {
        (new_obj[key] as number) = value;
    }
    else if (typeof value === "string") {
        if (!isNaN(parseInt(value))) {
            (new_obj[key] as number) = parseInt(value);
        }
    }
    setObj(new_obj);
};


// Validate obj[key] and update obj
export const validateNumber = <T extends object>(obj: T, key: keyof T, min_val: number, max_val: number, setObj: React.Dispatch<React.SetStateAction<T>>) => {
    if (typeof obj[key] !== "number") {
        throw new Error("The key's value is not number.");
    }

    const new_obj: T = { ...obj };
    (new_obj[key] as number) = max(new_obj[key] as number, min_val);
    (new_obj[key] as number) = min(new_obj[key] as number, max_val);
    setObj(new_obj);
};


// Change obj[key] to value and update obj
export const changeString = <T extends object>(obj: T, key: keyof T, value: string, setObj: React.Dispatch<React.SetStateAction<T>>): void => {
    if (typeof obj[key] !== "string") {
        throw new Error("The key's value is not string");
    }

    const new_obj: T = { ...obj };
    (new_obj[key] as string) = value;
    setObj(new_obj);
};
