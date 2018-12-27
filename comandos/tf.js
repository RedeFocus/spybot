client.on("ready", () => {

    let img = ["https://images-ext-2.discordapp.net/external/EmNvRIbCjvm6wyNr0lShpky1Q8UYxbJq0HP7KKmlfnM/%3Fsize%3D2048/https/cdn.discordapp.com/avatars/513375539277594625/d876809f2cdee81842e06e4e82aade62.png?width=80&height=80"];
    
      function setImg() {
          let randomImage = img[Math.floor(Math.random() * img.length)];
          client.user.setAvatar(randomImage);
      }
    
      setImg();
      setInterval(() => setImg(), 1000000); //30000 = 30s
    });