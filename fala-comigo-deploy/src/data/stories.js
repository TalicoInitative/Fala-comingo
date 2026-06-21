// Mini-stories per unit — short narratives using learned vocabulary
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
    {pt:"Hoje vamos aprender sobre 'City & Places' em português.",en:"Today we'll learn about 'City & Places' in Portuguese."},
    {pt:"Cada palavra nova abre uma porta para o Brasil.",en:"Each new word opens a door to Brazil."},
    {pt:"Com prática, você vai usar essas palavras todo dia!",en:"With practice, you'll use these words every day!"}
  ],questions:[
    {q:"O que cada palavra nova faz?",a:"Abre uma porta para o Brasil",opts:["Fecha uma porta","Nada"]},
    {q:"Como aprender melhor?",a:"Com prática",opts:["Sem estudar","Dormindo"]}
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
    {pt:"Hoje vamos aprender sobre 'Daily Actions' em português.",en:"Today we'll learn about 'Daily Actions' in Portuguese."},
    {pt:"Cada palavra nova abre uma porta para o Brasil.",en:"Each new word opens a door to Brazil."},
    {pt:"Com prática, você vai usar essas palavras todo dia!",en:"With practice, you'll use these words every day!"}
  ],questions:[
    {q:"O que cada palavra nova faz?",a:"Abre uma porta para o Brasil",opts:["Fecha uma porta","Nada"]},
    {q:"Como aprender melhor?",a:"Com prática",opts:["Sem estudar","Dormindo"]}
  ]},
  27: {story:[
    {pt:"Bia está ensinando 'Opinions' para seu amigo.",en:"Bia is teaching 'Opinions' to her friend."},
    {pt:"'Repete comigo! Devagar!' ela disse, rindo.",en:"'Repeat after me! Slowly!' she said, laughing."},
    {pt:"Depois de praticar, ele disse: 'Agora entendi tudo!'",en:"After practicing, he said: 'Now I understand everything!'"}
  ],questions:[
    {q:"O que Bia está ensinando?",a:"Opinions",opts:["Matemática","Cozinhar"]},
    {q:"O amigo entendeu?",a:"Sim, depois de praticar",opts:["Não","Desistiu"]}
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
    {pt:"Bia está ensinando 'Abstract' para seu amigo.",en:"Bia is teaching 'Abstract' to her friend."},
    {pt:"'Repete comigo! Devagar!' ela disse, rindo.",en:"'Repeat after me! Slowly!' she said, laughing."},
    {pt:"Depois de praticar, ele disse: 'Agora entendi tudo!'",en:"After practicing, he said: 'Now I understand everything!'"}
  ],questions:[
    {q:"O que Bia está ensinando?",a:"Abstract",opts:["Matemática","Cozinhar"]},
    {q:"O amigo entendeu?",a:"Sim, depois de praticar",opts:["Não","Desistiu"]}
  ]},
  32: {story:[
    {pt:"Hoje vamos aprender sobre 'Connectors' em português.",en:"Today we'll learn about 'Connectors' in Portuguese."},
    {pt:"Cada palavra nova abre uma porta para o Brasil.",en:"Each new word opens a door to Brazil."},
    {pt:"Com prática, você vai usar essas palavras todo dia!",en:"With practice, you'll use these words every day!"}
  ],questions:[
    {q:"O que cada palavra nova faz?",a:"Abre uma porta para o Brasil",opts:["Fecha uma porta","Nada"]},
    {q:"Como aprender melhor?",a:"Com prática",opts:["Sem estudar","Dormindo"]}
  ]},
  33: {story:[
    {pt:"Bia está ensinando 'Idioms' para seu amigo.",en:"Bia is teaching 'Idioms' to her friend."},
    {pt:"'Repete comigo! Devagar!' ela disse, rindo.",en:"'Repeat after me! Slowly!' she said, laughing."},
    {pt:"Depois de praticar, ele disse: 'Agora entendi tudo!'",en:"After practicing, he said: 'Now I understand everything!'"}
  ],questions:[
    {q:"O que Bia está ensinando?",a:"Idioms",opts:["Matemática","Cozinhar"]},
    {q:"O amigo entendeu?",a:"Sim, depois de praticar",opts:["Não","Desistiu"]}
  ]},
  34: {story:[
    {pt:"Hoje vamos aprender sobre 'Formal' em português.",en:"Today we'll learn about 'Formal' in Portuguese."},
    {pt:"Cada palavra nova abre uma porta para o Brasil.",en:"Each new word opens a door to Brazil."},
    {pt:"Com prática, você vai usar essas palavras todo dia!",en:"With practice, you'll use these words every day!"}
  ],questions:[
    {q:"O que cada palavra nova faz?",a:"Abre uma porta para o Brasil",opts:["Fecha uma porta","Nada"]},
    {q:"Como aprender melhor?",a:"Com prática",opts:["Sem estudar","Dormindo"]}
  ]},
  35: {story:[
    {pt:"Bia está ensinando 'Technology' para seu amigo.",en:"Bia is teaching 'Technology' to her friend."},
    {pt:"'Repete comigo! Devagar!' ela disse, rindo.",en:"'Repeat after me! Slowly!' she said, laughing."},
    {pt:"Depois de praticar, ele disse: 'Agora entendi tudo!'",en:"After practicing, he said: 'Now I understand everything!'"}
  ],questions:[
    {q:"O que Bia está ensinando?",a:"Technology",opts:["Matemática","Cozinhar"]},
    {q:"O amigo entendeu?",a:"Sim, depois de praticar",opts:["Não","Desistiu"]}
  ]},
  36: {story:[
    {pt:"Hoje vamos aprender sobre 'Descriptions' em português.",en:"Today we'll learn about 'Descriptions' in Portuguese."},
    {pt:"Cada palavra nova abre uma porta para o Brasil.",en:"Each new word opens a door to Brazil."},
    {pt:"Com prática, você vai usar essas palavras todo dia!",en:"With practice, you'll use these words every day!"}
  ],questions:[
    {q:"O que cada palavra nova faz?",a:"Abre uma porta para o Brasil",opts:["Fecha uma porta","Nada"]},
    {q:"Como aprender melhor?",a:"Com prática",opts:["Sem estudar","Dormindo"]}
  ]},
  37: {story:[
    {pt:"Bia está ensinando 'Kitchen' para seu amigo.",en:"Bia is teaching 'Kitchen' to her friend."},
    {pt:"'Repete comigo! Devagar!' ela disse, rindo.",en:"'Repeat after me! Slowly!' she said, laughing."},
    {pt:"Depois de praticar, ele disse: 'Agora entendi tudo!'",en:"After practicing, he said: 'Now I understand everything!'"}
  ],questions:[
    {q:"O que Bia está ensinando?",a:"Kitchen",opts:["Matemática","Cozinhar"]},
    {q:"O amigo entendeu?",a:"Sim, depois de praticar",opts:["Não","Desistiu"]}
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
    {pt:"Bia está ensinando 'Entertainment' para seu amigo.",en:"Bia is teaching 'Entertainment' to her friend."},
    {pt:"'Repete comigo! Devagar!' ela disse, rindo.",en:"'Repeat after me! Slowly!' she said, laughing."},
    {pt:"Depois de praticar, ele disse: 'Agora entendi tudo!'",en:"After practicing, he said: 'Now I understand everything!'"}
  ],questions:[
    {q:"O que Bia está ensinando?",a:"Entertainment",opts:["Matemática","Cozinhar"]},
    {q:"O amigo entendeu?",a:"Sim, depois de praticar",opts:["Não","Desistiu"]}
  ]},
  40: {story:[
    {pt:"Hoje vamos aprender sobre 'Sports' em português.",en:"Today we'll learn about 'Sports' in Portuguese."},
    {pt:"Cada palavra nova abre uma porta para o Brasil.",en:"Each new word opens a door to Brazil."},
    {pt:"Com prática, você vai usar essas palavras todo dia!",en:"With practice, you'll use these words every day!"}
  ],questions:[
    {q:"O que cada palavra nova faz?",a:"Abre uma porta para o Brasil",opts:["Fecha uma porta","Nada"]},
    {q:"Como aprender melhor?",a:"Com prática",opts:["Sem estudar","Dormindo"]}
  ]},
  41: {story:[
    {pt:"Bia está ensinando 'Professions' para seu amigo.",en:"Bia is teaching 'Professions' to her friend."},
    {pt:"'Repete comigo! Devagar!' ela disse, rindo.",en:"'Repeat after me! Slowly!' she said, laughing."},
    {pt:"Depois de praticar, ele disse: 'Agora entendi tudo!'",en:"After practicing, he said: 'Now I understand everything!'"}
  ],questions:[
    {q:"O que Bia está ensinando?",a:"Professions",opts:["Matemática","Cozinhar"]},
    {q:"O amigo entendeu?",a:"Sim, depois de praticar",opts:["Não","Desistiu"]}
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
    {pt:"Hoje vamos aprender sobre 'Nature' em português.",en:"Today we'll learn about 'Nature' in Portuguese."},
    {pt:"Cada palavra nova abre uma porta para o Brasil.",en:"Each new word opens a door to Brazil."},
    {pt:"Com prática, você vai usar essas palavras todo dia!",en:"With practice, you'll use these words every day!"}
  ],questions:[
    {q:"O que cada palavra nova faz?",a:"Abre uma porta para o Brasil",opts:["Fecha uma porta","Nada"]},
    {q:"Como aprender melhor?",a:"Com prática",opts:["Sem estudar","Dormindo"]}
  ]},
  45: {story:[
    {pt:"Bia está ensinando 'Emotions Deep' para seu amigo.",en:"Bia is teaching 'Emotions Deep' to her friend."},
    {pt:"'Repete comigo! Devagar!' ela disse, rindo.",en:"'Repeat after me! Slowly!' she said, laughing."},
    {pt:"Depois de praticar, ele disse: 'Agora entendi tudo!'",en:"After practicing, he said: 'Now I understand everything!'"}
  ],questions:[
    {q:"O que Bia está ensinando?",a:"Emotions Deep",opts:["Matemática","Cozinhar"]},
    {q:"O amigo entendeu?",a:"Sim, depois de praticar",opts:["Não","Desistiu"]}
  ]},
  46: {story:[
    {pt:"Hoje vamos aprender sobre 'Relationships' em português.",en:"Today we'll learn about 'Relationships' in Portuguese."},
    {pt:"Cada palavra nova abre uma porta para o Brasil.",en:"Each new word opens a door to Brazil."},
    {pt:"Com prática, você vai usar essas palavras todo dia!",en:"With practice, you'll use these words every day!"}
  ],questions:[
    {q:"O que cada palavra nova faz?",a:"Abre uma porta para o Brasil",opts:["Fecha uma porta","Nada"]},
    {q:"Como aprender melhor?",a:"Com prática",opts:["Sem estudar","Dormindo"]}
  ]},
  47: {story:[
    {pt:"Bia está ensinando 'Brazilian Culture' para seu amigo.",en:"Bia is teaching 'Brazilian Culture' to her friend."},
    {pt:"'Repete comigo! Devagar!' ela disse, rindo.",en:"'Repeat after me! Slowly!' she said, laughing."},
    {pt:"Depois de praticar, ele disse: 'Agora entendi tudo!'",en:"After practicing, he said: 'Now I understand everything!'"}
  ],questions:[
    {q:"O que Bia está ensinando?",a:"Brazilian Culture",opts:["Matemática","Cozinhar"]},
    {q:"O amigo entendeu?",a:"Sim, depois de praticar",opts:["Não","Desistiu"]}
  ]},
  48: {story:[
    {pt:"Hoje vamos aprender sobre 'Advanced Phrases' em português.",en:"Today we'll learn about 'Advanced Phrases' in Portuguese."},
    {pt:"Cada palavra nova abre uma porta para o Brasil.",en:"Each new word opens a door to Brazil."},
    {pt:"Com prática, você vai usar essas palavras todo dia!",en:"With practice, you'll use these words every day!"}
  ],questions:[
    {q:"O que cada palavra nova faz?",a:"Abre uma porta para o Brasil",opts:["Fecha uma porta","Nada"]},
    {q:"Como aprender melhor?",a:"Com prática",opts:["Sem estudar","Dormindo"]}
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
    {pt:"Hoje vamos aprender sobre 'Phone & Messages' em português.",en:"Today we'll learn about 'Phone & Messages' in Portuguese."},
    {pt:"Cada palavra nova abre uma porta para o Brasil.",en:"Each new word opens a door to Brazil."},
    {pt:"Com prática, você vai usar essas palavras todo dia!",en:"With practice, you'll use these words every day!"}
  ],questions:[
    {q:"O que cada palavra nova faz?",a:"Abre uma porta para o Brasil",opts:["Fecha uma porta","Nada"]},
    {q:"Como aprender melhor?",a:"Com prática",opts:["Sem estudar","Dormindo"]}
  ]},
  51: {story:[
    {pt:"Bia está ensinando 'Education Plus' para seu amigo.",en:"Bia is teaching 'Education Plus' to her friend."},
    {pt:"'Repete comigo! Devagar!' ela disse, rindo.",en:"'Repeat after me! Slowly!' she said, laughing."},
    {pt:"Depois de praticar, ele disse: 'Agora entendi tudo!'",en:"After practicing, he said: 'Now I understand everything!'"}
  ],questions:[
    {q:"O que Bia está ensinando?",a:"Education Plus",opts:["Matemática","Cozinhar"]},
    {q:"O amigo entendeu?",a:"Sim, depois de praticar",opts:["Não","Desistiu"]}
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
    {pt:"Bia está ensinando 'Meetings & Events' para seu amigo.",en:"Bia is teaching 'Meetings & Events' to her friend."},
    {pt:"'Repete comigo! Devagar!' ela disse, rindo.",en:"'Repeat after me! Slowly!' she said, laughing."},
    {pt:"Depois de praticar, ele disse: 'Agora entendi tudo!'",en:"After practicing, he said: 'Now I understand everything!'"}
  ],questions:[
    {q:"O que Bia está ensinando?",a:"Meetings & Events",opts:["Matemática","Cozinhar"]},
    {q:"O amigo entendeu?",a:"Sim, depois de praticar",opts:["Não","Desistiu"]}
  ]},
  54: {story:[
    {pt:"Hoje vamos aprender sobre 'Office Life' em português.",en:"Today we'll learn about 'Office Life' in Portuguese."},
    {pt:"Cada palavra nova abre uma porta para o Brasil.",en:"Each new word opens a door to Brazil."},
    {pt:"Com prática, você vai usar essas palavras todo dia!",en:"With practice, you'll use these words every day!"}
  ],questions:[
    {q:"O que cada palavra nova faz?",a:"Abre uma porta para o Brasil",opts:["Fecha uma porta","Nada"]},
    {q:"Como aprender melhor?",a:"Com prática",opts:["Sem estudar","Dormindo"]}
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
    {pt:"Hoje vamos aprender sobre 'Negotiations' em português.",en:"Today we'll learn about 'Negotiations' in Portuguese."},
    {pt:"Cada palavra nova abre uma porta para o Brasil.",en:"Each new word opens a door to Brazil."},
    {pt:"Com prática, você vai usar essas palavras todo dia!",en:"With practice, you'll use these words every day!"}
  ],questions:[
    {q:"O que cada palavra nova faz?",a:"Abre uma porta para o Brasil",opts:["Fecha uma porta","Nada"]},
    {q:"Como aprender melhor?",a:"Com prática",opts:["Sem estudar","Dormindo"]}
  ]},
  57: {story:[
    {pt:"Bia está ensinando 'Presentations' para seu amigo.",en:"Bia is teaching 'Presentations' to her friend."},
    {pt:"'Repete comigo! Devagar!' ela disse, rindo.",en:"'Repeat after me! Slowly!' she said, laughing."},
    {pt:"Depois de praticar, ele disse: 'Agora entendi tudo!'",en:"After practicing, he said: 'Now I understand everything!'"}
  ],questions:[
    {q:"O que Bia está ensinando?",a:"Presentations",opts:["Matemática","Cozinhar"]},
    {q:"O amigo entendeu?",a:"Sim, depois de praticar",opts:["Não","Desistiu"]}
  ]},
  58: {story:[
    {pt:"Hoje vamos aprender sobre 'Problem Solving' em português.",en:"Today we'll learn about 'Problem Solving' in Portuguese."},
    {pt:"Cada palavra nova abre uma porta para o Brasil.",en:"Each new word opens a door to Brazil."},
    {pt:"Com prática, você vai usar essas palavras todo dia!",en:"With practice, you'll use these words every day!"}
  ],questions:[
    {q:"O que cada palavra nova faz?",a:"Abre uma porta para o Brasil",opts:["Fecha uma porta","Nada"]},
    {q:"Como aprender melhor?",a:"Com prática",opts:["Sem estudar","Dormindo"]}
  ]},
  59: {story:[
    {pt:"Bia está ensinando 'Music & Dance' para seu amigo.",en:"Bia is teaching 'Music & Dance' to her friend."},
    {pt:"'Repete comigo! Devagar!' ela disse, rindo.",en:"'Repeat after me! Slowly!' she said, laughing."},
    {pt:"Depois de praticar, ele disse: 'Agora entendi tudo!'",en:"After practicing, he said: 'Now I understand everything!'"}
  ],questions:[
    {q:"O que Bia está ensinando?",a:"Music & Dance",opts:["Matemática","Cozinhar"]},
    {q:"O amigo entendeu?",a:"Sim, depois de praticar",opts:["Não","Desistiu"]}
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
    {pt:"Bia está ensinando 'Geography' para seu amigo.",en:"Bia is teaching 'Geography' to her friend."},
    {pt:"'Repete comigo! Devagar!' ela disse, rindo.",en:"'Repeat after me! Slowly!' she said, laughing."},
    {pt:"Depois de praticar, ele disse: 'Agora entendi tudo!'",en:"After practicing, he said: 'Now I understand everything!'"}
  ],questions:[
    {q:"O que Bia está ensinando?",a:"Geography",opts:["Matemática","Cozinhar"]},
    {q:"O amigo entendeu?",a:"Sim, depois de praticar",opts:["Não","Desistiu"]}
  ]},
  62: {story:[
    {pt:"Hoje vamos aprender sobre 'Holidays' em português.",en:"Today we'll learn about 'Holidays' in Portuguese."},
    {pt:"Cada palavra nova abre uma porta para o Brasil.",en:"Each new word opens a door to Brazil."},
    {pt:"Com prática, você vai usar essas palavras todo dia!",en:"With practice, you'll use these words every day!"}
  ],questions:[
    {q:"O que cada palavra nova faz?",a:"Abre uma porta para o Brasil",opts:["Fecha uma porta","Nada"]},
    {q:"Como aprender melhor?",a:"Com prática",opts:["Sem estudar","Dormindo"]}
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
    {pt:"Hoje vamos aprender sobre 'Art & Literature' em português.",en:"Today we'll learn about 'Art & Literature' in Portuguese."},
    {pt:"Cada palavra nova abre uma porta para o Brasil.",en:"Each new word opens a door to Brazil."},
    {pt:"Com prática, você vai usar essas palavras todo dia!",en:"With practice, you'll use these words every day!"}
  ],questions:[
    {q:"O que cada palavra nova faz?",a:"Abre uma porta para o Brasil",opts:["Fecha uma porta","Nada"]},
    {q:"Como aprender melhor?",a:"Com prática",opts:["Sem estudar","Dormindo"]}
  ]},
  65: {story:[
    {pt:"Bia está ensinando 'Street Life' para seu amigo.",en:"Bia is teaching 'Street Life' to her friend."},
    {pt:"'Repete comigo! Devagar!' ela disse, rindo.",en:"'Repeat after me! Slowly!' she said, laughing."},
    {pt:"Depois de praticar, ele disse: 'Agora entendi tudo!'",en:"After practicing, he said: 'Now I understand everything!'"}
  ],questions:[
    {q:"O que Bia está ensinando?",a:"Street Life",opts:["Matemática","Cozinhar"]},
    {q:"O amigo entendeu?",a:"Sim, depois de praticar",opts:["Não","Desistiu"]}
  ]},
  66: {story:[
    {pt:"Hoje vamos aprender sobre 'Markets & Fairs' em português.",en:"Today we'll learn about 'Markets & Fairs' in Portuguese."},
    {pt:"Cada palavra nova abre uma porta para o Brasil.",en:"Each new word opens a door to Brazil."},
    {pt:"Com prática, você vai usar essas palavras todo dia!",en:"With practice, you'll use these words every day!"}
  ],questions:[
    {q:"O que cada palavra nova faz?",a:"Abre uma porta para o Brasil",opts:["Fecha uma porta","Nada"]},
    {q:"Como aprender melhor?",a:"Com prática",opts:["Sem estudar","Dormindo"]}
  ]},
  67: {story:[
    {pt:"Bia está ensinando 'Religion' para seu amigo.",en:"Bia is teaching 'Religion' to her friend."},
    {pt:"'Repete comigo! Devagar!' ela disse, rindo.",en:"'Repeat after me! Slowly!' she said, laughing."},
    {pt:"Depois de praticar, ele disse: 'Agora entendi tudo!'",en:"After practicing, he said: 'Now I understand everything!'"}
  ],questions:[
    {q:"O que Bia está ensinando?",a:"Religion",opts:["Matemática","Cozinhar"]},
    {q:"O amigo entendeu?",a:"Sim, depois de praticar",opts:["Não","Desistiu"]}
  ]},
  68: {story:[
    {pt:"Hoje vamos aprender sobre 'Brazilian Music' em português.",en:"Today we'll learn about 'Brazilian Music' in Portuguese."},
    {pt:"Cada palavra nova abre uma porta para o Brasil.",en:"Each new word opens a door to Brazil."},
    {pt:"Com prática, você vai usar essas palavras todo dia!",en:"With practice, you'll use these words every day!"}
  ],questions:[
    {q:"O que cada palavra nova faz?",a:"Abre uma porta para o Brasil",opts:["Fecha uma porta","Nada"]},
    {q:"Como aprender melhor?",a:"Com prática",opts:["Sem estudar","Dormindo"]}
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
    {pt:"Hoje vamos aprender sobre 'Time Expressions' em português.",en:"Today we'll learn about 'Time Expressions' in Portuguese."},
    {pt:"Cada palavra nova abre uma porta para o Brasil.",en:"Each new word opens a door to Brazil."},
    {pt:"Com prática, você vai usar essas palavras todo dia!",en:"With practice, you'll use these words every day!"}
  ],questions:[
    {q:"O que cada palavra nova faz?",a:"Abre uma porta para o Brasil",opts:["Fecha uma porta","Nada"]},
    {q:"Como aprender melhor?",a:"Com prática",opts:["Sem estudar","Dormindo"]}
  ]},
  73: {story:[
    {pt:"Bia está ensinando 'Transition Words' para seu amigo.",en:"Bia is teaching 'Transition Words' to her friend."},
    {pt:"'Repete comigo! Devagar!' ela disse, rindo.",en:"'Repeat after me! Slowly!' she said, laughing."},
    {pt:"Depois de praticar, ele disse: 'Agora entendi tudo!'",en:"After practicing, he said: 'Now I understand everything!'"}
  ],questions:[
    {q:"O que Bia está ensinando?",a:"Transition Words",opts:["Matemática","Cozinhar"]},
    {q:"O amigo entendeu?",a:"Sim, depois de praticar",opts:["Não","Desistiu"]}
  ]},
  74: {story:[
    {pt:"Hoje vamos aprender sobre 'Emotions Extended' em português.",en:"Today we'll learn about 'Emotions Extended' in Portuguese."},
    {pt:"Cada palavra nova abre uma porta para o Brasil.",en:"Each new word opens a door to Brazil."},
    {pt:"Com prática, você vai usar essas palavras todo dia!",en:"With practice, you'll use these words every day!"}
  ],questions:[
    {q:"O que cada palavra nova faz?",a:"Abre uma porta para o Brasil",opts:["Fecha uma porta","Nada"]},
    {q:"Como aprender melhor?",a:"Com prática",opts:["Sem estudar","Dormindo"]}
  ]},
  75: {story:[
    {pt:"Bia está ensinando 'Describing Events' para seu amigo.",en:"Bia is teaching 'Describing Events' to her friend."},
    {pt:"'Repete comigo! Devagar!' ela disse, rindo.",en:"'Repeat after me! Slowly!' she said, laughing."},
    {pt:"Depois de praticar, ele disse: 'Agora entendi tudo!'",en:"After practicing, he said: 'Now I understand everything!'"}
  ],questions:[
    {q:"O que Bia está ensinando?",a:"Describing Events",opts:["Matemática","Cozinhar"]},
    {q:"O amigo entendeu?",a:"Sim, depois de praticar",opts:["Não","Desistiu"]}
  ]},
  76: {story:[
    {pt:"Hoje vamos aprender sobre 'Cause & Effect' em português.",en:"Today we'll learn about 'Cause & Effect' in Portuguese."},
    {pt:"Cada palavra nova abre uma porta para o Brasil.",en:"Each new word opens a door to Brazil."},
    {pt:"Com prática, você vai usar essas palavras todo dia!",en:"With practice, you'll use these words every day!"}
  ],questions:[
    {q:"O que cada palavra nova faz?",a:"Abre uma porta para o Brasil",opts:["Fecha uma porta","Nada"]},
    {q:"Como aprender melhor?",a:"Com prática",opts:["Sem estudar","Dormindo"]}
  ]},
  77: {story:[
    {pt:"Bia está ensinando 'Advanced Convo' para seu amigo.",en:"Bia is teaching 'Advanced Convo' to her friend."},
    {pt:"'Repete comigo! Devagar!' ela disse, rindo.",en:"'Repeat after me! Slowly!' she said, laughing."},
    {pt:"Depois de praticar, ele disse: 'Agora entendi tudo!'",en:"After practicing, he said: 'Now I understand everything!'"}
  ],questions:[
    {q:"O que Bia está ensinando?",a:"Advanced Convo",opts:["Matemática","Cozinhar"]},
    {q:"O amigo entendeu?",a:"Sim, depois de praticar",opts:["Não","Desistiu"]}
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
    {pt:"Bia está ensinando 'Abstract Extended' para seu amigo.",en:"Bia is teaching 'Abstract Extended' to her friend."},
    {pt:"'Repete comigo! Devagar!' ela disse, rindo.",en:"'Repeat after me! Slowly!' she said, laughing."},
    {pt:"Depois de praticar, ele disse: 'Agora entendi tudo!'",en:"After practicing, he said: 'Now I understand everything!'"}
  ],questions:[
    {q:"O que Bia está ensinando?",a:"Abstract Extended",opts:["Matemática","Cozinhar"]},
    {q:"O amigo entendeu?",a:"Sim, depois de praticar",opts:["Não","Desistiu"]}
  ]},
  80: {story:[
    {pt:"Hoje vamos aprender sobre 'Social Issues' em português.",en:"Today we'll learn about 'Social Issues' in Portuguese."},
    {pt:"Cada palavra nova abre uma porta para o Brasil.",en:"Each new word opens a door to Brazil."},
    {pt:"Com prática, você vai usar essas palavras todo dia!",en:"With practice, you'll use these words every day!"}
  ],questions:[
    {q:"O que cada palavra nova faz?",a:"Abre uma porta para o Brasil",opts:["Fecha uma porta","Nada"]},
    {q:"Como aprender melhor?",a:"Com prática",opts:["Sem estudar","Dormindo"]}
  ]},
  81: {story:[
    {pt:"Bia está ensinando 'Environment' para seu amigo.",en:"Bia is teaching 'Environment' to her friend."},
    {pt:"'Repete comigo! Devagar!' ela disse, rindo.",en:"'Repeat after me! Slowly!' she said, laughing."},
    {pt:"Depois de praticar, ele disse: 'Agora entendi tudo!'",en:"After practicing, he said: 'Now I understand everything!'"}
  ],questions:[
    {q:"O que Bia está ensinando?",a:"Environment",opts:["Matemática","Cozinhar"]},
    {q:"O amigo entendeu?",a:"Sim, depois de praticar",opts:["Não","Desistiu"]}
  ]},
  82: {story:[
    {pt:"Hoje vamos aprender sobre 'Media' em português.",en:"Today we'll learn about 'Media' in Portuguese."},
    {pt:"Cada palavra nova abre uma porta para o Brasil.",en:"Each new word opens a door to Brazil."},
    {pt:"Com prática, você vai usar essas palavras todo dia!",en:"With practice, you'll use these words every day!"}
  ],questions:[
    {q:"O que cada palavra nova faz?",a:"Abre uma porta para o Brasil",opts:["Fecha uma porta","Nada"]},
    {q:"Como aprender melhor?",a:"Com prática",opts:["Sem estudar","Dormindo"]}
  ]},
  83: {story:[
    {pt:"Bia está ensinando 'Philosophy' para seu amigo.",en:"Bia is teaching 'Philosophy' to her friend."},
    {pt:"'Repete comigo! Devagar!' ela disse, rindo.",en:"'Repeat after me! Slowly!' she said, laughing."},
    {pt:"Depois de praticar, ele disse: 'Agora entendi tudo!'",en:"After practicing, he said: 'Now I understand everything!'"}
  ],questions:[
    {q:"O que Bia está ensinando?",a:"Philosophy",opts:["Matemática","Cozinhar"]},
    {q:"O amigo entendeu?",a:"Sim, depois de praticar",opts:["Não","Desistiu"]}
  ]},
  84: {story:[
    {pt:"Hoje vamos aprender sobre 'Law & Rights' em português.",en:"Today we'll learn about 'Law & Rights' in Portuguese."},
    {pt:"Cada palavra nova abre uma porta para o Brasil.",en:"Each new word opens a door to Brazil."},
    {pt:"Com prática, você vai usar essas palavras todo dia!",en:"With practice, you'll use these words every day!"}
  ],questions:[
    {q:"O que cada palavra nova faz?",a:"Abre uma porta para o Brasil",opts:["Fecha uma porta","Nada"]},
    {q:"Como aprender melhor?",a:"Com prática",opts:["Sem estudar","Dormindo"]}
  ]},
  85: {story:[
    {pt:"Bia está ensinando 'Science' para seu amigo.",en:"Bia is teaching 'Science' to her friend."},
    {pt:"'Repete comigo! Devagar!' ela disse, rindo.",en:"'Repeat after me! Slowly!' she said, laughing."},
    {pt:"Depois de praticar, ele disse: 'Agora entendi tudo!'",en:"After practicing, he said: 'Now I understand everything!'"}
  ],questions:[
    {q:"O que Bia está ensinando?",a:"Science",opts:["Matemática","Cozinhar"]},
    {q:"O amigo entendeu?",a:"Sim, depois de praticar",opts:["Não","Desistiu"]}
  ]},
  86: {story:[
    {pt:"Hoje vamos aprender sobre 'Medicine Plus' em português.",en:"Today we'll learn about 'Medicine Plus' in Portuguese."},
    {pt:"Cada palavra nova abre uma porta para o Brasil.",en:"Each new word opens a door to Brazil."},
    {pt:"Com prática, você vai usar essas palavras todo dia!",en:"With practice, you'll use these words every day!"}
  ],questions:[
    {q:"O que cada palavra nova faz?",a:"Abre uma porta para o Brasil",opts:["Fecha uma porta","Nada"]},
    {q:"Como aprender melhor?",a:"Com prática",opts:["Sem estudar","Dormindo"]}
  ]},
  87: {story:[
    {pt:"Bia está ensinando 'Psychology' para seu amigo.",en:"Bia is teaching 'Psychology' to her friend."},
    {pt:"'Repete comigo! Devagar!' ela disse, rindo.",en:"'Repeat after me! Slowly!' she said, laughing."},
    {pt:"Depois de praticar, ele disse: 'Agora entendi tudo!'",en:"After practicing, he said: 'Now I understand everything!'"}
  ],questions:[
    {q:"O que Bia está ensinando?",a:"Psychology",opts:["Matemática","Cozinhar"]},
    {q:"O amigo entendeu?",a:"Sim, depois de praticar",opts:["Não","Desistiu"]}
  ]},
  88: {story:[
    {pt:"Hoje vamos aprender sobre 'Future Plans' em português.",en:"Today we'll learn about 'Future Plans' in Portuguese."},
    {pt:"Cada palavra nova abre uma porta para o Brasil.",en:"Each new word opens a door to Brazil."},
    {pt:"Com prática, você vai usar essas palavras todo dia!",en:"With practice, you'll use these words every day!"}
  ],questions:[
    {q:"O que cada palavra nova faz?",a:"Abre uma porta para o Brasil",opts:["Fecha uma porta","Nada"]},
    {q:"Como aprender melhor?",a:"Com prática",opts:["Sem estudar","Dormindo"]}
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
    {pt:"Bia está ensinando 'Driving' para seu amigo.",en:"Bia is teaching 'Driving' to her friend."},
    {pt:"'Repete comigo! Devagar!' ela disse, rindo.",en:"'Repeat after me! Slowly!' she said, laughing."},
    {pt:"Depois de praticar, ele disse: 'Agora entendi tudo!'",en:"After practicing, he said: 'Now I understand everything!'"}
  ],questions:[
    {q:"O que Bia está ensinando?",a:"Driving",opts:["Matemática","Cozinhar"]},
    {q:"O amigo entendeu?",a:"Sim, depois de praticar",opts:["Não","Desistiu"]}
  ]},
  92: {story:[
    {pt:"Hoje vamos aprender sobre 'Cooking Verbs' em português.",en:"Today we'll learn about 'Cooking Verbs' in Portuguese."},
    {pt:"Cada palavra nova abre uma porta para o Brasil.",en:"Each new word opens a door to Brazil."},
    {pt:"Com prática, você vai usar essas palavras todo dia!",en:"With practice, you'll use these words every day!"}
  ],questions:[
    {q:"O que cada palavra nova faz?",a:"Abre uma porta para o Brasil",opts:["Fecha uma porta","Nada"]},
    {q:"Como aprender melhor?",a:"Com prática",opts:["Sem estudar","Dormindo"]}
  ]},
  93: {story:[
    {pt:"Bia está ensinando 'Nature Extended' para seu amigo.",en:"Bia is teaching 'Nature Extended' to her friend."},
    {pt:"'Repete comigo! Devagar!' ela disse, rindo.",en:"'Repeat after me! Slowly!' she said, laughing."},
    {pt:"Depois de praticar, ele disse: 'Agora entendi tudo!'",en:"After practicing, he said: 'Now I understand everything!'"}
  ],questions:[
    {q:"O que Bia está ensinando?",a:"Nature Extended",opts:["Matemática","Cozinhar"]},
    {q:"O amigo entendeu?",a:"Sim, depois de praticar",opts:["Não","Desistiu"]}
  ]},
  94: {story:[
    {pt:"Hoje vamos aprender sobre 'Pets & Animals Plus' em português.",en:"Today we'll learn about 'Pets & Animals Plus' in Portuguese."},
    {pt:"Cada palavra nova abre uma porta para o Brasil.",en:"Each new word opens a door to Brazil."},
    {pt:"Com prática, você vai usar essas palavras todo dia!",en:"With practice, you'll use these words every day!"}
  ],questions:[
    {q:"O que cada palavra nova faz?",a:"Abre uma porta para o Brasil",opts:["Fecha uma porta","Nada"]},
    {q:"Como aprender melhor?",a:"Com prática",opts:["Sem estudar","Dormindo"]}
  ]},
  95: {story:[
    {pt:"Bia está ensinando 'Materials' para seu amigo.",en:"Bia is teaching 'Materials' to her friend."},
    {pt:"'Repete comigo! Devagar!' ela disse, rindo.",en:"'Repeat after me! Slowly!' she said, laughing."},
    {pt:"Depois de praticar, ele disse: 'Agora entendi tudo!'",en:"After practicing, he said: 'Now I understand everything!'"}
  ],questions:[
    {q:"O que Bia está ensinando?",a:"Materials",opts:["Matemática","Cozinhar"]},
    {q:"O amigo entendeu?",a:"Sim, depois de praticar",opts:["Não","Desistiu"]}
  ]},
  96: {story:[
    {pt:"Hoje vamos aprender sobre 'Shapes & Sizes' em português.",en:"Today we'll learn about 'Shapes & Sizes' in Portuguese."},
    {pt:"Cada palavra nova abre uma porta para o Brasil.",en:"Each new word opens a door to Brazil."},
    {pt:"Com prática, você vai usar essas palavras todo dia!",en:"With practice, you'll use these words every day!"}
  ],questions:[
    {q:"O que cada palavra nova faz?",a:"Abre uma porta para o Brasil",opts:["Fecha uma porta","Nada"]},
    {q:"Como aprender melhor?",a:"Com prática",opts:["Sem estudar","Dormindo"]}
  ]},
  97: {story:[
    {pt:"Bia está ensinando 'Home Repairs' para seu amigo.",en:"Bia is teaching 'Home Repairs' to her friend."},
    {pt:"'Repete comigo! Devagar!' ela disse, rindo.",en:"'Repeat after me! Slowly!' she said, laughing."},
    {pt:"Depois de praticar, ele disse: 'Agora entendi tudo!'",en:"After practicing, he said: 'Now I understand everything!'"}
  ],questions:[
    {q:"O que Bia está ensinando?",a:"Home Repairs",opts:["Matemática","Cozinhar"]},
    {q:"O amigo entendeu?",a:"Sim, depois de praticar",opts:["Não","Desistiu"]}
  ]},
  98: {story:[
    {pt:"Hoje vamos aprender sobre 'Weather Extended' em português.",en:"Today we'll learn about 'Weather Extended' in Portuguese."},
    {pt:"Cada palavra nova abre uma porta para o Brasil.",en:"Each new word opens a door to Brazil."},
    {pt:"Com prática, você vai usar essas palavras todo dia!",en:"With practice, you'll use these words every day!"}
  ],questions:[
    {q:"O que cada palavra nova faz?",a:"Abre uma porta para o Brasil",opts:["Fecha uma porta","Nada"]},
    {q:"Como aprender melhor?",a:"Com prática",opts:["Sem estudar","Dormindo"]}
  ]},
  99: {story:[
    {pt:"Bia está ensinando 'Academic Writing' para seu amigo.",en:"Bia is teaching 'Academic Writing' to her friend."},
    {pt:"'Repete comigo! Devagar!' ela disse, rindo.",en:"'Repeat after me! Slowly!' she said, laughing."},
    {pt:"Depois de praticar, ele disse: 'Agora entendi tudo!'",en:"After practicing, he said: 'Now I understand everything!'"}
  ],questions:[
    {q:"O que Bia está ensinando?",a:"Academic Writing",opts:["Matemática","Cozinhar"]},
    {q:"O amigo entendeu?",a:"Sim, depois de praticar",opts:["Não","Desistiu"]}
  ]},
  100: {story:[
    {pt:"Hoje vamos aprender sobre 'Legal Terms' em português.",en:"Today we'll learn about 'Legal Terms' in Portuguese."},
    {pt:"Cada palavra nova abre uma porta para o Brasil.",en:"Each new word opens a door to Brazil."},
    {pt:"Com prática, você vai usar essas palavras todo dia!",en:"With practice, you'll use these words every day!"}
  ],questions:[
    {q:"O que cada palavra nova faz?",a:"Abre uma porta para o Brasil",opts:["Fecha uma porta","Nada"]},
    {q:"Como aprender melhor?",a:"Com prática",opts:["Sem estudar","Dormindo"]}
  ]},
  101: {story:[
    {pt:"Bia está ensinando 'Storytelling' para seu amigo.",en:"Bia is teaching 'Storytelling' to her friend."},
    {pt:"'Repete comigo! Devagar!' ela disse, rindo.",en:"'Repeat after me! Slowly!' she said, laughing."},
    {pt:"Depois de praticar, ele disse: 'Agora entendi tudo!'",en:"After practicing, he said: 'Now I understand everything!'"}
  ],questions:[
    {q:"O que Bia está ensinando?",a:"Storytelling",opts:["Matemática","Cozinhar"]},
    {q:"O amigo entendeu?",a:"Sim, depois de praticar",opts:["Não","Desistiu"]}
  ]},
  102: {story:[
    {pt:"Hoje vamos aprender sobre 'Debate Skills' em português.",en:"Today we'll learn about 'Debate Skills' in Portuguese."},
    {pt:"Cada palavra nova abre uma porta para o Brasil.",en:"Each new word opens a door to Brazil."},
    {pt:"Com prática, você vai usar essas palavras todo dia!",en:"With practice, you'll use these words every day!"}
  ],questions:[
    {q:"O que cada palavra nova faz?",a:"Abre uma porta para o Brasil",opts:["Fecha uma porta","Nada"]},
    {q:"Como aprender melhor?",a:"Com prática",opts:["Sem estudar","Dormindo"]}
  ]},
  103: {story:[
    {pt:"Bia está ensinando 'Emotions Master' para seu amigo.",en:"Bia is teaching 'Emotions Master' to her friend."},
    {pt:"'Repete comigo! Devagar!' ela disse, rindo.",en:"'Repeat after me! Slowly!' she said, laughing."},
    {pt:"Depois de praticar, ele disse: 'Agora entendi tudo!'",en:"After practicing, he said: 'Now I understand everything!'"}
  ],questions:[
    {q:"O que Bia está ensinando?",a:"Emotions Master",opts:["Matemática","Cozinhar"]},
    {q:"O amigo entendeu?",a:"Sim, depois de praticar",opts:["Não","Desistiu"]}
  ]},
  104: {story:[
    {pt:"Hoje vamos aprender sobre 'Business Advanced' em português.",en:"Today we'll learn about 'Business Advanced' in Portuguese."},
    {pt:"Cada palavra nova abre uma porta para o Brasil.",en:"Each new word opens a door to Brazil."},
    {pt:"Com prática, você vai usar essas palavras todo dia!",en:"With practice, you'll use these words every day!"}
  ],questions:[
    {q:"O que cada palavra nova faz?",a:"Abre uma porta para o Brasil",opts:["Fecha uma porta","Nada"]},
    {q:"Como aprender melhor?",a:"Com prática",opts:["Sem estudar","Dormindo"]}
  ]},
  105: {story:[
    {pt:"Bia está ensinando 'Daily Expressions' para seu amigo.",en:"Bia is teaching 'Daily Expressions' to her friend."},
    {pt:"'Repete comigo! Devagar!' ela disse, rindo.",en:"'Repeat after me! Slowly!' she said, laughing."},
    {pt:"Depois de praticar, ele disse: 'Agora entendi tudo!'",en:"After practicing, he said: 'Now I understand everything!'"}
  ],questions:[
    {q:"O que Bia está ensinando?",a:"Daily Expressions",opts:["Matemática","Cozinhar"]},
    {q:"O amigo entendeu?",a:"Sim, depois de praticar",opts:["Não","Desistiu"]}
  ]},
  106: {story:[
    {pt:"Hoje vamos aprender sobre 'Technology Plus' em português.",en:"Today we'll learn about 'Technology Plus' in Portuguese."},
    {pt:"Cada palavra nova abre uma porta para o Brasil.",en:"Each new word opens a door to Brazil."},
    {pt:"Com prática, você vai usar essas palavras todo dia!",en:"With practice, you'll use these words every day!"}
  ],questions:[
    {q:"O que cada palavra nova faz?",a:"Abre uma porta para o Brasil",opts:["Fecha uma porta","Nada"]},
    {q:"Como aprender melhor?",a:"Com prática",opts:["Sem estudar","Dormindo"]}
  ]},
  107: {story:[
    {pt:"Bia está ensinando 'Proverbs' para seu amigo.",en:"Bia is teaching 'Proverbs' to her friend."},
    {pt:"'Repete comigo! Devagar!' ela disse, rindo.",en:"'Repeat after me! Slowly!' she said, laughing."},
    {pt:"Depois de praticar, ele disse: 'Agora entendi tudo!'",en:"After practicing, he said: 'Now I understand everything!'"}
  ],questions:[
    {q:"O que Bia está ensinando?",a:"Proverbs",opts:["Matemática","Cozinhar"]},
    {q:"O amigo entendeu?",a:"Sim, depois de praticar",opts:["Não","Desistiu"]}
  ]},
  108: {story:[
    {pt:"Hoje vamos aprender sobre 'Final Mastery' em português.",en:"Today we'll learn about 'Final Mastery' in Portuguese."},
    {pt:"Cada palavra nova abre uma porta para o Brasil.",en:"Each new word opens a door to Brazil."},
    {pt:"Com prática, você vai usar essas palavras todo dia!",en:"With practice, you'll use these words every day!"}
  ],questions:[
    {q:"O que cada palavra nova faz?",a:"Abre uma porta para o Brasil",opts:["Fecha uma porta","Nada"]},
    {q:"Como aprender melhor?",a:"Com prática",opts:["Sem estudar","Dormindo"]}
  ]},
  109: {story:[
    {pt:"Bia está ensinando 'Months & Seasons' para seu amigo.",en:"Bia is teaching 'Months & Seasons' to her friend."},
    {pt:"'Repete comigo! Devagar!' ela disse, rindo.",en:"'Repeat after me! Slowly!' she said, laughing."},
    {pt:"Depois de praticar, ele disse: 'Agora entendi tudo!'",en:"After practicing, he said: 'Now I understand everything!'"}
  ],questions:[
    {q:"O que Bia está ensinando?",a:"Months & Seasons",opts:["Matemática","Cozinhar"]},
    {q:"O amigo entendeu?",a:"Sim, depois de praticar",opts:["Não","Desistiu"]}
  ]},
  110: {story:[
    {pt:"Hoje vamos aprender sobre 'Days of the Week' em português.",en:"Today we'll learn about 'Days of the Week' in Portuguese."},
    {pt:"Cada palavra nova abre uma porta para o Brasil.",en:"Each new word opens a door to Brazil."},
    {pt:"Com prática, você vai usar essas palavras todo dia!",en:"With practice, you'll use these words every day!"}
  ],questions:[
    {q:"O que cada palavra nova faz?",a:"Abre uma porta para o Brasil",opts:["Fecha uma porta","Nada"]},
    {q:"Como aprender melhor?",a:"Com prática",opts:["Sem estudar","Dormindo"]}
  ]},
  111: {story:[
    {pt:"Bia está ensinando 'Question Words' para seu amigo.",en:"Bia is teaching 'Question Words' to her friend."},
    {pt:"'Repete comigo! Devagar!' ela disse, rindo.",en:"'Repeat after me! Slowly!' she said, laughing."},
    {pt:"Depois de praticar, ele disse: 'Agora entendi tudo!'",en:"After practicing, he said: 'Now I understand everything!'"}
  ],questions:[
    {q:"O que Bia está ensinando?",a:"Question Words",opts:["Matemática","Cozinhar"]},
    {q:"O amigo entendeu?",a:"Sim, depois de praticar",opts:["Não","Desistiu"]}
  ]},
  112: {story:[
    {pt:"Hoje vamos aprender sobre 'Body Extended' em português.",en:"Today we'll learn about 'Body Extended' in Portuguese."},
    {pt:"Cada palavra nova abre uma porta para o Brasil.",en:"Each new word opens a door to Brazil."},
    {pt:"Com prática, você vai usar essas palavras todo dia!",en:"With practice, you'll use these words every day!"}
  ],questions:[
    {q:"O que cada palavra nova faz?",a:"Abre uma porta para o Brasil",opts:["Fecha uma porta","Nada"]},
    {q:"Como aprender melhor?",a:"Com prática",opts:["Sem estudar","Dormindo"]}
  ]},
  113: {story:[
    {pt:"Bia está ensinando 'Hygiene Items' para seu amigo.",en:"Bia is teaching 'Hygiene Items' to her friend."},
    {pt:"'Repete comigo! Devagar!' ela disse, rindo.",en:"'Repeat after me! Slowly!' she said, laughing."},
    {pt:"Depois de praticar, ele disse: 'Agora entendi tudo!'",en:"After practicing, he said: 'Now I understand everything!'"}
  ],questions:[
    {q:"O que Bia está ensinando?",a:"Hygiene Items",opts:["Matemática","Cozinhar"]},
    {q:"O amigo entendeu?",a:"Sim, depois de praticar",opts:["Não","Desistiu"]}
  ]},
  114: {story:[
    {pt:"Hoje vamos aprender sobre 'Furniture' em português.",en:"Today we'll learn about 'Furniture' in Portuguese."},
    {pt:"Cada palavra nova abre uma porta para o Brasil.",en:"Each new word opens a door to Brazil."},
    {pt:"Com prática, você vai usar essas palavras todo dia!",en:"With practice, you'll use these words every day!"}
  ],questions:[
    {q:"O que cada palavra nova faz?",a:"Abre uma porta para o Brasil",opts:["Fecha uma porta","Nada"]},
    {q:"Como aprender melhor?",a:"Com prática",opts:["Sem estudar","Dormindo"]}
  ]},
  115: {story:[
    {pt:"Bia está ensinando 'Tastes & Textures' para seu amigo.",en:"Bia is teaching 'Tastes & Textures' to her friend."},
    {pt:"'Repete comigo! Devagar!' ela disse, rindo.",en:"'Repeat after me! Slowly!' she said, laughing."},
    {pt:"Depois de praticar, ele disse: 'Agora entendi tudo!'",en:"After practicing, he said: 'Now I understand everything!'"}
  ],questions:[
    {q:"O que Bia está ensinando?",a:"Tastes & Textures",opts:["Matemática","Cozinhar"]},
    {q:"O amigo entendeu?",a:"Sim, depois de praticar",opts:["Não","Desistiu"]}
  ]},
  116: {story:[
    {pt:"Hoje vamos aprender sobre 'Prepositions' em português.",en:"Today we'll learn about 'Prepositions' in Portuguese."},
    {pt:"Cada palavra nova abre uma porta para o Brasil.",en:"Each new word opens a door to Brazil."},
    {pt:"Com prática, você vai usar essas palavras todo dia!",en:"With practice, you'll use these words every day!"}
  ],questions:[
    {q:"O que cada palavra nova faz?",a:"Abre uma porta para o Brasil",opts:["Fecha uma porta","Nada"]},
    {q:"Como aprender melhor?",a:"Com prática",opts:["Sem estudar","Dormindo"]}
  ]},
  117: {story:[
    {pt:"Bia está ensinando 'Exclamations' para seu amigo.",en:"Bia is teaching 'Exclamations' to her friend."},
    {pt:"'Repete comigo! Devagar!' ela disse, rindo.",en:"'Repeat after me! Slowly!' she said, laughing."},
    {pt:"Depois de praticar, ele disse: 'Agora entendi tudo!'",en:"After practicing, he said: 'Now I understand everything!'"}
  ],questions:[
    {q:"O que Bia está ensinando?",a:"Exclamations",opts:["Matemática","Cozinhar"]},
    {q:"O amigo entendeu?",a:"Sim, depois de praticar",opts:["Não","Desistiu"]}
  ]},
  118: {story:[
    {pt:"Hoje vamos aprender sobre 'School Supplies' em português.",en:"Today we'll learn about 'School Supplies' in Portuguese."},
    {pt:"Cada palavra nova abre uma porta para o Brasil.",en:"Each new word opens a door to Brazil."},
    {pt:"Com prática, você vai usar essas palavras todo dia!",en:"With practice, you'll use these words every day!"}
  ],questions:[
    {q:"O que cada palavra nova faz?",a:"Abre uma porta para o Brasil",opts:["Fecha uma porta","Nada"]},
    {q:"Como aprender melhor?",a:"Com prática",opts:["Sem estudar","Dormindo"]}
  ]},
  119: {story:[
    {pt:"Bia está ensinando 'Tools' para seu amigo.",en:"Bia is teaching 'Tools' to her friend."},
    {pt:"'Repete comigo! Devagar!' ela disse, rindo.",en:"'Repeat after me! Slowly!' she said, laughing."},
    {pt:"Depois de praticar, ele disse: 'Agora entendi tudo!'",en:"After practicing, he said: 'Now I understand everything!'"}
  ],questions:[
    {q:"O que Bia está ensinando?",a:"Tools",opts:["Matemática","Cozinhar"]},
    {q:"O amigo entendeu?",a:"Sim, depois de praticar",opts:["Não","Desistiu"]}
  ]},
  120: {story:[
    {pt:"Hoje vamos aprender sobre 'Numbers Big' em português.",en:"Today we'll learn about 'Numbers Big' in Portuguese."},
    {pt:"Cada palavra nova abre uma porta para o Brasil.",en:"Each new word opens a door to Brazil."},
    {pt:"Com prática, você vai usar essas palavras todo dia!",en:"With practice, you'll use these words every day!"}
  ],questions:[
    {q:"O que cada palavra nova faz?",a:"Abre uma porta para o Brasil",opts:["Fecha uma porta","Nada"]},
    {q:"Como aprender melhor?",a:"Com prática",opts:["Sem estudar","Dormindo"]}
  ]},
  121: {story:[
    {pt:"Bia está ensinando 'Phone Life' para seu amigo.",en:"Bia is teaching 'Phone Life' to her friend."},
    {pt:"'Repete comigo! Devagar!' ela disse, rindo.",en:"'Repeat after me! Slowly!' she said, laughing."},
    {pt:"Depois de praticar, ele disse: 'Agora entendi tudo!'",en:"After practicing, he said: 'Now I understand everything!'"}
  ],questions:[
    {q:"O que Bia está ensinando?",a:"Phone Life",opts:["Matemática","Cozinhar"]},
    {q:"O amigo entendeu?",a:"Sim, depois de praticar",opts:["Não","Desistiu"]}
  ]},
  122: {story:[
    {pt:"Hoje vamos aprender sobre 'Verb Conjugation' em português.",en:"Today we'll learn about 'Verb Conjugation' in Portuguese."},
    {pt:"Cada palavra nova abre uma porta para o Brasil.",en:"Each new word opens a door to Brazil."},
    {pt:"Com prática, você vai usar essas palavras todo dia!",en:"With practice, you'll use these words every day!"}
  ],questions:[
    {q:"O que cada palavra nova faz?",a:"Abre uma porta para o Brasil",opts:["Fecha uma porta","Nada"]},
    {q:"Como aprender melhor?",a:"Com prática",opts:["Sem estudar","Dormindo"]}
  ]},
  123: {story:[
    {pt:"Bia está ensinando 'Imperative Commands' para seu amigo.",en:"Bia is teaching 'Imperative Commands' to her friend."},
    {pt:"'Repete comigo! Devagar!' ela disse, rindo.",en:"'Repeat after me! Slowly!' she said, laughing."},
    {pt:"Depois de praticar, ele disse: 'Agora entendi tudo!'",en:"After practicing, he said: 'Now I understand everything!'"}
  ],questions:[
    {q:"O que Bia está ensinando?",a:"Imperative Commands",opts:["Matemática","Cozinhar"]},
    {q:"O amigo entendeu?",a:"Sim, depois de praticar",opts:["Não","Desistiu"]}
  ]},
  124: {story:[
    {pt:"Hoje vamos aprender sobre 'Gerund (-ando/-endo)' em português.",en:"Today we'll learn about 'Gerund (-ando/-endo)' in Portuguese."},
    {pt:"Cada palavra nova abre uma porta para o Brasil.",en:"Each new word opens a door to Brazil."},
    {pt:"Com prática, você vai usar essas palavras todo dia!",en:"With practice, you'll use these words every day!"}
  ],questions:[
    {q:"O que cada palavra nova faz?",a:"Abre uma porta para o Brasil",opts:["Fecha uma porta","Nada"]},
    {q:"Como aprender melhor?",a:"Com prática",opts:["Sem estudar","Dormindo"]}
  ]},
  125: {story:[
    {pt:"Bia está ensinando 'Reflexive Verbs' para seu amigo.",en:"Bia is teaching 'Reflexive Verbs' to her friend."},
    {pt:"'Repete comigo! Devagar!' ela disse, rindo.",en:"'Repeat after me! Slowly!' she said, laughing."},
    {pt:"Depois de praticar, ele disse: 'Agora entendi tudo!'",en:"After practicing, he said: 'Now I understand everything!'"}
  ],questions:[
    {q:"O que Bia está ensinando?",a:"Reflexive Verbs",opts:["Matemática","Cozinhar"]},
    {q:"O amigo entendeu?",a:"Sim, depois de praticar",opts:["Não","Desistiu"]}
  ]},
  126: {story:[
    {pt:"Hoje vamos aprender sobre 'Perfect Tense' em português.",en:"Today we'll learn about 'Perfect Tense' in Portuguese."},
    {pt:"Cada palavra nova abre uma porta para o Brasil.",en:"Each new word opens a door to Brazil."},
    {pt:"Com prática, você vai usar essas palavras todo dia!",en:"With practice, you'll use these words every day!"}
  ],questions:[
    {q:"O que cada palavra nova faz?",a:"Abre uma porta para o Brasil",opts:["Fecha uma porta","Nada"]},
    {q:"Como aprender melhor?",a:"Com prática",opts:["Sem estudar","Dormindo"]}
  ]},
  127: {story:[
    {pt:"Bia está ensinando 'Passive Voice' para seu amigo.",en:"Bia is teaching 'Passive Voice' to her friend."},
    {pt:"'Repete comigo! Devagar!' ela disse, rindo.",en:"'Repeat after me! Slowly!' she said, laughing."},
    {pt:"Depois de praticar, ele disse: 'Agora entendi tudo!'",en:"After practicing, he said: 'Now I understand everything!'"}
  ],questions:[
    {q:"O que Bia está ensinando?",a:"Passive Voice",opts:["Matemática","Cozinhar"]},
    {q:"O amigo entendeu?",a:"Sim, depois de praticar",opts:["Não","Desistiu"]}
  ]},
  128: {story:[
    {pt:"Hoje vamos aprender sobre 'Reported Speech' em português.",en:"Today we'll learn about 'Reported Speech' in Portuguese."},
    {pt:"Cada palavra nova abre uma porta para o Brasil.",en:"Each new word opens a door to Brazil."},
    {pt:"Com prática, você vai usar essas palavras todo dia!",en:"With practice, you'll use these words every day!"}
  ],questions:[
    {q:"O que cada palavra nova faz?",a:"Abre uma porta para o Brasil",opts:["Fecha uma porta","Nada"]},
    {q:"Como aprender melhor?",a:"Com prática",opts:["Sem estudar","Dormindo"]}
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
    {pt:"Hoje vamos aprender sobre 'Augmentatives' em português.",en:"Today we'll learn about 'Augmentatives' in Portuguese."},
    {pt:"Cada palavra nova abre uma porta para o Brasil.",en:"Each new word opens a door to Brazil."},
    {pt:"Com prática, você vai usar essas palavras todo dia!",en:"With practice, you'll use these words every day!"}
  ],questions:[
    {q:"O que cada palavra nova faz?",a:"Abre uma porta para o Brasil",opts:["Fecha uma porta","Nada"]},
    {q:"Como aprender melhor?",a:"Com prática",opts:["Sem estudar","Dormindo"]}
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
    {pt:"Hoje vamos aprender sobre 'Internet Slang' em português.",en:"Today we'll learn about 'Internet Slang' in Portuguese."},
    {pt:"Cada palavra nova abre uma porta para o Brasil.",en:"Each new word opens a door to Brazil."},
    {pt:"Com prática, você vai usar essas palavras todo dia!",en:"With practice, you'll use these words every day!"}
  ],questions:[
    {q:"O que cada palavra nova faz?",a:"Abre uma porta para o Brasil",opts:["Fecha uma porta","Nada"]},
    {q:"Como aprender melhor?",a:"Com prática",opts:["Sem estudar","Dormindo"]}
  ]},
  133: {story:[
    {pt:"Bia está ensinando 'Regional Slang' para seu amigo.",en:"Bia is teaching 'Regional Slang' to her friend."},
    {pt:"'Repete comigo! Devagar!' ela disse, rindo.",en:"'Repeat after me! Slowly!' she said, laughing."},
    {pt:"Depois de praticar, ele disse: 'Agora entendi tudo!'",en:"After practicing, he said: 'Now I understand everything!'"}
  ],questions:[
    {q:"O que Bia está ensinando?",a:"Regional Slang",opts:["Matemática","Cozinhar"]},
    {q:"O amigo entendeu?",a:"Sim, depois de praticar",opts:["Não","Desistiu"]}
  ]},
  134: {story:[
    {pt:"Hoje vamos aprender sobre 'Feelings Physical' em português.",en:"Today we'll learn about 'Feelings Physical' in Portuguese."},
    {pt:"Cada palavra nova abre uma porta para o Brasil.",en:"Each new word opens a door to Brazil."},
    {pt:"Com prática, você vai usar essas palavras todo dia!",en:"With practice, you'll use these words every day!"}
  ],questions:[
    {q:"O que cada palavra nova faz?",a:"Abre uma porta para o Brasil",opts:["Fecha uma porta","Nada"]},
    {q:"Como aprender melhor?",a:"Com prática",opts:["Sem estudar","Dormindo"]}
  ]},
  135: {story:[
    {pt:"Bia está ensinando 'Love & Dating' para seu amigo.",en:"Bia is teaching 'Love & Dating' to her friend."},
    {pt:"'Repete comigo! Devagar!' ela disse, rindo.",en:"'Repeat after me! Slowly!' she said, laughing."},
    {pt:"Depois de praticar, ele disse: 'Agora entendi tudo!'",en:"After practicing, he said: 'Now I understand everything!'"}
  ],questions:[
    {q:"O que Bia está ensinando?",a:"Love & Dating",opts:["Matemática","Cozinhar"]},
    {q:"O amigo entendeu?",a:"Sim, depois de praticar",opts:["Não","Desistiu"]}
  ]},
  136: {story:[
    {pt:"Hoje vamos aprender sobre 'Party & Nightlife' em português.",en:"Today we'll learn about 'Party & Nightlife' in Portuguese."},
    {pt:"Cada palavra nova abre uma porta para o Brasil.",en:"Each new word opens a door to Brazil."},
    {pt:"Com prática, você vai usar essas palavras todo dia!",en:"With practice, you'll use these words every day!"}
  ],questions:[
    {q:"O que cada palavra nova faz?",a:"Abre uma porta para o Brasil",opts:["Fecha uma porta","Nada"]},
    {q:"Como aprender melhor?",a:"Com prática",opts:["Sem estudar","Dormindo"]}
  ]},
  137: {story:[
    {pt:"Bia está ensinando 'Brazilian History' para seu amigo.",en:"Bia is teaching 'Brazilian History' to her friend."},
    {pt:"'Repete comigo! Devagar!' ela disse, rindo.",en:"'Repeat after me! Slowly!' she said, laughing."},
    {pt:"Depois de praticar, ele disse: 'Agora entendi tudo!'",en:"After practicing, he said: 'Now I understand everything!'"}
  ],questions:[
    {q:"O que Bia está ensinando?",a:"Brazilian History",opts:["Matemática","Cozinhar"]},
    {q:"O amigo entendeu?",a:"Sim, depois de praticar",opts:["Não","Desistiu"]}
  ]},
  138: {story:[
    {pt:"Hoje vamos aprender sobre 'Music Extended' em português.",en:"Today we'll learn about 'Music Extended' in Portuguese."},
    {pt:"Cada palavra nova abre uma porta para o Brasil.",en:"Each new word opens a door to Brazil."},
    {pt:"Com prática, você vai usar essas palavras todo dia!",en:"With practice, you'll use these words every day!"}
  ],questions:[
    {q:"O que cada palavra nova faz?",a:"Abre uma porta para o Brasil",opts:["Fecha uma porta","Nada"]},
    {q:"Como aprender melhor?",a:"Com prática",opts:["Sem estudar","Dormindo"]}
  ]},
  139: {story:[
    {pt:"Bia está ensinando 'Weather Idioms' para seu amigo.",en:"Bia is teaching 'Weather Idioms' to her friend."},
    {pt:"'Repete comigo! Devagar!' ela disse, rindo.",en:"'Repeat after me! Slowly!' she said, laughing."},
    {pt:"Depois de praticar, ele disse: 'Agora entendi tudo!'",en:"After practicing, he said: 'Now I understand everything!'"}
  ],questions:[
    {q:"O que Bia está ensinando?",a:"Weather Idioms",opts:["Matemática","Cozinhar"]},
    {q:"O amigo entendeu?",a:"Sim, depois de praticar",opts:["Não","Desistiu"]}
  ]},
  140: {story:[
    {pt:"Hoje vamos aprender sobre 'Cooking Extended' em português.",en:"Today we'll learn about 'Cooking Extended' in Portuguese."},
    {pt:"Cada palavra nova abre uma porta para o Brasil.",en:"Each new word opens a door to Brazil."},
    {pt:"Com prática, você vai usar essas palavras todo dia!",en:"With practice, you'll use these words every day!"}
  ],questions:[
    {q:"O que cada palavra nova faz?",a:"Abre uma porta para o Brasil",opts:["Fecha uma porta","Nada"]},
    {q:"Como aprender melhor?",a:"Com prática",opts:["Sem estudar","Dormindo"]}
  ]},
  141: {story:[
    {pt:"Bia está ensinando 'Advanced Fillers' para seu amigo.",en:"Bia is teaching 'Advanced Fillers' to her friend."},
    {pt:"'Repete comigo! Devagar!' ela disse, rindo.",en:"'Repeat after me! Slowly!' she said, laughing."},
    {pt:"Depois de praticar, ele disse: 'Agora entendi tudo!'",en:"After practicing, he said: 'Now I understand everything!'"}
  ],questions:[
    {q:"O que Bia está ensinando?",a:"Advanced Fillers",opts:["Matemática","Cozinhar"]},
    {q:"O amigo entendeu?",a:"Sim, depois de praticar",opts:["Não","Desistiu"]}
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
    {pt:"Bia está ensinando 'Ultimate Review' para seu amigo.",en:"Bia is teaching 'Ultimate Review' to her friend."},
    {pt:"'Repete comigo! Devagar!' ela disse, rindo.",en:"'Repeat after me! Slowly!' she said, laughing."},
    {pt:"Depois de praticar, ele disse: 'Agora entendi tudo!'",en:"After practicing, he said: 'Now I understand everything!'"}
  ],questions:[
    {q:"O que Bia está ensinando?",a:"Ultimate Review",opts:["Matemática","Cozinhar"]},
    {q:"O amigo entendeu?",a:"Sim, depois de praticar",opts:["Não","Desistiu"]}
  ]},
  144: {story:[
    {pt:"Hoje vamos aprender sobre 'More Basics' em português.",en:"Today we'll learn about 'More Basics' in Portuguese."},
    {pt:"Cada palavra nova abre uma porta para o Brasil.",en:"Each new word opens a door to Brazil."},
    {pt:"Com prática, você vai usar essas palavras todo dia!",en:"With practice, you'll use these words every day!"}
  ],questions:[
    {q:"O que cada palavra nova faz?",a:"Abre uma porta para o Brasil",opts:["Fecha uma porta","Nada"]},
    {q:"Como aprender melhor?",a:"Com prática",opts:["Sem estudar","Dormindo"]}
  ]},
  145: {story:[
    {pt:"Bia está ensinando 'At the Pharmacy' para seu amigo.",en:"Bia is teaching 'At the Pharmacy' to her friend."},
    {pt:"'Repete comigo! Devagar!' ela disse, rindo.",en:"'Repeat after me! Slowly!' she said, laughing."},
    {pt:"Depois de praticar, ele disse: 'Agora entendi tudo!'",en:"After practicing, he said: 'Now I understand everything!'"}
  ],questions:[
    {q:"O que Bia está ensinando?",a:"At the Pharmacy",opts:["Matemática","Cozinhar"]},
    {q:"O amigo entendeu?",a:"Sim, depois de praticar",opts:["Não","Desistiu"]}
  ]},
  146: {story:[
    {pt:"Hoje vamos aprender sobre 'Around the House' em português.",en:"Today we'll learn about 'Around the House' in Portuguese."},
    {pt:"Cada palavra nova abre uma porta para o Brasil.",en:"Each new word opens a door to Brazil."},
    {pt:"Com prática, você vai usar essas palavras todo dia!",en:"With practice, you'll use these words every day!"}
  ],questions:[
    {q:"O que cada palavra nova faz?",a:"Abre uma porta para o Brasil",opts:["Fecha uma porta","Nada"]},
    {q:"Como aprender melhor?",a:"Com prática",opts:["Sem estudar","Dormindo"]}
  ]},
  147: {story:[
    {pt:"Bia está ensinando 'Communication' para seu amigo.",en:"Bia is teaching 'Communication' to her friend."},
    {pt:"'Repete comigo! Devagar!' ela disse, rindo.",en:"'Repeat after me! Slowly!' she said, laughing."},
    {pt:"Depois de praticar, ele disse: 'Agora entendi tudo!'",en:"After practicing, he said: 'Now I understand everything!'"}
  ],questions:[
    {q:"O que Bia está ensinando?",a:"Communication",opts:["Matemática","Cozinhar"]},
    {q:"O amigo entendeu?",a:"Sim, depois de praticar",opts:["Não","Desistiu"]}
  ]},
  148: {story:[
    {pt:"Hoje vamos aprender sobre 'More Slang' em português.",en:"Today we'll learn about 'More Slang' in Portuguese."},
    {pt:"Cada palavra nova abre uma porta para o Brasil.",en:"Each new word opens a door to Brazil."},
    {pt:"Com prática, você vai usar essas palavras todo dia!",en:"With practice, you'll use these words every day!"}
  ],questions:[
    {q:"O que cada palavra nova faz?",a:"Abre uma porta para o Brasil",opts:["Fecha uma porta","Nada"]},
    {q:"Como aprender melhor?",a:"Com prática",opts:["Sem estudar","Dormindo"]}
  ]},
  149: {story:[
    {pt:"Bia está ensinando 'Beach Life' para seu amigo.",en:"Bia is teaching 'Beach Life' to her friend."},
    {pt:"'Repete comigo! Devagar!' ela disse, rindo.",en:"'Repeat after me! Slowly!' she said, laughing."},
    {pt:"Depois de praticar, ele disse: 'Agora entendi tudo!'",en:"After practicing, he said: 'Now I understand everything!'"}
  ],questions:[
    {q:"O que Bia está ensinando?",a:"Beach Life",opts:["Matemática","Cozinhar"]},
    {q:"O amigo entendeu?",a:"Sim, depois de praticar",opts:["Não","Desistiu"]}
  ]},
  150: {story:[
    {pt:"Hoje vamos aprender sobre 'Airport Extended' em português.",en:"Today we'll learn about 'Airport Extended' in Portuguese."},
    {pt:"Cada palavra nova abre uma porta para o Brasil.",en:"Each new word opens a door to Brazil."},
    {pt:"Com prática, você vai usar essas palavras todo dia!",en:"With practice, you'll use these words every day!"}
  ],questions:[
    {q:"O que cada palavra nova faz?",a:"Abre uma porta para o Brasil",opts:["Fecha uma porta","Nada"]},
    {q:"Como aprender melhor?",a:"Com prática",opts:["Sem estudar","Dormindo"]}
  ]}
};
