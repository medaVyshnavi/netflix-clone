export const USER_LOGO =
  "https://occ-0-993-988.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABY20DrC9-11ewwAs6nfEgb1vrORxRPP9IGmlW1WtKuaLIz8VxCx5NryzDK3_ez064IsBGdXjVUT59G5IRuFdqZlCJCneepU.png?r=229";
export const LOGO =
  "https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png";
export const profile_photo = "https://example.com/jane-q-user/profile.jpg";

export const OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: "Bearer " + process.env.REACT_APP_TMDB_KEY,
  },
};

export const MOVIE_POSTER_CDN_LINK = "https://image.tmdb.org/t/p/w200/";

export const BACKGROUND_IMAGE =
  "https://assets.nflxext.com/ffe/siteui/vlv3/a09bb938-2d90-42ae-986e-5a3e4abf9e77/f81f5535-4709-4205-be63-32f3706a64c5/JP-en-20231113-popsignuptwoweeks-perspective_alpha_website_large.jpg";

export const OPEN_API_KEY = process.env.REACT_APP_OPENAI_KEY;
