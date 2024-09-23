import { Options } from "../../_constants/constants";
import { CategoryButton } from "../components/Buttons";
import { CATEGORIES_LIST } from "../scripts/readFlagData";


interface Props {
    options: Options;
    setCurrentCategory: React.Dispatch<React.SetStateAction<number>>;
}


function CategorySelect(props: Props) {
    const category_buttons = CATEGORIES_LIST.map((value, index) => {
        return (
            <CategoryButton
                key={index}
                text={value}
                click={() => props.setCurrentCategory(index)}
                animation={props.options.animation} />
        );
    });


    return (
        <div className='grid grid-cols-2 gap-x-8 gap-y-4 p-4'>
            {category_buttons}
        </div>
    );
}


export default CategorySelect;
