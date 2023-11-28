import search from "../../assets/search.svg";

const Banner = () => {
  return (
    <section>
      <div className="relative py-12 bg-white sm:py-16 lg:py-20">
        <div className="absolute inset-0">
          <img
            className="object-cover object-right w-full h-full lg:object-center"
            src="https://cdn.rareblocks.xyz/collection/clarity-ecommerce/images/hero/5/background.png"
            alt=""
          />
        </div>

        <div className="absolute inset-0 bg-gray-900 bg-opacity-40"></div>

        <div className="relative px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
          <div className="max-w-lg mx-auto text-center xl:max-w-2xl">
            <h1 className="text-3xl font-bold text-white sm:text-4xl xl:text-5xl">
              Find the best contest <br /> just in one tap
            </h1>
            <p className="max-w-lg mx-auto mt-6 text-base font-normal leading-7 text-gray-300">
              Talent Hunt is a dynamic Contest Creation Platform designed to
              engage communities, and celebrate talent across various domains.
            </p>

            <form action="#" className="max-w-xl mx-auto mt-10">
              <div>
                <label htmlFor="search" className="sr-only">
                  Search
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <img
                      src={search}
                      alt=""
                      className="w-5 h-5 stroke-current text-gray-400"
                    />
                  </div>

                  <input
                    type="text"
                    name=""
                    id="search"
                    placeholder="Try Business, Writing etc..."
                    className="block w-full py-3 pl-10 pr-4 text-base font-normal leading-7 text-gray-900 placeholder-gray-500 bg-white border border-white focus:ring-white focus:border-white focus:ring-offset-2"
                  />
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="
                                inline-flex
                                items-center
                                justify-center
                                w-full
                                px-6
                                py-4
                                text-sm
                                font-bold
                                tracking-widest
                                text-white
                                uppercase
                                transition-all
                                duration-200
                                bg-gray-800
                                border border-transparent
                                focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 focus:ring-white
                                hover:bg-gray-700
                            "
                >
                  Search now
                </button>
              </div>
            </form>

            <div className="grid max-w-md grid-cols-2 mx-auto mt-8 md:mt-16 lg:mt-24 xl:mt-32 gap-x-6 grid-col-2">
              <div>
                <p className="text-4xl font-bold text-white">389</p>
                <p className="mt-2 text-sm font-medium text-gray-300">
                  Contest Creators
                </p>
              </div>

              <div>
                <p className="text-4xl font-bold text-white">14,344</p>
                <p className="mt-2 text-sm font-medium text-gray-300">
                  Registered Talents
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
