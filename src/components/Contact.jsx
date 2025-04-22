import React from "react";
import { plane } from "../assets/assets";
import "./Contact.css";
const Contact = () => {
  return (
    // <div className="bg-[#d9d5c8]  py-8 h-fit">
    //   <section className="contact-section mx-auto p-4 pt-12 flex justify-between items-center bg-white w-[90%] h-fit border-0 rounded-3xl">
    //     <div className=" m-auto text-center w-50%">
    //       <div className="m-auto w-fit">
    //         <h1 className="text-5xl text-[#645a36] font-bold">CONTACT US</h1>
    //         <h3 className="text-black">
    //           or reach out manually ...
    //           <a href="mailto:trigun.net@gmail.com" className="text-blue-600">
    //             trigun.net@gmail.com
    //           </a>
    //         </h3>
    //         <img src={plane} className="w-[55%] floating my-15 m-auto" alt="" />
    //       </div>
    //     </div>
    //     <div className="form-section w-[50%] text-3xl">
    //       <form>
    //         <div className="form-field mb-3">
    //           <label for="uf-imail" className="form-label">
    //             Email address
    //           </label>
    //           <br />
    //           <input
    //             type="email"
    //             className="form-control"
    //             id="uf-imail"
    //             aria-describedby="emailHelp"
    //           />
    //           <div id="emailHelp" className="text-xl text-violet-500">
    //             We'll never share your email with anyone else.
    //           </div>
    //         </div>
    //         <div clasNames="form-field mb-3">
    //           <label for="uf-iname" className="form-label">
    //             Your name
    //           </label>
    //           <br />
    //           <input type="text" className="form-control" id="uf-iname" />
    //         </div>
    //         <div className="form-field mb-3">
    //           <label for="uf-itextarea" className="form-label">
    //             Your message
    //           </label>
    //           <br />
    //           <textarea
    //             class="form-control"
    //             id="uf-itextarea"
    //             rows="3"
    //           ></textarea>
    //         </div>
    //         <button
    //           type="submit"
    //           className="w-fit h-fit bg-violet-500 hover:bg-violet-400 px-6 py-3 rounded-xl cursor-pointer"
    //         >
    //           Send Message
    //         </button>
    //       </form>
    //     </div>
    //   </section>
    // </div>
    <section class="min-h-screen bg-gradient-to-r from-lime-100 to-lime-300">
      <div class="container px-6 py-10 mx-auto">
        <div class="lg:flex lg:items-center lg:-mx-10">
          <div class="lg:w-1/2 lg:mx-10">
            <h1 class="text-2xl font-semibold text-gray-800 capitalize dark:text-black lg:text-3xl">
              Let’s talk
            </h1>

            <p class="mt-4 text-gray-800 dark:text-gray-800">
              Ask us everything and we would love to hear from you
            </p>

            <form class="mt-12">
              <div class="-mx-2 md:items-center md:flex">
                <div class="flex-1 px-2">
                  <label class="block mb-2 text-sm text-gray-600 dark:text-gray-600">
                    Full Name
                  </label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    class="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-600 rounded-md dark:placeholder-gray-600 dark:bg-lime-200 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                  />
                </div>

                <div class="flex-1 px-2 mt-4 md:mt-0">
                  <label class="block mb-2 text-sm text-gray-600 dark:text-gray-600">
                    Email address
                  </label>
                  <input
                    type="email"
                    placeholder="johndoe@example.com"
                    class="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-600 rounded-md dark:placeholder-gray-600 dark:bg-lime-200 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                  />
                </div>
              </div>

              <div class="w-full mt-4">
                <label class="block mb-2 text-sm text-gray-600 dark:text-gray-600">
                  Message
                </label>
                <textarea
                  class="block w-full h-32 px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-600 rounded-md md:h-56 dark:placeholder-gray-600 dark:bg-lime-200 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                  placeholder="Message"
                ></textarea>
              </div>

              <button class="w-full px-6 py-3 mt-4 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-md hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                get in touch
              </button>
            </form>
          </div>

          <div class="mt-12 lg:flex lg:mt-0 lg:flex-col lg:items-center lg:w-1/2 lg:mx-10">
            <div className="contactimg hidden object-cover mx-auto rounded-full lg:block shrink-0 w-96 h-96"></div>

            <div class="mt-6 space-y-8 md:mt-8">
              <p class="flex items-start -mx-2">
                <svg
                  xmlns="http://www.w3.org/6000/svg"
                  class="w-6 h-6 mx-2 text-blue-500 dark:text-blue-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>

                <span class="mx-2 text-gray-700 truncate w-72 dark:text-gray-600">
                  IIITDMK ECE section street 2 Campus
                </span>
              </p>

              <p class="flex items-start -mx-2">
                <svg
                  xmlns="http://www.w3.org/6000/svg"
                  class="w-6 h-6 mx-2 text-blue-500 dark:text-blue-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>

                <span class="mx-2 text-gray-700 truncate w-72 dark:text-gray-600">
                  (257) 563-7401
                </span>
              </p>

              <p class="flex items-start -mx-2">
                <svg
                  xmlns="http://www.w3.org/6000/svg"
                  class="w-6 h-6 mx-2 text-blue-500 dark:text-blue-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>

                <span class="mx-2 text-gray-700 truncate w-72 dark:text-gray-600">
                  trigunrobotics@example.com
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
