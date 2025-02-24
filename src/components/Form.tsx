import { Button } from '@/components/Button';
import { Input } from '@/components/Input';
import { phraseCreateSchema, PhraseService } from '@/services/phrase.service';
import { revalidateTag } from 'next/cache';
const phraseService = new PhraseService();

export async function createPhrase(formData: FormData) {
  'use server';
  const data = phraseCreateSchema.parse({
    english: formData.get('english'),
  });

  await phraseService.create(data);

  revalidateTag('phrases');
}

export function Form() {
  return (
    <form className='flex gap-2' action={createPhrase}>
      <Input name='english' placeholder='Adicione a frase em Inglês' />
      <Button>Salvar</Button>
    </form>
  );
}
