import React from 'react';
import { useCookies } from "react-cookie";
import '../styles/tailwind.css';
import { SCREENS, Options, INITIAL_OPTIONS, QuizOptions, INITIAL_QUIZ_OPTIONS } from "../_constants/constants";
import Title from "./screens/Title";
import Option from "./screens/Option";
import Game0 from "./screens/Game0";
import List0 from "./screens/List0";


// App, The top level component of the quiz game
function App() {
    /*
    screen      : Screen number
    options     : Game options (such as sound volume and animation)
    quiz_options: Quiz options (such as difficulty and the number of problems)
    */
    const [screen, setScreen] = React.useState<number>(SCREENS.TITLE);
    const [options, setOptions] = React.useState<Options>(INITIAL_OPTIONS);
    const [quiz_options, setQuizOptions] = React.useState<QuizOptions>(INITIAL_QUIZ_OPTIONS);


    // Change the screen by var screen
    const renderScreen = () => {
        switch (screen) {
            case SCREENS.TITLE:     // game title
                return <Title screen={screen} setScreen={setScreen} />;
            case SCREENS.OPTION:    // game options
                return <Option screen={screen} setScreen={setScreen} options={options} setOptions={setOptions} />;
            case SCREENS.GAME0:     // quiz
                return <Game0 screen={screen} setScreen={setScreen} quiz_options={quiz_options} setQuizOptions={setQuizOptions} />;
            case SCREENS.LIST0:     // flags lists
                return <List0 screen={screen} setScreen={setScreen} />;
        }
    };


    return (
        <div className='box-content w-game-width h-game-height bg-yellow-50
            border-4 rounded-lg border-yellow-400 border-opacity-60
            mx-auto my-8 relative'>
            {renderScreen()}
        </div>
    );
}


export default App;
