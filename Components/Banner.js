import React from 'react'
import Image from'next/image'

const Banner = () => {
  return (
    <div>
        <Image src={"https://img.freepik.com/free-photo/variety-fresh-tasty-vegetables-dark_1220-4444.jpg?w=1380&t=st=1660295760~exp=1660296360~hmac=84f96297d33eaa705fe79b42fa966c56d7aeca32860d2801f7e649f115ea8af9"} alt="banner" height={500} width={1400}/>
    </div>
  )
}

export default Banner;