
type PhotoCardProps = {
  id:number,
  title:string,
  url:string
}

const PhotoCard = ({  title, url }:PhotoCardProps) => {
  return (
    <div className="max-w-xs rounded overflow-hidden shadow-lg">
      <img className="w-full cursor-pointer hover:scale-105" src={url} alt={title} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2 text-purple-600 hover:text-purple-900
        ">{title}</div>
      </div>
    </div>
  );
};

export default PhotoCard;
