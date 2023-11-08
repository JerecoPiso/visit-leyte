import BeachesCard from "../components/BeachesCard"
const Beaches = () => {
 
  return (
    <div className="mt-24">
        <p className="text-center uppercase font-semibold text-3xl text-gray-500">Explore the Secret Beaches of Leyte</p>
        <div className="flex flex-wrap justify-center w-full mt-16 gap-8 px-20">
            <div className="md:flex-1">
                <BeachesCard name={"df"} photo={"df"} description={"sdf"}/>
            </div>
            <div className="md:flex-1">
                <BeachesCard name={"df"} photo={"df"} description={"sdf"}/>
            </div>
            <div className="md:flex-1">
                <BeachesCard name={"df"} photo={"df"} description={"sdf"}/>
            </div>
            <div className="md:flex-1">
                <BeachesCard name={"df"} photo={"df"} description={"sdf"}/>
            </div>
        </div>
    </div>
  )
}

export default Beaches