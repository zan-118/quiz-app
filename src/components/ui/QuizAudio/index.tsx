import { FC, useRef } from 'react'
import styled from 'styled-components'

interface QuizAudioProps {
  audio: string
}

const AudioStyle = styled.audio`
  border-radius: 10px;
  margin-bottom: 20px;
  width: 100%;
  box-shadow: 6px 6px 2px ${({ theme }) => theme.colors.themeColor};
`

const QuizAudio: FC<QuizAudioProps> = ({ audio }) => {
  const audioRef = useRef<HTMLAudioElement | null>(null)

  const handlePlay = () => {
    if (audioRef.current) {
      audioRef.current.play()
    }
  }

  return (
    <div>
      <AudioStyle
        ref={audioRef}
        controls
        onEnded={() => {
          if (audioRef.current) {
            audioRef.current.pause()
            audioRef.current.currentTime = 0 // Reset ke awal
          }
        }}
      >
        <source src={audio} type="audio/mpeg" />
        Your browser does not support the audio element.
      </AudioStyle>
      <button onClick={handlePlay}>Play Audio</button>
    </div>
  )
}

export default QuizAudio
