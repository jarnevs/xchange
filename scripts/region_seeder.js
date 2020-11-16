import { v4 as uuidv4 } from 'uuid';
import faker from 'faker';
import { admin, app, db, generateTimestamps,generateValueBetweenMinAndMax } from './firebase';

const regions = [
  {
    id: 1,
    name: 'West - Vlaanderen'
  },
  {
    id: 2,
    name: 'Oost - Vlaanderen'
  },
  {
    id: 3,
    name: 'Antwerpen'
  },
  {
    id: 4,
    name: 'Limburg'
  },
  {
    id: 5,
    name: 'Vlaams-Brabant'
  },
  {
    id: 6,
    name: 'Brussel'
  }
];

(async () => {
  let collectionRef = db.collection('regions');

  // Create a Pokemon
  const createRegion = (region) => {
    // Add a document with faker
    const data = {
      ...region,
      ...generateTimestamps()
    };

    collectionRef.doc(`${data.id}`).set(data)
      .then(() => console.log('done'))
      .catch((error) => {
        console.log(error);
      });
  };

  // Create pokemons via promises
  const addRegionsToDatabase = async () => {
    const promises = [];
    regions.forEach(region => {
      promises.push(createRegion(region));
    });
    return await Promise.all(promises);
  };

  await addRegionsToDatabase(); 

})();