
function Contact() {
  return (
    <div className="container mx-auto max-w-7xl p-5">
      <div className="bg-[#DEE2E6] rounded-3xl px-16 py-10 flex justify-between gap-6">
        <div>
          <h2 className="text-[#212529] font-bold text-5xl mb-6">Contact Us?</h2>
          <p className="text-[#495057] text-2xl">Feel free to write down your questions, suggestion, or requests to us.</p>
          <form className="mt-10">
            <div className="flex gap-10">
              <input type='text' className="w-full p-6  rounded-3xl text-2xl" placeholder="Full name*"></input>
              <input type='text' className="w-full p-6  rounded-3xl text-2xl" placeholder="Email*"></input>
            </div>
            <textarea name="" id="" rows="5" className="w-full p-6 my-10 rounded-3xl text-2xl" placeholder="Your message*"></textarea>
            <button className="gap-3 text-2xl font-semibold bg-[#F03E3E] rounded-xl text-white flex items-center py-3 px-6">
              <span>
                Send
              </span>
              <svg width="22" height="21" viewBox="0 0 22 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18.463 0.6632L2.06316 8.23243C0.171052 9.11557 0.801756 11.8908 2.82008 11.8908H9.75861V18.8293C9.75861 20.8477 12.5339 21.4788 13.417 19.5863L20.9862 3.18641C21.6169 1.67217 19.9769 0.032102 18.463 0.6632Z" fill="#F8F9FA" />
              </svg>
            </button>
          </form>
        </div>
        <div className="bg-black h-[600px] w-[350px]"></div>
      </div>
    </div>
  );
}

export default Contact;