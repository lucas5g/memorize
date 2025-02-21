'use server'
import { phraseCreateSchema, PhraseService } from "@/services/phrase.service";
import { revalidateTag } from "next/cache";
const phraseService = new PhraseService();

export async function createPhrase(formData: FormData) {

  const data = phraseCreateSchema.parse({
    english: formData.get('english')
  })

  await phraseService.create(data);

  revalidateTag('phrases')
}