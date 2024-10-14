// プロジェクト内で汎用的に用いる関数の定義
import React from "react";


// プリミティブ型のユニオン
type Primitive = number | boolean | string | symbol | null | undefined;


// aとbのうち、最小値を返す
export const min = (a: number, b: number): number => {
    return ((a < b) ? a : b);
};


// aとbのうち、最大値を返す
export const max = (a: number, b: number): number => {
    return ((a > b) ? a : b);
};


// [min max]におけるランダムな整数を返す
export const getRandomInt = (min: number, max: number): number => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};


// arrayをフィッシャー＝イェーツアルゴリズムでシャッフルする
export const fisherYatesShuffle = <T extends Primitive>(array: T[]): T[] => {
    const shuffled: T[] = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(getRandomInt(0, i));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
};


// obj[keys[i]]をvalues[i]に書き換え、setObjで更新
export const changeValues = <T extends object>(obj: T,
    setObj: React.Dispatch<React.SetStateAction<T>>,
    keys: (keyof T)[], values: (number | string | boolean)[]) => {

    const new_obj: T = { ...obj };

    keys.forEach((key, index) => {
        // 更新対象のプロパティの型
        // プロパティの更新先の値
        const type_key = typeof new_obj[key],
            type_value = typeof values[index];

        // number型の場合
        if (type_key === "number") {
            if (type_value !== "number") {
                throw new Error("The input value is not number.");
            }

            (new_obj[key] as number) = (values[index] as number);
        }

        // boolean型の場合
        else if (type_key === "boolean") {
            if (type_value !== "boolean") {
                throw new Error("The input value is not boolean.");
            }

            (new_obj[key] as boolean) = (values[index] as boolean);
        }

        // string型の場合
        else if (type_key === "string") {
            if (type_value !== "string") {
                throw new Error("The input value is not string.");
            }

            (new_obj[key] as string) = (values[index] as string);
        }
    });

    setObj(new_obj);
};


// numを[min_val max_val]に制限
export const limitToRange = (num: number, min_val: number, max_val: number) => {
    num = max(num, min_val);
    num = min(num, max_val);
    return num;
};


// Validate obj[key] and update obj
export const validateNumber = <T extends object>(obj: T,
    setObj: React.Dispatch<React.SetStateAction<T>>, key: keyof T,
    min_val: number, max_val: number) => {
    if (typeof obj[key] !== "number") {
        throw new Error("The key's value is not number.");
    }

    const new_obj: T = { ...obj };
    (new_obj[key] as number) = max(new_obj[key] as number, min_val);
    (new_obj[key] as number) = min(new_obj[key] as number, max_val);
    setObj(new_obj);
};


// millisecの間、処理を停止
// await, asyncを用いること
export const waitFor = (millisec: number) => {
    return new Promise<void>((resolve) => {
        setTimeout(() => {
            resolve();
        }, millisec);
    });
};


// numを小数点以下第place位以下で四捨五入
export const roundBy = (num: number, place: number) => {
    Math.round(place);
    return Math.round(num * (10 ** 2)) / (10 ** 2);
};
