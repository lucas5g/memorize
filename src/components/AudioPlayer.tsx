"use client"; // Diz ao Next.js que este componente roda no lado do cliente

import { useEffect, useRef, useState } from "react";

interface AudioPlayerProps {
  audioBuffer: Uint8Array; // Recebe o Buffer do áudio como prop
}

export default function AudioPlayer({ audioBuffer }: Readonly<AudioPlayerProps>) {
  const [audioUrl, setAudioUrl] = useState<string | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [playCount, setPlayCount] = useState(0);


  useEffect(() => {
    if (audioBuffer) {
      // Converte o Buffer para Blob
      const blob = new Blob([audioBuffer], { type: "audio/mpeg" });

      // Cria uma URL temporária para o áudio
      const url = URL.createObjectURL(blob);
      setAudioUrl(url);

      return () => URL.revokeObjectURL(url);
    }
  }, [audioBuffer]);

  useEffect(() => {
    if (audioRef.current && playCount < 3) {

      audioRef.current.play();
    }
  }, [playCount]); // 

  const handleAudioEnd = () => {
    if (playCount < 2) { // Toca 3 vezes no total
      setTimeout(() => {
        if (audioRef.current) {
          audioRef.current.play();
        }
        setPlayCount(playCount + 1);
      }, 1000); // Aguarda 2 segundos antes de tocar novamente
    }
  };

  if (!audioUrl) return <p>Carregando áudio...</p>;

  return (
    <audio controls onEnded={() => handleAudioEnd()} ref={audioRef}>
      <source src={audioUrl} type="audio/mpeg" />
      Seu navegador não suporta áudio.
    </audio>
  );
}
