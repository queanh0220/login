import React from 'react'

export default function InputForm({label, register, required}) {
  return (
      <>
      <label htmlFor="">{label}</label>
      <input className="input" type="text" {...register(label, {required})}/>
      </>
  )
}
