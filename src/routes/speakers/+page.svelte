<script>
    import Header from "../../components/Header.svelte";
    import Footer from "../../components/Footer.svelte";
    import SpeakerCard from "../../components/SpeakerCard.svelte";
    import { speakers } from "../../lib/data.js";
    import { theme } from "../../stores/theme";
</script>

<Header />

<section 
    class="speakers" 
    class:dark-theme={$theme === "dark"}
>
    <h2>Meet Our Speakers</h2>
    <p class="subtext">
      Get inspired by industry leaders and visionaries at TechConf 2025.
    </p>
    <div class="speaker-grid">
      {#each speakers as speaker}
        <SpeakerCard {...speaker} />
      {/each}
    </div>
</section>

<Footer />

<style>
    /* Speakers Section */
    .speakers {
        text-align: center;
        padding: 4rem 2rem;
        background: #f8f9fa;
        color: #2c3e50;
        transition: background 0.3s, color 0.3s;
        margin-top: 30px;
    }

    .speakers h2 {
        font-size: 2.5rem;
        color: inherit;
        margin-bottom: 0.5rem;
    }

    .subtext {
        font-size: 1.2rem;
        color: #666;
        margin-bottom: 2rem;
    }

    /* Grid Layout */
    .speaker-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        gap: 1.5rem;
        max-width: 1100px;
        height: auto; /* Prevents overflow */
        margin: auto;
        padding: 2rem;
        justify-content: center;    
        align-items: start;
    }

    /* Dark Mode Styling */
    .dark-theme {
        background: #222;
        color: #f8f9fa;
    }
</style>
