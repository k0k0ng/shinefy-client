"use client";

import { useState } from "react";

import "@/styles/components.contacts.css";

const ContactForm = () => {
    const [contactSuccess, setContactSuccess] = useState(false);
    const [nameValue, setNameValue] = useState("");
    const [phoneValue, setPhoneValue] = useState("");
    const [emailValue, setEmailValue] = useState("");
    const [messageValue, setMessageValue] = useState("");
    

    const handleSubmitForm = () => {
        setContactSuccess(true);
        setNameValue("");
        setPhoneValue("");
        setEmailValue("");
        setMessageValue("");
    }

  return (
    <section className="flex flex-col items-center md:p-2.5 md:my-20">
        <div className="md:mx-auto p-6 py-24 md:p-16 xl:p-24 z-20 contact-form-container">
            <div className="contact-form-head">
                <h2 className="mb-2.5 contact-form-title">Contact Us</h2>
                <p className="mb-2.5 contact-form-header">Get in Touch with Us</p>
                <p className="mb-2.5 contact-form-subheader">
                    Any concerns about our Terms of Use, <br/>please reach out to us.
                </p>
            </div>

            <div className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                    <div>
                        <input
                        type="text"
                        className="block w-full border border-gray-300 h-[50px] rounded-md p-2 pl-4 focus:ring focus:ring-opacity-50"
                        placeholder="Name"
                        value={nameValue}
                        onChange={(e) => setNameValue(e.target.value)}
                        />
                    </div>
                    <div>
                        <input
                        type="text"
                        className="block w-full border border-gray-300 h-[50px] rounded-md p-2 pl-4 focus:ring focus:ring-opacity-50"
                        placeholder="Phone"
                        value={phoneValue}
                        onChange={(e) => setPhoneValue(e.target.value)}
                        />
                    </div>
                </div>
                <div>
                    <input
                        type="email"
                        className="block w-full border border-gray-300 h-[50px] rounded-md p-2 pl-4 focus:ring focus:ring-opacity-50"
                        placeholder="Email address"
                        value={emailValue}
                        onChange={(e) => setEmailValue(e.target.value)}
                    />
                </div>
                <div>
                    <textarea
                        className="block w-full border border-gray-300 rounded-md p-2 pl-4 focus:ring focus:ring-opacity-50"
                        rows="4"
                        placeholder="Message"
                        value={messageValue}
                        onChange={(e) => setMessageValue(e.target.value)}
                    />
                </div>
                <div className="text-center md:text-right">
                    <button
                        // type="submit"
                        className="submit-btn"
                        onClick={handleSubmitForm}
                    >
                        Send Message
                    </button>
                </div>
            </div>
        </div>

        <div className={`${contactSuccess ? "opacity-100 z-30" : "opacity-0"} absolute h-[620px] md:h-[500px] xl:h-[550px] w-[90%] md:w-[550px] flex flex-col items-center justify-center mt-16 px-4 rounded contact-form-success-container`}>
            <p className="text-center mb-5 global-header-text-1">Thank you!</p>
            <p className="max-w-[340px] text-center mb-4 global-header-text-2">Your inquiry is on its way to us.</p>
            <p className="max-w-[460px] text-center mb-10 global-header-text-3">In our effort to provide you quality products and service. Our support team will get back to you within 24-48 hours.</p>

            <button className="contact-form-success-close-btn" onClick={() => setContactSuccess(false)}>
                <img
                    src="/images/global/close-icon.png"
                    alt="close icon"
                />
            </button>
        </div>
    </section>
  )
};

export default ContactForm;