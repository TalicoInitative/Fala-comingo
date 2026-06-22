// Mini-stories per unit — custom stories using unit vocabulary
// story: array of {pt, en} lines, questions: array of {q, a, opts}

export const STORIES = {
  0: {story:[
    {pt:"Maria acordou e disse: 'Bom dia!'",en:"Maria woke up and said: 'Good morning!'"},
    {pt:"Ela foi ao trabalho e encontrou João. 'Oi! Tudo bem?'",en:"She went to work and met João. 'Hi! How are you?'"},
    {pt:"'Tudo bem! Até logo!' disse João.",en:"'All good! See you later!' said João."}
  ],questions:[
    {q:"O que Maria disse de manhã?",a:"Bom dia",opts:["Boa noite","Tchau"]},
    {q:"João disse 'Até logo'. O que significa?",a:"See you later",opts:["Good morning","Thank you"]}
  ]},
  1: {story:[
    {pt:"Pedro entrou no restaurante. 'Com licença, posso sentar aqui?'",en:"Pedro entered the restaurant. 'Excuse me, may I sit here?'"},
    {pt:"'Claro! Por favor!' disse a garçonete.",en:"'Of course! Please!' said the waitress."},
    {pt:"'Muito obrigado!' Pedro sorriu. 'De nada!' ela respondeu.",en:"'Thank you very much!' Pedro smiled. 'You're welcome!' she replied."}
  ],questions:[
    {q:"O que Pedro pediu?",a:"Permissão para sentar",opts:["A conta","Um café"]},
    {q:"A garçonete foi educada?",a:"Sim, disse 'por favor' e 'de nada'",opts:["Não","Não respondeu"]}
  ]},
  2: {story:[
    {pt:"Ana é brasileira. Ela mora em São Paulo.",en:"Ana is Brazilian. She lives in São Paulo."},
    {pt:"Ela conheceu um canadense chamado Tom. 'Prazer! Eu sou a Ana.'",en:"She met a Canadian named Tom. 'Nice to meet you! I'm Ana.'"},
    {pt:"'Prazer! Eu moro no Canadá mas estou visitando o Brasil.'",en:"'Nice to meet you! I live in Canada but I'm visiting Brazil.'"}
  ],questions:[
    {q:"De onde é a Ana?",a:"Do Brasil",opts:["Do Canadá","De Portugal"]},
    {q:"O que Tom está fazendo no Brasil?",a:"Visitando",opts:["Morando","Trabalhando"]}
  ]},
  3: {story:[
    {pt:"No mercado, Dona Ana comprou arroz, feijão e frango.",en:"At the market, Dona Ana bought rice, beans and chicken."},
    {pt:"'Quanto custa o quilo de tomate?' ela perguntou.",en:"'How much is a kilo of tomatoes?' she asked."},
    {pt:"'Três reais! Muito barato hoje!' disse o vendedor.",en:"'Three reais! Very cheap today!' said the vendor."}
  ],questions:[
    {q:"O que Dona Ana comprou?",a:"Arroz, feijão e frango",opts:["Pizza","Bolo"]},
    {q:"Quanto custou o tomate?",a:"Três reais",opts:["Dez reais","Cinco reais"]}
  ]},
  4: {story:[
    {pt:"A família Silva é grande. O pai se chama Carlos e a mãe, Lucia.",en:"The Silva family is big. The father's name is Carlos and the mother, Lucia."},
    {pt:"Eles têm três filhos: dois meninos e uma menina.",en:"They have three children: two boys and one girl."},
    {pt:"No domingo, a avó faz almoço para toda a família.",en:"On Sunday, grandmother makes lunch for the whole family."}
  ],questions:[
    {q:"Quantos filhos Carlos e Lucia têm?",a:"Três",opts:["Dois","Quatro"]},
    {q:"Quem cozinha no domingo?",a:"A avó",opts:["A mãe","O pai"]}
  ]},
  5: {story:[
    {pt:"O apartamento de Lucas é pequeno mas bonito.",en:"Lucas's apartment is small but beautiful."},
    {pt:"As paredes são brancas e o sofá é azul.",en:"The walls are white and the sofa is blue."},
    {pt:"Da janela, ele vê uma praça com árvores verdes.",en:"From the window, he sees a square with green trees."}
  ],questions:[
    {q:"Como é o apartamento?",a:"Pequeno mas bonito",opts:["Grande e feio","Velho"]},
    {q:"De que cor é o sofá?",a:"Azul",opts:["Vermelho","Verde"]}
  ]},
  6: {story:[
    {pt:"Camila precisa de roupa nova para a entrevista.",en:"Camila needs new clothes for the interview."},
    {pt:"Ela comprou uma camisa branca e uma saia preta.",en:"She bought a white shirt and a black skirt."},
    {pt:"'Essa roupa ficou perfeita!' disse a vendedora.",en:"'These clothes look perfect!' said the saleswoman."}
  ],questions:[
    {q:"Para que Camila precisa de roupa?",a:"Para a entrevista",opts:["Para a praia","Para dormir"]},
    {q:"Que cor é a camisa?",a:"Branca",opts:["Preta","Azul"]}
  ]},
  7: {story:[
    {pt:"Lucas foi ao mercado. Ele comprou arroz, feijão e frango.",en:"Lucas went to the market. He bought rice, beans, and chicken."},
    {pt:"Depois, ele tomou um suco de laranja no bar da esquina.",en:"Then, he drank an orange juice at the corner bar."},
    {pt:"Em casa, ele cozinhou o jantar. 'Hmm, está delicioso!'",en:"At home, he cooked dinner. 'Hmm, it's delicious!'"}
  ],questions:[
    {q:"O que Lucas comprou?",a:"Arroz, feijão e frango",opts:["Pizza","Bolo"]},
    {q:"Onde ele tomou suco?",a:"No bar da esquina",opts:["Em casa","No mercado"]}
  ]},
  8: {story:[
    {pt:"João e Maria foram ao restaurante às oito da noite.",en:"João and Maria went to the restaurant at eight PM."},
    {pt:"Ele pediu frango com arroz. Ela pediu peixe com salada.",en:"He ordered chicken with rice. She ordered fish with salad."},
    {pt:"A conta ficou cento e vinte reais. Eles dividiram.",en:"The bill was one hundred twenty reais. They split it."}
  ],questions:[
    {q:"O que Maria pediu?",a:"Peixe com salada",opts:["Frango","Pizza"]},
    {q:"Quanto ficou a conta?",a:"Cento e vinte reais",opts:["Cinquenta","Duzentos"]}
  ]},
  9: {story:[
    {pt:"Sofia está perdida no centro da cidade.",en:"Sofia is lost downtown."},
    {pt:"Ela pergunta: 'Com licença, onde fica o hospital?'",en:"She asks: 'Excuse me, where is the hospital?'"},
    {pt:"'Segue em frente, vira à direita na segunda rua. Fica perto da praça.'",en:"'Go straight, turn right on the second street. It's near the square.'"},
    {pt:"'Muito obrigada!' Sofia encontrou o hospital em cinco minutos.",en:"'Thank you!' Sofia found the hospital in five minutes."}
  ],questions:[
    {q:"O que Sofia estava procurando?",a:"O hospital",opts:["O banco","A escola"]},
    {q:"Para que lado ela virou?",a:"À direita",opts:["À esquerda","Em frente"]}
  ]},
  10: {story:[
    {pt:"São oito da manhã. Paulo acorda e toma café.",en:"It's eight AM. Paulo wakes up and has coffee."},
    {pt:"Às nove, ele vai ao trabalho de metrô.",en:"At nine, he goes to work by subway."},
    {pt:"Às seis da tarde, volta para casa e joga futebol.",en:"At six PM, he goes home and plays soccer."}
  ],questions:[
    {q:"Como Paulo vai ao trabalho?",a:"De metrô",opts:["De carro","A pé"]},
    {q:"O que ele faz à tarde?",a:"Joga futebol",opts:["Dorme","Estuda"]}
  ]},
  11: {story:[
    {pt:"Hoje está chovendo muito em São Paulo.",en:"Today it's raining a lot in São Paulo."},
    {pt:"A temperatura caiu e está fazendo frio.",en:"The temperature dropped and it's cold."},
    {pt:"Amanhã o sol volta e vai fazer calor.",en:"Tomorrow the sun returns and it'll be hot."}
  ],questions:[
    {q:"Que tempo faz hoje?",a:"Chuva e frio",opts:["Sol e calor","Neve"]},
    {q:"Como vai estar amanhã?",a:"Sol e calor",opts:["Mais chuva","Neve"]}
  ]},
  12: {story:[
    {pt:"Miguel está doente. Ele tem febre e dor de garganta.",en:"Miguel is sick. He has a fever and sore throat."},
    {pt:"O médico disse: 'Tome esse remédio três vezes ao dia.'",en:"The doctor said: 'Take this medicine three times a day.'"},
    {pt:"Depois de três dias, Miguel melhorou. 'Obrigado, doutor!'",en:"After three days, Miguel got better. 'Thank you, doctor!'"}
  ],questions:[
    {q:"O que Miguel sentia?",a:"Febre e dor de garganta",opts:["Dor de cabeça","Nada"]},
    {q:"Quantas vezes por dia o remédio?",a:"Três",opts:["Uma","Cinco"]}
  ]},
  13: {story:[
    {pt:"Na loja, o celular custa novecentos e noventa reais.",en:"At the store, the phone costs nine hundred ninety reais."},
    {pt:"Maria tem oitocentos. Faltam cento e noventa.",en:"Maria has eight hundred. She's one hundred ninety short."},
    {pt:"'Posso pagar em dez vezes?' 'Pode sim!'",en:"'Can I pay in ten installments?' 'Sure!'"}
  ],questions:[
    {q:"Quanto custa o celular?",a:"Novecentos e noventa",opts:["Quinhentos","Mil"]},
    {q:"Como ela vai pagar?",a:"Em dez vezes",opts:["À vista","Com Pix"]}
  ]},
  14: {story:[
    {pt:"Rafael sabe tocar violão e cantar muito bem.",en:"Rafael knows how to play guitar and sing very well."},
    {pt:"Ele pode falar três línguas: português, inglês e espanhol.",en:"He can speak three languages: Portuguese, English and Spanish."},
    {pt:"Mas ele não sabe cozinhar! 'Não consigo nem fazer arroz!'",en:"But he can't cook! 'I can't even make rice!'"}
  ],questions:[
    {q:"Quantas línguas Rafael fala?",a:"Três",opts:["Duas","Quatro"]},
    {q:"O que ele NÃO sabe fazer?",a:"Cozinhar",opts:["Cantar","Tocar violão"]}
  ]},
  15: {story:[
    {pt:"Depois de um dia longo, Bia está com fome e sono.",en:"After a long day, Bia is hungry and sleepy."},
    {pt:"Ela está nervosa porque tem prova amanhã.",en:"She's nervous because she has a test tomorrow."},
    {pt:"'Vou comer, estudar um pouco e dormir cedo.'",en:"'I'll eat, study a bit and sleep early.'"}
  ],questions:[
    {q:"Por que Bia está nervosa?",a:"Tem prova amanhã",opts:["Está doente","Perdeu o emprego"]},
    {q:"O que ela vai fazer?",a:"Comer, estudar e dormir",opts:["Sair com amigos","Assistir TV"]}
  ]},
  16: {story:[
    {pt:"Na loja, Clara experimentou três vestidos.",en:"At the store, Clara tried on three dresses."},
    {pt:"O vermelho era caro, o azul era grande demais.",en:"The red one was expensive, the blue one was too big."},
    {pt:"O verde ficou perfeito! 'Esse eu levo!'",en:"The green one fit perfectly! 'I'll take this one!'"}
  ],questions:[
    {q:"Quantos vestidos ela experimentou?",a:"Três",opts:["Dois","Cinco"]},
    {q:"Qual ela escolheu?",a:"O verde",opts:["O vermelho","O azul"]}
  ]},
  17: {story:[
    {pt:"A casa nova de Carla tem dois quartos e um banheiro.",en:"Carla's new house has two bedrooms and one bathroom."},
    {pt:"A cozinha é pequena mas a sala é grande e clara.",en:"The kitchen is small but the living room is big and bright."},
    {pt:"Ela comprou um sofá azul e uma mesa de madeira.",en:"She bought a blue sofa and a wooden table."},
    {pt:"'Adoro minha casa nova!' disse Carla, feliz.",en:"'I love my new house!' said Carla, happily."}
  ],questions:[
    {q:"Quantos quartos tem a casa?",a:"Dois",opts:["Três","Um"]},
    {q:"De que cor é o sofá?",a:"Azul",opts:["Vermelho","Verde"]}
  ]},
  18: {story:[
    {pt:"Está frio hoje. Pedro veste calça, casaco e botas.",en:"It's cold today. Pedro wears pants, a jacket and boots."},
    {pt:"Ele esqueceu o guarda-chuva e começou a chover.",en:"He forgot his umbrella and it started raining."},
    {pt:"'Devia ter vestido o impermeável!' ele pensou, molhado.",en:"'Should have worn the raincoat!' he thought, soaked."}
  ],questions:[
    {q:"Que tempo faz?",a:"Frio e chovendo",opts:["Calor","Sol"]},
    {q:"O que Pedro esqueceu?",a:"O guarda-chuva",opts:["A carteira","O celular"]}
  ]},
  19: {story:[
    {pt:"O ônibus de Ana atrasou trinta minutos.",en:"Ana's bus was thirty minutes late."},
    {pt:"Ela pegou um táxi para não chegar atrasada.",en:"She took a taxi to avoid being late."},
    {pt:"'Da próxima vez, vou de metrô!' ela decidiu.",en:"'Next time, I'll take the subway!' she decided."}
  ],questions:[
    {q:"Quanto o ônibus atrasou?",a:"Trinta minutos",opts:["Uma hora","Dez minutos"]},
    {q:"Como ela foi ao trabalho?",a:"De táxi",opts:["De ônibus","A pé"]}
  ]},
  20: {story:[
    {pt:"Bruno acorda às seis da manhã. Toma banho e café.",en:"Bruno wakes up at six AM. He showers and has coffee."},
    {pt:"Ele vai ao trabalho de ônibus. Trabalha das oito às cinco.",en:"He goes to work by bus. Works from eight to five."},
    {pt:"À noite, ele janta, assiste TV e dorme às onze.",en:"At night, he has dinner, watches TV and sleeps at eleven."}
  ],questions:[
    {q:"A que horas Bruno acorda?",a:"Às seis",opts:["Às oito","Às dez"]},
    {q:"Como ele vai ao trabalho?",a:"De ônibus",opts:["De carro","A pé"]}
  ]},
  21: {story:[
    {pt:"Todo dia, Marcos acorda às seis, toma café e corre no parque.",en:"Every day, Marcos wakes up at six, has coffee and runs in the park."},
    {pt:"Ele trabalha das nove às cinco num escritório.",en:"He works from nine to five at an office."},
    {pt:"À noite, cozinha o jantar e lê antes de dormir.",en:"At night, he cooks dinner and reads before sleeping."}
  ],questions:[
    {q:"O que Marcos faz de manhã?",a:"Toma café e corre",opts:["Dorme","Assiste TV"]},
    {q:"O que ele faz à noite?",a:"Cozinha e lê",opts:["Trabalha","Joga futebol"]}
  ]},
  22: {story:[
    {pt:"Ontem, Julia foi à praia com os amigos.",en:"Yesterday, Julia went to the beach with friends."},
    {pt:"Eles nadaram, jogaram vôlei e comeram açaí.",en:"They swam, played volleyball and ate açaí."},
    {pt:"À noite, foram a um restaurante e beberam caipirinha.",en:"At night, they went to a restaurant and drank caipirinha."},
    {pt:"'Foi o melhor dia!' disse Julia, sorrindo.",en:"'It was the best day!' said Julia, smiling."}
  ],questions:[
    {q:"Onde Julia foi ontem?",a:"À praia",opts:["Ao trabalho","Ao cinema"]},
    {q:"O que eles comeram?",a:"Açaí",opts:["Pizza","Feijoada"]}
  ]},
  23: {story:[
    {pt:"Laura estuda medicina na universidade de manhã.",en:"Laura studies medicine at the university in the morning."},
    {pt:"À tarde, ela trabalha num consultório como estagiária.",en:"In the afternoon, she works at a clinic as an intern."},
    {pt:"'É cansativo, mas meu sonho é ser médica!'",en:"'It's tiring, but my dream is to be a doctor!'"}
  ],questions:[
    {q:"O que Laura estuda?",a:"Medicina",opts:["Direito","Engenharia"]},
    {q:"O que ela faz à tarde?",a:"Trabalha como estagiária",opts:["Dorme","Viaja"]}
  ]},
  24: {story:[
    {pt:"A cidade tem uma igreja antiga e um parque bonito.",en:"The city has an old church and a beautiful park."},
    {pt:"Perto do prédio grande, tem um restaurante e uma loja.",en:"Near the big building, there's a restaurant and a shop."},
    {pt:"'Eu gosto de andar pela cidade!' disse Carlos.",en:"'I like walking through the city!' said Carlos."}
  ],questions:[
    {q:"O que a cidade tem?",a:"Uma igreja e um parque",opts:["Só prédios","Nada"]}
  ]},
  25: {story:[
    {pt:"No fim de semana, Gabriel toca violão e ouve música.",en:"On weekends, Gabriel plays guitar and listens to music."},
    {pt:"Ele gosta de samba, MPB e rock brasileiro.",en:"He likes samba, MPB and Brazilian rock."},
    {pt:"'A música brasileira é a melhor do mundo!'",en:"'Brazilian music is the best in the world!'"}
  ],questions:[
    {q:"O que Gabriel faz no fim de semana?",a:"Toca violão e ouve música",opts:["Trabalha","Estuda"]},
    {q:"Que tipos de música ele gosta?",a:"Samba, MPB e rock",opts:["Jazz e blues","Ópera"]}
  ]},
  26: {story:[
    {pt:"De manhã, Ana acorda, abre a janela e bebe café.",en:"In the morning, Ana wakes up, opens the window, and drinks coffee."},
    {pt:"Depois, ela come pão e anda até o trabalho.",en:"Then she eats bread and walks to work."},
    {pt:"À noite, ela senta no sofá e dorme cedo.",en:"At night, she sits on the sofa and sleeps early."}
  ],questions:[
    {q:"O que Ana faz de manhã?",a:"Bebe café e come pão",opts:["Dorme","Corre"]}
  ]},
  27: {story:[
    {pt:"'Na minha opinião, o Brasil é o melhor país!' disse Pedro.",en:"'In my opinion, Brazil is the best country!' said Pedro."},
    {pt:"'Eu concordo! É verdade!' disse Maria.",en:"'I agree! It's true!' said Maria."},
    {pt:"'Eu discordo,' disse João. 'Eu acho que todos os países são bons.'",en:"'I disagree,' said João. 'I think all countries are good.'"}
  ],questions:[
    {q:"João concordou com Pedro?",a:"Não, ele discordou",opts:["Sim","Não respondeu"]}
  ]},
  28: {story:[
    {pt:"Marcos viu Camila na festa e ficou apaixonado.",en:"Marcos saw Camila at the party and fell in love."},
    {pt:"Ele pediu o número dela. 'Quer tomar um café comigo?'",en:"He asked for her number. 'Want to have coffee with me?'"},
    {pt:"No primeiro encontro, ele levou flores. Ela sorriu.",en:"On the first date, he brought flowers. She smiled."},
    {pt:"Agora estão namorando. 'Ela é o amor da minha vida.'",en:"Now they're dating. 'She's the love of my life.'"}
  ],questions:[
    {q:"Onde Marcos conheceu Camila?",a:"Na festa",opts:["No trabalho","Na escola"]},
    {q:"O que ele levou no primeiro encontro?",a:"Flores",opts:["Chocolate","Nada"]}
  ]},
  29: {story:[
    {pt:"Carlos viu Fernanda na festa e ficou encantado.",en:"Carlos saw Fernanda at the party and was enchanted."},
    {pt:"Ele a convidou para um encontro. Foram jantar juntos.",en:"He invited her on a date. They went to dinner together."},
    {pt:"Três meses depois, estão namorando. 'Te amo!' ele disse.",en:"Three months later, they're dating. 'I love you!' he said."}
  ],questions:[
    {q:"Onde Carlos conheceu Fernanda?",a:"Na festa",opts:["No trabalho","Na escola"]},
    {q:"Quanto tempo até namorarem?",a:"Três meses",opts:["Um dia","Um ano"]}
  ]},
  30: {story:[
    {pt:"'E aí, cara? Beleza?' João cumprimentou o amigo.",en:"'Hey dude? All good?' João greeted his friend."},
    {pt:"'Tudo tranquilo! Ontem foi massa a festa!'",en:"'All chill! Yesterday's party was awesome!'"},
    {pt:"'Valeu pelo convite, mano! Show de bola!'",en:"'Thanks for the invite, bro! Awesome!'"}
  ],questions:[
    {q:"'Beleza' aqui significa...",a:"All good/How are you",opts:["Beauty","Ugly"]},
    {q:"'Massa' significa...",a:"Awesome",opts:["Pasta","Terrible"]}
  ]},
  31: {story:[
    {pt:"A liberdade é importante. Sem coragem, não existe liberdade.",en:"Freedom is important. Without courage, there's no freedom."},
    {pt:"'Tenho orgulho do meu país,' disse o professor.",en:"'I'm proud of my country,' said the teacher."},
    {pt:"Os alunos sentiram confiança depois da conversa.",en:"The students felt trust after the conversation."}
  ],questions:[
    {q:"O que o professor sente?",a:"Orgulho do país",opts:["Vergonha","Medo"]}
  ]},
  32: {story:[
    {pt:"Ana gosta de café, porém prefere chá. Então ela pediu chá.",en:"Ana likes coffee, however she prefers tea. So she ordered tea."},
    {pt:"Também pediu um bolo, porque estava com fome.",en:"She also ordered cake, because she was hungry."},
    {pt:"'Ainda quero mais um!' ela disse, rindo.",en:"'I still want one more!' she said, laughing."}
  ],questions:[
    {q:"O que Ana pediu?",a:"Chá e bolo",opts:["Café","Água"]}
  ]},
  33: {story:[
    {pt:"'Vou dar um jeitinho para resolver isso!' disse Carlos.",en:"'I'll find a way to fix this!' said Carlos."},
    {pt:"Ele quebrou o gelo com uma piada e todos riram.",en:"He broke the ice with a joke and everyone laughed."},
    {pt:"No final, tudo deu certo. 'Fica de boa!' ele disse.",en:"In the end, everything worked out. 'Take it easy!' he said."}
  ],questions:[
    {q:"'Dar um jeitinho' significa...",a:"Find a way/solution",opts:["Give up","Run away"]}
  ]},
  34: {story:[
    {pt:"'Prezado senhor, gostaria de solicitar uma reunião.'",en:"'Dear sir, I would like to request a meeting.'"},
    {pt:"'Posso confirmar para sexta-feira. Agradeço sua atenção.'",en:"'I can confirm for Friday. I appreciate your attention.'"},
    {pt:"'Informo que estarei disponível às dez horas.'",en:"'I inform you that I'll be available at ten o'clock.'"}
  ],questions:[
    {q:"Quando é a reunião?",a:"Sexta-feira às dez",opts:["Segunda","Amanhã"]}
  ]},
  35: {story:[
    {pt:"O computador de Bia quebrou. Ela pegou o celular.",en:"Bia's computer broke. She grabbed her phone."},
    {pt:"'Preciso baixar um aplicativo novo pela internet.'",en:"'I need to download a new app through the internet.'"},
    {pt:"'Qual é a senha do Wi-Fi?' ela perguntou ao vizinho.",en:"'What's the Wi-Fi password?' she asked the neighbor."}
  ],questions:[
    {q:"O que quebrou?",a:"O computador",opts:["O celular","A TV"]}
  ]},
  36: {story:[
    {pt:"O homem alto e magro entrou na loja com a mulher baixa.",en:"The tall, thin man entered the store with the short woman."},
    {pt:"Ele é jovem, tem vinte anos. Ela é mais velha.",en:"He is young, twenty years old. She is older."},
    {pt:"'Vocês são irmãos?' 'Não, somos amigos!'",en:"'Are you siblings?' 'No, we're friends!'"}
  ],questions:[
    {q:"Como é o homem?",a:"Alto e magro",opts:["Baixo e gordo","Velho"]}
  ]},
  37: {story:[
    {pt:"Na cozinha, Maria pegou a panela e ligou o fogão.",en:"In the kitchen, Maria grabbed the pot and turned on the stove."},
    {pt:"A receita dizia: 'Coloque no forno por trinta minutos.'",en:"The recipe said: 'Put in the oven for thirty minutes.'"},
    {pt:"Ela guardou o leite na geladeira e esperou.",en:"She put the milk in the fridge and waited."}
  ],questions:[
    {q:"Onde Maria colocou o prato?",a:"No forno",opts:["Na panela","Na geladeira"]}
  ]},
  38: {story:[
    {pt:"A família foi à praia no sábado de manhã.",en:"The family went to the beach on Saturday morning."},
    {pt:"As crianças nadaram no mar e fizeram castelo de areia.",en:"The kids swam in the sea and made sandcastles."},
    {pt:"O pai comprou água de coco e açaí na barraca.",en:"The dad bought coconut water and açaí at the stand."}
  ],questions:[
    {q:"Quando eles foram à praia?",a:"Sábado de manhã",opts:["Domingo","Segunda"]},
    {q:"O que o pai comprou?",a:"Água de coco e açaí",opts:["Cerveja","Sorvete"]}
  ]},
  39: {story:[
    {pt:"Carlos adora música e filmes. Todo sábado ele vê um show.",en:"Carlos loves music and movies. Every Saturday he sees a show."},
    {pt:"Ele também gosta de ler livros e assistir programas de TV.",en:"He also likes reading books and watching TV shows."},
    {pt:"'O melhor filme que vi foi brasileiro!' ele disse.",en:"'The best movie I saw was Brazilian!' he said."}
  ],questions:[
    {q:"O que Carlos faz todo sábado?",a:"Vê um show",opts:["Trabalha","Dorme"]}
  ]},
  40: {story:[
    {pt:"João joga futebol todo domingo no parque.",en:"João plays soccer every Sunday at the park."},
    {pt:"Depois do treino, ele vai à academia para a natação.",en:"After the workout, he goes to the gym for swimming."},
    {pt:"'Corrida amanhã de manhã!' ele disse aos amigos.",en:"'Running tomorrow morning!' he said to friends."}
  ],questions:[
    {q:"Que esporte João pratica no domingo?",a:"Futebol",opts:["Natação","Corrida"]}
  ]},
  41: {story:[
    {pt:"A advogada trabalha no escritório. O engenheiro, na obra.",en:"The lawyer works at the office. The engineer, at the construction site."},
    {pt:"A dentista cuida dos dentes. O enfermeiro, dos pacientes.",en:"The dentist takes care of teeth. The nurse, of patients."},
    {pt:"E o cozinheiro? Ele faz a melhor comida da cidade!",en:"And the chef? He makes the best food in the city!"}
  ],questions:[
    {q:"Onde o engenheiro trabalha?",a:"Na obra",opts:["No hospital","No restaurante"]}
  ]},
  42: {story:[
    {pt:"Fernanda comprou uma passagem de avião para Salvador.",en:"Fernanda bought a plane ticket to Salvador."},
    {pt:"Ela reservou um hotel perto da praia por cinco noites.",en:"She booked a hotel near the beach for five nights."},
    {pt:"No aeroporto, ela passou pela alfândega sem problemas.",en:"At the airport, she went through customs without problems."},
    {pt:"'O Nordeste é lindo!' ela pensou, olhando o mar azul.",en:"'The Northeast is beautiful!' she thought, looking at the blue sea."}
  ],questions:[
    {q:"Para onde Fernanda viajou?",a:"Salvador",opts:["São Paulo","Rio"]},
    {q:"Quantas noites no hotel?",a:"Cinco",opts:["Três","Sete"]}
  ]},
  43: {story:[
    {pt:"Renata não está se sentindo bem. Dor de cabeça forte.",en:"Renata isn't feeling well. Strong headache."},
    {pt:"Ela foi à farmácia e comprou um comprimido.",en:"She went to the pharmacy and bought a pill."},
    {pt:"Depois de uma hora, a dor passou. 'Que alívio!'",en:"After an hour, the pain went away. 'What a relief!'"}
  ],questions:[
    {q:"O que Renata sentia?",a:"Dor de cabeça",opts:["Dor de barriga","Febre"]},
    {q:"Onde ela comprou remédio?",a:"Na farmácia",opts:["No mercado","No hospital"]}
  ]},
  44: {story:[
    {pt:"A montanha era alta e o rio passava pela floresta.",en:"The mountain was tall and the river ran through the forest."},
    {pt:"No lago, a água era cristalina. Parecia um espelho.",en:"In the lake, the water was crystal clear. It looked like a mirror."},
    {pt:"A cachoeira fazia um barulho lindo. Natureza perfeita!",en:"The waterfall made a beautiful sound. Perfect nature!"}
  ],questions:[
    {q:"Como era a água do lago?",a:"Cristalina",opts:["Suja","Escura"]}
  ]},
  45: {story:[
    {pt:"Depois da prova, Marcos ficou aliviado. Passou!",en:"After the exam, Marcos was relieved. He passed!"},
    {pt:"Mas estava ansioso com o resultado do trabalho.",en:"But he was anxious about the work result."},
    {pt:"'Estou entediado em casa,' disse, orgulhoso do diploma.",en:"'I'm bored at home,' he said, proud of his diploma."}
  ],questions:[
    {q:"Por que Marcos ficou aliviado?",a:"Passou na prova",opts:["Perdeu o emprego","Dormiu bem"]}
  ]},
  46: {story:[
    {pt:"O casamento de Rita e Paulo foi lindo. Cinco anos de namoro.",en:"Rita and Paulo's wedding was beautiful. Five years of dating."},
    {pt:"O noivo chorou. A amizade deles virou amor.",en:"The groom cried. Their friendship turned into love."},
    {pt:"'Quem ainda está solteiro?' brincou a mãe da noiva.",en:"'Who's still single?' joked the bride's mother."}
  ],questions:[
    {q:"Quanto tempo eles namoraram?",a:"Cinco anos",opts:["Dois anos","Dez anos"]}
  ]},
  47: {story:[
    {pt:"No Carnaval, todo mundo dança samba nas ruas.",en:"During Carnival, everyone dances samba in the streets."},
    {pt:"Depois da festa, a família come feijoada e bebe caipirinha.",en:"After the party, the family eats feijoada and drinks caipirinha."},
    {pt:"À noite, todos assistem novela na TV. Cultura brasileira!",en:"At night, everyone watches soap operas on TV. Brazilian culture!"}
  ],questions:[
    {q:"O que as pessoas dançam no Carnaval?",a:"Samba",opts:["Valsa","Rock"]}
  ]},
  48: {story:[
    {pt:"'Faz tempo que não te vejo! Como você está?'",en:"'It's been a while since I saw you! How are you?'"},
    {pt:"'De repente percebi que não tem jeito — mudei de cidade.'",en:"'Suddenly I realized there's no way — I moved cities.'"},
    {pt:"'Aos poucos estou me adaptando. Por acaso, tem emprego aqui?'",en:"'Little by little I'm adapting. By any chance, is there work here?'"}
  ],questions:[
    {q:"'Faz tempo' significa...",a:"It's been a while",opts:["It's fast","It's cold"]}
  ]},
  49: {story:[
    {pt:"Ricardo trabalha numa empresa de tecnologia em São Paulo.",en:"Ricardo works at a tech company in São Paulo."},
    {pt:"Ele teve uma reunião com o chefe às dez da manhã.",en:"He had a meeting with the boss at ten AM."},
    {pt:"'Precisamos entregar o projeto até sexta-feira.'",en:"'We need to deliver the project by Friday.'"},
    {pt:"Depois do trabalho, foi ao happy hour com os colegas.",en:"After work, he went to happy hour with colleagues."}
  ],questions:[
    {q:"Onde Ricardo trabalha?",a:"Numa empresa de tecnologia",opts:["Num hospital","Numa escola"]},
    {q:"Qual é o prazo do projeto?",a:"Sexta-feira",opts:["Segunda","Amanhã"]}
  ]},
  50: {story:[
    {pt:"'Alô? Quem fala?' Marcos ligou para o escritório.",en:"'Hello? Who's speaking?' Marcos called the office."},
    {pt:"Ninguém respondeu. Ele mandou uma mensagem.",en:"Nobody replied. He sent a message."},
    {pt:"Cinco minutos depois, recebeu um recado: 'Liga mais tarde!'",en:"Five minutes later, he got a message: 'Call later!'"}
  ],questions:[
    {q:"O que Marcos fez quando ninguém atendeu?",a:"Mandou uma mensagem",opts:["Desistiu","Gritou"]}
  ]},
  51: {story:[
    {pt:"Ana entrou na universidade! Ganhou uma bolsa de estudos.",en:"Ana got into university! She won a scholarship."},
    {pt:"A pesquisa dela é sobre o meio ambiente do Cerrado.",en:"Her research is about the Cerrado environment."},
    {pt:"Na formatura, ela recebeu o diploma com orgulho.",en:"At graduation, she received her diploma with pride."}
  ],questions:[
    {q:"O que Ana ganhou?",a:"Uma bolsa de estudos",opts:["Um carro","Dinheiro"]}
  ]},
  52: {story:[
    {pt:"André precisa abrir uma conta no banco.",en:"André needs to open an account at the bank."},
    {pt:"Ele levou o CPF, RG e comprovante de endereço.",en:"He brought his CPF, ID and proof of address."},
    {pt:"'Quer conta corrente ou poupança?' 'As duas!'",en:"'Checking or savings?' 'Both!'"}
  ],questions:[
    {q:"O que André precisa abrir?",a:"Uma conta no banco",opts:["Uma empresa","Um restaurante"]},
    {q:"Que documentos ele levou?",a:"CPF, RG e comprovante",opts:["Passaporte","Carteira de motorista"]}
  ]},
  53: {story:[
    {pt:"O convite dizia: 'Festa de aniversário do Pedro!'",en:"The invitation said: 'Pedro's birthday party!'"},
    {pt:"O evento foi incrível. Teve música, dança e bolo.",en:"The event was incredible. There was music, dance, and cake."},
    {pt:"Na formatura da irmã, ele chorou de emoção.",en:"At his sister's graduation, he cried with emotion."}
  ],questions:[
    {q:"O que o convite era para?",a:"Aniversário do Pedro",opts:["Casamento","Reunião"]}
  ]},
  54: {story:[
    {pt:"A impressora quebrou e o relatório era pro prazo de amanhã!",en:"The printer broke and the report was due tomorrow!"},
    {pt:"A entrega da apresentação foi adiada para sexta.",en:"The presentation delivery was postponed to Friday."},
    {pt:"'Menos mal!' disse o gerente, aliviado.",en:"'Thank goodness!' said the manager, relieved."}
  ],questions:[
    {q:"O que quebrou?",a:"A impressora",opts:["O computador","O telefone"]}
  ]},
  55: {story:[
    {pt:"Bianca está procurando emprego. Atualizou o currículo.",en:"Bianca is looking for a job. She updated her resume."},
    {pt:"Ela mandou para dez empresas e foi chamada para três entrevistas.",en:"She sent it to ten companies and was called for three interviews."},
    {pt:"Na segunda entrevista, foi contratada! 'Quando começo?'",en:"In the second interview, she was hired! 'When do I start?'"}
  ],questions:[
    {q:"Para quantas empresas Bianca mandou currículo?",a:"Dez",opts:["Cinco","Vinte"]},
    {q:"Em qual entrevista ela foi contratada?",a:"Na segunda",opts:["Na primeira","Na terceira"]}
  ]},
  56: {story:[
    {pt:"'Minha proposta é reduzir o preço em dez por cento.'",en:"'My proposal is to reduce the price by ten percent.'"},
    {pt:"'O valor não muda, mas posso melhorar as condições.'",en:"'The value doesn't change, but I can improve the conditions.'"},
    {pt:"Após muita conversa, chegaram a um acordo.",en:"After much discussion, they reached an agreement."}
  ],questions:[
    {q:"Qual foi a proposta?",a:"Reduzir o preço",opts:["Aumentar","Cancelar"]}
  ]},
  57: {story:[
    {pt:"O público esperava a apresentação do novo produto.",en:"The audience waited for the new product presentation."},
    {pt:"'Meu argumento é simples,' disse ela, mostrando um exemplo.",en:"'My argument is simple,' she said, showing an example."},
    {pt:"Na conclusão, todos fizeram perguntas.",en:"At the conclusion, everyone asked questions."}
  ],questions:[
    {q:"O que o público fez no final?",a:"Fizeram perguntas",opts:["Dormiram","Saíram"]}
  ]},
  58: {story:[
    {pt:"'O problema é grande, mas temos uma solução!'",en:"'The problem is big, but we have a solution!'"},
    {pt:"O desafio exigia uma nova estratégia da equipe.",en:"The challenge required a new strategy from the team."},
    {pt:"Com um bom plano, resolveram tudo em uma semana.",en:"With a good plan, they solved everything in one week."}
  ],questions:[
    {q:"Quanto tempo levou para resolver?",a:"Uma semana",opts:["Um mês","Um dia"]}
  ]},
  59: {story:[
    {pt:"O forró tocou e todos começaram a dançar.",en:"The forró played and everyone started dancing."},
    {pt:"O violão e o instrumento de percussão marcavam o ritmo.",en:"The guitar and the percussion instrument kept the rhythm."},
    {pt:"'Bossa nova é mais suave,' explicou o professor de música.",en:"'Bossa nova is smoother,' explained the music teacher."}
  ],questions:[
    {q:"Qual música é mais suave?",a:"Bossa nova",opts:["Forró","Funk"]}
  ]},
  60: {story:[
    {pt:"No sábado, a família de Dona Rosa fez feijoada.",en:"On Saturday, Dona Rosa's family made feijoada."},
    {pt:"Ela cozinhou o feijão preto com carne de porco desde cedo.",en:"She cooked the black beans with pork since early morning."},
    {pt:"Serviu com arroz, farofa, couve e laranja.",en:"She served it with rice, farofa, collard greens, and orange."},
    {pt:"De sobremesa, brigadeiro caseiro. 'Receita da vovó!'",en:"For dessert, homemade brigadeiro. 'Grandma's recipe!'"}
  ],questions:[
    {q:"O que Dona Rosa cozinhou?",a:"Feijoada",opts:["Pizza","Sushi"]},
    {q:"O que teve de sobremesa?",a:"Brigadeiro",opts:["Sorvete","Bolo"]}
  ]},
  61: {story:[
    {pt:"O Brasil tem vinte e seis estados e um distrito federal.",en:"Brazil has twenty-six states and one federal district."},
    {pt:"A capital é Brasília, na região Centro-Oeste.",en:"The capital is Brasília, in the Central-West region."},
    {pt:"O Norte tem a Amazônia. O Sul, o frio e o chimarrão.",en:"The North has the Amazon. The South, cold and chimarrão."}
  ],questions:[
    {q:"Quantos estados tem o Brasil?",a:"Vinte e seis",opts:["Vinte","Trinta"]}
  ]},
  62: {story:[
    {pt:"No Natal, a família come peru e troca presentes.",en:"At Christmas, the family eats turkey and exchanges gifts."},
    {pt:"Na Festa Junina, tem forró, fogueira e comida típica.",en:"At the June Festival, there's forró, bonfire, and typical food."},
    {pt:"'Feliz Ano Novo! Feliz Dia das Mães!' todos gritaram.",en:"'Happy New Year! Happy Mother's Day!' everyone shouted."}
  ],questions:[
    {q:"O que tem na Festa Junina?",a:"Forró e fogueira",opts:["Samba","Praia"]}
  ]},
  63: {story:[
    {pt:"O estádio estava lotado. Brasil contra Argentina.",en:"The stadium was packed. Brazil vs Argentina."},
    {pt:"No segundo tempo, o craque brasileiro fez um gol incrível.",en:"In the second half, the Brazilian star scored an incredible goal."},
    {pt:"A torcida gritou: 'GOOOL! É CAMPEÃO!'",en:"The fans screamed: 'GOAAL! CHAMPIONS!'"},
    {pt:"Foi o jogo mais emocionante do ano.",en:"It was the most exciting game of the year."}
  ],questions:[
    {q:"Contra quem o Brasil jogou?",a:"Argentina",opts:["Alemanha","Portugal"]},
    {q:"Quem fez o gol?",a:"O craque brasileiro",opts:["O goleiro","O técnico"]}
  ]},
  64: {story:[
    {pt:"No museu, havia uma pintura linda e uma escultura antiga.",en:"At the museum, there was a beautiful painting and an old sculpture."},
    {pt:"'Adoro poesia e contos brasileiros,' disse a estudante.",en:"'I love poetry and Brazilian short stories,' said the student."},
    {pt:"Ela escreveu um romance sobre a vida no Rio.",en:"She wrote a novel about life in Rio."}
  ],questions:[
    {q:"O que a estudante escreveu?",a:"Um romance",opts:["Um poema","Uma carta"]}
  ]},
  65: {story:[
    {pt:"Na calçada, perto da esquina, um músico tocava violão.",en:"On the sidewalk, near the corner, a musician played guitar."},
    {pt:"O semáforo ficou vermelho e os carros pararam no cruzamento.",en:"The traffic light turned red and cars stopped at the intersection."},
    {pt:"As pessoas atravessaram na faixa de pedestres.",en:"People crossed at the crosswalk."}
  ],questions:[
    {q:"Onde o músico tocava?",a:"Na calçada",opts:["No parque","No ônibus"]}
  ]},
  66: {story:[
    {pt:"Na feira, o vendedor gritava: 'Manga doce! Dois por cinco!'",en:"At the market, the vendor shouted: 'Sweet mango! Two for five!'"},
    {pt:"Maria foi ao mercado e parou na barraca de frutas.",en:"Maria went to the market and stopped at the fruit stall."},
    {pt:"'Posso pechinchar?' 'Leva três por quatro reais!'",en:"'Can I haggle?' 'Take three for four reais!'"}
  ],questions:[
    {q:"O que o vendedor vendia?",a:"Manga",opts:["Roupa","Pão"]}
  ]},
  67: {story:[
    {pt:"Todo domingo, Dona Lúcia vai à igreja e faz uma oração.",en:"Every Sunday, Dona Lúcia goes to church and says a prayer."},
    {pt:"'A fé me dá força,' ela disse. 'Deus é bom!'",en:"'Faith gives me strength,' she said. 'God is good!'"},
    {pt:"No altar havia uma imagem de santo com flores.",en:"At the altar there was an image of a saint with flowers."}
  ],questions:[
    {q:"Quando Dona Lúcia vai à igreja?",a:"Todo domingo",opts:["Todo dia","Nunca"]}
  ]},
  68: {story:[
    {pt:"No rádio tocava sertanejo. Na festa, pagode.",en:"On the radio, country music played. At the party, pagode."},
    {pt:"'MPB é a alma do Brasil,' disse o professor de música.",en:"'MPB is the soul of Brazil,' said the music teacher."},
    {pt:"O funk e o axé fazem todo mundo dançar!",en:"Funk and axé make everyone dance!"}
  ],questions:[
    {q:"O que é 'a alma do Brasil' segundo o professor?",a:"MPB",opts:["Funk","Rock"]}
  ]},
  69: {story:[
    {pt:"'Espero que chova amanhã,' disse o fazendeiro.",en:"'I hope it rains tomorrow,' said the farmer."},
    {pt:"'Quero que meus filhos estudem na cidade.'",en:"'I want my children to study in the city.'"},
    {pt:"'Tomara que a colheita seja boa este ano!'",en:"'I hope the harvest is good this year!'"}
  ],questions:[
    {q:"O que o fazendeiro espera?",a:"Que chova",opts:["Que faça sol","Que neve"]},
    {q:"Onde ele quer que os filhos estudem?",a:"Na cidade",opts:["Na fazenda","No exterior"]}
  ]},
  70: {story:[
    {pt:"'Se eu pudesse, viajaria o mundo inteiro,' disse Marta.",en:"'If I could, I'd travel the whole world,' said Marta."},
    {pt:"'Se tivesse tempo, aprenderia cinco línguas.'",en:"'If I had time, I'd learn five languages.'"},
    {pt:"'Mas por enquanto, gostaria de conhecer o Japão.'",en:"'But for now, I'd like to visit Japan.'"}
  ],questions:[
    {q:"O que Marta faria se pudesse?",a:"Viajaria o mundo",opts:["Dormiria","Trabalharia"]},
    {q:"Que país ela quer conhecer agora?",a:"Japão",opts:["França","Itália"]}
  ]},
  71: {story:[
    {pt:"A pizza do Brasil é diferente da italiana.",en:"Brazil's pizza is different from Italian."},
    {pt:"Tem mais recheio, a massa é mais fina.",en:"It has more toppings, the crust is thinner."},
    {pt:"São Paulo tem a melhor pizza do Brasil — melhor que Nova York!",en:"São Paulo has the best pizza in Brazil — better than New York!"}
  ],questions:[
    {q:"Como é a pizza brasileira comparada à italiana?",a:"Mais recheio, massa mais fina",opts:["Igual","Menos recheio"]},
    {q:"Que cidade tem a melhor pizza?",a:"São Paulo",opts:["Rio","Brasília"]}
  ]},
  72: {story:[
    {pt:"'Daqui a pouco começa o filme. Em breve estaremos lá!'",en:"'In a moment the movie starts. Soon we'll be there!'"},
    {pt:"'Enquanto isso, vamos comer. Até agora não comi nada!'",en:"'Meanwhile, let's eat. Until now I haven't eaten anything!'"},
    {pt:"'Desde que mudei de cidade, não vou ao cinema.'",en:"'Since I moved cities, I don't go to the movies.'"}
  ],questions:[
    {q:"'Daqui a pouco' significa...",a:"In a moment",opts:["Yesterday","Never"]}
  ]},
  73: {story:[
    {pt:"'Além disso, a comida era cara. Apesar de tudo, gostei.'",en:"'Besides, the food was expensive. Despite everything, I liked it.'"},
    {pt:"'Contudo, o serviço foi ruim. Entretanto, o lugar é bonito.'",en:"'However, the service was bad. Nevertheless, the place is nice.'"},
    {pt:"'Por outro lado, a música estava ótima!'",en:"'On the other hand, the music was great!'"}
  ],questions:[
    {q:"A comida era barata?",a:"Não, era cara",opts:["Sim","Grátis"]}
  ]},
  74: {story:[
    {pt:"A nostalgia bateu forte quando viu as fotos antigas.",en:"Nostalgia hit hard when he saw the old photos."},
    {pt:"Sentiu euforia ao lembrar das férias, depois angústia.",en:"He felt euphoria remembering the vacation, then anguish."},
    {pt:"Mas a serenidade voltou. 'Boas memórias,' ele sorriu.",en:"But serenity returned. 'Good memories,' he smiled."}
  ],questions:[
    {q:"O que causou nostalgia?",a:"Fotos antigas",opts:["Música","Comida"]}
  ]},
  75: {story:[
    {pt:"Aconteceu algo inesperado: o preço do café subiu!",en:"Something unexpected happened: the price of coffee went up!"},
    {pt:"Surgiu uma nova cafeteria na rua. O bairro mudou.",en:"A new café appeared on the street. The neighborhood changed."},
    {pt:"O movimento cresceu e o lugar ficou famoso.",en:"The traffic grew and the place became famous."}
  ],questions:[
    {q:"O que aconteceu com o bairro?",a:"Mudou e ficou famoso",opts:["Ficou vazio","Nada"]}
  ]},
  76: {story:[
    {pt:"Por causa da chuva, o jogo foi cancelado.",en:"Because of the rain, the game was cancelled."},
    {pt:"Devido ao trânsito, chegamos atrasados.",en:"Due to traffic, we arrived late."},
    {pt:"Graças ao GPS, encontramos o caminho. Portanto, chegamos!",en:"Thanks to the GPS, we found the way. Therefore, we arrived!"}
  ],questions:[
    {q:"Por que o jogo foi cancelado?",a:"Por causa da chuva",opts:["Falta de jogadores","Calor"]}
  ]},
  77: {story:[
    {pt:"'Aliás, você sabia que amanhã é feriado?'",en:"'By the way, did you know tomorrow is a holiday?'"},
    {pt:"'Inclusive, a empresa toda vai fechar. Enfim, folga!'",en:"'In fact, the whole company will close. Anyway, day off!'"},
    {pt:"'Afinal, merecemos descansar. Pois é!'",en:"'After all, we deserve to rest. Indeed!'"}
  ],questions:[
    {q:"O que acontece amanhã?",a:"É feriado",opts:["Tem prova","Tem trabalho"]}
  ]},
  78: {story:[
    {pt:"'E aí, mano? Tô nem aí pro trabalho hoje!'",en:"'Hey bro? I don't care about work today!'"},
    {pt:"'Sei lá, tipo, vamos dar um rolê?'",en:"'I dunno, like, let's go hang out?'"},
    {pt:"'Bora! Partiu shopping! Tô a fim de comer!'",en:"'Let's go! Off to the mall! I feel like eating!'"},
    {pt:"'Massa! Valeu, mano! Tamo junto!'",en:"'Awesome! Thanks, bro! We're together!'"}
  ],questions:[
    {q:"'Tô nem aí' significa o quê?",a:"I don't care",opts:["I'm hungry","I'm tired"]},
    {q:"Para onde eles foram?",a:"Ao shopping",opts:["À praia","Ao trabalho"]}
  ]},
  79: {story:[
    {pt:"'A consciência nos faz humanos,' disse o filósofo.",en:"'Consciousness makes us human,' said the philosopher."},
    {pt:"'A imaginação cria a realidade que queremos.'",en:"'Imagination creates the reality we want.'"},
    {pt:"'Com criatividade e inteligência, tudo é possível!'",en:"'With creativity and intelligence, everything is possible!'"}
  ],questions:[
    {q:"O que nos faz humanos, segundo o filósofo?",a:"A consciência",opts:["O dinheiro","A força"]}
  ]},
  80: {story:[
    {pt:"A desigualdade social é um problema grave no Brasil.",en:"Social inequality is a serious problem in Brazil."},
    {pt:"A pobreza afeta a educação das crianças.",en:"Poverty affects children's education."},
    {pt:"Sem segurança, a violência aumenta nas cidades.",en:"Without safety, violence increases in the cities."}
  ],questions:[
    {q:"O que a pobreza afeta?",a:"A educação",opts:["O clima","A música"]}
  ]},
  81: {story:[
    {pt:"O meio ambiente precisa de cuidado. A poluição está alta.",en:"The environment needs care. Pollution is high."},
    {pt:"A reciclagem ajuda, mas o desmatamento continua.",en:"Recycling helps, but deforestation continues."},
    {pt:"'Precisamos ser sustentáveis!' disse a ativista.",en:"'We need to be sustainable!' said the activist."}
  ],questions:[
    {q:"O que continua sendo um problema?",a:"O desmatamento",opts:["A reciclagem","O turismo"]}
  ]},
  82: {story:[
    {pt:"A manchete do jornal dizia: 'Nova lei aprovada!'",en:"The newspaper headline said: 'New law approved!'"},
    {pt:"A reportagem citou três fontes diferentes.",en:"The report cited three different sources."},
    {pt:"No noticiário da TV, a matéria durou cinco minutos.",en:"On the TV news, the story lasted five minutes."}
  ],questions:[
    {q:"Quantas fontes a reportagem citou?",a:"Três",opts:["Uma","Dez"]}
  ]},
  83: {story:[
    {pt:"O professor pediu: 'Pensem! Reflitam! Questionem!'",en:"The teacher asked: 'Think! Reflect! Question!'"},
    {pt:"'Não aceitem tudo. É preciso duvidar e analisar.'",en:"'Don't accept everything. It's necessary to doubt and analyze.'"},
    {pt:"Os alunos ficaram em silêncio, pensando profundamente.",en:"The students fell silent, thinking deeply."}
  ],questions:[
    {q:"O que o professor pediu?",a:"Que pensem e questionem",opts:["Que durmam","Que saiam"]}
  ]},
  84: {story:[
    {pt:"A lei garante que todo cidadão pode votar na eleição.",en:"The law guarantees every citizen can vote in the election."},
    {pt:"O governo e o presidente devem servir o povo.",en:"The government and president should serve the people."},
    {pt:"'O voto é nosso poder!' disse o ativista.",en:"'The vote is our power!' said the activist."}
  ],questions:[
    {q:"O que a lei garante?",a:"O direito de votar",opts:["Dinheiro","Emprego"]}
  ]},
  85: {story:[
    {pt:"A cientista fez uma descoberta incrível no laboratório.",en:"The scientist made an incredible discovery in the lab."},
    {pt:"Ela pesquisou durante cinco anos. O experimento funcionou!",en:"She researched for five years. The experiment worked!"},
    {pt:"A teoria dela mudou a ciência para sempre.",en:"Her theory changed science forever."}
  ],questions:[
    {q:"Quanto tempo a cientista pesquisou?",a:"Cinco anos",opts:["Um mês","Um dia"]}
  ]},
  86: {story:[
    {pt:"O diagnóstico do médico: precisa de cirurgia.",en:"The doctor's diagnosis: needs surgery."},
    {pt:"O tratamento vai durar três meses de recuperação.",en:"The treatment will last three months of recovery."},
    {pt:"'Os sintomas já melhoraram!' disse o paciente, feliz.",en:"'The symptoms have already improved!' said the patient, happily."}
  ],questions:[
    {q:"Quanto tempo de recuperação?",a:"Três meses",opts:["Uma semana","Um ano"]}
  ]},
  87: {story:[
    {pt:"'A mente é poderosa,' disse a psicóloga.",en:"'The mind is powerful,' said the psychologist."},
    {pt:"'O comportamento reflete nossos sentimentos internos.'",en:"'Behavior reflects our internal feelings.'"},
    {pt:"'Cuide da autoestima. A memória guarda tudo — o bom e o ruim.'",en:"'Take care of self-esteem. Memory stores everything — good and bad.'"}
  ],questions:[
    {q:"O que reflete nossos sentimentos?",a:"O comportamento",opts:["A roupa","O dinheiro"]}
  ]},
  88: {story:[
    {pt:"'Meu sonho é morar no Brasil,' disse Tom.",en:"'My dream is to live in Brazil,' said Tom."},
    {pt:"'Minha meta é aprender português em um ano.'",en:"'My goal is to learn Portuguese in one year.'"},
    {pt:"Ele está planejando a viagem. 'Vou realizar esse sonho!'",en:"He's planning the trip. 'I'll achieve this dream!'"}
  ],questions:[
    {q:"Qual é o sonho de Tom?",a:"Morar no Brasil",opts:["Ser rico","Dormir"]}
  ]},
  89: {story:[
    {pt:"Houve um acidente na rua principal. Um carro bateu num poste.",en:"There was an accident on the main street. A car hit a pole."},
    {pt:"Uma mulher gritou: 'Socorro! Chama a ambulância!'",en:"A woman screamed: 'Help! Call the ambulance!'"},
    {pt:"Um homem ligou pro 192. 'Preciso de ajuda na Rua das Flores!'",en:"A man called 192. 'I need help on Rua das Flores!'"},
    {pt:"A ambulância chegou em dez minutos. Ninguém se machucou gravemente.",en:"The ambulance arrived in ten minutes. Nobody was seriously hurt."}
  ],questions:[
    {q:"Para qual número o homem ligou?",a:"192",opts:["190","193"]},
    {q:"Alguém se machucou gravemente?",a:"Não",opts:["Sim","Não diz"]}
  ]},
  90: {story:[
    {pt:"Thiago está procurando um apartamento no Rio.",en:"Thiago is looking for an apartment in Rio."},
    {pt:"O aluguel é dois mil reais. O condomínio é quinhentos.",en:"The rent is two thousand reais. The condo fee is five hundred."},
    {pt:"O porteiro é simpático e o vizinho de cima é músico.",en:"The doorman is nice and the upstairs neighbor is a musician."},
    {pt:"'Gostei! Mas preciso ver o contrato antes de assinar.'",en:"'I liked it! But I need to see the lease before signing.'"}
  ],questions:[
    {q:"Quanto é o aluguel?",a:"Dois mil reais",opts:["Mil reais","Três mil"]},
    {q:"O que Thiago quer ver antes de assinar?",a:"O contrato",opts:["O vizinho","O porteiro"]}
  ]},
  91: {story:[
    {pt:"'Preciso estacionar o carro, mas não acho vaga!'",en:"'I need to park the car, but I can't find a spot!'"},
    {pt:"Ele estava em alta velocidade e levou uma multa.",en:"He was at high speed and got a ticket."},
    {pt:"'Minha carteira de motorista está no carro,' ele disse ao policial.",en:"'My driver's license is in the car,' he told the officer."}
  ],questions:[
    {q:"Por que ele levou multa?",a:"Estava em alta velocidade",opts:["Parou errado","Sem gasolina"]}
  ]},
  92: {story:[
    {pt:"Primeiro, pique a cebola e refogue no azeite.",en:"First, chop the onion and sauté in olive oil."},
    {pt:"Depois, frite o frango e deixe ferver por vinte minutos.",en:"Then, fry the chicken and let it boil for twenty minutes."},
    {pt:"Por último, asse no forno. O jantar está pronto!",en:"Lastly, roast in the oven. Dinner is ready!"}
  ],questions:[
    {q:"O que fazer primeiro?",a:"Picar a cebola",opts:["Assar","Ferver"]}
  ]},
  93: {story:[
    {pt:"O Cerrado é o maior bioma do Brasil depois da Amazônia.",en:"The Cerrado is Brazil's largest biome after the Amazon."},
    {pt:"Tem nascentes de rios e uma biodiversidade incrível.",en:"It has river springs and incredible biodiversity."},
    {pt:"A Caatinga e o mangue também são ecossistemas importantes.",en:"The Caatinga and mangrove are also important ecosystems."}
  ],questions:[
    {q:"Qual é o segundo maior bioma?",a:"O Cerrado",opts:["A Caatinga","O Mangue"]}
  ]},
  94: {story:[
    {pt:"O filhote de cachorro precisa de ração especial.",en:"The puppy needs special pet food."},
    {pt:"A coleira é azul e a raça é labrador.",en:"The collar is blue and the breed is labrador."},
    {pt:"'Vou levar ele ao veterinário amanhã,' disse Ana.",en:"'I'll take him to the vet tomorrow,' said Ana."}
  ],questions:[
    {q:"Que raça é o cachorro?",a:"Labrador",opts:["Poodle","Vira-lata"]}
  ]},
  95: {story:[
    {pt:"A mesa é de madeira e as pernas são de metal.",en:"The table is wooden and the legs are metal."},
    {pt:"O copo é de vidro e a sacola é de plástico.",en:"The glass is made of glass and the bag is plastic."},
    {pt:"A cortina é de tecido importado. Muito bonita!",en:"The curtain is imported fabric. Very beautiful!"}
  ],questions:[
    {q:"De que material é a mesa?",a:"Madeira",opts:["Metal","Vidro"]}
  ]},
  96: {story:[
    {pt:"'Desenha um círculo no papel,' disse o professor.",en:"'Draw a circle on the paper,' said the teacher."},
    {pt:"O quadrado é largo e o triângulo é pequeno.",en:"The square is wide and the triangle is small."},
    {pt:"'O retângulo é a forma mais usada na arquitetura.'",en:"'The rectangle is the most used shape in architecture.'"}
  ],questions:[
    {q:"Qual forma é mais usada na arquitetura?",a:"O retângulo",opts:["O círculo","O triângulo"]}
  ]},
  97: {story:[
    {pt:"O vazamento na pia! Precisa consertar urgente.",en:"The leak in the sink! Needs fixing urgently."},
    {pt:"O encanador veio, trocou a torneira e pintou a parede.",en:"The plumber came, replaced the faucet and painted the wall."},
    {pt:"Depois, instalou uma prateleira nova na cozinha.",en:"Then, he installed a new shelf in the kitchen."}
  ],questions:[
    {q:"O que precisava consertar?",a:"O vazamento na pia",opts:["A porta","A janela"]}
  ]},
  98: {story:[
    {pt:"A tempestade chegou com trovão e relâmpago.",en:"The storm arrived with thunder and lightning."},
    {pt:"De manhã, só uma garoa fina e um pouco de neblina.",en:"In the morning, just a light drizzle and some fog."},
    {pt:"'Prefiro a garoa,' disse Maria. 'Tempestade me assusta!'",en:"'I prefer the drizzle,' said Maria. 'Storms scare me!'"}
  ],questions:[
    {q:"O que assusta Maria?",a:"Tempestade",opts:["Garoa","Sol"]}
  ]},
  99: {story:[
    {pt:"A tese de doutorado precisa de uma hipótese clara.",en:"The doctoral thesis needs a clear hypothesis."},
    {pt:"A metodologia define como fazer a pesquisa.",en:"The methodology defines how to do the research."},
    {pt:"'Não esqueça as referências e citações!' disse o orientador.",en:"'Don't forget references and citations!' said the advisor."}
  ],questions:[
    {q:"O que a tese precisa ter?",a:"Uma hipótese clara",opts:["Fotos","Música"]}
  ]},
  100: {story:[
    {pt:"O advogado entrou no tribunal com o processo na mão.",en:"The lawyer entered the court with the case file in hand."},
    {pt:"O juiz perguntou: 'O réu é culpado ou inocente?'",en:"The judge asked: 'Is the defendant guilty or innocent?'"},
    {pt:"'Inocente, Meritíssimo!' respondeu o advogado.",en:"'Innocent, Your Honor!' replied the lawyer."}
  ],questions:[
    {q:"Onde o advogado estava?",a:"No tribunal",opts:["No hospital","Na escola"]}
  ]},
  101: {story:[
    {pt:"Era uma vez um menino que queria conhecer o mundo.",en:"Once upon a time a boy who wanted to see the world."},
    {pt:"O personagem principal viajou por todo o Brasil.",en:"The main character traveled all over Brazil."},
    {pt:"O enredo terminou com um final feliz.",en:"The plot ended with a happy ending."}
  ],questions:[
    {q:"Como terminou a história?",a:"Com um final feliz",opts:["Tristemente","Não terminou"]}
  ]},
  102: {story:[
    {pt:"'Eu concordo com você,' disse Ana na reunião.",en:"'I agree with you,' said Ana at the meeting."},
    {pt:"'Eu discordo! Precisamos rebater esse argumento.'",en:"'I disagree! We need to counter that argument.'"},
    {pt:"Após o debate, todos chegaram a um consenso.",en:"After the debate, everyone reached a consensus."}
  ],questions:[
    {q:"Ana concordou ou discordou?",a:"Concordou",opts:["Discordou","Não falou"]}
  ]},
  103: {story:[
    {pt:"Ele sentiu gratidão pela ajuda dos amigos.",en:"He felt gratitude for his friends' help."},
    {pt:"Com empatia, ela entendeu a dor do vizinho.",en:"With empathy, she understood her neighbor's pain."},
    {pt:"O ressentimento foi embora. Só ficou o amor.",en:"The resentment went away. Only love remained."}
  ],questions:[
    {q:"O que ficou no final?",a:"O amor",opts:["A raiva","O medo"]}
  ]},
  104: {story:[
    {pt:"O faturamento da empresa cresceu vinte por cento.",en:"The company's revenue grew twenty percent."},
    {pt:"O orçamento para o próximo ano foi aprovado.",en:"The budget for next year was approved."},
    {pt:"'O balanço mostra que estamos bem!' disse o diretor.",en:"'The balance sheet shows we're doing well!' said the director."}
  ],questions:[
    {q:"Quanto cresceu o faturamento?",a:"Vinte por cento",opts:["Cinco","Cem"]}
  ]},
  105: {story:[
    {pt:"'Fique à vontade! A casa é sua!' disse a avó.",en:"'Make yourself at home! The house is yours!' said grandma."},
    {pt:"'Pode deixar, eu lavo a louça. Sem problema!'",en:"'Don't worry, I'll wash the dishes. No problem!'"},
    {pt:"'Que isso! Imagina! Relaxa!' ela respondeu.",en:"'Oh please! Don't worry! Relax!' she replied."}
  ],questions:[
    {q:"'Fique à vontade' significa...",a:"Make yourself at home",opts:["Go away","Sit down"]}
  ]},
  106: {story:[
    {pt:"A inteligência artificial está mudando o mundo.",en:"Artificial intelligence is changing the world."},
    {pt:"O algoritmo analisa milhões de dados por segundo.",en:"The algorithm analyzes millions of data per second."},
    {pt:"'O banco de dados é a nuvem!' explicou a engenheira.",en:"'The database is the cloud!' explained the engineer."}
  ],questions:[
    {q:"O que está mudando o mundo?",a:"A inteligência artificial",opts:["A culinária","O futebol"]}
  ]},
  107: {story:[
    {pt:"'Água mole em pedra dura, tanto bate até que fura!'",en:"'Persistence wins! (Soft water on hard rock)'"},
    {pt:"'Deus ajuda quem cedo madruga,' disse o avô.",en:"'God helps those who wake up early,' said grandpa."},
    {pt:"'Quem não tem cão, caça com gato!' riu a avó.",en:"'You work with what you've got!' laughed grandma."}
  ],questions:[
    {q:"O que 'Água mole em pedra dura' ensina?",a:"Persistência",opts:["Velocidade","Força"]}
  ]},
  108: {story:[
    {pt:"'Finalmente! Meu sotaque está melhorando!' disse Tom.",en:"'Finally! My accent is improving!' said Tom."},
    {pt:"O vocabulário dele cresceu muito. Quase fluente!",en:"His vocabulary grew a lot. Almost fluent!"},
    {pt:"'A pronúncia é a parte mais difícil,' ele admitiu.",en:"'Pronunciation is the hardest part,' he admitted."}
  ],questions:[
    {q:"O que está melhorando?",a:"O sotaque",opts:["A comida","O tempo"]}
  ]},
  109: {story:[
    {pt:"Janeiro e fevereiro são os meses mais quentes.",en:"January and February are the hottest months."},
    {pt:"Março e abril trazem o outono ao Brasil.",en:"March and April bring autumn to Brazil."},
    {pt:"'No Brasil, o verão é no Natal!' explicou o professor.",en:"'In Brazil, summer is at Christmas!' explained the teacher."}
  ],questions:[
    {q:"Quando é verão no Brasil?",a:"Janeiro/fevereiro (Natal)",opts:["Julho","Setembro"]}
  ]},
  110: {story:[
    {pt:"De segunda-feira a sexta-feira, Paulo trabalha.",en:"From Monday to Friday, Paulo works."},
    {pt:"Na terça e quarta, ele vai à academia.",en:"On Tuesday and Wednesday, he goes to the gym."},
    {pt:"Sábado e domingo são para descansar!",en:"Saturday and Sunday are for resting!"}
  ],questions:[
    {q:"Quando Paulo vai à academia?",a:"Terça e quarta",opts:["Segunda","Domingo"]}
  ]},
  111: {story:[
    {pt:"'Como você se chama? Onde você mora? Quando chegou?'",en:"'What's your name? Where do you live? When did you arrive?'"},
    {pt:"'Por que veio ao Brasil? Quanto tempo vai ficar?'",en:"'Why did you come to Brazil? How long will you stay?'"},
    {pt:"'Qual é seu lugar favorito? Quem te indicou?'",en:"'What's your favorite place? Who recommended it?'"}
  ],questions:[
    {q:"Quantas perguntas foram feitas?",a:"Sete",opts:["Três","Cinco"]}
  ]},
  112: {story:[
    {pt:"'Estou com dor no ombro e nas costas!' disse João.",en:"'My shoulder and back hurt!' said João."},
    {pt:"'O pescoço também dói. Preciso de um massagista.'",en:"'My neck hurts too. I need a masseuse.'"},
    {pt:"Depois da massagem, ele estava como novo!",en:"After the massage, he was good as new!"}
  ],questions:[
    {q:"O que doía no João?",a:"Ombro, costas e pescoço",opts:["Cabeça","Pé"]}
  ]},
  113: {story:[
    {pt:"'Cadê o sabonete? E o shampoo?' gritou do chuveiro.",en:"'Where's the soap? And the shampoo?' he yelled from the shower."},
    {pt:"'A toalha está no armário!' respondeu a esposa.",en:"'The towel is in the closet!' his wife replied."},
    {pt:"'E a escova de dentes? Esqueci na viagem!'",en:"'And the toothbrush? I forgot it on the trip!'"}
  ],questions:[
    {q:"O que ele esqueceu na viagem?",a:"A escova de dentes",opts:["O sabonete","A toalha"]}
  ]},
  114: {story:[
    {pt:"O sofá novo ficou perfeito na sala.",en:"The new sofa looked perfect in the living room."},
    {pt:"A estante tem livros e fotos da família.",en:"The bookshelf has books and family photos."},
    {pt:"'O armário do quarto está cheio! Preciso de outro!'",en:"'The bedroom wardrobe is full! I need another one!'"}
  ],questions:[
    {q:"Onde ficou o sofá novo?",a:"Na sala",opts:["No quarto","Na cozinha"]}
  ]},
  115: {story:[
    {pt:"'Esse bolo é doce demais! E a sopa está muito salgada.'",en:"'This cake is too sweet! And the soup is too salty.'"},
    {pt:"'O café está amargo. Coloca açúcar?'",en:"'The coffee is bitter. Add sugar?'"},
    {pt:"'A pimenta está picante! Mas a textura está crocante. Hmm!'",en:"'The pepper is spicy! But the texture is crispy. Hmm!'"}
  ],questions:[
    {q:"Como estava o café?",a:"Amargo",opts:["Doce","Salgado"]}
  ]},
  116: {story:[
    {pt:"O livro está em cima da mesa. O gato, embaixo.",en:"The book is on top of the table. The cat, underneath."},
    {pt:"A farmácia fica ao lado do banco, na frente do parque.",en:"The pharmacy is next to the bank, in front of the park."},
    {pt:"'Atrás da escola tem um lago,' disse a menina.",en:"'Behind the school there's a lake,' said the girl."}
  ],questions:[
    {q:"Onde está o gato?",a:"Embaixo da mesa",opts:["Em cima","Na rua"]}
  ]},
  117: {story:[
    {pt:"'Que maravilha! Ganhei na loteria!' gritou Carlos.",en:"'How wonderful! I won the lottery!' shouted Carlos."},
    {pt:"'Meu Deus! Não acredito!' disse a esposa.",en:"'My God! I can't believe it!' said his wife."},
    {pt:"'Que horror! O bilhete sumiu!' ele percebeu depois.",en:"'How horrible! The ticket disappeared!' he realized later."}
  ],questions:[
    {q:"O que aconteceu com o bilhete?",a:"Sumiu",opts:["Foi premiado","Nada"]}
  ]},
  118: {story:[
    {pt:"'Pega o caderno, a caneta e o lápis!' disse a professora.",en:"'Grab the notebook, pen, and pencil!' said the teacher."},
    {pt:"'A borracha caiu no chão e a régua quebrou!'",en:"'The eraser fell on the floor and the ruler broke!'"},
    {pt:"'Abre o livro na página trinta e dois!'",en:"'Open the book to page thirty-two!'"}
  ],questions:[
    {q:"O que quebrou?",a:"A régua",opts:["O lápis","O caderno"]}
  ]},
  119: {story:[
    {pt:"'Preciso de uma chave de fenda e um alicate.'",en:"'I need a screwdriver and pliers.'"},
    {pt:"'A serra está na garagem, perto do martelo.'",en:"'The saw is in the garage, near the hammer.'"},
    {pt:"Com as ferramentas certas, consertou a mesa em uma hora.",en:"With the right tools, he fixed the table in one hour."}
  ],questions:[
    {q:"Onde estava a serra?",a:"Na garagem",opts:["Na cozinha","No quarto"]}
  ]},
  120: {story:[
    {pt:"São Paulo tem mais de doze milhões de habitantes.",en:"São Paulo has more than twelve million inhabitants."},
    {pt:"O prédio tem duzentos apartamentos e trezentas vagas.",en:"The building has two hundred apartments and three hundred spots."},
    {pt:"'Quinhentos reais o metro quadrado? Barato!' disse o corretor.",en:"'Five hundred reais per square meter? Cheap!' said the realtor."}
  ],questions:[
    {q:"Quantos habitantes tem São Paulo?",a:"Mais de doze milhões",opts:["Mil","Cem mil"]}
  ]},
  121: {story:[
    {pt:"'Manda um zap pra mim! Vou curtir todas as fotos!'",en:"'Send me a WhatsApp! I'll like all the photos!'"},
    {pt:"Ele ligou pra amiga e mandou uma mensagem de voz.",en:"He called his friend and sent a voice message."},
    {pt:"'Recebeu? Visualizou? Responde!' ela disse.",en:"'Did you get it? Did you see it? Reply!' she said."}
  ],questions:[
    {q:"O que ele mandou?",a:"Mensagem de voz",opts:["Email","Carta"]}
  ]},
  122: {story:[
    {pt:"'Eu falo português. Você fala inglês. Nós falamos os dois!'",en:"'I speak Portuguese. You speak English. We speak both!'"},
    {pt:"'Eles falam espanhol. Ela fala francês.'",en:"'They speak Spanish. She speaks French.'"},
    {pt:"O professor disse: 'Eu como, você come, nós comemos!'",en:"The teacher said: 'I eat, you eat, we eat!'"}
  ],questions:[
    {q:"Quantas línguas foram mencionadas?",a:"Quatro",opts:["Duas","Uma"]}
  ]},
  123: {story:[
    {pt:"'Fala mais devagar! Come tudo! Vem cá!' disse a mãe.",en:"'Speak slower! Eat everything! Come here!' said the mom."},
    {pt:"'Abre a porta! Fecha a janela!' pediu o pai.",en:"'Open the door! Close the window!' asked the dad."},
    {pt:"A criança obedeceu. 'Tá bom, tá bom!'",en:"The child obeyed. 'OK, OK!'"}
  ],questions:[
    {q:"Quem deu as ordens?",a:"A mãe e o pai",opts:["O professor","O irmão"]}
  ]},
  124: {story:[
    {pt:"'O que você está fazendo?' 'Estou estudando português!'",en:"'What are you doing?' 'I'm studying Portuguese!'"},
    {pt:"'Ela está correndo no parque. Ele está dormindo.'",en:"'She's running in the park. He's sleeping.'"},
    {pt:"'Estou comendo e assistindo TV ao mesmo tempo!'",en:"'I'm eating and watching TV at the same time!'"}
  ],questions:[
    {q:"O que ela está fazendo no parque?",a:"Correndo",opts:["Dormindo","Comendo"]}
  ]},
  125: {story:[
    {pt:"'Como você se chama?' 'Me chamo Rafael.'",en:"'What's your name?' 'My name is Rafael.'"},
    {pt:"Ele se levanta às seis e se senta para tomar café.",en:"He gets up at six and sits down for coffee."},
    {pt:"'Me desculpe! Me perdi!' ele disse ao vizinho.",en:"'Sorry! I got lost!' he said to the neighbor."}
  ],questions:[
    {q:"A que horas Rafael se levanta?",a:"Às seis",opts:["Às oito","Ao meio-dia"]}
  ]},
  126: {story:[
    {pt:"'Tenho estudado muito este mês!' disse Ana.",en:"'I've been studying a lot this month!' said Ana."},
    {pt:"'Tenho ido ao parque toda manhã. Tenho comido melhor.'",en:"'I've been going to the park every morning. I've been eating better.'"},
    {pt:"'Tenho dormido cedo. Minha vida mudou!'",en:"'I've been sleeping early. My life changed!'"}
  ],questions:[
    {q:"O que Ana tem feito?",a:"Estudado, ido ao parque, comido melhor",opts:["Nada","Só dormido"]}
  ]},
  127: {story:[
    {pt:"O edifício foi construído em 1950.",en:"The building was built in 1950."},
    {pt:"A vacina foi descoberta por um cientista brasileiro.",en:"The vaccine was discovered by a Brazilian scientist."},
    {pt:"'O português é falado em nove países!' disse o professor.",en:"'Portuguese is spoken in nine countries!' said the teacher."}
  ],questions:[
    {q:"Em quantos países o português é falado?",a:"Nove",opts:["Cinco","Três"]}
  ]},
  128: {story:[
    {pt:"Ele disse que ia viajar amanhã.",en:"He said he was going to travel tomorrow."},
    {pt:"Ela falou que o restaurante era ótimo.",en:"She said the restaurant was great."},
    {pt:"Perguntou se eu queria ir junto. 'Claro!' eu disse.",en:"He asked if I wanted to go along. 'Of course!' I said."}
  ],questions:[
    {q:"O que ele disse?",a:"Que ia viajar",opts:["Que ia dormir","Nada"]}
  ]},
  129: {story:[
    {pt:"'Quer um cafezinho?' perguntou a vovó.",en:"'Want a little coffee?' asked grandma."},
    {pt:"'Quero sim! Só um pouquinho de açúcar, por favorzinho!'",en:"'Yes please! Just a tiny bit of sugar, pretty please!'"},
    {pt:"Ela trouxe o café numa xicrinha, com um pedacinho de bolo.",en:"She brought coffee in a tiny cup, with a little piece of cake."},
    {pt:"'Obrigadinho, vovó! Está uma delícia!'",en:"'Thanks, grandma! It's delicious!'"}
  ],questions:[
    {q:"O que o '-inho' faz na palavra?",a:"Deixa pequeno e carinhoso",opts:["Deixa grande","Deixa triste"]},
    {q:"O que a vovó trouxe?",a:"Café e bolo",opts:["Suco e pão","Chá e biscoito"]}
  ]},
  130: {story:[
    {pt:"'Olha o tamanho daquele casarão!' disse o turista.",en:"'Look at the size of that mansion!' said the tourist."},
    {pt:"A mulherão entrou com um cachorrão na coleira.",en:"The gorgeous woman entered with a huge dog on a leash."},
    {pt:"'Que carrão! Deve custar um dinheirão!'",en:"'What a car! Must cost a fortune!'"}
  ],questions:[
    {q:"O que '-ão' faz na palavra?",a:"Deixa grande/intenso",opts:["Deixa pequeno","Não muda"]}
  ]},
  131: {story:[
    {pt:"O professor escreveu no quadro: 'Pra mim fazer' — ERRADO!",en:"The teacher wrote on the board: 'Pra mim fazer' — WRONG!"},
    {pt:"'O correto é: pra EU fazer. Mim não é sujeito!'",en:"'The correct form is: pra EU fazer. Mim is not a subject!'"},
    {pt:"'E cuidado: a gente VAI, não a gente VAMOS!'",en:"'And careful: a gente VAI, not a gente VAMOS!'"},
    {pt:"Os alunos anotaram. Até brasileiros erram isso!",en:"The students took notes. Even Brazilians make this mistake!"}
  ],questions:[
    {q:"'Pra mim fazer' é correto?",a:"Não, o correto é 'pra eu fazer'",opts:["Sim","Depende"]},
    {q:"'A gente' usa verbo no...",a:"Singular (a gente vai)",opts:["Plural (vamos)","Infinitivo"]}
  ]},
  132: {story:[
    {pt:"'Vc viu o meme? Kkkk mto bom!'",en:"'Did you see the meme? Hahaha so good!'"},
    {pt:"'Tbm achei! Sdd de vc! Bjs!'",en:"'I thought so too! Miss you! Kisses!'"},
    {pt:"'Flw! Tmj! Vlw pelo zap!'",en:"'Bye! Together! Thanks for the message!'"}
  ],questions:[
    {q:"'Kkkk' é o quê?",a:"Risada em português",opts:["Tristeza","Raiva"]}
  ]},
  133: {story:[
    {pt:"'Bah, tchê! Que frio aqui no Sul!' disse o gaúcho.",en:"'Man! So cold here in the South!' said the southerner."},
    {pt:"'Uai, sô! Em Minas tá bom!' disse o mineiro.",en:"'Well! In Minas it's fine!' said the person from Minas.'"},
    {pt:"'Oxe, meu rei! No Nordeste tá quente!' disse o baiano.",en:"'Wow! In the Northeast it's hot!' said the Bahian."}
  ],questions:[
    {q:"Quem disse 'Oxe'?",a:"O baiano",opts:["O gaúcho","O mineiro"]}
  ]},
  134: {story:[
    {pt:"'Tô com calor! Liga o ventilador!'",en:"'I'm hot! Turn on the fan!'"},
    {pt:"'Agora tô com frio! Traz o cobertor!'",en:"'Now I'm cold! Bring the blanket!'"},
    {pt:"'Tô com sono... e com sede... boa noite!'",en:"'I'm sleepy... and thirsty... good night!'"}
  ],questions:[
    {q:"O que ele pediu primeiro?",a:"O ventilador",opts:["Água","Comida"]}
  ]},
  135: {story:[
    {pt:"Na balada, Marcos começou a paquerar a menina.",en:"At the club, Marcos started flirting with the girl."},
    {pt:"'Você tem crush em alguém?' perguntou o amigo.",en:"'Do you have a crush on someone?' asked his friend."},
    {pt:"Eles ficaram na festa. Agora estão namorando!",en:"They hooked up at the party. Now they're dating!"}
  ],questions:[
    {q:"O que 'ficar' significa neste contexto?",a:"To hook up",opts:["To stay home","To eat"]}
  ]},
  136: {story:[
    {pt:"A balada estava lotada. O DJ tocava funk.",en:"The club was packed. The DJ played funk."},
    {pt:"Na pista de dança, todo mundo curtia a noite.",en:"On the dance floor, everyone enjoyed the night."},
    {pt:"'Essa festa tá demais!' gritou ela, dançando.",en:"'This party is amazing!' she shouted, dancing."}
  ],questions:[
    {q:"O que o DJ tocava?",a:"Funk",opts:["Rock","Sertanejo"]}
  ]},
  137: {story:[
    {pt:"Em 1500, os portugueses chegaram ao Brasil. O descobrimento.",en:"In 1500, the Portuguese arrived in Brazil. The discovery."},
    {pt:"Em 1822, Dom Pedro gritou: 'Independência ou morte!'",en:"In 1822, Dom Pedro shouted: 'Independence or death!'"},
    {pt:"Em 1889, o Brasil virou república. Nova era!",en:"In 1889, Brazil became a republic. New era!"}
  ],questions:[
    {q:"Quando foi a independência?",a:"1822",opts:["1500","1889"]}
  ]},
  138: {story:[
    {pt:"Tom Jobim foi o maior compositor da bossa nova.",en:"Tom Jobim was the greatest bossa nova composer."},
    {pt:"O intérprete cantou o verso com emoção.",en:"The singer sang the verse with emotion."},
    {pt:"A letra da música tocou o coração de todos.",en:"The song lyrics touched everyone's heart."}
  ],questions:[
    {q:"Quem foi Tom Jobim?",a:"Compositor de bossa nova",opts:["Jogador","Político"]}
  ]},
  139: {story:[
    {pt:"'Tá chovendo canivete lá fora!' disse a avó.",en:"'It's raining cats and dogs outside!' said grandma."},
    {pt:"'Sol de rachar! Passa o protetor!' disse no verão.",en:"'Scorching sun! Put on sunscreen!' she said in summer."},
    {pt:"'Tempo fechado... vai chover,' previu, olhando o céu.",en:"'Overcast skies... it's going to rain,' she predicted, looking up."}
  ],questions:[
    {q:"'Chovendo canivete' significa...",a:"Chovendo muito forte",opts:["Fazendo sol","Nevando"]}
  ]},
  140: {story:[
    {pt:"'Primeiro, tempere a carne com sal e limão.'",en:"'First, season the meat with salt and lime.'"},
    {pt:"'Depois, empane com farinha e frite no óleo.'",en:"'Then, bread it with flour and fry in oil.'"},
    {pt:"'Por último, refogue os legumes com alho.'",en:"'Lastly, sauté the vegetables with garlic.'"}
  ],questions:[
    {q:"O que fazer primeiro?",a:"Temperar a carne",opts:["Fritar","Refogar"]}
  ]},
  141: {story:[
    {pt:"'Sabe o que é? O negócio é que eu tô cansado.'",en:"'You know what? The thing is I'm tired.'"},
    {pt:"'Quer dizer, tipo, não é que eu não quero ir...'",en:"'I mean, like, it's not that I don't want to go...'"},
    {pt:"'Enfim, sei lá. Deixa pra lá. Tamo junto!'",en:"'Anyway, I dunno. Forget it. We're good!'"}
  ],questions:[
    {q:"Como a pessoa está?",a:"Cansada",opts:["Feliz","Com fome"]}
  ]},
  142: {story:[
    {pt:"Chegou o dia de ir embora. Maria abraçou todo mundo.",en:"The day to leave arrived. Maria hugged everyone."},
    {pt:"'Tchau! Se cuida! Manda notícias!' disse a amiga.",en:"'Bye! Take care! Send news!' said her friend."},
    {pt:"'Fica com Deus! Tô com muita saudade já!'",en:"'Stay with God! I miss you already!'"},
    {pt:"No avião, Maria chorou. 'O Brasil ficou no meu coração.'",en:"On the plane, Maria cried. 'Brazil stayed in my heart.'"}
  ],questions:[
    {q:"O que 'saudade' significa?",a:"Missing someone/longing",opts:["Happiness","Anger"]},
    {q:"Maria estava triste por quê?",a:"Estava indo embora do Brasil",opts:["Perdeu o voo","Não gostou"]}
  ]},
  143: {story:[
    {pt:"'Parabéns! Você completou todos os níveis!'",en:"'Congratulations! You completed all the levels!'"},
    {pt:"'Consegui! Estou orgulhoso do meu progresso!'",en:"'I did it! I'm proud of my progress!'"},
    {pt:"'Agora posso conversar em português de verdade!'",en:"'Now I can really have conversations in Portuguese!'"}
  ],questions:[
    {q:"O que a pessoa conseguiu?",a:"Completar todos os níveis",opts:["Nada","Perdeu"]}
  ]},
  144: {story:[
    {pt:"'Olha ali! A padaria fica lá, perto da esquina.'",en:"'Look there! The bakery is over there, near the corner.'"},
    {pt:"'Onde fica o banco? Aqui perto ou longe?'",en:"'Where is the bank? Nearby or far?'"},
    {pt:"'Não sei onde é. Pergunta pra alguém!'",en:"'I don't know where it is. Ask someone!'"}
  ],questions:[
    {q:"Onde fica a padaria?",a:"Perto da esquina",opts:["Longe","No centro"]}
  ]},
  145: {story:[
    {pt:"'Preciso de um comprimido pra dor de cabeça.'",en:"'I need a pill for my headache.'"},
    {pt:"'Essa pomada é boa pra dor muscular.'",en:"'This ointment is good for muscle pain.'"},
    {pt:"'O xarope é pro resfriado. Toma três vezes ao dia.'",en:"'The syrup is for the cold. Take it three times a day.'"}
  ],questions:[
    {q:"O xarope é pra quê?",a:"Pro resfriado",opts:["Dor de cabeça","Febre"]}
  ]},
  146: {story:[
    {pt:"O chuveiro quebrou! A água sai pela pia.",en:"The shower broke! Water comes out through the sink."},
    {pt:"A torneira da cozinha está pingando faz uma semana.",en:"The kitchen faucet has been dripping for a week."},
    {pt:"'Chama o encanador! E o eletricista pra tomada!'",en:"'Call the plumber! And the electrician for the outlet!'"}
  ],questions:[
    {q:"O que quebrou?",a:"O chuveiro",opts:["A TV","O fogão"]}
  ]},
  147: {story:[
    {pt:"'Precisamos conversar,' disse Maria, séria.",en:"'We need to talk,' said Maria, seriously."},
    {pt:"Eles discutiram o problema por uma hora.",en:"They discussed the problem for an hour."},
    {pt:"'Vou contar tudo pro chefe amanhã,' ela decidiu.",en:"'I'll tell the boss everything tomorrow,' she decided."}
  ],questions:[
    {q:"O que Maria vai fazer amanhã?",a:"Contar tudo pro chefe",opts:["Dormir","Viajar"]}
  ]},
  148: {story:[
    {pt:"'Essa festa tá mó legal! Sinistro demais!'",en:"'This party is so cool! Insanely awesome!'"},
    {pt:"'O show foi irado! Mó vibe!'",en:"'The show was sick! Great vibes!'"},
    {pt:"'Demais! Bora pro after!'",en:"'Amazing! Let's go to the afterparty!'"}
  ],questions:[
    {q:"'Mó legal' significa...",a:"Very cool",opts:["Very bad","Very old"]}
  ]},
  149: {story:[
    {pt:"As ondas estão perfeitas pra surfar hoje!",en:"The waves are perfect for surfing today!"},
    {pt:"O bronzeado do Lucas ficou incrível depois da praia.",en:"Lucas's tan looked incredible after the beach."},
    {pt:"'O surfe aqui é o melhor do Brasil!' disse o instrutor.",en:"'The surfing here is the best in Brazil!' said the instructor."}
  ],questions:[
    {q:"Como estão as ondas?",a:"Perfeitas",opts:["Perigosas","Pequenas"]}
  ]},
  150: {story:[
    {pt:"No check-in, ela mostrou o passaporte e despachou a bagagem.",en:"At check-in, she showed her passport and checked her luggage."},
    {pt:"O portão de embarque era o B12. Faltavam trinta minutos.",en:"The boarding gate was B12. Thirty minutes left."},
    {pt:"'Atenção: voo cancelado por causa da tempestade!'",en:"'Attention: flight cancelled due to the storm!'"}
  ],questions:[
    {q:"Por que o voo foi cancelado?",a:"Tempestade",opts:["Greve","Falta de piloto"]}
  ]}
};
