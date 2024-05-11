'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { redirect, useRouter } from 'next/navigation'

interface CardPageParams {
  moduleId: string
  prompt: string
  answer: string
}

const emojis = [
  {multiplier: 0.75, symbol: '😄'},
  {multiplier: 0.9, symbol: '😊'},
  {multiplier: 1, symbol: '😐'},
  {multiplier: 1.2, symbol: '😕'},
  {multiplier: 1.5, symbol: '😡'},
]

export const CardPage = ({ moduleId, prompt, answer }: CardPageParams) => {
  const [cardShowing, setCardShowing] = useState(prompt)
  const [cardClass, setCardClass] = useState('prompt')
  const [nextButtonShowing, setNextButtonShowing] = useState(false)
  const [newPriority, setNewPriority] = useState(1)
  const router = useRouter()

  const clickCard = () => {
    if (!nextButtonShowing) setNextButtonShowing(true)

    if (cardClass === 'prompt') {
      setCardClass('answer')
      setCardShowing(answer)
    } else {
      setCardClass('prompt')
      setCardShowing(prompt)
    }
  }

  const clickNext = () => {
    router.push(`/module/${moduleId}`)
    router.refresh()
  }

  const clickEmoji = (multiplier: number) => {
    setNewPriority(multiplier)
  }

  return (
    <div id='pageContainer'>
      <div
        id='pageTopContainer'
        onClick={clickCard}
        style={{
          cursor: cardClass === 'prompt' ? 'help' : 'default'
        }}
      >
        <div id='cardContainer'>
          <div className={cardClass}>{cardShowing}</div>
        </div>
      </div>
      <div id='pageBottomContainer'>
        <div id='emojiContainer'>
          {emojis.map((emoji, index) => (
            <span
              key={index}
              className='emoji'
              onClick={() => clickEmoji(emoji.multiplier)}
            >
              {emoji.symbol}
            </span>
          ))}
        </div>
        <div id='nextButtonContainer'>
          <div onClick={clickNext} id='nextButton' style={{
            visibility: nextButtonShowing ? 'visible' : 'hidden',
            cursor: nextButtonShowing ? 'pointer' : 'none'
          }}>
            Next
          </div>
        </div>
        <div id='homeButtonContainer'>
          <Link href='/'>Home</Link>
        </div>
      </div>
    </div>
  )
}

export default CardPage
