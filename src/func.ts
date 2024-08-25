import React from "react";


// return maximum number in a and b
export const max = (a: number, b: number): number => {
    return ((a > b) ? a : b);
};

// return minimum number in a and b
export const min = (a: number, b: number): number => {
    return ((a < b) ? a : b);
};


// return random int in [min max]
export const getRandomInt = (max: number, min: number): number => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


// change obj[key] to value and update obj
export const changeNumber = <T extends Object>(obj: T, key: keyof T, value: string, setObj: React.Dispatch<React.SetStateAction<T>>): void => {
    if (typeof obj[key] !== "number") {
        throw new Error("The key's value is not number.");
    }

    const new_obj: T = { ...obj };
    if (!isNaN(parseInt(value))) {
        (new_obj[key] as number) = parseInt(value);
    }
    setObj(new_obj);
};

// validate obj[key] and update obj
export const validateNumber = <T extends Object>(obj: T, key: keyof T, max_val: number, min_val: number, setObj: React.Dispatch<React.SetStateAction<T>>) => {
    if (typeof obj[key] !== "number") {
        throw new Error("The key's value is not number.");
    }

    const new_obj: T = { ...obj };
    (new_obj[key] as number) = max(new_obj[key] as number, min_val);
    (new_obj[key] as number) = min(new_obj[key] as number, max_val);
    setObj(new_obj);
};

// change obj[key] to value and update obj
export const changeString = <T extends Object>(obj: T, key: keyof T, value: string, setObj: React.Dispatch<React.SetStateAction<T>>): void => {
    if (typeof obj[key] !== "string") {
        throw new Error("The key's value is not string");
    }

    const new_obj: T = { ...obj };
    (new_obj[key] as string) = value;
    setObj(new_obj);
};
