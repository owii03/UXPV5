import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { designTokens } from '@components/Theme/designTokens'

const RandomText = styled.span`
  color: var(--primaryDark);
  transition: all 120ms ease-out 0s;
  box-shadow: 0px 0px 0px transparent;
  border-radius: ${designTokens.space[1]};
  cursor: pointer;
  &:hover, &:focus {
    box-shadow: 0px 0px 0px ${designTokens.space[1]} var(--primaryTransparent);
    background: var(--primaryTransparent);
  }
`

const Randomizer = () => {

  const facts = [
    { text: "gummy-eating champ 🍬" },
    { text: "your friendly neighborhood Deadpool 💣" },
    { text: "90's hip hop aficionado 🎤" },
    { text: "probably traveling somewhere 🧳" },
    { text: "Dog lover 🐶" },
    { text: "sparkling water enthusiast 💧" },
    { text: "collector of browser tabs 💡" },
    { text: "knower of random facts 🤔" },
    { text: "still haven't completed The Legend of Zelda: Breath of the Wild" },
    { text: "currently based in Jakarta, ID 🇮🇩" },
    { text: "a night-owl person 🌃" },
    { text: "like to draw my Boo 🥰" },
    { text: "fumbling through learning new things" },
    { text: "inbox-zero person 📥" },
    { text: "enjoy meditating to cooking videos on youtube 👩‍🍳" },
    { text: "regularly bite off more than I can chew - literally and figuratively" },
    { text: "like this portfolio, a constant work in progress" },
    { text: "have strong opinions on movies 🎬" },
    { text: "make really good peanut butter french toast 🍞" },
    { text: "constantly curious 🧐" },
    { text: "in a constant state of learning something new 🤓" },
    { text: "prefer speaking in Eng-Ba (2 languages into one sentences 😅)" },
    { text: "learning how to make a great cup of coffee ☕️" },
    { text: "fan of sweet treats 🍭" },
    { text: "in a phase of learning to play NFT game 🎮" },
    { text: "thinks lime Skittles are better than green apple Skittles (🙏 bring them back)" },
    { text: "an avid consumer of: gossips, politic news, plane tickets, and Netflix" },
    { text: "former grade-school pianist 🎹" },
    { text: "A big fan of drinking milk 🥛" },
    { text: "lurker of other design portfolios 🤫" },
    { text: "curious about how digital products can cut through noise 🧐" },
    { text: "sometimes I like to design with code 👨‍💻" },
    { text: "I regularly fall when riding my skateboard 🛹" },
    { text: "learning how to race cars with my mini car 🏎" },
    { text: "can fall asleep anywhere 😴" },
    { text: "introvert, but aspiring ambivert" },
    { text: "a fan of Funko Pop 🤖" },
    { text: "I start most mornings watching videos of funny animals reaction 🐯" },
    { text: "is not good at golf 🏌️‍♂️ - like at all" },
    { text: "I have a desk bamboo named Bamb 🌵" },
    { text: "I believe Hazelnut Cheese is the best ice cream 🍦" },
    { text: "drinker of Long Island and Baileys 🍸" },
  ]

  const randomFact = () => {
    let random = facts[Math.floor(Math.random() * facts.length)]
    return random
  }

  const [isRandom, setIsRandom] = useState('')

  useEffect(() => {
    setIsRandom(randomFact())
  }, [])

  return (
    <RandomText
      role="button"
      onClick={() => setIsRandom(randomFact())}
    >
      {isRandom.text}
    </RandomText>
  )
}

export default Randomizer