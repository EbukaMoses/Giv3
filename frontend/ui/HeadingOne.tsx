import React from 'react'
import { twMerge } from 'tailwind-merge'

const HeadingOne = ({title, className}: {title: string, className?: string}) => {
  return (
    <h1 className={twMerge("text-3xl font-semibold", className)}>{title}</h1>
  )
}

export default HeadingOne