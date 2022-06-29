import React from 'react'
import classes from './InputSelectFile.module.scss'

function InputSelectFile() {

  return (
    <div className={classes.InputSelectFile}>
      <span className={`${classes.clip} material-symbols-outlined`}>attach_file</span>
      <input
        type="file"
        className={classes.InputFile}
        multiple
      />
    </div>
  )
}

export default InputSelectFile