import { Options } from "../../_constants/constants";
import { FlagButton } from "../components/Buttons";
import { FLAG_DATA_LIST_BY_CATEGORY } from "../scripts/readFlagData";


interface Props {
    options: Options;
    current_category: number;
    setCurrentFlag: React.Dispatch<React.SetStateAction<number>>;
    flag_selected: boolean;
    setFlagSelected: React.Dispatch<React.SetStateAction<boolean>>;
}


function FlagSelect(props: Props) {
    const openFlagScreen = (e: React.MouseEvent<HTMLButtonElement>) => {
        props.setFlagSelected(true);
        props.setCurrentFlag(parseInt(e.currentTarget.name));
    };


    const flag_buttons = FLAG_DATA_LIST_BY_CATEGORY[props.current_category].map(value => {
        return (
            <FlagButton
                key={value.id}
                text={`${value.name} (${value.period})`}
                name={String(value.id)}
                disable={props.flag_selected}
                click={openFlagScreen}
                animation={props.options.animation} />
        );
    })

    return (
        <div className='grid grid-cols-2 gap-x-8 gap-y-4 p-4'>
            {flag_buttons}
        </div>
    );
}


export default FlagSelect;
