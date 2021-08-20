const project_data = [
  {
      title: "feed",
      description: "a photo-sharing app about the joy of simple, memorable meals. feed was inspired by our favorite go-to recipes and how we learned to cook them: through friends and family. built in collaboration with Stefano Pisani. ",
      features: "FEATURES: CRUD operations for posts, create and edit user profile, create favorites list, keyword search bar, random recipe generator, chronological feed",
      design: "DESIGN: feed was designed so anonymous users can still get recipe ideas. We incorporated ideas from several popular social media apps, such as instagram and reddit, to inspire a user-friendly app. ",
      technologies: "node | mongoose | express | mongoDB | handlebars ",

  },
  { 
      title: "e-contacts",
      description: "a contact book for travelers and internationals. view the contacts of your friends’ friends up to one degree of separation based on where you’re headed. ",
      features: "FEATURES: only one model is used in the app (user model) with the contacts array and base city as key values. Using parallel async/await and promise.all, the app shows which of the user’s direct contacts have connections in the searched city.",
      design: "DESIGN: to avoid associations with social media, e-contacts has a utilitarian interface similar to the contact book found in most mobile devices. the color scheme, font (Myriad), and 8-bit iconography were inspired by the 90s macintosh.",
      technologies: "react | node | mongoDB | Google Places API ",
      
  },
  { 
      title: "error snake 98",
      description: "a classic snake game inspired by errors from old windows computers",
      features: "first project using javascript animations.",
      design: "Knowing my first project might not have great graphics, I conceptualized the game aesthetic based on something that already appears flawed: the accordion affect of windows when there is a virus or severe lag.",
      technologies: "canvas | javascript ",
      
  },
  {   
      title: "technical assessment - studio graphene",
      description: "front-end technical test presented as part of a successful junior application for an international digital product company headquartered in London.",
      features: "FEATURES: My application showcases parallax scroll effect in two sections, map render, and react and sass abilities. First experiences using  unit testing. ",
      design: "DESIGN: applicants were given a video of a single-page app with seven sections, three of which are animated as the page scrolls. Junior applicants are asked to recreate two of the sections, one of which should be animated.",
      technologies: "react | react hooks | sass | unit testing | parallax scroll | adobe xd",
      
  }
]


export default project_data;
