// pages/Home.jsx
import Profile from "../components/Profile";
import Work from "../components/Work";

const Home = () => {
  return (
    <div className="mx-4 flex flex-col items-center gap-10 lg:mb-32">
      <div className="flex flex-col-reverse lg:flex-row items-start gap-12 mx-auto max-w-7xl px-4 w-full">
        
        <div className="w-full lg:max-w-sm lg:sticky lg:top-0 lg:z-10 self-start">
          <Profile />
        </div>

        <div className="w-full">
          <Work />
        </div>

      </div>
    </div>
  );
};

export default Home;