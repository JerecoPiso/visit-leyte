import EventCard from "../components/EventCard"

const Events = () => {
  return (
    <div className="mt-24">
     
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