'use client'; // Diz ao Next.js que este componente roda no lado do cliente

import { Pause, Play } from '@phosphor-icons/react';
import { useEffect, useRef, useState } from 'react';

interface AudioPlayerProps {
  audioBuffer: Uint8Array; // Recebe o Buffer do áudio como prop
}

export default function AudioPlayer({
  audioBuffer,
}: Readonly<AudioPlayerProps>) {
  const [audioUrl, setAudioUrl] = useState<string | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

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

  function togglePlayPause() {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }

    setIsPlaying(!isPlaying);
  }

  if (!audioUrl) return <p>Carregando áudio...</p>;

  return (
    <>
      <audio
        controls
        src={audioUrl}
        ref={audioRef}
        className="hidden"
        onEnded={() => setIsPlaying(false)}
      ></audio>
      <button
        onClick={togglePlayPause}
        className="bg-gray-800 p-3 rounded-full border border-gray-600 hover:bg-gray-950 "
      >
        {isPlaying ? <Pause /> : <Play />}
      </button>
    </>
  );
}
