import { createPhrase } from '@/app/actions';
import { Button } from '@/components/Button';
import { Card } from '@/components/Card';
import { Input } from '@/components/Input';
import { Table } from '@/components/Table';
import { PhraseService } from '@/services/phrase.service';

const phraseService = new PhraseService();

export default async function Home() {
  const phrases = await phraseService.findMany();

  return (
    <>
      <h1>Memorize</h1>

      <Card>
        <h1>Teste card</h1>
      </Card>

      <main className="flex gap-4 md:flex-col">
        <Card>
          <form className="flex gap-2" action={createPhrase}>
            <Input name="english" placeholder="Adicione a frase em Inglês" />
            <Button label="Salvar" />
          </form>
        </Card>
        <Table phrases={phrases} />
      </main>
    </>
  );
}
