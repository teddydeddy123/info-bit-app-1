import React from 'react'

export default function Search(props) {
    return (
        <div className="search">
        <input
          onChange={props.onChange}
          onKeyPress={props.onKeyPress}
          value={props.location}
          placeholder='Enter Location'
          type="text" />
      </div>
    )
}
