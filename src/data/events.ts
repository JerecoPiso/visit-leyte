import leyteGulfLanding from '../assets/places/leyte-gulf-landing.jpg';
import pintadosKasadyaan from '../assets/places/pintados-kasadyaan.jpg';
import buyoganFestival from '../assets/places/buyogan-festival.jpg';

export type EventItem = {
    id: string;
    title: string;
    location: string;
    month: string;
    day: string;
    date: string;
    category: string;
    photo: string;
    description: string;
    fullDescription: string;
    highlights: string[];
};

export const events: EventItem[] = [
    {
        id: "pintados-festival",
        title: "Pintados Festival",
        location: "Tacloban City, Leyte",
        month: "Jun",
        day: "29",
        date: "June 29",
        category: "Festival",
        photo: pintadosKasadyaan,
        description: "Tacloban's tribute to the pre-colonial Visayan tradition of body-painted warriors, held alongside the Kasadyaan street dancing festival every June 29.",
        fullDescription: "The Pintados Festival honors the pre-colonial Visayan tradition of the pintados, or 'painted ones,' warriors and villagers who tattooed their bodies as marks of status and courage. Every June 29, streets across Tacloban City fill with dancers in intricate body paint reenacting tribal rituals and legends, timed to coincide with the Feast Day of Señor Santo Niño de Leyte. It is held together with the Kasadyaan Festival, a showcase of street-dancing contingents from Leyte's towns, under the combined banner of Pintados-Kasadyaan.",
        highlights: [
            "Commemorates the pre-colonial Visayan tradition of the pintados",
            "Features body-painted street dancers reenacting tribal rituals",
            "Held together with the Kasadyaan Festival as 'Pintados-Kasadyaan'",
            "Coincides with the Feast Day of Señor Santo Niño de Leyte",
        ],
    },
    {
        id: "leyte-gulf-landing-anniversary",
        title: "Leyte Gulf Landing Anniversary",
        location: "Palo, Leyte",
        month: "Oct",
        day: "20",
        date: "October 20",
        category: "Historical",
        photo: leyteGulfLanding,
        description: "An annual commemoration of General Douglas MacArthur's 1944 return to the Philippines, marked with ceremonies at MacArthur Landing Memorial National Park in Palo.",
        fullDescription: "Every October 20, Palo hosts a formal commemoration of General Douglas MacArthur's return to the Philippines in 1944, an event that turned the tide of the Pacific War. The main ceremony takes place at MacArthur Landing Memorial National Park, where wreath-laying rites, military parades, and historical re-enactments draw Philippine officials, veterans' descendants, and foreign dignitaries each year.",
        highlights: [
            "Commemorates MacArthur's return to the Philippines on October 20, 1944",
            "Main ceremony held at MacArthur Landing Memorial National Park",
            "Includes wreath-laying, military parades, and re-enactments",
            "Draws Philippine and foreign dignitaries each year",
        ],
    },
    {
        id: "buyogan-festival",
        title: "Buyogan Festival",
        location: "Baybay City, Leyte",
        month: "May",
        day: "1",
        date: "May 1",
        category: "Culture",
        photo: buyoganFestival,
        description: "Baybay City's charter anniversary celebration, its bee-inspired costumes and street dancing honoring the city's beekeeping and coconut industries.",
        fullDescription: "The Buyogan Festival celebrates Baybay City's charter anniversary and its long-standing beekeeping and coconut industries. 'Buyog' means bee in Waray, and the festival's street-dancing contingents perform in costumes patterned after bees, moving through choreography that mimics their industrious energy. Baybay's Buyogan dancers are also a regular fixture at Tacloban's Pintados-Kasadyaan grand parade each June.",
        highlights: [
            "Celebrates Baybay City's charter anniversary and local industries",
            "'Buyog' means bee in Waray, reflecting the community's hardworking spirit",
            "Features street-dancing contingents in bee-inspired costumes",
            "Contingents also perform at Tacloban's Pintados-Kasadyaan parade",
        ],
    },
];
