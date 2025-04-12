import React from "react";
import { plane } from "../assets/assets";
import "./Contact.css";
const Contact = () => {
  return (
    <div className="bg-[#d9d5c8]  py-8 h-fit">
      <section className=" mx-auto p-4 pt-12 flex justify-between items-center bg-white w-[90%] h-fit border-0 rounded-3xl">
        <div className=" m-auto text-center w-50%">
          <div className="m-auto w-fit">
            <h1 className="text-5xl text-[#645a36] font-bold">CONTACT US</h1>
            <h3 className="text-black">
              or reach out manually ...
              <a href="mailto:trigun.net@gmail.com" className="text-blue-600">
                trigun.net@gmail.com
              </a>
            </h3>
            <img src={plane} className="w-[55%] floating my-15 m-auto" alt="" />
          </div>
        </div>
        <div className="w-[50%] text-3xl">
          <form>
            <div className="mb-3">
              <label for="uf-imail" className="form-label">
                Email address
              </label>
              <br />
              <input
                type="email"
                className="form-control"
                id="uf-imail"
                aria-describedby="emailHelp"
              />
              <div id="emailHelp" className="text-xl text-violet-500">
                We'll never share your email with anyone else.
              </div>
            </div>
            <div clasNames="mb-3">
              <label for="uf-iname" className="form-label">
                Your name
              </label>
              <br />
              <input type="text" className="form-control" id="uf-iname" />
            </div>
            <div className="mb-3">
              <label for="uf-itextarea" className="form-label">
                Your message
              </label>
              <br />
              <textarea
                class="form-control"
                id="uf-itextarea"
                rows="3"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-fit h-fit bg-violet-500 hover:bg-violet-400 px-6 py-3 rounded-xl"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Contact;
