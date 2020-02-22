import React from 'react';
import CardRow, { ICard } from './../components/internal/CardsRow';

function Cards() {
  const cards: ICard[] = [
    {
      id: 1, 
      image_url: "https://www.charizard.dk/yugioh/yu_images/MC1-EN001_ExodiaTheForbiddenOne300.jpg",
      description: "Exodia is an archetype of DARK Spellcaster monsters, with its first member released in Legend of Blue Eyes White Dragon and its first support released in Millennium Box Gold Edition",
      title: "Exodia's HEAD",
      note: "This monster is Invictible"
    },
    {
      id: 2, 
      image_url: "https://www.kelz0r.dk/magic/images//img2/ygo/darklegends/dlg60.jpg",
      description: "Exodia is an archetype of DARK Spellcaster monsters, with its first member released in Legend of Blue Eyes White Dragon and its first support released in Millennium Box Gold Edition",
      title: "Exodia's left LEG",
      note: "This monster is Invictible"
    },
    {
      id: 3, 
      image_url: "https://images-na.ssl-images-amazon.com/images/I/51yI9WrPlKL.jpg",
      description: "Exodia is an archetype of DARK Spellcaster monsters, with its first member released in Legend of Blue Eyes White Dragon and its first support released in Millennium Box Gold Edition",
      title: "Exodia's right LEG",
      note: "This monster is Invictible"
    },
    {
      id: 4, 
      image_url: "https://images-na.ssl-images-amazon.com/images/I/51cWo4gQeML.jpg",
      description: "Exodia is an archetype of DARK Spellcaster monsters, with its first member released in Legend of Blue Eyes White Dragon and its first support released in Millennium Box Gold Edition",
      title: "Exodia's right arm",
      note: "This monster is Invictible"
    },
    {
      id: 5, 
      image_url: "https://crystal-cdn3.crystalcommerce.com/photos/6280273/large/LeftArmoftheForbiddenOne-LDK2-EN-C-1E.png",
      description: "Exodia is an archetype of DARK Spellcaster monsters, with its first member released in Legend of Blue Eyes White Dragon and its first support released in Millennium Box Gold Edition",
      title: "Exodia's left arm",
      note: "This monster is Invictible"
    }
  ];
 
  return (
    <div>
      <CardRow cards={cards}/>
    </div>
  );
}

export default Cards;