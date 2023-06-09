const updateScoreboard = async () => {
    const h2 = document.querySelectorAll("h2");
    const p = document.querySelectorAll("p");
  
    try {
        const response = await fetch("http://localhost:3000/api/v1/leaderbord");
        const data = await response.json();
        console.log(data);

        if (data.data) {
    
            // Update the names and times in the first four items
            for (let i = 0; i < 4; i++) {
                
                const nameElement = h2[i];
                const timeElement = p[i];

                nameElement.textContent = data.data[i].name;
                timeElement.textContent = data.data[i].time + "s";
            }
        } else {
            console.error("Error fetching leaderboard:", response.status);
        }
    } catch (error) {
        console.error("Error fetching leaderboard:", error);
    }
  };
  
  // Call the updateScoreboard function to update the scoreboard
  updateScoreboard();
  