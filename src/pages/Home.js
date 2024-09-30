import React from 'react';
import MovieList from './MovieList';
import Slider from './Slider';

const movies = [
  { id: 1, title: 'Stranger Things', image: 'https://occ-0-4875-2164.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABRVyP50HwmyniqKRkAHz392s9LlSFvxHuhTDRTG3hX0mPyYikcJKJsM0YIaaGl6e7PpJGfZV-IujuOXRQl1zZxvTAZCcMPybsNCf6aLBX416X-MXgV0dO5gLfOKcPs0S36WS1TRjKK5MH4SXJCdWyXkN3px77LoGAwqN7PE5YKiEsb-h9zKmcT0mcGD2CXIIXGRPtSM50BgMVrNww-DOERZJvlA-CEgSGIkv-QZISB3tHnV6-fOndhdBtUDUoTBlkqr2U4mfzVYgaTn2QQXNffq4uK5jlMJAKf9J7chsU_QLykMMY4C91GbI.jpg?r=137' },
  { id: 2, title: 'Money Heist', image: 'https://occ-0-4875-2164.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABdslT2-Dsi2JeVh5IcsLSIhwlAxOii_q5TIBdh5NPGBv7lm5S7bBxPlkM6xlycXEDbSyRLRCBWVBJWb7qbNPLc5W_ejovp71Ao0.jpg?r=121' },
  { id: 3, title: 'The Witcher', image: 'https://occ-0-4875-2164.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABQ1edpLJyw_8tln7ddFRXWXX4EkxJpBzGMSOGw9GyqTvsXU0gIseJIhhG-GMJ_LAJNHbRMVBZkI22uZuPLfMf7kErP0_QUoFy5A.jpg?r=e7d' },
];

const Home = () => {
  return (
    <div className="bg-black text-white min-h-screen">
      <div className="p-4">
        <Slider />
        <h2 className="text-3xl mb-4">Popular Shows</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {movies.map((movie) => (
            <div key={movie.id} className="bg-gray-800 rounded-md p-4 shadow-md">
              <img src={`${movie.image}`} alt={movie.title} className="rounded-md mb-2 w-full h-48 object-cover" />
              <h3 className="text-xl">{movie.title}</h3>
            </div>
          ))}
        </div>
      </div>
      <h1 style={{ textAlign: "center", fontSize: "50px", fontWeight: "20px" }}>Latest Movies</h1>
      <MovieList />
    </div>
  );
};

export default Home;
