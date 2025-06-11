import Link from "./Link";

const Profile = () => {
  return (
    <div className="lg:sticky lg:top-36 bg-white p-5 rounded-[15px]">
      <figure className="flex justify-center">
        <img
          src="/images/fab-2.jpg"
          alt="Robert Adu"
          className="w-full md:w-[50%] lg:w-full mx-auto h-auto object-cover rounded-[15px] transition-all duration-500 ease-in-out"
        />
      </figure>

      <div className="w-full md:w-[70%] lg:w-full mx-auto text-center text-lg pt-4">
        <h1 className="text-black text-xl md:text-2xl lg:text-3xl font-extrabold tracking-tight font-bricolageGrotesque">
          Robert Adu
        </h1>
        <h4 className="text-black/80 font-semibold p-2 font-bricolageGrotesque">
          A Software Developer passionate about building scalable, innovative
          solutions that drive impact.
        </h4>
      </div>

      <div className="w-full md:w-[70%] lg:w-full mx-auto flex flex-col items-center gap-4 pt-4">
        <a
          href="mailto:adurobert4199@gmail.com"
          className="bg-black py-2 px-6 flex items-center gap-2 rounded-full border border-secondary"
        >
          <span className="text-sm text-white font-bricolageGrotesque">
            Send me an email
          </span>
        </a>
        <Link />
      </div>
    </div>
  );
};


export default Profile;

