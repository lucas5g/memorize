import { createPhrase } from '@/app/actions';
import { Button } from '@/components/Button';
import { Card } from '@/components/Card';
import { Input } from '@/components/Input';
import { Table } from '@/components/Table';
import { phraseCreateSchema, PhraseService } from '@/services/phrase.service';
import { create } from 'domain';
import { revalidateTag, unstable_cache } from 'next/cache';


const phraseService = new PhraseService();

const getPhrases = unstable_cache(async () => {
  return phraseService.findMany();
},
  ['phrases'],
  {
    tags: ['phrases']
  });


export default async function Home() {

  const phrases = await getPhrases();
  // const phrases = await phraseService.findMany();

  return (
    <>
      <h1>Memorize</h1>

      <Card>
        <h1>Teste card</h1>
      </Card>

      <main className='flex gap-4 md:flex-col'>

        <Card>
          <form className='space-y-3' action={createPhrase}>
            <Input label="Inglês" name='english' />
            <Button label='Salvar' />
          </form>
        </Card>
        <Table phrases={phrases} />
      </main>
    </>
  );
}
