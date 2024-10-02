import { ReactNode } from 'react'

import { ReactComponent as BulbIcon } from '../assets/icons/bulb.svg'

type QuizTopic = {
  title: string
  icon: ReactNode
  disabled?: boolean
}

export const quizTopics: QuizTopic[] = [
  {
    title: 'JFT',
    icon: <BulbIcon />,
  },
  {
    title: 'JFT 2',
    icon: <BulbIcon />,
    disabled: true,
  },
  {
    title: 'JFT 3',
    icon: <BulbIcon />,
    disabled: true,
  },
]
