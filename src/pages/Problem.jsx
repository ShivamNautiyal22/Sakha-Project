import React from 'react'
import { Element } from 'react-scroll'

const Problem = () => {
  return (
    <Element name="problem" className='px-10 pt-30 pb-10 flex flex-col items-center gap-6'>
        <img src="/section-1.png" alt="problem-traffic" className='' width={350} />
        <h1 className='text-[35px] text-center '>Learning shouldn't be a long commute. Every child deserves great education—close to home, within reach.</h1>
    </Element>
  )
}

export default Problem