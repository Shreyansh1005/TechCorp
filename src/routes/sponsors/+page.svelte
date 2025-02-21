<script>
    import Header from "../../components/Header.svelte";
    import { theme } from "../../stores/theme.js"; // Import the theme store

    const sponsors = [
        { name: "TechCorp", tier: "Gold", logo: "/image/TechCorp.png", link: "https://techcorp.com" },
        { name: "InnovateX", tier: "Silver", logo: "/image/innovateX.jpeg", link: "https://innovatex.com" },
        { name: "DevSolutions", tier: "Bronze", logo: "/image/DevSolutions.jpeg", link: "https://devsolutions.com" },
        { name: "NextGen", tier: "Gold", logo: "/image/NextGen.png", link: "https://nextgen.com" },
        { name: "CodeMasters", tier: "Silver", logo: "/image/CodeMasters.png", link: "https://codemasters.com" },
        { name: "SoftSys", tier: "Bronze", logo: "/image/SoftSys.jpeg", link: "https://softsys.com" },
    ];
</script>

<Header />
<section class="sponsors" class:dark-mode={$theme === "dark"}>
    <h2>Our Sponsors</h2>

    <div class="sponsor-container">
        <!-- Gold Sponsors -->
        <div class="sponsor-tier gold-tier">
            <h3>Gold Sponsors</h3>
            <div class="sponsor-grid gold-grid">
                {#each sponsors.filter(s => s.tier === "Gold") as sponsor}
                    <div class="sponsor-card gold">
                        <div class="sponsor-inner">
                            <div class="sponsor-front">
                                <img src={sponsor.logo} alt={sponsor.name} class="sponsor-logo">
                            </div>
                            <div class="sponsor-back">
                                <a href={sponsor.link} target="_blank" rel="noopener noreferrer">
                                    <p>{sponsor.name}</p>
                                </a>
                            </div>
                        </div>
                    </div>
                {/each}
            </div>
        </div>

        <!-- Silver Sponsors -->
        <div class="sponsor-tier silver-tier">
            <h3>Silver Sponsors</h3>
            <div class="sponsor-grid silver-grid">
                {#each sponsors.filter(s => s.tier === "Silver") as sponsor}
                    <div class="sponsor-card silver">
                        <div class="sponsor-inner">
                            <div class="sponsor-front">
                                <img src={sponsor.logo} alt={sponsor.name} class="sponsor-logo">
                            </div>
                            <div class="sponsor-back">
                                <a href={sponsor.link} target="_blank" rel="noopener noreferrer">
                                    <p>{sponsor.name}</p>
                                </a>
                            </div>
                        </div>
                    </div>
                {/each}
            </div>
        </div>

        <!-- Bronze Sponsors -->
        <div class="sponsor-tier bronze-tier">
            <h3>Bronze Sponsors</h3>
            <div class="sponsor-grid bronze-grid">
                {#each sponsors.filter(s => s.tier === "Bronze") as sponsor}
                    <div class="sponsor-card bronze">
                        <div class="sponsor-inner">
                            <div class="sponsor-front">
                                <img src={sponsor.logo} alt={sponsor.name} class="sponsor-logo">
                            </div>
                            <div class="sponsor-back">
                                <a href={sponsor.link} target="_blank" rel="noopener noreferrer">
                                    <p>{sponsor.name}</p>
                                </a>
                            </div>
                        </div>
                    </div>
                {/each}
            </div>
        </div>
    </div>
</section>

<style>
    /* Light Mode Defaults */
    .sponsors {
        --bg-color: #f8f9fa;
        --text-color: #333;
        --card-bg: #fff;
        --shadow-color: rgba(0, 0, 0, 0.1);
    }

    /* Dark Mode Overrides */
    .sponsors.dark-mode {
        --bg-color: #1a1a1a;
        --text-color: #f4f4f4;
        --card-bg: #333;
        --shadow-color: rgba(255, 255, 255, 0.1);
    }

    .sponsors {
        text-align: center;
        max-width: 1000px;
        margin: 50px auto;
        padding: 30px;
        background: var(--bg-color);
        border-radius: 12px;
        margin-top: 100px;
        box-shadow: 0 4px 12px var(--shadow-color);
    }

    .sponsors h2 {
        font-size: 2.5rem;
        margin-bottom: 30px;
        color: var(--text-color);
        font-weight: bold;
        text-transform: uppercase;
    }

    /* Sponsor Tier Layout */
    .sponsor-container {
        display: flex;
        flex-direction: column;
        gap: 40px;
    }

    .sponsor-tier {
        padding: 25px;
        border-radius: 12px;
        box-shadow: 0 4px 12px var(--shadow-color);
        transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
    }

    .sponsor-tier:hover {
        transform: translateY(-5px);
        box-shadow: 0 6px 15px var(--shadow-color);
    }

    .gold-tier {
        background: linear-gradient(135deg, #FFD700, #FFA500);
        padding: 30px;
    }

    .silver-tier {
        background: linear-gradient(135deg, #C0C0C0, #A0A9B0);
    }

    .bronze-tier {
        background: linear-gradient(135deg, #CD7F32, #B87333);
        padding: 20px;
    }

    .sponsor-tier h3 {
        font-size: 2rem;
        margin-bottom: 18px;
        color: white;
        text-shadow: 1px 1px 5px rgba(0, 0, 0, 0.2);
    }

    /* Sponsor Grid */
    .sponsor-grid {
        display: flex;
        justify-content: center;
        gap: 25px;
        flex-wrap: wrap;
    }

    /* Sponsor Card with Flip Animation */
    .sponsor-card {
        width: 180px;
        height: 180px;
        perspective: 1000px;
    }

    .sponsor-inner {
        width: 100%;
        height: 100%;
        position: relative;
        transform-style: preserve-3d;
        transition: transform 0.6s ease-in-out;
    }

    .sponsor-card:hover .sponsor-inner {
        transform: rotateY(180deg);
    }

    .sponsor-front,
    .sponsor-back {
        position: absolute;
        width: 100%;
        height: 100%;
        border-radius: 12px;
        box-shadow: 0 5px 12px var(--shadow-color);
        text-align: center;
        backface-visibility: hidden;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 15px;
    }

    .sponsor-front {
        background: var(--card-bg);
    }

    .sponsor-logo {
        width: 100px;
        height: auto;
        transition: transform 0.3s ease-in-out;
    }

    .sponsor-card:hover .sponsor-logo {
        transform: rotateY(180deg);
    }

    .sponsor-back {
        background: var(--card-bg);
        transform: rotateY(180deg);
    }

    .sponsor-back p {
        font-size: 1.2rem;
        font-weight: bold;
        color: var(--text-color);
        text-transform: uppercase;
        letter-spacing: 1px;
    }

    /* Gold Border */
    .gold .sponsor-inner {
        border: 3px solid gold;
    }

    /* Silver Border */
    .silver .sponsor-inner {
        border: 3px solid silver;
    }

    /* Bronze Border */
    .bronze .sponsor-inner {
        border: 3px solid #cd7f32;
    }

    /* Link Styling */
    a {
        text-decoration: none;
        color: inherit;
    }

    a:hover {
        opacity: 0.8;
    }
</style>