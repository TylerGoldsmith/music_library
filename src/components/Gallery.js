// import use context from react
import { useContext } from 'react';
// import data
import { DataContext } from '../context/DataContext';
// import components
import GalleryItem from './GalleryItem';

const Gallery = () => {
    const data = useContext(DataContext)

    const display = data.map((item, index) => {
        return (
            <GalleryItem item={item} key={index} />
        )
    })

    return (
        <div>
            {display}
        </div>
    )
}
export default Gallery