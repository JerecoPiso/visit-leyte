import { useParams, Link } from "react-router-dom";
import { MdLocationOn, MdArrowBack, MdCheckCircle } from "react-icons/md";
import { beaches } from "../data/beaches";
import BeachesCard from "../components/BeachesCard";
import { Fade } from "react-awesome-reveal";

const BeachDetail = () => {
    const { id } = useParams();
    const beach = beaches.find((b) => b.id === id);

    if (!beach) {
        return (
            <div className="pt-32 pb-20 text-center px-4">
                <h1 className="font-bold text-3xl text-slate-800">Beach not found</h1>
                <p className="text-slate-500 mt-3">We couldn't find the beach you're looking for.</p>
                <Link to="/beaches" className="btn-primary inline-block mt-6">Back to Beaches</Link>
            </div>
        )
    }

    const otherBeaches = beaches.filter((b) => b.id !== beach.id);

    return (
        <div className="pt-28 pb-20">
            <div className="md:px-16 px-4">
                <Link to="/beaches" className="link text-slate-500 mb-6 inline-flex">
                    <MdArrowBack /> Back to Beaches
                </Link>

                {/* Hero */}
                <div className="relative rounded-2xl overflow-hidden">
                    <img src={beach.photo} alt={beach.name} className="h-[26em] w-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                    <div className="absolute bottom-6 left-6 right-6">
                        <span className="bg-gradient-to-r from-sky-500 to-blue-600 text-white text-xs font-bold px-4 py-1.5 rounded-full">
                            Beach
                        </span>
                        <h1 className="text-white text-3xl md:text-4xl font-bold mt-2">{beach.name}</h1>
                        <p className="text-slate-200 text-sm mt-1 flex items-center gap-1">
                            <MdLocationOn /> {beach.location}
                        </p>
                    </div>
                </div>

                {/* Content */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-x-10 mt-10">
                    <div className="md:col-span-2">
                        <h2 className="font-bold text-2xl text-slate-800 mb-4">About {beach.name}</h2>
                        <p className="text-slate-600 leading-relaxed">{beach.fullDescription}</p>

                        <h3 className="font-bold text-lg text-slate-800 mt-8 mb-4">Highlights</h3>
                        <ul className="space-y-3">
                            {beach.highlights.map((highlight, i) => (
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
                                    <p className="text-slate-700 font-medium">{beach.location}</p>
                                </div>
                                <div>
                                    <p className="text-slate-400 uppercase tracking-wide text-xs">Category</p>
                                    <p className="text-slate-700 font-medium">Beach & Island</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Related */}
                {otherBeaches.length > 0 && (
                    <div className="mt-16">
                        <h2 className="font-bold text-2xl text-slate-800 mb-6">More Beaches to Explore</h2>
                        <Fade cascade triggerOnce={true} damping={0.1}>
                            <div className="flex flex-wrap gap-6">
                                {otherBeaches.map((b) => (
                                    <BeachesCard key={b.id} id={b.id} name={b.name} photo={b.photo} description={b.description} location={b.location} />
                                ))}
                            </div>
                        </Fade>
                    </div>
                )}
            </div>
        </div>
    )
}

export default BeachDetail
