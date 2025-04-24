import { FC, useRef, useState } from 'react'
import styled from 'styled-components'

interface QuizAudioProps {
  audio: string
}

const HiddenAudio = styled.audio`
  display: none;
`

const PlayButton = styled.button`
  padding: 10px 16px;
  background-color: ${({ theme }) => theme.colors.themeColor};
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-weight: 500;
  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`

const QuizAudio: FC<QuizAudioProps> = ({ audio }) => {
  const audioRef = useRef<HTMLAudioElement | null>(null)
  const [hasPlayed, setHasPlayed] = useState(false)

  const handlePlay = () => {
    if (audioRef.current && !hasPlayed) {
      audioRef.current.play()
      setHasPlayed(true)
    }
  }

  return (
    <div>
      <HiddenAudio
        ref={audioRef}
        onEnded={() => {
          if (audioRef.current) {
            audioRef.current.pause()
            audioRef.current.currentTime = 0
          }
        }}
      >
        <source src={audio} type="audio/mpeg" />
        Your browser does not support the audio element.
      </HiddenAudio>
      <PlayButton onClick={handlePlay} disabled={hasPlayed}>
        {hasPlayed ? 'Audio Selesai' : 'Putar Audio'}
      </PlayButton>
    </div>
  )
}

export default QuizAudio
