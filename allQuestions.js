const allQuestions = [
  {
    question: 'How many legs does a spider have??',
    answer: 'Nine',
    answer2: 'Eight',
    answer3: 'Ten',
    answer4: 'Six',
    rightAnswer: 'eight'
  },
  {
    question: 'What is the name of the toy cowboy in Toy Story?',
    answer: 'Woody',
    answer2: 'Andy',
    answer3: 'Buzz Lightyear',
    answer4: 'Sandy',
    rightAnswer: 'woody'
  },
  {
    question: 'What colors are the stars on the American flag?',
    answer: 'Gold',
    answer2: 'Red',
    answer3: 'Blue',
    answer4: 'White',
    rightAnswer: 'white'
  },
  {
    question: 'How many planets are in our solar system?',
    answer: 'Nine',
    answer2: 'Eleven',
    answer3: 'Eight',
    answer4: 'Ten',
    rightAnswer: 'eight'
  },
  {
    question: 'Where does Santa Claus live?',
    answer: 'The South Pole',
    answer2: 'The North Pole',
    answer3: 'Antarctica',
    answer4: 'Alaska',
    rightAnswer: 'the north pole'
  },
  {
    question: 'What do caterpillars turn into?',
    answer: 'Dragonfly',
    answer2: 'Birds',
    answer3: 'Grasshoppers',
    answer4: 'Butterflies',
    rightAnswer: 'butterflies'
  },
  {
    question: 'How many pairs of wings do bees have?',
    answer: 'One',
    answer2: 'Two',
    answer3: 'Three',
    answer4: 'Four',
    rightAnswer: 'two'
  },
  {
    question: 'How many days are in a year?',
    answer: '365',
    answer2: '355',
    answer3: '345',
    answer4: '367',
    rightAnswer: '365'
  },
  {
    question: 'How many sides does a triangle have?',
    answer: 'Three',
    answer2: 'Four',
    answer3: 'Five',
    answer4: 'Six',
    rightAnswer: 'three'
  },
  {
    question: 'How many colors are in a rainbow?',
    answer: 'Five',
    answer2: 'Six',
    answer3: 'Seven',
    answer4: 'Eight',
    rightAnswer: 'seven'
  },
  {
    question: 'Which country is home to the kangaroo?',
    answer: 'Australia',
    answer2: 'Africa',
    answer3: 'America',
    answer4: 'Asia',
    rightAnswer: 'australia'
  },
  {
    question: 'What food do pandas eat?',
    answer: 'Warms',
    answer2: 'Fish',
    answer3: 'Bamboo',
    answer4: 'Insects',
    rightAnswer: 'bamboo'
  },
  {
    question: 'How many bones do sharks have?',
    answer: 'Zero',
    answer2: 'Twenty-five',
    answer3: 'Fifty-two',
    answer4: 'Twenty',
    rightAnswer: 'zero'
  },
  {
    question: 'Can you name the closest star to Earth?',
    answer: 'Mercury',
    answer2: 'The sun',
    answer3: 'Mars',
    answer4: 'Venus',
    rightAnswer: 'the sun'
  },
  {
    question: 'What is the largest continent?',
    answer: 'Asia',
    answer2: 'Africa',
    answer3: 'North America',
    answer4: 'Australia',
    rightAnswer: 'asia'
  },
  {
    question: 'How many sides does an Octagon have?',
    answer: 'Five',
    answer2: 'Six',
    answer3: 'Seven',
    answer4: 'Eight',
    rightAnswer: 'eight'
  },
  {
    question: 'How many days in a week?',
    answer: '5',
    answer2: '6',
    answer3: '7',
    answer4: '8',
    rightAnswer: '7'
  },
  {
    question: 'Which direction does the Sun rise from?',
    answer: 'North',
    answer2: 'South',
    answer3: 'West',
    answer4: 'East',
    rightAnswer: 'east'
  },
  {
    question: 'Who is the king of Greek gods?',
    answer: 'Poseidon',
    answer2: 'Zeus',
    answer3: 'Hermes',
    answer4: 'Demeter',
    rightAnswer: 'zeus'
  },
  {
    question: 'What is the capital of Canada?',
    answer: 'Vancouver',
    answer2: 'Toronto',
    answer3: 'Calgary',
    answer4: 'Ottawa',
    rightAnswer: 'ottawa'
  },
  {
    question: 'What is the biggest ocean in a world?',
    answer: 'The Pacific Ocean',
    answer2: 'The Atlantic Ocean',
    answer3: 'The Indian Ocean',
    answer4: 'The Arctic Ocean',
    rightAnswer: 'the pacific ocean'
  },
  {
    question: 'What land animal can open its mouth the widest?',
    answer: 'Alligator',
    answer2: 'Hippo',
    answer3: 'Baboon',
    answer4: 'Crocodile',
    rightAnswer: 'hippo'
  },
  {
    question: 'What is the largest animal on Earth?',
    answer: 'The Blue Whale',
    answer2: 'The African Hippo',
    answer3: 'The giant squid',
    answer4: 'The African elephant',
    rightAnswer: 'the blue whale'
  },
  {
    question: 'Why do snakes stick out their tongue?',
    answer: 'To scare predators',
    answer2: 'To “smell” the air',
    answer3: 'To make a hissing sound',
    answer4: 'To lick their prey',
    rightAnswer: 'to “smell” the air'
  },
  {
    question: "What's the biggest planet in our solar system?",
    answer: 'Jupiter',
    answer2: 'Saturn',
    answer3: 'Neptune',
    answer4: 'Mercury',
    rightAnswer: 'jupiter'
  },
  {
    question: 'Who was the first person to walk on the moon?',
    answer: 'Buzz Aldrin',
    answer2: 'Neil Armstrong',
    answer3: 'Michael Collins',
    answer4: 'Alan Shepard',
    rightAnswer: 'neil armstrong'
  },
  {
    question: "What's the force that makes objects fall to the ground?",
    answer: 'Electromagnetism',
    answer2: 'Gravity',
    answer3: 'Nuclear force',
    answer4: 'It is just called “The Force”',
    rightAnswer: 'gravity'
  },
  {
    question: "What kind of trees grow from acorns?",
    answer: 'Hickory',
    answer2: 'Maple',
    answer3: 'Walnut',
    answer4: 'Oak',
    rightAnswer: 'oak'
  },
  {
    question: "What is the hardest substance in our body?",
    answer: 'Bones',
    answer2: 'Hair',
    answer3: 'Teeth',
    answer4: 'Nails',
    rightAnswer: 'teeth'
  },
  {
    question: "How many bones are in the adult human body?",
    answer: '106',
    answer2: '206',
    answer3: '347',
    answer4: '505',
    rightAnswer: '206'
  },
  {
    question: "Where is the fastest muscle in the body?",
    answer: 'The leg',
    answer2: 'The arm',
    answer3: 'The eye',
    answer4: 'The fingers',
    rightAnswer: 'the eye'
  },
  {
    question: "What is the coldest place on Earth?",
    answer: 'The North Pole',
    answer2: 'Antarctica',
    answer3: 'Siberia',
    answer4: 'Cape Horn, South America',
    rightAnswer: 'antarctica'
  },
  {
    question: "What is the most important symbol in Chinese culture?",
    answer: 'The dog',
    answer2: 'The cat',
    answer3: 'The monkey',
    answer4: 'The dragon',
    rightAnswer: 'the dragon'
  },
  {
    question: "Where did the Olympics begin?",
    answer: 'Ancient Rome',
    answer2: 'Ancient Greece',
    answer3: 'Medieval England',
    answer4: 'Australia',
    rightAnswer: 'ancient greece'
  },
  {
    question: "What did the Wright Brothers successfully invent?",
    answer: 'The computer',
    answer2: 'The car',
    answer3: 'The telephone',
    answer4: 'The airplane',
    rightAnswer: 'the airplane'
  },
  {
    question: "Canada has ten provinces. Two have no coastline on any oceans. Alberta is one of them. Which is the other one?",
    answer: 'Nova Scotia',
    answer2: 'Saskatchewan',
    answer3: 'Ontario',
    answer4: 'British Columbia',
    rightAnswer: 'saskatchewan'
  },
  {
    question: "What continent is Canada located in?",
    answer: 'North America',
    answer2: 'South America',
    answer3: 'Asia',
    answer4: 'Australia',
    rightAnswer: 'north america'
  },
  {
    question: "What two colors are in the Canadian flag?",
    answer: 'White and Blue',
    answer2: 'White and Yellow',
    answer3: 'White and Red',
    answer4: 'Yellow and Blue',
    rightAnswer: 'white and red'
  },
  {
    question: "Which country does Canada share a border with?",
    answer: 'Mexico',
    answer2: 'France',
    answer3: 'England',
    answer4: 'USA',
    rightAnswer: 'usa'
  },
  {
    question: "How many provinces are there in Canada?",
    answer: '9',
    answer2: '10',
    answer3: '11',
    answer4: '12',
    rightAnswer: '10'
  },
  {
    question: "How many territories are there in Canada?",
    answer: '2',
    answer2: '3',
    answer3: '4',
    answer4: '5',
    rightAnswer: '3'
  },
  {
    question: "What's the noble animal to Canada?",
    answer: 'Beaver',
    answer2: 'Bear',
    answer3: 'Bobcat',
    answer4: 'Deer',
    rightAnswer: 'beaver'
  },
  {
    question: "Which of these is not a Canadian province?",
    answer: 'New Brunswick',
    answer2: 'Manitoba',
    answer3: 'Alberta',
    answer4: 'Nunavut',
    rightAnswer: 'nunavut'
  },
  {
    question: "What is the most widely recognized national symbol of Canada?",
    answer: 'Bear',
    answer2: 'Beaver',
    answer3: 'Maple leaf',
    answer4: 'Deer',
    rightAnswer: 'maple leaf'
  },
];
