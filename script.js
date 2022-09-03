var app = new Vue({
  el: "#app",
  data: {
  },
  mounted(){
      axios.get("https://discordapp.com/api/guilds/764939311354347520/widget.json")
      .then((response) => {
          console.log(response);

          document.getElementById("user").innerHTML = response.data.members[5].username + ": " + response.data.members[5].status;
          document.getElementById("drMarb").src = response.data.members[5].avatar_url;
      })
  }
})