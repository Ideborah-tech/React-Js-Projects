import React from 'react';
import Calculator from './calculator/calculator'
import './calculator/style.css';
import Todolist from './todolist/T_app';
import './todolist/style.css'; // Adjust the import path as necessary

// import Counter from './Components/Counter';
// import Context from './Components/ThemeContext'
// import ClickButton from './Components/user_clicks';
// const MyButton: React.FC = () => {
//     return (
//         <button>Click here</button>
//     );
// }

const App: React.FC = () => {
    return (
        <div>
            <h1>React JS Project - Calculator</h1>
            <Calculator />
            <Todolist />
            {/* <MyButton />
            <Counter />
            <Context />
            <ClickButton /> */
            }
        </div>
    );
    

}
export default App;
