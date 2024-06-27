import React from 'react'
import Image from 'next/image'

const page = () => {
  return (
    <div>
        <h1>Home</h1>
        <Image
      src="/fire.png"
      width={500}
      height={500}
      alt="Picture of the author"
    />
    </div>
  )
}

export default page