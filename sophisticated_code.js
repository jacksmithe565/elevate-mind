/* 
Filename: sophisticated_code.js

Description: This code is a complex implementation of a social media analytics tool. It takes a JSON object of user data, performs various calculations, and outputs valuable insights about the users' social media behavior and engagement.

Note: This code requires the 'axios' library to make API requests. Make sure to install it before running this code.

*/

// Importing the necessary libraries
const axios = require('axios');

// JSON object representing user data
const userData = {
  users: [
    {
      id: 1,
      name: "John",
      username: "johndoe",
      followers: 563,
      posts: [
        {
          id: 1,
          content: "Hello world!",
          likes: 25,
          comments: 5
        },
        {
          id: 2,
          content: "Excited for the weekend!",
          likes: 40,
          comments: 10
        },
        // More posts...
      ]
    },
    {
      id: 2,
      name: "Emily",
      username: "emilysmith",
      followers: 853,
      posts: [
        {
          id: 1,
          content: "Enjoying the sunshine!",
          likes: 35,
          comments: 8
        },
        {
          id: 2,
          content: "New recipe alert!",
          likes: 65,
          comments: 15
        },
        // More posts...
      ]
    },
    // More users...
  ]
};

// Perform API request to get data
axios.get('https://api.example.com/data')
  .then(response => {
    const externalData = response.data;

    // Main analytics function
    function analyzeUser(user) {
      const engagementRate = (user.followers / user.posts.length).toFixed(2);
      let totalLikes = 0;
      let totalComments = 0;

      user.posts.forEach(post => {
        totalLikes += post.likes;
        totalComments += post.comments;
      });

      const avgLikesPerPost = (totalLikes / user.posts.length).toFixed(2);
      const avgCommentsPerPost = (totalComments / user.posts.length).toFixed(2);

      const userAnalysis = {
        userId: user.id,
        name: user.name,
        username: user.username,
        followers: user.followers,
        engagementRate: engagementRate,
        totalLikes: totalLikes,
        totalComments: totalComments,
        avgLikesPerPost: avgLikesPerPost,
        avgCommentsPerPost: avgCommentsPerPost
      };

      return userAnalysis;
    }

    // Run analytics for each user
    const analyticsResults = userData.users.map(user => analyzeUser(user));

    console.log("Social Media Analytics Results:");
    console.log(analyticsResults);
  })
  .catch(error => {
    console.log("Error: ", error);
  });

// More complex code...
// ...