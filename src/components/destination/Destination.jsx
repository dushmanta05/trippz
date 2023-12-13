import React from "react";
import "./style.css";
import DestinationData from "./DestinationData";
import kerala1 from "../../assets/images/kerala.jpg";
import kerala2 from "../../assets/images/kerala-boat.jpg";
import chilika from "../../assets/images/chilika.jpg";
import chilika2 from "../../assets/images/deomali-2.jpg";

const Destination = () => {
  return (
    <div className="destination">
      <h1>Popular Destinations</h1>
      <p>Tours give you the opportunity to see a lot, within a time frame.</p>
      <DestinationData
        heading="Taal Volcano, Batangas"
        description="One of the most iconic views in Luzon, Mt. Taal boasts a volcano
            inside a lake inside an island. If you fancy a closer look, the hike
            up to the crater is a mere 45 minutes, and is easy enough for
            beginners. Guides will assist you most of the way, and you’ll see
            the peculiar environment found on an active volcano, including
            volcanic rocks and steam vents. The hike can be dusty and hot, so
            plan for an early morning trip, and then unwind with some bulalo
            before heading back home!"
        image1={kerala1}
        image2={kerala2}
        className="description-1"
      />
      <DestinationData
        heading="Taal Volcano, Batangas"
        description="One of the most iconic views in Luzon, Mt. Taal boasts a volcano
            inside a lake inside an island. If you fancy a closer look, the hike
            up to the crater is a mere 45 minutes, and is easy enough for
            beginners. Guides will assist you most of the way, and you’ll see
            the peculiar environment found on an active volcano, including
            volcanic rocks and steam vents. The hike can be dusty and hot, so
            plan for an early morning trip, and then unwind with some bulalo
            before heading back home!"
        image1={chilika}
        image2={chilika2}
        className="description-1-reverse"
      />
    </div>
  );
};

export default Destination;
