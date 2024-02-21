import { GameBundle } from 'gamba-react-ui-v2'
import React from 'react'

export const GAMES: GameBundle[] = [
  {
    id: 'dice',
    meta: {
      background: '#0b0b0e',
      name: 'Dice',
      image: '/games/dice.png',
      description: `
        Use the slider to pick a number, then roll below that number to win. Lower numbers will increase your potential payout, while higher ones are safer.
      `,
    },
    app: React.lazy(() => import('./Dice')),
  },
  {
    id: 'slots',
    meta: {
      background: '#0b0b0e',
      name: 'Slots',
      image: '/games/slots.png',
      description: `
        Play and pray. At the top of the slot machine you can see your potential rewards. Always fair.
      `,
    },
    app: React.lazy(() => import('./Slots')),
  },
  {
    id: 'flip',
    meta: {
      name: 'Flip',
      description: `
        Pick Heads or Tails. Double your money or go broke. Simple as that.
      `,
      image: '/games/flip.png',
      background: '#0b0b0e',
    },
    app: React.lazy(() => import('./Flip')),
  },
  {
    id: 'plinko',
    meta: {
      background: '#0b0b0e',
      image: '/games/plinko.png',
      name: 'Plinko',
      description: `
        Plinko Game on Blockchain
      `,
    },
    app: React.lazy(() => import('./Plinko')),
  },
  {
    id: 'hilo',
    meta: {
      name: 'HiLo',
      image: '/games/hilo.png',
      description: 'Guess if the next card is going to be higher or lower than the current one. Continue until you want to cash out!',
      background: '#0b0b0e',
    },
    props: { logo: '/logo.svg' },
    app: React.lazy(() => import('./HiLo')),
  },
  {
    id: 'mines',
    meta: {
      name: 'Mines',
      description: `
        There's money hidden beneath the squares. The reward will increase the more squares you reveal, but watch out for the 5 hidden mines. Touch one and you'll go broke. You can cash out at any time.
      `,
      image: '/games/mines.png',
      background: '#0b0b0e',
    },
    app: React.lazy(() => import('./Mines')),
  },
  {
    id: 'roulette',
    meta: {
      name: 'Roulette',
      image: '/games/roulette.png',
      description: `
        A miniature version of Roulette on the Blockchain!
      `,
      background: '#0b0b0e',
    },
    app: React.lazy(() => import('./Roulette')),
  },
]
