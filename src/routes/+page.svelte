<script>
  import Header from "../components/Header.svelte";
  import Footer from "../components/Footer.svelte";
  import { onMount } from "svelte";
  
  let countdown = "";
  
  function updateCountdown() {
      const eventDate = new Date("2025-06-15T09:00:00").getTime();
      
      function calculateTimeLeft() {
          const now = new Date().getTime();
          const timeLeft = eventDate - now;

          if (timeLeft > 0) {
              const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
              const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
              const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
              const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
              countdown = `${days}d ${hours}h ${minutes}m ${seconds}s left!`;
          } else {
              countdown = "Event has started!";
          }
      }

      calculateTimeLeft(); // Initial call
      setInterval(calculateTimeLeft, 1000); // Update every second
  }
  
  onMount(updateCountdown);

  const keynoteSpeakers = [
      { name: "Elon Musk", title: "CEO, Tesla & SpaceX", img: "/image/elon_musk.jpeg" },
      { name: "Sundar Pichai", title: "CEO, Google", img: "/image/sundar_pichai.jpeg" },
      { name: "Satya Nadella", title: "CEO, Microsoft", img: "/image/satya_nadela.jpeg" }
  ];
</script>

<Header />

<section class="hero">
  <div class="overlay"></div>
  <div class="hero-content">
      <h1>🚀 TechConf 2025</h1>
      <h2>Shaping the Future of Technology & Innovation</h2>
      <p>Join us for an unforgettable experience with industry leaders, live tech demos, and networking opportunities.</p>

      <div class="hero-buttons">
          <button class="btn btn-primary">Register Now</button>
          <button class="btn btn-secondary">Learn More</button>
      </div>

      <p class="countdown">Event starts in: <span>{countdown}</span></p>

      <div class="event-stats">
          <div class="stat"><h3>📢 50+</h3><p>Expert Speakers</p></div>
          <div class="stat"><h3>⚡ 30+</h3><p>Live Sessions</p></div>
          <div class="stat"><h3>🌎 10k+</h3><p>Global Attendees</p></div>
      </div>
  </div>
</section>

<section class="speakers">
  <h2>Keynote Speakers</h2>
  <div class="speaker-grid">
      {#each keynoteSpeakers as speaker}
          <div class="speaker-card">
              <img src={speaker.img} alt={speaker.name} />
              <h3>{speaker.name}</h3>
              <p>{speaker.title}</p>
          </div>
      {/each}
  </div>
</section>

<Footer />

<style>
.hero {
  position: relative;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: white;
  background: url('/image/hero_section.jpg') no-repeat center center/cover;
  padding: 20px;
  overflow: hidden;
}
.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
}
.hero-content {
  position: relative;
  z-index: 2;
  max-width: 800px;
  padding: 20px;
}
.hero h1 {
  font-size: 3rem;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 2px;
  animation: fadeIn 1s ease-in-out;
}
.hero h2 {
  font-size: 1.8rem;
  margin: 10px 0;
  font-weight: 400;
  opacity: 0.9;
}
.hero-buttons {
  margin-top: 20px;
}
.btn {
  padding: 12px 20px;
  font-size: 1rem;
  font-weight: bold;
  border: none;
  cursor: pointer;
  margin: 10px;
  border-radius: 8px;
  transition: transform 0.3s ease-in-out, background 0.3s;
}
.btn-primary { background: #ff7b72; color: white; }
.btn-secondary { background: rgba(255, 255, 255, 0.2); color: white; border: 1px solid white; }
.btn:hover { transform: scale(1.05); background: #ff5733; }
.countdown { font-size: 1.5rem; font-weight: bold; margin-top: 15px; }
.event-stats { display: flex; justify-content: center; gap: 40px; margin-top: 30px; }
.stat { text-align: center; background: rgba(255, 255, 255, 0.1); padding: 15px; border-radius: 10px; }
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(-20px); }
  to { opacity: 1; transform: translateY(0); }
}
.speakers { text-align: center; padding: 3rem 1rem; }
.speaker-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 2rem; max-width: 900px; margin: auto; }
.speaker-card { background: white; padding: 1.5rem; border-radius: 10px; transition: transform 0.3s; color: black; }
.speaker-card:hover { transform: scale(1.05); }
</style>
