import React from 'react'
import { twMerge } from 'tailwind-merge'

const HeadingThree = ({title, className}: {title: string, className?: string}) => {
  return (
    <h3 className={twMerge("text-xl font-medium", className)}>{title}</h3>
  )
}

export default HeadingThree