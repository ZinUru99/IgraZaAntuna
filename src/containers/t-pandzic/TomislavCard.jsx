import "./TomislavCard.css";

export default function TomislavCard({
  card,
  handleChoice,
  flipped,
  disabled,
}) {
  const handleClick = () => {
    if (!disabled) {
      handleChoice(card);
    }
  };

  return (
    <div className="card">
      <div className={flipped ? "flipped" : ""}>
        <img className="front" src={card.src} alt="card front" />
        <img
          className="back"
          onClick={handleClick}
          src={require("./tpandzic-images/cover.png")}
          alt="card back"
        />
      </div>
    </div>
  );
}
