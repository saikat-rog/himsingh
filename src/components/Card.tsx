interface CardProps {
  image: string;
  content: string;
}

const Card: React.FC<CardProps> = ({ image, content }) => {
  return (
    <div className="flex flex-col items-center  w-[250px] h-[300px] rounded-xl bg-gray2 p-4 md:p-6 space-y-4 text-center text-white shadow-lg">
      <div className="flex justify-center items-center w-16 h-16 rounded-full bg-secondary p-2">
        <img src={image} alt="Card Image" className="w-10 h-10" />
      </div>
      <p className="text-sm md:text-base">{content}</p>
    </div>
  );
};

interface CardsProps {
  cardData: CardProps[];
}

const Cards: React.FC<CardsProps> = ({ cardData }) => {
  return (
    <div className="relative flex flex-col items-center">
      {/* Cards Container - Adjusted for Overlay Effect */}
      <div className="relative -mt-16 flex flex-wrap justify-center gap-4 lg:gap-8 px-4 lg:px-16  h-full w-full">
        {cardData.map((card, index) => (
          <Card key={index} image={card.image} content={card.content} />
        ))}
      </div>
    </div>
  );
};


export default Cards;
