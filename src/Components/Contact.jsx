import { IoIosMail, IoIosSend } from "react-icons/io";
import { MdCall, MdLocationOn } from "react-icons/md";
import 'animate.css';

const Contact = () => {
    return (
        <div className='font px-4 md:px-10 gap-5 lg:px-44  pb-16 bg-[#151C25]'>
            <h1 className='text-4xl text-center text-white font-semibold pt-14 pb-12'><span className="text-[#55E5A4]">Get</span> In <span className="text-[#55E5A4]">Touch</span></h1>
            

           
        <div  className='flex flex-col md:flex-row gap-2 md:gap-7'>
             {/* address section */}
            <div data-aos="fade-up"
    data-aos-duration="1500" className="w-full md:w-1/2 rounded-lg md:rounded-none md:rounded-l-xl bg-[url('https://i.ibb.co.com/Cs0D561/Rectangle-12.png')] bg-cover bg-center">
               <div className="px-9 py-9">
               <h1 className='text-3xl font-bold text-[#55E5A4]'>Let's Talk !!</h1>
                
                <h1 className="mt-5 text-gray-200">I'm open to exploring new opportunities that align with my skills and interests. Please feel free to reach out with any queries !</h1>

                <div className="mt-7 md:pl-4 text-gray-200 space-y-3 md:text-lg">
                    <h1 data-aos="fade-down"
    data-aos-duration="3000" className="flex items-center  gap-4"><MdCall /> +8801884932158</h1>
                    <h1 data-aos="fade-down"
    data-aos-duration="2500" className="flex items-center  gap-4"> <IoIosMail className="lg:h-5 lg:w-5"/>emon562002@gmail.com</h1>
                    <h1 data-aos="fade-down"
    data-aos-duration="2000" className="flex items-center  gap-4"><MdLocationOn /> Tangail, Dhaka, Bangladesh</h1>
                </div>
               </div>

            </div>
            {/* from section */}
            <div data-aos="fade-up"
    data-aos-duration="1500" className='w-full md:w-1/2 rounded-lg md:rounded-none md:rounded-r-xl bg-white '>
            <form className="flex  flex-col space-y-9 px-10 py-12 ">
  <input data-aos="fade-down"
    data-aos-duration="2000"
    className=" w-full border-0 border-b-2 border-gray-500 focus:border-black focus:outline-none text-gray-500 placeholder-gray-500 focus:placeholder-transparent transition duration-300"
    type="text"
    placeholder="Your name"
  />
  <input data-aos="fade-up"
    data-aos-duration="2000"
    className="w-full border-0 border-b-2 border-gray-500 focus:border-black focus:outline-none text-gray-500 placeholder-gray-500 focus:placeholder-transparent transition duration-300"
    type="email"
    placeholder="Your email"
  />
  <input data-aos="fade-down"
    data-aos-duration="2500"
    className="w-full  border-0 border-b-2 border-gray-500 focus:border-black focus:outline-none text-gray-500 placeholder-gray-500 focus:placeholder-transparent transition duration-300"
    type="text"
    placeholder="Your message"
  />
  <button data-aos="fade-up"
    data-aos-duration="2500"
    type="submit"
    className="flex  items-center justify-center gap-3 text-lg bg-[#55E5A4] font-semibold text-black py-2 px-4 rounded hover:bg-[#47c28b] transition duration-300"
  >  <IoIosSend />
    Submit
  </button>
</form>


            </div>

        </div>
        </div>
    );
};

export default Contact;