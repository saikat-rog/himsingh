interface CardProps {
  image: string;
  content: string;
}

const Card: React.FC<CardProps> = ({ image, content }) => {
  return (
    <div className="flex flex-col items-center w-[250px] md:w-[500px] lg:w-[300px] rounded-xl bg-gray p-10 space-y-5 text-center">
      <img src={image} alt="Card Image" className="w-full h-auto" />
      <p>{content}</p>
    </div>
  );
};

interface CardsProps {
  cardData: CardProps[];
}

const Cards: React.FC<CardsProps> = ({ cardData }) => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-center w-full space-y-5 lg:space-x-10 py-10 lg:py-0">
      {cardData.map((card, index) => (
        <Card key={index} image={card.image} content={card.content} />
      ))}
    </div>
  );
};

export default Cards;
