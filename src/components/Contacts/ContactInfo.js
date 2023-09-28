
import '@/styles/components.contacts.css'

const ContactInfo = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center space-x-0 space-y-10 md:space-x-28 lg:space-x-40 md:space-y-0 py-12 md:py-7 contact-info-container ">
        <a
            href="tel:8054533586"
            className="flex justify-center items-center contact-info-link"
        >
            <i className="fa-solid fa-phone text-[#8844DA] text-3xl mr-8"></i>
            <p>+(805) 453-3586</p>
        </a>
        
        <a
            href="mailto:support@shinefy.com"
            className="flex justify-center items-center contact-info-link"
        >
            <i className="fa-regular fa-envelope text-[#8844DA] text-3xl mr-8"></i>
            <p>support@shinefy.com</p>
        </a>
    </div>
  )
}

export default ContactInfo;