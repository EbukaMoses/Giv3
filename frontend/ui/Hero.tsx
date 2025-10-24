import React from 'react'
import Container from '@/ui/Container'
import Image from 'next/image'

const Hero = () => {
    return (
        <Container className='py-0 px-0 pt-15'>
            {/* <Image src="/hero.jpg" alt="Hero" fill  className='w-full h-auto object-cover' /> */}
            <div className="relative">
                <img src="/hero2.jpg" alt="Hero image" className="w-[70vw] h-[70vh] object-cover rounded-2xl" />
                {/* <div className="absolute w-[70vw] h-[70vh] object-cover rounded-2xl top-0 left-0 w-full h-full bg-black opacity-50"></div> */}
                <div className="absolute bottom-1/20 left-1/4 transform -translate-x-1/2 -translate-y-1/2">
                    <h1 className="text-white text-6xl font-bold">
                        Give Better.<br /> Gift On-Chain
                    </h1>
                    <span className="text-sm -mt-10 text-white">create, send, and claim gifts on the blockchain. <br /> A secure and modern way to share value with anyone, anywhe</span>
                </div>

            </div>
        </Container>
    )
}

export default Hero