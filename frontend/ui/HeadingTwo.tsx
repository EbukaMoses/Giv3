import React from 'react'
import { twMerge } from 'tailwind-merge'

const HeadingTwo = ({title, className}: {title: string, className?: string}) => {
  return (
    <h2 className={twMerge("text-2xl font-semibold", className)}>{title}</h2>
  )
}

export default HeadingTwo