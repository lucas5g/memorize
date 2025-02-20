import AudioPlayer from '@/components/AudioPlayer';
import { Card } from '@/components/Card';
import { WordService } from '@/services/word.service';

const wordService = new WordService();
export  default async function Home() {

  const words = await wordService.findAll()

  return (
    <>
      <h1>Memorize</h1>

      <Card>
        <h1>Teste card</h1>
      </Card>

      <Card>
        <table>
          <thead>
            <tr>
              <th>Nome</th>
              <th>Tradução</th>
            </tr>
          </thead>
          <tbody>
            {words.map((word) => (
              <tr key={word.id}>
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
    </>
  );
}
