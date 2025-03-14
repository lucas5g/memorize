import { useEffect, useState } from "react";
import "./index.css";
import { Card } from "@/components/card";

export function App() {

  const [phrases, setPhrases] = useState([])

  useEffect(() => {
    fetch('/phrases')
      .then(res => res.json())
      .then(data => setPhrases(data))
  }, [])

  function createPhrase(event: any) {
    event.preventDefault()

    fetch('/phrases', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        english: event.target.english.value,
        tag: event.target.tag.value
      })
    })
      .then(res => res.json())
      .then(data => {
        setPhrases([...phrases, data])
        event.target.reset()

      })
  }

  return (
    <div className="bg-gray-500 h-screen text-white space-y-3 p-5">
      <h1>Memorize</h1>

      <Card>
        <h2>Create</h2>
        <form onSubmit={createPhrase}>
          <input type="text" name="english" placeholder="English" />
          <input type="text" name="tag" placeholder="Tag" />
          <button type="submit">Create</button>
        </form>
      </Card>

      <Card>
        <h2>List</h2>
        <form onSubmit={(event) => {
          event.preventDefault()

          const tag = event.target.tag.value

          fetch(`/phrases?tag=${tag}`)
            .then(res => res.json())
            .then(data => setPhrases(data))

        }
        }>
          <input type="text" name="tag" placeholder="Buscar por tag" />
        </form>
        <table>
          <thead>
            <tr>
              <th>English</th>
              <th>Portuguese</th>
              <th>Audio</th>
            </tr>
          </thead>
          <tbody>
            {phrases.map((phrase: any) => (
              <tr key={phrase.id}>
                <td>{phrase.english}</td>
                <td>{phrase.portuguese}</td>
                <td><audio src={`/audios/${phrase.id}.mp3`} controls /></td>
              </tr>
            ))}
          </tbody>
        </table>
      </Card >
    </div>
  );
}

export default App;
