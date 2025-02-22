import AudioPlayer from '@/components/AudioPlayer';
import { WordService } from '@/services/word.service';

const wordService = new WordService();

export default async function WordId({
  params,
}: Readonly<{
  params: Promise<{ id: string }>;
}>) {
  const { id } = await params;

  const word = await wordService.findOne(Number(id));

  const audioBlob = new Blob([word.audio], { type: 'audio/mpeg' });
  const audioUrl = URL.createObjectURL(audioBlob);

  console.log(audioUrl);
  return (
    <>
      <h1>{word.name}</h1>
      <p>{word.translate}</p>
      <AudioPlayer audioBuffer={word.audio} />
    </>
  );
}
