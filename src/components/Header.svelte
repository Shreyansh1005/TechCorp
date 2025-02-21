<script>
    import { theme } from "../stores/theme.js";
    let isOpen = false;

    function toggleTheme() {
        theme.update(t => (t === "dark" ? "light" : "dark"));
    }

    function toggleMenu() {
        isOpen = !isOpen;
        console.log("Menu state:", isOpen); // Debugging log
    }
</script>
<style>
    /* Navbar styles */
    /* Root variables for theme-based styling */
:root {
    --bg-color: #1e1e2e;
    --text-color: #ffffff;
    --accent-color: #ff7b72;
    --glass-bg: #1e1e2e;
    --shadow: rgba(0, 0, 0, 0.2);
}

/* Navbar Styles */
.navbar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 5px 25px;
    padding-bottom: 15px;
    margin-bottom: 10px;
    background: var(--bg-color);
    color: var(--text-color);
    box-shadow: 0 4px 15px var(--shadow);
    border-radius: 100px;
    position: fixed;
    width: 100%;
    top: 0;
    left: 0;
    z-index: 1000;
    transition: background 0.3s ease-in-out;
}

.navbar-brand {
    font-size: 1.8rem;
    font-weight: bold;
    color: #ffffff;
    letter-spacing: 1px;
    cursor: pointer;
    transition: color 0.3s ease-in-out;
}

.navbar-brand:hover {
    color: var(--accent-color);
}

/* Navigation Links */
.nav-links {
    display: flex;
    gap: 20px;
}

.nav-links a {
    text-decoration: none;
    color: var(--text-color);
    font-size: 1rem;
    font-weight: 500;
    transition: color 0.3s ease-in-out;
    padding: 5px 10px;
    border-radius: 5px;
}

.nav-links a:hover {
    color: var(--accent-color);
    background: rgba(255, 255, 255, 0.1);
}

/* Theme Toggle Button */
.theme-toggle {
    background: none;
    border: none;
    font-size: 1.5rem;
    cursor: pointer;
    color: var(--text-color);
    transition: transform 0.3s ease-in-out, color 0.3s ease-in-out;
}

.theme-toggle:hover {
    color: var(--accent-color);
    transform: rotate(20deg);
}

/* Mobile Menu Button */
.menu-btn {
    display: none;
    font-size: 2rem;
    cursor: pointer;
    background: none;
    border: none;
    color: var(--text-color);
    transition: color 0.3s ease-in-out, transform 0.3s ease-in-out;
}

.menu-btn:hover {
    color: var(--accent-color);
    transform: scale(1.1);
}

/* Sidebar styles (Glassmorphic Effect) */
.sidebar {
    position: fixed;
    top: 0;
    left: 0;
    width: 260px;
    text-decoration: none;
    height: 100vh;
    background: var(--glass-bg);
    backdrop-filter: blur(15px);
    box-shadow: 3px 0 15px var(--shadow);
    padding: 25px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    transform: translateX(-100%);
    transition: transform 0.4s ease-in-out;
    border-radius: 0 20px 20px 0;
    z-index: 1000;
}

.sidebar.open {
    transform: translateX(0);
}

.close-btn {
    align-self: flex-end;
    font-size: 1.5rem;
    background: none;
    border: none;
    cursor: pointer;
    color: var(--text-color);
    transition: transform 0.3s ease-in-out, color 0.3s ease-in-out;
}

.close-btn:hover {
    color: var(--accent-color);
    transform: rotate(90deg);
}

/* Responsive Design */
@media (max-width: 768px) {
    .nav-links {
        display: none;
        text-decoration: none;
        color: #ffffff;
    }
    .menu-btn {
        display: block;
    }
}
</style>

<nav class="navbar">
    <span class="navbar-brand">TechConf 2025</span>

    <!-- Desktop Navigation -->
    <div class="nav-links">
        <a href="/">Home</a>
        <a href="/speakers">Speakers</a>
        <a href="/schedule">Schedule</a>
        <a href="/sponsors">Sponsors</a>
        <a href="/about">About</a>
        <a href="/contact">Contact</a>
    </div>

    <!-- Theme Toggle Button -->
    <button class="theme-toggle" on:click={toggleTheme}>
        { $theme === "dark" ? '🌙' : '☀️' }
    </button>

    <!-- Mobile Menu Button -->
    <button class="menu-btn" on:click={toggleMenu}>☰</button>
</nav>

<!-- Sidebar for mobile navigation -->
<div class="sidebar" class:open={isOpen}>
    <button class="close-btn" on:click={toggleMenu}>✖</button>
    <a href="/" on:click={toggleMenu}>Home</a>
    <a href="/speakers" on:click={toggleMenu}>Speakers</a>
    <a href="/schedule" on:click={toggleMenu}>Schedule</a>
    <a href="/sponsors" on:click={toggleMenu}>Sponsors</a>
    <a href="/about" on:click={toggleMenu}>About</a>
    <a href="/contact" on:click={toggleMenu}>Contact</a>
</div>