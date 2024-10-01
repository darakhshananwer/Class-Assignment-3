import Image from "next/image";
import Profile from'../../public/picture/WhatsApp Image 2024-03-26 at 06.54.26_109570b5.jpg'
import Header from "../../component/header";
import Footer from "../../component/footer";

export default function Home() {
  return (
    <div>
 <Header/>
 
 <div>
    <section className="text-gray-600 body-font">
<div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
<div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
<h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
Hay' i m 
<br className="hidden lg:inline-block" />
Darakhshan Anwer
</h1>
<div className=''>

</div>
<p className="mb-8 leading-relaxed">
To secure an employment oppertunity with a progressive orgnisation,Where i can utilize my professional skills and value in the growth of the organisation.
</p>
<div className="flex justify-center">
<button className="inline-flex text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg">
  Contact
</button>

</div>
</div>
   <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
 <Image
  className="object-cover object-center rounded mx-auto w-[15rem]"
  alt="hero"
  width={500}
  height={500}
 src={Profile}
 />

  
   </div>
   </div>
   
   </section>
   </div>
   
   <div className='bg-blue-100'><footer className="text-gray-600 body-font">
    <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
      <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
       
        <span className="ml-3 text-xl">Darakhshan Anwer</span>
      </a>
      <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
        © 2024 Darakhshan Anwer —
     
      </p>
      <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
        <a 
        target="_blank"
        href={'https://www.linkedin.com/public-profile/settings?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_self_edit_contact-info%3B%2B31Q8PHOSQ%2BbWnTBP66A1Q%3D%3D'} 
        className="text-gray-500">
       
        </a>
   
      </span>
    </div>
  </footer>
  </div>
  </div>
 

 
  );
}
