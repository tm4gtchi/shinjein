const project_data = [
  {
      title: "Feed",
      description: "a photo-sharing web app all about the joy of simple, memorable meals. feed was inspired by our favorite go-to recipes and how we learned to cook them: through friends and family. built in collaboration with Stefano Pisani. ",
      features: "CRUD operations for posts, create and edit user profile, create favorites list, keyword search bar, random recipe generator, chronological feed",
      design: "feed was designed so anonymous users can still get recipe ideas. We incorporated ideas from several popular social media apps, such as instagram and reddit, to inspire a user-friendly app. ",
      technologies: "node | mongoose | express | mongoDB | handlebars ",
      file: "feed_logo.png",
  },
  { 
      title: "e-contacts",
      description: "a contact book for internationals. view the contacts of your friends’ friends up to one degree of separation based on where you’re headed. ",
      features: "a single model is used in entire app (the user model), generated upon sign up. The most important values in the model are the contacts array and the user’s base city. Upon searching a city destination (powered by Google API), the app will show which of the user’s direct contacts have a contact based in the searched city.",
      design: "the app was designed to be utilitarian - it is not a social app. in order to avoid such associations, design decisions were directly inherited from the typical contacts book found in any mobile device. Since I love vintage tech interfaces, I used muted cold tones and a font associated with older macs, Myriad.",
      technologies: "react | node | mongoose | express | mongoDB | handlebars",
      file: "econ_logo.png"
  },
  { 
      title: "error snake 98",
      description: "a classic snake game inspired by those unsettling errors (or were they viruses?) from old windows computers",
      technologies: "canvas | javascript ",
      file: "err_logo.png"
  },
  {   
      title: "technical assessment - studio graphene",
      description: "front-end technical test presented as part of a successful junior application. A deployed demo is in the github README.",
      technologies: "react | react hooks | sass | unit testing | adobe xd ",
      file: "err_logo.png"
  }
]


export default project_data;
