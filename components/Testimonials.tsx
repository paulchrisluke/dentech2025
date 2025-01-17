import Image from 'next/image'

const testimonials = [
  {
    body: "Dentech has made my life so much easier. My previous practice management software was buggy and was too complex to train employees on. If you're just starting your dental practice, go with Dentech.",
    author: {
      name: 'Richard Williams',
      handle: 'Dentist at Williams Dental',
      imageUrl: '/images/richard-williams.jpg'
    }
  },
  {
    body: "Voice activated charting is so good!! My office staff is so happy to finally have voice charting that works!",
    author: {
      name: 'Gabriel Kurti',
      handle: 'Dentist at Happy Smiles Dentistry',
      imageUrl: '/images/gabriel-kurti.jpg'
    }
  },
  {
    body: "The Overall software platform ran our office very smoothly. We noticed a huge change almost instantly.",
    author: {
      name: 'Rennee Jackson',
      handle: 'Dentist of Cole Dental Group',
      imageUrl: '/images/rennee-jackson.jpg'
    }
  }
]

export default function Testimonials() {
  return (
    <div className="bg-gray-950 py-24 sm:py-32">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-xl text-center">
          <h2 className="text-lg font-semibold leading-8 tracking-tight text-lime-500">Testimonials</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            What Our Clients Say
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl lg:max-w-none">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((testimonial) => (
              <div key={testimonial.author.handle}>
                <figure className="relative h-full rounded-2xl bg-gray-900 p-8">
                  <blockquote className="text-gray-300">
                    <p>{`"${testimonial.body}"`}</p>
                  </blockquote>
                  <figcaption className="mt-6 flex items-center gap-x-4">
                    <Image
                      className="h-10 w-10 rounded-full"
                      src={testimonial.author.imageUrl}
                      alt={testimonial.author.name}
                      width={40}
                      height={40}
                    />
                    <div>
                      <div className="font-semibold text-white">{testimonial.author.name}</div>
                      <div className="text-gray-400">{testimonial.author.handle}</div>
                    </div>
                  </figcaption>
                </figure>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
} 