<script>
    import Header from "../../components/Header.svelte";
    import Footer from "../../components/Footer.svelte";
    import { theme } from "../../stores/theme.js"; // Import the theme store

    let name = "", email = "", message = "";
    let successMessage = "";

    function handleSubmit(event) {
        event.preventDefault();

        // Simulate form submission
        console.log("Form Submitted:", { name, email, message });

        successMessage = "Your message has been sent successfully!";

        // Clear form fields
        name = "";
        email = "";
        message = "";

        setTimeout(() => (successMessage = ""), 3000); // Hide message after 3s
    }
</script>

<Header />

<section class="contact-container" class:dark-mode={$theme === "dark"}>
    <div class="contact-form">
        <h2>Contact Us</h2>
        {#if successMessage}
            <p class="success-message">{successMessage}</p>
        {/if}
        <form on:submit={handleSubmit}>
            <input type="text" bind:value={name} placeholder="Your Name" required />
            <input type="email" bind:value={email} placeholder="Your Email" required />
            <textarea bind:value={message} placeholder="Your Message" required></textarea>
            <button type="submit">Send Message</button>
        </form>
    </div>

    <div class="map-container">
        <h2>Find Us Here</h2>
        <iframe 
            title="Google Maps Location - Tech Conference Venue"
            width="100%" 
            height="400"
            style="border:0; border-radius: 10px;"
            loading="lazy"
            allowfullscreen
            src="https://www.google.com/maps/embed/v1/place?key=YOUR_GOOGLE_MAPS_API_KEY&q=Silicon+Valley,CA">
        </iframe>
    </div>
</section>

<Footer />

<style>
    /* Light Mode Defaults */
    .contact-container {
        --bg-color: #f4f4f4;
        --text-color: #333;
        --input-bg: #f8f9fa;
        --input-border: #ccc;
        --button-bg: linear-gradient(135deg, #007bff, #0056b3);
        --button-hover-bg: linear-gradient(135deg, #0056b3, #003d80);
        --success-color: #28a745;
        --shadow-color: rgba(0, 0, 0, 0.1);
    }

    /* Dark Mode Overrides */
    .contact-container.dark-mode {
        --bg-color: #1a1a1a;
        --text-color: #f4f4f4;
        --input-bg: #333;
        --input-border: #555;
        --button-bg: #007bff;
        --button-hover-bg: #0056b3;
        --success-color: #28a745;
        --shadow-color: rgba(255, 255, 255, 0.1);
    }

    .contact-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 25px;
        margin-top:50px;
        padding: 40px 20px;
        background: var(--bg-color);
        border-radius: 12px;
        box-shadow: 0 5px 15px var(--shadow-color);
        color: var(--text-color);
    }

    /* Contact Form Styling */
    .contact-form {
        width: 100%;
        max-width: 500px;
        background: var(--bg-color);
        padding: 25px;
        border-radius: 12px;
        box-shadow: 0 6px 15px var(--shadow-color);
        text-align: center;
        transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
    }

    .contact-form:hover {
        transform: translateY(-5px);
        box-shadow: 0 8px 20px var(--shadow-color);
    }

    /* Form Inputs */
    .contact-form form {
        display: flex;
        flex-direction: column;
        gap: 15px;
    }

    .contact-form input,
    .contact-form textarea {
        width: 100%;
        padding: 12px;
        border-radius: 8px;
        border: 1px solid var(--input-border);
        font-size: 1rem;
        background: var(--input-bg);
        color: var(--text-color);
        transition: border 0.3s ease-in-out, background 0.3s ease-in-out;
    }

    .contact-form input:focus,
    .contact-form textarea:focus {
        border: 1px solid var(--button-bg);
        background: var(--bg-color);
        outline: none;
    }

    /* Submit Button */
    .contact-form button {
        padding: 12px;
        border: none;
        background: var(--button-bg);
        color: white;
        cursor: pointer;
        border-radius: 8px;
        font-size: 1rem;
        font-weight: bold;
        transition: background 0.3s ease-in-out, transform 0.2s;
    }

    .contact-form button:hover {
        background: var(--button-hover-bg);
        transform: scale(1.05);
    }

    /* Success Message */
    .success-message {
        color: var(--success-color);
        font-size: 1rem;
        font-weight: bold;
        margin-top: 10px;
        animation: fadeIn 0.5s ease-in-out;
    }

    /* Map Section */
    .map-container {
        width: 100%;
        max-width: 600px;
        text-align: center;
        border-radius: 12px;
        overflow: hidden;
        box-shadow: 0 6px 15px var(--shadow-color);
    }

    .map-container iframe {
        width: 100%;
        height: 300px;
        border: none;
    }

    /* Fade-in Animation */
    @keyframes fadeIn {
        from {
            opacity: 0;
            transform: translateY(5px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
</style>