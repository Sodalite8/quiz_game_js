import React from 'react';
import { SCREENS, Options, INITIAL_OPTIONS } from "./constants";
import './css/App.css';
import Title from "./game_ja/Title";
import Option from "./game_ja/Option";
import Menu0 from "./game_ja/Menu0";
import Game0 from "./game_ja/Game0";
import List0 from "./game_ja/List0";


function App() {
    const [screen, setScreen] = React.useState<number>(SCREENS.TITLE);
    const [options, setOptions] = React.useState<Options>(INITIAL_OPTIONS);
    const renderScreen = () => {
        switch(screen) {
            case SCREENS.TITLE:
                return <Title screen={screen} setScreen={setScreen}/>;
            case SCREENS.OPTION:
                return <Option screen={screen} setScreen={setScreen} options={options} setOptions={setOptions}/>;
            case SCREENS.MENU0:
                return <Menu0 screen={screen} setScreen={setScreen}/>;
            case SCREENS.GAME0:
                return <Game0 screen={screen} setScreen={setScreen}/>;
            case SCREENS.LIST0:
                return <List0 screen={screen} setScreen={setScreen}/>;
        }
    };


    return (
        <>
        {renderScreen()}
        </>
    );
}


export default App;
