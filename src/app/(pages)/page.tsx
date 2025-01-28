import AButton from "@/components/ui/animated-b";

export default function Home() {


    const resources = ["Subject Nodes", "PYQ's", "DSA", "Web Dev", "App Dev", "Aptitude", "CS Fundamentals", "Miscellaneous"];

    return (
      <>
      {/* Hero Sec */}
      <div className="h-screen bg-cover bg-center">
          <div className='flex flex-col items-center justify-center text-center'>
        <div className='mx-auto mb-6 mt-16 flex max-w-fit items-center justify-center space-x-2 overflow-hidden rounded-full border bg-black px-7 py-2 shadow-md backdrop-blur transition-all'>
          <p className='text-sm font-semibold text-white'>
           MaterialMate: Your Placement Companion!
          </p>
        </div>
        <h1 className='max-w-4xl text-5xl font-bold md:text-6xl lg:text-7xl mt-4'>
          Padhlo चाहे Kahi se{' '}
          <span className='text-blue-600'>Placement</span>{' '}
          Hoga Yhi Se.
        </h1>
        <p className='mt-5 max-w-prose text-zinc-700 sm:text-lg'>
          MaterialMate allows you to Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit aut similique repellendus voluptatibus a. Iure, voluptates earum..
        </p>
      </div>

      <div className="mt-16">
        <div className="flex items-center justify-center text-3xl font-bold mb-8">
          What do you want to learn today?
        </div>
        <div className="items-center justify-center mx-40 grid grid-cols-4">
          {
            resources.map((resource, index)=>{
              return <AButton className="mx-4 my-2" key={index}>{resource}</AButton>
            })
          }
        </div>
      </div>

        
      {/* Body */}

      <div>
        
      </div>

      </div>
      </>
    );
  }