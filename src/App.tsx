import { Suspense } from 'react';
import './App.css'
import type { BottleTypes } from './Type/type'
import Bottles from './Components/Bootles/Bottles';

function App() {

  const bottlePromises = async ():Promise<BottleTypes[]>=>{
    const res = await fetch('/src/API/bottle.json');
    const data = await res.json();
    return data.bottles;
  }


  return (
    <>
     <Suspense fallback={<p>Bottles data are loading......</p>}>
        <Bottles bottlePromises={bottlePromises()}></Bottles>
     </Suspense>
    </>
  )
}

export default App
