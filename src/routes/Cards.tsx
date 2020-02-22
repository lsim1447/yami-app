import React from 'react';
import { ICard } from './../components/external/YuGiOhCard';
import CardMap from './../components/external/CardMap';


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
    },
    {
      id: 6, 
      image_url: "https://www.kelz0r.dk/magic/images//img2/ygo/tcglegendarycollection/tcg7.jpg",
      description: "Exodia is an archetype of DARK Spellcaster monsters, with its first member released in Legend of Blue Eyes White Dragon and its first support released in Millennium Box Gold Edition",
      title: "Exodia's left arm",
      note: "This monster is Invictible"
    },
    {
      id: 7, 
      image_url: "https://www.kelz0r.dk/magic/images//img2/ygo/darklegends/dlg38.jpg",
      description: "Exodia is an archetype of DARK Spellcaster monsters, with its first member released in Legend of Blue Eyes White Dragon and its first support released in Millennium Box Gold Edition",
      title: "Exodia's left arm",
      note: "This monster is Invictible"
    },
    {
      id: 8, 
      image_url: "https://i.skyrock.net/5745/74975745/pics/2931669809_1_3.jpg",
      description: "Exodia is an archetype of DARK Spellcaster monsters, with its first member released in Legend of Blue Eyes White Dragon and its first support released in Millennium Box Gold Edition",
      title: "Exodia's left arm",
      note: "This monster is Invictible"
    },
    {
      id: 9, 
      image_url: "https://i.etsystatic.com/16411733/r/il/0a4a75/1675063646/il_570xN.1675063646_qb6j.jpg",
      description: "Exodia is an archetype of DARK Spellcaster monsters, with its first member released in Legend of Blue Eyes White Dragon and its first support released in Millennium Box Gold Edition",
      title: "Exodia's left arm",
      note: "This monster is Invictible"
    },
    {
      id: 10, 
      image_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQHUUnfEuPeQgFktI92NXigN46R-eyIyTab1ifz48JYV2uGKZ93",
      description: "Exodia is an archetype of DARK Spellcaster monsters, with its first member released in Legend of Blue Eyes White Dragon and its first support released in Millennium Box Gold Edition",
      title: "Exodia's left arm",
      note: "This monster is Invictible"
    },
    {
      id: 11, 
      image_url: "https://www.sell2bbnovelties.com/mm5/yugioh/YU_RP01EN024_480x705.jpg",
      description: "Exodia is an archetype of DARK Spellcaster monsters, with its first member released in Legend of Blue Eyes White Dragon and its first support released in Millennium Box Gold Edition",
      title: "Summoned Skull",
      note: "This monster is Invictible"
    }
  ];
 
  return (
    <div>
      <CardMap cards={ cards }/>
    </div>
  );
}

export default Cards;