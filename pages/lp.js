import React, { useState, useEffect } from "react";
import Head from "next/head";

const LandingPage = () => {
  const x = "pune";
  const [show, setShow] = useState(false);
  // const [slider, setSlider] = useState(true);

  // useEffect(() => {
  //   setInterval(() => {
  //     setSlider(!slider);
  //   }, 3000);
  // }, [slider]);

  const handleToggle = () => {
    setShow(!show);
  };
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
      <div className="flex justify-around h-full">
        <div className="w-full p-6 sm:p-4 mdx:p-10 flex flex-col items-center gap-6">
          <img src="/sitafal-logo.svg" className="w-[100px] sm:hidden"></img>

          <h1 className="xs:text-lg sm:text-3xl">
            Spoken English Classes in Pune
          </h1>

          <img className="w-11/12" src="/desk.png"></img>

          {/* {slider ? (
            <img className="w-11/12" src="/desk.png"></img>
          ) : (
            <img className="w-11/12" src="/cover-back.png"></img>
          )} */}
          <h2 className="text-center">
            Become fluent and confident in English with Personal Trainer in 100
            day!
          </h2>
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
          <div className="flex flex-col items-center gap-6 ">
            <div className="text-center font-bold xs:text-lg sdm:text-3xl md:text-4xl">
              Loved by 2000+ Learners
            </div>
            <img
              src="https://careerdekho.ai/media/users-group.avif"
              className="w-fit md:block text-center"
            />
          </div>
          {show && (
            <>
              <div className="flex flex-col gap-4">
                <p>
                  If you're looking to improve your English communication
                  skills, there are plenty of options available, including
                  spoken English classes, English speaking courses, and online
                  English speaking courses.
                </p>
                <p>
                  For those on a tight budget, there are free English speaking
                  courses available online, as well as spoken English classes
                  online free of charge.
                </p>
                <p>
                  If you prefer a more structured approach to learning, you can
                  enroll in a spoken English course, either online or in person.
                </p>
                <p>
                  Many institutions offer basic spoken English courses as well
                  as more advanced ones, such as fluent English speaking courses
                  or courses focused on spoken English conversation.
                </p>
                <p>
                  For those who prefer the convenience of online learning, there
                  are plenty of options for online English speaking classes and
                  the best online English speaking courses, such as those
                  offered on Udemy.
                </p>
                <p>
                  Some courses even offer instruction in multiple languages,
                  such as an English speaking course in Hindi.
                </p>
                <p>
                  Whatever your learning style and budget, there is a spoken
                  English class or course that can help you achieve your goals.
                </p>
              </div>
              <div>
                <div className="flex flex-wrap text-xs gap-2">
                  <span className="p-1">Tags : </span>
                  <span className="p-1 border rounded-full px-2">
                    spoken english classes in {x}
                  </span>
                  <span className="p-1 border rounded-full px-2">
                    english speaking course in {x}
                  </span>
                  <span className="p-1 border rounded-full px-2">
                    online english speaking course in {x}
                  </span>
                  <span className="p-1 border rounded-full px-2">
                    english speaking course online free spoken english classes
                    online
                  </span>
                  <span className="p-1 border rounded-full px-2">
                    spoken english course in {x}
                  </span>
                  <span className="p-1 border rounded-full px-2">
                    free english speaking course in {x}
                  </span>
                  <span className="p-1 border rounded-full px-2">
                    english speaking classes in {x}
                  </span>
                  <span className="p-1 border rounded-full px-2">
                    spoken english conversation in {x}
                  </span>
                  <span className="p-1 border rounded-full px-2">
                    online english speaking classes in {x}
                  </span>
                  <span className="p-1 border rounded-full px-2">
                    {" "}
                    spoken english classes online free fluent english speaking
                    course in {x}
                  </span>
                  <span className="p-1 border rounded-full px-2">
                    speak english conversation in {x}
                  </span>
                  <span className="p-1 border rounded-full px-2">
                    best online english speaking course in {x}
                  </span>
                  <span className="p-1 border rounded-full px-2">
                    spoken english course online best english speaking course
                    online
                  </span>
                  <span className="p-1 border rounded-full px-2">
                    free best english speaking course in {x}
                  </span>
                  <span className="p-1 border rounded-full px-2">
                    udemy english speaking course english speaking course in
                    hindi spoken class in {x}
                  </span>
                  <span className="p-1 border rounded-full px-2">
                    spoken english course online free learning english speaking
                    course in {x}
                  </span>
                  <span className="p-1 border rounded-full px-2">
                    basic spoken english course in {x}
                  </span>
                  <span className="p-1 border rounded-full px-2">
                    spoken english classes near me english speaking course near
                    me
                  </span>
                  <span className="p-1 border rounded-full px-2">
                    english speaking classes near me spoken english course near
                    me
                  </span>
                  <span className="p-1 border rounded-full px-2">
                    best spoken english classes near me spoken classes near me
                    best
                  </span>
                  <span className="p-1 border rounded-full px-2">
                    english speaking classes near me spoken english institution
                    near
                  </span>
                  <span className="p-1 border rounded-full px-2">
                    me near by spoken english classes near spoken english
                    classes near
                  </span>
                  <span className="p-1 border rounded-full px-2">
                    english speaking classes spoken english classes near by me
                  </span>
                </div>
              </div>
            </>
          )}
          <span
            className="text-center cursor-pointer pb-20 sm:pb-0"
            onClick={handleToggle}
          >
            {show ? "Show Less" : "Show More"}
          </span>
        </div>
        <div className="bg-yellow-100 w-[50%] pt-10 px-4 mdx:px-6 hidden sm:block">
          <div className="flex flex-col gap-6 fixed">
            <img src="/sitafal-logo.svg" className="w-[100px]"></img>
            <div className="w-11/12">
              Ready to speak English confidently? Book a FREE CLASS!
            </div>
            <div className="flex flex-col gap-3">
              <input
                className="p-2 rounded-md px-4 w-11/12"
                type="text"
                placeholder="your name"
              />
              <input
                className="p-2 rounded-md px-4 w-11/12"
                type="phone"
                placeholder="your number"
              />
              <input
                className="p-2 rounded-md px-4 w-11/12"
                type="email"
                placeholder="your email"
              />
              <select className="p-2 rounded-md px-4 w-11/12">
                <option>What You Do?</option>
                <option value="working professionals">
                  Working Professionals
                </option>
                <option value="student">Student</option>
                <option value="masters">Masters</option>
                <option value="homemaker">Home Maker</option>
                <option value="other">other</option>
              </select>
              <div className="flex flex-col items-center justify-center gap-2">
                <div className="flex w-fit items-center justify-around rounded-full bg-rose-600 p-2 px-4	text-white  hover:bg-rose-700 ">
                  <a href="/app">Book a Free Class!</a>
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
                <div className="flex flex-col items-center gap-1 text-center text-xs ">
                  <span>✓ Limited Seats per class</span>
                  <span>✓ Free demo lecture</span>
                </div>
              </div>
            </div>
            <div className="text-xs text-center mt-64">
              Sitafal - Learn Englsih in 100 day | Made in ❤️ with English
            </div>
          </div>
        </div>
        <div className="bg-white sm:hidden fixed bottom-0 w-full p-2">
          <div className="flex w-full  items-center rounded-md justify-around shadow-md bg-rose-600 p-4 	text-white  hover:bg-rose-700 ">
            <div className="text-center">
              <div className="text-lg">Book a Free Trial Class </div>
              <div className="text-xs"> Hurry! Limited Seats available</div>
            </div>
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
        </div>
      </div>
    </>
  );
};

export default LandingPage;
