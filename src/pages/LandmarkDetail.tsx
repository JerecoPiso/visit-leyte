import { useParams, Link } from "react-router-dom";
import { MdLocationOn, MdArrowBack, MdCheckCircle } from "react-icons/md";
import { landmarks } from "../data/landmarks";
import LandmarksCard from "../components/LandmarksCard";
import { Fade } from "react-awesome-reveal";

const LandmarkDetail = () => {
    const { id } = useParams();
    const landmark = landmarks.find((l) => l.id === id);

    if (!landmark) {
        return (
            <div className="pt-32 pb-20 text-center px-4">
                <h1 className="font-bold text-3xl text-slate-800">Landmark not found</h1>
                <p className="text-slate-500 mt-3">We couldn't find the landmark you're looking for.</p>
                <Link to="/landmarks" className="btn-primary inline-block mt-6">Back to Landmarks</Link>
            </div>
        )
    }

    const otherLandmarks = landmarks.filter((l) => l.id !== landmark.id);

    return (
        <div className="pt-28 pb-20">
            <div className="md:px-16 px-4">
                <Link to="/landmarks" className="link text-slate-500 mb-6 inline-flex">
                    <MdArrowBack /> Back to Landmarks
                </Link>

                {/* Hero */}
                <div className="relative rounded-2xl overflow-hidden">
                    <img src={landmark.photo} alt={landmark.name} className="h-[26em] w-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                    <div className="absolute bottom-6 left-6 right-6">
                        <span className="bg-gradient-to-r from-sky-500 to-blue-600 text-white text-xs font-bold px-4 py-1.5 rounded-full">
                            Landmark
                        </span>
                        <h1 className="text-white text-3xl md:text-4xl font-bold mt-2">{landmark.name}</h1>
                        <p className="text-slate-200 text-sm mt-1 flex items-center gap-1">
                            <MdLocationOn /> {landmark.location}
                        </p>
                    </div>
                </div>

                {/* Content */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-x-10 mt-10">
                    <div className="md:col-span-2">
                        <h2 className="font-bold text-2xl text-slate-800 mb-4">About {landmark.name}</h2>
                        <p className="text-slate-600 leading-relaxed">{landmark.fullDescription}</p>

                        <h3 className="font-bold text-lg text-slate-800 mt-8 mb-4">Highlights</h3>
                        <ul className="space-y-3">
                            {landmark.highlights.map((highlight, i) => (
                                <li key={i} className="flex items-start gap-2 text-slate-600">
                                    <MdCheckCircle className="text-sky-500 mt-1 flex-shrink-0" />
                                    <span>{highlight}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="mt-10 md:mt-0">
                        <div className="glass-card rounded-2xl p-6 bg-slate-50">
                            <h3 className="font-bold text-slate-800 mb-4">Quick Facts</h3>
                            <div className="flex flex-col gap-3 text-sm">
                                <div>
                                    <p className="text-slate-400 uppercase tracking-wide text-xs">Location</p>
                                    <p className="text-slate-700 font-medium">{landmark.location}</p>
                                </div>
                                <div>
                                    <p className="text-slate-400 uppercase tracking-wide text-xs">Category</p>
                                    <p className="text-slate-700 font-medium">Landmark & Heritage Site</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Related */}
                {otherLandmarks.length > 0 && (
                    <div className="mt-16">
                        <h2 className="font-bold text-2xl text-slate-800 mb-6">More Landmarks to Explore</h2>
                        <Fade cascade triggerOnce={true} damping={0.1}>
                            <div className="flex flex-wrap gap-6">
                                {otherLandmarks.map((l) => (
                                    <LandmarksCard key={l.id} id={l.id} name={l.name} photo={l.photo} description={l.description} location={l.location} />
                                ))}
                            </div>
                        </Fade>
                    </div>
                )}
            </div>
        </div>
    )
}

export default LandmarkDetail
