import React from 'react'
import './ProgressBar.css'

function ProgressBar(props) {
  const { width } = props
  return (
    <div className="progress-container">
      <div className="progress-filler" style={{ width: width }}>
        <span className="progress-label"></span>
      </div>
    </div>
  )
}

export default ProgressBar
