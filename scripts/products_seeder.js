import { v4 as uuidv4 } from 'uuid';

import { admin, app, db, generateTimestamps } from './firebase';

const products = [
  {
    name: 'Blender',
    description : 'De Moulinex Blendforce 2 LM4205 is een compacte blender die erg gebruiksvriendelijk is en met gemak verse ingrediënten, bevroren vruchtjes of ijs fijn maalt. De blender is eenvoudig te bedienen met de draaiknop waarmee je keuze hebt tussen 2 snelheden en een pulsestand. De blender heeft een grote kunststof blenderkan, een innovatief Air Cooling systeem voor optimale motorduurzaamheid en diverse veiligheidsfuncties (waaronder Smart Lock technology) waardoor de messen nooit zullen draaien als de blenderkan niet goed bevestigd is.',
    thumbnail: 'https://media.s-bol.com/RoJ8o9GZyPVY/460x840.jpg',
    rentTill: 1592517600000,
    images: [
      'https://media.s-bol.com/7L056MvlAP3Q/451x840.jpg',
      'https://media.s-bol.com/mQjow6AB17AR/550x366.jpg',
      'https://media.s-bol.com/RoJxg0gPOQWE/550x550.jpg',
      'https://media.s-bol.com/BLm1L4nwozJW/124x140.jpg'
    ],
    region: 5
  },
  {
    name: 'Grasmachine',
    description : 'De Ferm LMM1012 grasmaaier heeft een hoog vermogen van 1300W en een maaibreedte van 32cm waardoor het maaien van jouw gazon een eitje is! Het lichte gewicht van 8.1kg in combinatie met de transporthendel maakt dat de grasmaaier gemakkelijk op te tillen is en prettig vervoerbaar. Ook is het mogelijk de grasmaaier op te bergen zonder dat deze al teveel ruimte in je schuur in beslag neemt dankzij de inklapbare handgreep. De grasmaaier is voorzien van een kabeltrekontlasting, zo wordt voorkomen dat tijdens het maaien de stroomkabel uit het verlengsnoer wordt getrokken.',
    thumbnail: 'https://media.s-bol.com/gLolB8j3JYKr/550x610.jpg',
    rentTill: 1593122400000,
    images: [
      'https://media.s-bol.com/gLolB3xopygZ/550x366.jpg',
      'https://media.s-bol.com/7LZg3W4qXZyG/550x513.jpg',
      'https://media.s-bol.com/mQxDZOWmWpDr/550x386.jpg',
      'https://media.s-bol.com/gLowJGRAYV2j/550x366.jpg'
    ],
    region: 2
  },
  {
    name: 'Kolonisten Van Catan',
    description : 'Vernieuwde editie van het bekende handelsspel de Kolonisten van Catan. Het spel bevat miniaturen en ook het artwork is volledig aangepast. Zo kan je je nog meer inleven in de wereld van Catan!',
    thumbnail: 'https://media.s-bol.com/DkkV2A9oqR3n/550x581.jpg',
    rentTill: 1592258400000,
    images: [
      'https://media.s-bol.com/BBopKOALWmvk/550x413.jpg',
      'https://media.s-bol.com/BBopKA9ynBqJ/550x365.jpg',
      'https://media.s-bol.com/738zv7wGQMqQ/550x366.jpg',
      'https://media.s-bol.com/7lpNoxN5xk1/550x483.jpg'
    ],
    region: 1
  },
  {
    name: 'The Hunger Games',
    description : 'Katniss is a 16-year-old girl living with her mother and younger sister in the poorest district of Panem, the remains of what used be the United States. Long ago the districts waged war on the Capitol and were defeated. As part of the surrender terms, each district agreed to send one boy and one girl to appear in an annual televised event called, The Hunger Games. The terrain, rules, and level of audience participation may change but one thing is constant: kill or be killed. When Kat\'s sister is chosen by lottery, Kat steps up to go in her place.',
    thumbnail: 'https://media.s-bol.com/JJYw5NkQnN9/550x830.jpg',
    rentTill: 1593468000000,
    images: [],
    region: 3
  },
  {
    name: 'Airco',
    description : 'De Tristar mobiele airconditioner kan overal ingezet worden waar verkoeling nodig is. Dankzij het mooie en compacte design neemt de airco zo min mogelijk ruimte in en verplaats je hem eenvoudig. Het verkoelende effect is direct merkbaar en biedt dan ook verkoeling op warme zomerdagen. Bovendien verbruikt de airconditioner weinig energie.',
    thumbnail: 'https://media.s-bol.com/YEpoEyLWR5B0/454x840.jpg',
    rentTill: 1594936800000,
    images: [
      'https://media.s-bol.com/g5K7LvkwG1Aj/521x840.jpg',
      'https://media.s-bol.com/Bgp1Lx1L1vJW/550x550.jpg',
      'https://media.s-bol.com/mw67QAKzVAyG/550x550.jpg',
      'https://media.s-bol.com/xnAQrElZYPJz/550x398.jpg'
    ],
    region: 6
  },
  {
    name: 'Mixer',
    description : 'Maak eenvoudig heerlijke luchtige cakes en brood met de Philips Viva Collection HR3741/00 mixer. De luchtige, kegelvormige kloppers zorgen voor een kortere kloptijd en glad cakebeslag. Met de krachtige moter van 450 Watt komt u moeiteloos door het taaiste deeg.',
    thumbnail: 'https://media.s-bol.com/7L0ngrYMXBBG/550x532.jpg',
    rentTill: 1592517600000,
    images: [
      'https://media.s-bol.com/8qyB9QOMWo2W/370x840.jpg',
      'https://media.s-bol.com/Y4xNoNGJGl0/550x366.jpg',
      'https://media.s-bol.com/76xWAPOpYn3O/548x840.jpg'
    ],
    region: 4
  },
  {
    name: 'Pokemon Monopoly',
    description : 'Gotta Catch \'em all: vang alle Pokémon in deze speciale Pokémon Monopoly Kanto editie! Je reis begeeft zich door acht strijdvelden, waarbij je zoveel mogelijk probeert te handelen om het sterkste Pokémon team samen te stellen. Het spel bevat 6 unieke speelstukken, namelijk Pikachu, Bulbasaur, Charmander, Squirtle, Eevee en Jigglypuff.',
    thumbnail: 'https://media.s-bol.com/xOBxEy0PgVn/550x422.jpg',
    rentTill: 1593554400000,
    images: [
      'https://media.s-bol.com/3BpX82L900O/550x497.jpg',
      'https://media.s-bol.com/g1GE44Kp7R9/550x550.jpg',
      'https://media.s-bol.com/Bx01V2oBE1Y/550x430.jpg',
      'https://media.s-bol.com/mZZVmBw60gPO/550x364.jpg'
    ],
    region: 2
  },
  {
    name: 'A Song Of Ice And Fire 1',
    description : 'From a master of contemporary fantasy comes the first novel of a landmark series unlike any you’ve ever read before. With A Game of Thrones, George R. R. Martin has launched a genuine masterpiece, bringing together the best the genre has to offer. Mystery, intrigue, romance, and adventure fill the pages of this magnificent saga, the first volume in an epic series sure to delight fantasy fans everywhere.',
    thumbnail: 'https://media.s-bol.com/312mz092oKEp/547x840.jpg',
    rentTill: 1609369200000,
    images: [
      'https://media.s-bol.com/mZQDnNWVL8Br/520x840.jpg'
    ],
    region: 4
  },
  {
    name: 'Gitaar',
    description : 'De Moulinex Blendforce 2 LM4205 is een compacte blender die erg gebruiksvriendelijk is en met gemak verse ingrediënten, bevroren vruchtjes of ijs fijn maalt. De blender is eenvoudig te bedienen met de draaiknop waarmee je keuze hebt tussen 2 snelheden en een pulsestand. De blender heeft een grote kunststof blenderkan, een innovatief Air Cooling systeem voor optimale motorduurzaamheid en diverse veiligheidsfuncties (waaronder Smart Lock technology) waardoor de messen nooit zullen draaien als de blenderkan niet goed bevestigd is.',
    thumbnail: 'https://media.s-bol.com/Yoq5NE5R01O/309x840.jpg',
    rentTill: 1592517600000,
    images: [
      'https://media.s-bol.com/R6YPM6przKJw/313x840.jpg',
      'https://media.s-bol.com/R6YP893MJ6EY/310x840.jpg',
      'https://media.s-bol.com/gJYKWp1ozMX6/550x412.jpg',
      'https://media.s-bol.com/mZRY2woX1oA0/550x274.jpg'
    ],
    region: 5
  },
  {
    name: 'Babybed',
    description : 'De eenvoudige vormgeving van ledikant Harold is perfect te combineren met andere meubels. Het ledikant is vervaardigd van massief beukenhout zodat het goed tegen een stootje kan. Voor de afwerking is er gebruik gemaakt van kindvriendelijke lak. De bodem is in drie hoogtes verstelbaar.',
    thumbnail: 'https://media.s-bol.com/5QEQOgEBGlyR/550x471.jpg',
    rentTill: 1604358000000,
    images: [
      'https://media.s-bol.com/5QEQOgEBGlyR/550x471.jpg',
      'https://media.s-bol.com/7171Qk7EKn3A/550x550.jpg',
      'https://media.s-bol.com/8171Rl7GLo2o/550x550.jpg',
      'https://media.s-bol.com/6X7XPj7DJm89/550x550.jpg'
    ],
    region: 1
  },
];

(async () => {
  // Get messages collection
  let collectionRef = db.collection('products');

  // Create a Bookmark
  const createProduct = (product) => {
    // Add a document with faker
    const data = {
      id: uuidv4(),
      ...product,
      ...generateTimestamps()
    };

    collectionRef.doc(`${data.id}`).set(data)
      .then(documentReference => {
        console.log(`Added document with name: ${documentReference.id}`);
      })
      .catch((error) => console.log(error))
  };

  // Create bookmarks via promises
  const createProducts = async () => {
    const promises = [];
    
    products.forEach(product => {
      promises.push(createProduct(product));
    });
    return await Promise.all(promises);
  };

  await createProducts(); 
})();
