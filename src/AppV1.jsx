import React, { useState } from 'react'
import { Accordian } from './components/Accordian.jsx'

export const AppV1 = () => {
  const [curOpen, setCurOpen] = useState(null)
  const data = [
    {
      id: 1,
      title: 'Getting Started',
      content:
        'Welcome to our platform! This section will guide you on how to get started with our services.',
    },
    {
      id: 2,
      title: 'Features',
      content:
        'Discover the various features we offer to enhance your experience. Explore our tools and functionalities.',
    },
    {
      id: 3,
      title: 'FAQs',
      content:
        'Frequently Asked Questions section provides answers to common queries. Find solutions here.',
    },
    {
      id: 4,
      title: 'Tutorials',
      content:
        'Learn through step-by-step tutorials to maximize your usage of our platform.',
    },
    {
      id: 5,
      title: 'Contact Us',
      content:
        'Reach out to our support team for any assistance or inquiries you might have.',
    },
  ]
  return (
    <div>
      {data.map((item, i) => {
        return (
          <Accordian
            item={item}
            key={item.id}
            num={i}
            curOpen={curOpen}
            onOpen={setCurOpen}
          />
        )
      })}
    </div>
  )
}
