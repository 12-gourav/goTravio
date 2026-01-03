import React from "react";

const Feedback = () => {
  return (
    <section className="feedback">
      <h1>What Our Clients Say</h1>
      <p>
        Our customers trust Go<span>Tavio</span> for reliable service,
        comfortable rides, and professional support.
        <br /> Here’s what they have to say about their experience with us.
      </p>
      <div className="wrapper">
        <div className="card">
          <i class="bx bxs-quote-alt-left"></i>
          <div className="rate">
            <i className="bx bxs-star"></i>
            <i className="bx bxs-star"></i>
            <i className="bx bxs-star"></i>
            <i className="bx bxs-star"></i>
            <i className="bx bxs-star"></i>
          </div>
          <p>
            Excellent service and very professional drivers. The car was clean,
            comfortable, and arrived right on time. Highly recommended
          </p>
          <p className="name">—Rahul Sharma</p>
        </div>
        <div className="card">
          <i class="bx bxs-quote-alt-left"></i>
          <div className="rate">
            <i className="bx bxs-star"></i>
            <i className="bx bxs-star"></i>
            <i className="bx bxs-star"></i>
            <i className="bx bxs-star"></i>
            <i className="bx bxs-star"></i>
          </div>
          <p>
            My airport pickup was seamless and stress-free. The driver was
            punctual and the ride was very comfortable. Will definitely book
            again
          </p>
          <p className="name">— Anita Verma</p>
        </div>
        <div className="card">
          <i class="bx bxs-quote-alt-left"></i>
          <div className="rate">
            <i className="bx bxs-star"></i>
            <i className="bx bxs-star"></i>
            <i className="bx bxs-star"></i>
            <i className="bx bxs-star"></i>
            <i className="bx bxs-star"></i>
          </div>
          <p>
            Used GoTavio for a business meeting and the experience was
            top-notch. Reliable service and premium-quality vehicles.
          </p>
          <p className="name">— Amit Kapoor</p>
        </div>
        <div className="card">
          <i class="bx bxs-quote-alt-left"></i>
          <div className="rate">
            <i className="bx bxs-star"></i>
            <i className="bx bxs-star"></i>
            <i className="bx bxs-star"></i>
            <i className="bx bxs-star"></i>
            <i className="bx bxs-star"></i>
          </div>
          <p>
            We booked a car for a long tour and had an amazing experience. The
            vehicle was spacious, well-maintained, and the journey was very
            smooth.
          </p>
          <p className="name">—Neha Singh</p>
        </div>
      </div>
    </section>
  );
};

export default Feedback;
