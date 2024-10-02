// Question Types
// 1. MCQs | Multiple Choice | single
// 2. boolean | true/false | single
// 3. MAQs | Multiple Answers | multiple

import { Topic } from '.'
import Nakimasu from '../../assets/images/nakimasu.png'
import Ame from '../../assets/images/ame.png'
import Hiroba from '../../assets/images/hiroba.png'
import Kazoku from '../../assets/images/kazoku.png'
import MeiEmi from '../../assets/images/mei & emi.png'
import Nigiyaka from '../../assets/images/nigiyaka.png'
import Partike from '../../assets/images/partike.png'
import SenseiRio from '../../assets/images/sensei & rio.png'
import TanakaKawai from '../../assets/images/tanaka & kawai.png'
import Audio1 from '../../assets/audio/Y_[09-24]_hanasu.mp3'
export const JFT: Topic = {
  topic: 'JFT',
  level: 'Beginner',
  totalQuestions: 40,
  totalScore: 250,
  totalTime: 3600,
  questions: [
    {
      question: 'Look at the illustration and choose the correct word',
      image: Nakimasu,
      choices: ['わらいます', 'なきます', 'おこります'],
      type: 'MCQs',
      correctAnswers: ['なきます'],
      score: 3,
    },
    {
      question: '',
      image: Hiroba,
      audio: '',
      choices: ['こうえん', 'ひろば', 'いちば'],
      type: 'MCQs',
      correctAnswers: ['ひろば'],
      score: 3,
    },
    {
      question: '',
      image: Nigiyaka,
      audio: '',
      choices: ['きれい', 'しずか', 'にぎやか'],
      type: 'MCQs',
      correctAnswers: ['にぎやか'],
      score: 3,
    },
    {
      question: 'Look at the illustration and choose the correct sentence',
      image: Ame,
      audio: '',
      choices: ['今日は　天気がいいです', '今は雪がふっています', '今は雨がふっています'],
      type: 'MCQs',
      correctAnswers: ['今は雨がふっています'],
      score: 3,
    },
    {
      question:
        'Look at this family tree below and choose the correct word that fits in (   ) the most.',
      image: Kazoku,
      audio: '',
      choices: ['そふ', 'おば', 'おじ'],
      type: 'MCQs',
      correctAnswers: ['おじ'],
      score: 3,
    },
    {
      question:
        'Read the sentence and choose the word that fits in (   ) the most. もうちょっと冬なので、だんだん（　　）なってきました。',
      image: '',
      audio: '',
      choices: ['あつく', 'さむく', 'つめたく'],
      type: 'MCQs',
      correctAnswers: ['つめたく'],
      score: 3,
    },
    {
      question:
        'Read the sentence and choose the word that fits in ( ) the most. 彼は（　）ですから、先生によくほめられています。',
      image: '',
      audio: '',
      choices: ['あたまがいい', 'みみがいい', 'くらがいい'],
      type: 'MCQs',
      correctAnswers: ['あたまがいい'],
      score: 3,
    },
    {
      question:
        'Sdr. Mei bertanya kepada Sdr. Emi tantang hadiah kelahiran bayi. Baca percakapan berikut dan pilih frase kata yang tepat.',
      image: MeiEmi,
      audio: '',
      choices: ['あげない', 'あげよう', 'あげるため', 'あげるつもり'],
      type: 'MCQs',
      correctAnswers: ['あげるつもり'],
      score: 3,
    },
    {
      question: 'Pililah partikel yang tepat untuk melengkapi kalimat berikut.',
      image: Partike,
      audio: '',
      choices: ['と、に', 'で、で', 'と、で'],
      type: 'MCQs',
      correctAnswers: ['で、で'],
      score: 3,
    },
    {
      question: 'Baca percakapan berikut dan pilihlah frase kata yang tepat',
      image: SenseiRio,
      audio: '',
      choices: [
        'インドネシアに帰って、家族に会いました',
        '今年はもっと長い休みがはしいです。',
        'ゆっくり好きなことができて、うまれしいです。',
        '休みは一週間しかありませんでした。',
      ],
      type: 'MCQs',
      correctAnswers: ['インドネシアに帰って、家族に会いました'],
      score: 3,
    },
    {
      question:
        'Dua orang sedang berbicara ketika makan siang. baca percakapan dan pilih ekspresi dan pilih ekspresi yang tepat.',
      image: TanakaKawai,
      audio: '',
      choices: ['自分でつくてたべます。', '何も食べません', 'なにを作っています'],
      type: 'MCQs',
      correctAnswers: ['自分でつくてたべます'],
      score: 3,
    },
    {
      question: 'なにをおしえてもらえませんか。.',
      image: '',
      audio: Audio1,
      choices: ['かんじのよみかたです。', 'かんじのようかたです。', 'かんじののむかた'],
      type: 'MCQs',
      correctAnswers: ['かんじのよみかたです。'],
      score: 3,
    },
  ],
}
