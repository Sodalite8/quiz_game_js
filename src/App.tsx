import React from 'react';
import { useCookies } from "react-cookie";
import { SCREENS, Options, INITIAL_OPTIONS, QuizOptions, INITIAL_QUIZ_OPTIONS } from "./constants";
import './css/App.css';
import Title from "./game_ja/Title";
import Option from "./game_ja/Option";
import Menu0 from "./game_ja/Menu0";
import Game0 from "./game_ja/Game0";
import List0 from "./game_ja/List0";


// App, Top level of the Quiz Game
function App() {
    const [screen, setScreen] = React.useState<number>(SCREENS.TITLE);
    const [options, setOptions] = React.useState<Options>(INITIAL_OPTIONS);
    const [quiz_options, setQuizOptions] = React.useState<QuizOptions>(INITIAL_QUIZ_OPTIONS);


    // change the screen by var screen
    const renderScreen = () => {
        switch (screen) {
            case SCREENS.TITLE:
                return <Title screen={screen} setScreen={setScreen} />;
            case SCREENS.OPTION:
                return <Option screen={screen} setScreen={setScreen} options={options} setOptions={setOptions} />;
            case SCREENS.MENU0:
                return <Menu0 screen={screen} setScreen={setScreen} quiz_options={quiz_options} setQuizOptions={setQuizOptions} />;
            case SCREENS.GAME0:
                return <Game0 screen={screen} setScreen={setScreen} />;
            case SCREENS.LIST0:
                return <List0 screen={screen} setScreen={setScreen} />;
        }
    };


    return (
        <>
            {renderScreen()}
        </>
    );
}

export default App;
