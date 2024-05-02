
interface CardProps {
  title: string;
  body: string;
}

const Card: React.FC<CardProps> = ({ title, body }) => {
  return (
    <div className="max-w-sm bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base">{body}</p>
      </div>
    </div>
  );
};

export default Card;
