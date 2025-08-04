import Image from "next/image"

const Hero = () => {
  return (
    <section className="py=28 container mx-auto max-w-7xl px-4">
      <div className="max-w-3xl mx-auto text-center">
        <div className="flex flex-col items-center mb-4">
            <Image src="/siam.jpg" alt="Profile Photo" width={1000} height={1000} className="rounded-full mb-4 w-36 h-36 object-cover ring-2 ring-primary"/>
        </div>

        <h1 className="text-2xl md:text-4xl font-bold mb-4">Hi, I&apos;m <span className="text-primary"> SM Sumsuzzaman</span></h1>
        <p className="text-sm md:text-lg text-gray-600 dark:text-gray-300">Frontend Developer | MERN Developer | Open Source Contributor</p>
      </div>
    </section>
  ) 
}

export default Hero
