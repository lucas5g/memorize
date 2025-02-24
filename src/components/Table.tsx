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
        <thead className="p-2">
          <tr className="text-left">
            <th className='p-2'>Inglês/Português</th>
            <th>Áudio</th>
          </tr>
        </thead>
        <tbody>
          {phrases.map((row) => (
            <tr key={row.id} className="border-b last:border-0 hover:bg-gray-800">
              <td className="p-2">
                {row.english}
                <br />
                <i>{row.portuguese}</i>
              </td>
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
