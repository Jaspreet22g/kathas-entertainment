
function Home() {
  return (
    <div className="">
      <div>
        <div className="bg-[#F03E3E] py-10">
          <div className="container relative flex flex-col items-center justify-around px-6 py-5 mx-auto text-white md:flex-row max-w-7xl">
            <div className="max-w-xl">
              <h1 className="text-2xl font-bold xl:text-5xl lg:text-[32px]">Kathas Entertainment</h1>
              <h2 className="mt-6 text-base font-semibold xl:mt-12 md:mt-8 lg:mt-9 xl:text-2xl md:text-lg">We create awesome games world
                with our games.</h2>
            </div>
            {/* <div className='relative mt-9 md:mt-0 xl:w-[360px] xl:h-[402px] lg:h-[314px] lg:w-[283px] md:w-[180px] md:h-[199px] w-[206] h-[229px]'>
              <video autoPlay playsInline muted loop preload="true" className='w-full h-full'>
                <source src={require('../assets/logo-video.mp4')} />
                <source src={require('../assets/logo-video.webm')} />
              </video>
              <svg preserveAspectRatio="xMidYMid slice" className="absolute top-0 left-0 w-full h-full logo-svg" viewBox="0 0 361 402">
                <defs>
                  <mask id="mask" x="0" y="0" width="100%" height="100%" >
                    <rect x="0" y="0" width="100%" height="100%" />
                    <path  x="0" y="0" d="M361 198.829C361 172.964 355.509 150.486 344.628 131.498C333.747 112.408 318.493 97.7306 298.969 87.4668C291.342 83.4639 283.309 80.1795 274.767 77.8188C266.53 75.4582 257.988 73.816 248.937 72.8922C248.734 72.8922 248.531 72.8922 248.327 72.8922H165.348C163.721 72.8922 162.094 73.7133 161.179 75.1503L142.773 103.068L110.232 152.437L100.978 166.395C100.47 167.114 99.3513 166.806 99.3513 165.882V96.6016C99.3513 94.7541 98.6394 93.0092 97.3175 91.6749L8.54197 1.55893C5.38958 -1.72549 0 0.532547 0 5.04861V396.92C0 401.436 5.38958 403.694 8.54197 400.512L97.5208 310.396C98.8428 309.062 99.5546 307.317 99.5546 305.47V230.133C99.5546 229.21 100.673 228.902 101.182 229.62L107.486 239.987L144.298 300.44L160.365 326.818C161.281 328.358 162.908 329.179 164.636 329.179H247.412C247.615 329.179 247.819 329.179 248.022 329.179C257.784 328.153 267.038 326.1 275.987 323.123C280.563 321.584 285.037 319.839 289.512 317.786C307.003 309.575 321.443 298.49 332.934 284.326C344.221 270.47 351.645 254.766 355.407 237.318C355.509 236.805 355.102 236.189 354.492 236.189H253.208C251.378 236.189 249.751 237.215 248.836 238.755C243.955 246.863 236.633 250.969 226.871 250.969C224.735 250.969 222.6 250.764 220.668 250.353C215.685 249.429 211.515 247.274 208.058 243.99C203.99 239.987 201.245 233.11 200.024 223.257L199.923 222.538C199.618 220.28 201.346 218.33 203.584 218.33H357.949C358.356 218.33 358.763 218.022 358.865 217.612C360.288 211.145 361 204.884 361 198.829ZM207.143 177.891C203.685 177.891 201.041 174.504 202.058 171.117C205.109 160.442 211.414 153.873 221.074 151.308C224.328 150.281 227.989 149.871 231.955 149.871C239.989 149.871 246.7 152.129 252.09 156.747C256.259 160.34 258.801 165.369 259.717 171.835C260.225 175.017 257.683 177.993 254.429 177.993H207.143V177.891Z" /> 
                  </mask>
                </defs>
                <rect x="0" y="0" width="100%" height="100%"/>
              </svg>
            </div> */}
            <div className='relative mt-9 md:mt-0 xl:w-[360px] xl:h-[402px] lg:h-[314px] lg:w-[283px] md:w-[180px] md:h-[199px] w-[206] h-[229px]'>
              <video autoPlay playsInline muted loop preload="true" className='w-full h-full'>
                <source src={require('../assets/logo-video.mp4')} />
                <source src={require('../assets/logo-video.webm')} />
              </video>
              <img src={require('../assets/Kathas-logo.png')} alt="" className='absolute top-0 left-0 w-full h-full' />
            </div>
            <img src={require('../assets/Confetti.png')} alt="" className='absolute bottom-0 left-0 transform -translate-x-20 rotate-90 w-[200px] h-[175px]' />
            <img src={require('../assets/Confetti.png')} alt="" className='absolute bottom-0 right-0 transform translate-x-8 w-[200px] h-[175px]' />

          </div>
        </div>
      </div>

      <div className="flex flex-col-reverse gap-6 px-6 mx-auto mt-20 mb-10 lg:items-center xl:gap-16 md:gap-12 md:flex-row max-w-7xl">
        <img src={require('../assets/doll.png')} className="flex-1 xl:w-[588px] lg:w-[460px] md:w-[340px] w-full rounded-3xl" alt='Rag doll'></img>
        <div className="flex-1">
          <h4 className="mb-2 lg:mb-3 xl:mb-4 xl:text-[32px] lg:text-xl text-[#F03E3E] font-semibold text-base">Our Philosophy</h4>
          <h3 className="text-[#212529] font-semibold xl:text-5xl lg:text-[34px] text-xl xl:mb-12 lg:mb-6 mb-4">Hardwork, creativity,
            and awesomeness</h3>
          <p className="text-[#495057] xl:text-xl lg:text-base text-sm">We used this secret recipes to create games
            which are awesome.</p>
        </div>
      </div>
    </div>
  );
}

export default Home;