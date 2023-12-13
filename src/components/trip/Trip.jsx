import React from "react";
import "./style.css";
import TripCard from "./TripCard";
import jagannath from "../../assets/images/jagannath.jpg";
import tikarpada from "../../assets/images/tikarpada.jpg";
import samaleswari from "../../assets/images/samaleswari.jpg";

const Trip = () => {
  return (
    <div className="trip">
      <h1>Recent Trips</h1>
      <p>You can discover unique destination using Gooogle Maps.</p>
      <div className="all-trip">
        <TripCard
          image={jagannath}
          heading="Shree Mandira"
          text="Puri Jagannath Temple, in Puri, Odisha, India, is dedicated to Lord Jagannath, a form of Lord Vishnu. A vital pilgrimage site with annual Rath Yatra, it's known for its Kalinga-style architecture, including a towering spire. Devotees believe visiting holds deep spiritual significance."
        />
        <TripCard
          image={tikarpada}
          heading="Tikarpada"
          text="Satakosia Tikarpada, in Angul district, Odisha, India, is known for scenic beauty and diverse wildlife. Part of the Satakosia Gorge along the Mahanadi River, it offers captivating landscapes and rich flora and fauna. Recognized for ecotourism, it invites exploration through river cruises, bird watching, and wildlife encounters. "
        />
        <TripCard
          image={samaleswari}
          heading="Maa Samalei Mandira"
          text="Samaleswari Temple, in Sambalpur, Odisha, India, stands as a revered site for its rich history and religious significance. Dedicated to Goddess Samaleswari, it draws pilgrims with its cultural heritage. The temple's unique architecture and spiritual ambiance symbolize deep devotion, making it a cherished destination for devotees and tourists alike."
        />
      </div>
    </div>
  );
};

export default Trip;
