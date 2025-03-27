interface CardProps {
  image: string;
  content: string;
}

const Card: React.FC<CardProps> = ({ image, content }) => {
  return (
    <div className="flex flex-col items-center md:w-[300px] md:h-[300px] w-[250px] h-[250px] rounded-xl bg-gray p-10 space-y-5 text-center">
      <div className="flex rounded-full bg-secondary p-2">
      <img src={image} alt="Card Image" className="w-full h-10" />
      </div>
      <p>{content}</p>
    </div>
  );
};

interface CardsProps {
  cardData: CardProps[];
}

const Cards: React.FC<CardsProps> = ({ cardData }) => {
  return (
    <div className="flex flex-col lg:flex-row items-center text-white justify-center w-full space-y-5 lg:space-x-20 py-10 lg:py-0">
      {cardData.map((card, index) => (
        <Card key={index} image={card.image} content={card.content} />
      ))}
    </div>
  );
};

export default Cards;
