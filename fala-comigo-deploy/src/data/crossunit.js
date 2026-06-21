// Cross-unit sentences for sentence builder and free recall
// Each sentence lists which units it requires (user must have completed them)
// words: the bubble words to arrange, answer: correct sentence, en: English
// reqUnits: minimum units that must be completed for this to appear

export const CROSS_SENTENCES = [
  // Level 0-1 combos (early learners)
  {req:3, answer:"Bom dia, minha mãe!",en:"Good morning, my mom!",words:["Bom","dia","minha","mãe"]},
  {req:4, answer:"Eu tenho dois irmãos.",en:"I have two brothers.",words:["Eu","tenho","dois","irmãos"]},
  {req:5, answer:"Obrigado, tchau, até logo!",en:"Thanks, bye, see you later!",words:["Obrigado","tchau","até","logo"]},
  {req:7, answer:"Eu quero água, por favor.",en:"I want water, please.",words:["Eu","quero","água","por","favor"]},
  {req:8, answer:"A comida está muito gostosa!",en:"The food is very delicious!",words:["A","comida","está","muito","gostosa"]},
  {req:9, answer:"O restaurante fica perto daqui.",en:"The restaurant is nearby.",words:["O","restaurante","fica","perto","daqui"]},
  {req:10, answer:"Onde fica o hospital?",en:"Where is the hospital?",words:["Onde","fica","o","hospital"]},
  {req:11, answer:"Hoje está frio e chovendo.",en:"Today it's cold and raining.",words:["Hoje","está","frio","e","chovendo"]},
  {req:12, answer:"Estou com dor de cabeça.",en:"I have a headache.",words:["Estou","com","dor","de","cabeça"]},
  // Level 2-3 combos
  {req:15, answer:"Eu gosto de comer arroz e feijão.",en:"I like to eat rice and beans.",words:["Eu","gosto","de","comer","arroz","e","feijão"]},
  {req:16, answer:"Ela está feliz porque ganhou um presente.",en:"She is happy because she got a gift.",words:["Ela","está","feliz","porque","ganhou","um","presente"]},
  {req:17, answer:"Eu quero comprar uma camisa azul.",en:"I want to buy a blue shirt.",words:["Eu","quero","comprar","uma","camisa","azul"]},
  {req:18, answer:"Minha casa tem três quartos grandes.",en:"My house has three big bedrooms.",words:["Minha","casa","tem","três","quartos","grandes"]},
  {req:20, answer:"De manhã eu tomo café e saio.",en:"In the morning I have coffee and leave.",words:["De","manhã","eu","tomo","café","e","saio"]},
  {req:21, answer:"Eu acordo cedo e durmo tarde.",en:"I wake up early and sleep late.",words:["Eu","acordo","cedo","e","durmo","tarde"]},
  {req:22, answer:"Ontem eu fui ao cinema com amigos.",en:"Yesterday I went to the movies with friends.",words:["Ontem","eu","fui","ao","cinema","com","amigos"]},
  {req:24, answer:"O banco fica na rua principal.",en:"The bank is on the main street.",words:["O","banco","fica","na","rua","principal"]},
  {req:25, answer:"No fim de semana eu gosto de dançar.",en:"On weekends I like to dance.",words:["No","fim","de","semana","eu","gosto","de","dançar"]},
  // Level 3-4 combos (past tense + feelings + places)
  {req:28, answer:"Ela estava triste mas ficou feliz.",en:"She was sad but became happy.",words:["Ela","estava","triste","mas","ficou","feliz"]},
  {req:29, answer:"Nós nos conhecemos na festa.",en:"We met at the party.",words:["Nós","nos","conhecemos","na","festa"]},
  {req:30, answer:"Ontem foi muito massa a festa!",en:"Yesterday's party was awesome!",words:["Ontem","foi","muito","massa","a","festa"]},
  {req:32, answer:"Eu gosto de café, mas prefiro chá.",en:"I like coffee, but I prefer tea.",words:["Eu","gosto","de","café","mas","prefiro","chá"]},
  // Level 5-6 combos
  {req:36, answer:"Preciso baixar um aplicativo no celular.",en:"I need to download an app on my phone.",words:["Preciso","baixar","um","aplicativo","no","celular"]},
  {req:38, answer:"Vamos à praia tomar água de coco!",en:"Let's go to the beach and drink coconut water!",words:["Vamos","à","praia","tomar","água","de","coco"]},
  {req:40, answer:"Eu jogo futebol todo sábado no parque.",en:"I play soccer every Saturday at the park.",words:["Eu","jogo","futebol","todo","sábado","no","parque"]},
  {req:42, answer:"Preciso comprar a passagem de avião.",en:"I need to buy the plane ticket.",words:["Preciso","comprar","a","passagem","de","avião"]},
  {req:43, answer:"O médico disse para tomar o remédio.",en:"The doctor said to take the medicine.",words:["O","médico","disse","para","tomar","o","remédio"]},
  {req:45, answer:"Estou com muita saudade da minha família.",en:"I miss my family a lot.",words:["Estou","com","muita","saudade","da","minha","família"]},
  {req:47, answer:"No Carnaval as pessoas dançam samba na rua.",en:"During Carnival people dance samba in the street.",words:["No","Carnaval","as","pessoas","dançam","samba","na","rua"]},
  // Level 7-8 combos (professional + culture)
  {req:49, answer:"Temos uma reunião amanhã às dez horas.",en:"We have a meeting tomorrow at ten.",words:["Temos","uma","reunião","amanhã","às","dez","horas"]},
  {req:52, answer:"Quero abrir uma conta no banco.",en:"I want to open an account at the bank.",words:["Quero","abrir","uma","conta","no","banco"]},
  {req:55, answer:"Preciso atualizar meu currículo para a entrevista.",en:"I need to update my resume for the interview.",words:["Preciso","atualizar","meu","currículo","para","a","entrevista"]},
  {req:60, answer:"A feijoada é o prato nacional do Brasil.",en:"Feijoada is Brazil's national dish.",words:["A","feijoada","é","o","prato","nacional","do","Brasil"]},
  {req:63, answer:"O Brasil já ganhou cinco Copas do Mundo.",en:"Brazil has won five World Cups.",words:["O","Brasil","já","ganhou","cinco","Copas","do","Mundo"]},
  // Level 9+ combos (advanced grammar + expression)
  {req:69, answer:"Espero que você goste do Brasil!",en:"I hope you like Brazil!",words:["Espero","que","você","goste","do","Brasil"]},
  {req:70, answer:"Se eu pudesse, viajaria o mundo inteiro.",en:"If I could, I'd travel the whole world.",words:["Se","eu","pudesse","viajaria","o","mundo","inteiro"]},
  {req:71, answer:"São Paulo é maior que o Rio de Janeiro.",en:"São Paulo is bigger than Rio de Janeiro.",words:["São","Paulo","é","maior","que","o","Rio","de","Janeiro"]},
  {req:78, answer:"Tô nem aí com o que ele disse.",en:"I don't care what he said.",words:["Tô","nem","aí","com","o","que","ele","disse"]},
  {req:89, answer:"Socorro! Chama a ambulância, rápido!",en:"Help! Call the ambulance, quick!",words:["Socorro","Chama","a","ambulância","rápido"]},
  {req:90, answer:"O aluguel é dois mil reais por mês.",en:"The rent is two thousand reais per month.",words:["O","aluguel","é","dois","mil","reais","por","mês"]},
  // Level 12+ combos (fluent)
  {req:99, answer:"Preciso terminar a tese até dezembro.",en:"I need to finish the thesis by December.",words:["Preciso","terminar","a","tese","até","dezembro"]},
  {req:107, answer:"Água mole em pedra dura, tanto bate até que fura.",en:"Persistence wins.",words:["Água","mole","em","pedra","dura","tanto","bate","até","que","fura"]},
  {req:122, answer:"Eu vou, você vai, nós vamos, eles vão.",en:"I go, you go, we go, they go.",words:["Eu","vou","você","vai","nós","vamos","eles","vão"]},
  {req:129, answer:"Quer um cafezinho com um pouquinho de açúcar?",en:"Want a little coffee with a tiny bit of sugar?",words:["Quer","um","cafezinho","com","um","pouquinho","de","açúcar"]},
  {req:131, answer:"O correto é pra eu fazer, não pra mim.",en:"The correct form is 'for me to do', not 'for me'.",words:["O","correto","é","pra","eu","fazer","não","pra","mim"]},
  {req:142, answer:"Tô com muita saudade de você!",en:"I miss you so much!",words:["Tô","com","muita","saudade","de","você"]},
];

// Themed review clusters — unlock after completing related units
export const THEME_CLUSTERS = [
  {name:"🍽️ All Food",desc:"Restaurant + Brazilian Food + Cooking",units:[7,8,37,60,92,115,140],minDone:4},
  {name:"💼 Work Life",desc:"Business + Office + Job Search + Meetings",units:[23,49,53,54,55,56,57,58],minDone:4},
  {name:"🗣️ All Verbs",desc:"Core + Past + Subjunctive + Conditional + Gerund",units:[14,22,31,69,70,122,123,124,125],minDone:5},
  {name:"❤️ Relationships",desc:"Family + Love + Feelings + Farewells",units:[4,15,28,29,45,46,74,103,135,142],minDone:4},
  {name:"🌍 Brazil Deep",desc:"Culture + Geography + History + Music",units:[47,48,59,61,62,63,64,67,68,137,138],minDone:5},
  {name:"🏥 Health",desc:"Body + Health + Medicine + Pharmacy + Mental",units:[12,43,86,87,112,113,134,145],minDone:4},
  {name:"🏠 Home Life",desc:"Home + Furniture + Repairs + Kitchen + Chores",units:[17,37,95,97,114,146],minDone:3},
  {name:"🗺️ Getting Around",desc:"Directions + Transport + Driving + Airport",units:[9,19,42,91,150],minDone:3},
  {name:"🗨️ Street Portuguese",desc:"Slang + Colloquial + Internet + Regional",units:[30,33,34,78,132,133,141,148],minDone:4},
  {name:"🌿 Nature",desc:"Nature + Animals + Weather + Biomes",units:[11,39,44,45,93,94,98,139],minDone:4},
];
