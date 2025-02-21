<script>
    export let schedule;
  </script>
  
  <table class="table">
    <thead>
      <tr>
        <th>Time</th>
        <th>Topic</th>
        <th>Speaker</th>
      </tr>
    </thead>
    <tbody>
      {#each schedule as session}
        <tr>
          <td>{session.time}</td>
          <td>{session.topic}</td>
          <td>{session.speaker}</td>
        </tr>
      {/each}
    </tbody>
  </table>
  