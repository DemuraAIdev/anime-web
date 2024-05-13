const { url } = require("inspector");

const config = {
  title: "AnimeSearch",
  author: [
    {
      name: "Vahry Iskandar",
      url: "https://vahry.my.id/",
    },
  ],
  description: "Anime Search Engine Based on MAL, AniList API",
  siteURL: "https://anime.vahry.my.id/",
  language: "en-us",
  email: "cyberaioff@gmail.com",
  locale: "en-US",
  socialBanner: "/images/twitter-card.png",
  repo: "https://github.com/DemuraAIdev/anime-web",
  analytics: {
    umami: {
      websiteId: "b7da16f6-1118-431f-841f-d345b84bd5d4",
      url: "https://umami.vahry.my.id/script.js",
    },
  },
};

module.exports = config;
