function About() {
  return (
    <div className="container mx-auto max-w-7xl px-5 my-20" >
      <div className="flex justify-around rounded-3xl py-10 items-center" style={{ boxShadow: '0px 4px 24px rgba(0, 0, 0, 0.04)' }}>
        <div className="max-w-3xl " >
          <h4 className="mb-4 text-3xl text-[#F03E3E] font-semibold">About me!</h4>
          <h3 className="text-[#212529] font-semibold text-5xl mb-12">I'm subham Pradhan</h3>
          <p className="text-[#495057] text-2xl">Game designers require a balance of creative and technical
            skills to bring a game concept to life.
            <br></br>
            <br></br>
            They usually don't need to be super technical, but this role
            does require a good understanding
            of some of the basic
            aspects of technical game design and game programming.</p>
        </div>
        <div className="h-80 w-80 rounded-full bg-black"></div>
      </div>
    </div>
  );
}

export default About;