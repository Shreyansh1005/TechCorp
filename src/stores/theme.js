import { writable } from "svelte/store";

// Function to get the stored theme safely
const getStoredTheme = () => {
    if (typeof window !== "undefined") {  // Check if running in the browser
        return localStorage.getItem("theme") || "dark";
    }
    return "dark"; // Default theme
};

// Create a writable store
export const theme = writable(getStoredTheme());

// Subscribe to store changes and update localStorage + body styles
theme.subscribe((value) => {
    if (typeof window !== "undefined") { // Ensure this runs only in the browser
        localStorage.setItem("theme", value);
        document.body.style.backgroundColor = value === "dark" ? "#222" : "#f8f9fa";
        document.body.style.color = value === "dark" ? "#f8f9fa" : "#222";
    }
});
