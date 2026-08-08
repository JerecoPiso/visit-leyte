import mcarthur from '../assets/MCARTHUR.jpg';
import sanJuanico from '../assets/San_Juanico_Bridge.jpg';
import santoNino from '../assets/places/santo-nino-shrine.jpg';
import paloCathedral from '../assets/places/palo-cathedral.jpg';
import leyteCapitol from '../assets/places/leyte-capitol.jpg';
import lakeDanao from '../assets/places/lake-danao.jpg';

export type Landmark = {
    id: string;
    name: string;
    location: string;
    photo: string;
    description: string;
    fullDescription: string;
    highlights: string[];
};

export const landmarks: Landmark[] = [
    {
        id: "macarthur-landing-memorial-park",
        name: "MacArthur Landing Memorial National Park",
        location: "Palo, Leyte",
        photo: mcarthur,
        description: "This park commemorates General Douglas MacArthur's historic return to the Philippines on October 20, 1944. Larger-than-life bronze statues wading ashore mark the turning point of the Pacific War.",
        fullDescription: "MacArthur Landing Memorial National Park sits along the shore of Barangay Candahug in Palo, marking the spot where General Douglas MacArthur waded ashore on October 20, 1944, fulfilling his promise to return to the Philippines. The park's centerpiece is a set of larger-than-life bronze statues depicting MacArthur, President Sergio Osmeña, General Carlos Romulo, and their companions striding through the water, backed by the open sea they crossed.",
        highlights: [
            "Bronze statues of MacArthur, Osmeña, Romulo, and companions wading ashore",
            "Declared a National Historical Landmark in 2004",
            "Site of the annual Leyte Gulf Landing Anniversary every October 20",
            "Located along the shore in Barangay Candahug, Palo",
        ],
    },
    {
        id: "san-juanico-bridge",
        name: "San Juanico Bridge",
        location: "Tacloban City, Leyte",
        photo: sanJuanico,
        description: "The longest bridge in the Philippines at 2.16 kilometers, this S-curved steel span has linked the islands of Leyte and Samar across the San Juanico Strait since 1973.",
        fullDescription: "The San Juanico Bridge spans the narrow San Juanico Strait to connect Tacloban City in Leyte with Sta. Rita in Samar. At 2.16 kilometers, it is the longest bridge in the Philippines and one of the country's most recognizable pieces of infrastructure, known for its distinctive S-curve and steel truss center span. Completed in 1973, it remains a popular stop for photos, especially at sunrise and sunset when the strait's calm water reflects the bridge's silhouette.",
        highlights: [
            "2.16 kilometers long, the longest bridge in the Philippines",
            "Connects Tacloban City, Leyte to Sta. Rita, Samar",
            "Completed in 1973 with a distinctive S-curve design",
            "A popular sunrise and sunset photo spot with a pedestrian lane",
        ],
    },
    {
        id: "santo-nino-shrine-heritage-museum",
        name: "Santo Niño Shrine and Heritage Museum",
        location: "Tacloban City, Leyte",
        photo: santoNino,
        description: "Once the residence of the Marcos family, this heritage house in Tacloban now displays antiques, artwork, and religious relics that offer a glimpse into the region's past.",
        fullDescription: "The Santo Niño Shrine and Heritage Museum in Tacloban City was built in the 1970s as a residence for the Marcos family. Today it operates as a museum, its rooms filled with antiques, chandeliers, artwork, and an extensive collection of religious images and relics gathered from across the country. Guided tours walk visitors through the building's history alongside its collection.",
        highlights: [
            "Former residence of the Marcos family, built in the 1970s",
            "Houses antiques, chandeliers, and religious relics",
            "Guided tours available for visitors",
            "Located in Barangay 54, Tacloban City",
        ],
    },
    {
        id: "palo-metropolitan-cathedral",
        name: "Palo Metropolitan Cathedral",
        location: "Palo, Leyte",
        photo: paloCathedral,
        description: "This centuries-old cathedral served as a chapel for Allied forces after the 1944 landing and remains one of the most visited pilgrimage churches in Eastern Visayas.",
        fullDescription: "Formally the Cathedral of the Transfiguration of Our Lord, Palo Cathedral has stood in the town of Palo since the Spanish colonial era. After MacArthur's forces landed nearby in 1944, the cathedral served briefly as a field chapel for Allied troops. It houses a centuries-old image of the Santo Niño and remains one of the most visited pilgrimage churches in Eastern Visayas, recognized as a National Cultural Treasure.",
        highlights: [
            "Formally the Cathedral of the Transfiguration of Our Lord",
            "Served as a field chapel for Allied forces after the 1944 landing",
            "Home to a centuries-old image of the Santo Niño",
            "Recognized as a National Cultural Treasure of the Philippines",
        ],
    },
    {
        id: "leyte-provincial-capitol",
        name: "Leyte Provincial Capitol",
        location: "Tacloban City, Leyte",
        photo: leyteCapitol,
        description: "A neoclassical landmark and seat of Leyte's provincial government since the early 20th century, this capitol building also served as a wartime headquarters in 1944-45.",
        fullDescription: "The Leyte Provincial Capitol has served as the seat of the province's government since the early 20th century, its neoclassical facade and columned portico overlooking downtown Tacloban City. During the final push against Japanese forces in 1944-45, the building briefly served as a headquarters for the restored Commonwealth government, cementing its place in the province's wartime history.",
        highlights: [
            "Neoclassical building and seat of Leyte's provincial government",
            "Briefly served as a Commonwealth government headquarters in 1944-45",
            "Fronted by Freedom Park in downtown Tacloban City",
            "One of the city's most recognizable historical buildings",
        ],
    },
    {
        id: "lake-danao",
        name: "Lake Danao",
        location: "Ormoc City, Leyte",
        photo: lakeDanao,
        description: "A tranquil volcanic lake ringed by forested mountains, Lake Danao offers kayaking, fishing, and cool mountain air just outside Ormoc City.",
        fullDescription: "Lake Danao sits inside a natural park about 26 kilometers from downtown Ormoc City, its still water framed by forested mountains that keep the surrounding air noticeably cooler than the coast. Visitors come to paddle kayaks or bamboo rafts, fish, and camp along the shoreline, making it a favorite day-trip destination for travelers looking to pair Leyte's beaches with its highlands.",
        highlights: [
            "A crater lake inside Lake Danao Natural Park",
            "Popular for kayaking, boating, and lakeside camping",
            "Surrounded by cool, forested mountains",
            "About 26 kilometers from downtown Ormoc City",
        ],
    },
];
