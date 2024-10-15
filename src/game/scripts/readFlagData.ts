import { FLAG_DATA_CONST, FlagData } from "../../_constants/constants";
import flag_data_list_json from "../texts/flags.json";
import categories_data_json from "../texts/categories.json";


// レベルまたは分類で旗データを振り分け
const readFlagDataByKey = (key: "level" | "category", size: number): FlagData[][] => {
    const read_data: FlagData[][] = Array.from({ length: size }, () => []);
    flag_data_list_json.forEach(value => {
        if (value.available) {
            read_data[value[key]].push(value);
        }
    });


    return read_data;
};


// 分類データリスト
// 分類データの数
export const CATEGORIES_LIST: string[] = categories_data_json;
export const CATEGORIES_NUM: number = categories_data_json.length;


// 旗データリスト
// レベル別旗データリスト
// 分類別旗データリスト
export const FLAG_DATA_LIST: FlagData[] = flag_data_list_json;
export const FLAG_DATA_LIST_BY_LEVEL: FlagData[][] = readFlagDataByKey("level", FLAG_DATA_CONST.level_num);
export const FLAG_DATA_LIST_BY_CATEGORY: FlagData[][] = readFlagDataByKey("category", CATEGORIES_NUM);
