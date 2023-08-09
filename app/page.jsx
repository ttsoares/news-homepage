import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col md:grid grid-cols-1 grid-rows-8 md:grid-cols-3 gap-5  w-full h-fit">
      {/* top image */}
      <div className="order-1 w-full h-[300px] md:row-span-2 col-span-1 md:col-span-2 bg-img-top-mob md:bg-img-top-dsk bg-cover bg-no-repeat"></div>

      <div className="order-3 md:order-2 flex flex-col row-span-4 col-span-1 bg-black p-5">
        <h2 className=" text-4xl font-bold text-soft_orange pt-4 pb-4">New</h2>
        <div className="border-gray-400 mb-5 mt-3">
          <h3 className=" text-2xl font-bold text-white mb-3 hover:text-soft_orange hover:cursor-pointer">
            Hydrogen VS Electric Cars
          </h3>
          <p className="text-gray-400 text-xl">
            Will hydrogen-fueled cars ever catch up to EVs?
          </p>
          <div className="w-full py-7 border-b-2 border-gray-500"></div>
        </div>
        <div className="border-gray-400 mb-5 mt-3">
          <h3 className="text-2xl font-bold text-white mb-3 hover:text-soft_orange hover:cursor-pointer">
            The Downsides of AI Artistry
          </h3>
          <p className="text-gray-400 text-xl">
            What are the possible adverse effects of on-demand AI image
            generation?
          </p>
          <div className="w-full py-7 border-b-2 border-gray-500"></div>
        </div>
        <div className="border-gray-400 mb-5 mt-3">
          <h3 className=" text-2xl font-bold text-white mb-3 hover:text-soft_orange hover:cursor-pointer">
            Is VC Funding Drying Up?
          </h3>
          <p className="text-gray-400 text-xl">
            Private funding by VC firms is down 50% YOY. We taka a look at what
            that means.
          </p>
        </div>
      </div>

      <div className="order-2 md:order-3 flex flex-col md:flex-row row-span-1 col-span-2 mt-6">
        <h1 className="w-full md:w-1/2 text-5xl md:text-6xl font-bold">
          The Bright Future of Web 3.0?
        </h1>
        <div className="w-full md:w-1/2 ml-4 mr-2">
          <p className="text-gray-500 leading-loose mr-2">
            We dive into the next evolution of the web that claims to put power
            of the platforms back into the hands of the people. Bit is it really
            fulfilling its promise?
          </p>
          <button className="text-white bg-soft_red px-10 py-4 mt-12 tracking-[.5rem] font-bold hover:bg-black hover:text-white">
            READ MORE
          </button>
        </div>
      </div>

      <div className="order-last flex flex-col md:flex-row col-span-3 h-1/3 w-full">
        <div className="flex m-2">
          <div className="p-2 w-36 h-36">
            <Image
              src="/image-retro-pcs.jpg"
              width={100}
              height={80}
              alt="desktop"
            />
          </div>
          <div className="ml-2">
            <h2 className="text-4xl text-gray-300 font-bold pb-2 ">01</h2>
            <h3 className="font-bold text-xl mb-2 hover:text-soft_red hover:cursor-pointer">
              Reviving Retro PCs
            </h3>
            <p>What happens when ols PCs are given modern upgrades?</p>
          </div>
        </div>
        <div className="flex m-2">
          <div className="p-2 w-36 h-36">
            <Image
              src="/image-top-laptops.jpg"
              width={100}
              height={80}
              alt="laptop"
            />
          </div>
          <div className="ml-2">
            <h2 className="text-4xl text-gray-300 font-bold pb-2 ">02</h2>
            <h3 className="font-bold text-xl mb-2 hover:text-soft_red hover:cursor-pointer">
              Top 10 Laptops of 2022
            </h3>
            <p>Our best picks for various needs and budgets.</p>
          </div>
        </div>
        <div className="flex m-2">
          <div className="p-2 w-36 h-36">
            <Image
              src="/image-gaming-growth.jpg"
              width={100}
              height={80}
              alt="laptop"
            />
          </div>
          <div className="ml-2">
            <h2 className="text-4xl text-gray-300 font-bold pb-2 ">03</h2>
            <h3 className="font-bold text-xl mb-2 hover:text-soft_red hover:cursor-pointer">
              The Growth of Gaming
            </h3>
            <p>How the plandemic has sparked fresh opportunities.</p>
          </div>
        </div>
      </div>
    </main>
  );
}
