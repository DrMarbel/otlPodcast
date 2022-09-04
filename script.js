var app = new Vue({
  el: "#app",
  data: {
  },
  mounted(){
      axios.get("https://discordapp.com/api/guilds/764939311354347520/widget.json")
      .then((response) => {
          console.log(response);

          var user = document.getElementById("user");
          var status = response.data.members[5].status;

          user.innerHTML = response.data.members[5].username + ": " + response.data.members[5].status;

          document.getElementById("drMarb").src = response.data.members[5].avatar_url;
          var dot = document.getElementById("dot");
          
          if (status == "online")
          {
            dot.className = "position-absolute top-300 start-100 translate-middle p-2 bg-success border border-light rounded-circle"
          }
          else if (status == "idle")
          {
            dot.className = "position-absolute top-300 start-100 translate-middle p-2 bg-warning border border-light rounded-circle"
          }
      })
  }
})