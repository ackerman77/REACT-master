import React from 'react';


//<h2 className="text-center text-white bg-primary m-2">Найденные животные</h2>

const Cards = (props) => {
    return (
<div>
<h2 className="text-center text-white bg-primary m-2">{props.card.name}</h2>
</div>
  );
};

export default Cards;