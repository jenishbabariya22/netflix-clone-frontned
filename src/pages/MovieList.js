import React from 'react';
import MovieCard from './MovieCard'; // Import the MovieCard component

const movies = [
  {
    title: 'The Newest Netflix Movie',
    poster: 'https://occ-0-4875-2164.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABb41Q54VbC8CzPA2XHmhMR6h8XcuNFsmnl_8yMPeSSVZhrDFnigoUA9UVfKLJdN3Iu0mrDBBCk5d3nhbMT04Hgre4Bk1zxOK_pY.jpg?r=c40', // Replace with your poster URL
    description: 'A thrilling movie that you cannot miss!',
  },
  {
    title: 'Another Great Movie',
    poster: 'https://occ-0-4875-2164.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABW5e__kJ6PIrzO0lr9LVCamI-n_baLLWE7J9Fq6-KYO1gowl4a7RsMoZ4ctLJXpAcM0lsJen6Swbp6FGQYl9yM7GgemBfSOBHjw.jpg?r=0c8', // Replace with your poster URL
    description: 'An exciting journey awaits you in this movie!',
  },
  {
    title: 'Another Great Movie',
    poster: 'https://occ-0-4875-2164.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABdqx9Px_o5W0bOhpFSra3mCVyfbhzJVR-nwlZHfsj-4y-eU6C66JSbn0u3RbnH0DZhwjNy0xJwCTxCFlk8CW1Mz9TjS68r_90-o.jpg?r=729', // Replace with your poster URL
    description: 'An exciting journey awaits you in this movie!',
  },
  {
    title: 'Another Great Movie',
    poster: 'https://occ-0-4875-2164.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABSaxW7HqP8BldNO2q-jw9IpV0TUDjtjUmhXvK8nKLXcepLsdypyTzzB5QQqNL6Ow8crexz9qWkKeP9lVBcVPC3fb374Gui5CEC8.jpg?r=7dd', // Replace with your poster URL
    description: 'An exciting journey awaits you in this movie!',
  },
  {
    title: 'Another Great Movie',
    poster: 'https://occ-0-4875-2164.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABTC3EtgbWMT9lOOx3-t2tQz-vf5mFoTA_3Hj41Uo_i-r_0E0Obui7nyjbJuSwmNiKC4whETh7soFT8oh6POmcBssMrDFwTbWnGXHoeLtorhGhEMRftvtqUbbtyS8bTjg_trV.jpg?r=856', // Replace with your poster URL
    description: 'An exciting journey awaits you in this movie!',
  },
  {
    title: 'Another Great Movie',
    poster: 'https://occ-0-4875-2164.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABdH0BNxZ3ULt5oG26EcrQBYiL-pcE7aR-eOUtmGII0GVMDFYLn9SvKxzA9s7B23Q7454Ci7d4PYSwTBJgXWNicHoLevvwY-rm4M.jpg?r=fe7', // Replace with your poster URL
    description: 'An exciting journey awaits you in this movie!',
  },
  {
    title: 'Another Great Movie',
    poster: 'https://occ-0-4875-2164.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABcbrrZJI1H-zQt2aPdVjpaywxUe6a_DWJdt4kvVj5jhjnzRSWNY9kVfynUhDVA6pPpAd4_ih3XdsPYmvy96aWPNWGzA0ors_R8w.jpg?r=7e9', // Replace with your poster URL
    description: 'An exciting journey awaits you in this movie!',
  },
  {
    title: 'Another Great Movie',
    poster: 'https://occ-0-4875-2164.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABYCUnKbHq_vsVpHszs-2nyUsiK0-cMB95AvBH8nvjhlWgqUgnzs-rlguVoQHLNjj6SbSjmryxhPpGXE_022Ck100-aUCSYXe4yIIyIHWkqGHBFw854nc5X8ya5Ctcq3OsAjn.jpg?r=f80', // Replace with your poster URL
    description: 'An exciting journey awaits you in this movie!',
  },
];

const MovieList = () => {
  return (
    <div className="movie-list">
      {movies.map((movie, index) => (
        <MovieCard key={index} movie={movie} />
      ))}
    </div>
  );
};

export default MovieList;
