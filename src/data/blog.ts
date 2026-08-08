import leyteGulfLanding from '../assets/places/leyte-gulf-landing.jpg';
import kalanggaman from '../assets/KALANGGAMAN.jpg';
import pintadosKasadyaan from '../assets/places/pintados-kasadyaan.jpg';
import santoNino from '../assets/places/santo-nino-shrine.jpg';
import sambawan from '../assets/places/sambawan.jpg';

export type BlogPost = {
    id: string;
    title: string;
    excerpt: string;
    content: string[];
    author: string;
    date: string;
    category: string;
    readTime: string;
    photo: string;
    tags: string[];
};

export const blogPosts: BlogPost[] = [
    {
        id: "82nd-leyte-gulf-landing-anniversary",
        title: "82nd Leyte Gulf Landing Anniversary: Remembering MacArthur's Return",
        excerpt: "Join us as we commemorate the historic Leyte Gulf Landing, a pivotal turning point in World War II that took place on the shores of Palo, Leyte.",
        author: "John Santos",
        date: "August 3, 2026",
        category: "History",
        readTime: "5 min read",
        photo: leyteGulfLanding,
        tags: ["Landmark", "History"],
        content: [
            "Every October 20, the quiet shoreline of Barangay Candahug in Palo fills once again with flags, wreaths, and the sound of military bands. It marks the anniversary of one of the most consequential moments of the Pacific War: the day General Douglas MacArthur waded ashore and made good on a promise he had made two years earlier when he was forced to leave the Philippines. \"I shall return,\" he had said in 1942. On October 20, 1944, he did.",
            "The landing at Leyte Gulf was not a single dramatic gesture but the opening move of a massive Allied campaign to retake the Philippines from Japanese occupation. Within days, the largest naval battle in history unfolded in the surrounding waters, and within months, the liberation of the archipelago was underway. For the people of Leyte, the events of that October are woven directly into local memory, passed down through families who watched the landing craft approach from these same beaches.",
            "Today, MacArthur Landing Memorial National Park stands where the general and his companions came ashore. Its centerpiece, a row of larger-than-life bronze statues wading through shallow water, has become one of the most photographed war memorials in the country. Visitors can walk the same stretch of shore, read the markers detailing the campaign, and, each October, watch the province's official commemoration unfold with wreath-laying ceremonies, parades, and re-enactments that draw both Filipino officials and descendants of Allied veterans.",
            "Whether you visit during the anniversary itself or on a quiet weekday afternoon, the park offers a rare kind of stillness: a place where a turning point in world history and the everyday rhythm of a coastal Leyte town sit side by side. If you're planning a trip around October, it's worth timing it to coincide with the ceremony — it's one of the few living history lessons you can stand inside.",
        ],
    },
    {
        id: "best-beaches-in-leyte",
        title: "Best Beaches in Leyte: Your Complete Island-Hopping Guide",
        excerpt: "From Kalanggaman Island to the Cuatro Islas, discover the most breathtaking beach destinations that Leyte has to offer for every type of traveler.",
        author: "Maria Reyes",
        date: "July 28, 2026",
        category: "Travel",
        readTime: "7 min read",
        photo: kalanggaman,
        tags: ["Beach", "Island", "Adventure"],
        content: [
            "Leyte doesn't get talked about as often as Boracay or Palawan, and honestly, that's part of its charm. The province's beaches are scattered across quiet fishing towns and reached by short boat rides rather than long queues, which means the water tends to stay clear and the sand stays uncrowded even on a good weekend.",
            "Start with Kalanggaman Island, about ten kilometers off the coast of Palompon. Its signature feature is a narrow, 795-meter sandbar that splits the sea into two shades of turquoise, with a small forested islet anchoring one end. It's the kind of view that photographs itself, and the surrounding reef is calm enough for casual snorkeling and deep enough in places for more serious diving. Day trips are common, but the LGU also permits overnight camping if you want to catch the sandbar at sunrise before the boats arrive.",
            "Further south, the Cuatro Islas group off Inopacan and Hindang offers a quieter alternative. Digyo Island, the smallest of the four, has sand so fine it's regularly compared to Boracay's White Beach, while Apid Island, the most populated of the group, is home to a small fishing community and local weavers known for their handwoven banig mats. Both are protected seascapes, so the coral cover close to shore is in noticeably good shape.",
            "If you're heading north instead, Lotus Beach in Barangay Abanilla, Calubian, trades postcard sandbars for something more low-key: a long stretch of waterfront facing the Camotes Sea, best visited right before sunset when the sky and water both turn gold. And for those willing to cross into neighboring Biliran province, Sambawan Island near Maripipi is worth the detour — a hilltop viewing deck overlooks a narrow white-sand beach and a scatter of small islets that make for one of the best panoramas in Eastern Visayas.",
            "However you plan your route, book your boat transfers a day ahead where you can, bring cash for small entrance and environmental fees, and pack out everything you bring in. These islands stay beautiful because the towns around them work to keep them that way.",
        ],
    },
    {
        id: "pintados-festival-guide",
        title: "Pintados Festival: Inside Tacloban's Painted Warrior Tradition",
        excerpt: "Experience the vibrant celebration of Leyte's tattooed warriors. The Pintados-Kasadyaan Festival is one of the most colorful events in the Visayas region.",
        author: "Carlo Diaz",
        date: "July 15, 2026",
        category: "Culture",
        readTime: "6 min read",
        photo: pintadosKasadyaan,
        tags: ["Festival", "Culture"],
        content: [
            "Long before Spanish colonizers arrived in the Visayas, the people of this region were known to early chroniclers as the pintados, or \"the painted ones,\" for the intricate tattoos that covered their bodies as marks of courage, status, and identity. Every June 29, Tacloban City brings that history back into the streets, painting its dancers head to toe and setting them loose in a procession that is equal parts history lesson and street party.",
            "The Pintados Festival is held together with the Kasadyaan Festival, a showcase of street-dancing contingents representing towns from across Leyte, under the combined banner of Pintados-Kasadyaan. The date isn't arbitrary either: it coincides with the Feast Day of Señor Santo Niño de Leyte, giving the celebration a religious dimension alongside its cultural one. Contingents spend months preparing choreography, costumes, and body paint designs that reference specific pre-colonial motifs, and the results are genuinely striking when hundreds of dancers move through Tacloban's main avenues in unison.",
            "If you're attending for the first time, plan to arrive early. The grand parade draws large crowds along Rizal Avenue and the surrounding streets, and the best vantage points fill up fast. Street food vendors set up throughout downtown, and many contingents are happy to pose for photos before the procession starts, so getting there ahead of the main event is worth it.",
            "Beyond the parade itself, the week around Pintados-Kasadyaan typically includes ritual dance competitions, trade fairs, and performances from visiting contingents like Baybay City's bee-costumed Buyogan dancers. It's a useful anchor point if you're planning a Leyte trip around culture rather than beaches: build a few days around June 29 and you'll catch the province at its most visually alive.",
        ],
    },
    {
        id: "tacloban-heritage-weekend-guide",
        title: "A Weekend Guide to Tacloban's Heritage Sites",
        excerpt: "Skip the beach for a weekend and explore the churches, museums, and colonial-era buildings that trace Tacloban's history from Spanish rule to World War II.",
        author: "Maria Reyes",
        date: "June 30, 2026",
        category: "Travel",
        readTime: "6 min read",
        photo: santoNino,
        tags: ["History", "Landmark"],
        content: [
            "Tacloban's beaches get the postcards, but the city itself has enough layered history to fill a weekend on its own. A good starting point is the Santo Niño Shrine and Heritage Museum, a house built in the 1970s for the Marcos family and now open as a museum. Its rooms are filled with antiques, chandeliers, and an extensive collection of religious relics gathered from across the country — a strange and fascinating window into a very specific era of Philippine political history.",
            "From there, it's a short trip to the Leyte Provincial Capitol, a neoclassical building fronted by columns and a wide staircase that has served as the seat of the province's government since the early 20th century. During the final push against Japanese forces in 1944-45, the building briefly housed the restored Commonwealth government, a detail easy to miss if you're only there for the architecture.",
            "No heritage weekend in this part of Leyte is complete without a stop in neighboring Palo, home to the Palo Metropolitan Cathedral. Formally the Cathedral of the Transfiguration of Our Lord, it served as a field chapel for Allied troops after the 1944 landing and now holds a centuries-old image of the Santo Niño, drawing pilgrims from across the region. Pair it with a visit to MacArthur Landing Memorial National Park nearby and you've covered the two poles of Palo's identity: faith and war history, standing almost within sight of each other.",
            "If you have a car or are comfortable arranging a tricycle for the day, all of these sites can realistically be covered between a Saturday morning and Sunday afternoon, leaving your evenings free for Tacloban's restaurant scene along Real Street and the boardwalk.",
        ],
    },
    {
        id: "sambawan-island-travel-guide",
        title: "Sambawan Island: Biliran's Postcard-Perfect Island Escape",
        excerpt: "A short boat ride from Maripipi takes you to one of Eastern Visayas' most photographed islands — here's how to plan the trip.",
        author: "Carlo Diaz",
        date: "June 18, 2026",
        category: "Travel",
        readTime: "5 min read",
        photo: sambawan,
        tags: ["Beach", "Island", "Adventure"],
        content: [
            "Technically, Sambawan Island sits just across the provincial line in Biliran rather than Leyte itself, but for travelers routing through Leyte's northern towns, it's close enough to fold into the same trip — and striking enough to justify the detour. The island sits off the coast of Maripipi, a small municipality reached by boat from the Biliran mainland, and it packs a surprising amount of scenery into a very small footprint.",
            "The main draw is the view from its hillside lookout deck: a narrow strip of white sand curling between two rocky points, framed by the volcanic silhouette of Biliran Island rising across the water. Getting up there involves a short, steep climb from the beach, but it's an easy walk rather than a serious trek, and the payoff at the top is one of the more dramatic panoramas in Eastern Visayas, especially around sunrise or sunset.",
            "Down at sea level, the water is calm enough for casual swimming and clear enough for decent snorkeling around the fringing reef. Small huts along the beach offer shade, and basic camping is allowed for travelers who want to stay past the day-trip crowd and watch the light change over the water in the evening.",
            "Boats to Sambawan typically leave from jump-off points around Maripipi, so budget time to arrange transport a day ahead, especially if you're coming from Leyte and want to make it a single long day trip rather than an overnight stay.",
        ],
    },
];
