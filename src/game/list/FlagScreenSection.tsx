import { Options } from "../../_constants/constants";
import FlagScreen from "../components/FlagScreen";
import { FLAG_DATA_LIST } from "../scripts/readFlagData";


interface Props {
    options: Options;
    current_flag: number;
    setCurrentFlag: React.Dispatch<React.SetStateAction<number>>;
    setFlagSelected: React.Dispatch<React.SetStateAction<boolean>>;
}


function FlagScreenSection(props: Props) {
    const closeFlagScreen = () => {
        props.setCurrentFlag(-1);
        props.setFlagSelected(false);
    };


    const renderFlagScreen = () => {
        if (props.current_flag > -1 &&
            props.current_flag < FLAG_DATA_LIST.length &&
            FLAG_DATA_LIST[props.current_flag].available
        ) {
            return (
                <FlagScreen
                    flag_id={props.current_flag}
                    closeFlagScreen={closeFlagScreen}
                    animation={props.options.animation}
                />
            );
        }


        else {
            return (
                <></>
            );
        }
    };


    return (
        <>
            {renderFlagScreen()}
        </>
    );
}


export default FlagScreenSection;
