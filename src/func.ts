import React from "react";


// return maximum number in a and b
export const max = (a: number, b: number): number => {
    return ((a > b) ? a : b);
};

// return minimum number in a and b
export const min = (a: number, b: number): number => {
    return ((a < b) ? a : b);
};


// union of keys in T whose type is number
type NumberKeysOf<T extends Object> = keyof {
    [K in keyof T]: T[K] extends number ? K : never
}[keyof T];

// change obj[key] to value and update obj
export const changeNumber = <T extends Object>(obj: T, setObj: React.Dispatch<React.SetStateAction<T>>, key: NumberKeysOf<T>, value: string): void => {
    const new_obj: T = { ...obj };
    if (!isNaN(parseInt(value))) {
        (new_obj[key as keyof T] as number) = parseInt(value);
    }
    setObj(new_obj);
};

// validate obj[key] and update obj
export const validateNumber = <T extends Object>(obj: T, setObj: React.Dispatch<React.SetStateAction<T>>, key: NumberKeysOf<T>, max_val: number, min_val: number) => {
    const new_obj: T = { ...obj };
    (obj[key as keyof T] as number) = max(obj[key as keyof T] as number, min_val);
    (obj[key as keyof T] as number) = min(obj[key as keyof T] as number, max_val);
    setObj(new_obj);
}
