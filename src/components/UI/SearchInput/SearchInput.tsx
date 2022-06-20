import React, {ChangeEventHandler} from 'react'
import classes from './SeatchInput.module.scss'

interface IInput {
  label?: string
  type: string
  value?: string
  onChange?: ChangeEventHandler
  placeholder?: string

}

function SearchInput({type, value, label = '', placeholder = '', onChange}: IInput) {

  const htmlFor: string = `${type}-${Math.random()}`

  return (
    <div className={classes.SearchInput}>
      <label htmlFor={htmlFor}>
        {label}
      </label>
      <input
        type={type}
        value={value}
        id={htmlFor}
        placeholder={placeholder}
        onChange={onChange && onChange}
      />
    </div>
  )
}

export default SearchInput