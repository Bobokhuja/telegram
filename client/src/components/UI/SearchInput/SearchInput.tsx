import React, { ChangeEventHandler } from 'react'
import classes from './SeatchInput.module.scss'

type IInput = {
  label?: string
  type: string
  value?: string
  onChange?: ChangeEventHandler
  placeholder?: string
}

export default function SearchInput({type, value, label = '', placeholder = '', onChange}: IInput) {

  return (
    <div className={classes.SearchInput}>
      <label htmlFor={'searchInput'}>{label}</label>
      <input
        type={type}
        value={value}
        id={'searchInput'}
        placeholder={placeholder}
        onChange={onChange && onChange}
      />
    </div>
  )
}