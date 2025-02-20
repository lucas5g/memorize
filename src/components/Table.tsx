import { Word } from "@prisma/client"
import { Card } from "./Card"
import AudioPlayer from "./AudioPlayer"

interface Props {
  words: Word[]
}
export function Table({ words }: Readonly<Props>) {
  return (
    <Card>
      <table className="w-full">
        <thead className="pb-2">
          <tr className="text-left">
            <th>Nome</th>
            <th>Tradução</th>
            <th>Audio</th>
          </tr>
        </thead>
        <tbody>
          {words.map((word) => (
            <tr 
              key={word.id}
              className='border-b last:border-0'
              >
              <td>{word.name}</td>
              <td>{word.translate}</td>
              <td>
                <AudioPlayer audioBuffer={word.audio} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Card>
  )
}