import React  from 'react';

export default function ClickButton() {

const handleClick =(event: React.MouseEvent<HTMLButtonElement>) =>{
    alert('Clicked!');
};
return (
    <button onClick={handleClick}>Click Me</button>
)

}
