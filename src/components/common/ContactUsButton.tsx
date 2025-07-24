'use client'
function ContactUsButton({content}:{content:string}) {
  return (
     <button className=" bg-orange w-40 lg:w-50 text-base lg:text-xl text-white font-semibold px-6 py-2 lg:py-2.5 rounded-full leading-[100%] hover:bg-orange-500 transition">
            {content}
     </button>
  )
}

export default ContactUsButton
