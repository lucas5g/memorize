import { cache, Suspense, use } from 'react';
import { createRoot } from 'react-dom/client';

const featcher = cache(() => fetch('/phrases').then(res => res.json()))
function Names({ namesPromise }: any[]) {
  const phrases = use(namesPromise)
  return (
    <table>
      <thead>
        <tr>
          <th>English</th>
          <th>Portuguese</th>
        </tr>
      </thead>
      <tbody>
        {phrases.map((phrase) => (
          <tr key={phrase.id}>
            <td >{phrase.english}</td>
            <td >{phrase.portuguese}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}
function App() {

  async function handleSubmit(event: any) {
    
    event.preventDefault()

    const formData = new FormData(event.currentTarget)

    const data = Object.fromEntries(formData)
  
    await fetch('/phrases', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })

    document.querySelector('form')?.reset()
  
  }

  return (
    <div>
      <h1>Names</h1>
      <Suspense fallback={<div>Loading...</div>}>
        <Names namesPromise={featcher()} />
      </Suspense>

      <form onSubmit={handleSubmit}>
        <input type="text" name="english" placeholder='English' />
        <input type="text" name="tag" placeholder='tag' />

        <button type="submit">Salvar</button>
      </form>
    </div>
  )




}

createRoot(document.getElementById('root')!).render(<App />)