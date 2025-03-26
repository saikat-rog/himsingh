interface CardProps {
  title: string;
  content: string;
  price?: boolean;
}

const Card: React.FC<CardProps> = ({ title, content, price }) => {
  return (
    <div className="flex flex-col items-center justify-between w-[280px] md:w-[350px] lg:w-[300px] min-h-[250px] rounded-xl bg-gray p-6 space-y-4 text-center shadow-md">
      <h1 className="text-secondary text-lg font-semibold">{title}</h1>
      <p className="flex-grow">{content}</p>

      {/* Price Section */}
      {price && (
        <div className="flex flex-row justify-center items-center space-x-3 w-full">
          <p>
            Rs. <span className="line-through decoration-red-500">6000</span>
          </p>
          <div className="text-secondary font-bold text-[30px]">FREE</div>
        </div>
      )}
    </div>
  );
};

interface CardsProps {
  cardData: CardProps[];
  price?: boolean;
}

const Cards: React.FC<CardsProps> = ({ cardData, price }) => {
  return (
    <div className="items-center ">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center text-white justify-center w-full gap-6 py-10">
        {cardData.map((card, index) => (
          <Card
            key={index}
            title={card.title}
            content={card.content}
            price={price}
          />
        ))}
      </div>
    </div>
  );
};

export default Cards;
