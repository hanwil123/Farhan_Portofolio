import React from "react";

const Home = () => {
  return (
    <>
      <section class="text-gray-600 body-font">
        <div class="container mx-auto flex px-5  md:flex-row flex-col items-center">
          <div class="lg:flex-grow md:w-1/2 lg:px-5 md:px-4 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 class="title-font lg:text-3xl md:text-xl sm:text-xl mb-7 font-mono text-gray-900 font-bold">
              FARHAN WILDAN NUGRAHA
            </h1>
            <p class=" mb-7 text-black font-mono font-bold">
              CREATIVE JUNIOR FULLSTACK DEVELOPER
            </p>
            <div className=" w-60 h-1 bg-yellow-300 mb-5"></div>
            <p className=" text-black text-xl">
              I'm student of Gunadarma University. I've a lot of experience in
              Web Development, check my projects for more details.
            </p>
          </div>
          <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0 h-screen flex justify-center">
            <img src="han.jpg" alt="" className=" object-cover" />
          </div>
          <div class="lg:flex-grow md:w-1/2 lg:px-10 md:px-4 flex flex-col md:items-start md:text-left items-center text-center">
            <div className=" flex flex-col text-center ml-10">
              <h1 class="title-font lg:text-xl md:text-xl sm:text-xl mb-3 font-mono text-gray-900 font-bold">
                Experience in Hackfest
              </h1>
              <h1 class="title-font lg:text-4xl md:text-xl sm:text-xl mb-20 font-mono text-gray-900 font-bold">
                1
              </h1>
            </div>
            <div className=" flex flex-col text-center lg:ml-14 md:ml-10">
              <h1 class="title-font lg:text-xl md:text-xl sm:text-xl mb-3 font-mono text-gray-900 font-bold">
                Complete Projects
              </h1>
              <h1 class="title-font lg:text-4xl md:text-xl sm:text-xl mb-20 font-mono text-gray-900 font-bold">
                2
              </h1>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
