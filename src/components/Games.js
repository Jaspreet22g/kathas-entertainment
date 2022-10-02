
import GameCard from './GameCard';
function Games() {
  return (
    <div className="container mx-auto max-w-7xl p-5">
      <h4 className="mb-4 text-3xl text-[#F03E3E] font-semibold">Our Games</h4>
      <h3 className="text-[#212529] font-semibold text-5xl mb-12">Available on Google PlayStore</h3>
      <div className='grid grid-cols-2 gap-16'>
        <GameCard />
        <GameCard />
        <GameCard />
        <GameCard />
      </div>
      <div className='w-full flex justify-center'>
        <a href="" className='text-[#49F5057] inline-block font-semibold text-3xl underline my-10'>See more</a>
      </div>

    </div>
  );
}

export default Games;