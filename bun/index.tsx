import { cache, Suspense, use, useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';

const featcher = cache(() => fetch('/list').then(res => res.json()))

function Names({ namesPromise}: Readonly<{namesPromise: Promise<{id: number, name: string}[]>}>) {
  const names = use(namesPromise)
  return (
    <ul> 
      {names.map(name => <li key={name.id}>{name.name}</li>)}    
    </ul>
  )
}
function App(){
  return (
    <div>
      <h1>Names</h1>
      <Suspense fallback={<div>Loading...</div>}>
        <Names namesPromise={featcher()}/>
      </Suspense>
    </div>
  )

 


}

createRoot(document.getElementById('root')!).render(<App />)