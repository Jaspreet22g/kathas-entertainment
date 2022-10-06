function About() {
  return (
    <div className="container px-5 mx-auto my-20 max-w-7xl" >
      <div className="flex flex-col items-center justify-around gap-12 py-10 xl:px-16 lg:flex-row rounded-3xl" >
        <div className="max-w-3xl min-w-0" >
          <h4 className="mb-2 lg:mb-3 xl:mb-4 xl:text-[32px] lg:text-xl text-[#F03E3E] font-semibold text-base">About me!</h4>
          <h3 className="text-[#212529] font-semibold xl:text-5xl lg:text-[34px] text-xl xl:mb-12 lg:mb-6 mb-4">I'm subham Pradhan</h3>
          <p className="xl:leading-[36px] leading-[22px] lg:leading-[24px] text-[#495057] xl:text-xl lg:text-base text-sm">I am Subham Pradhan, the founder and lead developer of Kathas Entertainment.
            <br></br>
            <br></br>
            Kathas Entertainment was founded to create a <br></br>mark in the Gaming World. We Aim to create fun and enjoyable games that people will love. We are beginning our first mark with the Hyper Casual Industry, a booming sector in the mobile. We have already launched some awesome games and are in the process of launching super awesome games.</p>
        </div>
        <img src={require('../assets/DP.png')} className="xl:w-[380px] w-[70vw] md:w-[250px] rounded-[32px]"></img>
      </div>
    </div>
  );
}

export default About;