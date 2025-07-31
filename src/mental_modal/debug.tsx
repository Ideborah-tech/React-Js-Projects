/*--------------------------------------------------------------------------------------------------------------------------
Question 1
/*--------------------------------------------------------------------------------------------------------------------------*/
/* there was a bug in the code that caused 
the count to not increment correctly
The issue was that we did not import useState from 'react'
We fixed it by importing useState from 'react' and using it correctly

*/
// import {useState} from 'react';
// function Counter() {
//  const [count, setCount] = useState(0);
  
//  const handleClick = () => {
// setCount((prev: number) => prev + 1);
// setCount((prev: number) => prev + 1);
// setCount((prev: number) => prev + 1);
//   };
  
//   return <button onClick={handleClick}>Count: {count}</button>;
// }

/*--------------------------------------------------------------------------------------------------------------------------*/
// Question 2
/*--------------------------------------------------------------------------------------------------------------------------*/
import {useState, useEffect} from 'react'

interface User {
  name:string;
  email:string;
}

export function UserProfile({ userId }:{userId: string}) {
  const [user, setUser] = useState<User | null>(null);
  
  useEffect(() => {
    const fetchUser = async (id: string) => {
      const response = await fetch(`/api/users/${id}`);
      const data = await response.json();
      setUser(data);
    };
    fetchUser(userId);
  }, [userId]);

  return <div>{user?.name}</div>;
}