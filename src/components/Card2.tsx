interface CardProps {
  title: string;
  content: string;
  price?: boolean;
}

const Card: React.FC<CardProps> = ({ title, content, price }) => {
  return (
    <div className="flex flex-col items-center w-[300px] rounded-xl bg-gray p-10 space-y-5 text-center">
      <h1 className="text-secondary">{title}</h1>
      <p>{content}</p>
      {/* Price */}
      {price && (
        <div className="flex flex-row justify-center items-center space-x-3 w-full">
          <p>Rs. <span className="line-through decoration-red-500">6000</span></p>
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
    <div className="flex flex-row justify-center w-full space-x-10 py-10">
      {cardData.map((card, index) => (
        <Card key={index} title={card.title} content={card.content} price={price} />
      ))}
    </div>
  );
};

export default Cards;
