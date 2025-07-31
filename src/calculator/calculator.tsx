import React,{useState} from 'react';
import './style.css';

export default function Calculator() {
 const [value,setValue]=useState<string>('')
const handleCalculation=()=>{
try{
     const sanitized = value.replace(/X/g,'*');
    if(/^[0-9+\-*/.()% ]+$/.test(sanitized)){
      
        setValue(eval(sanitized).toString());
    }
    else{
        setValue('Error');
    }
}
catch(error){
    setValue('Error')
}
}

return (

    <div className='container'>
        <div className='calculator'>
            <form action="#">
                <div className='operand'>
                    <input type="text" value={value} readOnly/>
                </div>
                <div>
                    <input type="button" value="AC" onClick={e => setValue('')} />
                    <input type="button" value="DE" onClick={e => setValue(value.slice(0, -1))} />


                    <input type="button" value="%" onClick={e => setValue(value + (e.target as HTMLInputElement).value)} />
                    <input type="button" value="/" className='operator' onClick={e => setValue(value + (e.target as HTMLInputElement).value)}/>
                </div>
                <div>
                    <input type="button" value="7" onClick={e => setValue(value + (e.target as HTMLInputElement).value)} />
                    <input type="button" value="8" onClick={e => setValue(value + (e.target as HTMLInputElement).value)}/>
                    <input type="button" value="9" onClick={e => setValue(value + (e.target as HTMLInputElement).value)}/>
                    <input type="button" value="X" className='operator' onClick={e => setValue(value + (e.target as HTMLInputElement).value)}/>
                </div>
                <div>
                    <input type="button" value="4" onClick={e => setValue(value + (e.target as HTMLInputElement).value)} />
                    <input type="button" value="5" onClick={e => setValue(value + (e.target as HTMLInputElement).value)} />
                    <input type="button" value="6" onClick={e => setValue(value + (e.target as HTMLInputElement).value)}/>
                    <input type="button" value="-" className='operator' onClick={e => setValue(value + (e.target as HTMLInputElement).value)}/>
                </div>
                <div>
                    <input type="button" value="1" onClick={e => setValue(value + (e.target as HTMLInputElement).value)}/>
                    <input type="button" value="2" onClick={e => setValue(value + (e.target as HTMLInputElement).value)}/>
                    <input type="button" value="3" onClick={e => setValue(value + (e.target as HTMLInputElement).value)}/>
                    <input type="button" value="+" className='operator' onClick={e => setValue(value + (e.target as HTMLInputElement).value)}/>
                </div>
                <div>
                    <input type="button" value="0" className="zero" onClick={e => setValue(value + (e.target as HTMLInputElement).value)}/>
                    <input type="button" value="." onClick={e => setValue(value + (e.target as HTMLInputElement).value)}/>
                <input type="button" value="=" className='operator equal' onClick={handleCalculation} />
                   
                </div>
            </form>
        </div>
    </div>
)
}