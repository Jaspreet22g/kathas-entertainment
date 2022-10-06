
import GameCard from './GameCard';
import Slider from "react-slick";
function Games() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    draggable: true,
    autoplay: true,
    centerMode: true,
    arrows: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <div className="container p-5 mx-auto max-w-7xl">
      <h4 className="mb-2 lg:mb-3 xl:mb-4 xl:text-[32px] lg:text-xl text-[#F03E3E] font-semibold text-base">Our Games</h4>
      <h3 className="text-[#212529] font-semibold xl:text-5xl lg:text-[34px] text-xl xl:mb-12 mb-8">Available on Google PlayStore</h3>
      <Slider {...settings} className='w-full'>
        <div>
          <div class="content rounded-3xl overflow-hidden">
            <div class="content-overlay"></div>
            <img class="content-image" src={require('../assets/AnimalStack.png')} alt="Animal Stack" />
            <div class="content-details fadeIn-top flex flex-col justify-between p-8">
              <div className='w-full'>
                <h2 className='text-white text-2xl lg:text-[32px] xl:text-5xl font-bold mb-3'>Animal Stack</h2>
                <p className='text-[#F8F9FA] text-sm'>Stack your cubes to pass obstacles, but watch out for spikes.</p>
              </div>
              <div className='flex w-full'>
                <a href="https://play.google.com/store/apps/details?id=com.KathasEntertainment.AnimalStack" target="_blank" className='bg-white inline-block p-2 rounded-[10px]'>
                  <svg width="20" height="22" viewBox="0 0 20 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12.8875 10.0958L3.69162 0.874919L15.3916 7.59159L12.8875 10.0958ZM1.29162 0.333252C0.749951 0.616585 0.387451 1.13325 0.387451 1.80409V20.1916C0.387451 20.8624 0.749951 21.3791 1.29162 21.6624L11.9833 10.9958L1.29162 0.333252ZM19.0083 9.73325L16.5541 8.31242L13.8166 10.9999L16.5541 13.6874L19.0583 12.2666C19.8083 11.6708 19.8083 10.3291 19.0083 9.73325ZM3.69162 21.1249L15.3916 14.4083L12.8875 11.9041L3.69162 21.1249Z" fill="#F03E3E" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div class="content rounded-3xl overflow-hidden">
            <div class="content-overlay"></div>
            <img class="content-image" src={require('../assets/CubeShifter.png')} alt="Cube Shifter" />
            <div class="content-details fadeIn-top flex flex-col justify-between p-8">
              <div className='w-full'>
                <h2 className='text-white text-2xl lg:text-[32px] xl:text-5xl font-bold mb-3'>Cube Shifter</h2>
                <p className='text-[#F8F9FA] text-sm'>Shift The Cube to go through Obstacles!</p>
              </div>
              <div className='flex w-full'>
                <a href="https://play.google.com/store/apps/details?id=com.KathasEntertainment.CubeShifter" target="_blank" className='bg-white inline-block p-2 rounded-[10px]'>
                  <svg width="20" height="22" viewBox="0 0 20 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12.8875 10.0958L3.69162 0.874919L15.3916 7.59159L12.8875 10.0958ZM1.29162 0.333252C0.749951 0.616585 0.387451 1.13325 0.387451 1.80409V20.1916C0.387451 20.8624 0.749951 21.3791 1.29162 21.6624L11.9833 10.9958L1.29162 0.333252ZM19.0083 9.73325L16.5541 8.31242L13.8166 10.9999L16.5541 13.6874L19.0583 12.2666C19.8083 11.6708 19.8083 10.3291 19.0083 9.73325ZM3.69162 21.1249L15.3916 14.4083L12.8875 11.9041L3.69162 21.1249Z" fill="#F03E3E" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div class="content rounded-3xl overflow-hidden">
            <div class="content-overlay"></div>
            <img class="content-image" src={require('../assets/CubeShooterRun3D.png')} alt="Cube Shooter Run 3D" />
            <div class="content-details fadeIn-top flex flex-col justify-between p-8">
              <div className='w-full'>
                <h2 className='text-white text-2xl lg:text-[32px] xl:text-5xl font-bold mb-3'>Cube Shooter Run 3D</h2>
                <p className='text-[#F8F9FA] text-sm'>Control you character, avoid obstacles, shoot and destroy cubes to reach the Goal!!!</p>
              </div>
              <div className='flex w-full'>
                <a href="https://play.google.com/store/apps/details?id=com.KathasEntertainment.CubeShooterRun3D" target="_blank" className='bg-white inline-block p-2 rounded-[10px]'>
                  <svg width="20" height="22" viewBox="0 0 20 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12.8875 10.0958L3.69162 0.874919L15.3916 7.59159L12.8875 10.0958ZM1.29162 0.333252C0.749951 0.616585 0.387451 1.13325 0.387451 1.80409V20.1916C0.387451 20.8624 0.749951 21.3791 1.29162 21.6624L11.9833 10.9958L1.29162 0.333252ZM19.0083 9.73325L16.5541 8.31242L13.8166 10.9999L16.5541 13.6874L19.0583 12.2666C19.8083 11.6708 19.8083 10.3291 19.0083 9.73325ZM3.69162 21.1249L15.3916 14.4083L12.8875 11.9041L3.69162 21.1249Z" fill="#F03E3E" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div class="content rounded-3xl overflow-hidden">
            <div class="content-overlay"></div>
            <img class="content-image" src={require('../assets/MagicalWand3D.png')} alt="Magical Wand 3D" />
            <div class="content-details fadeIn-top flex flex-col justify-between p-8">
              <div className='w-full'>
                <h2 className='text-white text-2xl lg:text-[32px] xl:text-5xl font-bold mb-3'>Magical Wand 3D
                </h2>
                <p className='text-[#F8F9FA] text-sm'>Convert the terrifying enemies into cute Cretaures.</p>
              </div>
              <div className='flex w-full'>
                <a href="https://play.google.com/store/apps/details?id=com.KathasEntertainment.MagicalWand3D" target="_blank" className='bg-white inline-block p-2 rounded-[10px]'>
                  <svg width="20" height="22" viewBox="0 0 20 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12.8875 10.0958L3.69162 0.874919L15.3916 7.59159L12.8875 10.0958ZM1.29162 0.333252C0.749951 0.616585 0.387451 1.13325 0.387451 1.80409V20.1916C0.387451 20.8624 0.749951 21.3791 1.29162 21.6624L11.9833 10.9958L1.29162 0.333252ZM19.0083 9.73325L16.5541 8.31242L13.8166 10.9999L16.5541 13.6874L19.0583 12.2666C19.8083 11.6708 19.8083 10.3291 19.0083 9.73325ZM3.69162 21.1249L15.3916 14.4083L12.8875 11.9041L3.69162 21.1249Z" fill="#F03E3E" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div class="content rounded-3xl overflow-hidden">
            <div class="content-overlay"></div>
            <img class="content-image" src={require('../assets/ReachTheTop.png')} alt="Reach The Top" />
            <div class="content-details fadeIn-top flex flex-col justify-between p-8">
              <div className='w-full'>
                <h2 className='text-white text-2xl lg:text-[32px] xl:text-5xl font-bold mb-3'>Reach The Top
                </h2>
                <p className='text-[#F8F9FA] text-sm'>Safety starts with understanding how developers collect and share your data. Data privacy and security practices may vary based on your use, region, and age. The developer provided this information and may update it over time.</p>
              </div>
              <div className='flex w-full'>
                <a href="https://play.google.com/store/apps/details?id=com.KathasEntertainMent.ReachTheTop" target="_blank" className='bg-white inline-block p-2 rounded-[10px]'>
                  <svg width="20" height="22" viewBox="0 0 20 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12.8875 10.0958L3.69162 0.874919L15.3916 7.59159L12.8875 10.0958ZM1.29162 0.333252C0.749951 0.616585 0.387451 1.13325 0.387451 1.80409V20.1916C0.387451 20.8624 0.749951 21.3791 1.29162 21.6624L11.9833 10.9958L1.29162 0.333252ZM19.0083 9.73325L16.5541 8.31242L13.8166 10.9999L16.5541 13.6874L19.0583 12.2666C19.8083 11.6708 19.8083 10.3291 19.0083 9.73325ZM3.69162 21.1249L15.3916 14.4083L12.8875 11.9041L3.69162 21.1249Z" fill="#F03E3E" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div class="content rounded-3xl overflow-hidden">
            <div class="content-overlay"></div>
            <img class="content-image" src={require('../assets/SnowBallFight3D.png')} alt="Snow Ball Fight 3D" />
            <div class="content-details fadeIn-top flex flex-col justify-between p-8">
              <div className='w-full'>
                <h2 className='text-white text-2xl lg:text-[32px] xl:text-5xl font-bold mb-3'>Snow Ball Fight 3D

                </h2>
                <p className='text-[#F8F9FA] text-sm'>Aim and shoot at others with snow ball</p>
              </div>
              <div className='flex w-full'>
                <a href="https://play.google.com/store/apps/details?id=com.KathasEntertainment.SnowBallFight3D" target="_blank" className='bg-white inline-block p-2 rounded-[10px]'>
                  <svg width="20" height="22" viewBox="0 0 20 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12.8875 10.0958L3.69162 0.874919L15.3916 7.59159L12.8875 10.0958ZM1.29162 0.333252C0.749951 0.616585 0.387451 1.13325 0.387451 1.80409V20.1916C0.387451 20.8624 0.749951 21.3791 1.29162 21.6624L11.9833 10.9958L1.29162 0.333252ZM19.0083 9.73325L16.5541 8.31242L13.8166 10.9999L16.5541 13.6874L19.0583 12.2666C19.8083 11.6708 19.8083 10.3291 19.0083 9.73325ZM3.69162 21.1249L15.3916 14.4083L12.8875 11.9041L3.69162 21.1249Z" fill="#F03E3E" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
}

export default Games;