'use client'
import Image from "next/image";
import { IoMailUnreadOutline } from "react-icons/io5";
import { HiLocationMarker } from "react-icons/hi";
import { FaPhone } from "react-icons/fa6";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { FiMenu, FiX } from "react-icons/fi";
import { Rye } from "next/font/google";
import { useState } from "react";
import Link from 'next/link';
const rye = Rye({
  subsets: ["latin"],
  weight:["400"]
});


export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const features = [
    {
      icon: '/images/artistry.svg',
      title: "Artistry",
      description: "Unique designs crafted with skill and creativity.",
    },
    {
      icon: '/images/dedication.svg',
      title: "Dedication",
      description: "Committed to precision in every detail.",
    },
    {
      icon: '/images/passion.png',
      title: "Passion",
      description: "Driven by love for the art of tattooing.",
    },
  ];


  const galleryImages = [
    { id: 1, src: '/images/images.png', alt: 'Artwork 1' },
    { id: 2, src: '/images/images2.jpg', alt: 'Artwork 2' },
    { id: 3, src: '/images/images2.jpg', alt: 'Artwork 3' },
    { id: 4, src: '/images/images.png', alt: 'Artwork 4' },
    { id: 5, src: '/images/images.png', alt: 'Artwork 5' },
    { id: 6, src: '/images/images2.jpg', alt: 'Artwork 6' },
    { id: 7, src: '/images/images2.jpg', alt: 'Artwork 6' },
    { id: 8, src: '/images/images.png', alt: 'Artwork 6' },
    
  ];

 
  return (
   <>
    <div className="text-white ">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-transparent bg-opacity-80">
      <nav className="max-w-7xl mx-auto flex justify-between items-center py-8 px-6 md:px-52 relative">

        {/* Hamburger Icon (Mobile) */}
        <div className="flex md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-white focus:outline-none"
          >
            {menuOpen ? <FiX size={28} /> : <FiMenu size={28} />}
          </button>
        </div>

        {/* Centered Logo */}
        <div className="absolute  left-1/2 transform -translate-x-1/2 text-white text-center font-bold leading-tight tracking-wide text-xs md:text-lg ">
          HIGH INKPACT<br />TATTOOS
        </div>

        {/* Desktop Menus */}
        <div className="hidden md:flex space-x-6">
          <Link href="/" className="text-white hover:text-gray-400">HOME</Link>
          <Link href="/about" className="text-white hover:text-gray-400">ABOUT</Link>
        </div>

        <div className="hidden md:flex space-x-6">
          <Link href="/works" className="text-white hover:text-gray-400">WORKS</Link>
          <Link href="/contact" className="text-white hover:text-gray-400">CONTACT</Link>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <div
        className={`fixed top-0 left-0 h-full w-2/3 bg-black bg-opacity-90 text-white transform ${
          menuOpen ? "translate-x-0 " : "-translate-x-full"
        } transition-transform duration-300 ease-in-out md:hidden z-50 flex flex-col space-y-6 p-8 `}
      >
        <button
          onClick={() => setMenuOpen(false)}
          className="self-start mb-8"
        >
          <FiX size={28} />
        </button>
        <div className={`flex flex-col justify-center items-center space-y-6  h-96 ${rye.className}`}>
        <Link href="/" onClick={() => setMenuOpen(false)}>HOME</Link>
        <Link href="/about" onClick={() => setMenuOpen(false)}>ABOUT</Link>
        <Link href="/works" onClick={() => setMenuOpen(false)}>WORKS</Link>
        <Link href="/contact" onClick={() => setMenuOpen(false)}>CONTACT</Link>
        </div>
      </div>
    </header>






    <section className="min-h-screen bg-black text-white flex justify-center relative">

{/* Background Image */}
<div className="relative w-full h-screen">
  <Image
    src="/images/hero-img4.jpg"
    alt="Tattoo Woman"
    fill
    className="object-cover object-[28%] md:object-center w-full h-full"
  />

  {/* Left Content */}
  <div className="absolute top-28 left-1/2 -translate-x-1/2 md:translate-x-0 md:left-20 md:top-32 p-4 md:p-12 text-center md:text-left">
    <h1 className={`text-5xl sm:text-5xl md:text-6xl lg:text-8xl leading-tight mb-4 md:mb-6 ${rye.className}`}>
      HIGH <br /> INKPACT <br /> TATTOOS
    </h1>
  </div>

  {/* Right Content */}
  <div className="absolute bottom-14 md:bottom-6 right-4 md:right-16 max-w-[90%] sm:max-w-sm md:max-w-md p-4 md:p-6 text-end text-sm text-white space-y-4 md:space-y-6">
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus sit ex doloremque maiores alias recusandae quod deleniti aliquid quos quae hic repellendus harum est atque quas corporis rerum, ullam consequuntur!
    </p>
    <div className="flex items-center justify-end gap-2 group cursor-pointer">
    <Link href="#artist" className=" mt-4  px-4 py-2 flex items-center gap-5 group w-auto ">
    <Image src={`/arrow_left.svg`} width={80} height={50} alt="arrow" className=" group-hover:-rotate-90   group-hover:translate-x-1/2 translate ease-in-out duration-700 "/>
      <span className="text-sm md:text-base">EXPLORE</span>
      </Link>
    </div>
  </div>

</div>

</section>




    <section className="bg-black text-white p-10 py-20 md:p-20">
      <div className=" mx-auto text-center space-y-12 ">
        <div className="grid gap-10 grid-cols-3  flex justify-center items-center">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-center space-y-3 md:space-y-6  ">
              <Image src={feature.icon} width={100} height={100} alt={feature.title} className="w-18 h-18 md:w-32 md:h-auto"/>
              <h3 className={`text-sm md:text-3xl  ${rye.className} uppercase`}>{feature.title}</h3>
              <p className="text-xs w-28 md:w-[150px] text-gray-500">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

<div className="container mx-auto px-4">
      {/* Artist Section */}
      <section className="relative p-12 py-20 md:pt-32" id="artist">
  {/* Center Artist Image */}
  <div className="flex justify-center items-center">
    <Image src='/images/images.png' width={450} height={450} alt="artist-img" className="rounded-full z-10" />
  </div>

  {/* Background Artist Text */}
  <div className={`absolute top-0 left-0 md:top-38 md:left-14 text-[5.5rem] md:text-8xl z-0 text-[#1E1E1E] ${rye.className}`}>
    <p>ARTIST</p>
    <p>ARTIST</p>
    <p>ARTIST</p>
    <p>ARTIST</p>
  </div>

  {/* Artist Name */}
  <h3 className={`absolute top-8 left-1/2 -translate-x-1/2 md:translate-x-0 md:top-18 right-auto md:right-18 text-4xl md:text-[5.5rem] text-center md:text-end uppercase mb-4 text-stroke-2 text-stroke-black z-20 w-full md:w-auto ${rye.className} `}>
    Nelson De <br /> Almeida
  </h3>

  {/* Bottom Content */}
  <div className="relative bottom-10 md:bottom-20 w-full flex flex-col md:flex-row justify-between md:items-end items-center text-center md:text-left mt-8 md:mt-0 z-20">
    <p className="text-sm max-w-lg">
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s,
    </p>
    <button className="relative mt-4 border px-4 py-2 flex gap-5 group">
      <p className="">Read More</p>
    <Image src={`/arrow_left.svg`} width={200} height={50} alt="arrow" className="hidden md:block absolute top-0 left-0 flex inset-0 -translate-x-1/2 group-hover:rotate-180   group-hover:translate-x-1/2 translate ease-in-out duration-700 "/>
      </button>
  </div>
</section>


      {/* Art Showcase */}
      <section className="text-white md:py-12">
  <div className="text-center mb-10">
    <h2 className={`text-3xl md:text-4xl mb-4 ${rye.className}`}>ART SHOWCASE</h2>
    <p className="max-w-xl mx-auto text-gray-400 text-xs md:text-sm">
      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
    </p>
  </div>

  <div className="columns-2 sm:columns-2 md:columns-4 gap-4 max-w-6xl mx-auto">
  {galleryImages.map((image, index) => (
    <div
      key={image.id}
      className={`relative mb-4 break-inside-avoid w-full ${
        index >= 4 ? 'block md:block hidden' : 'block'
      }`}
    >
      <Image
        src={image.src}
        alt={image.alt}
        width={500}
        height={500}
        className="w-full h-auto object-cover rounded-md"
      />
      <p className="absolute top-5 left-5">{image.id}</p>
    </div>
  ))}
</div>




  <div className="flex justify-center mt-8">
  <button className="relative mt-4 border px-4 py-2 flex gap-5 group">
      <p className="">View More</p>
    <Image src={`/arrow_left.svg`} width={200} height={50} alt="arrow" className="hidden md:block absolute top-0 left-0 flex inset-0 -translate-x-1/2 group-hover:rotate-180   group-hover:translate-x-1/2 translate ease-in-out duration-700 "/>
      </button>
  </div>
</section>



      {/* Call to Action */}
      <section className=" text-white relative py-16 px-6 md:px-16">
          {/* Background Text */}
        <div className={`absolute inset-0 flex  justify-center items-center gap-10 text-[5.5rem] md:text-8xl z-0 text-[#1E1E1E] ${rye.className}`}>
          <div>
            <p>INK</p>
            <p>INK</p>
            <p>INK</p>
            <p>INK</p>
          </div>
          <div>
            <p>INK</p>
            <p>INK</p>
            <p>INK</p>
            <p>INK</p>
          </div>
        </div>


      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-10 max-w-7xl mx-auto items-center ">
        {/* Left Column */}
        <div className="space-y-6 ">
          <h1 className={`text-4xl md:text-5xl font-bold font-serif leading-tight ${rye.className}`}>
            GET YOUR<br />INK NOW
          </h1>

          <div className="w-full   flex justify-start">
            {/* Replace with real image */}
            <Image 
              src="/images/images.png" 
              alt="Tattoo Left" 
              width={800} 
              height={600} 
              className="object-cover w-48 md:w-[450px] h-auto" 
            />
          </div>
        </div>

        {/* Right Column */}
        <div className="space-y-6">
          <div className="w-full flex justify-end">
            {/* Replace with real image */}
            <Image 
              src="/images/images.png" 
              alt="Tattoo Right" 
              width={800} 
              height={600} 
              className="object-cover w-48 md:w-[450px] h-auto" 
            />
          </div>

          <p className="text-gray-300 text-end text-xs md:text-sm leading-relaxed">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, 
            when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
            It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
          </p>
        </div>
      </div>
    </section>
      </div>
      {/* Contact Section */}
      <footer className="bg-black p-8 text-center md:text-left">
      <section className="bg-black text-white ">
      <h2 className={`text-center text-4xl md:text-5xl font-bold mb-12  ${rye.className}`}>
        CONTACT
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-7xl mx-auto flex items-center">
        {/* Left Column: Contact Info */}
        <div className="flex justify-center items-center order-2 md:order-1 text-xs md:text-sm">

        <div className="space-y-6  ">
          <div className="space-y-2">
            <p>MONDAY – SATURDAY | 10 AM – 8 PM</p>
            <p>(Closed WEDNESDAY & SUNDAY)</p>
          </div>

          <div className="flex items-start space-x-3">
            <HiLocationMarker/>
            <p>
              123 Ink Street, <br />
              Downtown, Toronto, ON M5B 2H1, <br />
              Canada
            </p>
          </div>

          <div className="flex justify-center md:justify-start space-x-3">
            <FaPhone/>
            <p>+1 (416) 555-2389</p>
          </div>

          <div className="flex items-center space-x-3">
            <IoMailUnreadOutline/>
            <p>highinkpacttattoos@gmail.com</p>
          </div>
        </div>
      </div>

        {/* Middle Column: Contact Form */}
        <div className="space-y-4 order-1 md:order-2 text-white text-xs md:text-sm">
  <input
    type="text"
    placeholder="Your Name"
    className="w-full bg-black border-b border-white p-2 focus:outline-none placeholder-white placeholder-opacity-70"
  />
  <input
    type="email"
    placeholder="Email"
    className="w-full bg-black border-b border-white p-2 focus:outline-none placeholder-white placeholder-opacity-70"
  />
  <input
    type="tel"
    placeholder="Phone"
    className="w-full bg-black border-b border-white p-2 focus:outline-none placeholder-white placeholder-opacity-70"
  />
  <textarea
    placeholder="Message"
    className="w-full bg-black border-b border-white p-2 focus:outline-none placeholder-white placeholder-opacity-70"
  />
  <button className="mt-4 border px-4 py-2 translate ease-in-out duration-700 hover:bg-white hover:text-black hover:font-semibold">Send</button>
</div>


        {/* Right Column: Map Image */}
      <div className="flex justify-center  md:justify-end md:mr-14 order-3 md:order-3 h-52">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2885.1470617594237!2d-79.7407538246573!3d43.686705950264404!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b3e20ccb08951%3A0x60509787a466b561!2s105%20Kennedy%20Rd%20S%20%2310%2C%20Brampton%2C%20ON%20L6W%203G2%2C%20Canada!5e0!3m2!1sen!2sin!4v1742730994373!5m2!1sen!2sin"  loading="lazy" ></iframe>
      </div>
      </div>
    </section>
    <div className="container mx-auto flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0 px-18 pt-14">
        {/* Left Logo */}
        <div className="text-center md:text-left">
          <h2 className={`text-3xl leading-tight  ${rye.className}`}>HIGH  INKPACT<br />TATTOOS</h2>
        </div>

        {/* Middle Nav Links */}
        <div className="flex space-x-6 text-xs md:text-sm order-3 md:order-2">
          <a href="#" className="text-gray-400">HOME</a>
          <a href="#" className="text-gray-400">ABOUT</a>
          <a href="#" className="text-gray-400">WORKS</a>
          <a href="#" className="text-gray-400">CONTACT</a>
        </div>

        {/* Right Social Icons */}
        <div className="flex space-x-4 order-2 md:order-3 mb-8 md:mb-0">
          <a href="#" className="text-xl hover:text-gray-400">
            <FaFacebookF />
          </a>
          <a href="#" className="text-xl hover:text-gray-400">
            <FaInstagram />
          </a>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="mt-8 text-center text-[10px] text-gray-500">
        highinkpacttattoo @ 2025 . All Rights Reserved . Designed By CONVEB
      </div>
      </footer>
    </div>
   </>
  );
}
