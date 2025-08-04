import Image from "next/image"

const Hero = () => {
  return (
    <section className="py=28 container mx-auto max-w-7xl px-4">
      <div className="max-w-3xl mx-auto text-center">
        <div>
            <Image src="/siam.jpg" alt="Profile Photo" width={100} height={100}/>
        </div>
      </div>
    </section>
  )
}

export default Hero
