const apiConfig = {
  baseUrl: "https://api.themoviedb.org/3/",
  apiKey: "ee699edd5b9cb5bea4900059932aeaee",
  originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
  w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`,
};

export default apiConfig;
