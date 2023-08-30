import "@/styles/components.contacts.css";

const ContactForm = () => {
  return (
    <div className="md:p-2.5 md:my-20">
        <div className="md:mx-auto p-6 py-24 md:p-16 xl:p-24 contact-form-container">
            <div className="contact-form-head">
                <h2 className="mb-2.5 contact-form-title">Contact Us</h2>
                <p className="mb-2.5 contact-form-header">Get in Touch with Us</p>
                <p className="mb-2.5 contact-form-subheader">
                    Any concerns about our Terms of Use, <br/>please reach out to us.
                </p>
            </div>

            <form className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                    <div>
                        <input
                        type="text"
                        className="block w-full border border-gray-300 h-[50px] rounded-md p-2 pl-4 focus:ring focus:ring-opacity-50"
                        placeholder="Name"
                        />
                    </div>
                    <div>
                        <input
                        type="text"
                        className="block w-full border border-gray-300 h-[50px] rounded-md p-2 pl-4 focus:ring focus:ring-opacity-50"
                        placeholder="Phone"
                        />
                    </div>
                </div>
                <div>
                    <input
                        type="email"
                        className="block w-full border border-gray-300 h-[50px] rounded-md p-2 pl-4 focus:ring focus:ring-opacity-50"
                        placeholder="Email address"
                    />
                </div>
                <div>
                    <textarea
                        className="block w-full border border-gray-300 rounded-md p-2 pl-4 focus:ring focus:ring-opacity-50"
                        rows="4"
                        placeholder="Message"
                    />
                </div>
                <div className="text-center md:text-right">
                    <button
                        type="submit"
                        className="submit-btn"
                    >
                        Send Message
                    </button>
                </div>
            </form>
        </div>
    </div>
  )
};

export default ContactForm;