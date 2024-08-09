import { MdPhone, MdMailOutline } from "react-icons/md";
import { Breadcrumb } from "react-bootstrap";
import { HiHome } from "react-icons/hi";

const ContactPage = () => {
  return (
      <div>
        <Breadcrumb aria-label="Default breadcrumb example" className="mt-20 ml-32">
          <Breadcrumb.Item href="/" icon={HiHome}>
            Home
          </Breadcrumb.Item>
          <Breadcrumb.Item href="">Contact Page</Breadcrumb.Item>
        </Breadcrumb>
      <div className="min-h-screen flex justify-center items-center mb-36 px-36">
        <div className="flex flex-wrap justify-center md:justify-between max-w-9xl">
          {/* Call To Us and Write To Us Section */}
          <div className="bg-white shadow-md rounded-tl-sm p-10 w-full md:w-[340px] h-auto mb-8 md:mb-0 md:mr-8">
            {/* Call To Us */}
            <div className="mb-10">
              <div className="flex items-center mb-6">
                <div className="bg-red-600 text-white rounded-full w-10 h-10 flex items-center justify-center">
                  <MdPhone className="h-6 w-6" />
                </div>
                <h2 className="ml-4 text-[16px] font-medium leading-[24px] text-left font-poppins">
                  Call To Us
                </h2>
              </div>
              <p className="text-gray-600 text-[14px] leading-[21px] mb-4 font-poppins">
                We are available 24/7, 7 days a week.
              </p>
              <p className="text-black text-[14px] leading-[21px] font-poppins">
                Phone: +8801611112222
              </p>
            </div>

            {/* Write To Us */}
            <div>
              <div className="flex items-center mb-6">
                <div className="bg-red-600 text-white rounded-full w-10 h-10 flex items-center justify-center">
                  <MdMailOutline className="h-6 w-6" />
                </div>
                <h2 className="ml-4 text-[16px] font-medium leading-[24px] text-left font-poppins">
                  Write To Us
                </h2>
              </div>
              <p className="text-gray-600 text-[14px] leading-[21px] mb-4 font-poppins">
                Fill out our form and we will contact you within 24 hours.
              </p>
              <p className="text-black text-[14px] leading-[21px] font-poppins">
                Emails: customer@exclusive.com
              </p>
              <p className="text-black text-[14px] leading-[21px] mt-1 font-poppins">
                support@exclusive.com
              </p>
            </div>
          </div>

          {/* Contact Form  */}
          <div className="bg-white shadow-md rounded-tl-sm p-10 w-full md:w-[800px] h-auto">
            <form className="grid gap-4">
              <div className="flex flex-wrap gap-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="border rounded px-4 py-2 w-full md:w-[235px] h-[50px] text-[16px] font-regular leading-[24px] text-left font-poppins opacity-50"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="border rounded px-4 py-2 w-full md:w-[235px] h-[50px] text-[16px] font-regular leading-[24px] text-left font-poppins opacity-50"
                />
                <input
                  type="text"
                  placeholder="Your Phone"
                  className="border rounded px-4 py-2 w-full md:w-[235px] h-[50px] text-[16px] font-regular leading-[24px] text-left font-poppins opacity-50"
                />
              </div>
              <textarea
                placeholder="Your Message"
                className="border rounded px-4 py-2 w-full h-[207px] text-[16px] font-regular leading-[24px] text-left font-poppins opacity-50"
                rows="4"
              ></textarea>
              <div className="flex justify-end">
                <button className="bg-red-600 text-white px-4 py-2 rounded w-[215px] h-[56px] text-[16px] font-medium leading-[24px] font-poppins">
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
