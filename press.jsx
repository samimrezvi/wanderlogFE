import { InfiniteMovingCards } from "../IMPORTS/pressimp";

const testimonials = [
  { quote: `"This app completely changed the way I travel! It finds hidden gems I’d never discover on my own, and the itinerary planner makes trips effortless.It’s like having a personal travel assistant in my pocket!"`, name: "Sarah L.", title: "Solo Traveler" },
  { quote: `"I used the app for my honeymoon, and it made everything so smooth — from booking stays to discovering romantic spots. It honestly took the stress out of planning and let us just enjoy the trip!"`, name: "Michael & Jenna P.", title: "Newlyweds" },
  { quote: `"As someone who travels frequently for work, I love how this app syncs all my bookings and gives real-time updates. No more juggling emails or missing flight changes!"`, name: "Ravi K.", title: "Business Traveler" },
  { quote: `"What sets this app apart is the local recommendations. I felt like a local in every city I visited! The restaurant and activity suggestions were spot on."`, name: "Liam Chen", title: "Backpacker" },
  { quote: `"The app helped me plan a budget-friendly family vacation without compromising fun. The kids loved the curated adventure spots, and I loved staying on budget!"`, name: "Lina M.", title: "Food & Culture Enthusiast" },
  { quote: `"I love how this app brings together travelers with similar interests. I met amazing people through the community feature and even joined a local hiking group abroad!"`, name: "Sundar Raj", title: "Adventure Seeker" },
];

export  function Press() {
  return (
    <section className="py-16">
      <InfiniteMovingCards items={testimonials} direction="left" speed="normal" />
    </section>
  );
}
