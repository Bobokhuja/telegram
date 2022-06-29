import React from 'react'
import classes from './SVGCreate.module.scss'

interface ISVGCreate {
  svg: string
  fill: string
  className?: undefined | string
  style?: undefined | object
  id: string
}

function SVGCreate({svg, fill, className, style, id}: ISVGCreate) {
  const cls: string[] = [classes.SVGCreate]

  if (className) {
    cls.push(className)
  }

  return (
    <svg fill={fill} className={cls.join(' ')} style={style && style}>
      <use href={`${svg}#${id}`} />
    </svg>
  )
}

export default SVGCreate