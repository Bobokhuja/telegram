import React, {ChangeEventHandler} from 'react'
import classes from './SeatchInput.module.scss'

type IInput = {
  label?: string
  type: string
  value?: string
  onChange?: ChangeEventHandler
  placeholder?: string

}

function SearchInput({type, value, label = '', placeholder = '', onChange}: IInput) {
  const htmlFor: string = 'searchInput'

  return (
    <div className={classes.SearchInput}>
      <label htmlFor={htmlFor}>{label}</label>
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