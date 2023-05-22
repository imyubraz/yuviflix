import React from "react";
import Link from "next/link";
import Image from 'next/image';

export const metadata = {
  title: "YuviFlix | Movie",
  description: "Movie Page",
};

const MovieCard = ({data})=>{
  const{id, type, title, synopsis} = data.jawSummary;
  return(
    <>
    <div className="card border shadow-lg rounded-xl hover:shadow-xl">
      <div className="row">
        <div className="row">
          <Image src={data.jawSummary.backgroundImage.url} alt={`${title}_thumbnail`} width={400} height={0} />
        </div>
        <div className="row p-4">
          <h2>{title}</h2>
          <p>{synopsis}</p>
          <Link href={`/movie/${id}`} className="font-semibold">View More</Link>
        </div>
      </div>
      <p>{data.id}</p>
    </div>
    </>
  )
}

const Movie = async() => {

  const url ="https://netflix54.p.rapidapi.com/search/?query=stranger&offset=0&limit_titles=20&limit_suggestions=20&lang=en";
  // const url = process.env.NETFLIX_API;
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "4921cc1d7bmsh2d40199fe729290p1aea0ejsn0d741821f05d",
      "X-RapidAPI-Host": "netflix54.p.rapidapi.com",
    },
  };

  const res = await fetch(url, options);
  const data = await res.json();
  console.log(data);
  const main_data = data.titles;

  return (
    <>
      <div className="container">
        <h1>Movie Page</h1>

        <h2>Series & Movies</h2>
        <div className="cards grid grid-cols-4 gap-8">
        {
          main_data.map((each)=>{
            return(
              <MovieCard key={each.id} data={each} />
            )
          })
        }
        </div>
        {/* <Link href={`/movie/123`}>Go to Movie</Link> */}
      </div>
    </>
  );
};

export default Movie;
