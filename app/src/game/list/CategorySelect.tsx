import { Options } from "../../_constants/constants";
import { CategoryButton } from "../components/Buttons";
import { CATEGORIES_LIST } from "../scripts/readFlagData";


interface Props {
    options: Options;
    setCurrentCategory: React.Dispatch<React.SetStateAction<number>>;
}


// 図鑑の分類選択画面
function CategorySelect(props: Props) {
    // 分類選択ボタンの配列
    const category_buttons = CATEGORIES_LIST.map((value, index) => {
        return (
            <CategoryButton
                key={index}
                text={value}
                click={() => props.setCurrentCategory(index)}
                animation={props.options.animation}
            />
        );
    });


    return (
        <div className='grid grid-cols-2 gap-x-8 gap-y-4 p-4'>
            {category_buttons}
        </div>
    );
}


export default CategorySelect;
