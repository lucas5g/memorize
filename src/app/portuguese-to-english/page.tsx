import { PhraseService } from '@/services/phrase.service';
import { randomInt } from 'crypto';

const service = new PhraseService();
export default async function PortugueseToEnglish() {
  const count = await service.findManyCount();

  const { data } = await service.findMany({
    take: 5,
    skip: randomInt(count - 5),
  });

  const phrase = data[randomInt(5)];

  return (
    <>
      <h1>{phrase.portuguese}</h1>
      <table>
        <tbody>
          {data.map((row) => (
            <tr key={row.id}>
              {/* <td>{row.portuguese}</td> */}
              <td>{row.english}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
