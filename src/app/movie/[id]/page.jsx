import React from 'react'
import Image from 'next/image';

const page = async({params}) => {
  const id = params.id;
  const url =`https://netflix54.p.rapidapi.com/title/details/?ids=${id}&lang=en`;
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
  const main_data = data[0].details;
  console.log(main_data.backgroundImage.url);

  return (
    // <div>Movie Dynamic page : {id}</div>

    <div className="container py-8">
      <div className="row">
        <div>
          <h2 className='text-[4rem] font-bold'>
            {main_data.title}
          </h2>
        </div>
        <div>
          <Image src={main_data.backgroundImage.url} alt={`cover`} width={800} height={0} />
        </div>
        <div>
          <p>{main_data.synopsis}</p>
        </div>
      </div>
    </div>
  )
}

export default page