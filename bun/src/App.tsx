import { useEffect, useState } from "react";
import "./index.css";
import { Card } from "@/components/Card";
import { Input } from "@/components/Input";
import { Button } from "@/components/Button";
import AudioPlayer from "@/components/AudioPlayer";

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
    <div className="bg-gray-500 min-h-screen text-white space-y-3 p-5">
      <h1>Memorize</h1>

      <Card>
        <h2>Create</h2>
        <form
          onSubmit={createPhrase}
          className="flex flex-col gap-2"
        >
          <Input name="english" placeholder="English" />
          <Input name="tag" placeholder="Tag" />
          <Button type="submit">Save</Button>

        </form>
      </Card>

      <Card>
        <h2>List</h2>
        <form onSubmit={(event) => {
          event.preventDefault()

          const tag = event.target.searchTag.value

          fetch(`/phrases?tag=${tag}`)
            .then(res => res.json())
            .then(data => setPhrases(data))

        }
        }>
          <Input name="searchTag" placeholder="Search by Tag" />
        </form>
        <table className="w-full">
          <thead>
            <tr className="text-left ">
              <th>English</th>
              <th>Portuguese</th>
              <th>Audio</th>
            </tr>
          </thead>
          <tbody>
            {phrases.map((phrase: any) => (
              <tr
                key={phrase.id}
                className="border-b last:border-0 hover:bg-gray-800 "
              >
                <td className="py-4">{phrase.english}</td>
                <td>{phrase.portuguese}</td>
                <td>
                  <AudioPlayer phraseId={phrase.id} />
                  {/* <audio src={`/audios/${phrase.id}.mp3`} controls /> */}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Card >
    </div>
  );
}

export default App;
