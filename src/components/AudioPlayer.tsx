'use client'; // Diz ao Next.js que este componente roda no lado do cliente

import { useEffect, useState } from 'react';

interface AudioPlayerProps {
  audioBuffer: Uint8Array; // Recebe o Buffer do áudio como prop
}

export default function AudioPlayer({
  audioBuffer,
}: Readonly<AudioPlayerProps>) {
  const [audioUrl, setAudioUrl] = useState<string | null>(null);

  useEffect(() => {
    if (audioBuffer) {
      // Converte o Buffer para Blob
      const blob = new Blob([audioBuffer], { type: 'audio/mpeg' });

      // Cria uma URL temporária para o áudio
      const url = URL.createObjectURL(blob);
      setAudioUrl(url);

      return () => URL.revokeObjectURL(url);
    }
  }, [audioBuffer]);

  if (!audioUrl) return <p>Carregando áudio...</p>;

  return (
    <audio controls>
      <source src={audioUrl} type="audio/mpeg" />
      Seu navegador não suporta áudio.
    </audio>
  );
}
