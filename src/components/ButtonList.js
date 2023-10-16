import React from 'react'
import Button from './Button'

// const list = ["All", "Live", "Gaming"]; 

function ButtonList() {
  return (
    <div className='flex'>
      <Button name="All"/>
      <Button name="Gaming"/>
      <Button name="Songs"/>
      <Button name="Live"/> 
      <Button name="Soccer"/>
      <Button name="Cricket" />
      <Button name="Cookings" />
      <Button name="Valentines" />
      <Button name="News" />

      <Button name="Cookings" />
      <Button name="Valentines" />
      <Button name="News" />
      
    </div>
  )
}

export default ButtonList