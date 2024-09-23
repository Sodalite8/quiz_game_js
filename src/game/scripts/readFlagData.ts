import { FLAG_DATA_CONST, FlagData } from "../../_constants/constants";
import flag_data_list_json from "../texts/flags.json";
import categories_data_json from "../texts/categories.json";


const readFlagDataByKey = (key: "level" | "category", size: number): FlagData[][] => {
    const read_data: FlagData[][] = Array.from({ length: size }, () => []);
    flag_data_list_json.forEach(value => {
        if(value.available) {
            read_data[value[key]].push(value);
        }
    });


    return read_data;
};


export const FLAG_DATA_LIST: FlagData[] = flag_data_list_json;
export const FLAG_DATA_LIST_BY_LEVEL: FlagData[][] = readFlagDataByKey("level", FLAG_DATA_CONST.level_num);
export const FLAG_DATA_LIST_BY_CATEGORY: FlagData[][] = readFlagDataByKey("category", FLAG_DATA_CONST.category_num);


export const CATEGORIES_LIST: string[] = categories_data_json;
export const CATEGORIES_NUM: number = categories_data_json.length;
