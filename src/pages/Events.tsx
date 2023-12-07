import EventCard from "../components/EventCard"

const Events = () => {
  return (
    <div className="mt-24">
      <p className="text-center uppercase font-bold text-4xl text-slate-700">EVENTS</p>
      <hr className="w-12 h-[0.4em] mx-auto mt-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded"></hr>
      <div>
        <div className="flex flex-wrap justify-center w-full mt-12 gap-8 lg:px-12 md:px-8 px-4 mb-16">
          <EventCard />
          <EventCard />
          <EventCard />
          <EventCard />
        </div>
      </div>
    </div>
  )
}

export default Events