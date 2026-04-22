export type Collection = {
  key: string;
  name: string;
  tagline: string;
};

export const collections: Collection[] = [
  {
    key: "noire",
    name: "Collection Noire",
    tagline: "Ombres, mystère et présence absolue",
  },
  {
    key: "pierre",
    name: "Collection Pierre",
    tagline: "Clarté, lumière et raffinement minéral",
  },
  {
    key: "doree",
    name: "Collection Dorée",
    tagline: "Chaleur, opulence et sensualité orientale",
  },
];

export type Fragrance = {
  name: string;
  family: string;
  volume: string;
  description: string;
  imageKey: string;
  collectionKey: string;
  mood: string;
  tagline: string;
  shortDescription: string;
  sensations: string[];
  usages: string[];
  benefits: string[];
  conclusion: string;
};

export const FRAGRANCE_PRICE = "24,90 €";
export const COFFRET_PRICE = "34,90 €";

export const fragrances: Fragrance[] = [
  {
    name: "Moula",
    family: "Boisé Aromatique",
    volume: "50 ML",
    description: "Un parfum chaud, élégant et enveloppant, qui inspire luxe et caractère.",
    imageKey: "moula",
    collectionKey: "noire",
    mood: "Chic / Chaleureux",
    tagline: "Chaleureux, chic, équilibré, avec une vraie élégance.",
    shortDescription: "MOULA est une fragrance profonde et sophistiquée. Dès les premières notes, on ressent une chaleur élégante, légèrement boisée et subtilement épicée. Il évolue vers un sillage riche et raffiné, parfait pour ceux qui recherchent une présence classe sans être excessive.",
    sensations: [
      "Une ouverture chaude et légèrement épicée",
      "Un cœur élégant et structuré",
      "Un fond boisé et enveloppant qui tient longtemps",
    ],
    usages: [
      "Idéal en soirée ou occasions importantes",
      "Parfait pour une image soignée et haut de gamme",
      "Convient aux amateurs de parfums élégants et non sucrés",
    ],
    benefits: [
      "Parfum raffiné et polyvalent",
      "Sillage présent mais maîtrisé",
      "Extrait de parfum (excellente tenue)",
      "Image luxe et sophistiquée",
    ],
    conclusion: "Si vous cherchez un parfum élégant, chaleureux et distingué, MOULA est un choix sûr qui renforce votre présence.",
  },
  {
    name: "Kirke",
    family: "Oriental Épicé",
    volume: "50 ML",
    description: "Un parfum fruité, intense et ultra captivant, qui attire immédiatement l'attention.",
    imageKey: "kirke",
    collectionKey: "noire",
    mood: "Fruité / Accrocheur",
    tagline: "Fruité, puissant, séduisant, avec une forte présence.",
    shortDescription: "KIRKE est une fragrance vibrante et addictive. Dès les premières secondes, on ressent une explosion fruitée, sucrée et lumineuse, rapidement enveloppée par une chaleur élégante qui donne de la profondeur. C'est un parfum qui se remarque et qui marque.",
    sensations: [
      "Une ouverture fruitée et sucrée très présente",
      "Un cœur chaud et enveloppant",
      "Un fond sensuel qui tient toute la journée",
    ],
    usages: [
      "Idéal en soirée ou sorties",
      "Parfait pour se faire remarquer",
      "Convient à ceux qui aiment les parfums intenses",
    ],
    benefits: [
      "Parfum très accrocheur",
      "Sillage puissant et durable",
      "Extrait de parfum (excellente tenue)",
      "Signature moderne et audacieuse",
    ],
    conclusion: "Si vous aimez les parfums fruités, puissants et qui attirent les compliments, KIRKE est un choix évident.",
  },
  {
    name: "Chronic R",
    family: "Boisé Musqué",
    volume: "50 ML",
    description: "Un parfum frais, moderne et propre, avec une vraie élégance naturelle.",
    imageKey: "chronicr",
    collectionKey: "noire",
    mood: "Frais / Quotidien",
    tagline: "Frais, propre, élégant, avec une touche moderne.",
    shortDescription: "CHRONIC R est une fragrance facile à porter, qui donne immédiatement une sensation de propreté et de fraîcheur maîtrisée. Dès l'application, on ressent quelque chose de léger, légèrement boisé, avec une touche moderne qui reste élégante du début à la fin.",
    sensations: [
      "Une ouverture fraîche et agréable",
      "Un cœur propre et légèrement boisé",
      "Un fond doux et discret qui tient sur la durée",
    ],
    usages: [
      "Idéal au quotidien",
      "Parfait pour le travail ou les rendez-vous",
      "Convient à tous, hommes comme femmes",
    ],
    benefits: [
      "Parfum facile à porter",
      "Sensation de fraîcheur durable",
      "Extrait de parfum (bonne tenue)",
      "Discret mais soigné",
    ],
    conclusion: "Si vous cherchez un parfum propre, élégant et facile à porter tous les jours, CHRONIC R est un excellent choix sans prise de risque.",
  },
  {
    name: "Rêve",
    family: "Floral Doux",
    volume: "50 ML",
    description: "Un parfum doux, élégant et apaisant, qui enveloppe la peau avec subtilité.",
    imageKey: "reve",
    collectionKey: "pierre",
    mood: "Doux / Apaisant",
    tagline: "Doux, propre, apaisant, avec une élégance discrète.",
    shortDescription: "RÊVE est une fragrance délicate et harmonieuse. Dès les premières notes, elle procure une sensation de douceur et de légèreté, puis évolue vers un sillage propre, légèrement chaud et très agréable à porter. Un parfum qui rassure et qui accompagne sans jamais être envahissant.",
    sensations: [
      "Une ouverture douce et légère",
      "Un cœur propre et élégant",
      "Un fond subtil et apaisant qui tient dans le temps",
    ],
    usages: [
      "Idéal au quotidien",
      "Parfait pour une présence légère et soignée",
      "Convient à ceux qui aiment les parfums subtils",
    ],
    benefits: [
      "Parfum facile à porter",
      "Sensation de confort et de propreté",
      "Extrait de parfum (bonne tenue)",
      "Discret mais élégant",
    ],
    conclusion: "Si vous cherchez un parfum doux, léger et agréable au quotidien, RÊVE est un choix sûr et sans risque.",
  },
  {
    name: "Aicha",
    family: "Floral Oriental",
    volume: "50 ML",
    description: "Un parfum intense, profond et séduisant, qui ne passe pas inaperçu.",
    imageKey: "aicha",
    collectionKey: "pierre",
    mood: "Puissant / Signature",
    tagline: "Puissant, chic, mystérieux, avec une vraie signature.",
    shortDescription: "AICHA est une fragrance de caractère. Dès les premières notes, elle dégage une présence forte et enveloppante, avec une sensation chaleureuse et légèrement épicée. Elle évolue vers quelque chose de plus sensuel et raffiné, avec une vraie profondeur qui reste sur la peau pendant des heures.",
    sensations: [
      "Une ouverture intense et légèrement épicée",
      "Un cœur chaud et élégant",
      "Un fond profond, sensuel et très durable",
    ],
    usages: [
      "Idéal en soirée ou occasions spéciales",
      "Parfait pour se démarquer",
      "Plutôt pour ceux qui aiment les parfums présents",
    ],
    benefits: [
      "Parfum intense et marquant",
      "Excellente tenue (Extrait de Parfum)",
      "Sillage puissant",
      "Identité forte et distinctive",
    ],
    conclusion: "Si vous cherchez un parfum discret, ce n'est pas le bon choix. Si vous voulez marquer les esprits et affirmer votre présence, AICHA est fait pour vous.",
  },
  {
    name: "Baccarat",
    family: "Oud Précieux",
    volume: "50 ML",
    description: "Un parfum élégant, doux et captivant, qui plaît immédiatement.",
    imageKey: "baccarat",
    collectionKey: "pierre",
    mood: "Élégant / Facile",
    tagline: "Propre, élégant, rassurant, avec une touche addictive.",
    shortDescription: "BACCARAT est une fragrance moderne et rassurante. Dès les premières notes, on ressent une douceur légèrement sucrée, rapidement équilibrée par des nuances chaudes et boisées. Le résultat : un parfum propre, chic et très agréable à porter au quotidien.",
    sensations: [
      "Une ouverture douce et légèrement sucrée",
      "Un cœur chaud et enveloppant",
      "Un fond boisé et ambré qui tient toute la journée",
    ],
    usages: [
      "Idéal tous les jours",
      "Parfait en soirée sans être trop fort",
      "Convient aussi bien aux hommes qu'aux femmes",
    ],
    benefits: [
      "Facile à porter (plait au plus grand nombre)",
      "Excellente tenue (Extrait de Parfum)",
      "Sillage présent mais non agressif",
      "Parfum polyvalent",
    ],
    conclusion: "Si vous cherchez un parfum sûr, élégant et qui fait toujours bonne impression, BACCARAT est un choix sans risque.",
  },
  {
    name: "Vanilla Powder",
    family: "Oriental Gourmand",
    volume: "50 ML",
    description: "Une vanille propre, élégante et subtilement poudrée.",
    imageKey: "vanillapowder",
    collectionKey: "doree",
    mood: "Poudré / Élégant",
    tagline: "Doux, propre, poudré, légèrement sucré.",
    shortDescription: "VANILLA POWDER n'est pas une vanille lourde ou écœurante. C'est une interprétation raffinée, douce et légèrement poudrée qui apporte une sensation de propreté et de confort tout en restant sophistiquée.",
    sensations: [
      "Une vanille douce et lumineuse",
      "Un effet poudré élégant",
      "Une sensation propre et apaisante",
    ],
    usages: [
      "Idéal au quotidien",
      "Parfait pour un parfum discret mais qualitatif",
      "Convient à ceux qui aiment les fragrances élégantes et non agressives",
    ],
    benefits: [
      "Vanille raffinée, jamais écœurante",
      "Image propre et haut de gamme",
      "Extrait de parfum (bonne tenue)",
      "Sillage subtil mais présent",
    ],
    conclusion: "Si tu cherches une vanille élégante, douce et facile à porter, VANILLA POWDER est un choix sûr qui donne une image propre et sophistiquée.",
  },
  {
    name: "Sucre",
    family: "Oriental Sucré",
    volume: "50 ML",
    description: "Un parfum doux, sucré et ultra gourmand, qui attire immédiatement.",
    imageKey: "sucre",
    collectionKey: "doree",
    mood: "Sucré / Plaisir Immédiat",
    tagline: "Sucré, gourmand, doux, avec une touche addictive.",
    shortDescription: "SUCRE est une fragrance simple et addictive. Dès l'application, on ressent une douceur sucrée très agréable, presque réconfortante, qui enveloppe la peau avec légèreté. C'est un parfum qui plaît facilement et qui donne envie de s'en rapprocher.",
    sensations: [
      "Une ouverture très sucrée et douce",
      "Un cœur gourmand et agréable",
      "Un fond léger mais durable",
    ],
    usages: [
      "Idéal au quotidien",
      "Parfait pour une ambiance chaleureuse",
      "Convient à ceux qui aiment les parfums sucrés",
    ],
    benefits: [
      "Parfum simple et efficace",
      "Très agréable et facile à porter",
      "Extrait de parfum (bonne tenue)",
      "Sillage doux et attirant",
    ],
    conclusion: "Si vous aimez les parfums sucrés, doux et gourmands, SUCRE est un choix évident qui plaît sans effort.",
  },
  {
    name: "Rose Vanille",
    family: "Floral Gourmand",
    volume: "50 ML",
    description: "Un parfum doux, floral et gourmand, à la fois élégant et irrésistible.",
    imageKey: "rosevanille",
    collectionKey: "doree",
    mood: "Floral / Gourmand",
    tagline: "Féminin, doux, gourmand, avec une élégance naturelle.",
    shortDescription: "ROSE VANILLE associe la délicatesse de la rose à une douceur vanillée chaleureuse. Dès l'application, on ressent une touche florale raffinée, rapidement adoucie par une note sucrée et enveloppante. Le résultat : un parfum féminin, séduisant et très agréable à porter.",
    sensations: [
      "Une ouverture florale douce (rose)",
      "Un cœur légèrement sucré et élégant",
      "Un fond chaud et vanillé qui tient longtemps",
    ],
    usages: [
      "Idéal au quotidien ou en soirée",
      "Parfait pour une présence douce mais séduisante",
      "Convient à celles qui aiment les parfums floraux et sucrés",
    ],
    benefits: [
      "Parfum équilibré entre floral et gourmand",
      "Très agréable et facile à porter",
      "Extrait de parfum (excellente tenue)",
      "Sillage doux mais séduisant",
    ],
    conclusion: "Si vous aimez les parfums doux, féminins et légèrement sucrés, ROSE VANILLE est un choix évident qui plaît immédiatement.",
  },
  {
    name: "Coco Vanille",
    family: "Oriental Gourmand",
    volume: "50 ML",
    description: "Un parfum gourmand, doux et réconfortant, qui attire immédiatement.",
    imageKey: "cocovanille",
    collectionKey: "doree",
    mood: "Gourmand / Cocooning",
    tagline: "Doux, gourmand, chaleureux, avec une touche très addictive.",
    shortDescription: "COCO VANILLE est une fragrance chaleureuse et addictive. Dès l'application, on ressent une douceur sucrée et crémeuse, rapidement enveloppée par des notes chaudes qui donnent une sensation cocooning et séduisante. C'est un parfum qui rassure, tout en restant élégant.",
    sensations: [
      "Une ouverture douce et sucrée",
      "Un cœur crémeux et gourmand",
      "Un fond chaud et enveloppant qui tient longtemps",
    ],
    usages: [
      "Idéal en hiver ou en soirée",
      "Parfait pour les moments cocooning",
      "Convient à celles et ceux qui aiment les parfums sucrés",
    ],
    benefits: [
      "Parfum gourmand très apprécié",
      "Sensation chaleureuse et réconfortante",
      "Extrait de parfum (excellente tenue)",
      "Sillage doux mais présent",
    ],
    conclusion: "Si vous aimez les parfums sucrés, doux et enveloppants, COCO VANILLE est un choix sûr qui plaît immédiatement.",
  },
];
