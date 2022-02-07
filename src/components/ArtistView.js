// import ruseParams form react-router-dom
import { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";

const ArtistView = () => {
  const { id } = useParams();
  const [artistData, setArtistData] = useState([]);
  console.log(id)

  useEffect(() => {
    const API_URL = `https://itunes.apple.com/lookup?id=${id}&entity=album`;
    const fetchData = async () => {
      const response = await fetch(API_URL);
      const resData = await response.json();
      console.log(resData)
      setArtistData(resData.results);
    };
    fetchData();
  }, [id]);

  const justAlbums = artistData.filter(entry => entry.collectionType === 'Album')

  const renderAlbums = justAlbums.map((album, i) => {
    return (
        <div key={i}>
            <p>{album.collectionName}</p>
        </div>
    )
})

return (
    <div>
        <h2>The id passed was: {id}</h2>
        <p>Artist Data Goes Here!</p>
        {renderAlbums}
    </div>
)
};

export default ArtistView;