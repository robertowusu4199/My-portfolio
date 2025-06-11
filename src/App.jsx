import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import WorkPage from "./pages/WorkPage";
import Blog from "./pages/Blog"

const App = () => {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/work" element={<WorkPage />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
    </>
  );
};

export default App;


















///111111
// import Header from "./components/Header"; 
// // import Hero from './components/Hero'
// import Profile from "./components/Profile";
// import Work from "./components/Work"


// const App = () => {
//   return (
//     <>
//       <Header />

//       {/* <Hero /> */}

// {/* Main content without extra top padding */}
// <div className="mx-4 flex flex-col items-center gap-10 lg:mb-32">
//   <div className="flex flex-col-reverse lg:flex-row items-start gap-12 mx-auto max-w-7xl px-4 w-full">

//     {/* Sticky Sidebar */}
//     <div className="w-full lg:max-w-sm lg:sticky lg:top-0 lg:z-10 self-start">
//       <Profile />
//     </div>

//     {/* Main Work Content */}
//     <div className="w-full">
//       <Work />
//     </div>

//   </div>
// </div>



//     </>
// )
// }

// export default App;