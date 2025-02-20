import AudioPlayer from '@/components/AudioPlayer';
import { Card } from '@/components/Card';
import { Input } from '@/components/Input';
import { Table } from '@/components/Table';
import { WordService } from '@/services/word.service';

const wordService = new WordService();
export default async function Home() {

  const words = await wordService.findAll()

  return (
    <>
      <h1>Memorize</h1>

      <Card>
        <h1>Teste card</h1>
      </Card>

      <main className='flex gap-4'>

        <Card>
          <form className='space-y-4'>
            <Input label="Nome" />
            <Input label="Tradução" />
            <button type="submit">Enviar</button>
          </form>
        </Card>
        <Table words={words} />
      </main>
    </>
  );
}
