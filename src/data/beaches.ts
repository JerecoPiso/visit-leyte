import kalanggaman from "../assets/KALANGGAMAN.jpg";
import digyo from "../assets/places/digyo-island.jpg";
import apid from "../assets/places/apid-island.jpg";
import calubian from "../assets/places/calubian-beach.jpg";
import sambawan from "../assets/places/sambawan.jpg";
import canigao from "../assets/places/canigao.webp";
export type Beach = {
  id: string;
  name: string;
  location: string;
  photo: string;
  description: string;
  fullDescription: string;
  highlights: string[];
};

export const beaches: Beach[] = [
  {
    id: "kalanggaman-island",
    name: "Kalanggaman Island",
    location: "Palompon, Leyte",
    photo: kalanggaman,
    description:
      "A 5-kilometer sandbar between Leyte and Cebu famed for its powder-white sand, turquoise shallows, and sweeping views of the Camotes Sea. Widely regarded as one of the Philippines' finest island destinations.",
    fullDescription:
      "Kalanggaman Island is a sandbar located in the Camotes Sea between Leyte and Cebu, about 10 kilometers off the coast of Palompon. Its two long, powder-white sandbars stretch out into turquoise water on either side of a small forested islet, making it one of the most photographed destinations in the Visayas. The surrounding reef offers clear, calm snorkeling close to shore and steeper drop-offs further out for more experienced divers.",
    highlights: [
      "795-meter white sandbar visible from both shores at low tide",
      "Popular for day trips and permitted overnight camping from Palompon",
      "Snorkeling and diving around the surrounding reef and drop-offs",
      "Managed by the Palompon LGU; entrance and environmental fees apply",
    ],
  },
  {
    id: "canigao-island",
    name: "Canigao Island",
    location: "Matalom, Leyte",
    photo: canigao,
    description:
      "A beautiful island destination in Matalom, Leyte, known for its long white-sand beach, crystal-clear turquoise waters, lush coconut trees, and relaxing tropical atmosphere. Canigao Island is one of Southern Leyte's popular destinations for beach lovers and weekend getaways.",

    fullDescription:
      "Canigao Island is a scenic island destination located off the coast of Matalom, Leyte. The island is known for its wide white-sand beach, clear turquoise waters, coconut-covered surroundings, and peaceful tropical setting. Visitors can enjoy swimming, snorkeling, island hopping, beach camping, and exploring the island's natural scenery. Canigao is particularly popular for day trips and overnight stays, offering visitors a relaxing escape from the mainland.",

    highlights: [
      "Long white-sand beach and crystal-clear turquoise waters",
      "Lush coconut trees and relaxing tropical island scenery",
      "Popular for swimming, snorkeling, island hopping, and beach camping",
      "Ideal destination for day trips, family outings, and overnight stays",
      "Peaceful atmosphere away from the busy mainland",
      "Accessible by boat from Matalom, Leyte",
    ],
  },
  {
    id: "sambawan-island",
    name: "Sambawan Island",
    location: "Maripipi, Biliran",
    photo: sambawan,
    description:
      "A stunning island destination in Maripipi, Biliran, known for its crystal-clear turquoise waters, white-sand beaches, vibrant coral reefs, and breathtaking views of the surrounding islands. Sambawan Island is one of the most popular coastal destinations in Eastern Visayas.",

    fullDescription:
      "Sambawan Island is a picturesque island destination located in Maripipi, Biliran, just off the coast of Biliran Province. The island is famous for its powdery white sand, clear turquoise waters, rolling hills, and panoramic views of the surrounding sea and nearby islands. Visitors can enjoy swimming, snorkeling, diving, island hopping, and camping while taking in the island's peaceful natural scenery. Its iconic viewing deck on the hillside provides a spectacular vantage point, especially during sunrise and sunset.",

    highlights: [
      "Powdery white-sand beaches and crystal-clear turquoise waters",
      "Panoramic views of the surrounding islands and Biliran Sea",
      "Popular destination for swimming, snorkeling, diving, and island hopping",
      "Scenic hillside viewpoint overlooking the island and surrounding waters",
      "Camping and overnight stays are available for visitors",
      "Accessible through boat trips from Maripipi and nearby coastal areas of Biliran",
    ],
  },
  {
    id: "digyo-island",
    name: "Digyo Island",
    location: "Inopacan, Leyte",
    photo: digyo,
    description:
      "The smallest of the four Cuatro Islas, Digyo is ringed by a narrow stretch of powdery white sand and clear shallow water often compared to Boracay's shoreline.",
    fullDescription:
      "Digyo Island is the smallest member of the Cuatro Islas group off the western coast of Leyte, alongside Apid, Mahaba, and Himokilan. Despite its size, it draws visitors for its fine white sand and calm, shallow water that stays clear well into the afternoon. The island has been designated part of a protected seascape, keeping its shoreline and coral cover in good condition for swimming and snorkeling.",
    highlights: [
      "Smallest of the four Cuatro Islas",
      "Powdery white sand often compared to Boracay's White Beach",
      "Good snorkeling along the fringing reef just offshore",
      "Reachable by boat from Inopacan or nearby coastal towns",
    ],
  },
  {
    id: "apid-island",
    name: "Apid Island",
    location: "Hindang, Leyte",
    photo: apid,
    description:
      "The most populated of the Cuatro Islas group, home to local fisherfolk and weavers known for their handwoven banig mats, with calm, reef-fringed waters ideal for swimming.",
    fullDescription:
      "Apid Island is the most populated of the Cuatro Islas and the one most visitors reach from Hindang. A small fishing community lives on the island, and local weavers are known for producing banig, traditional handwoven sleeping mats sold to visitors passing through. The waters around Apid are calm and reef-fringed, making them well suited to swimming and easy snorkeling.",
    highlights: [
      "Most populated of the Cuatro Islas",
      "Home to local banig (woven mat) weavers",
      "Calm, reef-fringed waters ideal for beginners",
      "Common departure point is the port town of Hindang, Leyte",
    ],
  },
  {
    id: "lotus-beach-calubian",
    name: "Lotus Beach, Calubian",
    location: "Calubian, Leyte",
    photo: calubian,
    description:
      "Facing the Camotes Sea in northern Leyte, this quiet shoreline in Barangay Abanilla is known for its long waterfront and unforgettable sunsets.",
    fullDescription:
      "Lotus Beach Resort sits in Barangay Abanilla in the northern Leyte town of Calubian, facing out toward the Camotes Sea and Biliran province beyond. It's a quieter alternative to the more popular islands further south, valued locally for its long stretch of waterfront and the dramatic sunsets that light up the water each evening.",
    highlights: [
      "Located in Barangay Abanilla, facing the Camotes Sea",
      "Known among locals for dramatic sunset views",
      "A quieter, less-visited alternative to southern Leyte's islands",
      "Close to Calubian town proper for food and lodging",
    ],
  },
];
