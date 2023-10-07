// Generate sample data
const sampleTrainers = [
  {
    name: "Elite Dog Trainers",
    location: "Scottsdale, Arizona",
    imageUrl: "https://images.pexels.com/photos/7788657/pexels-photo-7788657.jpeg",
  },
  {
    name: "Lisa Smith",
    location: "Flagstaff, Arizona",
    imageUrl: "https://images.pexels.com/photos/7210458/pexels-photo-7210458.jpeg",
  },
  {
    name: "Happy Pups Trainers",
    location: "Phoenix, Arizona",
    imageUrl: "https://images.pexels.com/photos/9632843/pexels-photo-9632843.jpeg",
  },
  {
    name: "Martin Hernandez",
    location: "Mesa, Arizona",
    imageUrl: "https://images.pexels.com/photos/7210267/pexels-photo-7210267.jpeg",
  }
];

const sampleAnimals = [
  {
    species: "Dog",
    gender: "Male",
    name: "Fido",
    breed: "Terrier",
    age: "4",
    training: "Certified Service Animal",
    tags: ["Good with kids", "Spayed/neutered", "Enjoys other pets", "Calm", "Hearing support", "Mobility support"],
    imageUrl: "https://images.pexels.com/photos/3361739/pexels-photo-3361739.jpeg",
  },
  {
    species: "Dog",
    gender: "Male",
    name: "Bear",
    breed: "Poodle",
    age: "4",
    training: "Emotional Support Animal",
    tags: ["Friendly", "Spayed/neutered", "Anxiety support", "PTSD support"],
    imageUrl: "https://images.pexels.com/photos/3658120/pexels-photo-3658120.jpeg",
  },

  {
    species: "Dog",
    gender: "Female",
    name: "Fido",
    breed: "Terrier",
    age: "4",
    training: "Certified Service Animal",
    tags: ["Good with kids", "Spayed/neutered", "Enjoys other pets", "Calm", "Hearing support", "Mobility support"],
    imageUrl: "https://images.pexels.com/photos/895259/pexels-photo-895259.jpeg",
  },
  {
    species: "Dog",
    gender: "Female",
    name: "Fido",
    breed: "Terrier",
    age: "4",
    training: "Certified Service Animal",
    tags: ["Good with kids", "Spayed/neutered", "Enjoys other pets", "Calm", "Hearing support", "Mobility support"],
    imageUrl: "https://images.pexels.com/photos/3361739/pexels-photo-3361739.jpeg",
  },
  {
    species: "Dog",
    gender: "Male",
    name: "Bear",
    breed: "Poodle",
    age: "2",
    training: "Emotional Support Animal",
    tags: ["Friendly", "Spayed/neutered", "Anxiety support", "PTSD support"],
    imageUrl: "https://images.pexels.com/photos/3658120/pexels-photo-3658120.jpeg",
  },

  {
    species: "Dog",
    gender: "Female",
    name: "Fido",
    breed: "Terrier",
    age: "4",
    training: "Certified Service Animal",
    tags: ["Good with kids", "Spayed/neutered", "Enjoys other pets", "Calm", "Hearing support", "Mobility support"],
    imageUrl: "https://images.pexels.com/photos/895259/pexels-photo-895259.jpeg",
  },
  {
    species: "Cat",
    gender: "Male",
    name: "Lucky",
    breed: "Calico",
    age: "3",
    training: "Certified Emotional Support Animal",
    tags: ["Calm/Playful", " Spayed/neutered", "Enjoys Cuddling", "Supportive"],
    imageUrl: "",
  }
  {
    species: "Cat",
    gender: "Female",
    name: "Lia",
    breed: "Bombay Cat",
    age: "4",
    training: "Certified Emotional Support Animal",
    tags: ["Cute", "Playful/Energetic", "Many Kisses", "Attention Seeking", "Happy/Jumpy"],
    imageUrl:"",

  }
  {
    species: "Dog",
    gender: "Male",
    name: "Oso",
    breed: "Malitipoo",
    age: "7",
    training: "Certified Service Animal",
    tags : ["Friendly", "Affectionate", "Playful/Funny", "Gentle", "Loves Snugs/Kisses"],
    imageUrl: "",
  }
  {
    species: "Dog",
    gender: "Female",
    name: "Cookie",
    breed: "Mixed",
    age: "1",
    training: "Certified Emotional Support Animal",
    tags: ["Short Coat", "Good with small dogs", "Great with kids", "Playful/Caring"],
    imageUrl: " ",
    
  }
  {
    species: "Dog",
    gender: "Male",
    name: "Charlie",
    breed: "Mixed",
    age: "1",
    training: "Certifiied Emotional Support Animal",
    tags: ["Sweet/Loving", "Gentle", "Attention lover", "Good Energy", "Adorable"],
    imageUrl: " ",
    }
    {
      species: "Dog",
      gender: "Male",
      name: "Coda",
      breed: "Mixed",
      age: "1",
      training: "Certified Emotional Support Animal",
      tags: ["Trained", "Listens Well", "Good Temperament", "Obdient", "Loves to Play"],
      imageUrl:" ",
    }
    {
      species: "Dog",
      gender: "Male",
      name: "Denny",
      breed: "Golden Retriever",
      age: "2",
      training: "Certified Service Animal",
      tags: ["Energetic", "Well Trained", "Helpful/Obidient", "Friendly"],
      imageUrl: "",
    }
    {
      species: "Dog",
      gender: "Female",
      name: "Gigi",
      breed: "Pitbull",
      age: "3",
      training: "Certified Emotional Support Animal",
      tags: ["Cute/Pretty","Unique","Wonderful/Obidient", "Well-Trained", "Great Companion", "Anxiety Support", "Emotional Support"],
      imageUrl: "",

    }
    {
      species: "Dog",
      gender: "Male",
      name: "Handsome",
      breed: "Golden Retriever",
      age: "2",
      training: "Certified Service Animal",
      tags: ["Affectionate", "Caring", "Gentle", "Intelligent/Helpful", "Responds Quickly"],
      imageUrl: " ",
    }
    {
      species: "Dog",
      gender: "Male",
      name: "Loco",
      breed: "Labrador Retriever",
      age: "2.5",
      training: "Certified Service Animal",
      tags: ["Even Tempered", "Friendly", "Loving", "Outgoing", "Agile",]
      imageUrl:" ",
    }
    {
      species: "Dog",
      gender: "Female",
      name: "Lyla", 
      breed: "Labrador Retriever",
      age: "2",
      training:"Certified Service Animal",
      tags: ["Kind/Warm", "Loving/Playful", "Cling", "Loves to Play", "Gentle"],
      imageUrl: " ",
    }
    {
      species: "Dog",
      gender: "Male",
      name: "Oscar",
      breed: "Pitbull",
      age: "3",
      training: "Certified Emotional Support Animal",
      tags: ["Funny", "Adorable", "Enjoys' Playing", "Playful", "Stubborn/Loving", "Affectionate"],
      imageUrl: " ",
    }
    {
      species: "Dog",
      gender: "Female",
      name: "Phifi",
      breed: "Chihuahua",
      age: "4",
      training: "Certified Emotional Support Animal",
      tags: ["Lively", "Alert", "Loving", "Cuddles", "Athletic", "Loves to Play"],
      imageUrl: " ",
    }
    {
      species: "Dog",
      gender: "Male",
      name: "Sergeant",
      breed: "Golden Retriever",
      age: "2",
      training: "Certified Service Animal",
      tags: ["Friendly/Loving", "PTSD Animal", ""]       
    }
];


export {sampleTrainers, sampleAnimals};