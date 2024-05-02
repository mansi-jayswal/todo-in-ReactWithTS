
import PhotoCard from '../components/PhotoCard';

interface Photo {
  id: number;
  title: string;
  url: string;
}
const photos : Photo[] = [
  {
    id:1,
    title:'hills',
    url:'https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?cs=srgb&dl=pexels-souvenirpixels-417074.jpg&fm=jpg'
  },
  {
    id:2,
    title:'food',
    url:'https://cdn.britannica.com/36/123536-050-95CB0C6E/Variety-fruits-vegetables.jpg'
  },
  {
    id:3,
    title:'river',
    url:'https://images.unsplash.com/photo-1437482078695-73f5ca6c96e2?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cml2ZXJ8ZW58MHx8MHx8fDA%3D'
  },
  {
    id:4,
    title:'hills',
    url:'https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?cs=srgb&dl=pexels-souvenirpixels-417074.jpg&fm=jpg'
  },
  {
    id:5,
    title:'food',
    url:'https://cdn.britannica.com/36/123536-050-95CB0C6E/Variety-fruits-vegetables.jpg'
  },
  {
    id:6,
    title:'river',
    url:'https://images.unsplash.com/photo-1437482078695-73f5ca6c96e2?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cml2ZXJ8ZW58MHx8MHx8fDA%3D'
  },
]
const DisplayCards = () => {
  return (
    <>
     <div className=''>
     <h1 className='bg-pink-200  font-semibold  text-center text-green-600 mt-5'>Image with names</h1>
      </div>
    <div className="flex justify-center items-center h-screen bg-gray-100 mt-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
        {photos.map((photo) => (
          <PhotoCard
            key={photo.id}
            id={photo.id}
            title={photo.title.toUpperCase()}
            url={photo.url}
          />
        ))}
      </div>
    </div>
    </>
  );
};

export default DisplayCards;