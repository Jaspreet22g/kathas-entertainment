
function Home() {
  return (
    <div className="overflow-x-hidden">
      <div>
        <div className="px-5">
          <div className="container bg-[#F03E3E] rounded-t-3xl relative flex flex-col items-center justify-around px-6 py-5 pt-8 mx-auto text-white md:flex-row max-w-7xl">
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
            <img src={require('../assets/Confetti.png')} alt="" className='absolute bottom-0 left-0 transform -translate-x-10 translate-y-8 rotate-90 xl:w-[200px] xl:h-[175px] w-[140px] h-[122px]' />
            <img src={require('../assets/Confetti.png')} alt="" className='absolute bottom-0 right-0 transform translate-y-8 translate-x-8 xl:w-[200px] xl:h-[175px] w-[140px] h-[122px]' />

          </div>
          <svg className='container w-full mx-auto max-w-7xl' viewBox="0 0 1240 166" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 8.4C0 13.4 3.2 17.9 7.9 19.6C15.9 22.6 31.8 27.8 47.3 50.4C63.5 73 79.2 111.8 95.5 134.4C111.2 157 127.4 162.2 142.9 140C158.9 117.6 174.8 67.2 191.1 53.2C206.6 39.4 222.1 61.4 238.5 67.2C254.3 73 270.4 61.4 285.9 50.4C302.1 39.4 317.8 27.8 334.1 22.4C349.8 16.8 366 16.8 381.5 36.4C397.4 56.2 413.4 95 428.9 95.2C445.2 95 460.8 56.2 477.1 58.8C492.9 61.4 509 106.6 524.5 126C540.6 145.4 556.4 140.2 572.7 123.2C588.3 106.6 604.6 78.2 620.1 56C636 33.6 652 16.8 667.5 14C683.7 11 699.4 22.6 715.7 47.6C731.4 73 747.6 111.8 763.1 120.4C779.1 128.6 795 106.6 811.3 84C826.8 61.4 842.3 39.4 858.7 44.8C874.5 50.4 890.6 84 906.1 86.8C922.3 89.8 938 61.4 954.3 58.8C970 56.2 986.2 78.2 1001.7 84C1017.6 89.8 1033.6 78.2 1049.1 64.4C1065.4 50.4 1081 33.6 1097.3 42C1113.1 50.4 1129.2 84 1144.7 106.4C1160.8 128.6 1176.6 140.2 1192.9 148.4C1208.5 157 1224.8 162.2 1232.5 165.2C1236.3 166.6 1240.3 163.8 1240.3 159.7V0H1232.4C1224.4 0 1208.5 0 1193 0C1176.8 0 1161.1 0 1144.8 0C1129.1 0 1112.9 0 1097.4 0C1081.4 0 1065.5 0 1049.2 0C1033.7 0 1018.2 0 1001.8 0C986 0 969.9 0 954.4 0C938.2 0 922.5 0 906.2 0C890.5 0 874.3 0 858.8 0C842.9 0 826.9 0 811.4 0C795.1 0 779.5 0 763.2 0C747.4 0 731.3 0 715.8 0C699.7 0 683.9 0 667.6 0C652 0 635.7 0 620.2 0C604.3 0 588.3 0 572.8 0C556.6 0 540.9 0 524.6 0C508.9 0 492.7 0 477.2 0C461.2 0 445.3 0 429 0C413.5 0 398 0 381.6 0C365.8 0 349.7 0 334.2 0C318 0 302.3 0 286 0C270.3 0 254.1 0 238.6 0C222.7 0 206.7 0 191.2 0C174.9 0 159.3 0 143 0C127.2 0 111.1 0 95.6 0C79.5 0 63.7 0 47.4 0C31.8 0 15.5 0 7.8 0H0V8.4Z" fill="#F03E3E" />
            </svg>

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