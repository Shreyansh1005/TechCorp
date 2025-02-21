<script>
  export let name;
  export let title;
  export let img;
  export let bio;
</script>

<div class="speaker-card">
  <img src={img} alt={name} />
  <h3>{name}</h3>
  <p>{title}</p>
  <p class="bio">{bio}</p>
</div>

<style>
     /* Speaker Card Enhancements */
     .speaker-card {
      background: white;
      padding: 1.5rem;
      border-radius: 10px;
      box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
      text-align: center;
      transition: transform 0.3s, box-shadow 0.3s;
    }
  
    .speaker-card:hover {
      transform: translateY(-5px);
      box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.15);
    }
  
    .speaker-card img {
      width: 100%;
      max-width: 150px;
      height: auto;
      border-radius: 50%;
      margin-bottom: 1rem;
      border: 3px solid #3498db;
    }
  
    .speaker-card h3 {
      font-size: 1.5rem;
      color: #333;
      margin: 0.5rem 0;
    }
  
    .speaker-card p {
      color: #666;
      font-size: 1rem;
      margin-bottom: 0.5rem;
    }
  
    .speaker-card .bio {
      font-size: 0.9rem;
      color: #444;
      padding: 0 1rem;
    }
</style>