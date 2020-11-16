import * as React from 'react';
import {useRouter} from 'next/router'
export interface IAppProps {
}



 function App (props: IAppProps) {
    const router = useRouter()

    const handleOnClick = () => {
        router.push('/login')
    }
  return (
    <div>
        <button onClick={handleOnClick}>Go to homepage</button>
    </div>
  );
}



export default App