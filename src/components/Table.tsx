import { Phrase } from '@prisma/client';
import { Card } from './Card';
import AudioPlayer from './AudioPlayer';

interface Props {
  phrases: Phrase[];
}
export function Table({ phrases }: Readonly<Props>) {
  return (
    <Card>
      <table className="w-full">
        <thead className="pb-2">
          <tr className="text-left">
            <th>Inglês</th>
            <th>Português</th>
            <th>Audio</th>
          </tr>
        </thead>
        <tbody>
          {phrases.map((row) => (
            <tr key={row.id} className="border-b last:border-0">
              <td>{row.english}</td>
              <td>{row.portuguese}</td>
              <td>
                <AudioPlayer audioBuffer={row.audio} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Card>
  );
}
