import React, { useState } from 'react'
import ReactSparkle from 'react-sparkle'

export const FancyInput = ({ label, error, onBlur, ...rest }) => {
  const [isSparkleEnabled, setIsSparkleEnabled] = useState(false)

  return (
    <div style={{ position: 'relative', marginBottom: '1rem' }}>
      {isSparkleEnabled && (
        <ReactSparkle
          color={[
            '#01BEFE',
            '#FFDD00',
            '#FF7D00',
            '#FF006D',
            '#ADFF02',
            '#8F00FF',
          ]}
          overflowPx={10}
          minSize={5}
          maxSize={40}
        />
      )}
      <label>
        {label && <span style={{ display: 'block' }}>{label}</span>}
        <input
          style={{ width: '300px' }}
          onFocus={() => setIsSparkleEnabled(true)}
          onBlur={e => {
            onBlur(e)
            setIsSparkleEnabled(false)
          }}
          {...rest}
        />
      </label>
      {error && (
        <span
          style={{
            position: 'absolute',
            top: 0,
            right: 0,
            color: 'red',
            fontSize: '.8rem',
          }}
        >
          {error}
        </span>
      )}
    </div>
  )
}
