function Contact() {
  return (
    <div className="container p-5 mx-auto max-w-7xl">
      <div className="bg-[#FFE3E3] rounded-2xl xl:px-16 px-4 py-10 flex flex-col md:flex-row justify-between gap-6 ">
        <div className="flex-2">
          <h2 id="contact" className="text-[#212529] font-bold xl:text-5xl mb-6">Contact Us?</h2>
          <p className="text-[#343A40] xl:text-2xl">Feel free to write down your questions, suggestion, or requests to us.</p>
          <form className="mt-10">
            <div className="flex flex-col gap-6 lg:gap-10 md:flex-row">
              <input type='text' className="w-full p-4 xl:text-2xl rounded-2xl bg-[#FFF5F5]" placeholder="Full name*"></input>
              <input type='text' className="w-full p-4 xl:text-2xl rounded-2xl bg-[#FFF5F5]" placeholder="Email*"></input>
            </div>
            <textarea name="" id="" rows="5" className="w-full p-4 lg:my-10 my-6 xl:text-2xl rounded-2xl bg-[#FFF5F5]" placeholder="Your message*"></textarea>
            <button className="gap-3 xl:text-2xl hover:bg-[#C92A2A] transition-all font-semibold bg-[#F03E3E] rounded-xl text-white flex items-center py-3 px-6">
              <span>
                Send
              </span>
              <svg width="22" height="21" viewBox="0 0 22 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18.463 0.6632L2.06316 8.23243C0.171052 9.11557 0.801756 11.8908 2.82008 11.8908H9.75861V18.8293C9.75861 20.8477 12.5339 21.4788 13.417 19.5863L20.9862 3.18641C21.6169 1.67217 19.9769 0.032102 18.463 0.6632Z" fill="#F8F9FA" />
              </svg>
            </button>
          </form>
        </div>
        <div className="flex items-end justify-end">

          <img src={require("../assets/BalloonConfetti.png")} alt="confetti" className="w-[250px] md:w-[350px]"></img>
        </div>
      </div>
    </div>
  );
}

export default Contact;