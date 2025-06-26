import React from "react";
import malosFlix from "../../assets/malosFlix.png";
import malosCore from "../../assets/malosCore.png";

const Projects = () => {
  return (
    <section className="py-5 pb-7 bg-gradient-to-b from-white via-gray-200 to-gray-100">
      <div className="px-4 mx-auto sm:px-6 max-w-7xl">
        <div className="grid max-w-md grid-cols-1 mx-auto mt-12 lg:max-w-full lg:mt-16 lg:grid-cols-3 gap-x-16 gap-y-12">
          <div className="cursor-pointer shadow-lg rounded-lg hover:-translate-y-1 transition duration-150 h-fit">
            <a
              href="https://malos-flix.vercel.app/"
              target="_blank"
              className="block aspect-w-4 aspect-h-3"
            >
              <img
                className="object-cover w-full h-full"
                src={malosFlix}
                alt=""
              />
            </a>
            <div className="px-3 pb-2">
              <p className="mt-6 text-xl font-semibold">
                <a
                  href="https://malos-flix.vercel.app/"
                  target="_blank"
                  title=""
                  className="text-black"
                >
                  Malos Flix
                </a>
              </p>
              <p className="mt-4 text-gray-600">
                A Best Movie Database for Online Movie Streaming
              </p>
            </div>
          </div>

          <div className="cursor-pointer shadow-lg rounded-lg hover:-translate-y-1 transition duration-150 h-fit">
            <a
              href="https://malos-core.vercel.app/"
              target="_blank"
              className="block aspect-w-4 aspect-h-3"
            >
              <img
                className="object-cover w-full h-full"
                src={malosCore}
                alt=""
              />
            </a>
            <div className="px-3 pb-2">
              <p className="mt-6 text-xl font-semibold">
                <a
                  href="https://malos-flix.vercel.app/"
                  target="_blank"
                  title=""
                  className="text-black"
                >
                  Malos Core
                </a>
              </p>
              <p className="mt-4 text-gray-600">
                A Best Admin Panel for Managing Stock
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
