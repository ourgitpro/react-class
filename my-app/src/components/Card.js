const moieyN = "HR";

const habLu =
  "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, minus!";

const siXlu = "10/22/21";
const date = "10/12/21";

function Card() {
  return (
    <div className="card">
      <h2 className="cardtitle">{moieyN}</h2>
      <p className="cardone">{habLu}</p>
      <p className="cardtwo">{date}</p>
    </div>
  );
}

export default Card;
