import React from "react";
import "./about.css";

const teamMembers = [
  {
    name: "Elena Ramirez",
    role: "Chief Executive Officer (CEO)",
    image:
      "https://static.wixstatic.com/media/c837a6_abb6c69f34ab4975983c4fef1e6576ea~mv2.jpg",
  },
  {
    name: "John Doe",
    role: "Chief Technology Officer (CTO)",
    image:
      "https://static.wixstatic.com/media/c837a6_abb6c69f34ab4975983c4fef1e6576ea~mv2.jpg",
  },
  {
    name: "Jane Smith",
    role: "Head of Marketing",
    image:
      "https://static.wixstatic.com/media/c837a6_abb6c69f34ab4975983c4fef1e6576ea~mv2.jpg",
  },
  {
    name: "Michael Brown",
    role: "Lead Developer",
    image:
      "https://static.wixstatic.com/media/c837a6_abb6c69f34ab4975983c4fef1e6576ea~mv2.jpg",
  },
  {
    name: "Michael Brown",
    role: "Lead Developer",
    image:
      "https://static.wixstatic.com/media/c837a6_abb6c69f34ab4975983c4fef1e6576ea~mv2.jpg",
  },
  {
    name: "Michael Brown",
    role: "Lead Developer",
    image:
      "https://static.wixstatic.com/media/c837a6_abb6c69f34ab4975983c4fef1e6576ea~mv2.jpg",
  },
  {
    name: "Michael Brown",
    role: "Lead Developer",
    image:
      "https://static.wixstatic.com/media/c837a6_abb6c69f34ab4975983c4fef1e6576ea~mv2.jpg",
  },
];

const About = () => {
  return (
    <>
      {/* About Us Section */}
      <section className="about w-full min-h-[100vh] spacer relative">
        {/* Top SVG Divider */}
        <div className="custom-shape-divider-top-1743265266">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M1200 0L0 0 892.25 114.72 1200 0z"
              className="shape-fill"
            ></path>
          </svg>
        </div>

        {/* Top Right Text */}
        <div className="main-text-top-left mt-40 absolute left-9 text-left z-5">
          <div className="text-6xl">About Us</div>
          <div className="text-3xl">
            This is a space to share more about the business:
            <br />
            who's behind it, what it does, and what this site has
            <br />
            to offer. It’s an opportunity to tell the story behind <br />
            the business or describe a special service or
            <br />
            product it offers.
          </div>
        </div>

        {/* Bottom Right Text */}
        <div className="main-text-bottom-right absolute bottom-40 right-9 text-right z-5">
          <div className="text-6xl">OUR MISSION</div>
          <div className="text-2xl">
            You can use this section to share the company's history or highlight
            a<br />
            particular feature that sets it apart from competitors. Let the
            writing <br />
            speak for itself. Keep a consistent tone and voice throughout the
            <br />
            website to stay true to the brand image and give visitors a taste of
            <br />
            the company’s values and personality.
          </div>
        </div>

        {/* Bottom SVG Divider */}
        <div className="custom-shape-divider-bottom-1743265412">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M1200 0L0 0 892.25 114.72 1200 0z"
              className="shape-fill"
            ></path>
          </svg>
        </div>
      </section>

      {/* Our Team Section */}
      <section className="our-team min-h-auto spacer relative bg-gray-100 py-40">
        <div className="text-center text-7xl">OUR TEAM</div>
        <div className="text-4xl text-center mt-3.5 mb-9">
          {" "}
          The Minds Behind TRIGUN
        </div>

        {/* Team Members */}
        <div className="team-flex flex flex-wrap w-full justify-evenly gap-50 mt-10">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="member w-60 h-96 bg-black flex flex-col items-center justify-center text-white rounded-lg shadow-lg"
            >
              <img
                className="w-full h-3/4 object-cover rounded-t-lg"
                src={member.image}
                alt={member.name}
              />
              <div className="p-3 text-center">
                <p className="text-2xl font-bold">{member.name}</p>
                <p className="text-lg">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default About;
