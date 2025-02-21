<script>
    import Header from "../../components/Header.svelte";
    import Footer from "../../components/Footer.svelte";
    import { theme } from "../../stores/theme";
    let activeTab = "Day 1";

    const sessions = [
        { day: "Day 1", track: "AI", time: "10:00 AM", topic: "AI in 2025", speaker: "John Doe" },
    { day: "Day 1", track: "Web Dev", time: "11:00 AM", topic: "Future of Web", speaker: "Jane Smith" },
    { day: "Day 1", track: "Cloud Computing", time: "12:30 PM", topic: "Serverless Architecture", speaker: "Emily Johnson" },
    { day: "Day 1", track: "Data Science", time: "02:00 PM", topic: "Big Data Trends", speaker: "Michael Lee" },
    { day: "Day 1", track: "Cybersecurity", time: "03:30 PM", topic: "Zero Trust Security", speaker: "Sophia White" },
    { day: "Day 1", track: "Blockchain", time: "04:45 PM", topic: "Web3 Revolution", speaker: "Daniel Brown" },
    { day: "Day 1", track: "IoT", time: "06:00 PM", topic: "Smart Cities & IoT", speaker: "Olivia Harris" },

    // Day 2
    { day: "Day 2", track: "Cybersecurity", time: "10:00 AM", topic: "Cyber Threats", speaker: "Alice Brown" },
    { day: "Day 2", track: "Blockchain", time: "11:30 AM", topic: "Decentralized Finance", speaker: "Bob Martin" },
    { day: "Day 2", track: "AI", time: "01:00 PM", topic: "Ethical AI", speaker: "Kevin Scott" },
    { day: "Day 2", track: "Quantum Computing", time: "02:30 PM", topic: "Quantum Algorithms", speaker: "Laura Wilson" },
    { day: "Day 2", track: "Cloud Computing", time: "04:00 PM", topic: "Multi-Cloud Strategy", speaker: "Brian Anderson" },
    { day: "Day 2", track: "Web Dev", time: "05:30 PM", topic: "Jamstack Future", speaker: "Emma Davis" },
    { day: "Day 2", track: "IoT", time: "07:00 PM", topic: "Edge Computing", speaker: "Chris Johnson" },

    // Day 3
    { day: "Day 3", track: "Blockchain", time: "09:30 AM", topic: "NFTs & Digital Ownership", speaker: "Rebecca Carter" },
    { day: "Day 3", track: "Cybersecurity", time: "11:00 AM", topic: "AI in Cybersecurity", speaker: "Liam Evans" },
    { day: "Day 3", track: "Data Science", time: "12:30 PM", topic: "Data-Driven Decision Making", speaker: "Sophia Martinez" },
    { day: "Day 3", track: "Quantum Computing", time: "02:00 PM", topic: "Post-Quantum Cryptography", speaker: "Nathan Green" },
    { day: "Day 3", track: "AI", time: "03:30 PM", topic: "AI-Powered Automation", speaker: "Hannah Thomas" },
    { day: "Day 3", track: "Cloud Computing", time: "05:00 PM", topic: "Cloud-Native Development", speaker: "William Roberts" }
    ];

    const days = ["Day 1", "Day 2","Day 3"];
</script>

<Header />

<!-- Conference Schedule Section -->
<section class="schedule">
    <h2>Conference Schedule</h2>
    <div class="tabs">
        {#each days as day}
            <button on:click={() => (activeTab = day)} class="{activeTab === day ? 'active' : ''}">{day}</button>
        {/each}
    </div>
    <div class="schedule-table">
        <table>
            <thead>
                <tr>
                    <th>Time</th>
                    <th>Track</th>
                    <th>Topic</th>
                    <th>Speaker</th>
                </tr>
            </thead>
            <tbody>
                {#each sessions.filter(session => session.day === activeTab) as session}
                    <tr>
                        <td>{session.time}</td>
                        <td>{session.track}</td>
                        <td>{session.topic}</td>
                        <td>{session.speaker}</td>
                    </tr>
                {/each}
            </tbody>
        </table>
    </div>
</section>

<Footer />

<style>
    .schedule {
        max-width: 900px;
        margin: 40px auto;
        text-align: center;
        font-family: "Arial", sans-serif;
        margin-top: 100px;
        height: 77vh;
        padding: 0 20px;
    }
    .tabs {
        display: flex;
        justify-content: center;
        gap: 10px;
        margin-bottom: 20px;
        flex-wrap: wrap;
    }
    .tabs button {
        padding: 12px 18px;
        cursor: pointer;
        background: linear-gradient(to right, #007bff, #0056b3);
        color: white;
        border: none;
        border-radius: 8px;
        font-size: 1rem;
        transition: 0.3s;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    }
    .tabs button:hover, .tabs .active {
        background: #004a99;
        font-weight: bold;
        transform: scale(1.05);
    }
    .schedule-table {
        overflow-x: auto;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        border-radius: 10px;
        padding: 10px;
        max-width: 100%;
    }
    table {
        width: 100%;
        border-collapse: collapse;
        margin-top: 15px;
        border-radius: 10px;
        overflow: hidden;
    }
    th, td {
        border: 1px solid #ddd;
        padding: 14px;
        text-align: left;
        font-size: 1rem;
    }
    th {
        background: linear-gradient(to right, #007bff, #0056b3);
        color: white;
        text-transform: uppercase;
        letter-spacing: 1px;
    }
    tr:nth-child(even) {
        background: #537699;
    }
    tr:hover {
        background: #0fad37;
        transition: 0.3s ease-in-out;
    }

    /* Responsive Styling */
    @media (max-width: 768px) {
        .schedule {
            height: auto;
            margin-top: 50px;
            padding: 20px;
        }
        .tabs {
            flex-direction: column;
            align-items: center;
        }
        .tabs button {
            width: 100%;
            padding: 10px;
            font-size: 0.9rem;
        }
        .schedule-table {
            padding: 5px;
        }
        table {
            font-size: 0.9rem;
        }
        th, td {
            padding: 10px;
        }
    }
    @media (max-width: 480px) {
        .tabs button {
            font-size: 0.8rem;
            padding: 8px;
        }
        table {
            font-size: 0.8rem;
        }
        th, td {
            padding: 8px;
        }
    }
</style>
