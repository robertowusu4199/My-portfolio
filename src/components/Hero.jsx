import { Link } from 'react-router-dom';


const Hero = () => {
  return (
    <section 
    id="home" 
    className="z-1 pt-28 lg:pt-36 mx-4 flex flex-col items-center gap-10">

      <div className="flex flex-col-reverse lg:flex-row gap-12 mx-auto max-w-7xl px-4">

        <div className="w-full lg:w-1/3 bg-white p-12 rounded-[15px]">

          <div className="">
  
              <figure>
                <img 
                src="/images/fab-2.jpg" 
                width={600}
                height={300}
                alt="Henry Clark" 
                className="w-full h-auto object-cover rounded-[15px]" 
                />
            </figure>
          </div>
          
          <div className="text-center text-lg lg:text-lg pt-4">
          <h1 className="text-black text-center text-xl md:text-2xl lg:text-3xl font-extrabold tracking-tight font-bricolageGrotesque">
          Robert Adu
        </h1>
        <h4
          className="text-black/80 font-semibold text-center p-2 font-bricolageGrotesque lg:line-clamp-none"
        >
          A Software Developer passionate about building scalable, innovative
          solutions that drive impact.
        </h4>
          </div>

         <div className="flex flex-col items-center gap-4">
          <div className="flex">

          <a
           href="mailto:adurobert4199@gmail.com"
           className="bg-black py-2 px-6 flex items-center gap-2 rounded-full border border-secondary"
          >
            <span className="text-sm text-white font-bricolageGrotesque">
              Send me an email
            </span>
          </a>
         </div>
        </div>

        </div>

        <div className='w-full lg:w-2/3 bg-white p-12 rounded-[15px]'>

            <div className="">
                <figure className="img-box w-9 h-9 rounded-lg">
                    <img 
                    src="/images/avatar-1.jpg" 
                    width={40}
                    height={40}
                    alt="Henry clark portrait"
                    className="img-cover" 
                    />
                </figure>

                <div className="flex items-center gap-1.
                text-zinc-400 text-sm tracking-wide">
                    <span className="relative w-2 h-2 
                    rounded-full bg-emerald-400">
                        <span className="absolute inset-0
                        rounded-full bg-emerald-400 animate-ping"></span>
                    </span>

                    Available for work
                </div>
            </div>

            <h2 className="headline-1 max-w-[15ch] sm:max-w-
            [20ch] lg:max-w-[15ch] mt-5 mb-8 lg:mb-10">
                Building Scalable Modern Website for the Future
            </h2>

        </div>

      </div>
    </section>
  );
};

export default Hero;

