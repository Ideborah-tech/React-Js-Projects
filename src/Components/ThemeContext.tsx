import { createContext, useContext, useState, ReactNode } from 'react';
type theme= 'light' | 'dark';
//create context with default undefined
const ThemeContext = createContext<theme | undefined>(undefined);

export default function Context(){
    const [theme,setTheme]=useState<theme>('dark')
    const toggleTheme=()=>{
        setTheme((prevTheme)=>(prevTheme==="light"? "dark":"light"));
    }
    return (
<ThemeContext.Provider value = {theme}>
<div>
    <h1>Current Theme: {theme}</h1>
    <button onClick={toggleTheme}>Toggle Theme</button>
    <ThemeDisplay />

</div>

</ThemeContext.Provider>

    );
}

function ThemeDisplay(){
    const theme= useContext(ThemeContext);

    //Handle case if theme us undefined
    if(!theme){
        return <h2>No theme provided</h2>
    }
    return <h2>Theme from context: {theme}</h2>
}
