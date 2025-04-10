import React from "react";
import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <div className="bg-violet-300 pt-8 mt-8">
      <div className="mx-20">
        <h3 className="text-2xl mb-8">Ready to get started?</h3>
        <h1 className="text-5xl mb-12">
          Discover a new era of banking.
          <br />
          Reach out to start your journey today.
        </h1>

        <ContactForm />
      </div>
    </div>
  );
};

export default Contact;
