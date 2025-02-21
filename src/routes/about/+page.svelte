<script>
    import Header from '../../components/Header.svelte';
    import Footer from '../../components/Footer.svelte';
</script>

<Header />

<section class="about">
    <div class="about-content">
        <h1>Welcome to <span>TechConf 2025</span></h1>
        <p>
            TechConf is the premier technology conference where innovators, 
            industry leaders, and tech enthusiasts gather to discuss 
            the future of technology, AI, and software development.
        </p>
        <p>
            Join us for insightful talks, hands-on workshops, and networking 
            opportunities with top professionals in the tech industry.
        </p>
        <a href="/register" class="cta-button">Register Now</a>
    </div>
</section>

<Footer />

<style>
    .about {
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        height: 92vh;
        background: linear-gradient(135deg, #4A90E2, #0B3D91);
        color: white;
        padding: 50px 20px;
        transition: background 1.5s ease-in-out;
    }

    .about:hover {
        background: linear-gradient(135deg, #0B3D91, #4A90E2);
    }

    .about-content {
        max-width: 800px;
        animation: fadeIn 1.2s ease-in-out;
        padding: 20px;
        border-radius: 10px;
        background: rgba(255, 255, 255, 0.1);
        box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    }

    h1 {
        font-size: 2.8rem;
        margin-bottom: 15px;
    }

    h1 span {
        color: #FFD700;
        text-shadow: 2px 2px 10px rgba(255, 215, 0, 0.8);
    }

    p {
        font-size: 1.2rem;
        line-height: 1.6;
        margin-bottom: 15px;
    }

    .cta-button {
        display: inline-block;
        padding: 12px 25px;
        margin-top: 15px;
        font-size: 1.2rem;
        background: #FFD700;
        color: #333;
        text-decoration: none;
        border-radius: 8px;
        transition: all 0.3s ease-in-out;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    }

    .cta-button:hover {
        background: #FFC107;
        transform: scale(1.1);
        box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3);
    }

    @keyframes fadeIn {
        from { opacity: 0; transform: translateY(20px); }
        to { opacity: 1; transform: translateY(0); }
    }

    @media (max-width: 768px) {
        .about {
            padding: 30px 15px;
        }
        h1 {
            font-size: 2rem;
        }
        p {
            font-size: 1rem;
        }
        .cta-button {
            font-size: 1rem;
            padding: 10px 20px;
        }
    }
</style>
