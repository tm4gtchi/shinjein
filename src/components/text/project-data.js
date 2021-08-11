const project_data = [
  {
      title: "feed",
      description: "a photo-sharing app about the joy of simple, memorable meals. feed was inspired by our favorite go-to recipes and how we learned to cook them: through friends and family. built in collaboration with Stefano Pisani. ",
      features: "CRUD operations for posts, create and edit user profile, create favorites list, keyword search bar, random recipe generator, chronological feed",
      design: "feed was designed so anonymous users can still get recipe ideas. We incorporated ideas from several popular social media apps, such as instagram and reddit, to inspire a user-friendly app. ",
      technologies: "node | mongoose | express | mongoDB | handlebars ",
      file: "/static/media/feed_logo.472e20ab.png"
  },
  { 
      title: "e-contacts",
      description: "a contact book for travelers and internationals. view the contacts of your friends’ friends up to one degree of separation based on where you’re headed. ",
      features: "only one model is used in the app (user model) with the contacts array and base city as key values. Using parallel async/await and promise.all, the app shows which of the user’s direct contacts have connections in the searched city.",
      design: "to avoid associations with social media, e-contacts has a utilitarian interface similar to the contact book found in most mobile devices. the color scheme, font (Myriad), and 8-bit iconography were inspired by the 90s macintosh.",
      technologies: "react | node | mongoDB | Google Places API ",
      file: "data:image/png;base64,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"
  },
  { 
      title: "error snake 98",
      description: "a classic snake game inspired by those unsettling errors (or were they viruses?) from old windows computers",
      features: "first project using javascript animations.",
      design: "Knowing my first project might not have great graphics, I conceptualized the game aesthetic based on something that already appears flawed: the accordion affect of windows when there is a virus or severe lag.",
      technologies: "canvas | javascript ",
      file: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEYAAABLCAYAAADNsPFaAAACvUlEQVR4Xu2cMXbCMAxAndNwhHYjI2OPkw3YcgW2HKEjY9h6BTZukj4F1Ag/m9jUlp1YmQoJSfz5kmyR16ppmkHJ9kSgbVtVAZi2/RI0DwJN860EjEEHAWOJEQFTCphh+Hg7T1ZVpZT6GT+/OmMAzO1284bTdZ06Ho/rB+MLp+/7ssDAgGGr6/rJIv394sAADRMEeP9wOIywYH+RYCgc1IZCwf3F5hg0R4dSNBiEgsaYck5xxuimoDEUTnE5xhY+UpVIqbaFU9FVaW4qXEQoYQ6Zg6HvX3XyVerTl4d2/EoXkf+k8vfx1a2uBUwoAi6Nqt1uF/lyyzn9+XyemuECZvriBIxFYgEjYPzymxgjxizUmL6fmtV1fW9gp9yyCCWAst/fMVwu/djR11sE3JCSg6FQcPAI53Q6qc1mw81kvF6WYODG4NdSAANbCjhJwZhsMVmTAk62YFJbkwzMK1tysCZrMCmtSQLGxZbU1mQBBsszwoA5zHY7TfhSVCh2MCZbxgeZtG0gD9fSeQ1XhVoEmBS5hhWMLbfMGUOXClyTvsWA4baGDcyrSuRiDLc1WYCBhyUfT32NKRj+xtW2npS5KhQLmLl5y1y5pnC4KlQWYDB/IABaqk09Bw5rooOZswUHjuH0Kow4Z8PZgKGdOzrrtXWpYlsTFYyrLTh4GOxcGHFZkxUYmx0prIkGxtcWWpn0RaQNTMwKlQ0YfZLnGlKxck0UML626OUaXruCiWVNNmDeCSWatEMvLrMB45t46fE0nEL1axYPRg+lrMHAzb2TZ3ytMUHJHgzCoatm34G7HI+5hR4b4pfLKKGkD+h6vbqMMcgxIaDAjbCAgQtxwAkFhRVMEB0YT8JmDOOYglxKwFgwChgB4xdhYowYI8b4ERBj/HhJjhFjxBg/Ai7GBDnjik4y/h886D+vaEzBhvILucG+LuXZ6FAAAAAASUVORK5CYII="
  },
  {   
      title: "technical assessment - studio graphene",
      description: "front-end technical test presented as part of a successful junior application for an international digital product company headquartered in London.",
      features: "My application showcases parallax scroll effect in two sections, map render, and react and sass abilities. First experiences using  unit testing. ",
      design: "applicants were given a video of a single-page app with seven sections, three of which are animated as the page scrolls. Junior applicants are asked to recreate two of the sections, one of which should be animated.",
      technologies: "react | react hooks | sass | unit testing | parallax scroll | adobe xd ",
      file: "/static/media/no_logo.7771b03e.png"
  }
]


export default project_data;
