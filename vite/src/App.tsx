import { srw } from './utils/swr'

function App() {

  const phrases = srw('/phrases')

  return (
    <pre>
     {JSON.stringify(phrases.data, undefined, 2)}
    </pre>
  )
}

export default App
