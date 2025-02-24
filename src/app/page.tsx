import { Card } from '@/components/Card';
import { Form } from '@/components/Form';
import { Table } from '@/components/Table';
import { PhraseService } from '@/services/phrase.service';

const phraseService = new PhraseService();

export default async function Home() {
  const { data } = await phraseService.findMany();

  return (
    <main className='flex gap-2 xl:flex-row flex-col'>
      <Card>
        <h1 className='text-2xl mb-2'>Memorize</h1>
        <Form />
      </Card>
      <Table phrases={data} />
    </main>
  );
}
