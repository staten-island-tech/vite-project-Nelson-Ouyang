const questions = [
  {
    id: 1,
    question: "What does it mean for an object to be malleable?",
    options: [
      "Able to be stretched without losing toughness",
      "Hard and breaks easily",
      "Able to be hammered out of shape without breaking",
      "The compactness of a material",
    ],
    correctAnswer: "Able to be hammered out of shape without breaking",
    explanation:
      "Malleability refers to a material’s ability to deform under compressive stress without breaking.",
    category: "MaterialScience",
    difficulty: "Easy",
  },
  {
    id: 2,
    question: "What does it mean for an object to be brittle?",
    options: [
      "Able to be stretched without losing toughness",
      "Hard and breaks easily",
      "Able to be hammered out of shape without breaking",
      "The compactness of a material",
    ],
    correctAnswer: "Hard and breaks easily",
    explanation:
      "Brittle materials fracture quickly under stress instead of deforming plastically.",
    category: "MaterialScience",
    difficulty: "Easy",
  },
  {
    id: 3,
    question: "Glue is what type of material?",
    options: ["Metal", "Ceramic", "Polymer", "Composite"],
    correctAnswer: "Polymer",
    explanation:
      "Glue is composed of long-chain polymer molecules that provide adhesion.",
    category: "MaterialScience",
    difficulty: "Easy",
  },
  {
    id: 4,
    question: "Quartz is what type of material?",
    options: ["Metal", "Ceramic", "Polymer", "Composite"],
    correctAnswer: "Ceramic",
    explanation:
      "Quartz is a crystalline form of silicon dioxide, a ceramic material.",
    category: "MaterialScience",
    difficulty: "Easy",
  },
  {
    id: 5,
    question: "Which material(s) undergo plastic deformation?",
    options: ["Tile", "Paper Clip", "Popsicle Stick", "Plastic Bag"],
    correctAnswer: "Paper Clip",
    explanation:
      "The paper clip bends permanently under stress, demonstrating plastic deformation.",
    category: "MaterialScience",
    difficulty: "Medium",
  },
  {
    id: 6,
    question:
      "Why is it important to consider the type of material used for a design?",
    options: [
      "Affects the cost of the design",
      "Affects the criteria of the design",
      "Affects the strength/durability of the design",
    ],
    correctAnswer: "Affects the strength/durability of the design",
    explanation:
      "Material choice impacts how strong and durable a design will be.",
    category: "MaterialScience",
    difficulty: "Easy",
  },
  {
    id: 7,
    question:
      "You need to build a prototype that is strong and weather-resistant. Which material should you choose?",
    options: ["Plastic", "Wood", "Metal"],
    correctAnswer: "Metal",
    explanation: "Metals are durable and resist outdoor environmental factors.",
    category: "MaterialScience",
    difficulty: "Easy",
  },
  {
    id: 8,
    question: "Which type of material does not bond well with glue?",
    options: ["Plastic", "Wood", "Metal"],
    correctAnswer: "Metal",
    explanation:
      "Metals have smooth, nonporous surfaces that make adhesive bonding difficult.",
    category: "MaterialScience",
    difficulty: "Easy",
  },
  {
    id: 9,
    question: "Indicate the material class for Teflon.",
    options: ["Polymer", "Metal", "Ceramic", "Composite"],
    correctAnswer: "Polymer",
    explanation:
      "Teflon (PTFE) is a synthetic fluoropolymer known for non-stick properties.",
    category: "MaterialScience",
    difficulty: "Easy",
  },
  {
    id: 10,
    question: "Indicate the material class for Diamond.",
    options: ["Polymer", "Metal", "Ceramic", "Composite"],
    correctAnswer: "Ceramic",
    explanation:
      "Diamond is a carbon-based ceramic with strong covalent bonding.",
    category: "MaterialScience",
    difficulty: "Medium",
  },
  {
    id: 11,
    question: "Indicate the material class for PVC.",
    options: ["Polymer", "Metal", "Ceramic", "Composite"],
    correctAnswer: "Polymer",
    explanation:
      "PVC (polyvinyl chloride) is a widely used thermoplastic polymer.",
    category: "MaterialScience",
    difficulty: "Easy",
  },
  {
    id: 12,
    question: "How many Bravais lattice structures exist?",
    options: ["2", "14", "7", "5"],
    correctAnswer: "14",
    explanation:
      "There are 14 distinct Bravais lattice types in three-dimensional space.",
    category: "MaterialScience",
    difficulty: "Hard",
  },
  {
    id: 13,
    question: "All are attributes of ceramics, except:",
    options: [
      "Covalent bonded",
      "Low melting point",
      "High stiffness",
      "High hardness",
    ],
    correctAnswer: "Low melting point",
    explanation:
      "Ceramics generally have very high melting points due to strong bonding.",
    category: "MaterialScience",
    difficulty: "Medium",
  },
  {
    id: 14,
    question: "Below are examples of plastic deformation, except:",
    options: [
      "A wire coiled around a magnetic core",
      "Broken glass",
      "Bent nail in wood",
      "Molded clay",
    ],
    correctAnswer: "Broken glass",
    explanation:
      "Glass is brittle and fractures rather than plastically deforming.",
    category: "MaterialScience",
    difficulty: "Medium",
  },
  {
    id: 15,
    question: "All of the following are magnetic materials EXCEPT:",
    options: ["Nickel", "Cobalt", "Iron", "Zinc", "Cast iron"],
    correctAnswer: "Zinc",
    explanation: "Zinc is non-magnetic, while others are ferromagnetic.",
    category: "MaterialScience",
    difficulty: "Medium",
  },
  {
    id: 16,
    question: "Measured stress at onset of plastic deformation is called:",
    options: ["Elastic", "Ductility", "Plastic deformation", "Yield strength"],
    correctAnswer: "Yield strength",
    explanation:
      "Yield strength marks the transition from elastic to plastic deformation.",
    category: "MaterialScience",
    difficulty: "Medium",
  },
  {
    id: 17,
    question: "What is fundamental to Material Science?",
    options: [
      "Relationships between performance and properties",
      "Relationships between structures and properties",
      "Relationships between properties and performance of science",
      "Relationships between structures and properties of science",
    ],
    correctAnswer: "Relationships between structures and properties",
    explanation:
      "Material science links atomic structure to macroscopic properties.",
    category: "MaterialScience",
    difficulty: "Medium",
  },
  {
    id: 18,
    question: "Which of the following metals has the lowest melting point?",
    options: ["Antimony", "Tin", "Silver", "Zinc"],
    correctAnswer: "Tin",
    explanation:
      "Among the listed metals, tin melts at the lowest temperature (~232°C).",
    category: "MaterialScience",
    difficulty: "Medium",
  },
  {
    id: 19,
    question: "The structures which have the highest packing of atoms are:",
    options: [
      "Hexagonal close packed lattice",
      "Body-centered cubic lattice",
      "Simple cubic lattice",
      "None of the above",
    ],
    correctAnswer: "Hexagonal close packed lattice",
    explanation:
      "HCP and FCC structures have the highest packing efficiency (~74%).",
    category: "MaterialScience",
    difficulty: "Medium",
  },
  {
    id: 20,
    question:
      "In Brinell hardness testing, the minimum thickness of the specimen should be:",
    options: [
      "Less than 5 times the depth of the impression",
      "Less than 10 times the depth of the impression",
      "Equal to 10 times the depth of the impression",
      "More than 10 times the depth of the impression",
    ],
    correctAnswer: "More than 10 times the depth of the impression",
    explanation:
      "The specimen must be thick enough to prevent distortion during testing.",
    category: "MaterialScience",
    difficulty: "Hard",
  },
  {
    id: 21,
    question:
      "Slow plastic deformation of metals under a constant stress is known as:",
    options: [
      "Fatigue",
      "Proof deformation",
      "Gradual deformation",
      "Creep",
      "Endurance failure",
    ],
    correctAnswer: "Creep",
    explanation:
      "Creep occurs when metals deform slowly under constant load at high temperature.",
    category: "MaterialScience",
    difficulty: "Medium",
  },
  {
    id: 22,
    question: "The rollers of a cycle chain are subjected to:",
    options: [
      "Compressive stress",
      "Tensile strength",
      "Shear stress",
      "Fatigue stress",
      "Creep stress",
    ],
    correctAnswer: "Shear stress",
    explanation:
      "Roller chain pins and rollers experience shear as they transmit motion.",
    category: "MaterialScience",
    difficulty: "Medium",
  },
  {
    id: 23,
    question: "Which of the following metals has the highest specific gravity?",
    options: ["Iron", "Silver", "Copper", "Aluminum", "Brass"],
    correctAnswer: "Silver",
    explanation:
      "Silver has a higher density (10.5 g/cm³) than the others listed.",
    category: "MaterialScience",
    difficulty: "Medium",
  },
  {
    id: 24,
    question: "Which of the following is a noble metal?",
    options: ["Aluminum", "Stainless steel", "Nickel", "Platinum", "Chromium"],
    correctAnswer: "Platinum",
    explanation:
      "Noble metals resist oxidation and corrosion; platinum is one example.",
    category: "MaterialScience",
    difficulty: "Easy",
  },
  {
    id: 25,
    question: "The crystal structure of most common metals is:",
    options: [
      "Hexagonal",
      "Cubic",
      "Orthorhombic",
      "Any of the above",
      "None of the above",
    ],
    correctAnswer: "Cubic",
    explanation: "Most metals have cubic structures such as BCC or FCC.",
    category: "MaterialScience",
    difficulty: "Medium",
  },
  {
    id: 26,
    question: "Machinability of metal depends on:",
    options: [
      "Hardness",
      "Hardness and tensile strength",
      "Brittleness",
      "Brittleness and toughness",
    ],
    correctAnswer: "Hardness and tensile strength",
    explanation:
      "Metals with moderate hardness and lower strength are easier to machine.",
    category: "MaterialScience",
    difficulty: "Medium",
  },
  {
    id: 27,
    question:
      "Which of the following metals has face-centered cubic structure?",
    options: ["Zinc", "Gold", "Magnesium", "Cadmium", "Tin"],
    correctAnswer: "Gold",
    explanation: "Gold crystallizes in a face-centered cubic (FCC) lattice.",
    category: "MaterialScience",
    difficulty: "Medium",
  },
  {
    id: 28,
    question:
      "Which of the following materials does not have body-centered cubic structure?",
    options: ["Vanadium", "Potassium", "Lithium", "Zirconium", "Chromium"],
    correctAnswer: "Zirconium",
    explanation: "Zirconium has a hexagonal close-packed structure, not BCC.",
    category: "MaterialScience",
    difficulty: "Hard",
  },
  {
    id: 29,
    question:
      "The component deforming progressively under load at high temperatures is called:",
    options: ["Resilience", "Creep", "Fatigue", "All of the above"],
    correctAnswer: "Creep",
    explanation:
      "Creep deformation occurs slowly over time when materials are under stress at high temperature.",
    category: "MaterialScience",
    difficulty: "Medium",
  },
  {
    id: 30,
    question: "Which metal has the highest melting point?",
    options: ["Antimony", "Chromium", "Gold", "Stainless steel"],
    correctAnswer: "Chromium",
    explanation:
      "Chromium has a high melting point (~1907°C), exceeding those of gold and stainless steel.",
    category: "MaterialScience",
    difficulty: "Medium",
  },
  {
    id: 31,
    question: "The study of metallography includes:",
    options: [
      "Alloy constituents",
      "Failure analysis",
      "Metal structure",
      "None of the above",
      "All of the above",
    ],
    correctAnswer: "All of the above",
    explanation:
      "Metallography covers analysis of alloy phases, microstructure, and failures.",
    category: "MaterialScience",
    difficulty: "Medium",
  },
  {
    id: 32,
    question:
      "The material in which atoms are arranged regularly in some directions but not in others is called:",
    options: ["Amorphous", "Mesomorphic", "Crystalline", "Polymorphic"],
    correctAnswer: "Mesomorphic",
    explanation:
      "Mesomorphic materials show partial ordering, such as liquid crystals.",
    category: "MaterialScience",
    difficulty: "Hard",
  },
  {
    id: 33,
    question: "Which of the following is an aluminosilicate?",
    options: ["Steatite", "Cordierite", "Forsterite", "Porcelain"],
    correctAnswer: "Cordierite",
    explanation:
      "Cordierite is a magnesium aluminosilicate known for low thermal expansion.",
    category: "MaterialScience",
    difficulty: "Hard",
  },
  {
    id: 34,
    question: "What circuit element were Leyden jars a primitive version of?",
    options: ["Capacitor", "Inductor", "Battery", "Diode"],
    correctAnswer: "Capacitor",
    explanation:
      "Leyden jars were early devices used to store electric charge, making them primitive capacitors.",
    category: "CircuitLab",
    difficulty: "Easy",
  },
  {
    id: 35,
    question: "Which of the following does not output DC?",
    options: [
      "Commutator",
      "Dynamo",
      "Rectifier",
      "Inverter",
      "None of the above",
    ],
    correctAnswer: "Inverter",
    explanation:
      "An inverter converts DC to AC, while the other devices produce or work with DC.",
    category: "CircuitLab",
    difficulty: "Medium",
  },
  {
    id: 36,
    question:
      "The diagram shows a positively charged rod held above a device that is electrically neutral. What is this device called?",
    options: [
      "Leyden Jar",
      "Vandegraff Generator",
      "Wimshurst Machine",
      "Electroscope",
      "None of the above",
    ],
    correctAnswer: "Electroscope",
    explanation:
      "An electroscope detects electric charge through the separation of metal leaves.",
    category: "CircuitLab",
    difficulty: "Easy",
  },
  {
    id: 37,
    question:
      "As the charged rod is brought closer to the device, would the leaves have a charge? What would happen to the leaves, if anything at all?",
    options: [
      "Neither of the leaves would have a charge, so the leaves would not move.",
      "One of the leaves would have a negative charge and one would have a positive charge, causing the leaves to stick together.",
      "The leaves would both have a negative charge and separate from one another.",
      "The leaves would both have a positive charge and separate from one another.",
    ],
    correctAnswer:
      "The leaves would both have a positive charge and separate from one another.",
    explanation:
      "The positive rod induces charge separation, leaving both leaves positively charged and repelling each other.",
    category: "CircuitLab",
    difficulty: "Medium",
  },
  {
    id: 38,
    question:
      "An electron is fired into a current-carrying wire from outside. How will entering the wire affect the electron?",
    options: [
      "The electron will be quickly expelled from the wire by the other electrons in the wire",
      "The electron will experience a force in the same direction as the current",
      "The electron will experience a force in the opposite direction of the current",
      "The electron will continue travelling unaffected in its initial direction",
    ],
    correctAnswer:
      "The electron will experience a force in the opposite direction of the current",
    explanation:
      "Electrons move opposite to conventional current direction due to their negative charge.",
    category: "CircuitLab",
    difficulty: "Hard",
  },
  {
    id: 39,
    question:
      "Which of the following is a possible way to double the strength of the magnetic field of a wire inside a given radius?",
    options: [
      "Decrease the wire's radius to a quarter and decrease the given radius to half",
      "Double the current, radius, wire's radius, and magnetic permeability",
      "Increase the current by a factor of √2",
      "Double the current",
      "None of the above",
    ],
    correctAnswer: "Double the current",
    explanation:
      "Magnetic field strength is directly proportional to current according to Ampere's Law.",
    category: "CircuitLab",
    difficulty: "Hard",
  },
  {
    id: 40,
    question:
      "Which of the following is characteristic of a non-Coulomb electric field?",
    options: [
      "It can be created by a changing magnetic field",
      "It can be created by stationary charges",
      "It is conservative",
      "It is present only when there is conductive material",
      "None of the above",
    ],
    correctAnswer: "It can be created by a changing magnetic field",
    explanation:
      "Non-Coulomb electric fields are induced by changing magnetic fields and are non-conservative.",
    category: "CircuitLab",
    difficulty: "Hard",
  },
  {
    id: 41,
    question:
      "For a Boolean logic circuit with mostly 1s in the output, would it make more sense to use sum of products or product of sums?",
    options: [
      "Sum of products because it minimizes gates",
      "Sum of products because output has more 1s",
      "Product of sums because it minimizes gates",
      "Product of sums because output has more 1s",
    ],
    correctAnswer: "Product of sums because output has more 1s",
    explanation:
      "When outputs are mostly 1s, product of sums representation is more efficient.",
    category: "CircuitLab",
    difficulty: "Medium",
  },
  {
    id: 42,
    question:
      "Which of the following correctly characterizes magnetic and electric field lines?",
    options: [
      "Magnetic field lines flow from north to south, electric from positive to negative",
      "Magnetic field lines flow from south to north, electric from positive to negative",
      "Magnetic field lines flow from north to south, electric from negative to positive",
      "Magnetic field lines flow from south to north, electric from negative to positive",
    ],
    correctAnswer:
      "Magnetic field lines flow from north to south, electric from positive to negative",
    explanation:
      "Magnetic field lines go from N to S externally; electric field lines go from + to - charges.",
    category: "CircuitLab",
    difficulty: "Easy",
  },
  {
    id: 43,
    question:
      "Why would a polarized capacitor be used over a nonpolarized counterpart?",
    options: [
      "They can handle larger voltages",
      "They can handle larger currents",
      "They have larger capacitance to size ratios",
      "They have larger voltage-tolerance to size ratios",
    ],
    correctAnswer: "They have larger capacitance to size ratios",
    explanation:
      "Polarized capacitors (like electrolytics) offer higher capacitance in smaller packages.",
    category: "CircuitLab",
    difficulty: "Medium",
  },
  {
    id: 44,
    question:
      "In transistor-transistor logic, what is the fewest number of transistors needed to make a NOT gate?",
    options: [
      "1 PNP, 1 NPN",
      "2 PNP transistors",
      "1 PNP transistor",
      "2 NPN transistors",
    ],
    correctAnswer: "2 NPN transistors",
    explanation:
      "A TTL NOT gate typically uses two NPN transistors in a totem-pole configuration.",
    category: "CircuitLab",
    difficulty: "Hard",
  },
  {
    id: 45,
    question: "Which of the following effects does not have an inverse?",
    options: [
      "Photoelectric effect",
      "Triboelectric effect",
      "Piezoelectric effect",
      "Pyroelectric effect",
    ],
    correctAnswer: "Triboelectric effect",
    explanation:
      "The triboelectric effect (friction-based charging) doesn't have a well-defined inverse process.",
    category: "CircuitLab",
    difficulty: "Hard",
  },
  {
    id: 46,
    question:
      "The measurement of large magnetic fields on the order of a Tesla is often done through what phenomenon?",
    options: [
      "Proximity effect",
      "Nernst effect",
      "Skin effect",
      "Hall effect",
    ],
    correctAnswer: "Hall effect",
    explanation:
      "Hall effect sensors are commonly used to measure strong magnetic fields.",
    category: "CircuitLab",
    difficulty: "Medium",
  },
  {
    id: 47,
    question: "What is the voltage of a diesel engine battery?",
    options: ["1.5V", "9V", "12V", "24V"],
    correctAnswer: "24V",
    explanation:
      "Diesel engines typically use 24V batteries for higher starting power requirements.",
    category: "CircuitLab",
    difficulty: "Easy",
  },
  {
    id: 48,
    question:
      "In a polarized receptacle, which prong is 'hot', and what does that mean?",
    options: [
      "Shorter, swings (-)",
      "Shorter, swings (+)",
      "Longer, swings (-)",
      "Longer, swings (+)",
    ],
    correctAnswer: "Shorter, swings (+)",
    explanation:
      "The shorter prong is the hot wire carrying positive voltage swings in AC systems.",
    category: "CircuitLab",
    difficulty: "Medium",
  },
  {
    id: 49,
    question:
      "How many deaths were due to Corona Discharge from 2005-2015 in the US?",
    options: ["0", "550", "1050", "16,360"],
    correctAnswer: "0",
    explanation:
      "Corona discharge typically doesn't cause fatal injuries; most electrical deaths are from direct contact.",
    category: "CircuitLab",
    difficulty: "Hard",
  },
  {
    id: 50,
    question:
      "Which multiway switching system is notable for its usefulness for long hallways?",
    options: ["Alternative", "California", "Carter", "Traveler"],
    correctAnswer: "Traveler",
    explanation:
      "Traveler switch systems allow control from multiple locations, ideal for long hallways.",
    category: "CircuitLab",
    difficulty: "Medium",
  },
  {
    id: 51,
    question: "What causes currents to change every half cycle in a motor?",
    options: ["Programming", "Commutator", "Combinatorics", "Bigfoot"],
    correctAnswer: "Commutator",
    explanation:
      "The commutator reverses current direction in DC motors every half cycle to maintain rotation.",
    category: "CircuitLab",
    difficulty: "Medium",
  },
  {
    id: 52,
    question:
      "What color is associated with an LED that has an ideal voltage drop of 4.15V?",
    options: ["Red", "Green", "Blue", "White"],
    correctAnswer: "Blue",
    explanation:
      "Blue LEDs typically have forward voltage drops around 3.0-4.2V due to their wider bandgap.",
    category: "CircuitLab",
    difficulty: "Medium",
  },
  {
    id: 53,
    question: "What is the curie temperature of Gadolinium?",
    options: ["192K", "292K", "392K", "492K"],
    correctAnswer: "292K",
    explanation:
      "Gadolinium has a Curie temperature of approximately 292K (19°C) where it loses ferromagnetism.",
    category: "CircuitLab",
    difficulty: "Hard",
  },
  {
    id: 54,
    question:
      "What is the effect of a 200 mA current passing from the left hand to the feet in 20 ms?",
    options: ["No effect", "Tingling", "Shaking", "Death"],
    correctAnswer: "Death",
    explanation:
      "Currents over 100mA through the heart can cause fatal ventricular fibrillation.",
    category: "CircuitLab",
    difficulty: "Medium",
  },
  {
    id: 55,
    question:
      "What magnetism results from the orbital angular momentum of electrons antiparallel to the external field?",
    options: [
      "Paramagnetism",
      "Diamagnetism",
      "Ferromagnetism",
      "Antiferromagnetism",
    ],
    correctAnswer: "Diamagnetism",
    explanation:
      "Diamagnetism occurs when electron orbital motions create magnetic moments opposing external fields.",
    category: "CircuitLab",
    difficulty: "Hard",
  },
  {
    id: 56,
    question:
      "What is a disadvantage of Eddy Current Brakes used in slow high-speed trains and roller coasters?",
    options: [
      "Frequent replacement of components",
      "Temperature-dependent",
      "No force when stationary",
      "Rare metals required",
    ],
    correctAnswer: "No force when stationary",
    explanation:
      "Eddy current brakes require relative motion between magnet and conductor; no braking occurs at zero speed.",
    category: "CircuitLab",
    difficulty: "Medium",
  },
  {
    id: 57,
    question:
      "Two initially uncharged metal spheres are separated while a charged rod is nearby. What happens to sphere B?",
    options: [
      "It is uncharged",
      "It is positively charged",
      "It is negatively charged",
      "It is charged, but sign cannot be predicted",
    ],
    correctAnswer: "It is positively charged",
    explanation:
      "The negative rod induces positive charge on the near sphere (B) during separation by induction.",
    category: "CircuitLab",
    difficulty: "Medium",
  },
  {
    id: 58,
    question:
      "Two capacitors are connected in parallel. What is the ratio of charge stored on C1 to C2 when C1 = 1.5*C2?",
    options: ["2/3", "3/2", "1", "9/4"],
    correctAnswer: "3/2",
    explanation:
      "In parallel capacitors, Q1/Q2 = C1/C2 = 1.5 = 3/2 since voltage is the same across both.",
    category: "CircuitLab",
    difficulty: "Easy",
  },
  {
    id: 59,
    question:
      "In the unlikely event that a high voltage power line hits your car, what is the best method of escape?",
    options: [
      "Jump out with both feet together",
      "Slide out of the window feet first",
      "Roll out onto the ground",
      "Crawl out",
    ],
    correctAnswer: "Jump out with both feet together",
    explanation:
      "Jumping clear prevents creating a voltage gradient path through your body while exiting.",
    category: "CircuitLab",
    difficulty: "Easy",
  },
  {
    id: 60,
    question: "Which of the following is most related to digital logic?",
    options: [
      "Spectral Decomposition",
      "Neural networks",
      "Error Propagation",
      "Fast Fourier Transforms",
    ],
    correctAnswer: "Neural networks",
    explanation:
      "Neural networks fundamentally operate on digital logic principles for computation and decision making.",
    category: "CircuitLab",
    difficulty: "Medium",
  },
];
