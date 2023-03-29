import Head from "next/head";
import Typewriter from "typewriter-effect";

const Home = () => {
  return (
    <>
      <Head>
        <title>Sitafal — Online English Speaking Course</title>
        <meta name="title" content="Sitafal — Online English Speaking Course" />
        <meta
          name="description"
          content="Looking for an online English speaking course to improve your language skills? get Personalized instruction with engaging activities to help you achieve your goals. Join now and gain the confidence you need to speak English fluently. Start your journey today!"
        />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://scripai.com/" />
        <meta
          property="og:title"
          content="Sitafal — Online English Speaking Course"
        />
        <meta
          property="og:description"
          content="Looking for an online English speaking course to improve your language skills? get Personalized instruction with engaging activities to help you achieve your goals. Join now and gain the confidence you need to speak English fluently. Start your journey today!"
        />
        <meta property="og:image" content="https://sitafal.co/desk.png" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://scripai.com/" />
        <meta
          property="twitter:title"
          content="Sitafal — Online English Speaking Course"
        />
        <meta
          property="twitter:description"
          content="Looking for an online English speaking course to improve your language skills? get Personalized instruction with engaging activities to help you achieve your goals. Join now and gain the confidence you need to speak English fluently. Start your journey today!"
        />
        <meta property="twitter:image" content="https://sitafal.co/desk.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <link rel="icon" href="https://scripai.com/favicon.png" />
      </Head>
      <main className="m-auto flex max-w-5xl flex-col px-4">
        <nav className="flex items-center justify-between py-4">
          <a href="/">
            <img src="/sitafal-logo.svg" className="w-[100px]"></img>
          </a>
          <div>
            <ul className="flex items-center gap-4 text-xs">
              {/* <li className="hidden sd:inline">
                <a
                  href="https://www.producthunt.com/posts/scrip-ai?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-scrip&#0045;ai"
                  target="_blank"
                >
                  <img
                    className="w-36"
                    src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=384573&theme=light"
                  />
                </a>
              </li> */}
              <li className="flex w-fit items-center gap-1 rounded-full bg-rose-500 p-1 px-3	 text-white shadow-sm ">
                <a href="/app">Try for free!</a>
                <a href="/app">
                  <svg
                    className="w-6"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={1.5}
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
                    />
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </nav>
        <div className="flex flex-col items-center justify-center gap-4 py-20 ">
          <div className="line flex flex-col text-center text-base font-extrabold xs:text-lg sdm:text-3xl sm:gap-3 md:text-4xl mdx:text-5xl ">
            <span>10X faster way to become</span>
            <span>fluent and confident in</span>
            <spn className="text-rose-500">
              <Typewriter
                options={{
                  strings: [
                    "Spoken English",
                    "English conversation",
                    "English Speaking",
                  ],
                  autoStart: true,
                  loop: true,
                }}
              />
            </spn>
          </div>
          <p className="text-center text-xs sm:text-base">
            {/* Speak English confidently in less than 100 days?  */}
            Master the art of English under 100 days
          </p>
          <div className="flex flex-col items-center justify-center gap-2">
            <div className="flex w-fit items-center justify-around rounded-full bg-rose-600 p-2 px-4	text-white shadow-xl hover:bg-rose-700 ">
              <a href="/app">Book a Free Trial Class!</a>
              <svg
                className="w-6"
                fill="none"
                stroke="currentColor"
                strokeWidth={1.5}
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
                />
              </svg>
            </div>
            <span className="text-center text-xs text-gray-600">
              ✓ Hurry! Limited Seats
            </span>
          </div>
          {/* <a
            className="sd:hidden"
            href="https://www.producthunt.com/posts/scrip-ai?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-scrip&#0045;ai"
            target="_blank"
          >
            <img
              className="w-36"
              src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=384573&theme=light"
            />
          </a> */}
          <img className="w-11/12" src="/desk-new.png"></img>
          <div className="pt-10">
            <div className="text-center font-bold xs:text-lg sdm:text-3xl md:text-4xl">
              How It Works!
            </div>
            <img
              src="/how-it-works.png"
              className="hidden w-10/12 mx-auto py-10 md:block "
            ></img>
            <img
              src="/how-it-works-mobile.png"
              className="w-full py-10 md:hidden "
            ></img>
          </div>
          <div className="">
            <div className="text-center font-bold xs:text-lg sdm:text-3xl md:text-4xl">
              Loved by 2000+ Learners
            </div>
            <img
              src="/love.png"
              className="hidden w-full py-10 md:block "
            ></img>
            <img
              src="/love-mobile.png"
              className="w-full py-10 md:hidden "
            ></img>
          </div>
          <div className=" flex w-[100%] flex-col items-center gap-6 rounded-xl bg-rose-600 py-10 px-2 text-center text-white xs:text-lg sdm:text-3xl">
            {/* Become fluent English Speaker in less than 100 days!
            <br /> */}
            Ready to speak English confidently?
            <div className="flex w-fit items-center justify-around rounded-full bg-white p-2 px-4 text-lg	text-black ">
              <a href="/app" className="text-sm">
                Book a Demo Class!
              </a>
              <svg
                className="w-6"
                fill="none"
                stroke="currentColor"
                strokeWidth={1.5}
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
                />
              </svg>
            </div>
            <div className="flex flex-col items-center gap-1 text-center text-xs text-gray-200 ">
              <span>✓ Limited Seats per class</span>
              <span>✓ Free demo lecture</span>
            </div>
          </div>
          <div className="pt-10">Made in ❤️ with English</div>
        </div>
      </main>
    </>
  );
};

export default Home;
