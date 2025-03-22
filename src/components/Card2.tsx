interface CardProps {
    title: string;
    content: string;
  }
  
  const Card: React.FC<CardProps> = ({ title, content }) => {
    return (
      <div className="flex flex-col items-center w-[300px] rounded-xl bg-gray p-10 space-y-5 text-center">
        <h1 className="text-secondary">{title}</h1>
        <p>{content}</p>
      </div>
    );
  };
  
  interface CardsProps {
    cardData: CardProps[];
  }
  
  const Cards: React.FC<CardsProps> = ({ cardData }) => {
    return (
      <div className="flex flex-row justify-center w-full space-x-10 py-10">
        {cardData.map((card, index) => (
          <Card key={index} title={card.title} content={card.content} />
        ))}
      </div>
    );
  };
  
  export default Cards;
  