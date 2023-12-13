import React from "react";
import "./style.css";
import DestinationData from "./DestinationData";
import deomali1 from "../../assets/images/deomali.jpg";
import deomali2 from "../../assets/images/deomali-2.jpg";
import chilika1 from "../../assets/images/chilika.jpg";
import chilika2 from "../../assets/images/chilika-2.jpg";

const Destination = () => {
  return (
    <div className="destination">
      <h1>Popular Destinations</h1>
      <p>Tours give you the opportunity to see a lot, within a time frame.</p>
      <DestinationData
        heading="Deomali, Koraput"
        description="Deomali, Odisha's tallest peak, offers a scenic trek amidst lush greenery. Ideal for all hikers, the ascent unveils diverse landscapes with local guides ensuring a safe journey. An early start rewards with a sunrise spectacle at the summit. Conquer the peak, savor the triumph, and indulge in local cuisine for a perfect Deomali adventure."
        image1={deomali1}
        image2={deomali2}
        className="description-1"
      />
      <DestinationData
        heading="Chilika, Puri"
        description="Chilika, Odisha's coastal jewel, unveils a vast lagoon paradise. Short boat rides to islands offer a unique ecosystem. Nalabana Bird Sanctuary enchants bird lovers with migratory wonders. Guides ensure a seamless journey through mangrove forests. Opt for early exploration to witness tranquil waters. Chilika is a blend of nature's bounty and cultural richness. Conclude with local seafood delights for a perfect finale."
        image1={chilika1}
        image2={chilika2}
        className="description-1-reverse"
      />
    </div>
  );
};

export default Destination;
