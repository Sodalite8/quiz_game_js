import { FlagData } from "../../_constants/constants";
import { SmallButton } from "./Buttons";
import { FLAG_DATA_LIST } from "../scripts/readFlagData";


interface Props {
    flag_id: number;
    closeFlagScreen: () => void;
    animation: boolean;
}


function FlagScreen(props: Props) {
    const flag_data: FlagData = FLAG_DATA_LIST[props.flag_id];


    return (
        <>
            <div>
                <img
                    src={`./images/flags/flag${flag_data.id}.png`}
                    alt="flag" />
            </div>
            <div>
                <h2>
                    {flag_data.name}
                </h2>
            </div>


            <div>
                <SmallButton
                    text='戻る'
                    click={props.closeFlagScreen}
                    animation={props.animation}
                />
            </div>
        </>
    );
}


export default FlagScreen;
