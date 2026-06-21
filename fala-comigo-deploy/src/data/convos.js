// Mini conversations per unit index
// Each convo: title, lines array with {speaker, pt, en} for bia, {speaker, opts, correct} for user

export const CONVOS = {
  0: [
    {title:"Meeting someone new",lines:[
      {speaker:"bia",pt:"Oi! Tudo bem?",en:"Hi! How are you?"},
      {speaker:"user",opts:["Tudo bem!","Tchau!","Desculpa"],correct:0},
      {speaker:"bia",pt:"Que bom! Bom dia!",en:"Great! Good morning!"},
      {speaker:"user",opts:["Bom dia!","Boa noite!","Até logo!"],correct:0}
    ]},
    {title:"Saying goodbye",lines:[
      {speaker:"bia",pt:"Bom, preciso ir. Tchau!",en:"Well, I need to go. Bye!"},
      {speaker:"user",opts:["Até logo!","Bom dia!","Obrigado!"],correct:0},
      {speaker:"bia",pt:"Até amanhã!",en:"See you tomorrow!"},
      {speaker:"user",opts:["Até amanhã!","Boa tarde!","Tudo bem?"],correct:0}
    ]},
    {title:"Greeting a neighbor",lines:[
      {speaker:"bia",pt:"Bom dia, vizinho! Tudo bem?",en:"Good morning, neighbor! All good?"},
      {speaker:"user",opts:["Tudo ótimo! E com você?","Bom dia!","Oi!"],correct:0},
      {speaker:"bia",pt:"Tudo bem, graças a Deus! Bom dia!",en:"All good, thank God! Good morning!"},
      {speaker:"user",opts:["Tenha um bom dia! Até mais!","Obrigado!","Tchau!"],correct:0}
    ]},
    {title:"Teaching a friend",lines:[
      {speaker:"bia",pt:"Ensina essa palavra pro seu amigo!",en:"Teach this word to your friend!"},
      {speaker:"user",opts:["Olha, em português se diz assim!","Tá bom!","Difícil."],correct:0},
      {speaker:"bia",pt:"Ele aprendeu! Você é um bom professor!",en:"He learned! You're a good teacher!"},
      {speaker:"user",opts:["Ensinar é a melhor forma de aprender!","Verdade!","Obrigado!"],correct:0}
    ]}
  ],
  1: [
    {title:"Being polite",lines:[
      {speaker:"bia",pt:"Aqui está o seu café.",en:"Here is your coffee."},
      {speaker:"user",opts:["Obrigado!","Desculpa!","Tchau!"],correct:0},
      {speaker:"bia",pt:"De nada! Mais alguma coisa?",en:"You're welcome! Anything else?"},
      {speaker:"user",opts:["Não, obrigado.","Com licença.","Talvez."],correct:0}
    ]},
    {title:"Excuse me",lines:[
      {speaker:"bia",pt:"Está no caminho...",en:"You're in the way..."},
      {speaker:"user",opts:["Com licença!","Claro!","Não!"],correct:0},
      {speaker:"bia",pt:"Sem problema!",en:"No problem!"},
      {speaker:"user",opts:["Desculpa!","Sim!","Talvez!"],correct:0}
    ]},
    {title:"Thanking someone",lines:[
      {speaker:"bia",pt:"Muito obrigada pela ajuda!",en:"Thanks so much for the help!"},
      {speaker:"user",opts:["De nada! Foi um prazer!","Imagina!","Tá bom."],correct:0},
      {speaker:"bia",pt:"Você é muito gentil! Com licença!",en:"You're very kind! Excuse me!"},
      {speaker:"user",opts:["Que isso! Disponha! Boa tarde!","Valeu!","Até!"],correct:0}
    ]},
    {title:"Practice with Bia",lines:[
      {speaker:"bia",pt:"Vamos praticar mais uma vez?",en:"Let's practice one more time?"},
      {speaker:"user",opts:["Sim! Repetição é importante pra memorizar!","Bora!","De novo?"],correct:0},
      {speaker:"bia",pt:"Muito bem! Você está melhorando rápido!",en:"Very good! You're improving fast!"},
      {speaker:"user",opts:["Valeu, Bia! Cada dia um pouco melhor!","Obrigado!","Continuando!"],correct:0}
    ]}
  ],
  2: [
    {title:"Introducing yourself",lines:[
      {speaker:"bia",pt:"Oi! Meu nome é Bia. E você?",en:"Hi! My name is Bia. And you?"},
      {speaker:"user",opts:["Meu nome é...","Tudo bem?","Não entendo"],correct:0},
      {speaker:"bia",pt:"Prazer! De onde você é?",en:"Nice to meet you! Where are you from?"},
      {speaker:"user",opts:["Eu sou do Canadá.","Eu moro em casa.","Um pouco."],correct:0},
      {speaker:"bia",pt:"Que legal! Você fala português?",en:"How cool! Do you speak Portuguese?"},
      {speaker:"user",opts:["Um pouco!","Não entendo.","Pode repetir?"],correct:0}
    ]},
    {title:"What do you do?",lines:[
      {speaker:"bia",pt:"O que você faz? Trabalha ou estuda?",en:"What do you do? Work or study?"},
      {speaker:"user",opts:["Eu trabalho numa empresa. E você?","Estudo.","Nada."],correct:0},
      {speaker:"bia",pt:"Legal! Eu sou professora. Gosto muito!",en:"Cool! I'm a teacher. I like it a lot!"},
      {speaker:"user",opts:["Que bom! Meu nome é Ana, prazer!","Interessante!","Legal!"],correct:0}
    ]},
    {title:"Meeting at a party",lines:[
      {speaker:"bia",pt:"Oi! Eu sou a Maria! E você?",en:"Hi! I'm Maria! And you?"},
      {speaker:"user",opts:["Prazer, Maria! Eu sou o João!","Oi!","Tudo bem?"],correct:0},
      {speaker:"bia",pt:"Você é daqui? De onde você é?",en:"Are you from here? Where are you from?"},
      {speaker:"user",opts:["Sou do Canadá! Moro aqui faz dois anos!","Sou brasileiro.","Daqui."],correct:0}
    ]},
    {title:"Real life moment",lines:[
      {speaker:"bia",pt:"Imagina que você está no Brasil agora!",en:"Imagine you're in Brazil right now!"},
      {speaker:"user",opts:["Legal! O que eu falo primeiro?","Oi Brasil!","Estou pronto!"],correct:0},
      {speaker:"bia",pt:"Usa o que aprendeu! Confia em você!",en:"Use what you learned! Trust yourself!"},
      {speaker:"user",opts:["Vou falar com confiança! Português é lindo!","Bora!","Consegui!"],correct:0}
    ]}
  ],
  3: [
    {title:"At the market",lines:[
      {speaker:"bia",pt:"Quantos você quer?",en:"How many do you want?"},
      {speaker:"user",opts:["Três, por favor.","Bom dia!","Tchau!"],correct:0},
      {speaker:"bia",pt:"Três. Mais alguma coisa?",en:"Three. Anything else?"},
      {speaker:"user",opts:["Cinco desses também.","Não entendo.","Desculpa."],correct:0}
    ]},
    {title:"Buying fruit",lines:[
      {speaker:"bia",pt:"Bom dia! Quer comprar alguma coisa?",en:"Good morning! Want to buy something?"},
      {speaker:"user",opts:["Sim! Quanto custa a banana?","Não, obrigado.","Só olhando."],correct:0},
      {speaker:"bia",pt:"Duas reais o quilo! Muito barata!",en:"Two reais per kilo! Very cheap!"},
      {speaker:"user",opts:["Ótimo! Me vê dois quilos, por favor!","Caro.","Não quero."],correct:0}
    ]},
    {title:"Vegetable shopping",lines:[
      {speaker:"bia",pt:"Tem tomate maduro hoje?",en:"Do you have ripe tomatoes today?"},
      {speaker:"user",opts:["Quanto custa o quilo de cebola?","Tem sim!","Não quero."],correct:0},
      {speaker:"bia",pt:"Três reais! Leva alface também?",en:"Three reais! Take lettuce too?"},
      {speaker:"user",opts:["Leva tudo! Me vê um quilo de cada!","Só tomate.","Muito caro."],correct:0}
    ]},
    {title:"Vocabulary game",lines:[
      {speaker:"bia",pt:"Vamos jogar! Eu falo em português, você traduz!",en:"Let's play! I say it in Portuguese, you translate!"},
      {speaker:"user",opts:["Bora! Estou pronto! Manda!","Vamos!","Pode falar."],correct:0},
      {speaker:"bia",pt:"Acertou tudo! Você é craque!",en:"You got everything right! You're a star!"},
      {speaker:"user",opts:["Quero jogar de novo! É divertido aprender assim!","Mais uma!","Valeu!"],correct:0}
    ]}
  ],
  4: [
    {title:"Talking about family",lines:[
      {speaker:"bia",pt:"Você tem irmãos?",en:"Do you have siblings?"},
      {speaker:"user",opts:["Sim, tenho um irmão.","Meu nome é...","Não sei."],correct:0},
      {speaker:"bia",pt:"Legal! E seus pais moram perto?",en:"Cool! And do your parents live nearby?"},
      {speaker:"user",opts:["Sim, meu pai e minha mãe moram perto.","Tchau!","Obrigado!"],correct:0}
    ]},
    {title:"Family dinner",lines:[
      {speaker:"bia",pt:"Hoje tem jantar em família!",en:"Family dinner tonight!"},
      {speaker:"user",opts:["Que bom! Minha mãe faz o melhor bolo!","Legal!","Não posso ir."],correct:0},
      {speaker:"bia",pt:"Seu irmão vai trazer a namorada?",en:"Is your brother bringing his girlfriend?"},
      {speaker:"user",opts:["Vai sim! E minha avó também vai!","Talvez.","Não sei."],correct:0}
    ]},
    {title:"Talking about kids",lines:[
      {speaker:"bia",pt:"Quantos filhos você tem?",en:"How many kids do you have?"},
      {speaker:"user",opts:["Tenho dois! Um menino e uma menina!","Nenhum.","Três."],correct:0},
      {speaker:"bia",pt:"Que fofo! Quantos anos eles têm?",en:"How cute! How old are they?"},
      {speaker:"user",opts:["O menino tem oito e a menina tem cinco!","Pequenos!","Lindos!"],correct:0}
    ]},
    {title:"Confidence boost",lines:[
      {speaker:"bia",pt:"Sabe o que eu percebi? Seu português melhorou muito!",en:"Know what I noticed? Your Portuguese improved a lot!"},
      {speaker:"user",opts:["Sério? Às vezes acho que não evoluo!","Obrigado!","Acha mesmo?"],correct:0},
      {speaker:"bia",pt:"Claro que sim! Olha quantas palavras você sabe!",en:"Of course! Look how many words you know!"},
      {speaker:"user",opts:["Obrigado, Bia! Vou continuar firme!","Motivado!","Valeu!"],correct:0}
    ]}
  ],
  5: [
    {title:"Describing things",lines:[
      {speaker:"bia",pt:"Como é a sua casa?",en:"What's your house like?"},
      {speaker:"user",opts:["É grande e bonita.","Tudo bem?","Não sei."],correct:0},
      {speaker:"bia",pt:"Que bom! É nova ou velha?",en:"Nice! Is it new or old?"},
      {speaker:"user",opts:["É nova!","Muito!","Aqui!"],correct:0}
    ]},
    {title:"What's it like?",lines:[
      {speaker:"bia",pt:"Como é seu apartamento?",en:"What's your apartment like?"},
      {speaker:"user",opts:["É pequeno mas bonito! Tem vista linda!","Grande.","Normal."],correct:0},
      {speaker:"bia",pt:"Fico com inveja! O meu é escuro!",en:"I'm jealous! Mine is dark!"},
      {speaker:"user",opts:["Coitada! Mas o bairro é tranquilo?","Que pena.","Muda!"],correct:0}
    ]},
    {title:"Describing weather",lines:[
      {speaker:"bia",pt:"Como está o tempo aí?",en:"How's the weather there?"},
      {speaker:"user",opts:["Está ensolarado e quente! Perfeito!","Chovendo.","Frio."],correct:0},
      {speaker:"bia",pt:"Aqui está nublado e frio demais!",en:"Here it's cloudy and too cold!"},
      {speaker:"user",opts:["Vem pra cá! O sol está lindo!","Que pena!","Queria!"],correct:0}
    ]},
    {title:"Teaching a friend",lines:[
      {speaker:"bia",pt:"Ensina essa palavra pro seu amigo!",en:"Teach this word to your friend!"},
      {speaker:"user",opts:["Olha, em português se diz assim!","Tá bom!","Difícil."],correct:0},
      {speaker:"bia",pt:"Ele aprendeu! Você é um bom professor!",en:"He learned! You're a good teacher!"},
      {speaker:"user",opts:["Ensinar é a melhor forma de aprender!","Verdade!","Obrigado!"],correct:0}
    ]}
  ],
  6: [
    {title:"Shopping for clothes",lines:[
      {speaker:"bia",pt:"Qual cor você prefere?",en:"Which color do you prefer?"},
      {speaker:"user",opts:["Gosto de azul.","Bom dia!","Não entendo."],correct:0},
      {speaker:"bia",pt:"Azul é bonito! Temos azul e verde.",en:"Blue is pretty! We have blue and green."},
      {speaker:"user",opts:["Azul, por favor.","Vermelho!","Tchau!"],correct:0}
    ]},
    {title:"New shoes",lines:[
      {speaker:"bia",pt:"Preciso de sapatos novos! Vamos ao shopping?",en:"I need new shoes! Let's go to the mall?"},
      {speaker:"user",opts:["Bora! Eu também preciso de um vestido!","Não posso.","Agora?"],correct:0},
      {speaker:"bia",pt:"Esse tênis é bonito! Mas é caro!",en:"These sneakers are nice! But expensive!"},
      {speaker:"user",opts:["Experimenta o preto! É mais barato!","Caro mesmo.","Compra!"],correct:0}
    ]},
    {title:"Gift shopping",lines:[
      {speaker:"bia",pt:"Preciso comprar um presente!",en:"I need to buy a gift!"},
      {speaker:"user",opts:["Pra quem? O que a pessoa gosta?","Que tipo?","Quanto?"],correct:0},
      {speaker:"bia",pt:"É pra minha mãe. Ela gosta de joias!",en:"For my mom. She likes jewelry!"},
      {speaker:"user",opts:["Compra um colar bonito! Vai adorar!","Uma blusa?","Flores!"],correct:0}
    ]},
    {title:"Practice with Bia",lines:[
      {speaker:"bia",pt:"Vamos praticar mais uma vez?",en:"Let's practice one more time?"},
      {speaker:"user",opts:["Sim! Repetição é importante pra memorizar!","Bora!","De novo?"],correct:0},
      {speaker:"bia",pt:"Muito bem! Você está melhorando rápido!",en:"Very good! You're improving fast!"},
      {speaker:"user",opts:["Valeu, Bia! Cada dia um pouco melhor!","Obrigado!","Continuando!"],correct:0}
    ]}
  ],
  7: [
    {title:"Ordering food",lines:[
      {speaker:"bia",pt:"O que você quer beber?",en:"What do you want to drink?"},
      {speaker:"user",opts:["Um café, por favor.","A conta!","Garfo!"],correct:0},
      {speaker:"bia",pt:"E para comer?",en:"And to eat?"},
      {speaker:"user",opts:["Pão com carne, por favor.","Água!","Sem!"],correct:0},
      {speaker:"bia",pt:"Boa escolha! Mais alguma coisa?",en:"Good choice! Anything else?"},
      {speaker:"user",opts:["Não, obrigado.","Cerveja!","Sim, leite."],correct:0}
    ]},
    {title:"Coffee shop",lines:[
      {speaker:"bia",pt:"Vamos tomar um café?",en:"Let's get coffee?"},
      {speaker:"user",opts:["Vamos! Quero café com leite e pão de queijo!","Não bebo café.","Agora?"],correct:0},
      {speaker:"bia",pt:"Eu quero suco de laranja e bolo de cenoura!",en:"I want OJ and carrot cake!"},
      {speaker:"user",opts:["Delícia! A conta é minha!","Boa!","Divide?"],correct:0}
    ]},
    {title:"Breakfast order",lines:[
      {speaker:"bia",pt:"O que tem pro café da manhã?",en:"What's for breakfast?"},
      {speaker:"user",opts:["Tem pão na chapa, tapioca e açaí!","Café!","Nada."],correct:0},
      {speaker:"bia",pt:"Quero tapioca com queijo e café preto!",en:"I want tapioca with cheese and black coffee!"},
      {speaker:"user",opts:["Boa escolha! E um suco de maracujá?","Perfeito!","Também!"],correct:0}
    ]},
    {title:"Real life moment",lines:[
      {speaker:"bia",pt:"Imagina que você está no Brasil agora!",en:"Imagine you're in Brazil right now!"},
      {speaker:"user",opts:["Legal! O que eu falo primeiro?","Oi Brasil!","Estou pronto!"],correct:0},
      {speaker:"bia",pt:"Usa o que aprendeu! Confia em você!",en:"Use what you learned! Trust yourself!"},
      {speaker:"user",opts:["Vou falar com confiança! Português é lindo!","Bora!","Consegui!"],correct:0}
    ]}
  ],
  8: [
    {title:"At the restaurant",lines:[
      {speaker:"bia",pt:"Bem-vindo! Aqui está o cardápio.",en:"Welcome! Here's the menu."},
      {speaker:"user",opts:["Obrigado!","Tchau!","Desculpa!"],correct:0},
      {speaker:"bia",pt:"Já escolheu?",en:"Have you chosen?"},
      {speaker:"user",opts:["Sim! Um prato de arroz e feijão.","Não entendo.","A conta!"],correct:0},
      {speaker:"bia",pt:"Estava gostoso?",en:"Was it delicious?"},
      {speaker:"user",opts:["Sim, muito gostoso!","Sem!","Copo!"],correct:0},
      {speaker:"bia",pt:"Que bom!",en:"How nice!"},
      {speaker:"user",opts:["A conta, por favor.","Garçom!","Colher!"],correct:0}
    ]},
    {title:"Splitting the bill",lines:[
      {speaker:"bia",pt:"Garçom! A conta, por favor!",en:"Waiter! The check, please!"},
      {speaker:"user",opts:["Vamos dividir? Quanto ficou?","Eu pago.","Caro?"],correct:0},
      {speaker:"bia",pt:"Oitenta reais no total. Quarenta cada!",en:"Eighty reais total. Forty each!"},
      {speaker:"user",opts:["Tá ótimo! Aceita cartão?","Barato!","Eu pago tudo."],correct:0}
    ]},
    {title:"Complaining about food",lines:[
      {speaker:"bia",pt:"Garçom, esse prato está frio!",en:"Waiter, this dish is cold!"},
      {speaker:"user",opts:["Desculpa! Vou trocar agora mesmo!","Que absurdo!","Tá bom."],correct:0},
      {speaker:"bia",pt:"E o suco está sem gelo!",en:"And the juice has no ice!"},
      {speaker:"user",opts:["Mil desculpas! Trago outro imediatamente!","Obrigado!","Sem problema."],correct:0}
    ]},
    {title:"Vocabulary game",lines:[
      {speaker:"bia",pt:"Vamos jogar! Eu falo em português, você traduz!",en:"Let's play! I say it in Portuguese, you translate!"},
      {speaker:"user",opts:["Bora! Estou pronto! Manda!","Vamos!","Pode falar."],correct:0},
      {speaker:"bia",pt:"Acertou tudo! Você é craque!",en:"You got everything right! You're a star!"},
      {speaker:"user",opts:["Quero jogar de novo! É divertido aprender assim!","Mais uma!","Valeu!"],correct:0}
    ]}
  ],
  9: [
    {title:"Asking for directions",lines:[
      {speaker:"bia",pt:"Com licença, precisa de ajuda?",en:"Excuse me, do you need help?"},
      {speaker:"user",opts:["Sim! Onde é o banheiro?","Tchau!","Não sei."],correct:0},
      {speaker:"bia",pt:"É ali, à direita.",en:"It's there, on the right."},
      {speaker:"user",opts:["Obrigado!","Esquerda?","Longe?"],correct:0}
    ]},
    {title:"Taking a taxi",lines:[
      {speaker:"bia",pt:"Para onde?",en:"Where to?"},
      {speaker:"user",opts:["Para o aeroporto, por favor.","Bom dia!","Tchau!"],correct:0},
      {speaker:"bia",pt:"É perto ou longe?",en:"Is it near or far?"},
      {speaker:"user",opts:["É longe.","Direita!","Rua!"],correct:0}
    ]},
    {title:"Finding a pharmacy",lines:[
      {speaker:"bia",pt:"Com licença, tem farmácia por aqui?",en:"Excuse me, is there a pharmacy nearby?"},
      {speaker:"user",opts:["Tem uma na próxima rua, à direita!","Não sei.","Ali!"],correct:0},
      {speaker:"bia",pt:"É longe? Posso ir a pé?",en:"Is it far? Can I walk?"},
      {speaker:"user",opts:["Cinco minutos andando! É fácil de achar!","Obrigado!","Valeu!"],correct:0}
    ]},
    {title:"Confidence boost",lines:[
      {speaker:"bia",pt:"Sabe o que eu percebi? Seu português melhorou muito!",en:"Know what I noticed? Your Portuguese improved a lot!"},
      {speaker:"user",opts:["Sério? Às vezes acho que não evoluo!","Obrigado!","Acha mesmo?"],correct:0},
      {speaker:"bia",pt:"Claro que sim! Olha quantas palavras você sabe!",en:"Of course! Look how many words you know!"},
      {speaker:"user",opts:["Obrigado, Bia! Vou continuar firme!","Motivado!","Valeu!"],correct:0}
    ]}
  ],
  10: [
    {title:"Making plans",lines:[
      {speaker:"bia",pt:"Quer sair hoje?",en:"Want to go out today?"},
      {speaker:"user",opts:["Sim! Agora?","Ontem!","Não sei."],correct:0},
      {speaker:"bia",pt:"Não, amanhã de manhã.",en:"No, tomorrow morning."},
      {speaker:"user",opts:["Tá bom! De manhã!","Boa noite!","Semana!"],correct:0}
    ]},
    {title:"Weekend plans",lines:[
      {speaker:"bia",pt:"O que vai fazer no fim de semana?",en:"What are you doing this weekend?"},
      {speaker:"user",opts:["Vou à praia! Quer ir comigo?","Nada.","Trabalhar."],correct:0},
      {speaker:"bia",pt:"Adoraria! Que horas a gente se encontra?",en:"I'd love to! What time?"},
      {speaker:"user",opts:["Às nove da manhã na estação!","De manhã.","Meio-dia."],correct:0}
    ]},
    {title:"Canceling plans",lines:[
      {speaker:"bia",pt:"Desculpa, não vou poder ir hoje!",en:"Sorry, I can't make it today!"},
      {speaker:"user",opts:["Que pena! Aconteceu alguma coisa?","Tudo bem.","Ah não!"],correct:0},
      {speaker:"bia",pt:"Estou doente. Vamos remarcar?",en:"I'm sick. Can we reschedule?"},
      {speaker:"user",opts:["Claro! Melhoras! A gente marca outro dia!","Se cuida!","Ok!"],correct:0}
    ]},
    {title:"Teaching a friend",lines:[
      {speaker:"bia",pt:"Ensina essa palavra pro seu amigo!",en:"Teach this word to your friend!"},
      {speaker:"user",opts:["Olha, em português se diz assim!","Tá bom!","Difícil."],correct:0},
      {speaker:"bia",pt:"Ele aprendeu! Você é um bom professor!",en:"He learned! You're a good teacher!"},
      {speaker:"user",opts:["Ensinar é a melhor forma de aprender!","Verdade!","Obrigado!"],correct:0}
    ]}
  ],
  11: [
    {title:"Talking about weather",lines:[
      {speaker:"bia",pt:"Está muito calor hoje!",en:"It's very hot today!"},
      {speaker:"user",opts:["Sim, muito calor! Vamos à praia?","Está frio!","Chuva!"],correct:0},
      {speaker:"bia",pt:"Boa ideia! O mar está lindo.",en:"Good idea! The sea is beautiful."},
      {speaker:"user",opts:["O céu está bonito também!","Vento!","Nuvem!"],correct:0}
    ]},
    {title:"Rainy day",lines:[
      {speaker:"bia",pt:"Está chovendo muito! Não quero sair!",en:"It's raining a lot! I don't want to go out!"},
      {speaker:"user",opts:["Eu também não! Vamos ver filme?","Vamos sair.","É só chuva."],correct:0},
      {speaker:"bia",pt:"Boa ideia! Faz um chocolate quente!",en:"Good idea! Make hot chocolate!"},
      {speaker:"user",opts:["Perfeito pra um dia frio!","Vamos!","Delícia!"],correct:0}
    ]},
    {title:"Beautiful day",lines:[
      {speaker:"bia",pt:"Que dia lindo! Sol e céu azul!",en:"What a beautiful day! Sun and blue sky!"},
      {speaker:"user",opts:["Vamos ao parque? Está perfeito!","Linda mesmo!","Tá quente."],correct:0},
      {speaker:"bia",pt:"Bora! Leva protetor solar!",en:"Let's go! Bring sunscreen!"},
      {speaker:"user",opts:["E um chapéu! Não quero queimar!","Boa!","Vamos!"],correct:0}
    ]},
    {title:"Practice with Bia",lines:[
      {speaker:"bia",pt:"Vamos praticar mais uma vez?",en:"Let's practice one more time?"},
      {speaker:"user",opts:["Sim! Repetição é importante pra memorizar!","Bora!","De novo?"],correct:0},
      {speaker:"bia",pt:"Muito bem! Você está melhorando rápido!",en:"Very good! You're improving fast!"},
      {speaker:"user",opts:["Valeu, Bia! Cada dia um pouco melhor!","Obrigado!","Continuando!"],correct:0}
    ]}
  ],
  12: [
    {title:"At the doctor",lines:[
      {speaker:"bia",pt:"O que você está sentindo?",en:"What are you feeling?"},
      {speaker:"user",opts:["Estou com dor de cabeça.","Tudo bem!","Obrigado!"],correct:0},
      {speaker:"bia",pt:"Faz tempo? Está doente?",en:"For a long time? Are you sick?"},
      {speaker:"user",opts:["Sim, preciso de remédio.","Não entendo.","Tchau!"],correct:0},
      {speaker:"bia",pt:"Vou passar um remédio. Melhoras!",en:"I'll prescribe medicine. Get well!"},
      {speaker:"user",opts:["Obrigado, doutor!","Ajuda!","Desculpa!"],correct:0}
    ]},
    {title:"Feeling sick",lines:[
      {speaker:"bia",pt:"Você está bem? Tá pálido!",en:"Are you okay? You're pale!"},
      {speaker:"user",opts:["Estou com dor de barriga e náusea.","Tô bem.","Um pouco."],correct:0},
      {speaker:"bia",pt:"Toma um chá! Se não melhorar, vai ao hospital!",en:"Drink tea! If not better, go to hospital!"},
      {speaker:"user",opts:["Obrigado! Acho que comi algo estragado.","Tá bom.","Não precisa."],correct:0}
    ]},
    {title:"Allergies",lines:[
      {speaker:"bia",pt:"Estou espirrando muito! Alergia!",en:"I'm sneezing a lot! Allergies!"},
      {speaker:"user",opts:["Toma um antialérgico!","Coitado!","Saúde!"],correct:0},
      {speaker:"bia",pt:"Também estou com os olhos vermelhos!",en:"My eyes are red too!"},
      {speaker:"user",opts:["Vai no médico! Pode ser sinusite!","Melhoras!","Se cuida!"],correct:0}
    ]},
    {title:"Real life moment",lines:[
      {speaker:"bia",pt:"Imagina que você está no Brasil agora!",en:"Imagine you're in Brazil right now!"},
      {speaker:"user",opts:["Legal! O que eu falo primeiro?","Oi Brasil!","Estou pronto!"],correct:0},
      {speaker:"bia",pt:"Usa o que aprendeu! Confia em você!",en:"Use what you learned! Trust yourself!"},
      {speaker:"user",opts:["Vou falar com confiança! Português é lindo!","Bora!","Consegui!"],correct:0}
    ]}
  ],
  13: [
    {title:"More numbers",lines:[
      {speaker:"bia",pt:"Quantos anos você tem?",en:"How old are you?"},
      {speaker:"user",opts:["Tenho trinta anos.","Vinte.","Não sei."],correct:0},
      {speaker:"bia",pt:"Que legal! E qual é o seu número de telefone?",en:"Cool! And what's your phone number?"},
      {speaker:"user",opts:["É cinco-cinco, nove-oito-sete-seis.","Não tenho.","Esqueci."],correct:0}
    ]},
    {title:"Phone number",lines:[
      {speaker:"bia",pt:"Me passa seu telefone?",en:"Give me your number?"},
      {speaker:"user",opts:["É nove-nove, oito-sete-seis, cinco-quatro.","Não posso.","Pra quê?"],correct:0},
      {speaker:"bia",pt:"Anotei! Vou te mandar mensagem!",en:"Got it! I'll text you!"},
      {speaker:"user",opts:["Legal! Meu WhatsApp é o mesmo!","Ok!","Beleza!"],correct:0}
    ]},
    {title:"Counting money",lines:[
      {speaker:"bia",pt:"Tenho cinquenta reais. Dá pra comprar?",en:"I have fifty reais. Can I buy it?"},
      {speaker:"user",opts:["O total é quarenta e cinco!","Não dá.","Acho que sim."],correct:0},
      {speaker:"bia",pt:"Ótimo! Tenho cinco de troco!",en:"Great! I have five in change!"},
      {speaker:"user",opts:["Aqui o troco! Boa compra!","Obrigado!","Valeu!"],correct:0}
    ]},
    {title:"Vocabulary game",lines:[
      {speaker:"bia",pt:"Vamos jogar! Eu falo em português, você traduz!",en:"Let's play! I say it in Portuguese, you translate!"},
      {speaker:"user",opts:["Bora! Estou pronto! Manda!","Vamos!","Pode falar."],correct:0},
      {speaker:"bia",pt:"Acertou tudo! Você é craque!",en:"You got everything right! You're a star!"},
      {speaker:"user",opts:["Quero jogar de novo! É divertido aprender assim!","Mais uma!","Valeu!"],correct:0}
    ]}
  ],
  14: [
    {title:"Talking about what you can do",lines:[
      {speaker:"bia",pt:"Você sabe cozinhar?",en:"Do you know how to cook?"},
      {speaker:"user",opts:["Sim, eu sei! Gosto de fazer arroz.","Não quero.","Posso ir?"],correct:0},
      {speaker:"bia",pt:"Legal! Eu preciso aprender.",en:"Cool! I need to learn."},
      {speaker:"user",opts:["Posso te ensinar!","Vou fazer.","Quero falar."],correct:0}
    ]},
    {title:"Skills",lines:[
      {speaker:"bia",pt:"Você sabe cozinhar?",en:"Can you cook?"},
      {speaker:"user",opts:["Sei sim! Posso fazer arroz e feijão!","Não sei.","Um pouco."],correct:0},
      {speaker:"bia",pt:"E nadar? Quero ir à piscina!",en:"And swim? I want to go to the pool!"},
      {speaker:"user",opts:["Sei nadar! Mas não posso ir hoje.","Não sei nadar.","Bora!"],correct:0}
    ]},
    {title:"At the gym",lines:[
      {speaker:"bia",pt:"Você sabe nadar? A piscina é ótima!",en:"Can you swim? The pool is great!"},
      {speaker:"user",opts:["Sei! Mas prefiro correr na esteira!","Não sei.","Vamos!"],correct:0},
      {speaker:"bia",pt:"Eu consigo levantar trinta quilos!",en:"I can lift thirty kilos!"},
      {speaker:"user",opts:["Forte! Eu mal consigo carregar a mochila!","Impressionante!","Ensina!"],correct:0}
    ]},
    {title:"Confidence boost",lines:[
      {speaker:"bia",pt:"Sabe o que eu percebi? Seu português melhorou muito!",en:"Know what I noticed? Your Portuguese improved a lot!"},
      {speaker:"user",opts:["Sério? Às vezes acho que não evoluo!","Obrigado!","Acha mesmo?"],correct:0},
      {speaker:"bia",pt:"Claro que sim! Olha quantas palavras você sabe!",en:"Of course! Look how many words you know!"},
      {speaker:"user",opts:["Obrigado, Bia! Vou continuar firme!","Motivado!","Valeu!"],correct:0}
    ]}
  ],
  15: [
    {title:"How are you feeling?",lines:[
      {speaker:"bia",pt:"Oi! Tudo bem? Você parece cansado.",en:"Hi! All good? You look tired."},
      {speaker:"user",opts:["Estou com fome e cansado.","Feliz!","Não sei."],correct:0},
      {speaker:"bia",pt:"Vamos comer! Está com sede também?",en:"Let's eat! Are you thirsty too?"},
      {speaker:"user",opts:["Sim, estou com sede!","Com medo!","Animado!"],correct:0}
    ]},
    {title:"Tired!",lines:[
      {speaker:"bia",pt:"Estou exausta! Que dia longo!",en:"I'm exhausted! What a long day!"},
      {speaker:"user",opts:["Eu também! Estou com muito sono!","Descansa!","Por quê?"],correct:0},
      {speaker:"bia",pt:"Vou tomar banho quente e dormir cedo!",en:"I'll shower and sleep early!"},
      {speaker:"user",opts:["Boa ideia! Tô com preguiça de cozinhar.","Boa noite!","Eu também."],correct:0}
    ]},
    {title:"Emotions check",lines:[
      {speaker:"bia",pt:"Você tá feliz ou triste hoje?",en:"Are you happy or sad today?"},
      {speaker:"user",opts:["Tô animado! Mas um pouco nervoso!","Feliz!","Triste."],correct:0},
      {speaker:"bia",pt:"Por que nervoso? Relaxa!",en:"Why nervous? Relax!"},
      {speaker:"user",opts:["Tenho uma prova amanhã! Tô preocupado!","Vai dar certo!","Calma!"],correct:0}
    ]},
    {title:"Teaching a friend",lines:[
      {speaker:"bia",pt:"Ensina essa palavra pro seu amigo!",en:"Teach this word to your friend!"},
      {speaker:"user",opts:["Olha, em português se diz assim!","Tá bom!","Difícil."],correct:0},
      {speaker:"bia",pt:"Ele aprendeu! Você é um bom professor!",en:"He learned! You're a good teacher!"},
      {speaker:"user",opts:["Ensinar é a melhor forma de aprender!","Verdade!","Obrigado!"],correct:0}
    ]}
  ],
  16: [
    {title:"Shopping",lines:[
      {speaker:"bia",pt:"Posso te ajudar?",en:"Can I help you?"},
      {speaker:"user",opts:["Sim! Quanto custa isso?","Tchau!","Não sei."],correct:0},
      {speaker:"bia",pt:"Custa cinquenta reais.",en:"It costs fifty reais."},
      {speaker:"user",opts:["É muito caro! Tem desconto?","Barato!","Dinheiro!"],correct:0},
      {speaker:"bia",pt:"Posso fazer por quarenta.",en:"I can do forty."},
      {speaker:"user",opts:["Tá bom! Aceita cartão?","Troco!","Comprar!"],correct:0}
    ]},
    {title:"At the store",lines:[
      {speaker:"bia",pt:"Tem esse em azul?",en:"Do you have this in blue?"},
      {speaker:"user",opts:["Tem sim! Quer experimentar?","Só vermelho.","Não."],correct:0},
      {speaker:"bia",pt:"Ficou perfeito! Quanto custa?",en:"It fits! How much?"},
      {speaker:"user",opts:["Cento e vinte reais. Aceita Pix!","Caro.","Promoção!"],correct:0}
    ]},
    {title:"Returns",lines:[
      {speaker:"bia",pt:"Quero trocar essa camisa. Ficou grande!",en:"I want to exchange this shirt. It's too big!"},
      {speaker:"user",opts:["Tem o recibo? Posso trocar por outra!","Que pena.","Sem troca."],correct:0},
      {speaker:"bia",pt:"Sim! Quero uma menor, na mesma cor!",en:"Yes! I want a smaller one, same color!"},
      {speaker:"user",opts:["Pronto! Essa ficou perfeita!","Obrigado!","Melhor!"],correct:0}
    ]},
    {title:"Practice with Bia",lines:[
      {speaker:"bia",pt:"Vamos praticar mais uma vez?",en:"Let's practice one more time?"},
      {speaker:"user",opts:["Sim! Repetição é importante pra memorizar!","Bora!","De novo?"],correct:0},
      {speaker:"bia",pt:"Muito bem! Você está melhorando rápido!",en:"Very good! You're improving fast!"},
      {speaker:"user",opts:["Valeu, Bia! Cada dia um pouco melhor!","Obrigado!","Continuando!"],correct:0}
    ]}
  ],
  17: [
    {title:"My house",lines:[
      {speaker:"bia",pt:"Sua casa é grande?",en:"Is your house big?"},
      {speaker:"user",opts:["Não, é pequena mas tem dois quartos.","Sim!","Não sei."],correct:0},
      {speaker:"bia",pt:"Tem cozinha separada? Gosto de cozinhar!",en:"Does it have a separate kitchen? I love cooking!"},
      {speaker:"user",opts:["Sim! A cozinha tem uma mesa e quatro cadeiras.","Não.","É bonita."],correct:0}
    ]},
    {title:"Moving in",lines:[
      {speaker:"bia",pt:"Meu apartamento novo é no quinto andar!",en:"My new apartment is on the 5th floor!"},
      {speaker:"user",opts:["Legal! Tem elevador?","Parabéns!","Alto!"],correct:0},
      {speaker:"bia",pt:"Tem! E a sala é enorme!",en:"There is! And the living room is huge!"},
      {speaker:"user",opts:["Que bom! E o banheiro tem banheira?","Show!","Quero ver!"],correct:0}
    ]},
    {title:"Describing rooms",lines:[
      {speaker:"bia",pt:"Quantos quartos tem sua casa?",en:"How many bedrooms does your house have?"},
      {speaker:"user",opts:["Três quartos e dois banheiros!","Dois.","Um."],correct:0},
      {speaker:"bia",pt:"E a cozinha? É grande?",en:"And the kitchen? Is it big?"},
      {speaker:"user",opts:["É enorme! Tem fogão novo e geladeira grande!","Legal!","Quero ver!"],correct:0}
    ]},
    {title:"Real life moment",lines:[
      {speaker:"bia",pt:"Imagina que você está no Brasil agora!",en:"Imagine you're in Brazil right now!"},
      {speaker:"user",opts:["Legal! O que eu falo primeiro?","Oi Brasil!","Estou pronto!"],correct:0},
      {speaker:"bia",pt:"Usa o que aprendeu! Confia em você!",en:"Use what you learned! Trust yourself!"},
      {speaker:"user",opts:["Vou falar com confiança! Português é lindo!","Bora!","Consegui!"],correct:0}
    ]}
  ],
  18: [
    {title:"Getting dressed",lines:[
      {speaker:"bia",pt:"O que você vai vestir hoje?",en:"What are you going to wear today?"},
      {speaker:"user",opts:["Vou usar calça jeans e camisa.","Roupa.","Não sei."],correct:0},
      {speaker:"bia",pt:"Tá frio! Leva um casaco e um chapéu!",en:"It's cold! Take a jacket and a hat!"},
      {speaker:"user",opts:["Boa ideia! E vou calçar meus tênis.","Ok!","Não precisa."],correct:0}
    ]},
    {title:"What to wear",lines:[
      {speaker:"bia",pt:"Não sei o que vestir pro casamento!",en:"I don't know what to wear to the wedding!"},
      {speaker:"user",opts:["Usa aquele vestido vermelho! É lindo!","Compra roupa nova.","Qualquer coisa."],correct:0},
      {speaker:"bia",pt:"Preciso de sapato combinando!",en:"I need matching shoes!"},
      {speaker:"user",opts:["O salto preto combina com tudo!","Vai de tênis!","Compra!"],correct:0}
    ]},
    {title:"Laundry day",lines:[
      {speaker:"bia",pt:"Preciso lavar roupa! Tá tudo sujo!",en:"I need to do laundry! Everything's dirty!"},
      {speaker:"user",opts:["Separa as brancas das coloridas!","Eu ajudo!","Que preguiça."],correct:0},
      {speaker:"bia",pt:"E passa as camisas! Estão amassadas!",en:"And iron the shirts! They're wrinkled!"},
      {speaker:"user",opts:["Pronto! Pendurei tudo no varal!","Rápido!","Boa!"],correct:0}
    ]},
    {title:"Vocabulary game",lines:[
      {speaker:"bia",pt:"Vamos jogar! Eu falo em português, você traduz!",en:"Let's play! I say it in Portuguese, you translate!"},
      {speaker:"user",opts:["Bora! Estou pronto! Manda!","Vamos!","Pode falar."],correct:0},
      {speaker:"bia",pt:"Acertou tudo! Você é craque!",en:"You got everything right! You're a star!"},
      {speaker:"user",opts:["Quero jogar de novo! É divertido aprender assim!","Mais uma!","Valeu!"],correct:0}
    ]}
  ],
  19: [
    {title:"Taking the bus",lines:[
      {speaker:"bia",pt:"Esse ônibus vai para o centro?",en:"Does this bus go downtown?"},
      {speaker:"user",opts:["Não sei. Vou de metrô.","Carro!","Avião!"],correct:0},
      {speaker:"bia",pt:"O metrô é mais rápido. Onde é a estação?",en:"The subway is faster. Where's the station?"},
      {speaker:"user",opts:["É perto, à esquerda.","Trânsito!","Passagem!"],correct:0}
    ]},
    {title:"Taxi ride",lines:[
      {speaker:"bia",pt:"Vamos de Uber ou de ônibus?",en:"Uber or bus?"},
      {speaker:"user",opts:["Uber! É mais rápido!","Ônibus.","A pé!"],correct:0},
      {speaker:"bia",pt:"O motorista chegou! Vamos?",en:"The driver arrived! Let's go?"},
      {speaker:"user",opts:["Bora! Peço pra ir pela avenida!","Vamos!","Rápido!"],correct:0}
    ]},
    {title:"Late for work",lines:[
      {speaker:"bia",pt:"Estou atrasado! Que horas sai o próximo ônibus?",en:"I'm late! When does the next bus leave?"},
      {speaker:"user",opts:["Daqui a dez minutos! Corre!","Não sei.","Perdeu."],correct:0},
      {speaker:"bia",pt:"Vou pegar um táxi! É mais rápido!",en:"I'll take a taxi! It's faster!"},
      {speaker:"user",opts:["Boa ideia! O metrô também é rápido!","Valeu!","Bora!"],correct:0}
    ]},
    {title:"Confidence boost",lines:[
      {speaker:"bia",pt:"Sabe o que eu percebi? Seu português melhorou muito!",en:"Know what I noticed? Your Portuguese improved a lot!"},
      {speaker:"user",opts:["Sério? Às vezes acho que não evoluo!","Obrigado!","Acha mesmo?"],correct:0},
      {speaker:"bia",pt:"Claro que sim! Olha quantas palavras você sabe!",en:"Of course! Look how many words you know!"},
      {speaker:"user",opts:["Obrigado, Bia! Vou continuar firme!","Motivado!","Valeu!"],correct:0}
    ]}
  ],
  20: [
    {title:"Daily routine",lines:[
      {speaker:"bia",pt:"A que horas você acorda?",en:"What time do you wake up?"},
      {speaker:"user",opts:["Acordo às sete, tomo café e saio.","Cedo.","Tarde."],correct:0},
      {speaker:"bia",pt:"E à noite? O que você faz?",en:"And at night? What do you do?"},
      {speaker:"user",opts:["Janto, assisto TV e durmo às onze.","Nada.","Estudo."],correct:0}
    ]},
    {title:"Morning routine",lines:[
      {speaker:"bia",pt:"Você toma café da manhã?",en:"Do you eat breakfast?"},
      {speaker:"user",opts:["Sempre! Café, pão e fruta todo dia!","Às vezes.","Não como."],correct:0},
      {speaker:"bia",pt:"Eu pulo o café! Só tomo suco.",en:"I skip breakfast! Just juice."},
      {speaker:"user",opts:["Não faz isso! É importante!","Entendo.","Eu também."],correct:0}
    ]},
    {title:"Evening routine",lines:[
      {speaker:"bia",pt:"O que você faz antes de dormir?",en:"What do you do before bed?"},
      {speaker:"user",opts:["Escovo os dentes e leio um livro!","Durmo.","Nada."],correct:0},
      {speaker:"bia",pt:"Eu gosto de tomar chá e ouvir música calma.",en:"I like having tea and listening to calm music."},
      {speaker:"user",opts:["Que relaxante! Boa noite e bons sonhos!","Boa noite!","Até amanhã!"],correct:0}
    ]},
    {title:"Teaching a friend",lines:[
      {speaker:"bia",pt:"Ensina essa palavra pro seu amigo!",en:"Teach this word to your friend!"},
      {speaker:"user",opts:["Olha, em português se diz assim!","Tá bom!","Difícil."],correct:0},
      {speaker:"bia",pt:"Ele aprendeu! Você é um bom professor!",en:"He learned! You're a good teacher!"},
      {speaker:"user",opts:["Ensinar é a melhor forma de aprender!","Verdade!","Obrigado!"],correct:0}
    ]}
  ],
  21: [
    {title:"Talking about your weekend",lines:[
      {speaker:"bia",pt:"O que você fez no fim de semana?",en:"What did you do on the weekend?"},
      {speaker:"user",opts:["Fui à praia e comi muito!","Fiz frio.","Vi nada."],correct:0},
      {speaker:"bia",pt:"Que legal! Eu fiz um churrasco.",en:"How cool! I had a barbecue."},
      {speaker:"user",opts:["Gostoso! Eu também comi carne.","Disse sim.","Bebi não."],correct:0}
    ]},
    {title:"Museum visit",lines:[
      {speaker:"bia",pt:"Vamos ao museu hoje?",en:"Let's go to the museum today?"},
      {speaker:"user",opts:["Vamos! Quero ver a exposição de arte!","Não gosto.","Qual museu?"],correct:0},
      {speaker:"bia",pt:"A entrada é gratuita no domingo!",en:"Free entry on Sunday!"},
      {speaker:"user",opts:["Que bom! Depois vamos ao parque!","Oba!","Perfeito!"],correct:0}
    ]},
    {title:"Photo time",lines:[
      {speaker:"bia",pt:"Tira uma foto minha aqui na frente!",en:"Take a photo of me here in front!"},
      {speaker:"user",opts:["Claro! Sorri! Um, dois, três!","Agora?","Tá bom."],correct:0},
      {speaker:"bia",pt:"Ficou linda! Manda pra mim!",en:"It came out great! Send it to me!"},
      {speaker:"user",opts:["Mandei! Posta no Instagram!","Valeu!","Linda mesmo!"],correct:0}
    ]},
    {title:"Practice with Bia",lines:[
      {speaker:"bia",pt:"Vamos praticar mais uma vez?",en:"Let's practice one more time?"},
      {speaker:"user",opts:["Sim! Repetição é importante pra memorizar!","Bora!","De novo?"],correct:0},
      {speaker:"bia",pt:"Muito bem! Você está melhorando rápido!",en:"Very good! You're improving fast!"},
      {speaker:"user",opts:["Valeu, Bia! Cada dia um pouco melhor!","Obrigado!","Continuando!"],correct:0}
    ]}
  ],
  22: [
    {title:"Weekend hobbies",lines:[
      {speaker:"bia",pt:"O que você gosta de fazer?",en:"What do you like to do?"},
      {speaker:"user",opts:["Gosto de ler e cozinhar.","Jogar!","Nadar!"],correct:0},
      {speaker:"bia",pt:"Eu adoro dançar! Quer ir dançar?",en:"I love to dance! Want to go dancing?"},
      {speaker:"user",opts:["Sim! Adoro dançar e cantar!","Viajar!","Assistir!"],correct:0}
    ]},
    {title:"Party time",lines:[
      {speaker:"bia",pt:"Vai ter festa no Ano Novo!",en:"There's a New Year's party!"},
      {speaker:"user",opts:["Que legal! O que você vai vestir de branco?","Massa!","Não vou."],correct:0},
      {speaker:"bia",pt:"Tudo branco! É tradição no Brasil!",en:"All white! It's a Brazilian tradition!"},
      {speaker:"user",opts:["Vou pular sete ondas pra dar sorte!","Legal!","Que divertido!"],correct:0}
    ]},
    {title:"Birthday party",lines:[
      {speaker:"bia",pt:"Meu aniversário é semana que vem!",en:"My birthday is next week!"},
      {speaker:"user",opts:["Parabéns! Vai ter festa?","Que legal!","Quantos anos?"],correct:0},
      {speaker:"bia",pt:"Vai sim! Sábado à noite! Traz um presente!",en:"Yes! Saturday night! Bring a gift!"},
      {speaker:"user",opts:["Estarei lá! Feliz aniversário antecipado!","Com certeza!","Bora!"],correct:0}
    ]},
    {title:"Real life moment",lines:[
      {speaker:"bia",pt:"Imagina que você está no Brasil agora!",en:"Imagine you're in Brazil right now!"},
      {speaker:"user",opts:["Legal! O que eu falo primeiro?","Oi Brasil!","Estou pronto!"],correct:0},
      {speaker:"bia",pt:"Usa o que aprendeu! Confia em você!",en:"Use what you learned! Trust yourself!"},
      {speaker:"user",opts:["Vou falar com confiança! Português é lindo!","Bora!","Consegui!"],correct:0}
    ]}
  ],
  23: [
    {title:"Work and study",lines:[
      {speaker:"bia",pt:"Você trabalha ou estuda?",en:"Do you work or study?"},
      {speaker:"user",opts:["Trabalho de manhã e estudo à noite.","Trabalho.","Estudo."],correct:0},
      {speaker:"bia",pt:"Que legal! Qual é sua profissão?",en:"How cool! What's your job?"},
      {speaker:"user",opts:["Sou professor. E você, o que faz?","Sou estudante.","Nada."],correct:0}
    ]},
    {title:"Homework",lines:[
      {speaker:"bia",pt:"Fiz toda a lição de casa!",en:"I did all my homework!"},
      {speaker:"user",opts:["Parabéns! Que matéria?","Legal!","Difícil?"],correct:0},
      {speaker:"bia",pt:"Matemática e português! O professor é bom!",en:"Math and Portuguese! Good teacher!"},
      {speaker:"user",opts:["Legal! A escola aqui é diferente?","Muito bom!","Boa!"],correct:0}
    ]},
    {title:"Study break",lines:[
      {speaker:"bia",pt:"Tô cansado de estudar. Vamos fazer uma pausa?",en:"I'm tired of studying. Let's take a break?"},
      {speaker:"user",opts:["Bora! Vamos tomar um café e voltar!","Mais um pouco.","Concordo."],correct:0},
      {speaker:"bia",pt:"Esse professor passa muita lição de casa!",en:"This teacher gives too much homework!"},
      {speaker:"user",opts:["Verdade! Mas a prova é semana que vem!","Força!","Vamos voltar."],correct:0}
    ]},
    {title:"Vocabulary game",lines:[
      {speaker:"bia",pt:"Vamos jogar! Eu falo em português, você traduz!",en:"Let's play! I say it in Portuguese, you translate!"},
      {speaker:"user",opts:["Bora! Estou pronto! Manda!","Vamos!","Pode falar."],correct:0},
      {speaker:"bia",pt:"Acertou tudo! Você é craque!",en:"You got everything right! You're a star!"},
      {speaker:"user",opts:["Quero jogar de novo! É divertido aprender assim!","Mais uma!","Valeu!"],correct:0}
    ]}
  ],
  24: [
    {title:"Around the city",lines:[
      {speaker:"bia",pt:"Onde fica o hospital mais perto?",en:"Where is the nearest hospital?"},
      {speaker:"user",opts:["Fica perto da igreja, na esquina.","Não sei.","Longe."],correct:0},
      {speaker:"bia",pt:"E o banco? Preciso sacar dinheiro.",en:"And the bank? I need to withdraw money."},
      {speaker:"user",opts:["O banco fica na praça, ao lado do mercado.","Ali.","Está fechado."],correct:0}
    ]},
    {title:"Giving directions",lines:[
      {speaker:"bia",pt:"Como eu chego ao aeroporto?",en:"How do I get to the airport?"},
      {speaker:"user",opts:["Pega o metrô até a última estação!","De Uber.","Não sei."],correct:0},
      {speaker:"bia",pt:"E de lá? Tem ônibus?",en:"From there? Is there a bus?"},
      {speaker:"user",opts:["Sim! Ou pega um táxi na saída!","Ok!","Obrigado!"],correct:0}
    ]},
    {title:"Tourist info",lines:[
      {speaker:"bia",pt:"Tem informação turística perto daqui?",en:"Is there tourist info nearby?"},
      {speaker:"user",opts:["Tem um quiosque na praça central!","Não sei.","Ali."],correct:0},
      {speaker:"bia",pt:"Eles dão mapa grátis da cidade!",en:"They give free city maps!"},
      {speaker:"user",opts:["Perfeito! Quero visitar os pontos turísticos!","Boa!","Vamos lá!"],correct:0}
    ]},
    {title:"Confidence boost",lines:[
      {speaker:"bia",pt:"Sabe o que eu percebi? Seu português melhorou muito!",en:"Know what I noticed? Your Portuguese improved a lot!"},
      {speaker:"user",opts:["Sério? Às vezes acho que não evoluo!","Obrigado!","Acha mesmo?"],correct:0},
      {speaker:"bia",pt:"Claro que sim! Olha quantas palavras você sabe!",en:"Of course! Look how many words you know!"},
      {speaker:"user",opts:["Obrigado, Bia! Vou continuar firme!","Motivado!","Valeu!"],correct:0}
    ]}
  ],
  25: [
    {title:"Reacting to news",lines:[
      {speaker:"bia",pt:"Passei na prova!",en:"I passed the test!"},
      {speaker:"user",opts:["Parabéns! Que legal!","Que chato!","Que pena!"],correct:0},
      {speaker:"bia",pt:"Obrigada! Tô muito feliz!",en:"Thanks! I'm so happy!"},
      {speaker:"user",opts:["Com certeza merece! Sério, parabéns!","Nossa!","Saúde!"],correct:0}
    ]},
    {title:"Music taste",lines:[
      {speaker:"bia",pt:"Que tipo de música você gosta?",en:"What kind of music do you like?"},
      {speaker:"user",opts:["Gosto de MPB e rock brasileiro!","Tudo.","Pop."],correct:0},
      {speaker:"bia",pt:"Já ouviu Legião Urbana? É incrível!",en:"Have you heard Legião Urbana? Amazing!"},
      {speaker:"user",opts:["Adoro! A letra das músicas é profunda!","Vou ouvir!","Quem?"],correct:0}
    ]},
    {title:"Movie review",lines:[
      {speaker:"bia",pt:"Viu o filme novo? O que achou?",en:"Saw the new movie? What did you think?"},
      {speaker:"user",opts:["Adorei! A história é emocionante!","Não vi.","Mais ou menos."],correct:0},
      {speaker:"bia",pt:"Eu chorei no final! É muito triste!",en:"I cried at the end! It's very sad!"},
      {speaker:"user",opts:["Vou assistir de novo! Quero levar minha amiga!","Eu também!","Concordo!"],correct:0}
    ]},
    {title:"Teaching a friend",lines:[
      {speaker:"bia",pt:"Ensina essa palavra pro seu amigo!",en:"Teach this word to your friend!"},
      {speaker:"user",opts:["Olha, em português se diz assim!","Tá bom!","Difícil."],correct:0},
      {speaker:"bia",pt:"Ele aprendeu! Você é um bom professor!",en:"He learned! You're a good teacher!"},
      {speaker:"user",opts:["Ensinar é a melhor forma de aprender!","Verdade!","Obrigado!"],correct:0}
    ]}
  ],
  26: [
    {title:"What did you do?",lines:[
      {speaker:"bia",pt:"O que você fez ontem?",en:"What did you do yesterday?"},
      {speaker:"user",opts:["Acordei cedo, limpei a casa e cozinhei.","Nada.","Dormi."],correct:0},
      {speaker:"bia",pt:"E depois? Saiu com amigos?",en:"And after? Did you go out with friends?"},
      {speaker:"user",opts:["Sim! Fomos ao cinema e comemos pizza.","Não.","Fiquei em casa."],correct:0}
    ]},
    {title:"Chores",lines:[
      {speaker:"bia",pt:"Preciso lavar roupa e ir ao mercado.",en:"I need to do laundry and go to the store."},
      {speaker:"user",opts:["Eu vou cozinhar o jantar hoje.","Eu ajudo.","Boa sorte."],correct:0},
      {speaker:"bia",pt:"Legal! Você sabe fazer arroz?",en:"Cool! Can you make rice?"},
      {speaker:"user",opts:["Sei! E vou assar um frango!","Delícia!","Vou tentar."],correct:0}
    ]},
    {title:"Grocery list",lines:[
      {speaker:"bia",pt:"Faz a lista do mercado! Precisamos de leite!",en:"Make the grocery list! We need milk!"},
      {speaker:"user",opts:["E ovos, pão e manteiga!","Só isso?","Anotei."],correct:0},
      {speaker:"bia",pt:"Não esquece o arroz e o feijão!",en:"Don't forget the rice and beans!"},
      {speaker:"user",opts:["Pronto! Vamos ao mercado agora!","Falta algo?","Bora!"],correct:0}
    ]},
    {title:"Practice with Bia",lines:[
      {speaker:"bia",pt:"Vamos praticar mais uma vez?",en:"Let's practice one more time?"},
      {speaker:"user",opts:["Sim! Repetição é importante pra memorizar!","Bora!","De novo?"],correct:0},
      {speaker:"bia",pt:"Muito bem! Você está melhorando rápido!",en:"Very good! You're improving fast!"},
      {speaker:"user",opts:["Valeu, Bia! Cada dia um pouco melhor!","Obrigado!","Continuando!"],correct:0}
    ]}
  ],
  27: [
    {title:"Debating",lines:[
      {speaker:"bia",pt:"Você acha que o Brasil é bonito?",en:"Do you think Brazil is beautiful?"},
      {speaker:"user",opts:["Eu acho que sim! É muito bonito.","Discordo.","Não sei."],correct:0},
      {speaker:"bia",pt:"Concordo! Na minha opinião, é o país mais bonito.",en:"I agree! In my opinion, it's the most beautiful country."},
      {speaker:"user",opts:["Tem razão!","Discordo!","Depende."],correct:0}
    ]},
    {title:"At the bakery",lines:[
      {speaker:"bia",pt:"Bom dia! Me vê seis pães franceses!",en:"Good morning! Give me six French rolls!"},
      {speaker:"user",opts:["Quentinhos! Saíram do forno agora!","Quantos?","Não tem."],correct:0},
      {speaker:"bia",pt:"E um bolo de chocolate pra levar!",en:"And a chocolate cake to go!"},
      {speaker:"user",opts:["São dezoito reais no total! Mais alguma coisa?","Só isso!","Quanto?"],correct:0}
    ]},
    {title:"Agreeing and disagreeing",lines:[
      {speaker:"bia",pt:"Você concorda que música é a melhor arte?",en:"Do you agree music is the best art?"},
      {speaker:"user",opts:["Na minha opinião, sim! É universal!","Discordo.","Talvez."],correct:0},
      {speaker:"bia",pt:"Eu acho que literatura também é incrível!",en:"I think literature is also incredible!"},
      {speaker:"user",opts:["Cada um tem sua opinião! As duas são ótimas!","Concordo!","Verdade!"],correct:0}
    ]},
    {title:"Real life moment",lines:[
      {speaker:"bia",pt:"Imagina que você está no Brasil agora!",en:"Imagine you're in Brazil right now!"},
      {speaker:"user",opts:["Legal! O que eu falo primeiro?","Oi Brasil!","Estou pronto!"],correct:0},
      {speaker:"bia",pt:"Usa o que aprendeu! Confia em você!",en:"Use what you learned! Trust yourself!"},
      {speaker:"user",opts:["Vou falar com confiança! Português é lindo!","Bora!","Consegui!"],correct:0}
    ]}
  ],
  28: [
    {title:"Casual chat",lines:[
      {speaker:"bia",pt:"E aí, cara! Beleza?",en:"What's up, dude! All good?"},
      {speaker:"user",opts:["Beleza! E aí?","Obrigado!","Bom dia!"],correct:0},
      {speaker:"bia",pt:"Firmeza! Quer sair hoje?",en:"Solid! Want to go out today?"},
      {speaker:"user",opts:["Massa! Tá bom!","Pô!","Tipo!"],correct:0},
      {speaker:"bia",pt:"Valeu! Te vejo às oito.",en:"Thanks! See you at eight."},
      {speaker:"user",opts:["Valeu! Firmeza!","Tá ligado?","Beleza!"],correct:0}
    ]},
    {title:"Past tense chat",lines:[
      {speaker:"bia",pt:"O que você comeu ontem?",en:"What did you eat yesterday?"},
      {speaker:"user",opts:["Comi feijoada e bebi suco de goiaba!","Pizza.","Não lembro."],correct:0},
      {speaker:"bia",pt:"Eu fiz churrasco! Ficou delicioso!",en:"I made barbecue! It was delicious!"},
      {speaker:"user",opts:["Que legal! Na próxima me convida!","Adoro churrasco!","Quero!"],correct:0}
    ]},
    {title:"Crush talk",lines:[
      {speaker:"bia",pt:"Acho que estou apaixonado pela vizinha!",en:"I think I'm in love with my neighbor!"},
      {speaker:"user",opts:["Fala com ela! Convida pra tomar café!","Que fofo!","Tá doido?"],correct:0},
      {speaker:"bia",pt:"E se ela disser não? Estou com medo!",en:"What if she says no? I'm scared!"},
      {speaker:"user",opts:["Quem não arrisca não petisca! Vai fundo!","Força!","Vai dar certo!"],correct:0}
    ]},
    {title:"Vocabulary game",lines:[
      {speaker:"bia",pt:"Vamos jogar! Eu falo em português, você traduz!",en:"Let's play! I say it in Portuguese, you translate!"},
      {speaker:"user",opts:["Bora! Estou pronto! Manda!","Vamos!","Pode falar."],correct:0},
      {speaker:"bia",pt:"Acertou tudo! Você é craque!",en:"You got everything right! You're a star!"},
      {speaker:"user",opts:["Quero jogar de novo! É divertido aprender assim!","Mais uma!","Valeu!"],correct:0}
    ]}
  ],
  29: [
    {title:"Love & Dating",lines:[
      {speaker:"bia",pt:"Você tem namorado ou namorada?",en:"Do you have a boyfriend or girlfriend?"},
      {speaker:"user",opts:["Sim! Estou apaixonado!","Não, estou solteiro.","É complicado."],correct:0},
      {speaker:"bia",pt:"Que fofo! Como vocês se conheceram?",en:"How cute! How did you meet?"},
      {speaker:"user",opts:["Nos conhecemos num encontro!","Na internet.","No trabalho."],correct:0}
    ]},
    {title:"First date",lines:[
      {speaker:"bia",pt:"Onde vocês vão no primeiro encontro?",en:"Where are you going on the first date?"},
      {speaker:"user",opts:["Vamos jantar num restaurante italiano!","Cinema.","Não sei."],correct:0},
      {speaker:"bia",pt:"Que romântico! Vai levar flores?",en:"How romantic! Bringing flowers?"},
      {speaker:"user",opts:["Claro! Rosas! Estou nervoso!","Talvez.","Não precisa."],correct:0}
    ]},
    {title:"Relationship talk",lines:[
      {speaker:"bia",pt:"Você acredita em amor à primeira vista?",en:"Do you believe in love at first sight?"},
      {speaker:"user",opts:["Acredito sim! Aconteceu comigo!","Não.","Talvez."],correct:0},
      {speaker:"bia",pt:"Que romântico! Como foi?",en:"How romantic! How was it?"},
      {speaker:"user",opts:["Vi ela e meu coração disparou! Estou apaixonado!","Lindo!","Que fofo!"],correct:0}
    ]},
    {title:"Confidence boost",lines:[
      {speaker:"bia",pt:"Sabe o que eu percebi? Seu português melhorou muito!",en:"Know what I noticed? Your Portuguese improved a lot!"},
      {speaker:"user",opts:["Sério? Às vezes acho que não evoluo!","Obrigado!","Acha mesmo?"],correct:0},
      {speaker:"bia",pt:"Claro que sim! Olha quantas palavras você sabe!",en:"Of course! Look how many words you know!"},
      {speaker:"user",opts:["Obrigado, Bia! Vou continuar firme!","Motivado!","Valeu!"],correct:0}
    ]}
  ],
  30: [
    {title:"Brazilian slang",lines:[
      {speaker:"bia",pt:"E aí, cara! Beleza?",en:"Hey dude! All good?"},
      {speaker:"user",opts:["Tudo tranquilo! E você?","Oi!","Beleza!"],correct:0},
      {speaker:"bia",pt:"De boa! Ontem foi muito massa a festa!",en:"All good! Yesterday's party was awesome!"},
      {speaker:"user",opts:["Legal! Valeu pelo convite!","Que legal!","Show!"],correct:0}
    ]},
    {title:"Gírias do dia",lines:[
      {speaker:"bia",pt:"Mano, tô de boa hoje!",en:"Dude, I'm chill today!"},
      {speaker:"user",opts:["Show de bola! Bora dar um rolê?","Legal!","Eu também."],correct:0},
      {speaker:"bia",pt:"Partiu shopping! Tô afim de comer!",en:"Let's go to the mall! I wanna eat!"},
      {speaker:"user",opts:["Valeu! Depois a gente zoa no arcade!","Bora!","Fechou!"],correct:0}
    ]},
    {title:"Slang lesson",lines:[
      {speaker:"bia",pt:"Sabe o que é 'mano'?",en:"Know what 'mano' is?"},
      {speaker:"user",opts:["É tipo 'dude' ou 'bro' em inglês!","Não sei.","Irmão?"],correct:0},
      {speaker:"bia",pt:"Isso! E 'valeu' é obrigado informal!",en:"Right! And 'valeu' is informal thanks!"},
      {speaker:"user",opts:["Maneiro! Tô aprendendo as gírias!","Show!","Legal!"],correct:0}
    ]},
    {title:"Teaching a friend",lines:[
      {speaker:"bia",pt:"Ensina essa palavra pro seu amigo!",en:"Teach this word to your friend!"},
      {speaker:"user",opts:["Olha, em português se diz assim!","Tá bom!","Difícil."],correct:0},
      {speaker:"bia",pt:"Ele aprendeu! Você é um bom professor!",en:"He learned! You're a good teacher!"},
      {speaker:"user",opts:["Ensinar é a melhor forma de aprender!","Verdade!","Obrigado!"],correct:0}
    ]}
  ],
  31: [
    {title:"Abstract thinking",lines:[
      {speaker:"bia",pt:"O que é mais importante: tempo ou dinheiro?",en:"What's more important: time or money?"},
      {speaker:"user",opts:["O tempo! Porque a vida é curta.","Dinheiro.","Os dois."],correct:0},
      {speaker:"bia",pt:"Concordo! A felicidade não tem preço.",en:"I agree! Happiness is priceless."},
      {speaker:"user",opts:["Verdade! A liberdade também é essencial.","Com certeza.","Bonito."],correct:0}
    ]},
    {title:"Life goals",lines:[
      {speaker:"bia",pt:"Qual é seu maior sonho?",en:"What's your biggest dream?"},
      {speaker:"user",opts:["Quero ter paz e ajudar as pessoas.","Dinheiro.","Viajar."],correct:0},
      {speaker:"bia",pt:"Que bonito! A esperança move tudo!",en:"Beautiful! Hope drives everything!"},
      {speaker:"user",opts:["Verdade! Com coragem a gente consegue!","Concordo.","Sempre!"],correct:0}
    ]},
    {title:"Dreams",lines:[
      {speaker:"bia",pt:"Tive um sonho estranho essa noite!",en:"I had a strange dream last night!"},
      {speaker:"user",opts:["O que você sonhou? Conta!","Que estranho!","Eu também."],correct:0},
      {speaker:"bia",pt:"Sonhei que estava voando sobre o Rio!",en:"I dreamed I was flying over Rio!"},
      {speaker:"user",opts:["Que legal! Eu nunca lembro dos meus sonhos!","Incrível!","Queria voar!"],correct:0}
    ]},
    {title:"Practice with Bia",lines:[
      {speaker:"bia",pt:"Vamos praticar mais uma vez?",en:"Let's practice one more time?"},
      {speaker:"user",opts:["Sim! Repetição é importante pra memorizar!","Bora!","De novo?"],correct:0},
      {speaker:"bia",pt:"Muito bem! Você está melhorando rápido!",en:"Very good! You're improving fast!"},
      {speaker:"user",opts:["Valeu, Bia! Cada dia um pouco melhor!","Obrigado!","Continuando!"],correct:0}
    ]}
  ],
  32: [
    {title:"Using idioms",lines:[
      {speaker:"bia",pt:"Puxa vida, o trânsito está horrível!",en:"Oh man, the traffic is horrible!"},
      {speaker:"user",opts:["Deixa pra lá, vamos de metrô.","Dar certo!","Pagar mico!"],correct:0},
      {speaker:"bia",pt:"Boa ideia! Vai dar certo!",en:"Good idea! It'll work out!"},
      {speaker:"user",opts:["Com certeza! Vamos bater papo no caminho.","Ficar de boa!","Quebrar o gelo!"],correct:0}
    ]},
    {title:"Quick review",lines:[
      {speaker:"bia",pt:"Vamos praticar? O que você aprendeu?",en:"Let's practice? What did you learn?"},
      {speaker:"user",opts:["Aprendi muitas palavras novas!","Bastante!","Pouco."],correct:0},
      {speaker:"bia",pt:"Ótimo! Prática é o segredo da fluência!",en:"Great! Practice is the secret to fluency!"},
      {speaker:"user",opts:["Vou continuar estudando todo dia!","Com certeza!","Sempre!"],correct:0}
    ]},
    {title:"Linking thoughts",lines:[
      {speaker:"bia",pt:"Quero viajar, mas não tenho dinheiro.",en:"I want to travel but I don't have money."},
      {speaker:"user",opts:["Porém, você pode economizar aos poucos!","Verdade.","É difícil."],correct:0},
      {speaker:"bia",pt:"Ou seja, se planejar, vai conseguir!",en:"In other words, if you plan, you'll make it!"},
      {speaker:"user",opts:["Tem razão! Embora demore, vou tentar!","Boa!","Vou planejar!"],correct:0}
    ]},
    {title:"Real life moment",lines:[
      {speaker:"bia",pt:"Imagina que você está no Brasil agora!",en:"Imagine you're in Brazil right now!"},
      {speaker:"user",opts:["Legal! O que eu falo primeiro?","Oi Brasil!","Estou pronto!"],correct:0},
      {speaker:"bia",pt:"Usa o que aprendeu! Confia em você!",en:"Use what you learned! Trust yourself!"},
      {speaker:"user",opts:["Vou falar com confiança! Português é lindo!","Bora!","Consegui!"],correct:0}
    ]}
  ],
  33: [
    {title:"Brazilian idioms",lines:[
      {speaker:"bia",pt:"Estou com a corda no pescoço!",en:"I'm swamped! (lit: rope around my neck)"},
      {speaker:"user",opts:["Eita! Precisa dar um jeito!","O quê?","Coitada!"],correct:0},
      {speaker:"bia",pt:"Pois é! Mas quem não tem cão, caça com gato!",en:"Yeah! But you make do with what you've got!"},
      {speaker:"user",opts:["Isso! Vamos meter a mão na massa!","Legal!","Força!"],correct:0}
    ]},
    {title:"More idioms",lines:[
      {speaker:"bia",pt:"Estou quebrando a cabeça com esse problema!",en:"I'm racking my brain over this problem!"},
      {speaker:"user",opts:["Fica tranquilo! Vamos botar a mão na massa!","Calma!","Difícil."],correct:0},
      {speaker:"bia",pt:"Melhor prevenir do que remediar, né?",en:"Better safe than sorry, right?"},
      {speaker:"user",opts:["Com certeza! Quem não arrisca, não petisca!","Verdade!","Concordo!"],correct:0}
    ]},
    {title:"Animal idioms",lines:[
      {speaker:"bia",pt:"Estou com uma fome de leão!",en:"I'm hungry as a lion!"},
      {speaker:"user",opts:["Come alguma coisa antes que fique uma fera!","Eu também!","Coitado."],correct:0},
      {speaker:"bia",pt:"Não vou chorar lágrimas de crocodilo!",en:"I won't cry crocodile tears!"},
      {speaker:"user",opts:["Essas expressões com animais são demais!","Adoro!","Engraçado!"],correct:0}
    ]},
    {title:"Vocabulary game",lines:[
      {speaker:"bia",pt:"Vamos jogar! Eu falo em português, você traduz!",en:"Let's play! I say it in Portuguese, you translate!"},
      {speaker:"user",opts:["Bora! Estou pronto! Manda!","Vamos!","Pode falar."],correct:0},
      {speaker:"bia",pt:"Acertou tudo! Você é craque!",en:"You got everything right! You're a star!"},
      {speaker:"user",opts:["Quero jogar de novo! É divertido aprender assim!","Mais uma!","Valeu!"],correct:0}
    ]}
  ],
  34: [
    {title:"Tech problems",lines:[
      {speaker:"bia",pt:"Meu celular não está funcionando!",en:"My phone isn't working!"},
      {speaker:"user",opts:["Você já tentou carregar?","Computador!","Internet!"],correct:0},
      {speaker:"bia",pt:"Sim, mas a tela está preta.",en:"Yes, but the screen is black."},
      {speaker:"user",opts:["Tenta baixar uma atualização.","Senha!","Foto!"],correct:0}
    ]},
    {title:"Quick review",lines:[
      {speaker:"bia",pt:"Vamos praticar? O que você aprendeu?",en:"Let's practice? What did you learn?"},
      {speaker:"user",opts:["Aprendi muitas palavras novas!","Bastante!","Pouco."],correct:0},
      {speaker:"bia",pt:"Ótimo! Prática é o segredo da fluência!",en:"Great! Practice is the secret to fluency!"},
      {speaker:"user",opts:["Vou continuar estudando todo dia!","Com certeza!","Sempre!"],correct:0}
    ]},
    {title:"Formal request",lines:[
      {speaker:"bia",pt:"Gostaria de agendar uma reunião, por favor.",en:"I would like to schedule a meeting, please."},
      {speaker:"user",opts:["Pois não! Qual data o senhor prefere?","Amanhã.","Agora."],correct:0},
      {speaker:"bia",pt:"Terça-feira seria possível?",en:"Would Tuesday be possible?"},
      {speaker:"user",opts:["Perfeitamente! Às quatorze horas. Confirmado!","Obrigado!","Combinado."],correct:0}
    ]},
    {title:"Confidence boost",lines:[
      {speaker:"bia",pt:"Sabe o que eu percebi? Seu português melhorou muito!",en:"Know what I noticed? Your Portuguese improved a lot!"},
      {speaker:"user",opts:["Sério? Às vezes acho que não evoluo!","Obrigado!","Acha mesmo?"],correct:0},
      {speaker:"bia",pt:"Claro que sim! Olha quantas palavras você sabe!",en:"Of course! Look how many words you know!"},
      {speaker:"user",opts:["Obrigado, Bia! Vou continuar firme!","Motivado!","Valeu!"],correct:0}
    ]}
  ],
  35: [
    {title:"Technology chat",lines:[
      {speaker:"bia",pt:"Meu celular quebrou! Preciso de um novo.",en:"My phone broke! I need a new one."},
      {speaker:"user",opts:["Que chato! Tenta mandar uma mensagem do computador.","Compra um.","Triste."],correct:0},
      {speaker:"bia",pt:"Boa ideia! Vou baixar um aplicativo no tablet.",en:"Good idea! I'll download an app on the tablet."},
      {speaker:"user",opts:["A internet aqui é boa. Usa o Wi-Fi!","Legal.","Funciona?"],correct:0}
    ]},
    {title:"App trouble",lines:[
      {speaker:"bia",pt:"Meu aplicativo travou! Tá com bug!",en:"My app crashed! It has a bug!"},
      {speaker:"user",opts:["Tenta reiniciar o celular!","Que chato!","Desinstala."],correct:0},
      {speaker:"bia",pt:"Funcionou! Mas a internet tá lenta!",en:"It worked! But the internet is slow!"},
      {speaker:"user",opts:["Conecta no Wi-Fi! É mais rápido!","Boa!","Muda de operadora."],correct:0}
    ]},
    {title:"New gadget",lines:[
      {speaker:"bia",pt:"Comprei um tablet novo! Tá muito rápido!",en:"Bought a new tablet! It's so fast!"},
      {speaker:"user",opts:["Legal! Já conectou no Wi-Fi?","Parabéns!","Quanto custou?"],correct:0},
      {speaker:"bia",pt:"Sim! Baixei vários aplicativos!",en:"Yes! Downloaded several apps!"},
      {speaker:"user",opts:["Manda o link do melhor! Quero baixar também!","Qual?","Me mostra!"],correct:0}
    ]},
    {title:"Teaching a friend",lines:[
      {speaker:"bia",pt:"Ensina essa palavra pro seu amigo!",en:"Teach this word to your friend!"},
      {speaker:"user",opts:["Olha, em português se diz assim!","Tá bom!","Difícil."],correct:0},
      {speaker:"bia",pt:"Ele aprendeu! Você é um bom professor!",en:"He learned! You're a good teacher!"},
      {speaker:"user",opts:["Ensinar é a melhor forma de aprender!","Verdade!","Obrigado!"],correct:0}
    ]}
  ],
  36: [
    {title:"Describing people",lines:[
      {speaker:"bia",pt:"Como é seu melhor amigo?",en:"What's your best friend like?"},
      {speaker:"user",opts:["Ele é alto, magro e muito engraçado.","Bonito.","Legal."],correct:0},
      {speaker:"bia",pt:"E a personalidade? É simpático?",en:"And personality? Is he nice?"},
      {speaker:"user",opts:["Sim! É inteligente, gentil e muito divertido.","Sim.","Mais ou menos."],correct:0}
    ]},
    {title:"Describing a trip",lines:[
      {speaker:"bia",pt:"Como foi a viagem?",en:"How was the trip?"},
      {speaker:"user",opts:["Foi maravilhosa! O hotel era lindo e confortável!","Boa!","Normal."],correct:0},
      {speaker:"bia",pt:"E a comida? Era gostosa?",en:"And the food? Was it tasty?"},
      {speaker:"user",opts:["Deliciosa! Comida fresca e colorida!","Sim!","A melhor!"],correct:0}
    ]},
    {title:"Restaurant review",lines:[
      {speaker:"bia",pt:"Como foi o jantar ontem?",en:"How was dinner last night?"},
      {speaker:"user",opts:["Incrível! O restaurante era elegante e aconchegante!","Bom!","Normal."],correct:0},
      {speaker:"bia",pt:"E o garçom? Foi simpático?",en:"And the waiter? Was he nice?"},
      {speaker:"user",opts:["Super gentil! Deixei uma gorjeta boa!","Que bom!","Quero ir!"],correct:0}
    ]},
    {title:"Practice with Bia",lines:[
      {speaker:"bia",pt:"Vamos praticar mais uma vez?",en:"Let's practice one more time?"},
      {speaker:"user",opts:["Sim! Repetição é importante pra memorizar!","Bora!","De novo?"],correct:0},
      {speaker:"bia",pt:"Muito bem! Você está melhorando rápido!",en:"Very good! You're improving fast!"},
      {speaker:"user",opts:["Valeu, Bia! Cada dia um pouco melhor!","Obrigado!","Continuando!"],correct:0}
    ]}
  ],
  37: [
    {title:"At the zoo",lines:[
      {speaker:"bia",pt:"Olha! Um macaco!",en:"Look! A monkey!"},
      {speaker:"user",opts:["Que bonito! E ali tem um pássaro!","Cachorro!","Cobra!"],correct:0},
      {speaker:"bia",pt:"Tem cavalos também! Vamos ver?",en:"There are horses too! Shall we go see?"},
      {speaker:"user",opts:["Sim! Adoro cavalos!","Gato!","Peixe!"],correct:0}
    ]},
    {title:"Quick review",lines:[
      {speaker:"bia",pt:"Vamos praticar? O que você aprendeu?",en:"Let's practice? What did you learn?"},
      {speaker:"user",opts:["Aprendi muitas palavras novas!","Bastante!","Pouco."],correct:0},
      {speaker:"bia",pt:"Ótimo! Prática é o segredo da fluência!",en:"Great! Practice is the secret to fluency!"},
      {speaker:"user",opts:["Vou continuar estudando todo dia!","Com certeza!","Sempre!"],correct:0}
    ]},
    {title:"Kitchen disaster",lines:[
      {speaker:"bia",pt:"Queimei o arroz! O fogão tá sujo!",en:"I burned the rice! The stove is dirty!"},
      {speaker:"user",opts:["Abre a janela! Limpa com esponja e detergente!","Coitado!","Pede comida."],correct:0},
      {speaker:"bia",pt:"E a panela? Tá grudado no fundo!",en:"And the pot? It's stuck to the bottom!"},
      {speaker:"user",opts:["Coloca de molho! Amanhã sai fácil!","Boa dica!","Joga fora!"],correct:0}
    ]},
    {title:"Real life moment",lines:[
      {speaker:"bia",pt:"Imagina que você está no Brasil agora!",en:"Imagine you're in Brazil right now!"},
      {speaker:"user",opts:["Legal! O que eu falo primeiro?","Oi Brasil!","Estou pronto!"],correct:0},
      {speaker:"bia",pt:"Usa o que aprendeu! Confia em você!",en:"Use what you learned! Trust yourself!"},
      {speaker:"user",opts:["Vou falar com confiança! Português é lindo!","Bora!","Consegui!"],correct:0}
    ]}
  ],
  38: [
    {title:"Beach life",lines:[
      {speaker:"bia",pt:"Vamos à praia? O mar está lindo hoje!",en:"Let's go to the beach? The sea is beautiful today!"},
      {speaker:"user",opts:["Bora! Vou pegar o protetor solar!","Está frio.","Prefiro ficar."],correct:0},
      {speaker:"bia",pt:"Traz a toalha! Vou comprar um açaí na barraca!",en:"Bring the towel! I'll buy açaí at the beach stand!"},
      {speaker:"user",opts:["Perfeito! Adoro açaí na praia!","Quero água de coco!","Boa!"],correct:0}
    ]},
    {title:"Sunset at the beach",lines:[
      {speaker:"bia",pt:"Olha o pôr do sol! Que lindo!",en:"Look at the sunset! How beautiful!"},
      {speaker:"user",opts:["Incrível! A água tá quente e calma!","Lindo!","Vamos nadar?"],correct:0},
      {speaker:"bia",pt:"Quer jogar vôlei de praia?",en:"Want to play beach volleyball?"},
      {speaker:"user",opts:["Bora! Depois vamos comer camarão!","Sim!","Tô cansado."],correct:0}
    ]},
    {title:"Water sports",lines:[
      {speaker:"bia",pt:"Quer fazer stand-up paddle?",en:"Want to do stand-up paddle?"},
      {speaker:"user",opts:["Bora! O mar tá calmo e a água tá morna!","Tenho medo.","Vamos!"],correct:0},
      {speaker:"bia",pt:"Olha o golfinho! Que lindo!",en:"Look, a dolphin! How beautiful!"},
      {speaker:"user",opts:["Que sorte! Adoro o mar brasileiro!","Incrível!","Quero foto!"],correct:0}
    ]},
    {title:"Vocabulary game",lines:[
      {speaker:"bia",pt:"Vamos jogar! Eu falo em português, você traduz!",en:"Let's play! I say it in Portuguese, you translate!"},
      {speaker:"user",opts:["Bora! Estou pronto! Manda!","Vamos!","Pode falar."],correct:0},
      {speaker:"bia",pt:"Acertou tudo! Você é craque!",en:"You got everything right! You're a star!"},
      {speaker:"user",opts:["Quero jogar de novo! É divertido aprender assim!","Mais uma!","Valeu!"],correct:0}
    ]}
  ],
  39: [
    {title:"Entertainment",lines:[
      {speaker:"bia",pt:"Quer assistir um filme ou uma série?",en:"Want to watch a movie or a series?"},
      {speaker:"user",opts:["Vamos assistir uma série brasileira!","Filme!","Tanto faz."],correct:0},
      {speaker:"bia",pt:"Que tal uma comédia? Adoro rir!",en:"How about a comedy? I love laughing!"},
      {speaker:"user",opts:["Boa! Eu prefiro comédia a drama.","Vamos!","Pode ser."],correct:0}
    ]},
    {title:"Movie night",lines:[
      {speaker:"bia",pt:"Vamos ao cinema? Tem filme brasileiro novo!",en:"Let's go to the movies? New Brazilian film!"},
      {speaker:"user",opts:["Bora! Quero pipoca e refrigerante!","Que filme?","Hoje não."],correct:0},
      {speaker:"bia",pt:"O filme é de comédia! Vai ser engraçado!",en:"The film is a comedy! It'll be funny!"},
      {speaker:"user",opts:["Adoro comédia! Compra os ingressos!","Boa!","Quero drama."],correct:0}
    ]},
    {title:"Concert plans",lines:[
      {speaker:"bia",pt:"Tem show de música brasileira sábado!",en:"There's a Brazilian music show Saturday!"},
      {speaker:"user",opts:["Bora! Quem vai tocar?","Legal!","Não posso."],correct:0},
      {speaker:"bia",pt:"Uma banda de forró! Vai ser animado!",en:"A forró band! It'll be lively!"},
      {speaker:"user",opts:["Adoro! Vou chamar os amigos!","Partiu!","Compra ingresso!"],correct:0}
    ]},
    {title:"Confidence boost",lines:[
      {speaker:"bia",pt:"Sabe o que eu percebi? Seu português melhorou muito!",en:"Know what I noticed? Your Portuguese improved a lot!"},
      {speaker:"user",opts:["Sério? Às vezes acho que não evoluo!","Obrigado!","Acha mesmo?"],correct:0},
      {speaker:"bia",pt:"Claro que sim! Olha quantas palavras você sabe!",en:"Of course! Look how many words you know!"},
      {speaker:"user",opts:["Obrigado, Bia! Vou continuar firme!","Motivado!","Valeu!"],correct:0}
    ]}
  ],
  40: [
    {title:"Sports talk",lines:[
      {speaker:"bia",pt:"Você pratica algum esporte?",en:"Do you play any sports?"},
      {speaker:"user",opts:["Jogo futebol todo sábado!","Não.","Às vezes."],correct:0},
      {speaker:"bia",pt:"Legal! Eu gosto de correr no parque.",en:"Cool! I like running in the park."},
      {speaker:"user",opts:["Também gosto! Vamos correr juntos?","Boa!","Prefiro nadar."],correct:0}
    ]},
    {title:"Playing soccer",lines:[
      {speaker:"bia",pt:"Tem pelada no parque! Vem jogar!",en:"Pickup game at the park! Come play!"},
      {speaker:"user",opts:["Vou! Qual posição? Quero ser goleiro!","Não sei jogar.","Tô cansado."],correct:0},
      {speaker:"bia",pt:"Joga no ataque! Faz gol pra gente!",en:"Play forward! Score for us!"},
      {speaker:"user",opts:["Bora! Vamos ganhar essa!","Vamos!","Combinado!"],correct:0}
    ]},
    {title:"Gym workout",lines:[
      {speaker:"bia",pt:"Vamos correr no parque amanhã?",en:"Let's run in the park tomorrow?"},
      {speaker:"user",opts:["Bora! Às seis da manhã! Antes do calor!","Cedo demais!","Vamos!"],correct:0},
      {speaker:"bia",pt:"Depois fazemos abdominais e flexões!",en:"After, we'll do crunches and push-ups!"},
      {speaker:"user",opts:["Combinado! Preciso ficar em forma!","Fechou!","Vou tentar!"],correct:0}
    ]},
    {title:"Teaching a friend",lines:[
      {speaker:"bia",pt:"Ensina essa palavra pro seu amigo!",en:"Teach this word to your friend!"},
      {speaker:"user",opts:["Olha, em português se diz assim!","Tá bom!","Difícil."],correct:0},
      {speaker:"bia",pt:"Ele aprendeu! Você é um bom professor!",en:"He learned! You're a good teacher!"},
      {speaker:"user",opts:["Ensinar é a melhor forma de aprender!","Verdade!","Obrigado!"],correct:0}
    ]}
  ],
  41: [
    {title:"At the airport",lines:[
      {speaker:"bia",pt:"Tem o seu passaporte?",en:"Do you have your passport?"},
      {speaker:"user",opts:["Sim, está na mala.","Hotel!","Voo!"],correct:0},
      {speaker:"bia",pt:"O voo é direto?",en:"Is the flight direct?"},
      {speaker:"user",opts:["Não, tem uma escala.","Turista!","Mapa!"],correct:0},
      {speaker:"bia",pt:"Quando é o embarque?",en:"When is boarding?"},
      {speaker:"user",opts:["Às três da tarde.","Viagem!","Reserva!"],correct:0}
    ]},
    {title:"Quick review",lines:[
      {speaker:"bia",pt:"Vamos praticar? O que você aprendeu?",en:"Let's practice? What did you learn?"},
      {speaker:"user",opts:["Aprendi muitas palavras novas!","Bastante!","Pouco."],correct:0},
      {speaker:"bia",pt:"Ótimo! Prática é o segredo da fluência!",en:"Great! Practice is the secret to fluency!"},
      {speaker:"user",opts:["Vou continuar estudando todo dia!","Com certeza!","Sempre!"],correct:0}
    ]},
    {title:"Dream job",lines:[
      {speaker:"bia",pt:"Qual é o emprego dos seus sonhos?",en:"What's your dream job?"},
      {speaker:"user",opts:["Quero ser veterinário! Amo animais!","Médico.","Não sei."],correct:0},
      {speaker:"bia",pt:"Que legal! Precisa estudar muito!",en:"Cool! You need to study a lot!"},
      {speaker:"user",opts:["Estou me preparando! O esforço vale a pena!","Vai conseguir!","Boa sorte!"],correct:0}
    ]},
    {title:"Practice with Bia",lines:[
      {speaker:"bia",pt:"Vamos praticar mais uma vez?",en:"Let's practice one more time?"},
      {speaker:"user",opts:["Sim! Repetição é importante pra memorizar!","Bora!","De novo?"],correct:0},
      {speaker:"bia",pt:"Muito bem! Você está melhorando rápido!",en:"Very good! You're improving fast!"},
      {speaker:"user",opts:["Valeu, Bia! Cada dia um pouco melhor!","Obrigado!","Continuando!"],correct:0}
    ]}
  ],
  42: [
    {title:"Travel plans",lines:[
      {speaker:"bia",pt:"Pra onde você quer viajar?",en:"Where do you want to travel?"},
      {speaker:"user",opts:["Quero conhecer o Nordeste do Brasil!","Europa.","Não sei."],correct:0},
      {speaker:"bia",pt:"Que legal! Já reservou o hotel e a passagem?",en:"How cool! Did you book the hotel and ticket?"},
      {speaker:"user",opts:["Ainda não. Preciso comprar passagem de avião.","Sim!","Não."],correct:0}
    ]},
    {title:"Booking a trip",lines:[
      {speaker:"bia",pt:"Quero reservar um quarto de hotel em Salvador!",en:"I want to book a hotel room in Salvador!"},
      {speaker:"user",opts:["Pra quantas noites? Casal ou solteiro?","Quando?","Quanto custa?"],correct:0},
      {speaker:"bia",pt:"Três noites! Tem com café da manhã?",en:"Three nights! Breakfast included?"},
      {speaker:"user",opts:["Sim! E perto da praia! Perfeito!","Oba!","Reserva!"],correct:0}
    ]},
    {title:"Hotel check-in",lines:[
      {speaker:"bia",pt:"Boa noite! Tenho uma reserva no nome de Silva.",en:"Good evening! I have a reservation under Silva."},
      {speaker:"user",opts:["Achei! Quarto 405. Aqui a chave!","Bem-vindo!","Um momento."],correct:0},
      {speaker:"bia",pt:"Tem café da manhã incluso?",en:"Is breakfast included?"},
      {speaker:"user",opts:["Sim! Das seis às dez! Bom descanso!","Obrigado!","Perfeito!"],correct:0}
    ]},
    {title:"Real life moment",lines:[
      {speaker:"bia",pt:"Imagina que você está no Brasil agora!",en:"Imagine you're in Brazil right now!"},
      {speaker:"user",opts:["Legal! O que eu falo primeiro?","Oi Brasil!","Estou pronto!"],correct:0},
      {speaker:"bia",pt:"Usa o que aprendeu! Confia em você!",en:"Use what you learned! Trust yourself!"},
      {speaker:"user",opts:["Vou falar com confiança! Português é lindo!","Bora!","Consegui!"],correct:0}
    ]}
  ],
  43: [
    {title:"At the doctor",lines:[
      {speaker:"bia",pt:"O que você está sentindo?",en:"What are you feeling?"},
      {speaker:"user",opts:["Estou com dor de cabeça e febre.","Estou bem.","Nada."],correct:0},
      {speaker:"bia",pt:"Precisa tomar remédio. Vou passar uma receita.",en:"You need medicine. I'll write a prescription."},
      {speaker:"user",opts:["Obrigado, doutora. Onde fica a farmácia?","Tá bom.","Não quero."],correct:0}
    ]},
    {title:"Prescription",lines:[
      {speaker:"bia",pt:"O médico passou uma receita. Onde tem farmácia?",en:"Doctor gave me a prescription. Where's a pharmacy?"},
      {speaker:"user",opts:["Tem uma na esquina! Fica aberta até as dez.","Ali.","Não sei."],correct:0},
      {speaker:"bia",pt:"Preciso comprar remédio e vitamina.",en:"I need to buy medicine and vitamins."},
      {speaker:"user",opts:["Pede genérico! É mais barato e igual!","Boa dica!","Melhoras!"],correct:0}
    ]},
    {title:"Stomach bug",lines:[
      {speaker:"bia",pt:"Comi algo estragado. Estou passando mal!",en:"I ate something bad. I'm feeling sick!"},
      {speaker:"user",opts:["Toma chá de boldo! Ajuda na digestão!","Coitado!","Vai ao hospital."],correct:0},
      {speaker:"bia",pt:"Também estou com febre baixa!",en:"I also have a low fever!"},
      {speaker:"user",opts:["Se piorar, vai ao pronto-socorro!","Se cuida!","Melhoras!"],correct:0}
    ]},
    {title:"Vocabulary game",lines:[
      {speaker:"bia",pt:"Vamos jogar! Eu falo em português, você traduz!",en:"Let's play! I say it in Portuguese, you translate!"},
      {speaker:"user",opts:["Bora! Estou pronto! Manda!","Vamos!","Pode falar."],correct:0},
      {speaker:"bia",pt:"Acertou tudo! Você é craque!",en:"You got everything right! You're a star!"},
      {speaker:"user",opts:["Quero jogar de novo! É divertido aprender assim!","Mais uma!","Valeu!"],correct:0}
    ]}
  ],
  44: [
    {title:"In nature",lines:[
      {speaker:"bia",pt:"Olha que vista linda! As montanhas e o rio!",en:"Look at that beautiful view! The mountains and river!"},
      {speaker:"user",opts:["Incrível! Adoro a natureza brasileira!","Bonito.","Legal."],correct:0},
      {speaker:"bia",pt:"Vamos fazer uma trilha na floresta?",en:"Let's go hiking in the forest?"},
      {speaker:"user",opts:["Bora! Espero que a gente veja animais!","Sim!","Tô cansado."],correct:0}
    ]},
    {title:"Hiking",lines:[
      {speaker:"bia",pt:"A trilha é longa? Trouxe água?",en:"Is the trail long? Did you bring water?"},
      {speaker:"user",opts:["Sim! Duas garrafas e protetor solar!","Não.","Acho que sim."],correct:0},
      {speaker:"bia",pt:"Olha! Um tucano na árvore!",en:"Look! A toucan in the tree!"},
      {speaker:"user",opts:["Que lindo! A floresta é mágica!","Incrível!","Quero foto!"],correct:0}
    ]},
    {title:"Waterfall hike",lines:[
      {speaker:"bia",pt:"Vamos na cachoeira! É perto daqui!",en:"Let's go to the waterfall! It's nearby!"},
      {speaker:"user",opts:["Bora! Leva repelente e garrafa d'água!","Que legal!","É seguro?"],correct:0},
      {speaker:"bia",pt:"A água é cristalina! Podemos nadar!",en:"The water is crystal clear! We can swim!"},
      {speaker:"user",opts:["Paraíso! A natureza do Brasil é incrível!","Vamos!","Quero mergulhar!"],correct:0}
    ]},
    {title:"Confidence boost",lines:[
      {speaker:"bia",pt:"Sabe o que eu percebi? Seu português melhorou muito!",en:"Know what I noticed? Your Portuguese improved a lot!"},
      {speaker:"user",opts:["Sério? Às vezes acho que não evoluo!","Obrigado!","Acha mesmo?"],correct:0},
      {speaker:"bia",pt:"Claro que sim! Olha quantas palavras você sabe!",en:"Of course! Look how many words you know!"},
      {speaker:"user",opts:["Obrigado, Bia! Vou continuar firme!","Motivado!","Valeu!"],correct:0}
    ]}
  ],
  45: [
    {title:"Deep feelings",lines:[
      {speaker:"bia",pt:"Você está bem? Parece preocupado.",en:"Are you okay? You seem worried."},
      {speaker:"user",opts:["Estou com saudade da minha família.","Tô bem.","Mais ou menos."],correct:0},
      {speaker:"bia",pt:"Entendo. A saudade dói, mas mostra amor.",en:"I understand. Missing someone hurts, but it shows love."},
      {speaker:"user",opts:["Verdade. Me sinto grato por ter eles.","Obrigado.","É difícil."],correct:0}
    ]},
    {title:"Missing home",lines:[
      {speaker:"bia",pt:"Tô com muita saudade de casa.",en:"I really miss home."},
      {speaker:"user",opts:["Entendo. Liga pra sua família!","Também tenho.","Vai passar."],correct:0},
      {speaker:"bia",pt:"Boa ideia! A saudade é difícil mas passa.",en:"Good idea! Missing home is hard but it passes."},
      {speaker:"user",opts:["Obrigado. Me sinto melhor falando com você.","Valeu.","Verdade."],correct:0}
    ]},
    {title:"Homesick cure",lines:[
      {speaker:"bia",pt:"Faz uma comida da sua terra! Ajuda a matar saudade!",en:"Make food from your country! Helps with homesickness!"},
      {speaker:"user",opts:["Boa ideia! Vou cozinhar e convidar amigos!","Verdade!","Não sei cozinhar."],correct:0},
      {speaker:"bia",pt:"Perfeito! Também liga pra família por vídeo!",en:"Great! Also video-call your family!"},
      {speaker:"user",opts:["Obrigado! Já me sinto melhor!","Valeu!","Vou fazer isso!"],correct:0}
    ]},
    {title:"Teaching a friend",lines:[
      {speaker:"bia",pt:"Ensina essa palavra pro seu amigo!",en:"Teach this word to your friend!"},
      {speaker:"user",opts:["Olha, em português se diz assim!","Tá bom!","Difícil."],correct:0},
      {speaker:"bia",pt:"Ele aprendeu! Você é um bom professor!",en:"He learned! You're a good teacher!"},
      {speaker:"user",opts:["Ensinar é a melhor forma de aprender!","Verdade!","Obrigado!"],correct:0}
    ]}
  ],
  46: [
    {title:"Brazilian culture",lines:[
      {speaker:"bia",pt:"Você já foi ao Carnaval?",en:"Have you been to Carnival?"},
      {speaker:"user",opts:["Ainda não, mas quero ir!","Samba!","Feijoada!"],correct:0},
      {speaker:"bia",pt:"É incrível! Tem samba, música, e muita caipirinha!",en:"It's incredible! There's samba, music, and lots of caipirinha!"},
      {speaker:"user",opts:["Massa! Também quero provar feijoada!","Açaí!","Churrasco!"],correct:0}
    ]},
    {title:"Quick review",lines:[
      {speaker:"bia",pt:"Vamos praticar? O que você aprendeu?",en:"Let's practice? What did you learn?"},
      {speaker:"user",opts:["Aprendi muitas palavras novas!","Bastante!","Pouco."],correct:0},
      {speaker:"bia",pt:"Ótimo! Prática é o segredo da fluência!",en:"Great! Practice is the secret to fluency!"},
      {speaker:"user",opts:["Vou continuar estudando todo dia!","Com certeza!","Sempre!"],correct:0}
    ]},
    {title:"Family bonds",lines:[
      {speaker:"bia",pt:"Sua família é unida?",en:"Is your family close?"},
      {speaker:"user",opts:["Muito! Nos reunimos todo domingo!","Mais ou menos.","Não muito."],correct:0},
      {speaker:"bia",pt:"Que bom! Família é a base de tudo!",en:"Great! Family is the foundation of everything!"},
      {speaker:"user",opts:["Concordo! Sou muito grato pela minha!","Bonito!","Verdade!"],correct:0}
    ]},
    {title:"Practice with Bia",lines:[
      {speaker:"bia",pt:"Vamos praticar mais uma vez?",en:"Let's practice one more time?"},
      {speaker:"user",opts:["Sim! Repetição é importante pra memorizar!","Bora!","De novo?"],correct:0},
      {speaker:"bia",pt:"Muito bem! Você está melhorando rápido!",en:"Very good! You're improving fast!"},
      {speaker:"user",opts:["Valeu, Bia! Cada dia um pouco melhor!","Obrigado!","Continuando!"],correct:0}
    ]}
  ],
  47: [
    {title:"Culture chat",lines:[
      {speaker:"bia",pt:"Você conhece a cultura brasileira?",en:"Do you know Brazilian culture?"},
      {speaker:"user",opts:["Um pouco! Gosto de samba e capoeira!","Não muito.","Quero aprender!"],correct:0},
      {speaker:"bia",pt:"Legal! No Brasil a gente abraça, beija e fala alto!",en:"Cool! In Brazil we hug, kiss and talk loud!"},
      {speaker:"user",opts:["Adoro! O povo brasileiro é muito caloroso!","Diferente!","Massa!"],correct:0}
    ]},
    {title:"Jeitinho brasileiro",lines:[
      {speaker:"bia",pt:"No Brasil, sempre tem um jeito!",en:"In Brazil, there's always a way!"},
      {speaker:"user",opts:["O famoso jeitinho brasileiro! Adoro!","Legal!","O quê?"],correct:0},
      {speaker:"bia",pt:"Isso! A gente improvisa e resolve tudo!",en:"Right! We improvise and solve everything!"},
      {speaker:"user",opts:["É por isso que eu amo o Brasil!","Demais!","Concordo!"],correct:0}
    ]},
    {title:"Cultural differences",lines:[
      {speaker:"bia",pt:"No Brasil, todo mundo se beija no rosto!",en:"In Brazil, everyone kisses on the cheek!"},
      {speaker:"user",opts:["Sério? No meu país a gente só aperta a mão!","Eu sei!","Estranho."],correct:0},
      {speaker:"bia",pt:"É normal! Um beijo em São Paulo, dois no Rio!",en:"It's normal! One kiss in SP, two in Rio!"},
      {speaker:"user",opts:["Vou me acostumar! A cultura brasileira é calorosa!","Legal!","Adoro!"],correct:0}
    ]},
    {title:"Real life moment",lines:[
      {speaker:"bia",pt:"Imagina que você está no Brasil agora!",en:"Imagine you're in Brazil right now!"},
      {speaker:"user",opts:["Legal! O que eu falo primeiro?","Oi Brasil!","Estou pronto!"],correct:0},
      {speaker:"bia",pt:"Usa o que aprendeu! Confia em você!",en:"Use what you learned! Trust yourself!"},
      {speaker:"user",opts:["Vou falar com confiança! Português é lindo!","Bora!","Consegui!"],correct:0}
    ]}
  ],
  48: [
    {title:"Advanced phrases",lines:[
      {speaker:"bia",pt:"Fica à vontade! Pode entrar!",en:"Make yourself at home! Come in!"},
      {speaker:"user",opts:["Obrigado! Que casa bonita!","Valeu!","Posso sentar?"],correct:0},
      {speaker:"bia",pt:"Imagina! Qualquer coisa é só falar!",en:"Don't mention it! If you need anything just say!"},
      {speaker:"user",opts:["Pode deixar! Você é muito gentil!","Tá bom!","Legal!"],correct:0}
    ]},
    {title:"Polite requests",lines:[
      {speaker:"bia",pt:"Será que você poderia me ajudar?",en:"Could you possibly help me?"},
      {speaker:"user",opts:["Claro! O que você precisa?","Depende.","Agora?"],correct:0},
      {speaker:"bia",pt:"Queria saber onde fica o correio.",en:"I'd like to know where the post office is."},
      {speaker:"user",opts:["Fica duas quadras daqui. Posso te levar!","Ali!","Obrigado!"],correct:0}
    ]},
    {title:"Asking for help",lines:[
      {speaker:"bia",pt:"Desculpa incomodar, mas você poderia me ajudar?",en:"Sorry to bother, but could you help me?"},
      {speaker:"user",opts:["Claro! O que precisa?","Agora?","Depende."],correct:0},
      {speaker:"bia",pt:"Não estou conseguindo achar meu hotel!",en:"I can't find my hotel!"},
      {speaker:"user",opts:["Me mostra o endereço! Vou te levar lá!","Coitado!","Usa o GPS!"],correct:0}
    ]},
    {title:"Vocabulary game",lines:[
      {speaker:"bia",pt:"Vamos jogar! Eu falo em português, você traduz!",en:"Let's play! I say it in Portuguese, you translate!"},
      {speaker:"user",opts:["Bora! Estou pronto! Manda!","Vamos!","Pode falar."],correct:0},
      {speaker:"bia",pt:"Acertou tudo! Você é craque!",en:"You got everything right! You're a star!"},
      {speaker:"user",opts:["Quero jogar de novo! É divertido aprender assim!","Mais uma!","Valeu!"],correct:0}
    ]}
  ],
  49: [
    {title:"At the office",lines:[
      {speaker:"bia",pt:"Bom dia! Tem reunião hoje às dez.",en:"Good morning! There's a meeting today at ten."},
      {speaker:"user",opts:["Qual é a pauta?","Reunião?","Não quero."],correct:0},
      {speaker:"bia",pt:"Vamos discutir o novo projeto. Traz seu notebook!",en:"We'll discuss the new project. Bring your laptop!"},
      {speaker:"user",opts:["Pode deixar! Vou preparar a apresentação.","Tá bom.","Amanhã."],correct:0}
    ]},
    {title:"Email etiquette",lines:[
      {speaker:"bia",pt:"Como começo um e-mail formal em português?",en:"How do I start a formal email in Portuguese?"},
      {speaker:"user",opts:["'Prezado(a)' ou 'Caro(a)' é o mais usado!","Oi?","Não sei."],correct:0},
      {speaker:"bia",pt:"E pra terminar? 'Atenciosamente'?",en:"And to end? 'Atenciosamente'?"},
      {speaker:"user",opts:["Isso! Ou 'Cordialmente'. Nunca 'Beijos' no trabalho!","Entendi!","Boa dica!"],correct:0}
    ]},
    {title:"Client meeting",lines:[
      {speaker:"bia",pt:"O cliente quer mudar o prazo do projeto.",en:"The client wants to change the project deadline."},
      {speaker:"user",opts:["Podemos negociar uma extensão de uma semana.","Impossível.","Difícil."],correct:0},
      {speaker:"bia",pt:"Boa ideia! Vou marcar uma call pra amanhã.",en:"Good idea! I'll schedule a call for tomorrow."},
      {speaker:"user",opts:["Prepara os dados antes! Precisamos de argumentos!","Combinado!","Vou preparar!"],correct:0}
    ]},
    {title:"Confidence boost",lines:[
      {speaker:"bia",pt:"Sabe o que eu percebi? Seu português melhorou muito!",en:"Know what I noticed? Your Portuguese improved a lot!"},
      {speaker:"user",opts:["Sério? Às vezes acho que não evoluo!","Obrigado!","Acha mesmo?"],correct:0},
      {speaker:"bia",pt:"Claro que sim! Olha quantas palavras você sabe!",en:"Of course! Look how many words you know!"},
      {speaker:"user",opts:["Obrigado, Bia! Vou continuar firme!","Motivado!","Valeu!"],correct:0}
    ]}
  ],
  50: [
    {title:"Phone call",lines:[
      {speaker:"bia",pt:"Alô? Quem fala?",en:"Hello? Who's speaking?"},
      {speaker:"user",opts:["Oi, sou eu! Posso falar com o Pedro?","Oi!","É engano."],correct:0},
      {speaker:"bia",pt:"Ele não está no momento. Quer deixar recado?",en:"He's not here right now. Want to leave a message?"},
      {speaker:"user",opts:["Pode dizer que eu liguei? Obrigado!","Não, obrigado.","Vou ligar depois."],correct:0}
    ]},
    {title:"Video call",lines:[
      {speaker:"bia",pt:"Quer fazer uma chamada de vídeo?",en:"Want to make a video call?"},
      {speaker:"user",opts:["Vamos! Minha câmera tá funcionando!","Agora?","Prefiro áudio."],correct:0},
      {speaker:"bia",pt:"Oi! Tá me ouvindo? A conexão tá boa?",en:"Hi! Can you hear me? Good connection?"},
      {speaker:"user",opts:["Sim! Te vejo e te ouço perfeitamente!","Tá falhando.","Agora sim!"],correct:0}
    ]},
    {title:"Wrong number",lines:[
      {speaker:"bia",pt:"Alô? É o consultório do Dr. Silva?",en:"Hello? Is this Dr. Silva's office?"},
      {speaker:"user",opts:["Não, é engano! Número errado!","Sim!","Quem?"],correct:0},
      {speaker:"bia",pt:"Desculpa! Liguei errado!",en:"Sorry! Wrong number!"},
      {speaker:"user",opts:["Sem problema! Acontece! Boa sorte!","Obrigado!","Tchau!"],correct:0}
    ]},
    {title:"Teaching a friend",lines:[
      {speaker:"bia",pt:"Ensina essa palavra pro seu amigo!",en:"Teach this word to your friend!"},
      {speaker:"user",opts:["Olha, em português se diz assim!","Tá bom!","Difícil."],correct:0},
      {speaker:"bia",pt:"Ele aprendeu! Você é um bom professor!",en:"He learned! You're a good teacher!"},
      {speaker:"user",opts:["Ensinar é a melhor forma de aprender!","Verdade!","Obrigado!"],correct:0}
    ]}
  ],
  51: [
    {title:"At university",lines:[
      {speaker:"bia",pt:"Em que faculdade você estuda?",en:"What university do you study at?"},
      {speaker:"user",opts:["Estudo engenharia na USP. E você?","Não estudo.","Já me formei."],correct:0},
      {speaker:"bia",pt:"Faço medicina! O vestibular foi difícil!",en:"I study medicine! The entrance exam was hard!"},
      {speaker:"user",opts:["Parabéns! Quando é a formatura?","Difícil mesmo!","Boa sorte!"],correct:0}
    ]},
    {title:"College life",lines:[
      {speaker:"bia",pt:"O vestibular foi muito difícil!",en:"The entrance exam was really hard!"},
      {speaker:"user",opts:["Imagino! Mas você passou! Parabéns!","Que pena.","Normal."],correct:0},
      {speaker:"bia",pt:"Agora preciso escolher as matérias!",en:"Now I need to choose my subjects!"},
      {speaker:"user",opts:["Escolhe as que você gosta! A faculdade é incrível!","Boa sorte!","Vai dar certo!"],correct:0}
    ]},
    {title:"Choosing a major",lines:[
      {speaker:"bia",pt:"Que curso você vai fazer na faculdade?",en:"What major are you going to study?"},
      {speaker:"user",opts:["Estou entre direito e medicina!","Engenharia.","Não sei."],correct:0},
      {speaker:"bia",pt:"Os dois são difíceis! Mas vale a pena!",en:"Both are hard! But worth it!"},
      {speaker:"user",opts:["Vou seguir meu coração! Medicina!","Boa escolha!","Força!"],correct:0}
    ]},
    {title:"Practice with Bia",lines:[
      {speaker:"bia",pt:"Vamos praticar mais uma vez?",en:"Let's practice one more time?"},
      {speaker:"user",opts:["Sim! Repetição é importante pra memorizar!","Bora!","De novo?"],correct:0},
      {speaker:"bia",pt:"Muito bem! Você está melhorando rápido!",en:"Very good! You're improving fast!"},
      {speaker:"user",opts:["Valeu, Bia! Cada dia um pouco melhor!","Obrigado!","Continuando!"],correct:0}
    ]}
  ],
  52: [
    {title:"At the bank",lines:[
      {speaker:"bia",pt:"Boa tarde! Posso ajudar?",en:"Good afternoon! Can I help?"},
      {speaker:"user",opts:["Quero abrir uma conta, por favor.","Preciso de dinheiro.","Oi!"],correct:0},
      {speaker:"bia",pt:"Claro! Você tem CPF? Preciso dos seus documentos.",en:"Of course! Do you have a CPF? I need your documents."},
      {speaker:"user",opts:["Sim, aqui está. Aceita Pix?","O que é CPF?","Não tenho."],correct:0}
    ]},
    {title:"ATM trouble",lines:[
      {speaker:"bia",pt:"O caixa eletrônico engoliu meu cartão!",en:"The ATM swallowed my card!"},
      {speaker:"user",opts:["Que horror! Liga pro banco agora!","Calma!","Eita!"],correct:0},
      {speaker:"bia",pt:"Preciso bloquear antes que alguém use!",en:"I need to block it before someone uses it!"},
      {speaker:"user",opts:["Rápido! O número tá atrás do cartão... ah, não tá!","Liga 0800!","Vai ao banco!"],correct:0}
    ]},
    {title:"Pix payment",lines:[
      {speaker:"bia",pt:"Aceita Pix? Não trouxe dinheiro!",en:"Do you accept Pix? I didn't bring cash!"},
      {speaker:"user",opts:["Aceito sim! Aqui a chave: CPF!","Só dinheiro.","Cartão?"],correct:0},
      {speaker:"bia",pt:"Pronto! Transferi! Chegou?",en:"Done! I transferred! Did it arrive?"},
      {speaker:"user",opts:["Chegou! Pix é a melhor coisa do Brasil!","Demais!","Rápido né!"],correct:0}
    ]},
    {title:"Real life moment",lines:[
      {speaker:"bia",pt:"Imagina que você está no Brasil agora!",en:"Imagine you're in Brazil right now!"},
      {speaker:"user",opts:["Legal! O que eu falo primeiro?","Oi Brasil!","Estou pronto!"],correct:0},
      {speaker:"bia",pt:"Usa o que aprendeu! Confia em você!",en:"Use what you learned! Trust yourself!"},
      {speaker:"user",opts:["Vou falar com confiança! Português é lindo!","Bora!","Consegui!"],correct:0}
    ]}
  ],
  53: [
    {title:"Planning a meeting",lines:[
      {speaker:"bia",pt:"Temos uma reunião amanhã. Pode confirmar?",en:"We have a meeting tomorrow. Can you confirm?"},
      {speaker:"user",opts:["Confirmado! Qual é o horário?","Talvez.","Não posso."],correct:0},
      {speaker:"bia",pt:"Às duas da tarde. Traz a pauta atualizada!",en:"At 2pm. Bring the updated agenda!"},
      {speaker:"user",opts:["Pode deixar! Vou preparar tudo.","Ok.","Combinado!"],correct:0}
    ]},
    {title:"Event planning",lines:[
      {speaker:"bia",pt:"Vamos organizar um churrasco no domingo?",en:"Let's organize a barbecue on Sunday?"},
      {speaker:"user",opts:["Boa! Eu levo a carne e a cerveja!","Vamos!","Não posso."],correct:0},
      {speaker:"bia",pt:"Perfeito! Eu cuido da salada e do farofa!",en:"I'll handle salad and farofa!"},
      {speaker:"user",opts:["Combinado! Chama todo mundo!","Fechou!","Vai ser bom!"],correct:0}
    ]},
    {title:"Potluck",lines:[
      {speaker:"bia",pt:"Cada um traz um prato pro jantar!",en:"Everyone brings a dish to dinner!"},
      {speaker:"user",opts:["Eu levo uma torta de frango!","Boa!","O que levo?"],correct:0},
      {speaker:"bia",pt:"Legal! E quem traz a bebida?",en:"Cool! And who's bringing drinks?"},
      {speaker:"user",opts:["Eu trago cerveja e refrigerante! Fechado!","Combinado!","Vou levar suco!"],correct:0}
    ]},
    {title:"Vocabulary game",lines:[
      {speaker:"bia",pt:"Vamos jogar! Eu falo em português, você traduz!",en:"Let's play! I say it in Portuguese, you translate!"},
      {speaker:"user",opts:["Bora! Estou pronto! Manda!","Vamos!","Pode falar."],correct:0},
      {speaker:"bia",pt:"Acertou tudo! Você é craque!",en:"You got everything right! You're a star!"},
      {speaker:"user",opts:["Quero jogar de novo! É divertido aprender assim!","Mais uma!","Valeu!"],correct:0}
    ]}
  ],
  54: [
    {title:"Office chat",lines:[
      {speaker:"bia",pt:"Ei, vamos pro happy hour depois do trabalho?",en:"Hey, let's go to happy hour after work?"},
      {speaker:"user",opts:["Bora! Chama os colegas também!","Hoje não dá.","Talvez."],correct:0},
      {speaker:"bia",pt:"Já chamei! O chefe disse que vai também!",en:"Already did! The boss said he's coming too!"},
      {speaker:"user",opts:["Que legal! Vai ser divertido!","Nossa!","Sério?"],correct:0}
    ]},
    {title:"Lunch break",lines:[
      {speaker:"bia",pt:"Vamos almoçar? Tô morrendo de fome!",en:"Let's have lunch? I'm starving!"},
      {speaker:"user",opts:["Bora! Tem um restaurante por quilo ali perto.","Agora?","Trouxe marmita."],correct:0},
      {speaker:"bia",pt:"Ótimo! O buffet de lá é muito bom!",en:"Great! Their buffet is really good!"},
      {speaker:"user",opts:["Massa! Depois tomo um cafezinho!","Vamos!","Quero sushi."],correct:0}
    ]},
    {title:"Printer jam",lines:[
      {speaker:"bia",pt:"A impressora travou de novo!",en:"The printer jammed again!"},
      {speaker:"user",opts:["Abre e tira o papel preso!","Que raiva!","Chama o TI."],correct:0},
      {speaker:"bia",pt:"Consegui! Mas acabou o toner!",en:"Got it! But the toner ran out!"},
      {speaker:"user",opts:["Pede pro escritório comprar! Problema resolvido!","Boa!","Finalmente!"],correct:0}
    ]},
    {title:"Confidence boost",lines:[
      {speaker:"bia",pt:"Sabe o que eu percebi? Seu português melhorou muito!",en:"Know what I noticed? Your Portuguese improved a lot!"},
      {speaker:"user",opts:["Sério? Às vezes acho que não evoluo!","Obrigado!","Acha mesmo?"],correct:0},
      {speaker:"bia",pt:"Claro que sim! Olha quantas palavras você sabe!",en:"Of course! Look how many words you know!"},
      {speaker:"user",opts:["Obrigado, Bia! Vou continuar firme!","Motivado!","Valeu!"],correct:0}
    ]}
  ],
  55: [
    {title:"Job interview",lines:[
      {speaker:"bia",pt:"Me fale sobre sua experiência profissional.",en:"Tell me about your work experience."},
      {speaker:"user",opts:["Trabalhei cinco anos como gerente.","Gosto de trabalhar.","Preciso de emprego."],correct:0},
      {speaker:"bia",pt:"Interessante! Quais são seus pontos fortes?",en:"Interesting! What are your strengths?"},
      {speaker:"user",opts:["Sou organizado e trabalho bem em equipe.","Sou legal.","Não sei."],correct:0}
    ]},
    {title:"Salary talk",lines:[
      {speaker:"bia",pt:"Quanto é o salário? Tem benefícios?",en:"What's the salary? Are there benefits?"},
      {speaker:"user",opts:["O salário é negociável! Tem vale-refeição e plano de saúde!","Bom!","Pouco."],correct:0},
      {speaker:"bia",pt:"Ótimo! Quando posso começar?",en:"Great! When can I start?"},
      {speaker:"user",opts:["Segunda-feira! Bem-vindo à equipe!","Perfeito!","Obrigado!"],correct:0}
    ]},
    {title:"Resume tips",lines:[
      {speaker:"bia",pt:"Meu currículo está bom? Pode dar uma olhada?",en:"Is my resume good? Can you take a look?"},
      {speaker:"user",opts:["Claro! Coloca mais detalhes na experiência!","Tá ótimo.","Muda tudo."],correct:0},
      {speaker:"bia",pt:"E o objetivo? Preciso ser mais específico?",en:"And the objective? Should I be more specific?"},
      {speaker:"user",opts:["Sim! Personaliza pra cada vaga! Faz diferença!","Boa dica!","Vou mudar!"],correct:0}
    ]},
    {title:"Teaching a friend",lines:[
      {speaker:"bia",pt:"Ensina essa palavra pro seu amigo!",en:"Teach this word to your friend!"},
      {speaker:"user",opts:["Olha, em português se diz assim!","Tá bom!","Difícil."],correct:0},
      {speaker:"bia",pt:"Ele aprendeu! Você é um bom professor!",en:"He learned! You're a good teacher!"},
      {speaker:"user",opts:["Ensinar é a melhor forma de aprender!","Verdade!","Obrigado!"],correct:0}
    ]}
  ],
  56: [
    {title:"Negotiating",lines:[
      {speaker:"bia",pt:"O preço está muito alto. Dá pra fazer um desconto?",en:"The price is too high. Can you give a discount?"},
      {speaker:"user",opts:["Posso fazer dez por cento de desconto.","Não.","Quanto quer pagar?"],correct:0},
      {speaker:"bia",pt:"Se eu pagar à vista, fica mais barato?",en:"If I pay cash, is it cheaper?"},
      {speaker:"user",opts:["Sim! À vista tem quinze por cento de desconto!","Talvez.","Mesmo preço."],correct:0}
    ]},
    {title:"Closing a deal",lines:[
      {speaker:"bia",pt:"Posso pagar em doze vezes?",en:"Can I pay in 12 installments?"},
      {speaker:"user",opts:["Pode! Mas à vista tem desconto de vinte por cento.","Não.","Depende."],correct:0},
      {speaker:"bia",pt:"Vinte? Fechou! Vou pagar à vista!",en:"Twenty? Deal! I'll pay cash!"},
      {speaker:"user",opts:["Ótimo negócio! Prazer fazer negócio!","Valeu!","Feito!"],correct:0}
    ]},
    {title:"Bulk deal",lines:[
      {speaker:"bia",pt:"Se eu comprar cem unidades, tem desconto?",en:"If I buy a hundred units, is there a discount?"},
      {speaker:"user",opts:["Pra cem, faço trinta por cento!","Vinte?","Quanto?"],correct:0},
      {speaker:"bia",pt:"E se for duzentas?",en:"And if it's two hundred?"},
      {speaker:"user",opts:["Quarenta por cento! Melhor preço do mercado!","Fechado!","Vou pensar."],correct:0}
    ]},
    {title:"Practice with Bia",lines:[
      {speaker:"bia",pt:"Vamos praticar mais uma vez?",en:"Let's practice one more time?"},
      {speaker:"user",opts:["Sim! Repetição é importante pra memorizar!","Bora!","De novo?"],correct:0},
      {speaker:"bia",pt:"Muito bem! Você está melhorando rápido!",en:"Very good! You're improving fast!"},
      {speaker:"user",opts:["Valeu, Bia! Cada dia um pouco melhor!","Obrigado!","Continuando!"],correct:0}
    ]}
  ],
  57: [
    {title:"Giving a presentation",lines:[
      {speaker:"bia",pt:"Bom dia a todos! Vou apresentar os resultados.",en:"Good morning everyone! I'll present the results."},
      {speaker:"user",opts:["O gráfico mostra um aumento de vinte por cento.","Legal.","Continue."],correct:0},
      {speaker:"bia",pt:"Excelente! Alguma pergunta?",en:"Excellent! Any questions?"},
      {speaker:"user",opts:["Qual é a meta para o próximo trimestre?","Não.","Muito bom!"],correct:0}
    ]},
    {title:"Q&A session",lines:[
      {speaker:"bia",pt:"Alguém tem dúvidas sobre o projeto?",en:"Does anyone have questions about the project?"},
      {speaker:"user",opts:["Qual é o prazo de entrega?","Não.","Está claro."],correct:0},
      {speaker:"bia",pt:"O prazo é sexta-feira. Preciso do relatório!",en:"Deadline is Friday. I need the report!"},
      {speaker:"user",opts:["Pode deixar! Vou entregar na quinta!","Ok!","Combinado!"],correct:0}
    ]},
    {title:"Tech demo",lines:[
      {speaker:"bia",pt:"Olha esse gráfico! As vendas subiram quarenta por cento!",en:"Look at this chart! Sales rose forty percent!"},
      {speaker:"user",opts:["Impressionante! O que causou isso?","Boa!","Sério?"],correct:0},
      {speaker:"bia",pt:"Nossa campanha de marketing digital!",en:"Our digital marketing campaign!"},
      {speaker:"user",opts:["Parabéns à equipe! Resultado incrível!","Arrasaram!","Quero saber mais."],correct:0}
    ]},
    {title:"Real life moment",lines:[
      {speaker:"bia",pt:"Imagina que você está no Brasil agora!",en:"Imagine you're in Brazil right now!"},
      {speaker:"user",opts:["Legal! O que eu falo primeiro?","Oi Brasil!","Estou pronto!"],correct:0},
      {speaker:"bia",pt:"Usa o que aprendeu! Confia em você!",en:"Use what you learned! Trust yourself!"},
      {speaker:"user",opts:["Vou falar com confiança! Português é lindo!","Bora!","Consegui!"],correct:0}
    ]}
  ],
  58: [
    {title:"Solving a problem",lines:[
      {speaker:"bia",pt:"Temos um problema sério no projeto!",en:"We have a serious problem with the project!"},
      {speaker:"user",opts:["Calma! Vamos dar um jeito. Qual é o problema?","Eita!","Difícil."],correct:0},
      {speaker:"bia",pt:"O prazo é amanhã e falta muito trabalho!",en:"The deadline is tomorrow and there's a lot left!"},
      {speaker:"user",opts:["Bora resolver! Vamos dividir as tarefas!","Complicado.","Pede mais tempo."],correct:0}
    ]},
    {title:"Creative solution",lines:[
      {speaker:"bia",pt:"O sistema caiu! Como resolvemos?",en:"The system is down! How do we fix it?"},
      {speaker:"user",opts:["Vamos reiniciar o servidor e testar!","Sei lá.","Chama TI."],correct:0},
      {speaker:"bia",pt:"Funcionou! Você é um gênio!",en:"It worked! You're a genius!"},
      {speaker:"user",opts:["Que nada! A gente sempre dá um jeito!","Valeu!","Trabalho em equipe!"],correct:0}
    ]},
    {title:"Deadline crunch",lines:[
      {speaker:"bia",pt:"O cliente precisa do relatório pra ontem!",en:"The client needs the report yesterday!"},
      {speaker:"user",opts:["Calma! Divide as tarefas e a gente resolve!","Impossível!","Pede prazo."],correct:0},
      {speaker:"bia",pt:"Eu faço os gráficos, você escreve o texto!",en:"I'll do the charts, you write the text!"},
      {speaker:"user",opts:["Combinado! Em duas horas tá pronto!","Bora!","Vamos conseguir!"],correct:0}
    ]},
    {title:"Vocabulary game",lines:[
      {speaker:"bia",pt:"Vamos jogar! Eu falo em português, você traduz!",en:"Let's play! I say it in Portuguese, you translate!"},
      {speaker:"user",opts:["Bora! Estou pronto! Manda!","Vamos!","Pode falar."],correct:0},
      {speaker:"bia",pt:"Acertou tudo! Você é craque!",en:"You got everything right! You're a star!"},
      {speaker:"user",opts:["Quero jogar de novo! É divertido aprender assim!","Mais uma!","Valeu!"],correct:0}
    ]}
  ],
  59: [
    {title:"Music and dance",lines:[
      {speaker:"bia",pt:"Você gosta de samba?",en:"Do you like samba?"},
      {speaker:"user",opts:["Adoro! Quero aprender a dançar!","Mais ou menos.","Prefiro rock."],correct:0},
      {speaker:"bia",pt:"Vou te ensinar! O ritmo é assim: um-dois, um-dois!",en:"I'll teach you! The rhythm goes like this: one-two, one-two!"},
      {speaker:"user",opts:["Que divertido! Também gosto de forró!","Legal!","É difícil?"],correct:0}
    ]},
    {title:"Dance lesson",lines:[
      {speaker:"bia",pt:"Vou te ensinar samba no pé!",en:"I'll teach you samba footwork!"},
      {speaker:"user",opts:["Bora! Sou péssimo mas quero aprender!","Não sei dançar.","Tenho vergonha."],correct:0},
      {speaker:"bia",pt:"Relaxa! Primeiro sente o ritmo do pandeiro!",en:"Relax! First feel the tambourine rhythm!"},
      {speaker:"user",opts:["Tô sentindo! Um-dois, um-dois! Aí sim!","Difícil!","Que divertido!"],correct:0}
    ]},
    {title:"Carnival prep",lines:[
      {speaker:"bia",pt:"Carnaval tá chegando! Vai desfilar?",en:"Carnival is coming! Are you going to parade?"},
      {speaker:"user",opts:["Quero! Preciso de fantasia!","Só assistir.","Bora!"],correct:0},
      {speaker:"bia",pt:"Vamos de escola de samba! Samba no pé!",en:"Let's go with a samba school! Samba footwork!"},
      {speaker:"user",opts:["Preciso praticar! O ritmo é contagiante!","Demais!","Vou tentar!"],correct:0}
    ]},
    {title:"Confidence boost",lines:[
      {speaker:"bia",pt:"Sabe o que eu percebi? Seu português melhorou muito!",en:"Know what I noticed? Your Portuguese improved a lot!"},
      {speaker:"user",opts:["Sério? Às vezes acho que não evoluo!","Obrigado!","Acha mesmo?"],correct:0},
      {speaker:"bia",pt:"Claro que sim! Olha quantas palavras você sabe!",en:"Of course! Look how many words you know!"},
      {speaker:"user",opts:["Obrigado, Bia! Vou continuar firme!","Motivado!","Valeu!"],correct:0}
    ]}
  ],
  60: [
    {title:"Ordering Brazilian food",lines:[
      {speaker:"bia",pt:"Hoje tem feijoada completa! Quer experimentar?",en:"Today we have complete feijoada! Want to try?"},
      {speaker:"user",opts:["Quero! Vem com arroz e farofa?","O que é isso?","Não, obrigado."],correct:0},
      {speaker:"bia",pt:"Sim! E de sobremesa tem brigadeiro caseiro!",en:"Yes! And for dessert there's homemade brigadeiro!"},
      {speaker:"user",opts:["Perfeito! Adoro brigadeiro!","Quanto custa?","Só água."],correct:0}
    ]},
    {title:"Quick review",lines:[
      {speaker:"bia",pt:"Vamos praticar? O que você aprendeu?",en:"Let's practice? What did you learn?"},
      {speaker:"user",opts:["Aprendi muitas palavras novas!","Bastante!","Pouco."],correct:0},
      {speaker:"bia",pt:"Ótimo! Prática é o segredo da fluência!",en:"Great! Practice is the secret to fluency!"},
      {speaker:"user",opts:["Vou continuar estudando todo dia!","Com certeza!","Sempre!"],correct:0}
    ]},
    {title:"Street food tour",lines:[
      {speaker:"bia",pt:"Vamos fazer um tour de comida de rua!",en:"Let's do a street food tour!"},
      {speaker:"user",opts:["Primeiro parada: acarajé baiano! Tem dendê!","Bora!","O que é?"],correct:0},
      {speaker:"bia",pt:"Depois: pastel de feira com caldo de cana!",en:"Then: market pastel with sugarcane juice!"},
      {speaker:"user",opts:["E pra fechar: churros com doce de leite!","Delícia!","Quero tudo!"],correct:0}
    ]},
    {title:"Teaching a friend",lines:[
      {speaker:"bia",pt:"Ensina essa palavra pro seu amigo!",en:"Teach this word to your friend!"},
      {speaker:"user",opts:["Olha, em português se diz assim!","Tá bom!","Difícil."],correct:0},
      {speaker:"bia",pt:"Ele aprendeu! Você é um bom professor!",en:"He learned! You're a good teacher!"},
      {speaker:"user",opts:["Ensinar é a melhor forma de aprender!","Verdade!","Obrigado!"],correct:0}
    ]}
  ],
  61: [
    {title:"Brazilian geography",lines:[
      {speaker:"bia",pt:"O Brasil tem vinte e seis estados. Qual você quer visitar?",en:"Brazil has 26 states. Which do you want to visit?"},
      {speaker:"user",opts:["Quero ir à Bahia! Fica no Nordeste, né?","Rio!","Todos!"],correct:0},
      {speaker:"bia",pt:"Isso! O Nordeste tem praias lindas e comida incrível!",en:"Right! The Northeast has beautiful beaches and incredible food!"},
      {speaker:"user",opts:["E a Amazônia? Fica na região Norte?","Quero ir!","Demais!"],correct:0}
    ]},
    {title:"States quiz",lines:[
      {speaker:"bia",pt:"Qual é a capital do Brasil?",en:"What's Brazil's capital?"},
      {speaker:"user",opts:["Brasília! Muita gente acha que é o Rio!","São Paulo!","Rio?"],correct:0},
      {speaker:"bia",pt:"Isso! E qual é o maior estado?",en:"Right! And what's the biggest state?"},
      {speaker:"user",opts:["Amazonas! É enorme! Maior que muitos países!","Minas?","Bahia?"],correct:0}
    ]},
    {title:"River geography",lines:[
      {speaker:"bia",pt:"Qual é o maior rio do Brasil?",en:"What's the biggest river in Brazil?"},
      {speaker:"user",opts:["O Rio Amazonas! É o mais longo do mundo!","São Francisco?","Paraná?"],correct:0},
      {speaker:"bia",pt:"E o Rio São Francisco? Fica onde?",en:"And the São Francisco River? Where is it?"},
      {speaker:"user",opts:["Atravessa o Nordeste! Chamam de 'Velho Chico'!","Legal!","Quero visitar!"],correct:0}
    ]},
    {title:"Practice with Bia",lines:[
      {speaker:"bia",pt:"Vamos praticar mais uma vez?",en:"Let's practice one more time?"},
      {speaker:"user",opts:["Sim! Repetição é importante pra memorizar!","Bora!","De novo?"],correct:0},
      {speaker:"bia",pt:"Muito bem! Você está melhorando rápido!",en:"Very good! You're improving fast!"},
      {speaker:"user",opts:["Valeu, Bia! Cada dia um pouco melhor!","Obrigado!","Continuando!"],correct:0}
    ]}
  ],
  62: [
    {title:"Brazilian holidays",lines:[
      {speaker:"bia",pt:"Qual é o seu feriado favorito no Brasil?",en:"What's your favorite Brazilian holiday?"},
      {speaker:"user",opts:["Adoro a Festa Junina! Tem milho e quadrilha!","Carnaval!","Natal."],correct:0},
      {speaker:"bia",pt:"Festa Junina é demais! Você dança forró?",en:"Festa Junina is amazing! Do you dance forró?"},
      {speaker:"user",opts:["Danço sim! Adoro a música!","Ainda não aprendi.","Quero aprender!"],correct:0}
    ]},
    {title:"Festa Junina",lines:[
      {speaker:"bia",pt:"Vamos pra Festa Junina! Tem paçoca e quentão!",en:"Let's go to Festa Junina! There's paçoca and mulled wine!"},
      {speaker:"user",opts:["Adoro! Vou vestir camisa xadrez!","O que é isso?","Bora!"],correct:0},
      {speaker:"bia",pt:"Vamos dançar quadrilha! Anarriê!",en:"Let's dance quadrilha! Promenade!"},
      {speaker:"user",opts:["Olha a fogueira! E o milho assado!","Que divertido!","Quero pamonha!"],correct:0}
    ]},
    {title:"Christmas in summer",lines:[
      {speaker:"bia",pt:"Natal no Brasil é de bermuda e chinelo!",en:"Christmas in Brazil is shorts and flip-flops!"},
      {speaker:"user",opts:["Estranho pra quem é do Norte! Neve no Natal!","Diferente!","Adoro!"],correct:0},
      {speaker:"bia",pt:"Aqui tem churrasco de Natal na beira da piscina!",en:"Here there's Christmas BBQ by the pool!"},
      {speaker:"user",opts:["Quero passar o Natal no Brasil! Parece incrível!","Bora!","Sonho!"],correct:0}
    ]},
    {title:"Real life moment",lines:[
      {speaker:"bia",pt:"Imagina que você está no Brasil agora!",en:"Imagine you're in Brazil right now!"},
      {speaker:"user",opts:["Legal! O que eu falo primeiro?","Oi Brasil!","Estou pronto!"],correct:0},
      {speaker:"bia",pt:"Usa o que aprendeu! Confia em você!",en:"Use what you learned! Trust yourself!"},
      {speaker:"user",opts:["Vou falar com confiança! Português é lindo!","Bora!","Consegui!"],correct:0}
    ]}
  ],
  63: [
    {title:"Watching soccer",lines:[
      {speaker:"bia",pt:"Vai ter jogo do Brasil hoje! Você torce pra quem?",en:"Brazil is playing today! Who do you root for?"},
      {speaker:"user",opts:["Torço pro Brasil, claro!","Não assisto futebol.","Gol!"],correct:0},
      {speaker:"bia",pt:"GOOOL! Neymar marcou! Que jogada incrível!",en:"GOAAL! Neymar scored! What an incredible play!"},
      {speaker:"user",opts:["Que craque! Brasil vai ganhar!","Bonito!","Impedimento!"],correct:0}
    ]},
    {title:"Quick review",lines:[
      {speaker:"bia",pt:"Vamos praticar? O que você aprendeu?",en:"Let's practice? What did you learn?"},
      {speaker:"user",opts:["Aprendi muitas palavras novas!","Bastante!","Pouco."],correct:0},
      {speaker:"bia",pt:"Ótimo! Prática é o segredo da fluência!",en:"Great! Practice is the secret to fluency!"},
      {speaker:"user",opts:["Vou continuar estudando todo dia!","Com certeza!","Sempre!"],correct:0}
    ]},
    {title:"World Cup memories",lines:[
      {speaker:"bia",pt:"Você lembra da Copa de 2014 no Brasil?",en:"Do you remember the 2014 World Cup in Brazil?"},
      {speaker:"user",opts:["O 7x1 contra a Alemanha! Ninguém esquece!","Não vi.","Triste!"],correct:0},
      {speaker:"bia",pt:"O Brasil inteiro chorou naquele dia!",en:"All of Brazil cried that day!"},
      {speaker:"user",opts:["Mas o futebol brasileiro sempre volta mais forte!","Verdade!","É a vida!"],correct:0}
    ]},
    {title:"Vocabulary game",lines:[
      {speaker:"bia",pt:"Vamos jogar! Eu falo em português, você traduz!",en:"Let's play! I say it in Portuguese, you translate!"},
      {speaker:"user",opts:["Bora! Estou pronto! Manda!","Vamos!","Pode falar."],correct:0},
      {speaker:"bia",pt:"Acertou tudo! Você é craque!",en:"You got everything right! You're a star!"},
      {speaker:"user",opts:["Quero jogar de novo! É divertido aprender assim!","Mais uma!","Valeu!"],correct:0}
    ]}
  ],
  64: [
    {title:"Art and literature",lines:[
      {speaker:"bia",pt:"Você já leu algum livro brasileiro?",en:"Have you read any Brazilian books?"},
      {speaker:"user",opts:["Li Machado de Assis! É incrível!","Ainda não.","Quero ler."],correct:0},
      {speaker:"bia",pt:"Ele é o maior escritor brasileiro! Já viu a exposição no museu?",en:"He's Brazil's greatest writer! Have you seen the museum exhibition?"},
      {speaker:"user",opts:["Não! Vamos ver juntos? Adoro arte!","Quero ir!","Não sabia."],correct:0}
    ]},
    {title:"Bookstore",lines:[
      {speaker:"bia",pt:"Vamos à livraria? Quero um livro de poesia!",en:"Let's go to the bookstore? I want a poetry book!"},
      {speaker:"user",opts:["Bora! Eu quero um romance brasileiro.","Boa!","Online."],correct:0},
      {speaker:"bia",pt:"Olha esse de Clarice Lispector! É lindo!",en:"Look at this Clarice Lispector! Beautiful!"},
      {speaker:"user",opts:["Adoro ela! A escrita é profunda!","Quero ler!","Quem é?"],correct:0}
    ]},
    {title:"Poetry reading",lines:[
      {speaker:"bia",pt:"Vamos a um sarau de poesia?",en:"Let's go to a poetry reading?"},
      {speaker:"user",opts:["Nunca fui! O que é sarau?","Bora!","Não gosto."],correct:0},
      {speaker:"bia",pt:"É um evento onde as pessoas leem poemas e textos!",en:"It's an event where people read poems and texts!"},
      {speaker:"user",opts:["Que cultural! Quero ouvir poesia em português!","Lindo!","Vamos!"],correct:0}
    ]},
    {title:"Confidence boost",lines:[
      {speaker:"bia",pt:"Sabe o que eu percebi? Seu português melhorou muito!",en:"Know what I noticed? Your Portuguese improved a lot!"},
      {speaker:"user",opts:["Sério? Às vezes acho que não evoluo!","Obrigado!","Acha mesmo?"],correct:0},
      {speaker:"bia",pt:"Claro que sim! Olha quantas palavras você sabe!",en:"Of course! Look how many words you know!"},
      {speaker:"user",opts:["Obrigado, Bia! Vou continuar firme!","Motivado!","Valeu!"],correct:0}
    ]}
  ],
  65: [
    {title:"Street life",lines:[
      {speaker:"bia",pt:"Vamos dar uma volta pelo centro?",en:"Let's take a walk downtown?"},
      {speaker:"user",opts:["Bora! Quero ver os camelôs e barracas!","Tá quente.","Vamos!"],correct:0},
      {speaker:"bia",pt:"Olha aquele artista de rua! Tá tocando violão!",en:"Look at that street artist! He's playing guitar!"},
      {speaker:"user",opts:["Que talentoso! A rua é tão viva aqui!","Legal!","Bonito!"],correct:0}
    ]},
    {title:"Street food",lines:[
      {speaker:"bia",pt:"Olha o carrinho de cachorro-quente!",en:"Look at the hot dog cart!"},
      {speaker:"user",opts:["Quero um com tudo! Catupiry e batata palha!","Não gosto.","Quanto?"],correct:0},
      {speaker:"bia",pt:"Hmm! E vamos tomar caldo de cana depois!",en:"Yum! Let's have sugarcane juice after!"},
      {speaker:"user",opts:["Delícia! Comida de rua brasileira é a melhor!","Boa!","Quero mais!"],correct:0}
    ]},
    {title:"Food truck",lines:[
      {speaker:"bia",pt:"Olha o food truck de tapioca! Vamos?",en:"Look at the tapioca food truck! Let's go?"},
      {speaker:"user",opts:["Quero uma de queijo com presunto!","Bora!","Tô sem fome."],correct:0},
      {speaker:"bia",pt:"E um caldo de cana bem gelado!",en:"And an ice-cold sugarcane juice!"},
      {speaker:"user",opts:["A comida de rua do Brasil é viciante!","Demais!","Concordo!"],correct:0}
    ]},
    {title:"Teaching a friend",lines:[
      {speaker:"bia",pt:"Ensina essa palavra pro seu amigo!",en:"Teach this word to your friend!"},
      {speaker:"user",opts:["Olha, em português se diz assim!","Tá bom!","Difícil."],correct:0},
      {speaker:"bia",pt:"Ele aprendeu! Você é um bom professor!",en:"He learned! You're a good teacher!"},
      {speaker:"user",opts:["Ensinar é a melhor forma de aprender!","Verdade!","Obrigado!"],correct:0}
    ]}
  ],
  66: [
    {title:"At the market",lines:[
      {speaker:"bia",pt:"Vamos à feira? Preciso comprar frutas.",en:"Let's go to the market? I need to buy fruit."},
      {speaker:"user",opts:["Quanto custa o quilo de manga?","Vamos!","Não gosto de feira."],correct:0},
      {speaker:"bia",pt:"Três reais! Tá barato hoje! Quer pechinchar?",en:"Three reais! Cheap today! Want to haggle?"},
      {speaker:"user",opts:["Leva por dois? Me vê dois quilos!","Tá bom assim.","Caro!"],correct:0}
    ]},
    {title:"Bargaining",lines:[
      {speaker:"bia",pt:"Moço, essa camiseta por dez reais?",en:"Sir, this shirt for ten reais?"},
      {speaker:"user",opts:["Dez é muito pouco! Vinte!","Tá caro.","Tá bom."],correct:0},
      {speaker:"bia",pt:"Que tal quinze? Levo duas!",en:"How about fifteen? I'll take two!"},
      {speaker:"user",opts:["Fechado! Quinze cada, duas por trinta!","Deal!","Valeu!"],correct:0}
    ]},
    {title:"Antique fair",lines:[
      {speaker:"bia",pt:"Olha esse disco de vinil! É raridade!",en:"Look at this vinyl record! It's rare!"},
      {speaker:"user",opts:["Quanto o senhor quer por ele?","Bonito!","Velho."],correct:0},
      {speaker:"bia",pt:"Cinquenta, mas faço quarenta pra você!",en:"Fifty, but I'll do forty for you!"},
      {speaker:"user",opts:["Trinta e cinco e levo dois!","Fechado!","Muito caro."],correct:0}
    ]},
    {title:"Practice with Bia",lines:[
      {speaker:"bia",pt:"Vamos praticar mais uma vez?",en:"Let's practice one more time?"},
      {speaker:"user",opts:["Sim! Repetição é importante pra memorizar!","Bora!","De novo?"],correct:0},
      {speaker:"bia",pt:"Muito bem! Você está melhorando rápido!",en:"Very good! You're improving fast!"},
      {speaker:"user",opts:["Valeu, Bia! Cada dia um pouco melhor!","Obrigado!","Continuando!"],correct:0}
    ]}
  ],
  67: [
    {title:"Religion in Brazil",lines:[
      {speaker:"bia",pt:"No Brasil tem muitas religiões diferentes.",en:"In Brazil there are many different religions."},
      {speaker:"user",opts:["Sei! Tem católicos, evangélicos, e religiões afro-brasileiras.","Interessante.","Qual a maior?"],correct:0},
      {speaker:"bia",pt:"Isso! E muitos dizem 'Se Deus quiser' no dia a dia!",en:"Right! And many say 'God willing' in daily life!"},
      {speaker:"user",opts:["Fica com Deus! É uma expressão bonita.","Legal!","Entendi."],correct:0}
    ]},
    {title:"Faith talk",lines:[
      {speaker:"bia",pt:"Amanhã é domingo. Você vai à missa?",en:"Tomorrow is Sunday. Are you going to mass?"},
      {speaker:"user",opts:["Não sou católico, mas respeito todas as religiões.","Vou sim!","Não vou."],correct:0},
      {speaker:"bia",pt:"Claro! O importante é ter fé e ser boa pessoa!",en:"Of course! What matters is having faith and being a good person!"},
      {speaker:"user",opts:["Concordo! Que Deus abençoe!","Amém!","Verdade!"],correct:0}
    ]},
    {title:"Blessing",lines:[
      {speaker:"bia",pt:"Bênção, vovó!",en:"Bless me, grandma!"},
      {speaker:"user",opts:["Deus te abençoe, meu filho!","Amém!","Obrigado."],correct:0},
      {speaker:"bia",pt:"A bênção é uma tradição linda no Brasil!",en:"Blessing is a beautiful Brazilian tradition!"},
      {speaker:"user",opts:["Mostra respeito pelos mais velhos! Adoro!","Verdade!","Lindo!"],correct:0}
    ]},
    {title:"Real life moment",lines:[
      {speaker:"bia",pt:"Imagina que você está no Brasil agora!",en:"Imagine you're in Brazil right now!"},
      {speaker:"user",opts:["Legal! O que eu falo primeiro?","Oi Brasil!","Estou pronto!"],correct:0},
      {speaker:"bia",pt:"Usa o que aprendeu! Confia em você!",en:"Use what you learned! Trust yourself!"},
      {speaker:"user",opts:["Vou falar com confiança! Português é lindo!","Bora!","Consegui!"],correct:0}
    ]}
  ],
  68: [
    {title:"Brazilian music genres",lines:[
      {speaker:"bia",pt:"Qual gênero de música brasileira você prefere?",en:"Which Brazilian music genre do you prefer?"},
      {speaker:"user",opts:["Gosto de MPB e bossa nova!","Sertanejo!","Funk!"],correct:0},
      {speaker:"bia",pt:"Bom gosto! Já ouviu Tom Jobim? 'Garota de Ipanema'?",en:"Good taste! Have you heard Tom Jobim? 'Girl from Ipanema'?"},
      {speaker:"user",opts:["Claro! É a música brasileira mais famosa do mundo!","Ainda não.","Adoro!"],correct:0}
    ]},
    {title:"Playlist",lines:[
      {speaker:"bia",pt:"Monta uma playlist de música brasileira pra mim!",en:"Make me a Brazilian music playlist!"},
      {speaker:"user",opts:["Bora! Tom Jobim, Gilberto Gil, Caetano Veloso...","Sertanejo!","Funk!"],correct:0},
      {speaker:"bia",pt:"Põe Jorge Ben Jor também! E Elis Regina!",en:"Add Jorge Ben Jor too! And Elis Regina!"},
      {speaker:"user",opts:["Pronto! A melhor playlist de MPB do mundo!","Perfeita!","Adicionei!"],correct:0}
    ]},
    {title:"Karaoke night",lines:[
      {speaker:"bia",pt:"Vamos cantar no karaokê! Sabe alguma em português?",en:"Let's sing karaoke! Know any in Portuguese?"},
      {speaker:"user",opts:["Sei 'Garota de Ipanema'! Todo mundo conhece!","Não sei cantar.","Bora!"],correct:0},
      {speaker:"bia",pt:"Canta comigo! 'Olha que coisa mais linda...'",en:"Sing with me!"},
      {speaker:"user",opts:["Essa música nunca envelhece! Clássico!","Adoro!","Minha favorita!"],correct:0}
    ]},
    {title:"Vocabulary game",lines:[
      {speaker:"bia",pt:"Vamos jogar! Eu falo em português, você traduz!",en:"Let's play! I say it in Portuguese, you translate!"},
      {speaker:"user",opts:["Bora! Estou pronto! Manda!","Vamos!","Pode falar."],correct:0},
      {speaker:"bia",pt:"Acertou tudo! Você é craque!",en:"You got everything right! You're a star!"},
      {speaker:"user",opts:["Quero jogar de novo! É divertido aprender assim!","Mais uma!","Valeu!"],correct:0}
    ]}
  ],
  69: [
    {title:"Making wishes",lines:[
      {speaker:"bia",pt:"Espero que você goste do Brasil!",en:"I hope you like Brazil!"},
      {speaker:"user",opts:["Eu também espero! Talvez eu fique mais tempo.","Obrigado!","Gosto sim."],correct:0},
      {speaker:"bia",pt:"Tomara! Quero que você conheça tudo!",en:"I hope so! I want you to see everything!"},
      {speaker:"user",opts:["Quero que você me mostre o Rio!","Legal!","Vamos!"],correct:0}
    ]},
    {title:"Wishing well",lines:[
      {speaker:"bia",pt:"Tomara que não chova no casamento!",en:"I hope it doesn't rain at the wedding!"},
      {speaker:"user",opts:["Espero que tudo dê certo pra vocês!","Também!","Vai chover."],correct:0},
      {speaker:"bia",pt:"Quero que seja o dia mais feliz!",en:"I want it to be the happiest day!"},
      {speaker:"user",opts:["Vai ser! Desejo que vocês sejam muito felizes!","Com certeza!","Que lindo!"],correct:0}
    ]},
    {title:"Making requests",lines:[
      {speaker:"bia",pt:"Queria que você viesse à minha festa!",en:"I wished you'd come to my party!"},
      {speaker:"user",opts:["Tomara que eu possa! Espero que não chova!","Vou sim!","Quando é?"],correct:0},
      {speaker:"bia",pt:"É importante que você confirme até sexta!",en:"It's important you confirm by Friday!"},
      {speaker:"user",opts:["Pode deixar! Desejo que seja uma festa incrível!","Confirmado!","Combinado!"],correct:0}
    ]},
    {title:"Confidence boost",lines:[
      {speaker:"bia",pt:"Sabe o que eu percebi? Seu português melhorou muito!",en:"Know what I noticed? Your Portuguese improved a lot!"},
      {speaker:"user",opts:["Sério? Às vezes acho que não evoluo!","Obrigado!","Acha mesmo?"],correct:0},
      {speaker:"bia",pt:"Claro que sim! Olha quantas palavras você sabe!",en:"Of course! Look how many words you know!"},
      {speaker:"user",opts:["Obrigado, Bia! Vou continuar firme!","Motivado!","Valeu!"],correct:0}
    ]}
  ],
  70: [
    {title:"If I could...",lines:[
      {speaker:"bia",pt:"Se você pudesse viajar para qualquer lugar, aonde iria?",en:"If you could travel anywhere, where would you go?"},
      {speaker:"user",opts:["Eu iria para o Nordeste do Brasil!","Paris.","Ficaria aqui."],correct:0},
      {speaker:"bia",pt:"Que legal! Eu gostaria de conhecer o Japão!",en:"How cool! I'd like to visit Japan!"},
      {speaker:"user",opts:["Seria incrível! Poderíamos ir juntos!","Boa ideia!","Caro!"],correct:0}
    ]},
    {title:"Dream vacation",lines:[
      {speaker:"bia",pt:"Se eu ganhasse na loteria, compraria uma ilha!",en:"If I won the lottery, I'd buy an island!"},
      {speaker:"user",opts:["Eu viajaria o mundo inteiro!","Eu também!","Daria pra caridade."],correct:0},
      {speaker:"bia",pt:"Seria incrível! Iríamos juntos?",en:"It would be amazing! Would we go together?"},
      {speaker:"user",opts:["Claro! A gente poderia morar na praia!","Bora!","Sonho!"],correct:0}
    ]},
    {title:"What if",lines:[
      {speaker:"bia",pt:"Se você pudesse mudar uma coisa no mundo?",en:"If you could change one thing in the world?"},
      {speaker:"user",opts:["Acabaria com a fome! Ninguém deveria passar fome!","A guerra.","Nada."],correct:0},
      {speaker:"bia",pt:"Se eu fosse presidente, investiria em educação!",en:"If I were president, I'd invest in education!"},
      {speaker:"user",opts:["O mundo seria melhor se todos pensassem assim!","Concordo!","Verdade!"],correct:0}
    ]},
    {title:"Teaching a friend",lines:[
      {speaker:"bia",pt:"Ensina essa palavra pro seu amigo!",en:"Teach this word to your friend!"},
      {speaker:"user",opts:["Olha, em português se diz assim!","Tá bom!","Difícil."],correct:0},
      {speaker:"bia",pt:"Ele aprendeu! Você é um bom professor!",en:"He learned! You're a good teacher!"},
      {speaker:"user",opts:["Ensinar é a melhor forma de aprender!","Verdade!","Obrigado!"],correct:0}
    ]}
  ],
  71: [
    {title:"Comparing things",lines:[
      {speaker:"bia",pt:"O que você acha? São Paulo ou Rio de Janeiro?",en:"What do you think? São Paulo or Rio?"},
      {speaker:"user",opts:["O Rio é mais bonito que São Paulo!","São iguais.","Não conheço."],correct:0},
      {speaker:"bia",pt:"Mas São Paulo tem a melhor comida! E é maior!",en:"But São Paulo has the best food! And it's bigger!"},
      {speaker:"user",opts:["É verdade! São Paulo é tão legal quanto o Rio.","Talvez.","Concordo."],correct:0}
    ]},
    {title:"Best and worst",lines:[
      {speaker:"bia",pt:"Qual é a melhor comida que você já comeu?",en:"What's the best food you've ever eaten?"},
      {speaker:"user",opts:["Feijoada! É melhor que qualquer coisa!","Pizza!","Sushi."],correct:0},
      {speaker:"bia",pt:"Mais gostosa que pizza? Sério?",en:"Tastier than pizza? Seriously?"},
      {speaker:"user",opts:["Muito mais! Não tem pior comida brasileira!","Concordo!","Discordo!"],correct:0}
    ]},
    {title:"Food comparison",lines:[
      {speaker:"bia",pt:"Açaí ou sorvete? Qual é melhor?",en:"Açaí or ice cream? Which is better?"},
      {speaker:"user",opts:["Açaí é mais saudável que sorvete!","Sorvete!","Os dois!"],correct:0},
      {speaker:"bia",pt:"Mas sorvete é tão gostoso quanto açaí!",en:"But ice cream is as tasty as açaí!"},
      {speaker:"user",opts:["Conclusão: os dois são os melhores!","Empate!","Concordo!"],correct:0}
    ]},
    {title:"Practice with Bia",lines:[
      {speaker:"bia",pt:"Vamos praticar mais uma vez?",en:"Let's practice one more time?"},
      {speaker:"user",opts:["Sim! Repetição é importante pra memorizar!","Bora!","De novo?"],correct:0},
      {speaker:"bia",pt:"Muito bem! Você está melhorando rápido!",en:"Very good! You're improving fast!"},
      {speaker:"user",opts:["Valeu, Bia! Cada dia um pouco melhor!","Obrigado!","Continuando!"],correct:0}
    ]}
  ],
  72: [
    {title:"When and how long",lines:[
      {speaker:"bia",pt:"Há quanto tempo você estuda português?",en:"How long have you been studying Portuguese?"},
      {speaker:"user",opts:["Faz três meses! Estudo todo dia.","Pouco tempo.","Muito tempo."],correct:0},
      {speaker:"bia",pt:"Daqui a pouco você vai estar fluente!",en:"Soon you'll be fluent!"},
      {speaker:"user",opts:["Tomara! Por enquanto pratico de vez em quando.","Espero!","Obrigado!"],correct:0}
    ]},
    {title:"Time flies",lines:[
      {speaker:"bia",pt:"Faz quanto tempo que a gente se conhece?",en:"How long have we known each other?"},
      {speaker:"user",opts:["Faz dois anos! O tempo voou!","Muito tempo!","Pouco."],correct:0},
      {speaker:"bia",pt:"Daqui a cinco anos vamos rir disso!",en:"In five years we'll laugh at this!"},
      {speaker:"user",opts:["Com certeza! Enquanto isso, vamos curtir!","Verdade!","Bons tempos!"],correct:0}
    ]},
    {title:"Planning ahead",lines:[
      {speaker:"bia",pt:"Daqui a um mês vou pro Brasil!",en:"In a month I'm going to Brazil!"},
      {speaker:"user",opts:["Que legal! Há quanto tempo você planeja isso?","Oba!","Sozinho?"],correct:0},
      {speaker:"bia",pt:"Faz seis meses! Enquanto isso, estudo português!",en:"Six months! Meanwhile, I study Portuguese!"},
      {speaker:"user",opts:["Por enquanto, pratique bastante! Vai valer a pena!","Com certeza!","Ansioso!"],correct:0}
    ]},
    {title:"Real life moment",lines:[
      {speaker:"bia",pt:"Imagina que você está no Brasil agora!",en:"Imagine you're in Brazil right now!"},
      {speaker:"user",opts:["Legal! O que eu falo primeiro?","Oi Brasil!","Estou pronto!"],correct:0},
      {speaker:"bia",pt:"Usa o que aprendeu! Confia em você!",en:"Use what you learned! Trust yourself!"},
      {speaker:"user",opts:["Vou falar com confiança! Português é lindo!","Bora!","Consegui!"],correct:0}
    ]}
  ],
  73: [
    {title:"Connecting ideas",lines:[
      {speaker:"bia",pt:"Por que você quer aprender português?",en:"Why do you want to learn Portuguese?"},
      {speaker:"user",opts:["Porque quero viajar. Além disso, gosto da cultura!","É bonito.","Preciso."],correct:0},
      {speaker:"bia",pt:"Que legal! Apesar de ser difícil, vale a pena!",en:"How cool! Despite being hard, it's worth it!"},
      {speaker:"user",opts:["Concordo! Portanto vou continuar estudando!","Com certeza!","Verdade!"],correct:0}
    ]},
    {title:"Arguing a point",lines:[
      {speaker:"bia",pt:"Acho que cachorro é melhor que gato.",en:"I think dogs are better than cats."},
      {speaker:"user",opts:["Porém gatos são mais independentes! Além disso, são quietos.","Concordo.","Discordo."],correct:0},
      {speaker:"bia",pt:"Contudo, cachorros são mais leais!",en:"However, dogs are more loyal!"},
      {speaker:"user",opts:["É verdade! Portanto, os dois são ótimos!","Empate!","Concordo!"],correct:0}
    ]},
    {title:"Writing an essay",lines:[
      {speaker:"bia",pt:"Preciso escrever uma redação. Qual o tema?",en:"I need to write an essay. What's the topic?"},
      {speaker:"user",opts:["Escreva sobre educação. Além disso, cite dados!","Difícil.","Qual assunto?"],correct:0},
      {speaker:"bia",pt:"Use 'portanto' e 'contudo' pra conectar ideias!",en:"Use 'therefore' and 'however' to connect ideas!"},
      {speaker:"user",opts:["Obrigado! Apesar de ser difícil, vou conseguir!","Valeu!","Boa dica!"],correct:0}
    ]},
    {title:"Vocabulary game",lines:[
      {speaker:"bia",pt:"Vamos jogar! Eu falo em português, você traduz!",en:"Let's play! I say it in Portuguese, you translate!"},
      {speaker:"user",opts:["Bora! Estou pronto! Manda!","Vamos!","Pode falar."],correct:0},
      {speaker:"bia",pt:"Acertou tudo! Você é craque!",en:"You got everything right! You're a star!"},
      {speaker:"user",opts:["Quero jogar de novo! É divertido aprender assim!","Mais uma!","Valeu!"],correct:0}
    ]}
  ],
  74: [
    {title:"Complex emotions",lines:[
      {speaker:"bia",pt:"Como você se sente morando longe da família?",en:"How do you feel living far from family?"},
      {speaker:"user",opts:["Às vezes fico frustrado e com saudade.","Bem.","Normal."],correct:0},
      {speaker:"bia",pt:"É natural. Mas também é uma experiência enriquecedora!",en:"It's natural. But it's also an enriching experience!"},
      {speaker:"user",opts:["Verdade! Me sinto orgulhoso da minha coragem!","Com certeza.","É difícil."],correct:0}
    ]},
    {title:"After a breakup",lines:[
      {speaker:"bia",pt:"Terminei com meu namorado. Tô triste.",en:"I broke up with my boyfriend. I'm sad."},
      {speaker:"user",opts:["Sinto muito. É normal se sentir assim.","Que pena.","Força!"],correct:0},
      {speaker:"bia",pt:"Me sinto decepcionada e confusa.",en:"I feel disappointed and confused."},
      {speaker:"user",opts:["Vai passar. Você é forte e merece alguém melhor!","Obrigada.","Concordo."],correct:0}
    ]},
    {title:"Good news",lines:[
      {speaker:"bia",pt:"Recebi uma notícia incrível!",en:"I got incredible news!"},
      {speaker:"user",opts:["O que foi? Conta logo! Estou ansioso!","Que bom!","Fala!"],correct:0},
      {speaker:"bia",pt:"Ganhei uma bolsa de estudos pro Brasil!",en:"I got a scholarship to Brazil!"},
      {speaker:"user",opts:["Estou emocionado por você! Que orgulho!","Parabéns!","Incrível!"],correct:0}
    ]},
    {title:"Confidence boost",lines:[
      {speaker:"bia",pt:"Sabe o que eu percebi? Seu português melhorou muito!",en:"Know what I noticed? Your Portuguese improved a lot!"},
      {speaker:"user",opts:["Sério? Às vezes acho que não evoluo!","Obrigado!","Acha mesmo?"],correct:0},
      {speaker:"bia",pt:"Claro que sim! Olha quantas palavras você sabe!",en:"Of course! Look how many words you know!"},
      {speaker:"user",opts:["Obrigado, Bia! Vou continuar firme!","Motivado!","Valeu!"],correct:0}
    ]}
  ],
  75: [
    {title:"What happened?",lines:[
      {speaker:"bia",pt:"O que aconteceu ontem na cidade?",en:"What happened yesterday in the city?"},
      {speaker:"user",opts:["Surgiu um protesto e o trânsito piorou.","Nada.","Não sei."],correct:0},
      {speaker:"bia",pt:"Nossa! E o que mudou depois?",en:"Wow! And what changed after?"},
      {speaker:"user",opts:["A situação melhorou à tarde. Tudo voltou ao normal.","Nada.","Piorou."],correct:0}
    ]},
    {title:"News report",lines:[
      {speaker:"bia",pt:"Viu a notícia? O preço da gasolina aumentou!",en:"Did you see? Gas prices went up!"},
      {speaker:"user",opts:["Piorou de novo? Isso me preocupa!","Não vi.","Sério?"],correct:0},
      {speaker:"bia",pt:"A economia mudou muito esse ano.",en:"The economy changed a lot this year."},
      {speaker:"user",opts:["Espero que a situação melhore logo!","Eu também!","Difícil."],correct:0}
    ]},
    {title:"Traffic report",lines:[
      {speaker:"bia",pt:"O trânsito piorou depois da obra na avenida!",en:"Traffic got worse after the road work!"},
      {speaker:"user",opts:["Aconteceu um acidente também! Tudo parado!","Que horror!","De novo?"],correct:0},
      {speaker:"bia",pt:"A situação só melhorou depois das sete!",en:"Things only improved after seven!"},
      {speaker:"user",opts:["Surgiu uma rota alternativa pelo centro!","Boa!","Vou tentar."],correct:0}
    ]},
    {title:"Teaching a friend",lines:[
      {speaker:"bia",pt:"Ensina essa palavra pro seu amigo!",en:"Teach this word to your friend!"},
      {speaker:"user",opts:["Olha, em português se diz assim!","Tá bom!","Difícil."],correct:0},
      {speaker:"bia",pt:"Ele aprendeu! Você é um bom professor!",en:"He learned! You're a good teacher!"},
      {speaker:"user",opts:["Ensinar é a melhor forma de aprender!","Verdade!","Obrigado!"],correct:0}
    ]}
  ],
  76: [
    {title:"Why things happen",lines:[
      {speaker:"bia",pt:"Por que o jogo foi cancelado?",en:"Why was the game cancelled?"},
      {speaker:"user",opts:["Por causa da chuva forte. Resultado: adiaram pra sábado.","Não sei.","Que pena."],correct:0},
      {speaker:"bia",pt:"Sendo assim, vamos fazer outra coisa!",en:"That being so, let's do something else!"},
      {speaker:"user",opts:["Boa! Devido ao tempo, vamos ao cinema!","Ok!","Concordo."],correct:0}
    ]},
    {title:"Explaining reasons",lines:[
      {speaker:"bia",pt:"Por que você se atrasou?",en:"Why were you late?"},
      {speaker:"user",opts:["Devido ao trânsito! Estava horrível!","Desculpa.","Problema no ônibus."],correct:0},
      {speaker:"bia",pt:"Sendo assim, vamos começar logo!",en:"That being so, let's start right away!"},
      {speaker:"user",opts:["Boa! Não vou mais me atrasar!","Ok!","Combinado!"],correct:0}
    ]},
    {title:"Health advice",lines:[
      {speaker:"bia",pt:"Por que você está tão cansado?",en:"Why are you so tired?"},
      {speaker:"user",opts:["Devido ao estresse do trabalho.","Não sei.","Dormi mal."],correct:0},
      {speaker:"bia",pt:"Sendo assim, precisa descansar mais!",en:"That being so, you need to rest more!"},
      {speaker:"user",opts:["Graças a Deus amanhã é feriado!","Verdade!","Amém!"],correct:0}
    ]},
    {title:"Practice with Bia",lines:[
      {speaker:"bia",pt:"Vamos praticar mais uma vez?",en:"Let's practice one more time?"},
      {speaker:"user",opts:["Sim! Repetição é importante pra memorizar!","Bora!","De novo?"],correct:0},
      {speaker:"bia",pt:"Muito bem! Você está melhorando rápido!",en:"Very good! You're improving fast!"},
      {speaker:"user",opts:["Valeu, Bia! Cada dia um pouco melhor!","Obrigado!","Continuando!"],correct:0}
    ]}
  ],
  77: [
    {title:"Flowing conversation",lines:[
      {speaker:"bia",pt:"Aliás, você soube da novidade?",en:"By the way, did you hear the news?"},
      {speaker:"user",opts:["Não! Conta! Inclusive, adoro fofoca!","O quê?","Não."],correct:0},
      {speaker:"bia",pt:"O Pedro vai casar! Enfim, achei ótimo!",en:"Pedro is getting married! Anyway, I thought it was great!"},
      {speaker:"user",opts:["Sério? Pois é, ele merece! Afinal, são cinco anos juntos!","Que legal!","Parabéns!"],correct:0}
    ]},
    {title:"Gossip",lines:[
      {speaker:"bia",pt:"Pois é, a Carla largou o emprego!",en:"Yeah, Carla quit her job!"},
      {speaker:"user",opts:["Sério? Aliás, ela estava infeliz, né?","Não sabia!","Eita!"],correct:0},
      {speaker:"bia",pt:"Enfim, afinal, ela merecia algo melhor!",en:"Anyway, after all, she deserved better!"},
      {speaker:"user",opts:["Inclusive! Boa sorte pra ela!","Com certeza!","Torço por ela!"],correct:0}
    ]},
    {title:"Catching up",lines:[
      {speaker:"bia",pt:"Faz tempo que a gente não se vê! Cadê você?",en:"It's been ages! Where have you been?"},
      {speaker:"user",opts:["Pois é! Aliás, mudei de emprego!","Saudades!","Ocupado."],correct:0},
      {speaker:"bia",pt:"Sério? Inclusive, eu também mudei!",en:"Really? In fact, I changed jobs too!"},
      {speaker:"user",opts:["Enfim nos encontramos! Afinal, amizade é pra sempre!","Que coincidência!","Demais!"],correct:0}
    ]},
    {title:"Real life moment",lines:[
      {speaker:"bia",pt:"Imagina que você está no Brasil agora!",en:"Imagine you're in Brazil right now!"},
      {speaker:"user",opts:["Legal! O que eu falo primeiro?","Oi Brasil!","Estou pronto!"],correct:0},
      {speaker:"bia",pt:"Usa o que aprendeu! Confia em você!",en:"Use what you learned! Trust yourself!"},
      {speaker:"user",opts:["Vou falar com confiança! Português é lindo!","Bora!","Consegui!"],correct:0}
    ]}
  ],
  78: [
    {title:"Casual chat",lines:[
      {speaker:"bia",pt:"E aí, fica ligado! Vai ter festa hoje!",en:"Hey, heads up! There's a party today!"},
      {speaker:"user",opts:["Massa! Tô a fim de ir!","Tô nem aí.","Sei lá."],correct:0},
      {speaker:"bia",pt:"Bora! Vai ser muito da hora!",en:"Let's go! It's gonna be awesome!"},
      {speaker:"user",opts:["Partiu! Vou mandar ver!","Talvez.","Tô fora."],correct:0}
    ]},
    {title:"Hanging out",lines:[
      {speaker:"bia",pt:"Tá a fim de ir no shopping?",en:"Feel like going to the mall?"},
      {speaker:"user",opts:["Sei lá, tô sem grana.","Bora!","Tô cansado."],correct:0},
      {speaker:"bia",pt:"Relaxa! A gente só vai dar um rolê!",en:"Chill! We'll just hang out!"},
      {speaker:"user",opts:["Tá bom! Tipo assim, só pra passear!","Partiu!","Fechou!"],correct:0}
    ]},
    {title:"Street smart",lines:[
      {speaker:"bia",pt:"Mano, cuidado com a bolsa nessa rua!",en:"Dude, watch your bag on this street!"},
      {speaker:"user",opts:["Valeu! Tô ligado! Vou ficar esperto!","Obrigado!","Tá tranquilo."],correct:0},
      {speaker:"bia",pt:"Boa! Tipo, tem muito batedor de carteira aqui!",en:"Right! Like, there are lots of pickpockets here!"},
      {speaker:"user",opts:["Vou segurar firme! Cair a ficha é importante!","Verdade!","Valeu pela dica!"],correct:0}
    ]},
    {title:"Vocabulary game",lines:[
      {speaker:"bia",pt:"Vamos jogar! Eu falo em português, você traduz!",en:"Let's play! I say it in Portuguese, you translate!"},
      {speaker:"user",opts:["Bora! Estou pronto! Manda!","Vamos!","Pode falar."],correct:0},
      {speaker:"bia",pt:"Acertou tudo! Você é craque!",en:"You got everything right! You're a star!"},
      {speaker:"user",opts:["Quero jogar de novo! É divertido aprender assim!","Mais uma!","Valeu!"],correct:0}
    ]}
  ],
  79: [
    {title:"Deep thoughts",lines:[
      {speaker:"bia",pt:"Você acredita que a realidade é o que parece?",en:"Do you believe reality is what it seems?"},
      {speaker:"user",opts:["Acho que a imaginação também cria nossa realidade.","Sim.","Difícil."],correct:0},
      {speaker:"bia",pt:"Que filosófico! A consciência é um mistério, né?",en:"How philosophical! Consciousness is a mystery, right?"},
      {speaker:"user",opts:["Verdade! Precisamos de coragem pra buscar a verdade!","Com certeza.","Profundo!"],correct:0}
    ]},
    {title:"Meaning of life",lines:[
      {speaker:"bia",pt:"Você já pensou no sentido da vida?",en:"Have you ever thought about the meaning of life?"},
      {speaker:"user",opts:["A liberdade de escolher é o que importa!","Não.","Às vezes."],correct:0},
      {speaker:"bia",pt:"A consciência nos torna únicos, né?",en:"Consciousness makes us unique, right?"},
      {speaker:"user",opts:["Verdade! A imaginação cria nosso destino!","Profundo!","Concordo!"],correct:0}
    ]},
    {title:"Existential chat",lines:[
      {speaker:"bia",pt:"A felicidade é uma escolha ou um sentimento?",en:"Is happiness a choice or a feeling?"},
      {speaker:"user",opts:["Acho que é os dois! Depende da consciência!","Escolha.","Sentimento."],correct:0},
      {speaker:"bia",pt:"A imaginação nos permite criar nossa própria realidade!",en:"Imagination lets us create our own reality!"},
      {speaker:"user",opts:["Profundo! A coragem de ser feliz é essencial!","Concordo!","Bonito!"],correct:0}
    ]},
    {title:"Confidence boost",lines:[
      {speaker:"bia",pt:"Sabe o que eu percebi? Seu português melhorou muito!",en:"Know what I noticed? Your Portuguese improved a lot!"},
      {speaker:"user",opts:["Sério? Às vezes acho que não evoluo!","Obrigado!","Acha mesmo?"],correct:0},
      {speaker:"bia",pt:"Claro que sim! Olha quantas palavras você sabe!",en:"Of course! Look how many words you know!"},
      {speaker:"user",opts:["Obrigado, Bia! Vou continuar firme!","Motivado!","Valeu!"],correct:0}
    ]}
  ],
  80: [
    {title:"Social issues",lines:[
      {speaker:"bia",pt:"A desigualdade social é um grande problema no Brasil.",en:"Social inequality is a big problem in Brazil."},
      {speaker:"user",opts:["Concordo. A educação é a chave para mudar isso.","Verdade.","É triste."],correct:0},
      {speaker:"bia",pt:"Com certeza! Todos merecem igualdade de oportunidades.",en:"Absolutely! Everyone deserves equal opportunities."},
      {speaker:"user",opts:["Espero que a situação melhore. A mudança começa com cada um.","Eu também.","Difícil."],correct:0}
    ]},
    {title:"Volunteering",lines:[
      {speaker:"bia",pt:"Quero fazer trabalho voluntário!",en:"I want to do volunteer work!"},
      {speaker:"user",opts:["Que legal! Onde? Na comunidade?","Boa ideia.","Por quê?"],correct:0},
      {speaker:"bia",pt:"Sim! Quero ajudar com educação!",en:"Yes! I want to help with education!"},
      {speaker:"user",opts:["A educação transforma vidas! Vou com você!","Lindo!","Vamos juntos!"],correct:0}
    ]},
    {title:"Education gap",lines:[
      {speaker:"bia",pt:"Muitas crianças no Brasil não têm acesso à educação de qualidade.",en:"Many kids in Brazil don't have access to quality education."},
      {speaker:"user",opts:["Isso é um problema sério! Precisamos de mudança!","Triste.","Concordo."],correct:0},
      {speaker:"bia",pt:"O governo deveria investir mais em escolas públicas!",en:"The government should invest more in public schools!"},
      {speaker:"user",opts:["Cada um pode ajudar! Voluntariado faz diferença!","Verdade!","Vamos ajudar!"],correct:0}
    ]},
    {title:"Teaching a friend",lines:[
      {speaker:"bia",pt:"Ensina essa palavra pro seu amigo!",en:"Teach this word to your friend!"},
      {speaker:"user",opts:["Olha, em português se diz assim!","Tá bom!","Difícil."],correct:0},
      {speaker:"bia",pt:"Ele aprendeu! Você é um bom professor!",en:"He learned! You're a good teacher!"},
      {speaker:"user",opts:["Ensinar é a melhor forma de aprender!","Verdade!","Obrigado!"],correct:0}
    ]}
  ],
  81: [
    {title:"Environment",lines:[
      {speaker:"bia",pt:"O desmatamento na Amazônia me preocupa muito.",en:"Deforestation in the Amazon worries me a lot."},
      {speaker:"user",opts:["Eu também! A preservação é muito importante.","Concordo.","Sério?"],correct:0},
      {speaker:"bia",pt:"Precisamos de mais reciclagem e energia renovável!",en:"We need more recycling and renewable energy!"},
      {speaker:"user",opts:["Com certeza! A sustentabilidade é o futuro!","Verdade.","Difícil."],correct:0}
    ]},
    {title:"Quick review",lines:[
      {speaker:"bia",pt:"Vamos praticar? O que você aprendeu?",en:"Let's practice? What did you learn?"},
      {speaker:"user",opts:["Aprendi muitas palavras novas!","Bastante!","Pouco."],correct:0},
      {speaker:"bia",pt:"Ótimo! Prática é o segredo da fluência!",en:"Great! Practice is the secret to fluency!"},
      {speaker:"user",opts:["Vou continuar estudando todo dia!","Com certeza!","Sempre!"],correct:0}
    ]},
    {title:"Climate action",lines:[
      {speaker:"bia",pt:"O que podemos fazer pelo meio ambiente?",en:"What can we do for the environment?"},
      {speaker:"user",opts:["Reduzir, reutilizar e reciclar! Os três R!","Plantar árvores.","Nada."],correct:0},
      {speaker:"bia",pt:"Também podemos usar energia solar e andar de bike!",en:"We can also use solar energy and ride bikes!"},
      {speaker:"user",opts:["Cada pequena ação conta! O planeta agradece!","Concordo!","Vamos agir!"],correct:0}
    ]},
    {title:"Practice with Bia",lines:[
      {speaker:"bia",pt:"Vamos praticar mais uma vez?",en:"Let's practice one more time?"},
      {speaker:"user",opts:["Sim! Repetição é importante pra memorizar!","Bora!","De novo?"],correct:0},
      {speaker:"bia",pt:"Muito bem! Você está melhorando rápido!",en:"Very good! You're improving fast!"},
      {speaker:"user",opts:["Valeu, Bia! Cada dia um pouco melhor!","Obrigado!","Continuando!"],correct:0}
    ]}
  ],
  82: [
    {title:"Media talk",lines:[
      {speaker:"bia",pt:"Você viu a manchete do jornal hoje?",en:"Did you see the newspaper headline today?"},
      {speaker:"user",opts:["Sim! Li a notícia sobre a nova lei.","Não li.","Qual?"],correct:0},
      {speaker:"bia",pt:"Eu assisti a reportagem na Globo. A novela também tá ótima!",en:"I watched the report on Globo. The soap opera is also great!"},
      {speaker:"user",opts:["Novela brasileira é vício! Adoro!","Legal!","Não assisto."],correct:0}
    ]},
    {title:"Fake news",lines:[
      {speaker:"bia",pt:"Viu essa notícia? Parece falsa!",en:"Saw this news? Seems fake!"},
      {speaker:"user",opts:["Cuidado! Sempre cheque a fonte!","Pode ser.","Compartilha!"],correct:0},
      {speaker:"bia",pt:"A mídia precisa ser responsável!",en:"Media needs to be responsible!"},
      {speaker:"user",opts:["Concordo! Não compartilha sem verificar!","Verdade!","Nunca mais!"],correct:0}
    ]},
    {title:"Quick review",lines:[
      {speaker:"bia",pt:"Vamos praticar? O que você aprendeu?",en:"Let's practice? What did you learn?"},
      {speaker:"user",opts:["Aprendi muitas palavras novas!","Bastante!","Pouco."],correct:0},
      {speaker:"bia",pt:"Ótimo! Prática é o segredo da fluência!",en:"Great! Practice is the secret to fluency!"},
      {speaker:"user",opts:["Vou continuar estudando todo dia!","Com certeza!","Sempre!"],correct:0}
    ]},
    {title:"Real life moment",lines:[
      {speaker:"bia",pt:"Imagina que você está no Brasil agora!",en:"Imagine you're in Brazil right now!"},
      {speaker:"user",opts:["Legal! O que eu falo primeiro?","Oi Brasil!","Estou pronto!"],correct:0},
      {speaker:"bia",pt:"Usa o que aprendeu! Confia em você!",en:"Use what you learned! Trust yourself!"},
      {speaker:"user",opts:["Vou falar com confiança! Português é lindo!","Bora!","Consegui!"],correct:0}
    ]}
  ],
  83: [
    {title:"Philosophy",lines:[
      {speaker:"bia",pt:"O que é a felicidade pra você?",en:"What is happiness to you?"},
      {speaker:"user",opts:["Acho que é viver com propósito e gratidão.","Dinheiro!","Não sei."],correct:0},
      {speaker:"bia",pt:"Bonito! A sabedoria está nas coisas simples, né?",en:"Beautiful! Wisdom is in the simple things, right?"},
      {speaker:"user",opts:["Com certeza! A verdade é que a vida é um presente.","Concordo.","Profundo!"],correct:0}
    ]},
    {title:"Ethics",lines:[
      {speaker:"bia",pt:"O que é certo e o que é errado?",en:"What is right and what is wrong?"},
      {speaker:"user",opts:["Depende do contexto e da cultura.","Difícil.","Sei lá."],correct:0},
      {speaker:"bia",pt:"A ética nos guia nas decisões difíceis.",en:"Ethics guides us in hard decisions."},
      {speaker:"user",opts:["Verdade! Pensar antes de agir é sabedoria!","Concordo!","Profundo!"],correct:0}
    ]},
    {title:"Quick review",lines:[
      {speaker:"bia",pt:"Vamos praticar? O que você aprendeu?",en:"Let's practice? What did you learn?"},
      {speaker:"user",opts:["Aprendi muitas palavras novas!","Bastante!","Pouco."],correct:0},
      {speaker:"bia",pt:"Ótimo! Prática é o segredo da fluência!",en:"Great! Practice is the secret to fluency!"},
      {speaker:"user",opts:["Vou continuar estudando todo dia!","Com certeza!","Sempre!"],correct:0}
    ]},
    {title:"Vocabulary game",lines:[
      {speaker:"bia",pt:"Vamos jogar! Eu falo em português, você traduz!",en:"Let's play! I say it in Portuguese, you translate!"},
      {speaker:"user",opts:["Bora! Estou pronto! Manda!","Vamos!","Pode falar."],correct:0},
      {speaker:"bia",pt:"Acertou tudo! Você é craque!",en:"You got everything right! You're a star!"},
      {speaker:"user",opts:["Quero jogar de novo! É divertido aprender assim!","Mais uma!","Valeu!"],correct:0}
    ]}
  ],
  84: [
    {title:"Legal matters",lines:[
      {speaker:"bia",pt:"Preciso falar com um advogado sobre o contrato.",en:"I need to talk to a lawyer about the contract."},
      {speaker:"user",opts:["Qual é o problema? Tem algum processo?","Que chato.","Boa sorte."],correct:0},
      {speaker:"bia",pt:"Não, só quero que ele revise antes de assinar.",en:"No, I just want him to review it before I sign."},
      {speaker:"user",opts:["Boa ideia! É importante ter uma testemunha também.","Certo.","Concordo."],correct:0}
    ]},
    {title:"Quick review",lines:[
      {speaker:"bia",pt:"Vamos praticar? O que você aprendeu?",en:"Let's practice? What did you learn?"},
      {speaker:"user",opts:["Aprendi muitas palavras novas!","Bastante!","Pouco."],correct:0},
      {speaker:"bia",pt:"Ótimo! Prática é o segredo da fluência!",en:"Great! Practice is the secret to fluency!"},
      {speaker:"user",opts:["Vou continuar estudando todo dia!","Com certeza!","Sempre!"],correct:0}
    ]},
    {title:"Know your rights",lines:[
      {speaker:"bia",pt:"Todo cidadão tem direito à saúde e educação!",en:"Every citizen has the right to health and education!"},
      {speaker:"user",opts:["A constituição garante esses direitos!","Verdade.","Não sabia."],correct:0},
      {speaker:"bia",pt:"E o direito à moradia e ao trabalho também!",en:"And the right to housing and work too!"},
      {speaker:"user",opts:["Conhecer seus direitos é poder!","Importante!","Vou estudar!"],correct:0}
    ]},
    {title:"Confidence boost",lines:[
      {speaker:"bia",pt:"Sabe o que eu percebi? Seu português melhorou muito!",en:"Know what I noticed? Your Portuguese improved a lot!"},
      {speaker:"user",opts:["Sério? Às vezes acho que não evoluo!","Obrigado!","Acha mesmo?"],correct:0},
      {speaker:"bia",pt:"Claro que sim! Olha quantas palavras você sabe!",en:"Of course! Look how many words you know!"},
      {speaker:"user",opts:["Obrigado, Bia! Vou continuar firme!","Motivado!","Valeu!"],correct:0}
    ]}
  ],
  85: [
    {title:"Science",lines:[
      {speaker:"bia",pt:"Você se interessa por ciência?",en:"Are you interested in science?"},
      {speaker:"user",opts:["Sim! Acompanho as últimas pesquisas e descobertas.","Um pouco.","Não muito."],correct:0},
      {speaker:"bia",pt:"Legal! O Brasil tem cientistas incríveis na área de medicina tropical!",en:"Cool! Brazil has amazing scientists in tropical medicine!"},
      {speaker:"user",opts:["Sabia! A hipótese da biodiversidade é fascinante!","Interessante!","Não sabia."],correct:0}
    ]},
    {title:"Lab talk",lines:[
      {speaker:"bia",pt:"O experimento funcionou!",en:"The experiment worked!"},
      {speaker:"user",opts:["Parabéns! A hipótese estava certa!","Oba!","Sério?"],correct:0},
      {speaker:"bia",pt:"A descoberta pode mudar a medicina!",en:"The discovery could change medicine!"},
      {speaker:"user",opts:["Que pesquisa incrível! Publica logo!","Incrível!","Que orgulho!"],correct:0}
    ]},
    {title:"Quick review",lines:[
      {speaker:"bia",pt:"Vamos praticar? O que você aprendeu?",en:"Let's practice? What did you learn?"},
      {speaker:"user",opts:["Aprendi muitas palavras novas!","Bastante!","Pouco."],correct:0},
      {speaker:"bia",pt:"Ótimo! Prática é o segredo da fluência!",en:"Great! Practice is the secret to fluency!"},
      {speaker:"user",opts:["Vou continuar estudando todo dia!","Com certeza!","Sempre!"],correct:0}
    ]},
    {title:"Teaching a friend",lines:[
      {speaker:"bia",pt:"Ensina essa palavra pro seu amigo!",en:"Teach this word to your friend!"},
      {speaker:"user",opts:["Olha, em português se diz assim!","Tá bom!","Difícil."],correct:0},
      {speaker:"bia",pt:"Ele aprendeu! Você é um bom professor!",en:"He learned! You're a good teacher!"},
      {speaker:"user",opts:["Ensinar é a melhor forma de aprender!","Verdade!","Obrigado!"],correct:0}
    ]}
  ],
  86: [
    {title:"At the hospital",lines:[
      {speaker:"bia",pt:"Preciso marcar uma consulta médica.",en:"I need to schedule a doctor's appointment."},
      {speaker:"user",opts:["O SUS é gratuito. Ou prefere médico particular?","Qual médico?","Tá doente?"],correct:0},
      {speaker:"bia",pt:"Vou pelo SUS. Preciso fazer uns exames.",en:"I'll go through SUS. I need to do some tests."},
      {speaker:"user",opts:["Boa sorte! Espero que o diagnóstico seja bom!","Se cuida!","Vai dar certo."],correct:0}
    ]},
    {title:"Waiting room",lines:[
      {speaker:"bia",pt:"Faz uma hora que estou esperando!",en:"I've been waiting for an hour!"},
      {speaker:"user",opts:["O SUS é assim. Paciência!","Que demora.","Vamos embora."],correct:0},
      {speaker:"bia",pt:"Meu exame de sangue ficou pronto!",en:"My blood test is ready!"},
      {speaker:"user",opts:["E o resultado? Tudo normal?","Espero que sim!","Boa sorte!"],correct:0}
    ]},
    {title:"Quick review",lines:[
      {speaker:"bia",pt:"Vamos praticar? O que você aprendeu?",en:"Let's practice? What did you learn?"},
      {speaker:"user",opts:["Aprendi muitas palavras novas!","Bastante!","Pouco."],correct:0},
      {speaker:"bia",pt:"Ótimo! Prática é o segredo da fluência!",en:"Great! Practice is the secret to fluency!"},
      {speaker:"user",opts:["Vou continuar estudando todo dia!","Com certeza!","Sempre!"],correct:0}
    ]},
    {title:"Practice with Bia",lines:[
      {speaker:"bia",pt:"Vamos praticar mais uma vez?",en:"Let's practice one more time?"},
      {speaker:"user",opts:["Sim! Repetição é importante pra memorizar!","Bora!","De novo?"],correct:0},
      {speaker:"bia",pt:"Muito bem! Você está melhorando rápido!",en:"Very good! You're improving fast!"},
      {speaker:"user",opts:["Valeu, Bia! Cada dia um pouco melhor!","Obrigado!","Continuando!"],correct:0}
    ]}
  ],
  87: [
    {title:"Mental health",lines:[
      {speaker:"bia",pt:"Você cuida da sua saúde mental?",en:"Do you take care of your mental health?"},
      {speaker:"user",opts:["Sim! Faço terapia e medito.","Tento.","Deveria."],correct:0},
      {speaker:"bia",pt:"Que bom! A ansiedade é muito comum hoje em dia.",en:"Great! Anxiety is very common nowadays."},
      {speaker:"user",opts:["Verdade. Autoestima e equilíbrio são importantes!","Concordo.","É verdade."],correct:0}
    ]},
    {title:"Therapy",lines:[
      {speaker:"bia",pt:"Comecei a fazer terapia. Tá me ajudando muito!",en:"I started therapy. It's helping a lot!"},
      {speaker:"user",opts:["Que bom! Cuidar da mente é essencial!","Legal!","Também quero."],correct:0},
      {speaker:"bia",pt:"O psicólogo disse que preciso relaxar mais.",en:"The psychologist said I need to relax more."},
      {speaker:"user",opts:["Meditação ajuda! Você já tentou?","Boa dica!","Concordo!"],correct:0}
    ]},
    {title:"Quick review",lines:[
      {speaker:"bia",pt:"Vamos praticar? O que você aprendeu?",en:"Let's practice? What did you learn?"},
      {speaker:"user",opts:["Aprendi muitas palavras novas!","Bastante!","Pouco."],correct:0},
      {speaker:"bia",pt:"Ótimo! Prática é o segredo da fluência!",en:"Great! Practice is the secret to fluency!"},
      {speaker:"user",opts:["Vou continuar estudando todo dia!","Com certeza!","Sempre!"],correct:0}
    ]},
    {title:"Real life moment",lines:[
      {speaker:"bia",pt:"Imagina que você está no Brasil agora!",en:"Imagine you're in Brazil right now!"},
      {speaker:"user",opts:["Legal! O que eu falo primeiro?","Oi Brasil!","Estou pronto!"],correct:0},
      {speaker:"bia",pt:"Usa o que aprendeu! Confia em você!",en:"Use what you learned! Trust yourself!"},
      {speaker:"user",opts:["Vou falar com confiança! Português é lindo!","Bora!","Consegui!"],correct:0}
    ]}
  ],
  88: [
    {title:"Future plans",lines:[
      {speaker:"bia",pt:"Quais são seus planos pro futuro?",en:"What are your plans for the future?"},
      {speaker:"user",opts:["Pretendo morar no Brasil e aprender a surfar!","Não sei ainda.","Trabalhar."],correct:0},
      {speaker:"bia",pt:"Que sonho lindo! Qual é a sua meta pra este ano?",en:"What a beautiful dream! What's your goal for this year?"},
      {speaker:"user",opts:["Falar português fluente! É meu maior objetivo!","Viajar.","Estudar mais."],correct:0}
    ]},
    {title:"Five year plan",lines:[
      {speaker:"bia",pt:"Onde você se vê daqui a cinco anos?",en:"Where do you see yourself in five years?"},
      {speaker:"user",opts:["Morando no Brasil e falando português fluente!","Não sei.","Aqui mesmo."],correct:0},
      {speaker:"bia",pt:"Que objetivo incrível! Você vai conseguir!",en:"What an amazing goal! You'll make it!"},
      {speaker:"user",opts:["Obrigado! Com esforço tudo é possível!","Espero!","Vou tentar!"],correct:0}
    ]},
    {title:"Quick review",lines:[
      {speaker:"bia",pt:"Vamos praticar? O que você aprendeu?",en:"Let's practice? What did you learn?"},
      {speaker:"user",opts:["Aprendi muitas palavras novas!","Bastante!","Pouco."],correct:0},
      {speaker:"bia",pt:"Ótimo! Prática é o segredo da fluência!",en:"Great! Practice is the secret to fluency!"},
      {speaker:"user",opts:["Vou continuar estudando todo dia!","Com certeza!","Sempre!"],correct:0}
    ]},
    {title:"Vocabulary game",lines:[
      {speaker:"bia",pt:"Vamos jogar! Eu falo em português, você traduz!",en:"Let's play! I say it in Portuguese, you translate!"},
      {speaker:"user",opts:["Bora! Estou pronto! Manda!","Vamos!","Pode falar."],correct:0},
      {speaker:"bia",pt:"Acertou tudo! Você é craque!",en:"You got everything right! You're a star!"},
      {speaker:"user",opts:["Quero jogar de novo! É divertido aprender assim!","Mais uma!","Valeu!"],correct:0}
    ]}
  ],
  89: [
    {title:"Emergency!",lines:[
      {speaker:"bia",pt:"Socorro! Preciso de ajuda!",en:"Help! I need help!"},
      {speaker:"user",opts:["O que aconteceu? Vou chamar a polícia!","Calma!","Oi!"],correct:0},
      {speaker:"bia",pt:"Minha bolsa foi roubada! Preciso ir à delegacia!",en:"My purse was stolen! I need to go to the police station!"},
      {speaker:"user",opts:["Vamos ligar para o 190! Fique tranquila.","Que horror!","Corre!"],correct:0}
    ]},
    {title:"Accident",lines:[
      {speaker:"bia",pt:"Houve um acidente na rua!",en:"There was an accident on the street!"},
      {speaker:"user",opts:["Alguém se machucou? Chama a ambulância!","Que horror!","Onde?"],correct:0},
      {speaker:"bia",pt:"Já chamei! O número é 192!",en:"Already called! The number is 192!"},
      {speaker:"user",opts:["Boa! Fica com a pessoa até chegar!","Certo!","Tô ligando!"],correct:0}
    ]},
    {title:"Quick review",lines:[
      {speaker:"bia",pt:"Vamos praticar? O que você aprendeu?",en:"Let's practice? What did you learn?"},
      {speaker:"user",opts:["Aprendi muitas palavras novas!","Bastante!","Pouco."],correct:0},
      {speaker:"bia",pt:"Ótimo! Prática é o segredo da fluência!",en:"Great! Practice is the secret to fluency!"},
      {speaker:"user",opts:["Vou continuar estudando todo dia!","Com certeza!","Sempre!"],correct:0}
    ]},
    {title:"Confidence boost",lines:[
      {speaker:"bia",pt:"Sabe o que eu percebi? Seu português melhorou muito!",en:"Know what I noticed? Your Portuguese improved a lot!"},
      {speaker:"user",opts:["Sério? Às vezes acho que não evoluo!","Obrigado!","Acha mesmo?"],correct:0},
      {speaker:"bia",pt:"Claro que sim! Olha quantas palavras você sabe!",en:"Of course! Look how many words you know!"},
      {speaker:"user",opts:["Obrigado, Bia! Vou continuar firme!","Motivado!","Valeu!"],correct:0}
    ]}
  ],
  90: [
    {title:"Looking for an apartment",lines:[
      {speaker:"bia",pt:"Estou procurando um apartamento. O aluguel é quanto?",en:"I'm looking for an apartment. How much is the rent?"},
      {speaker:"user",opts:["Dois mil, sem condomínio.","É caro.","Bonito!"],correct:0},
      {speaker:"bia",pt:"E o condomínio? Tem porteiro?",en:"And the condo fee? Is there a doorman?"},
      {speaker:"user",opts:["Sim, porteiro 24 horas. Condomínio é quinhentos.","Não sei.","Barato!"],correct:0}
    ]},
    {title:"Landlord problems",lines:[
      {speaker:"bia",pt:"O proprietário quer aumentar o aluguel!",en:"The landlord wants to raise the rent!"},
      {speaker:"user",opts:["De quanto? Verifica o contrato!","Que absurdo.","Muda."],correct:0},
      {speaker:"bia",pt:"Trezentos reais a mais! Não tá no contrato!",en:"Three hundred more! It's not in the lease!"},
      {speaker:"user",opts:["Fala com um advogado! Seus direitos importam!","Concordo!","Que situação."],correct:0}
    ]},
    {title:"Quick review",lines:[
      {speaker:"bia",pt:"Vamos praticar? O que você aprendeu?",en:"Let's practice? What did you learn?"},
      {speaker:"user",opts:["Aprendi muitas palavras novas!","Bastante!","Pouco."],correct:0},
      {speaker:"bia",pt:"Ótimo! Prática é o segredo da fluência!",en:"Great! Practice is the secret to fluency!"},
      {speaker:"user",opts:["Vou continuar estudando todo dia!","Com certeza!","Sempre!"],correct:0}
    ]},
    {title:"Teaching a friend",lines:[
      {speaker:"bia",pt:"Ensina essa palavra pro seu amigo!",en:"Teach this word to your friend!"},
      {speaker:"user",opts:["Olha, em português se diz assim!","Tá bom!","Difícil."],correct:0},
      {speaker:"bia",pt:"Ele aprendeu! Você é um bom professor!",en:"He learned! You're a good teacher!"},
      {speaker:"user",opts:["Ensinar é a melhor forma de aprender!","Verdade!","Obrigado!"],correct:0}
    ]}
  ],
  91: [
    {title:"Driving in Brazil",lines:[
      {speaker:"bia",pt:"Você sabe dirigir? Tem carteira?",en:"Do you know how to drive? Do you have a license?"},
      {speaker:"user",opts:["Sim! Mas o trânsito aqui é maluco!","Não dirijo.","Gosto de ônibus."],correct:0},
      {speaker:"bia",pt:"Cuidado com a velocidade! A multa é cara!",en:"Watch your speed! The fine is expensive!"},
      {speaker:"user",opts:["Preciso abastecer. Onde tem posto de gasolina?","Tá bom.","Vou devagar."],correct:0}
    ]},
    {title:"Road trip",lines:[
      {speaker:"bia",pt:"Bora fazer uma viagem de carro?",en:"Let's do a road trip?"},
      {speaker:"user",opts:["Bora! Preciso calibrar os pneus primeiro!","Vamos!","De avião."],correct:0},
      {speaker:"bia",pt:"Não esquece de checar o freio e o óleo!",en:"Don't forget to check brakes and oil!"},
      {speaker:"user",opts:["Tudo certo! Tanque cheio, retrovisor ajustado, partiu!","Bora!","Segurança primeiro!"],correct:0}
    ]},
    {title:"Quick review",lines:[
      {speaker:"bia",pt:"Vamos praticar? O que você aprendeu?",en:"Let's practice? What did you learn?"},
      {speaker:"user",opts:["Aprendi muitas palavras novas!","Bastante!","Pouco."],correct:0},
      {speaker:"bia",pt:"Ótimo! Prática é o segredo da fluência!",en:"Great! Practice is the secret to fluency!"},
      {speaker:"user",opts:["Vou continuar estudando todo dia!","Com certeza!","Sempre!"],correct:0}
    ]},
    {title:"Practice with Bia",lines:[
      {speaker:"bia",pt:"Vamos praticar mais uma vez?",en:"Let's practice one more time?"},
      {speaker:"user",opts:["Sim! Repetição é importante pra memorizar!","Bora!","De novo?"],correct:0},
      {speaker:"bia",pt:"Muito bem! Você está melhorando rápido!",en:"Very good! You're improving fast!"},
      {speaker:"user",opts:["Valeu, Bia! Cada dia um pouco melhor!","Obrigado!","Continuando!"],correct:0}
    ]}
  ],
  92: [
    {title:"Cooking together",lines:[
      {speaker:"bia",pt:"Vamos cozinhar! Primeiro, descasque as batatas.",en:"Let's cook! First, peel the potatoes."},
      {speaker:"user",opts:["Tá! E depois, pico a cebola?","Não sei cozinhar.","Posso fritar?"],correct:0},
      {speaker:"bia",pt:"Isso! Refoga o alho e a cebola. Depois ferve a água.",en:"That's it! Sauté the garlic and onion. Then boil the water."},
      {speaker:"user",opts:["Pronto! Agora é só temperar e assar!","Cheira bem!","Delícia!"],correct:0}
    ]},
    {title:"Recipe swap",lines:[
      {speaker:"bia",pt:"Me ensina a fazer brigadeiro?",en:"Teach me to make brigadeiro?"},
      {speaker:"user",opts:["Fácil! Derrete a manteiga e mistura o leite condensado!","Claro!","É difícil?"],correct:0},
      {speaker:"bia",pt:"Agora mexe sem parar e acrescenta o chocolate!",en:"Now stir nonstop and add the chocolate!"},
      {speaker:"user",opts:["E depois enrola em bolinhas! Delícia!","Pronto!","Quero provar!"],correct:0}
    ]},
    {title:"Quick review",lines:[
      {speaker:"bia",pt:"Vamos praticar? O que você aprendeu?",en:"Let's practice? What did you learn?"},
      {speaker:"user",opts:["Aprendi muitas palavras novas!","Bastante!","Pouco."],correct:0},
      {speaker:"bia",pt:"Ótimo! Prática é o segredo da fluência!",en:"Great! Practice is the secret to fluency!"},
      {speaker:"user",opts:["Vou continuar estudando todo dia!","Com certeza!","Sempre!"],correct:0}
    ]},
    {title:"Real life moment",lines:[
      {speaker:"bia",pt:"Imagina que você está no Brasil agora!",en:"Imagine you're in Brazil right now!"},
      {speaker:"user",opts:["Legal! O que eu falo primeiro?","Oi Brasil!","Estou pronto!"],correct:0},
      {speaker:"bia",pt:"Usa o que aprendeu! Confia em você!",en:"Use what you learned! Trust yourself!"},
      {speaker:"user",opts:["Vou falar com confiança! Português é lindo!","Bora!","Consegui!"],correct:0}
    ]}
  ],
  93: [
    {title:"Brazilian biomes",lines:[
      {speaker:"bia",pt:"Você conhece os biomas do Brasil?",en:"Do you know Brazil's biomes?"},
      {speaker:"user",opts:["Sim! Amazônia, Cerrado, Caatinga, Mata Atlântica, Pantanal e Pampa!","Alguns.","Não."],correct:0},
      {speaker:"bia",pt:"Perfeito! O Pantanal tem a maior biodiversidade!",en:"Perfect! The Pantanal has the greatest biodiversity!"},
      {speaker:"user",opts:["E a Caatinga é o único bioma exclusivo do Brasil!","Incrível!","Quero visitar!"],correct:0}
    ]},
    {title:"Wildlife",lines:[
      {speaker:"bia",pt:"Olha! Um jacaré no Pantanal!",en:"Look! An alligator in the Pantanal!"},
      {speaker:"user",opts:["Incrível! A biodiversidade aqui é única!","Que medo!","Quero foto!"],correct:0},
      {speaker:"bia",pt:"E olha aquela arara-azul na árvore!",en:"And look at that blue macaw in the tree!"},
      {speaker:"user",opts:["O ecossistema brasileiro é um tesouro!","Lindo!","Precisamos proteger!"],correct:0}
    ]},
    {title:"Quick review",lines:[
      {speaker:"bia",pt:"Vamos praticar? O que você aprendeu?",en:"Let's practice? What did you learn?"},
      {speaker:"user",opts:["Aprendi muitas palavras novas!","Bastante!","Pouco."],correct:0},
      {speaker:"bia",pt:"Ótimo! Prática é o segredo da fluência!",en:"Great! Practice is the secret to fluency!"},
      {speaker:"user",opts:["Vou continuar estudando todo dia!","Com certeza!","Sempre!"],correct:0}
    ]},
    {title:"Vocabulary game",lines:[
      {speaker:"bia",pt:"Vamos jogar! Eu falo em português, você traduz!",en:"Let's play! I say it in Portuguese, you translate!"},
      {speaker:"user",opts:["Bora! Estou pronto! Manda!","Vamos!","Pode falar."],correct:0},
      {speaker:"bia",pt:"Acertou tudo! Você é craque!",en:"You got everything right! You're a star!"},
      {speaker:"user",opts:["Quero jogar de novo! É divertido aprender assim!","Mais uma!","Valeu!"],correct:0}
    ]}
  ],
  94: [
    {title:"Pets",lines:[
      {speaker:"bia",pt:"Você tem animal de estimação?",en:"Do you have a pet?"},
      {speaker:"user",opts:["Tenho um cachorro! Ele precisa de ração.","Não tenho.","Quero um gato."],correct:0},
      {speaker:"bia",pt:"Que fofo! Leva ele pra passear todo dia?",en:"How cute! Do you walk him every day?"},
      {speaker:"user",opts:["Sim! E levo no veterinário todo mês!","Às vezes.","Ele tem coleira nova."],correct:0}
    ]},
    {title:"New puppy",lines:[
      {speaker:"bia",pt:"Adotei um filhote! É da raça vira-lata!",en:"I adopted a puppy! It's a mutt!"},
      {speaker:"user",opts:["Que fofo! Já levou no veterinário?","Parabéns!","Lindo!"],correct:0},
      {speaker:"bia",pt:"Sim! Comprei ração, coleira e brinquedos!",en:"Yes! I bought food, collar and toys!"},
      {speaker:"user",opts:["Vamos passear com ele no parque!","Que amor!","Ele late muito?"],correct:0}
    ]},
    {title:"Quick review",lines:[
      {speaker:"bia",pt:"Vamos praticar? O que você aprendeu?",en:"Let's practice? What did you learn?"},
      {speaker:"user",opts:["Aprendi muitas palavras novas!","Bastante!","Pouco."],correct:0},
      {speaker:"bia",pt:"Ótimo! Prática é o segredo da fluência!",en:"Great! Practice is the secret to fluency!"},
      {speaker:"user",opts:["Vou continuar estudando todo dia!","Com certeza!","Sempre!"],correct:0}
    ]},
    {title:"Confidence boost",lines:[
      {speaker:"bia",pt:"Sabe o que eu percebi? Seu português melhorou muito!",en:"Know what I noticed? Your Portuguese improved a lot!"},
      {speaker:"user",opts:["Sério? Às vezes acho que não evoluo!","Obrigado!","Acha mesmo?"],correct:0},
      {speaker:"bia",pt:"Claro que sim! Olha quantas palavras você sabe!",en:"Of course! Look how many words you know!"},
      {speaker:"user",opts:["Obrigado, Bia! Vou continuar firme!","Motivado!","Valeu!"],correct:0}
    ]}
  ],
  95: [
    {title:"What's it made of?",lines:[
      {speaker:"bia",pt:"De que material é essa mesa?",en:"What material is this table made of?"},
      {speaker:"user",opts:["É de madeira! E o copo é de vidro.","Não sei.","Bonita."],correct:0},
      {speaker:"bia",pt:"E sua bolsa? É de couro ou de tecido?",en:"And your bag? Is it leather or fabric?"},
      {speaker:"user",opts:["É de couro! Mas minha camiseta é de algodão.","Couro.","Plástico."],correct:0}
    ]},
    {title:"Craft project",lines:[
      {speaker:"bia",pt:"Vou fazer uma mesa de madeira!",en:"I'm going to make a wooden table!"},
      {speaker:"user",opts:["Legal! Vai usar metal ou só madeira?","Boa!","Difícil."],correct:0},
      {speaker:"bia",pt:"Madeira e vidro no topo! E pernas de metal!",en:"Wood and glass on top! Metal legs!"},
      {speaker:"user",opts:["Vai ficar lindo! Traz o couro pro assento!","Show!","Me ajuda?"],correct:0}
    ]},
    {title:"Quick review",lines:[
      {speaker:"bia",pt:"Vamos praticar? O que você aprendeu?",en:"Let's practice? What did you learn?"},
      {speaker:"user",opts:["Aprendi muitas palavras novas!","Bastante!","Pouco."],correct:0},
      {speaker:"bia",pt:"Ótimo! Prática é o segredo da fluência!",en:"Great! Practice is the secret to fluency!"},
      {speaker:"user",opts:["Vou continuar estudando todo dia!","Com certeza!","Sempre!"],correct:0}
    ]},
    {title:"Teaching a friend",lines:[
      {speaker:"bia",pt:"Ensina essa palavra pro seu amigo!",en:"Teach this word to your friend!"},
      {speaker:"user",opts:["Olha, em português se diz assim!","Tá bom!","Difícil."],correct:0},
      {speaker:"bia",pt:"Ele aprendeu! Você é um bom professor!",en:"He learned! You're a good teacher!"},
      {speaker:"user",opts:["Ensinar é a melhor forma de aprender!","Verdade!","Obrigado!"],correct:0}
    ]}
  ],
  96: [
    {title:"Shapes around us",lines:[
      {speaker:"bia",pt:"Qual é a forma dessa mesa?",en:"What's the shape of this table?"},
      {speaker:"user",opts:["É redonda! E a janela é quadrada.","Retângulo.","Grande."],correct:0},
      {speaker:"bia",pt:"E essa caixa? É grande ou pequena?",en:"And this box? Is it big or small?"},
      {speaker:"user",opts:["É pequena e estreita. O triângulo ali é pontudo!","Grande.","Normal."],correct:0}
    ]},
    {title:"Math class",lines:[
      {speaker:"bia",pt:"Desenha um triângulo e um círculo!",en:"Draw a triangle and a circle!"},
      {speaker:"user",opts:["Pronto! O triângulo é grande e o círculo é pequeno!","Tá!","Difícil."],correct:0},
      {speaker:"bia",pt:"Agora faz um quadrado largo!",en:"Now make a wide square!"},
      {speaker:"user",opts:["Feito! E essa forma é um retângulo estreito!","Perfeito!","Legal!"],correct:0}
    ]},
    {title:"Quick review",lines:[
      {speaker:"bia",pt:"Vamos praticar? O que você aprendeu?",en:"Let's practice? What did you learn?"},
      {speaker:"user",opts:["Aprendi muitas palavras novas!","Bastante!","Pouco."],correct:0},
      {speaker:"bia",pt:"Ótimo! Prática é o segredo da fluência!",en:"Great! Practice is the secret to fluency!"},
      {speaker:"user",opts:["Vou continuar estudando todo dia!","Com certeza!","Sempre!"],correct:0}
    ]},
    {title:"Practice with Bia",lines:[
      {speaker:"bia",pt:"Vamos praticar mais uma vez?",en:"Let's practice one more time?"},
      {speaker:"user",opts:["Sim! Repetição é importante pra memorizar!","Bora!","De novo?"],correct:0},
      {speaker:"bia",pt:"Muito bem! Você está melhorando rápido!",en:"Very good! You're improving fast!"},
      {speaker:"user",opts:["Valeu, Bia! Cada dia um pouco melhor!","Obrigado!","Continuando!"],correct:0}
    ]}
  ],
  97: [
    {title:"Fixing things",lines:[
      {speaker:"bia",pt:"A torneira está com vazamento! Preciso consertar!",en:"The faucet is leaking! I need to fix it!"},
      {speaker:"user",opts:["Chama o encanador! Ou usa um alicate!","Que chato.","Difícil."],correct:0},
      {speaker:"bia",pt:"Também preciso trocar a lâmpada e pintar a parede.",en:"I also need to change the lightbulb and paint the wall."},
      {speaker:"user",opts:["Pega o martelo e os parafusos! Vou te ajudar!","Chama o eletricista.","Boa sorte!"],correct:0}
    ]},
    {title:"Broken sink",lines:[
      {speaker:"bia",pt:"A pia quebrou! Tá vazando água!",en:"The sink broke! It's leaking!"},
      {speaker:"user",opts:["Fecha o registro e chama o encanador!","Que horror!","Conserta!"],correct:0},
      {speaker:"bia",pt:"Enquanto isso pega o balde e o pano!",en:"Meanwhile grab the bucket and cloth!"},
      {speaker:"user",opts:["Pronto! O encanador chega em uma hora!","Boa!","Rápido!"],correct:0}
    ]},
    {title:"Quick review",lines:[
      {speaker:"bia",pt:"Vamos praticar? O que você aprendeu?",en:"Let's practice? What did you learn?"},
      {speaker:"user",opts:["Aprendi muitas palavras novas!","Bastante!","Pouco."],correct:0},
      {speaker:"bia",pt:"Ótimo! Prática é o segredo da fluência!",en:"Great! Practice is the secret to fluency!"},
      {speaker:"user",opts:["Vou continuar estudando todo dia!","Com certeza!","Sempre!"],correct:0}
    ]},
    {title:"Real life moment",lines:[
      {speaker:"bia",pt:"Imagina que você está no Brasil agora!",en:"Imagine you're in Brazil right now!"},
      {speaker:"user",opts:["Legal! O que eu falo primeiro?","Oi Brasil!","Estou pronto!"],correct:0},
      {speaker:"bia",pt:"Usa o que aprendeu! Confia em você!",en:"Use what you learned! Trust yourself!"},
      {speaker:"user",opts:["Vou falar com confiança! Português é lindo!","Bora!","Consegui!"],correct:0}
    ]}
  ],
  98: [
    {title:"Storm coming!",lines:[
      {speaker:"bia",pt:"Olha a neblina! Acho que vai ter tempestade!",en:"Look at the fog! I think there'll be a storm!"},
      {speaker:"user",opts:["Ouvi um trovão! E vi um relâmpago!","Que medo!","Vamos entrar."],correct:0},
      {speaker:"bia",pt:"Tá caindo granizo! Vamos pra dentro!",en:"Hail is falling! Let's go inside!"},
      {speaker:"user",opts:["Rápido! Depois da tempestade vem o arco-íris!","Corre!","Que brisa forte!"],correct:0}
    ]},
    {title:"Weather chat",lines:[
      {speaker:"bia",pt:"Que seca terrível! Faz três meses sem chuva!",en:"Terrible drought! Three months without rain!"},
      {speaker:"user",opts:["No Nordeste a seca é um problema sério.","Triste.","Preocupante."],correct:0},
      {speaker:"bia",pt:"Mas quando chove, vem com tudo! Até enchente!",en:"But when it rains, it pours! Even floods!"},
      {speaker:"user",opts:["O clima brasileiro é extremo! Garoa em SP, seca no sertão!","Verdade!","Complicado!"],correct:0}
    ]},
    {title:"Quick review",lines:[
      {speaker:"bia",pt:"Vamos praticar? O que você aprendeu?",en:"Let's practice? What did you learn?"},
      {speaker:"user",opts:["Aprendi muitas palavras novas!","Bastante!","Pouco."],correct:0},
      {speaker:"bia",pt:"Ótimo! Prática é o segredo da fluência!",en:"Great! Practice is the secret to fluency!"},
      {speaker:"user",opts:["Vou continuar estudando todo dia!","Com certeza!","Sempre!"],correct:0}
    ]},
    {title:"Vocabulary game",lines:[
      {speaker:"bia",pt:"Vamos jogar! Eu falo em português, você traduz!",en:"Let's play! I say it in Portuguese, you translate!"},
      {speaker:"user",opts:["Bora! Estou pronto! Manda!","Vamos!","Pode falar."],correct:0},
      {speaker:"bia",pt:"Acertou tudo! Você é craque!",en:"You got everything right! You're a star!"},
      {speaker:"user",opts:["Quero jogar de novo! É divertido aprender assim!","Mais uma!","Valeu!"],correct:0}
    ]}
  ],
  99: [
    {title:"Academic talk",lines:[
      {speaker:"bia",pt:"Você já escreveu uma tese?",en:"Have you written a thesis?"},
      {speaker:"user",opts:["Sim! Usei metodologia qualitativa.","Ainda não.","O que é?"],correct:0},
      {speaker:"bia",pt:"Qual é a sua hipótese principal?",en:"What's your main hypothesis?"},
      {speaker:"user",opts:["Está na conclusão! Já terminei a bibliografia!","Ainda definindo.","É complexa."],correct:0}
    ]},
    {title:"Writing a paper",lines:[
      {speaker:"bia",pt:"Estou escrevendo meu TCC! Falta a conclusão!",en:"Writing my thesis! Just the conclusion left!"},
      {speaker:"user",opts:["Parabéns! Já revisou a bibliografia?","Quase lá!","Força!"],correct:0},
      {speaker:"bia",pt:"Sim! Cinquenta referências! O resumo ficou bom?",en:"Yes! Fifty references! Is the abstract good?"},
      {speaker:"user",opts:["Ótimo! Marca a defesa e apresenta pro orientador!","Vai arrasar!","Boa sorte!"],correct:0}
    ]},
    {title:"Quick review",lines:[
      {speaker:"bia",pt:"Vamos praticar? O que você aprendeu?",en:"Let's practice? What did you learn?"},
      {speaker:"user",opts:["Aprendi muitas palavras novas!","Bastante!","Pouco."],correct:0},
      {speaker:"bia",pt:"Ótimo! Prática é o segredo da fluência!",en:"Great! Practice is the secret to fluency!"},
      {speaker:"user",opts:["Vou continuar estudando todo dia!","Com certeza!","Sempre!"],correct:0}
    ]},
    {title:"Confidence boost",lines:[
      {speaker:"bia",pt:"Sabe o que eu percebi? Seu português melhorou muito!",en:"Know what I noticed? Your Portuguese improved a lot!"},
      {speaker:"user",opts:["Sério? Às vezes acho que não evoluo!","Obrigado!","Acha mesmo?"],correct:0},
      {speaker:"bia",pt:"Claro que sim! Olha quantas palavras você sabe!",en:"Of course! Look how many words you know!"},
      {speaker:"user",opts:["Obrigado, Bia! Vou continuar firme!","Motivado!","Valeu!"],correct:0}
    ]}
  ],
  100: [
    {title:"Legal vocabulary",lines:[
      {speaker:"bia",pt:"Você viu a notícia sobre o julgamento?",en:"Did you see the news about the trial?"},
      {speaker:"user",opts:["Sim! O réu foi considerado inocente.","Não vi.","Qual?"],correct:0},
      {speaker:"bia",pt:"A testemunha apresentou uma prova importante!",en:"The witness presented important evidence!"},
      {speaker:"user",opts:["Interessante! E qual foi a sentença?","Nossa!","Sério?"],correct:0}
    ]},
    {title:"Crime news",lines:[
      {speaker:"bia",pt:"O réu foi julgado hoje no tribunal.",en:"The defendant was judged today in court."},
      {speaker:"user",opts:["Qual foi o crime? Teve advogado?","Sério?","E o resultado?"],correct:0},
      {speaker:"bia",pt:"Roubo. A testemunha foi decisiva!",en:"Theft. The witness was decisive!"},
      {speaker:"user",opts:["E a sentença? Justiça foi feita?","Espero que sim!","Que caso!"],correct:0}
    ]},
    {title:"Quick review",lines:[
      {speaker:"bia",pt:"Vamos praticar? O que você aprendeu?",en:"Let's practice? What did you learn?"},
      {speaker:"user",opts:["Aprendi muitas palavras novas!","Bastante!","Pouco."],correct:0},
      {speaker:"bia",pt:"Ótimo! Prática é o segredo da fluência!",en:"Great! Practice is the secret to fluency!"},
      {speaker:"user",opts:["Vou continuar estudando todo dia!","Com certeza!","Sempre!"],correct:0}
    ]},
    {title:"Teaching a friend",lines:[
      {speaker:"bia",pt:"Ensina essa palavra pro seu amigo!",en:"Teach this word to your friend!"},
      {speaker:"user",opts:["Olha, em português se diz assim!","Tá bom!","Difícil."],correct:0},
      {speaker:"bia",pt:"Ele aprendeu! Você é um bom professor!",en:"He learned! You're a good teacher!"},
      {speaker:"user",opts:["Ensinar é a melhor forma de aprender!","Verdade!","Obrigado!"],correct:0}
    ]}
  ],
  101: [
    {title:"Tell me a story",lines:[
      {speaker:"bia",pt:"Era uma vez uma menina que morava na floresta...",en:"Once upon a time there was a girl who lived in the forest..."},
      {speaker:"user",opts:["E quem era o personagem principal?","Continua!","Que legal!"],correct:0},
      {speaker:"bia",pt:"Era ela! O conflito era com um lobo misterioso!",en:"It was her! The conflict was with a mysterious wolf!"},
      {speaker:"user",opts:["E o desfecho? Como termina a aventura?","Suspense!","Adoro mistério!"],correct:0}
    ]},
    {title:"Bedtime story",lines:[
      {speaker:"bia",pt:"Me conta uma história antes de dormir!",en:"Tell me a story before bed!"},
      {speaker:"user",opts:["Era uma vez um menino que achava um mapa secreto...","Que legal!","Tô com sono."],correct:0},
      {speaker:"bia",pt:"O personagem viaja por um cenário mágico!",en:"The character travels through a magical setting!"},
      {speaker:"user",opts:["E o desfecho? O mistério é resolvido?","Continua!","Boa noite!"],correct:0}
    ]},
    {title:"Quick review",lines:[
      {speaker:"bia",pt:"Vamos praticar? O que você aprendeu?",en:"Let's practice? What did you learn?"},
      {speaker:"user",opts:["Aprendi muitas palavras novas!","Bastante!","Pouco."],correct:0},
      {speaker:"bia",pt:"Ótimo! Prática é o segredo da fluência!",en:"Great! Practice is the secret to fluency!"},
      {speaker:"user",opts:["Vou continuar estudando todo dia!","Com certeza!","Sempre!"],correct:0}
    ]},
    {title:"Practice with Bia",lines:[
      {speaker:"bia",pt:"Vamos praticar mais uma vez?",en:"Let's practice one more time?"},
      {speaker:"user",opts:["Sim! Repetição é importante pra memorizar!","Bora!","De novo?"],correct:0},
      {speaker:"bia",pt:"Muito bem! Você está melhorando rápido!",en:"Very good! You're improving fast!"},
      {speaker:"user",opts:["Valeu, Bia! Cada dia um pouco melhor!","Obrigado!","Continuando!"],correct:0}
    ]}
  ],
  102: [
    {title:"Debate",lines:[
      {speaker:"bia",pt:"Na sua opinião, a tecnologia é boa ou ruim?",en:"In your opinion, is technology good or bad?"},
      {speaker:"user",opts:["Concordo que tem pontos positivos e negativos.","Boa!","Ruim."],correct:0},
      {speaker:"bia",pt:"Pode fundamentar? Quero ouvir seus argumentos!",en:"Can you substantiate? I want to hear your arguments!"},
      {speaker:"user",opts:["A tecnologia conecta pessoas, mas pode viciar. Preciso te convencer?","É complexo.","Difícil dizer."],correct:0}
    ]},
    {title:"School debate",lines:[
      {speaker:"bia",pt:"Eu discordo! Acho que a internet é boa pra educação!",en:"I disagree! I think the internet is good for education!"},
      {speaker:"user",opts:["Pode comprovar com dados?","Concordo.","Talvez."],correct:0},
      {speaker:"bia",pt:"Posso! Vou te convencer com argumentos!",en:"I can! I'll convince you with arguments!"},
      {speaker:"user",opts:["Rebato: também tem riscos! Vamos negociar!","Boa!","Aceito."],correct:0}
    ]},
    {title:"Quick review",lines:[
      {speaker:"bia",pt:"Vamos praticar? O que você aprendeu?",en:"Let's practice? What did you learn?"},
      {speaker:"user",opts:["Aprendi muitas palavras novas!","Bastante!","Pouco."],correct:0},
      {speaker:"bia",pt:"Ótimo! Prática é o segredo da fluência!",en:"Great! Practice is the secret to fluency!"},
      {speaker:"user",opts:["Vou continuar estudando todo dia!","Com certeza!","Sempre!"],correct:0}
    ]},
    {title:"Real life moment",lines:[
      {speaker:"bia",pt:"Imagina que você está no Brasil agora!",en:"Imagine you're in Brazil right now!"},
      {speaker:"user",opts:["Legal! O que eu falo primeiro?","Oi Brasil!","Estou pronto!"],correct:0},
      {speaker:"bia",pt:"Usa o que aprendeu! Confia em você!",en:"Use what you learned! Trust yourself!"},
      {speaker:"user",opts:["Vou falar com confiança! Português é lindo!","Bora!","Consegui!"],correct:0}
    ]}
  ],
  103: [
    {title:"Deep emotions",lines:[
      {speaker:"bia",pt:"Hoje estou cheia de gratidão pela vida!",en:"Today I'm full of gratitude for life!"},
      {speaker:"user",opts:["Que lindo! A empatia e gratidão mudam tudo!","Eu também!","Que bom!"],correct:0},
      {speaker:"bia",pt:"Verdade! Mesmo nos momentos de solidão, encontro inspiração.",en:"True! Even in moments of loneliness, I find inspiration."},
      {speaker:"user",opts:["A plenitude vem de dentro. Sem ressentimento!","Bonito!","Concordo!"],correct:0}
    ]},
    {title:"Grateful",lines:[
      {speaker:"bia",pt:"Sinto uma enorme gratidão por estar aqui.",en:"I feel enormous gratitude for being here."},
      {speaker:"user",opts:["Que lindo! Empatia e gratidão mudam tudo!","Eu também!","Que bom."],correct:0},
      {speaker:"bia",pt:"Tive momentos de solidão, mas encontrei inspiração.",en:"I had lonely moments but found inspiration."},
      {speaker:"user",opts:["A plenitude vem do coração! Sem arrependimento!","Verdade!","Bonito!"],correct:0}
    ]},
    {title:"Quick review",lines:[
      {speaker:"bia",pt:"Vamos praticar? O que você aprendeu?",en:"Let's practice? What did you learn?"},
      {speaker:"user",opts:["Aprendi muitas palavras novas!","Bastante!","Pouco."],correct:0},
      {speaker:"bia",pt:"Ótimo! Prática é o segredo da fluência!",en:"Great! Practice is the secret to fluency!"},
      {speaker:"user",opts:["Vou continuar estudando todo dia!","Com certeza!","Sempre!"],correct:0}
    ]},
    {title:"Vocabulary game",lines:[
      {speaker:"bia",pt:"Vamos jogar! Eu falo em português, você traduz!",en:"Let's play! I say it in Portuguese, you translate!"},
      {speaker:"user",opts:["Bora! Estou pronto! Manda!","Vamos!","Pode falar."],correct:0},
      {speaker:"bia",pt:"Acertou tudo! Você é craque!",en:"You got everything right! You're a star!"},
      {speaker:"user",opts:["Quero jogar de novo! É divertido aprender assim!","Mais uma!","Valeu!"],correct:0}
    ]}
  ],
  104: [
    {title:"Business talk",lines:[
      {speaker:"bia",pt:"Como está o faturamento da empresa?",en:"How's the company's revenue?"},
      {speaker:"user",opts:["Aumentou! O orçamento está no verde.","Não sei.","Difícil."],correct:0},
      {speaker:"bia",pt:"Ótimo! Estou pensando em abrir uma franquia!",en:"Great! I'm thinking about opening a franchise!"},
      {speaker:"user",opts:["Boa! Ser empreendedor é o futuro. Startup?","Legal!","Arriscado."],correct:0}
    ]},
    {title:"Startup pitch",lines:[
      {speaker:"bia",pt:"Tenho uma ideia de startup! Quer investir?",en:"I have a startup idea! Want to invest?"},
      {speaker:"user",opts:["Qual é o faturamento projetado?","Conta!","Quanto precisa?"],correct:0},
      {speaker:"bia",pt:"Primeiro ano: um milhão! O mercado é enorme!",en:"First year: one million! Huge market!"},
      {speaker:"user",opts:["Empreendedor nato! Qual é a concorrência?","Interessante!","Arriscado!"],correct:0}
    ]},
    {title:"Quick review",lines:[
      {speaker:"bia",pt:"Vamos praticar? O que você aprendeu?",en:"Let's practice? What did you learn?"},
      {speaker:"user",opts:["Aprendi muitas palavras novas!","Bastante!","Pouco."],correct:0},
      {speaker:"bia",pt:"Ótimo! Prática é o segredo da fluência!",en:"Great! Practice is the secret to fluency!"},
      {speaker:"user",opts:["Vou continuar estudando todo dia!","Com certeza!","Sempre!"],correct:0}
    ]},
    {title:"Confidence boost",lines:[
      {speaker:"bia",pt:"Sabe o que eu percebi? Seu português melhorou muito!",en:"Know what I noticed? Your Portuguese improved a lot!"},
      {speaker:"user",opts:["Sério? Às vezes acho que não evoluo!","Obrigado!","Acha mesmo?"],correct:0},
      {speaker:"bia",pt:"Claro que sim! Olha quantas palavras você sabe!",en:"Of course! Look how many words you know!"},
      {speaker:"user",opts:["Obrigado, Bia! Vou continuar firme!","Motivado!","Valeu!"],correct:0}
    ]}
  ],
  105: [
    {title:"Brazilian expressions",lines:[
      {speaker:"bia",pt:"Obrigada pela ajuda com a mudança!",en:"Thanks for helping with the move!"},
      {speaker:"user",opts:["Imagina! Foi um prazer ajudar.","De nada.","Tá bom."],correct:0},
      {speaker:"bia",pt:"Sério, você é demais! Pode deixar que pago o jantar.",en:"Seriously, you're amazing! I'll buy dinner."},
      {speaker:"user",opts:["Que nada! Faz parte. Somos amigos!","Beleza!","Ok!"],correct:0}
    ]},
    {title:"Helping out",lines:[
      {speaker:"bia",pt:"Pode me ajudar com a mudança?",en:"Can you help me move?"},
      {speaker:"user",opts:["Sem problema! Pode deixar comigo!","Quando?","Tô ocupado."],correct:0},
      {speaker:"bia",pt:"Você é demais! Beleza pura!",en:"You're amazing! All good!"},
      {speaker:"user",opts:["Que nada! Faz parte! Bola pra frente!","Amigos!","De nada!"],correct:0}
    ]},
    {title:"Quick review",lines:[
      {speaker:"bia",pt:"Vamos praticar? O que você aprendeu?",en:"Let's practice? What did you learn?"},
      {speaker:"user",opts:["Aprendi muitas palavras novas!","Bastante!","Pouco."],correct:0},
      {speaker:"bia",pt:"Ótimo! Prática é o segredo da fluência!",en:"Great! Practice is the secret to fluency!"},
      {speaker:"user",opts:["Vou continuar estudando todo dia!","Com certeza!","Sempre!"],correct:0}
    ]},
    {title:"Teaching a friend",lines:[
      {speaker:"bia",pt:"Ensina essa palavra pro seu amigo!",en:"Teach this word to your friend!"},
      {speaker:"user",opts:["Olha, em português se diz assim!","Tá bom!","Difícil."],correct:0},
      {speaker:"bia",pt:"Ele aprendeu! Você é um bom professor!",en:"He learned! You're a good teacher!"},
      {speaker:"user",opts:["Ensinar é a melhor forma de aprender!","Verdade!","Obrigado!"],correct:0}
    ]}
  ],
  106: [
    {title:"Tech talk",lines:[
      {speaker:"bia",pt:"Você já usou inteligência artificial?",en:"Have you used artificial intelligence?"},
      {speaker:"user",opts:["Sim! O algoritmo é incrível!","Não.","O que é?"],correct:0},
      {speaker:"bia",pt:"Legal! Eu programo e uso banco de dados no servidor.",en:"Cool! I code and use databases on the server."},
      {speaker:"user",opts:["Massa! Já fez atualização? Cuidado com bugs!","Impressionante!","Ensina!"],correct:0}
    ]},
    {title:"AI discussion",lines:[
      {speaker:"bia",pt:"A inteligência artificial vai substituir os humanos?",en:"Will AI replace humans?"},
      {speaker:"user",opts:["Acho que vai ajudar, não substituir!","Talvez.","Espero que não."],correct:0},
      {speaker:"bia",pt:"O algoritmo já tá em tudo! Servidor, nuvem, apps!",en:"Algorithms are everywhere! Servers, cloud, apps!"},
      {speaker:"user",opts:["Verdade! A tecnologia evolui rápido! Atualização constante!","Incrível!","Concordo!"],correct:0}
    ]},
    {title:"Quick review",lines:[
      {speaker:"bia",pt:"Vamos praticar? O que você aprendeu?",en:"Let's practice? What did you learn?"},
      {speaker:"user",opts:["Aprendi muitas palavras novas!","Bastante!","Pouco."],correct:0},
      {speaker:"bia",pt:"Ótimo! Prática é o segredo da fluência!",en:"Great! Practice is the secret to fluency!"},
      {speaker:"user",opts:["Vou continuar estudando todo dia!","Com certeza!","Sempre!"],correct:0}
    ]},
    {title:"Practice with Bia",lines:[
      {speaker:"bia",pt:"Vamos praticar mais uma vez?",en:"Let's practice one more time?"},
      {speaker:"user",opts:["Sim! Repetição é importante pra memorizar!","Bora!","De novo?"],correct:0},
      {speaker:"bia",pt:"Muito bem! Você está melhorando rápido!",en:"Very good! You're improving fast!"},
      {speaker:"user",opts:["Valeu, Bia! Cada dia um pouco melhor!","Obrigado!","Continuando!"],correct:0}
    ]}
  ],
  107: [
    {title:"Brazilian proverbs",lines:[
      {speaker:"bia",pt:"Está difícil aprender português?",en:"Is it hard to learn Portuguese?"},
      {speaker:"user",opts:["Água mole em pedra dura!","Sim, muito.","Não."],correct:0},
      {speaker:"bia",pt:"Isso! De grão em grão, a galinha enche o papo!",en:"Exactly! Little by little, you'll get there!"},
      {speaker:"user",opts:["Deus ajuda quem cedo madruga!","Legal!","Obrigado!"],correct:0}
    ]},
    {title:"Wisdom",lines:[
      {speaker:"bia",pt:"Sabe aquele ditado? Mais vale um pássaro na mão...",en:"Know that saying? A bird in the hand..."},
      {speaker:"user",opts:["Do que dois voando! Minha avó sempre dizia!","Legal!","Qual?"],correct:0},
      {speaker:"bia",pt:"Quem com ferro fere, com ferro será ferido!",en:"What goes around comes around!"},
      {speaker:"user",opts:["A pressa é inimiga da perfeição! Calma sempre!","Sábia!","Concordo!"],correct:0}
    ]},
    {title:"Quick review",lines:[
      {speaker:"bia",pt:"Vamos praticar? O que você aprendeu?",en:"Let's practice? What did you learn?"},
      {speaker:"user",opts:["Aprendi muitas palavras novas!","Bastante!","Pouco."],correct:0},
      {speaker:"bia",pt:"Ótimo! Prática é o segredo da fluência!",en:"Great! Practice is the secret to fluency!"},
      {speaker:"user",opts:["Vou continuar estudando todo dia!","Com certeza!","Sempre!"],correct:0}
    ]},
    {title:"Real life moment",lines:[
      {speaker:"bia",pt:"Imagina que você está no Brasil agora!",en:"Imagine you're in Brazil right now!"},
      {speaker:"user",opts:["Legal! O que eu falo primeiro?","Oi Brasil!","Estou pronto!"],correct:0},
      {speaker:"bia",pt:"Usa o que aprendeu! Confia em você!",en:"Use what you learned! Trust yourself!"},
      {speaker:"user",opts:["Vou falar com confiança! Português é lindo!","Bora!","Consegui!"],correct:0}
    ]}
  ],
  108: [
    {title:"Language mastery",lines:[
      {speaker:"bia",pt:"Você acha que já está fluente?",en:"Do you think you're fluent yet?"},
      {speaker:"user",opts:["Meu vocabulário cresceu, mas o sotaque precisa melhorar!","Quase!","Não ainda."],correct:0},
      {speaker:"bia",pt:"Sua pronúncia está ótima! A gramática também!",en:"Your pronunciation is great! Grammar too!"},
      {speaker:"user",opts:["Obrigado! Quero ser bilíngue! A comunicação é tudo!","Valeu!","Vou praticar mais!"],correct:0}
    ]},
    {title:"Language journey",lines:[
      {speaker:"bia",pt:"Quando você começou a estudar português?",en:"When did you start studying Portuguese?"},
      {speaker:"user",opts:["Faz um ano! Minha pronúncia melhorou muito!","Recentemente.","Faz tempo."],correct:0},
      {speaker:"bia",pt:"A conjugação ainda é difícil pra mim!",en:"Conjugation is still hard for me!"},
      {speaker:"user",opts:["Prática é tudo! Sua comunicação já está ótima!","Valeu!","Vou continuar!"],correct:0}
    ]},
    {title:"Quick review",lines:[
      {speaker:"bia",pt:"Vamos praticar? O que você aprendeu?",en:"Let's practice? What did you learn?"},
      {speaker:"user",opts:["Aprendi muitas palavras novas!","Bastante!","Pouco."],correct:0},
      {speaker:"bia",pt:"Ótimo! Prática é o segredo da fluência!",en:"Great! Practice is the secret to fluency!"},
      {speaker:"user",opts:["Vou continuar estudando todo dia!","Com certeza!","Sempre!"],correct:0}
    ]},
    {title:"Vocabulary game",lines:[
      {speaker:"bia",pt:"Vamos jogar! Eu falo em português, você traduz!",en:"Let's play! I say it in Portuguese, you translate!"},
      {speaker:"user",opts:["Bora! Estou pronto! Manda!","Vamos!","Pode falar."],correct:0},
      {speaker:"bia",pt:"Acertou tudo! Você é craque!",en:"You got everything right! You're a star!"},
      {speaker:"user",opts:["Quero jogar de novo! É divertido aprender assim!","Mais uma!","Valeu!"],correct:0}
    ]}
  ],
  109: [
    {title:"Months and seasons",lines:[
      {speaker:"bia",pt:"Qual é o seu mês favorito?",en:"What's your favorite month?"},
      {speaker:"user",opts:["Dezembro! Adoro o verão e o Natal!","Janeiro.","Não tenho."],correct:0},
      {speaker:"bia",pt:"No Brasil, dezembro é verão! Na primavera as flores são lindas.",en:"In Brazil, December is summer! In spring the flowers are beautiful."},
      {speaker:"user",opts:["As estações são invertidas! Que interessante!","Legal!","Sabia!"],correct:0}
    ]},
    {title:"Seasons",lines:[
      {speaker:"bia",pt:"No Brasil, janeiro é verão! Você sabia?",en:"In Brazil, January is summer! Did you know?"},
      {speaker:"user",opts:["Sim! As estações são ao contrário!","Não sabia!","Estranho!"],correct:0},
      {speaker:"bia",pt:"Em julho é inverno! Mas no Nordeste é quente o ano todo!",en:"In July it's winter! But the Northeast is warm year-round!"},
      {speaker:"user",opts:["Adoro o clima tropical! Setembro é primavera, né?","Legal!","Quero ir!"],correct:0}
    ]},
    {title:"Quick review",lines:[
      {speaker:"bia",pt:"Vamos praticar? O que você aprendeu?",en:"Let's practice? What did you learn?"},
      {speaker:"user",opts:["Aprendi muitas palavras novas!","Bastante!","Pouco."],correct:0},
      {speaker:"bia",pt:"Ótimo! Prática é o segredo da fluência!",en:"Great! Practice is the secret to fluency!"},
      {speaker:"user",opts:["Vou continuar estudando todo dia!","Com certeza!","Sempre!"],correct:0}
    ]},
    {title:"Confidence boost",lines:[
      {speaker:"bia",pt:"Sabe o que eu percebi? Seu português melhorou muito!",en:"Know what I noticed? Your Portuguese improved a lot!"},
      {speaker:"user",opts:["Sério? Às vezes acho que não evoluo!","Obrigado!","Acha mesmo?"],correct:0},
      {speaker:"bia",pt:"Claro que sim! Olha quantas palavras você sabe!",en:"Of course! Look how many words you know!"},
      {speaker:"user",opts:["Obrigado, Bia! Vou continuar firme!","Motivado!","Valeu!"],correct:0}
    ]}
  ],
  110: [
    {title:"Days of the week",lines:[
      {speaker:"bia",pt:"O que você faz na segunda-feira?",en:"What do you do on Monday?"},
      {speaker:"user",opts:["Trabalho! De terça a sexta também.","Estudo.","Nada."],correct:0},
      {speaker:"bia",pt:"E no sábado e domingo? Descansa?",en:"And on Saturday and Sunday? Do you rest?"},
      {speaker:"user",opts:["Sábado saio com amigos, domingo descanso!","Sim!","Trabalho também."],correct:0}
    ]},
    {title:"Planning the week",lines:[
      {speaker:"bia",pt:"Segunda eu trabalho, terça tenho aula...",en:"Monday I work, Tuesday I have class..."},
      {speaker:"user",opts:["E quarta? Tá livre?","Ocupada!","Que corrido!"],correct:0},
      {speaker:"bia",pt:"Quarta à noite! Vamos jantar fora?",en:"Wednesday night! Let's eat out?"},
      {speaker:"user",opts:["Fechado! Quinta e sexta tô livre também!","Combinado!","Bora!"],correct:0}
    ]},
    {title:"Quick review",lines:[
      {speaker:"bia",pt:"Vamos praticar? O que você aprendeu?",en:"Let's practice? What did you learn?"},
      {speaker:"user",opts:["Aprendi muitas palavras novas!","Bastante!","Pouco."],correct:0},
      {speaker:"bia",pt:"Ótimo! Prática é o segredo da fluência!",en:"Great! Practice is the secret to fluency!"},
      {speaker:"user",opts:["Vou continuar estudando todo dia!","Com certeza!","Sempre!"],correct:0}
    ]},
    {title:"Teaching a friend",lines:[
      {speaker:"bia",pt:"Ensina essa palavra pro seu amigo!",en:"Teach this word to your friend!"},
      {speaker:"user",opts:["Olha, em português se diz assim!","Tá bom!","Difícil."],correct:0},
      {speaker:"bia",pt:"Ele aprendeu! Você é um bom professor!",en:"He learned! You're a good teacher!"},
      {speaker:"user",opts:["Ensinar é a melhor forma de aprender!","Verdade!","Obrigado!"],correct:0}
    ]}
  ],
  111: [
    {title:"Asking questions",lines:[
      {speaker:"bia",pt:"Cadê o meu celular? Você viu?",en:"Where's my phone? Did you see it?"},
      {speaker:"user",opts:["Quem usou por último? Quando você viu?","Não.","Ali!"],correct:0},
      {speaker:"bia",pt:"Eu usei de manhã. Onde será que deixei?",en:"I used it this morning. Where could I have left it?"},
      {speaker:"user",opts:["Como é o celular? Por que não liga pra ele?","Na mesa?","No sofá?"],correct:0}
    ]},
    {title:"Twenty questions",lines:[
      {speaker:"bia",pt:"Quanto custa aquele carro?",en:"How much does that car cost?"},
      {speaker:"user",opts:["Por que quer saber? Vai comprar?","Caro.","Bonito."],correct:0},
      {speaker:"bia",pt:"Cadê o vendedor? Quando abre a loja?",en:"Where's the seller? When does the store open?"},
      {speaker:"user",opts:["Quem sabe não tem desconto? Como é o financiamento?","Boa pergunta!","Vamos ver!"],correct:0}
    ]},
    {title:"Quick review",lines:[
      {speaker:"bia",pt:"Vamos praticar? O que você aprendeu?",en:"Let's practice? What did you learn?"},
      {speaker:"user",opts:["Aprendi muitas palavras novas!","Bastante!","Pouco."],correct:0},
      {speaker:"bia",pt:"Ótimo! Prática é o segredo da fluência!",en:"Great! Practice is the secret to fluency!"},
      {speaker:"user",opts:["Vou continuar estudando todo dia!","Com certeza!","Sempre!"],correct:0}
    ]},
    {title:"Practice with Bia",lines:[
      {speaker:"bia",pt:"Vamos praticar mais uma vez?",en:"Let's practice one more time?"},
      {speaker:"user",opts:["Sim! Repetição é importante pra memorizar!","Bora!","De novo?"],correct:0},
      {speaker:"bia",pt:"Muito bem! Você está melhorando rápido!",en:"Very good! You're improving fast!"},
      {speaker:"user",opts:["Valeu, Bia! Cada dia um pouco melhor!","Obrigado!","Continuando!"],correct:0}
    ]}
  ],
  112: [
    {title:"Body parts",lines:[
      {speaker:"bia",pt:"Ai! Machuquei meu cotovelo!",en:"Ouch! I hurt my elbow!"},
      {speaker:"user",opts:["Que chato! E o tornozelo, tá bem?","Coitada!","Dói?"],correct:0},
      {speaker:"bia",pt:"O tornozelo tá bem. Mas meu pulso também dói!",en:"The ankle's fine. But my wrist also hurts!"},
      {speaker:"user",opts:["Vai no médico! Pode ser uma dor nas costas também.","Se cuida!","Melhoras!"],correct:0}
    ]},
    {title:"Gym talk",lines:[
      {speaker:"bia",pt:"Ai, dor nas costas depois da academia!",en:"Ouch, back pain after the gym!"},
      {speaker:"user",opts:["Fez exercício de braço? Tá com dor no ombro?","Coitado!","Normal."],correct:0},
      {speaker:"bia",pt:"Sim! E o joelho tá doendo também!",en:"Yes! And my knee hurts too!"},
      {speaker:"user",opts:["Alonga antes! Cuida da cintura e do tornozelo!","Se cuida!","Vai no médico!"],correct:0}
    ]},
    {title:"Quick review",lines:[
      {speaker:"bia",pt:"Vamos praticar? O que você aprendeu?",en:"Let's practice? What did you learn?"},
      {speaker:"user",opts:["Aprendi muitas palavras novas!","Bastante!","Pouco."],correct:0},
      {speaker:"bia",pt:"Ótimo! Prática é o segredo da fluência!",en:"Great! Practice is the secret to fluency!"},
      {speaker:"user",opts:["Vou continuar estudando todo dia!","Com certeza!","Sempre!"],correct:0}
    ]},
    {title:"Real life moment",lines:[
      {speaker:"bia",pt:"Imagina que você está no Brasil agora!",en:"Imagine you're in Brazil right now!"},
      {speaker:"user",opts:["Legal! O que eu falo primeiro?","Oi Brasil!","Estou pronto!"],correct:0},
      {speaker:"bia",pt:"Usa o que aprendeu! Confia em você!",en:"Use what you learned! Trust yourself!"},
      {speaker:"user",opts:["Vou falar com confiança! Português é lindo!","Bora!","Consegui!"],correct:0}
    ]}
  ],
  113: [
    {title:"Bathroom items",lines:[
      {speaker:"bia",pt:"Esqueci minha escova de dentes no hotel!",en:"I forgot my toothbrush at the hotel!"},
      {speaker:"user",opts:["Compra na farmácia! E pasta de dente também!","Que chato!","Usa a minha."],correct:0},
      {speaker:"bia",pt:"Também preciso de sabonete e shampoo!",en:"I also need soap and shampoo!"},
      {speaker:"user",opts:["E desodorante! Não esquece a toalha!","Tá bom!","Farmácia ali."],correct:0}
    ]},
    {title:"Hotel room",lines:[
      {speaker:"bia",pt:"Tem toalha limpa e sabonete no banheiro?",en:"Are there clean towels and soap in the bathroom?"},
      {speaker:"user",opts:["Sim! E shampoo e condicionador também!","Tem sim.","Não tem."],correct:0},
      {speaker:"bia",pt:"Preciso de pasta de dente. Esqueci a minha!",en:"I need toothpaste. Forgot mine!"},
      {speaker:"user",opts:["Na recepção tem! Pede na portaria!","Na farmácia!","Toma a minha!"],correct:0}
    ]},
    {title:"Quick review",lines:[
      {speaker:"bia",pt:"Vamos praticar? O que você aprendeu?",en:"Let's practice? What did you learn?"},
      {speaker:"user",opts:["Aprendi muitas palavras novas!","Bastante!","Pouco."],correct:0},
      {speaker:"bia",pt:"Ótimo! Prática é o segredo da fluência!",en:"Great! Practice is the secret to fluency!"},
      {speaker:"user",opts:["Vou continuar estudando todo dia!","Com certeza!","Sempre!"],correct:0}
    ]},
    {title:"Vocabulary game",lines:[
      {speaker:"bia",pt:"Vamos jogar! Eu falo em português, você traduz!",en:"Let's play! I say it in Portuguese, you translate!"},
      {speaker:"user",opts:["Bora! Estou pronto! Manda!","Vamos!","Pode falar."],correct:0},
      {speaker:"bia",pt:"Acertou tudo! Você é craque!",en:"You got everything right! You're a star!"},
      {speaker:"user",opts:["Quero jogar de novo! É divertido aprender assim!","Mais uma!","Valeu!"],correct:0}
    ]}
  ],
  114: [
    {title:"Furniture shopping",lines:[
      {speaker:"bia",pt:"Preciso comprar um sofá novo. O meu está velho.",en:"I need to buy a new sofa. Mine is old."},
      {speaker:"user",opts:["E uma estante? A sua gaveta também está quebrada.","Que cor?","Caro."],correct:0},
      {speaker:"bia",pt:"Verdade! E quero um tapete bonito pra sala!",en:"True! And I want a nice rug for the living room!"},
      {speaker:"user",opts:["Legal! Também compra prateleiras pro quarto!","Boa ideia!","Bonito!"],correct:0}
    ]},
    {title:"Redecorating",lines:[
      {speaker:"bia",pt:"Vou trocar os móveis da sala!",en:"I'm going to change the living room furniture!"},
      {speaker:"user",opts:["Legal! Quer um sofá novo ou uma estante?","Que cor?","Caro."],correct:0},
      {speaker:"bia",pt:"Os dois! E preciso de prateleiras pro escritório!",en:"Both! And I need shelves for the office!"},
      {speaker:"user",opts:["Compra um tapete bonito também! E um armário!","Boa!","Vai ficar lindo!"],correct:0}
    ]},
    {title:"Quick review",lines:[
      {speaker:"bia",pt:"Vamos praticar? O que você aprendeu?",en:"Let's practice? What did you learn?"},
      {speaker:"user",opts:["Aprendi muitas palavras novas!","Bastante!","Pouco."],correct:0},
      {speaker:"bia",pt:"Ótimo! Prática é o segredo da fluência!",en:"Great! Practice is the secret to fluency!"},
      {speaker:"user",opts:["Vou continuar estudando todo dia!","Com certeza!","Sempre!"],correct:0}
    ]},
    {title:"Confidence boost",lines:[
      {speaker:"bia",pt:"Sabe o que eu percebi? Seu português melhorou muito!",en:"Know what I noticed? Your Portuguese improved a lot!"},
      {speaker:"user",opts:["Sério? Às vezes acho que não evoluo!","Obrigado!","Acha mesmo?"],correct:0},
      {speaker:"bia",pt:"Claro que sim! Olha quantas palavras você sabe!",en:"Of course! Look how many words you know!"},
      {speaker:"user",opts:["Obrigado, Bia! Vou continuar firme!","Motivado!","Valeu!"],correct:0}
    ]}
  ],
  115: [
    {title:"Tasting food",lines:[
      {speaker:"bia",pt:"Experimenta esse prato! Como está?",en:"Try this dish! How is it?"},
      {speaker:"user",opts:["Hmm, está salgado! Mas o arroz está doce demais.","Bom!","Não gostei."],correct:0},
      {speaker:"bia",pt:"E a sobremesa? Está crocante ou cremosa?",en:"And the dessert? Is it crunchy or creamy?"},
      {speaker:"user",opts:["Cremosa e doce! Mas a pimenta é muito picante!","Delícia!","Perfeita!"],correct:0}
    ]},
    {title:"Food review",lines:[
      {speaker:"bia",pt:"Esse restaurante é bom? Como é a comida?",en:"Is this restaurant good? How's the food?"},
      {speaker:"user",opts:["A carne é macia e o tempero é perfeito!","Boa.","Normal."],correct:0},
      {speaker:"bia",pt:"E a sobremesa? É doce demais?",en:"And dessert? Too sweet?"},
      {speaker:"user",opts:["Não! É cremosa e o chocolate é amargo na medida!","Delícia!","Quero provar!"],correct:0}
    ]},
    {title:"Quick review",lines:[
      {speaker:"bia",pt:"Vamos praticar? O que você aprendeu?",en:"Let's practice? What did you learn?"},
      {speaker:"user",opts:["Aprendi muitas palavras novas!","Bastante!","Pouco."],correct:0},
      {speaker:"bia",pt:"Ótimo! Prática é o segredo da fluência!",en:"Great! Practice is the secret to fluency!"},
      {speaker:"user",opts:["Vou continuar estudando todo dia!","Com certeza!","Sempre!"],correct:0}
    ]},
    {title:"Teaching a friend",lines:[
      {speaker:"bia",pt:"Ensina essa palavra pro seu amigo!",en:"Teach this word to your friend!"},
      {speaker:"user",opts:["Olha, em português se diz assim!","Tá bom!","Difícil."],correct:0},
      {speaker:"bia",pt:"Ele aprendeu! Você é um bom professor!",en:"He learned! You're a good teacher!"},
      {speaker:"user",opts:["Ensinar é a melhor forma de aprender!","Verdade!","Obrigado!"],correct:0}
    ]}
  ],
  116: [
    {title:"Where is it?",lines:[
      {speaker:"bia",pt:"Onde está o livro? Está na mesa?",en:"Where's the book? Is it on the table?"},
      {speaker:"user",opts:["Não, está em cima da estante, perto da janela.","Na mesa.","Não sei."],correct:0},
      {speaker:"bia",pt:"E a chave? Está dentro da bolsa?",en:"And the key? Is it inside the purse?"},
      {speaker:"user",opts:["Acho que está embaixo do sofá, ao lado da porta!","Sim!","Talvez."],correct:0}
    ]},
    {title:"Where did I put it?",lines:[
      {speaker:"bia",pt:"Perdi minha carteira! Cadê?",en:"I lost my wallet! Where is it?"},
      {speaker:"user",opts:["Olha no bolso do casaco ou dentro da mochila!","Na mesa?","Sei lá."],correct:0},
      {speaker:"bia",pt:"Não tá lá! Será que caiu entre o sofá e a parede?",en:"It's not there! Could it have fallen between the couch and wall?"},
      {speaker:"user",opts:["Achei! Estava embaixo da mesa, perto da cadeira!","Oba!","Que alívio!"],correct:0}
    ]},
    {title:"Quick review",lines:[
      {speaker:"bia",pt:"Vamos praticar? O que você aprendeu?",en:"Let's practice? What did you learn?"},
      {speaker:"user",opts:["Aprendi muitas palavras novas!","Bastante!","Pouco."],correct:0},
      {speaker:"bia",pt:"Ótimo! Prática é o segredo da fluência!",en:"Great! Practice is the secret to fluency!"},
      {speaker:"user",opts:["Vou continuar estudando todo dia!","Com certeza!","Sempre!"],correct:0}
    ]},
    {title:"Practice with Bia",lines:[
      {speaker:"bia",pt:"Vamos praticar mais uma vez?",en:"Let's practice one more time?"},
      {speaker:"user",opts:["Sim! Repetição é importante pra memorizar!","Bora!","De novo?"],correct:0},
      {speaker:"bia",pt:"Muito bem! Você está melhorando rápido!",en:"Very good! You're improving fast!"},
      {speaker:"user",opts:["Valeu, Bia! Cada dia um pouco melhor!","Obrigado!","Continuando!"],correct:0}
    ]}
  ],
  117: [
    {title:"Reactions!",lines:[
      {speaker:"bia",pt:"Passei no vestibular!",en:"I passed the entrance exam!"},
      {speaker:"user",opts:["Que maravilha! Parabéns!","Legal.","Sério?"],correct:0},
      {speaker:"bia",pt:"E ganhei uma bolsa de estudos!",en:"And I got a scholarship!"},
      {speaker:"user",opts:["Meu Deus! Não acredito! Arrasou!","Boa.","Que sorte."],correct:0}
    ]},
    {title:"Surprise!",lines:[
      {speaker:"bia",pt:"Ganhei na loteria!",en:"I won the lottery!"},
      {speaker:"user",opts:["Meu Deus! Não acredito! Que maravilha!","Mentira!","Sério?"],correct:0},
      {speaker:"bia",pt:"É verdade! Caramba! Não sei o que fazer!",en:"It's true! Wow! I don't know what to do!"},
      {speaker:"user",opts:["Nossa! Que sorte! Faz uma festa!","Parabéns!","Uau!"],correct:0}
    ]},
    {title:"Quick review",lines:[
      {speaker:"bia",pt:"Vamos praticar? O que você aprendeu?",en:"Let's practice? What did you learn?"},
      {speaker:"user",opts:["Aprendi muitas palavras novas!","Bastante!","Pouco."],correct:0},
      {speaker:"bia",pt:"Ótimo! Prática é o segredo da fluência!",en:"Great! Practice is the secret to fluency!"},
      {speaker:"user",opts:["Vou continuar estudando todo dia!","Com certeza!","Sempre!"],correct:0}
    ]},
    {title:"Real life moment",lines:[
      {speaker:"bia",pt:"Imagina que você está no Brasil agora!",en:"Imagine you're in Brazil right now!"},
      {speaker:"user",opts:["Legal! O que eu falo primeiro?","Oi Brasil!","Estou pronto!"],correct:0},
      {speaker:"bia",pt:"Usa o que aprendeu! Confia em você!",en:"Use what you learned! Trust yourself!"},
      {speaker:"user",opts:["Vou falar com confiança! Português é lindo!","Bora!","Consegui!"],correct:0}
    ]}
  ],
  118: [
    {title:"School supplies",lines:[
      {speaker:"bia",pt:"Mãe, preciso de material escolar!",en:"Mom, I need school supplies!"},
      {speaker:"user",opts:["O que falta? Caderno, caneta, lápis?","Quanto?","Tem em casa."],correct:0},
      {speaker:"bia",pt:"Preciso de borracha, régua e uma mochila nova!",en:"I need an eraser, ruler and a new backpack!"},
      {speaker:"user",opts:["E cola e tesoura? Vamos fazer a lista completa!","Vamos comprar!","Tudo?"],correct:0}
    ]},
    {title:"Back to school",lines:[
      {speaker:"bia",pt:"Preciso comprar o material escolar!",en:"I need to buy school supplies!"},
      {speaker:"user",opts:["Fez a lista? Caderno, lápis, caneta...","Quanto?","Vamos."],correct:0},
      {speaker:"bia",pt:"Também preciso de mochila e estojo novo!",en:"I also need a new backpack and pencil case!"},
      {speaker:"user",opts:["E não esquece a régua, tesoura e cola!","Pronto!","Tudo!"],correct:0}
    ]},
    {title:"Quick review",lines:[
      {speaker:"bia",pt:"Vamos praticar? O que você aprendeu?",en:"Let's practice? What did you learn?"},
      {speaker:"user",opts:["Aprendi muitas palavras novas!","Bastante!","Pouco."],correct:0},
      {speaker:"bia",pt:"Ótimo! Prática é o segredo da fluência!",en:"Great! Practice is the secret to fluency!"},
      {speaker:"user",opts:["Vou continuar estudando todo dia!","Com certeza!","Sempre!"],correct:0}
    ]},
    {title:"Vocabulary game",lines:[
      {speaker:"bia",pt:"Vamos jogar! Eu falo em português, você traduz!",en:"Let's play! I say it in Portuguese, you translate!"},
      {speaker:"user",opts:["Bora! Estou pronto! Manda!","Vamos!","Pode falar."],correct:0},
      {speaker:"bia",pt:"Acertou tudo! Você é craque!",en:"You got everything right! You're a star!"},
      {speaker:"user",opts:["Quero jogar de novo! É divertido aprender assim!","Mais uma!","Valeu!"],correct:0}
    ]}
  ],
  119: [
    {title:"Tools",lines:[
      {speaker:"bia",pt:"Cadê a chave de fenda? Preciso apertar esse parafuso.",en:"Where's the screwdriver? I need to tighten this screw."},
      {speaker:"user",opts:["Tá na caixa com o martelo e o alicate!","Não sei.","Qual?"],correct:0},
      {speaker:"bia",pt:"Achei! Também preciso da serra pra cortar essa madeira.",en:"Found it! I also need the saw to cut this wood."},
      {speaker:"user",opts:["Cuidado! Pega a escada também!","Tá bom!","Posso ajudar?"],correct:0}
    ]},
    {title:"Building something",lines:[
      {speaker:"bia",pt:"Vou construir uma casinha pro cachorro!",en:"I'm going to build a doghouse!"},
      {speaker:"user",opts:["Que legal! Vai precisar de serra e pregos!","Boa!","Compra pronta."],correct:0},
      {speaker:"bia",pt:"Também preciso de martelo e chave de fenda!",en:"I also need a hammer and screwdriver!"},
      {speaker:"user",opts:["Mãos à obra! Pega as ferramentas e bora!","Vamos!","Posso ajudar?"],correct:0}
    ]},
    {title:"Quick review",lines:[
      {speaker:"bia",pt:"Vamos praticar? O que você aprendeu?",en:"Let's practice? What did you learn?"},
      {speaker:"user",opts:["Aprendi muitas palavras novas!","Bastante!","Pouco."],correct:0},
      {speaker:"bia",pt:"Ótimo! Prática é o segredo da fluência!",en:"Great! Practice is the secret to fluency!"},
      {speaker:"user",opts:["Vou continuar estudando todo dia!","Com certeza!","Sempre!"],correct:0}
    ]},
    {title:"Confidence boost",lines:[
      {speaker:"bia",pt:"Sabe o que eu percebi? Seu português melhorou muito!",en:"Know what I noticed? Your Portuguese improved a lot!"},
      {speaker:"user",opts:["Sério? Às vezes acho que não evoluo!","Obrigado!","Acha mesmo?"],correct:0},
      {speaker:"bia",pt:"Claro que sim! Olha quantas palavras você sabe!",en:"Of course! Look how many words you know!"},
      {speaker:"user",opts:["Obrigado, Bia! Vou continuar firme!","Motivado!","Valeu!"],correct:0}
    ]}
  ],
  120: [
    {title:"Big numbers",lines:[
      {speaker:"bia",pt:"São Paulo tem mais de doze milhões de habitantes!",en:"São Paulo has more than twelve million inhabitants!"},
      {speaker:"user",opts:["Nossa! É a maior cidade da América do Sul!","Muita gente!","Sério?"],correct:0},
      {speaker:"bia",pt:"E o Brasil tem duzentos e quatorze milhões!",en:"And Brazil has two hundred fourteen million!"},
      {speaker:"user",opts:["Incrível! Quantos estados tem?","Uau!","Bilhões?"],correct:0}
    ]},
    {title:"Money talk",lines:[
      {speaker:"bia",pt:"Quanto custa uma casa no Rio?",en:"How much is a house in Rio?"},
      {speaker:"user",opts:["Depende! De quinhentos mil a cinco milhões!","Caro!","Não sei."],correct:0},
      {speaker:"bia",pt:"Cinco milhões?! Isso é muito!",en:"Five million?! That's a lot!"},
      {speaker:"user",opts:["No Leblon é mais! Dois bilhões de reais em investimentos na região!","Incrível!","Absurdo!"],correct:0}
    ]},
    {title:"Quick review",lines:[
      {speaker:"bia",pt:"Vamos praticar? O que você aprendeu?",en:"Let's practice? What did you learn?"},
      {speaker:"user",opts:["Aprendi muitas palavras novas!","Bastante!","Pouco."],correct:0},
      {speaker:"bia",pt:"Ótimo! Prática é o segredo da fluência!",en:"Great! Practice is the secret to fluency!"},
      {speaker:"user",opts:["Vou continuar estudando todo dia!","Com certeza!","Sempre!"],correct:0}
    ]},
    {title:"Teaching a friend",lines:[
      {speaker:"bia",pt:"Ensina essa palavra pro seu amigo!",en:"Teach this word to your friend!"},
      {speaker:"user",opts:["Olha, em português se diz assim!","Tá bom!","Difícil."],correct:0},
      {speaker:"bia",pt:"Ele aprendeu! Você é um bom professor!",en:"He learned! You're a good teacher!"},
      {speaker:"user",opts:["Ensinar é a melhor forma de aprender!","Verdade!","Obrigado!"],correct:0}
    ]}
  ],
  121: [
    {title:"Phone life",lines:[
      {speaker:"bia",pt:"Manda um zap pra mim!",en:"Send me a WhatsApp!"},
      {speaker:"user",opts:["Tá! Vou te ligar daqui a pouco.","Ok!","Agora não dá."],correct:0},
      {speaker:"bia",pt:"Prefiro áudio! Escrever mensagem demora!",en:"I prefer voice message! Typing takes too long!"},
      {speaker:"user",opts:["Típico brasileiro! Todo mundo manda áudio!","Eu também!","Prefiro texto."],correct:0}
    ]},
    {title:"Group chat",lines:[
      {speaker:"bia",pt:"O grupo do WhatsApp não para! Cem mensagens!",en:"The WhatsApp group won't stop! A hundred messages!"},
      {speaker:"user",opts:["Silencia as notificações!","Normal.","Sai do grupo."],correct:0},
      {speaker:"bia",pt:"Mas é o grupo da família! Não posso sair!",en:"But it's the family group! I can't leave!"},
      {speaker:"user",opts:["Liga pra sua mãe e resolve por telefone!","Verdade!","Boa ideia!"],correct:0}
    ]},
    {title:"Quick review",lines:[
      {speaker:"bia",pt:"Vamos praticar? O que você aprendeu?",en:"Let's practice? What did you learn?"},
      {speaker:"user",opts:["Aprendi muitas palavras novas!","Bastante!","Pouco."],correct:0},
      {speaker:"bia",pt:"Ótimo! Prática é o segredo da fluência!",en:"Great! Practice is the secret to fluency!"},
      {speaker:"user",opts:["Vou continuar estudando todo dia!","Com certeza!","Sempre!"],correct:0}
    ]},
    {title:"Practice with Bia",lines:[
      {speaker:"bia",pt:"Vamos praticar mais uma vez?",en:"Let's practice one more time?"},
      {speaker:"user",opts:["Sim! Repetição é importante pra memorizar!","Bora!","De novo?"],correct:0},
      {speaker:"bia",pt:"Muito bem! Você está melhorando rápido!",en:"Very good! You're improving fast!"},
      {speaker:"user",opts:["Valeu, Bia! Cada dia um pouco melhor!","Obrigado!","Continuando!"],correct:0}
    ]}
  ],
  122: [
    {title:"Verb practice",lines:[
      {speaker:"bia",pt:"Como se conjuga 'ir' no presente?",en:"How do you conjugate 'ir' in the present?"},
      {speaker:"user",opts:["Eu vou, você vai, nós vamos, eles vão!","Eu vai?","Não sei."],correct:0},
      {speaker:"bia",pt:"Perfeito! E 'ser' no passado?",en:"Perfect! And 'ser' in the past?"},
      {speaker:"user",opts:["Eu fui, você foi, nós fomos, eles foram!","Eu fui!","Difícil!"],correct:0}
    ]},
    {title:"Grammar game",lines:[
      {speaker:"bia",pt:"Conjugue 'fazer' no presente!",en:"Conjugate 'fazer' in the present!"},
      {speaker:"user",opts:["Eu faço, você faz, nós fazemos, eles fazem!","Eu faço.","Difícil!"],correct:0},
      {speaker:"bia",pt:"Perfeito! E 'ter' no imperfeito?",en:"Perfect! And 'ter' in the imperfect?"},
      {speaker:"user",opts:["Eu tinha, você tinha, nós tínhamos, eles tinham!","Sei!","Hmmm..."],correct:0}
    ]},
    {title:"Quick review",lines:[
      {speaker:"bia",pt:"Vamos praticar? O que você aprendeu?",en:"Let's practice? What did you learn?"},
      {speaker:"user",opts:["Aprendi muitas palavras novas!","Bastante!","Pouco."],correct:0},
      {speaker:"bia",pt:"Ótimo! Prática é o segredo da fluência!",en:"Great! Practice is the secret to fluency!"},
      {speaker:"user",opts:["Vou continuar estudando todo dia!","Com certeza!","Sempre!"],correct:0}
    ]},
    {title:"Real life moment",lines:[
      {speaker:"bia",pt:"Imagina que você está no Brasil agora!",en:"Imagine you're in Brazil right now!"},
      {speaker:"user",opts:["Legal! O que eu falo primeiro?","Oi Brasil!","Estou pronto!"],correct:0},
      {speaker:"bia",pt:"Usa o que aprendeu! Confia em você!",en:"Use what you learned! Trust yourself!"},
      {speaker:"user",opts:["Vou falar com confiança! Português é lindo!","Bora!","Consegui!"],correct:0}
    ]}
  ],
  123: [
    {title:"Giving commands",lines:[
      {speaker:"bia",pt:"Estou perdida! O que eu faço?",en:"I'm lost! What do I do?"},
      {speaker:"user",opts:["Venha aqui! Vá em frente e vire à direita.","Não sei.","Boa sorte."],correct:0},
      {speaker:"bia",pt:"E depois?",en:"And then?"},
      {speaker:"user",opts:["Pare na esquina e abra o mapa!","Continue.","Fale com alguém."],correct:0}
    ]},
    {title:"Quick review",lines:[
      {speaker:"bia",pt:"Vamos praticar? O que você aprendeu?",en:"Let's practice? What did you learn?"},
      {speaker:"user",opts:["Aprendi muitas palavras novas!","Bastante!","Pouco."],correct:0},
      {speaker:"bia",pt:"Ótimo! Prática é o segredo da fluência!",en:"Great! Practice is the secret to fluency!"},
      {speaker:"user",opts:["Vou continuar estudando todo dia!","Com certeza!","Sempre!"],correct:0}
    ]},
    {title:"Cooking commands",lines:[
      {speaker:"bia",pt:"Presta atenção! Corta o tomate em cubos!",en:"Pay attention! Cut the tomato in cubes!"},
      {speaker:"user",opts:["Cortei! E agora? Mexe a panela?","Pronto!","Tá difícil."],correct:0},
      {speaker:"bia",pt:"Não! Primeiro refogue a cebola! Depois acrescente!",en:"No! First sauté the onion! Then add!"},
      {speaker:"user",opts:["Entendi! Mexa devagar e prove o tempero!","Tá bom!","Delícia!"],correct:0}
    ]},
    {title:"Vocabulary game",lines:[
      {speaker:"bia",pt:"Vamos jogar! Eu falo em português, você traduz!",en:"Let's play! I say it in Portuguese, you translate!"},
      {speaker:"user",opts:["Bora! Estou pronto! Manda!","Vamos!","Pode falar."],correct:0},
      {speaker:"bia",pt:"Acertou tudo! Você é craque!",en:"You got everything right! You're a star!"},
      {speaker:"user",opts:["Quero jogar de novo! É divertido aprender assim!","Mais uma!","Valeu!"],correct:0}
    ]}
  ],
  124: [
    {title:"What are you doing?",lines:[
      {speaker:"bia",pt:"O que você está fazendo agora?",en:"What are you doing right now?"},
      {speaker:"user",opts:["Estou estudando português!","Estou comendo.","Nada."],correct:0},
      {speaker:"bia",pt:"Que legal! Eu estava lendo um livro, mas parei.",en:"Cool! I was reading a book, but I stopped."},
      {speaker:"user",opts:["O que você estava lendo? Estou ouvindo música!","Legal.","Que livro?"],correct:0}
    ]},
    {title:"Quick review",lines:[
      {speaker:"bia",pt:"Vamos praticar? O que você aprendeu?",en:"Let's practice? What did you learn?"},
      {speaker:"user",opts:["Aprendi muitas palavras novas!","Bastante!","Pouco."],correct:0},
      {speaker:"bia",pt:"Ótimo! Prática é o segredo da fluência!",en:"Great! Practice is the secret to fluency!"},
      {speaker:"user",opts:["Vou continuar estudando todo dia!","Com certeza!","Sempre!"],correct:0}
    ]},
    {title:"Right now",lines:[
      {speaker:"bia",pt:"O que está acontecendo lá fora?",en:"What's happening outside?"},
      {speaker:"user",opts:["Está chovendo e as crianças estão correndo!","Nada.","Não sei."],correct:0},
      {speaker:"bia",pt:"E o cachorro? Tá latindo?",en:"And the dog? Is it barking?"},
      {speaker:"user",opts:["Tá sim! Tá querendo entrar! Está molhando tudo!","Coitado!","Deixa entrar!"],correct:0}
    ]},
    {title:"Confidence boost",lines:[
      {speaker:"bia",pt:"Sabe o que eu percebi? Seu português melhorou muito!",en:"Know what I noticed? Your Portuguese improved a lot!"},
      {speaker:"user",opts:["Sério? Às vezes acho que não evoluo!","Obrigado!","Acha mesmo?"],correct:0},
      {speaker:"bia",pt:"Claro que sim! Olha quantas palavras você sabe!",en:"Of course! Look how many words you know!"},
      {speaker:"user",opts:["Obrigado, Bia! Vou continuar firme!","Motivado!","Valeu!"],correct:0}
    ]}
  ],
  125: [
    {title:"Daily routine (reflexive)",lines:[
      {speaker:"bia",pt:"A que horas você se levanta?",en:"What time do you get up?"},
      {speaker:"user",opts:["Me levanto às sete e me visto rápido.","Cedo.","Tarde."],correct:0},
      {speaker:"bia",pt:"Eu me deito tarde! Me lembro que ontem dormi à meia-noite.",en:"I go to bed late! I remember yesterday I slept at midnight."},
      {speaker:"user",opts:["Se cuida! É importante se deitar cedo.","Eu também.","Nossa!"],correct:0}
    ]},
    {title:"Quick review",lines:[
      {speaker:"bia",pt:"Vamos praticar? O que você aprendeu?",en:"Let's practice? What did you learn?"},
      {speaker:"user",opts:["Aprendi muitas palavras novas!","Bastante!","Pouco."],correct:0},
      {speaker:"bia",pt:"Ótimo! Prática é o segredo da fluência!",en:"Great! Practice is the secret to fluency!"},
      {speaker:"user",opts:["Vou continuar estudando todo dia!","Com certeza!","Sempre!"],correct:0}
    ]},
    {title:"Getting ready",lines:[
      {speaker:"bia",pt:"Já se levantou? Estamos atrasados!",en:"Are you up yet? We're late!"},
      {speaker:"user",opts:["Calma! Estou me vestindo agora!","Já levantei!","Mais cinco minutos."],correct:0},
      {speaker:"bia",pt:"Apresse-se! Precisa se preparar rápido!",en:"Hurry! You need to get ready fast!"},
      {speaker:"user",opts:["Pronto! Me arrumei em cinco minutos!","Rápido!","Vamos!"],correct:0}
    ]},
    {title:"Teaching a friend",lines:[
      {speaker:"bia",pt:"Ensina essa palavra pro seu amigo!",en:"Teach this word to your friend!"},
      {speaker:"user",opts:["Olha, em português se diz assim!","Tá bom!","Difícil."],correct:0},
      {speaker:"bia",pt:"Ele aprendeu! Você é um bom professor!",en:"He learned! You're a good teacher!"},
      {speaker:"user",opts:["Ensinar é a melhor forma de aprender!","Verdade!","Obrigado!"],correct:0}
    ]}
  ],
  126: [
    {title:"Have you been...?",lines:[
      {speaker:"bia",pt:"Você tem estudado bastante?",en:"Have you been studying a lot?"},
      {speaker:"user",opts:["Tenho sim! Tenho praticado todo dia!","Mais ou menos.","Nem tanto."],correct:0},
      {speaker:"bia",pt:"Ótimo! Seus resultados têm melhorado muito!",en:"Great! Your results have been improving a lot!"},
      {speaker:"user",opts:["Valeu! Tenho feito os exercícios todos!","Obrigado!","Que bom!"],correct:0}
    ]},
    {title:"Updates",lines:[
      {speaker:"bia",pt:"O que você tem feito ultimamente?",en:"What have you been up to lately?"},
      {speaker:"user",opts:["Tenho trabalhado muito e estudado português!","Nada demais.","Viajando."],correct:0},
      {speaker:"bia",pt:"Que legal! Tem visto seus amigos?",en:"Cool! Have you been seeing your friends?"},
      {speaker:"user",opts:["Tenho sim! A gente tem se encontrado todo sábado!","Sempre!","Pouco."],correct:0}
    ]},
    {title:"Quick review",lines:[
      {speaker:"bia",pt:"Vamos praticar? O que você aprendeu?",en:"Let's practice? What did you learn?"},
      {speaker:"user",opts:["Aprendi muitas palavras novas!","Bastante!","Pouco."],correct:0},
      {speaker:"bia",pt:"Ótimo! Prática é o segredo da fluência!",en:"Great! Practice is the secret to fluency!"},
      {speaker:"user",opts:["Vou continuar estudando todo dia!","Com certeza!","Sempre!"],correct:0}
    ]},
    {title:"Practice with Bia",lines:[
      {speaker:"bia",pt:"Vamos praticar mais uma vez?",en:"Let's practice one more time?"},
      {speaker:"user",opts:["Sim! Repetição é importante pra memorizar!","Bora!","De novo?"],correct:0},
      {speaker:"bia",pt:"Muito bem! Você está melhorando rápido!",en:"Very good! You're improving fast!"},
      {speaker:"user",opts:["Valeu, Bia! Cada dia um pouco melhor!","Obrigado!","Continuando!"],correct:0}
    ]}
  ],
  127: [
    {title:"Passive voice",lines:[
      {speaker:"bia",pt:"O português é falado no Brasil e em mais oito países!",en:"Portuguese is spoken in Brazil and eight more countries!"},
      {speaker:"user",opts:["Sério? Não sabia! A língua foi espalhada pela colonização?","Uau!","Quantos?"],correct:0},
      {speaker:"bia",pt:"Isso! O Brasil foi descoberto em 1500 pelos portugueses!",en:"Right! Brazil was discovered in 1500 by the Portuguese!"},
      {speaker:"user",opts:["E a independência foi declarada em 1822!","Interessante!","Legal!"],correct:0}
    ]},
    {title:"Signs around town",lines:[
      {speaker:"bia",pt:"Olha a placa: 'Fala-se português aqui'!",en:"Look at the sign: 'Portuguese spoken here'!"},
      {speaker:"user",opts:["Legal! E ali: 'Proibido estacionar'!","Cool!","Onde?"],correct:0},
      {speaker:"bia",pt:"Essas construções com 'se' são muito usadas!",en:"These 'se' constructions are very common!"},
      {speaker:"user",opts:["É verdade! 'Vende-se', 'aluga-se', 'procura-se'!","Entendi!","Que útil!"],correct:0}
    ]},
    {title:"Quick review",lines:[
      {speaker:"bia",pt:"Vamos praticar? O que você aprendeu?",en:"Let's practice? What did you learn?"},
      {speaker:"user",opts:["Aprendi muitas palavras novas!","Bastante!","Pouco."],correct:0},
      {speaker:"bia",pt:"Ótimo! Prática é o segredo da fluência!",en:"Great! Practice is the secret to fluency!"},
      {speaker:"user",opts:["Vou continuar estudando todo dia!","Com certeza!","Sempre!"],correct:0}
    ]},
    {title:"Real life moment",lines:[
      {speaker:"bia",pt:"Imagina que você está no Brasil agora!",en:"Imagine you're in Brazil right now!"},
      {speaker:"user",opts:["Legal! O que eu falo primeiro?","Oi Brasil!","Estou pronto!"],correct:0},
      {speaker:"bia",pt:"Usa o que aprendeu! Confia em você!",en:"Use what you learned! Trust yourself!"},
      {speaker:"user",opts:["Vou falar com confiança! Português é lindo!","Bora!","Consegui!"],correct:0}
    ]}
  ],
  128: [
    {title:"He said, she said",lines:[
      {speaker:"bia",pt:"O Pedro disse que vai viajar amanhã!",en:"Pedro said he's traveling tomorrow!"},
      {speaker:"user",opts:["Sério? Ele me contou que ia ficar!","Não sabia!","Pra onde?"],correct:0},
      {speaker:"bia",pt:"A Maria perguntou se a gente quer ir junto!",en:"Maria asked if we want to go along!"},
      {speaker:"user",opts:["Ela falou que tem espaço? Respondeu que sim?","Bora!","Quero ir!"],correct:0}
    ]},
    {title:"Telephone game",lines:[
      {speaker:"bia",pt:"A Maria disse que o Pedro falou que vai chover.",en:"Maria said Pedro said it's going to rain."},
      {speaker:"user",opts:["Ele perguntou se a gente vai à festa?","Sério?","Quem disse?"],correct:0},
      {speaker:"bia",pt:"Ela respondeu que sim! Mas contou que ele mudou de ideia!",en:"She said yes! But told me he changed his mind!"},
      {speaker:"user",opts:["Comunicação é tudo! Fala direto com ele!","Verdade!","Concordo!"],correct:0}
    ]},
    {title:"Quick review",lines:[
      {speaker:"bia",pt:"Vamos praticar? O que você aprendeu?",en:"Let's practice? What did you learn?"},
      {speaker:"user",opts:["Aprendi muitas palavras novas!","Bastante!","Pouco."],correct:0},
      {speaker:"bia",pt:"Ótimo! Prática é o segredo da fluência!",en:"Great! Practice is the secret to fluency!"},
      {speaker:"user",opts:["Vou continuar estudando todo dia!","Com certeza!","Sempre!"],correct:0}
    ]},
    {title:"Vocabulary game",lines:[
      {speaker:"bia",pt:"Vamos jogar! Eu falo em português, você traduz!",en:"Let's play! I say it in Portuguese, you translate!"},
      {speaker:"user",opts:["Bora! Estou pronto! Manda!","Vamos!","Pode falar."],correct:0},
      {speaker:"bia",pt:"Acertou tudo! Você é craque!",en:"You got everything right! You're a star!"},
      {speaker:"user",opts:["Quero jogar de novo! É divertido aprender assim!","Mais uma!","Valeu!"],correct:0}
    ]}
  ],
  129: [
    {title:"Diminutives",lines:[
      {speaker:"bia",pt:"Quer um cafezinho?",en:"Want a little coffee?"},
      {speaker:"user",opts:["Quero sim! Só um pouquinho de açúcar!","Não, obrigado.","Café grande!"],correct:0},
      {speaker:"bia",pt:"Prontinho! E um pedacinho de bolo?",en:"All ready! And a little piece of cake?"},
      {speaker:"user",opts:["Obrigadinho! Está uma delícia!","Não, tá bom.","Amorzinho!"],correct:0}
    ]},
    {title:"Quick review",lines:[
      {speaker:"bia",pt:"Vamos praticar? O que você aprendeu?",en:"Let's practice? What did you learn?"},
      {speaker:"user",opts:["Aprendi muitas palavras novas!","Bastante!","Pouco."],correct:0},
      {speaker:"bia",pt:"Ótimo! Prática é o segredo da fluência!",en:"Great! Practice is the secret to fluency!"},
      {speaker:"user",opts:["Vou continuar estudando todo dia!","Com certeza!","Sempre!"],correct:0}
    ]},
    {title:"Cute nicknames",lines:[
      {speaker:"bia",pt:"Oi, amorzinho! Tudo bem, benzinho?",en:"Hi, little love! All good, sweetheart?"},
      {speaker:"user",opts:["Oi, gatinha! Tudo ótimo, obrigadinho!","Oi amor!","Tudo bem!"],correct:0},
      {speaker:"bia",pt:"Que fofinho! Você é um amorzão!",en:"How cute! You're a big sweetheart!"},
      {speaker:"user",opts:["No Brasil, diminutivo é carinho puro!","Verdade!","Adoro!"],correct:0}
    ]},
    {title:"Confidence boost",lines:[
      {speaker:"bia",pt:"Sabe o que eu percebi? Seu português melhorou muito!",en:"Know what I noticed? Your Portuguese improved a lot!"},
      {speaker:"user",opts:["Sério? Às vezes acho que não evoluo!","Obrigado!","Acha mesmo?"],correct:0},
      {speaker:"bia",pt:"Claro que sim! Olha quantas palavras você sabe!",en:"Of course! Look how many words you know!"},
      {speaker:"user",opts:["Obrigado, Bia! Vou continuar firme!","Motivado!","Valeu!"],correct:0}
    ]}
  ],
  130: [
    {title:"Big things!",lines:[
      {speaker:"bia",pt:"Que casarão bonito! E que festão foi ontem!",en:"What a beautiful mansion! And what a huge party yesterday!"},
      {speaker:"user",opts:["Foi um problemão estacionar! Mas o amigão do Pedro ajudou!","Grande mesmo!","Demais!"],correct:0},
      {speaker:"bia",pt:"Verdade! Ele é um amigão! E que mulherão a namorada dele!",en:"True! He's a great friend! And his girlfriend is gorgeous!"},
      {speaker:"user",opts:["O carrão dele é novo! Foi um gastão!","Legal!","Nossa!"],correct:0}
    ]},
    {title:"Exaggeration",lines:[
      {speaker:"bia",pt:"Que carrão! É um monstro!",en:"What a huge car! It's a monster!"},
      {speaker:"user",opts:["E o dono? É um homão! Fortão!","And the owner? Big guy! Super strong!"],correct:0},
      {speaker:"bia",pt:"Fizeram um festão na mansão dele!",en:"They threw a huge party at his mansion!"},
      {speaker:"user",opts:["Que gastão! Mas foi um showzão!","Big spender! But what a huge show!","Legal!"],correct:0}
    ]},
    {title:"Quick review",lines:[
      {speaker:"bia",pt:"Vamos praticar? O que você aprendeu?",en:"Let's practice? What did you learn?"},
      {speaker:"user",opts:["Aprendi muitas palavras novas!","Bastante!","Pouco."],correct:0},
      {speaker:"bia",pt:"Ótimo! Prática é o segredo da fluência!",en:"Great! Practice is the secret to fluency!"},
      {speaker:"user",opts:["Vou continuar estudando todo dia!","Com certeza!","Sempre!"],correct:0}
    ]},
    {title:"Teaching a friend",lines:[
      {speaker:"bia",pt:"Ensina essa palavra pro seu amigo!",en:"Teach this word to your friend!"},
      {speaker:"user",opts:["Olha, em português se diz assim!","Tá bom!","Difícil."],correct:0},
      {speaker:"bia",pt:"Ele aprendeu! Você é um bom professor!",en:"He learned! You're a good teacher!"},
      {speaker:"user",opts:["Ensinar é a melhor forma de aprender!","Verdade!","Obrigado!"],correct:0}
    ]}
  ],
  131: [
    {title:"Common mistakes quiz",lines:[
      {speaker:"bia",pt:"Qual está certo: 'pra mim fazer' ou 'pra eu fazer'?",en:"Which is correct: 'for me to do'?"},
      {speaker:"user",opts:["Pra eu fazer! Mim não é sujeito.","Pra mim fazer.","Sei lá."],correct:0},
      {speaker:"bia",pt:"Perfeito! E 'a gente vamos' ou 'a gente vai'?",en:"Perfect! And 'a gente vamos' or 'a gente vai'?"},
      {speaker:"user",opts:["A gente vai! Singular!","A gente vamos.","Os dois."],correct:0}
    ]},
    {title:"Error correction",lines:[
      {speaker:"bia",pt:"'Menas gente' ou 'menos gente'?",en:"'Menas gente' or 'menos gente'?"},
      {speaker:"user",opts:["Menos! 'Menos' nunca muda!","Menas!","Sei lá."],correct:0},
      {speaker:"bia",pt:"E 'fazem dois anos' ou 'faz dois anos'?",en:"And 'fazem dois anos' or 'faz dois anos'?"},
      {speaker:"user",opts:["Faz! Quando é tempo, 'fazer' fica no singular!","Perfeito!","Sabia!"],correct:0}
    ]},
    {title:"Quick review",lines:[
      {speaker:"bia",pt:"Vamos praticar? O que você aprendeu?",en:"Let's practice? What did you learn?"},
      {speaker:"user",opts:["Aprendi muitas palavras novas!","Bastante!","Pouco."],correct:0},
      {speaker:"bia",pt:"Ótimo! Prática é o segredo da fluência!",en:"Great! Practice is the secret to fluency!"},
      {speaker:"user",opts:["Vou continuar estudando todo dia!","Com certeza!","Sempre!"],correct:0}
    ]},
    {title:"Practice with Bia",lines:[
      {speaker:"bia",pt:"Vamos praticar mais uma vez?",en:"Let's practice one more time?"},
      {speaker:"user",opts:["Sim! Repetição é importante pra memorizar!","Bora!","De novo?"],correct:0},
      {speaker:"bia",pt:"Muito bem! Você está melhorando rápido!",en:"Very good! You're improving fast!"},
      {speaker:"user",opts:["Valeu, Bia! Cada dia um pouco melhor!","Obrigado!","Continuando!"],correct:0}
    ]}
  ],
  132: [
    {title:"Texting in Portuguese",lines:[
      {speaker:"bia",pt:"E aí, blz? Vc vai na festa hj?",en:"Hey, all good? You going to the party today?"},
      {speaker:"user",opts:["Bora! Kd vc? Flw!","Sim, vou.","Não entendi."],correct:0},
      {speaker:"bia",pt:"Kkkkk tmj! Te pego às 8. Sdds!",en:"Hahaha we're together! I'll pick you up at 8. Miss you!"},
      {speaker:"user",opts:["Vlw! Sdds tbm! Até!","Ok.","Obrigado."],correct:0}
    ]},
    {title:"Meme talk",lines:[
      {speaker:"bia",pt:"Vc viu o meme? Kkkkkk mto bom!",en:"Did u see the meme? Hahaha so good!"},
      {speaker:"user",opts:["Mdss kkkkk ri demais! Manda dnv!","Omg lol I laughed so hard! Send again!"],correct:0},
      {speaker:"bia",pt:"Pse né kkk tmj! Flw!",en:"Ikr lol! We're together! Bye!"},
      {speaker:"user",opts:["Vlw! Sdds de vc! Bjs!","Thx! Miss u! Kisses!","Falou!"],correct:0}
    ]},
    {title:"Quick review",lines:[
      {speaker:"bia",pt:"Vamos praticar? O que você aprendeu?",en:"Let's practice? What did you learn?"},
      {speaker:"user",opts:["Aprendi muitas palavras novas!","Bastante!","Pouco."],correct:0},
      {speaker:"bia",pt:"Ótimo! Prática é o segredo da fluência!",en:"Great! Practice is the secret to fluency!"},
      {speaker:"user",opts:["Vou continuar estudando todo dia!","Com certeza!","Sempre!"],correct:0}
    ]},
    {title:"Real life moment",lines:[
      {speaker:"bia",pt:"Imagina que você está no Brasil agora!",en:"Imagine you're in Brazil right now!"},
      {speaker:"user",opts:["Legal! O que eu falo primeiro?","Oi Brasil!","Estou pronto!"],correct:0},
      {speaker:"bia",pt:"Usa o que aprendeu! Confia em você!",en:"Use what you learned! Trust yourself!"},
      {speaker:"user",opts:["Vou falar com confiança! Português é lindo!","Bora!","Consegui!"],correct:0}
    ]}
  ],
  133: [
    {title:"Regional slang",lines:[
      {speaker:"bia",pt:"De onde no Brasil você quer visitar?",en:"Where in Brazil do you want to visit?"},
      {speaker:"user",opts:["O Nordeste! Quero ouvir 'oxente' e comer tapioca!","Rio!","São Paulo."],correct:0},
      {speaker:"bia",pt:"Bah! O Sul também é tri legal! Tem churrasco gaúcho!",en:"Wow! The South is also super cool! They have gaucho BBQ!"},
      {speaker:"user",opts:["Mano, quero conhecer tudo! O Brasil é demais!","Legal!","Bora!"],correct:0}
    ]},
    {title:"Regional tour",lines:[
      {speaker:"bia",pt:"Vou visitar Recife! Alguma dica?",en:"Visiting Recife! Any tips?"},
      {speaker:"user",opts:["Oxente! Vai adorar! Come tapioca na praia!","Massa!","Cuidado."],correct:0},
      {speaker:"bia",pt:"E no Sul? Porto Alegre?",en:"And in the South? Porto Alegre?"},
      {speaker:"user",opts:["Bah, tchê! Come churrasco e toma chimarrão!","Quero ir!","Os dois!"],correct:0}
    ]},
    {title:"Quick review",lines:[
      {speaker:"bia",pt:"Vamos praticar? O que você aprendeu?",en:"Let's practice? What did you learn?"},
      {speaker:"user",opts:["Aprendi muitas palavras novas!","Bastante!","Pouco."],correct:0},
      {speaker:"bia",pt:"Ótimo! Prática é o segredo da fluência!",en:"Great! Practice is the secret to fluency!"},
      {speaker:"user",opts:["Vou continuar estudando todo dia!","Com certeza!","Sempre!"],correct:0}
    ]},
    {title:"Vocabulary game",lines:[
      {speaker:"bia",pt:"Vamos jogar! Eu falo em português, você traduz!",en:"Let's play! I say it in Portuguese, you translate!"},
      {speaker:"user",opts:["Bora! Estou pronto! Manda!","Vamos!","Pode falar."],correct:0},
      {speaker:"bia",pt:"Acertou tudo! Você é craque!",en:"You got everything right! You're a star!"},
      {speaker:"user",opts:["Quero jogar de novo! É divertido aprender assim!","Mais uma!","Valeu!"],correct:0}
    ]}
  ],
  134: [
    {title:"How do you feel?",lines:[
      {speaker:"bia",pt:"Tô com fome e com sede! Vamos comer?",en:"I'm hungry and thirsty! Shall we eat?"},
      {speaker:"user",opts:["Também! Tô com sono também, mas vamos!","Eu também!","Bora!"],correct:0},
      {speaker:"bia",pt:"Tá frio lá fora! Leva casaco!",en:"It's cold outside! Bring a jacket!"},
      {speaker:"user",opts:["Tô com calor aqui dentro! Mas tá bom, vou levar.","Ok!","Sempre frio!"],correct:0}
    ]},
    {title:"Physical feelings",lines:[
      {speaker:"bia",pt:"Tô tremendo de frio!",en:"I'm shaking with cold!"},
      {speaker:"user",opts:["Vem cá! Toma um chá quente!","Coitado!","Veste casaco."],correct:0},
      {speaker:"bia",pt:"Agora tô suando! Tá muito quente aqui dentro!",en:"Now I'm sweating! It's too hot inside!"},
      {speaker:"user",opts:["Abre a janela! Você tá com tonteira?","Liga o ventilador!","Tá bem?"],correct:0}
    ]},
    {title:"Quick review",lines:[
      {speaker:"bia",pt:"Vamos praticar? O que você aprendeu?",en:"Let's practice? What did you learn?"},
      {speaker:"user",opts:["Aprendi muitas palavras novas!","Bastante!","Pouco."],correct:0},
      {speaker:"bia",pt:"Ótimo! Prática é o segredo da fluência!",en:"Great! Practice is the secret to fluency!"},
      {speaker:"user",opts:["Vou continuar estudando todo dia!","Com certeza!","Sempre!"],correct:0}
    ]},
    {title:"Confidence boost",lines:[
      {speaker:"bia",pt:"Sabe o que eu percebi? Seu português melhorou muito!",en:"Know what I noticed? Your Portuguese improved a lot!"},
      {speaker:"user",opts:["Sério? Às vezes acho que não evoluo!","Obrigado!","Acha mesmo?"],correct:0},
      {speaker:"bia",pt:"Claro que sim! Olha quantas palavras você sabe!",en:"Of course! Look how many words you know!"},
      {speaker:"user",opts:["Obrigado, Bia! Vou continuar firme!","Motivado!","Valeu!"],correct:0}
    ]}
  ],
  135: [
    {title:"Advanced dating",lines:[
      {speaker:"bia",pt:"Acho que a Carla tá paquerando o João!",en:"I think Carla is flirting with João!"},
      {speaker:"user",opts:["Sério? Eu acho que ela tá a fim dele faz tempo!","Eita!","Não percebi."],correct:0},
      {speaker:"bia",pt:"Eles vão ficar! Acho que vão namorar!",en:"They're going to hook up! I think they'll start dating!"},
      {speaker:"user",opts:["Que fofo! Tomara que se apaixonem!","Torço por eles!","Casal lindo!"],correct:0}
    ]},
    {title:"Relationship advice",lines:[
      {speaker:"bia",pt:"Briguei com meu namorado. O que eu faço?",en:"I fought with my boyfriend. What do I do?"},
      {speaker:"user",opts:["Conversa com calma! Pede desculpa se errou!","Que chato.","Termina."],correct:0},
      {speaker:"bia",pt:"Ele disse que precisa de um tempo!",en:"He said he needs some time!"},
      {speaker:"user",opts:["Respeita o espaço dele. Se é amor, volta!","Vai dar certo.","Força!"],correct:0}
    ]},
    {title:"Quick review",lines:[
      {speaker:"bia",pt:"Vamos praticar? O que você aprendeu?",en:"Let's practice? What did you learn?"},
      {speaker:"user",opts:["Aprendi muitas palavras novas!","Bastante!","Pouco."],correct:0},
      {speaker:"bia",pt:"Ótimo! Prática é o segredo da fluência!",en:"Great! Practice is the secret to fluency!"},
      {speaker:"user",opts:["Vou continuar estudando todo dia!","Com certeza!","Sempre!"],correct:0}
    ]},
    {title:"Teaching a friend",lines:[
      {speaker:"bia",pt:"Ensina essa palavra pro seu amigo!",en:"Teach this word to your friend!"},
      {speaker:"user",opts:["Olha, em português se diz assim!","Tá bom!","Difícil."],correct:0},
      {speaker:"bia",pt:"Ele aprendeu! Você é um bom professor!",en:"He learned! You're a good teacher!"},
      {speaker:"user",opts:["Ensinar é a melhor forma de aprender!","Verdade!","Obrigado!"],correct:0}
    ]}
  ],
  136: [
    {title:"Going out",lines:[
      {speaker:"bia",pt:"Vamos pra balada hoje? Tem DJ bom!",en:"Let's go clubbing tonight? There's a good DJ!"},
      {speaker:"user",opts:["Bora! Quero dançar e curtir!","Tô cansado.","Talvez."],correct:0},
      {speaker:"bia",pt:"Vou pedir uma caipirinha! Quer uma cerveja?",en:"I'll order a caipirinha! Want a beer?"},
      {speaker:"user",opts:["Quero! Mas amanhã vou ter ressaca!","Só água.","Chopp!"],correct:0}
    ]},
    {title:"Quick review",lines:[
      {speaker:"bia",pt:"Vamos praticar? O que você aprendeu?",en:"Let's practice? What did you learn?"},
      {speaker:"user",opts:["Aprendi muitas palavras novas!","Bastante!","Pouco."],correct:0},
      {speaker:"bia",pt:"Ótimo! Prática é o segredo da fluência!",en:"Great! Practice is the secret to fluency!"},
      {speaker:"user",opts:["Vou continuar estudando todo dia!","Com certeza!","Sempre!"],correct:0}
    ]},
    {title:"After party",lines:[
      {speaker:"bia",pt:"A festa de ontem foi demais! Que ressaca!",en:"Yesterday's party was amazing! What a hangover!"},
      {speaker:"user",opts:["Dançamos até as quatro da manhã!","Eu também!","Dormi cedo."],correct:0},
      {speaker:"bia",pt:"O DJ mandou muito! Tocou funk e sertanejo!",en:"The DJ killed it! Played funk and sertanejo!"},
      {speaker:"user",opts:["Preciso de um café forte e um pão de queijo!","Eu também!","Boa ideia!"],correct:0}
    ]},
    {title:"Practice with Bia",lines:[
      {speaker:"bia",pt:"Vamos praticar mais uma vez?",en:"Let's practice one more time?"},
      {speaker:"user",opts:["Sim! Repetição é importante pra memorizar!","Bora!","De novo?"],correct:0},
      {speaker:"bia",pt:"Muito bem! Você está melhorando rápido!",en:"Very good! You're improving fast!"},
      {speaker:"user",opts:["Valeu, Bia! Cada dia um pouco melhor!","Obrigado!","Continuando!"],correct:0}
    ]}
  ],
  137: [
    {title:"Brazilian history",lines:[
      {speaker:"bia",pt:"Você sabe quando o Brasil ficou independente?",en:"Do you know when Brazil became independent?"},
      {speaker:"user",opts:["Em 1822! Dom Pedro declarou a independência!","Não sei.","1500?"],correct:0},
      {speaker:"bia",pt:"Isso! E a república veio em 1889. A abolição foi em 1888!",en:"Right! And the republic came in 1889. Abolition was in 1888!"},
      {speaker:"user",opts:["A história do Brasil é fascinante!","Interessante!","Quero saber mais!"],correct:0}
    ]},
    {title:"History lesson",lines:[
      {speaker:"bia",pt:"Em que ano o Brasil virou república?",en:"What year did Brazil become a republic?"},
      {speaker:"user",opts:["Em 1889! Depois da monarquia de Dom Pedro II!","1822?","Não sei."],correct:0},
      {speaker:"bia",pt:"E a abolição da escravatura?",en:"And the abolition of slavery?"},
      {speaker:"user",opts:["1888! A Princesa Isabel assinou a Lei Áurea!","Sabia!","Importante!"],correct:0}
    ]},
    {title:"Quick review",lines:[
      {speaker:"bia",pt:"Vamos praticar? O que você aprendeu?",en:"Let's practice? What did you learn?"},
      {speaker:"user",opts:["Aprendi muitas palavras novas!","Bastante!","Pouco."],correct:0},
      {speaker:"bia",pt:"Ótimo! Prática é o segredo da fluência!",en:"Great! Practice is the secret to fluency!"},
      {speaker:"user",opts:["Vou continuar estudando todo dia!","Com certeza!","Sempre!"],correct:0}
    ]},
    {title:"Real life moment",lines:[
      {speaker:"bia",pt:"Imagina que você está no Brasil agora!",en:"Imagine you're in Brazil right now!"},
      {speaker:"user",opts:["Legal! O que eu falo primeiro?","Oi Brasil!","Estou pronto!"],correct:0},
      {speaker:"bia",pt:"Usa o que aprendeu! Confia em você!",en:"Use what you learned! Trust yourself!"},
      {speaker:"user",opts:["Vou falar com confiança! Português é lindo!","Bora!","Consegui!"],correct:0}
    ]}
  ],
  138: [
    {title:"Music deep dive",lines:[
      {speaker:"bia",pt:"Quem é seu compositor brasileiro favorito?",en:"Who's your favorite Brazilian composer?"},
      {speaker:"user",opts:["Gosto do Tom Jobim! A melodia dele é linda!","Caetano!","Não conheço muitos."],correct:0},
      {speaker:"bia",pt:"A letra das músicas dele é pura poesia! E o ritmo é único!",en:"The lyrics of his songs are pure poetry! And the rhythm is unique!"},
      {speaker:"user",opts:["A batida da bossa nova mudou a música mundial!","Concordo!","Demais!"],correct:0}
    ]},
    {title:"Concert",lines:[
      {speaker:"bia",pt:"Vou no show do Gilberto Gil! Vem comigo?",en:"Going to Gilberto Gil's concert! Come with me?"},
      {speaker:"user",opts:["Bora! Ele é um compositor incrível!","Quem é?","Não posso."],correct:0},
      {speaker:"bia",pt:"A melodia e a letra dele são pura arte!",en:"His melody and lyrics are pure art!"},
      {speaker:"user",opts:["O ritmo da tropicália é único! Vai ser inesquecível!","Demais!","Mal posso esperar!"],correct:0}
    ]},
    {title:"Quick review",lines:[
      {speaker:"bia",pt:"Vamos praticar? O que você aprendeu?",en:"Let's practice? What did you learn?"},
      {speaker:"user",opts:["Aprendi muitas palavras novas!","Bastante!","Pouco."],correct:0},
      {speaker:"bia",pt:"Ótimo! Prática é o segredo da fluência!",en:"Great! Practice is the secret to fluency!"},
      {speaker:"user",opts:["Vou continuar estudando todo dia!","Com certeza!","Sempre!"],correct:0}
    ]},
    {title:"Vocabulary game",lines:[
      {speaker:"bia",pt:"Vamos jogar! Eu falo em português, você traduz!",en:"Let's play! I say it in Portuguese, you translate!"},
      {speaker:"user",opts:["Bora! Estou pronto! Manda!","Vamos!","Pode falar."],correct:0},
      {speaker:"bia",pt:"Acertou tudo! Você é craque!",en:"You got everything right! You're a star!"},
      {speaker:"user",opts:["Quero jogar de novo! É divertido aprender assim!","Mais uma!","Valeu!"],correct:0}
    ]}
  ],
  139: [
    {title:"Weather expressions",lines:[
      {speaker:"bia",pt:"Está chovendo canivete lá fora!",en:"It's raining cats and dogs out there!"},
      {speaker:"user",opts:["Nossa! Tá fazendo um frio de rachar também!","Sério?","Que horror!"],correct:0},
      {speaker:"bia",pt:"Depois da tempestade vem a bonança!",en:"After the storm comes the calm!"},
      {speaker:"user",opts:["Verdade! Amanhã o sol vai brilhar!","Tomara!","Espero!"],correct:0}
    ]},
    {title:"Crazy weather",lines:[
      {speaker:"bia",pt:"Saiu sol e chuva ao mesmo tempo!",en:"Sun and rain at the same time!"},
      {speaker:"user",opts:["Casamento de raposa! Vai ter arco-íris!","Legal!","Estranho."],correct:0},
      {speaker:"bia",pt:"Olha! Arco-íris duplo! Nunca vi isso!",en:"Look! Double rainbow! Never seen that!"},
      {speaker:"user",opts:["Incrível! Depois dessa garoa, vem a brisa!","Lindo!","Quero foto!"],correct:0}
    ]},
    {title:"Quick review",lines:[
      {speaker:"bia",pt:"Vamos praticar? O que você aprendeu?",en:"Let's practice? What did you learn?"},
      {speaker:"user",opts:["Aprendi muitas palavras novas!","Bastante!","Pouco."],correct:0},
      {speaker:"bia",pt:"Ótimo! Prática é o segredo da fluência!",en:"Great! Practice is the secret to fluency!"},
      {speaker:"user",opts:["Vou continuar estudando todo dia!","Com certeza!","Sempre!"],correct:0}
    ]},
    {title:"Confidence boost",lines:[
      {speaker:"bia",pt:"Sabe o que eu percebi? Seu português melhorou muito!",en:"Know what I noticed? Your Portuguese improved a lot!"},
      {speaker:"user",opts:["Sério? Às vezes acho que não evoluo!","Obrigado!","Acha mesmo?"],correct:0},
      {speaker:"bia",pt:"Claro que sim! Olha quantas palavras você sabe!",en:"Of course! Look how many words you know!"},
      {speaker:"user",opts:["Obrigado, Bia! Vou continuar firme!","Motivado!","Valeu!"],correct:0}
    ]}
  ],
  140: [
    {title:"Cooking advanced",lines:[
      {speaker:"bia",pt:"Vou temperar a carne e marinar por duas horas.",en:"I'll season the meat and marinate for two hours."},
      {speaker:"user",opts:["Boa! Vou grelhar os legumes no vapor!","Delícia!","Posso ajudar?"],correct:0},
      {speaker:"bia",pt:"Perfeito! Não esquece de picar o coentro e espremer o limão!",en:"Perfect! Don't forget to chop the cilantro and squeeze the lime!"},
      {speaker:"user",opts:["Pronto! O tempero brasileiro é o melhor do mundo!","Cheirando bem!","Hmm!"],correct:0}
    ]},
    {title:"Grilling",lines:[
      {speaker:"bia",pt:"Vou fazer churrasco! Quer ajudar a temperar?",en:"I'm grilling! Want to help season?"},
      {speaker:"user",opts:["Claro! Sal grosso e alho na picanha!","Sim!","Não sei."],correct:0},
      {speaker:"bia",pt:"Agora é só grelhar no ponto certo!",en:"Now just grill it to the right point!"},
      {speaker:"user",opts:["Hmm! O segredo é não mexer muito! Ficou perfeito!","Delícia!","Cheirando bem!"],correct:0}
    ]},
    {title:"Quick review",lines:[
      {speaker:"bia",pt:"Vamos praticar? O que você aprendeu?",en:"Let's practice? What did you learn?"},
      {speaker:"user",opts:["Aprendi muitas palavras novas!","Bastante!","Pouco."],correct:0},
      {speaker:"bia",pt:"Ótimo! Prática é o segredo da fluência!",en:"Great! Practice is the secret to fluency!"},
      {speaker:"user",opts:["Vou continuar estudando todo dia!","Com certeza!","Sempre!"],correct:0}
    ]},
    {title:"Teaching a friend",lines:[
      {speaker:"bia",pt:"Ensina essa palavra pro seu amigo!",en:"Teach this word to your friend!"},
      {speaker:"user",opts:["Olha, em português se diz assim!","Tá bom!","Difícil."],correct:0},
      {speaker:"bia",pt:"Ele aprendeu! Você é um bom professor!",en:"He learned! You're a good teacher!"},
      {speaker:"user",opts:["Ensinar é a melhor forma de aprender!","Verdade!","Obrigado!"],correct:0}
    ]}
  ],
  141: [
    {title:"Filler words",lines:[
      {speaker:"bia",pt:"Tipo, sei lá, acho que vou sair hoje.",en:"Like, I dunno, I think I'm going out today."},
      {speaker:"user",opts:["Né? Pois é, eu também tô a fim!","Bora!","Hmm."],correct:0},
      {speaker:"bia",pt:"Aliás, quer dizer, a festa é no bar do Pedro!",en:"By the way, I mean, the party is at Pedro's bar!"},
      {speaker:"user",opts:["Aí sim! Enfim, afinal, vamos ou não?","Partiu!","Vamos!"],correct:0}
    ]},
    {title:"Like, you know",lines:[
      {speaker:"bia",pt:"Tipo, sabe, aquele negócio, sei lá...",en:"Like, you know, that thing, I dunno..."},
      {speaker:"user",opts:["Quer dizer o quê? Fala direito!","Hmm?","Continua."],correct:0},
      {speaker:"bia",pt:"Enfim, quer dizer, o que eu quero dizer é...",en:"Anyway, I mean, what I'm trying to say is..."},
      {speaker:"user",opts:["Entendi! Às vezes as palavras fogem, né?","Normal!","Acontece!"],correct:0}
    ]},
    {title:"Quick review",lines:[
      {speaker:"bia",pt:"Vamos praticar? O que você aprendeu?",en:"Let's practice? What did you learn?"},
      {speaker:"user",opts:["Aprendi muitas palavras novas!","Bastante!","Pouco."],correct:0},
      {speaker:"bia",pt:"Ótimo! Prática é o segredo da fluência!",en:"Great! Practice is the secret to fluency!"},
      {speaker:"user",opts:["Vou continuar estudando todo dia!","Com certeza!","Sempre!"],correct:0}
    ]},
    {title:"Practice with Bia",lines:[
      {speaker:"bia",pt:"Vamos praticar mais uma vez?",en:"Let's practice one more time?"},
      {speaker:"user",opts:["Sim! Repetição é importante pra memorizar!","Bora!","De novo?"],correct:0},
      {speaker:"bia",pt:"Muito bem! Você está melhorando rápido!",en:"Very good! You're improving fast!"},
      {speaker:"user",opts:["Valeu, Bia! Cada dia um pouco melhor!","Obrigado!","Continuando!"],correct:0}
    ]}
  ],
  142: [
    {title:"Saying goodbye",lines:[
      {speaker:"bia",pt:"Então tá bom, preciso ir. Foi ótimo te ver!",en:"Alright then, I need to go. Great seeing you!"},
      {speaker:"user",opts:["Foi um prazer! Se cuida, viu?","Tchau.","Ok."],correct:0},
      {speaker:"bia",pt:"Um beijo! Manda notícias! Fica com Deus!",en:"A kiss! Send news! Stay with God!"},
      {speaker:"user",opts:["Beijos! Até a próxima! Saudades já!","Tchau tchau!","Bye!"],correct:0}
    ]},
    {title:"Quick review",lines:[
      {speaker:"bia",pt:"Vamos praticar? O que você aprendeu?",en:"Let's practice? What did you learn?"},
      {speaker:"user",opts:["Aprendi muitas palavras novas!","Bastante!","Pouco."],correct:0},
      {speaker:"bia",pt:"Ótimo! Prática é o segredo da fluência!",en:"Great! Practice is the secret to fluency!"},
      {speaker:"user",opts:["Vou continuar estudando todo dia!","Com certeza!","Sempre!"],correct:0}
    ]},
    {title:"Airport farewell",lines:[
      {speaker:"bia",pt:"Chegou a hora de ir embora. Que tristeza!",en:"Time to go. How sad!"},
      {speaker:"user",opts:["Não chora! A gente se vê em breve!","Saudades!","Tchau."],correct:0},
      {speaker:"bia",pt:"Promete que volta? O Brasil te espera!",en:"Promise you'll come back? Brazil awaits you!"},
      {speaker:"user",opts:["Prometo! Levo o Brasil no coração! Até breve!","Sempre!","Beijos!"],correct:0}
    ]},
    {title:"Real life moment",lines:[
      {speaker:"bia",pt:"Imagina que você está no Brasil agora!",en:"Imagine you're in Brazil right now!"},
      {speaker:"user",opts:["Legal! O que eu falo primeiro?","Oi Brasil!","Estou pronto!"],correct:0},
      {speaker:"bia",pt:"Usa o que aprendeu! Confia em você!",en:"Use what you learned! Trust yourself!"},
      {speaker:"user",opts:["Vou falar com confiança! Português é lindo!","Bora!","Consegui!"],correct:0}
    ]}
  ],
  143: [
    {title:"Final review!",lines:[
      {speaker:"bia",pt:"Parabéns! Você completou todas as lições!",en:"Congratulations! You completed all the lessons!"},
      {speaker:"user",opts:["Obrigado, Bia! Foi um prazer aprender com você!","Valeu!","Incrível!"],correct:0},
      {speaker:"bia",pt:"Agora você fala português! Tô com saudade já!",en:"Now you speak Portuguese! I miss you already!"},
      {speaker:"user",opts:["Saudades! Mas a gente se fala! Beijos!","Tchau!","Até logo!"],correct:0}
    ]},
    {title:"Graduation",lines:[
      {speaker:"bia",pt:"Consegui! Terminei o curso de português!",en:"I did it! Finished the Portuguese course!"},
      {speaker:"user",opts:["Parabéns! Você é bilíngue agora!","Incrível!","Merece!"],correct:0},
      {speaker:"bia",pt:"Obrigado por tudo, Bia! Aprendi demais!",en:"Thanks for everything, Bia! Learned so much!"},
      {speaker:"user",opts:["O prazer foi meu! Tchau e até sempre!","Saudades!","Beijos!"],correct:0}
    ]},
    {title:"Quick review",lines:[
      {speaker:"bia",pt:"Vamos praticar? O que você aprendeu?",en:"Let's practice? What did you learn?"},
      {speaker:"user",opts:["Aprendi muitas palavras novas!","Bastante!","Pouco."],correct:0},
      {speaker:"bia",pt:"Ótimo! Prática é o segredo da fluência!",en:"Great! Practice is the secret to fluency!"},
      {speaker:"user",opts:["Vou continuar estudando todo dia!","Com certeza!","Sempre!"],correct:0}
    ]},
    {title:"Vocabulary game",lines:[
      {speaker:"bia",pt:"Vamos jogar! Eu falo em português, você traduz!",en:"Let's play! I say it in Portuguese, you translate!"},
      {speaker:"user",opts:["Bora! Estou pronto! Manda!","Vamos!","Pode falar."],correct:0},
      {speaker:"bia",pt:"Acertou tudo! Você é craque!",en:"You got everything right! You're a star!"},
      {speaker:"user",opts:["Quero jogar de novo! É divertido aprender assim!","Mais uma!","Valeu!"],correct:0}
    ]}
  ],
  144: [
    {title:"More basics review",lines:[
      {speaker:"bia",pt:"Vamos revisar! Como se diz 'thank you'?",en:"Let's review! How do you say 'thank you'?"},
      {speaker:"user",opts:["Obrigado! Ou obrigada se eu for mulher.","Gracias!","Thanks!"],correct:0},
      {speaker:"bia",pt:"Perfeito! E como se diz 'excuse me'?",en:"Perfect! And how do you say 'excuse me'?"},
      {speaker:"user",opts:["Com licença! Ou desculpa se eu fizer algo errado.","Perdão!","Por favor."],correct:0}
    ]},
    {title:"Quick review",lines:[
      {speaker:"bia",pt:"Vamos praticar? O que você aprendeu?",en:"Let's practice? What did you learn?"},
      {speaker:"user",opts:["Aprendi muitas palavras novas!","Bastante!","Pouco."],correct:0},
      {speaker:"bia",pt:"Ótimo! Prática é o segredo da fluência!",en:"Great! Practice is the secret to fluency!"},
      {speaker:"user",opts:["Vou continuar estudando todo dia!","Com certeza!","Sempre!"],correct:0}
    ]},
    {title:"Essential phrases",lines:[
      {speaker:"bia",pt:"Sabe as três frases mais importantes?",en:"Know the three most important phrases?"},
      {speaker:"user",opts:["Por favor, obrigado e desculpa!","Quais?","Não sei."],correct:0},
      {speaker:"bia",pt:"Perfeito! Com essas três você sobrevive!",en:"Perfect! With those three you survive!"},
      {speaker:"user",opts:["E 'cadê o banheiro?' — a quarta mais importante!","Verdade!","Essencial!"],correct:0}
    ]},
    {title:"Confidence boost",lines:[
      {speaker:"bia",pt:"Sabe o que eu percebi? Seu português melhorou muito!",en:"Know what I noticed? Your Portuguese improved a lot!"},
      {speaker:"user",opts:["Sério? Às vezes acho que não evoluo!","Obrigado!","Acha mesmo?"],correct:0},
      {speaker:"bia",pt:"Claro que sim! Olha quantas palavras você sabe!",en:"Of course! Look how many words you know!"},
      {speaker:"user",opts:["Obrigado, Bia! Vou continuar firme!","Motivado!","Valeu!"],correct:0}
    ]}
  ],
  145: [
    {title:"At the pharmacy",lines:[
      {speaker:"bia",pt:"Estou com dor de cabeça. Tem remédio?",en:"I have a headache. Do you have medicine?"},
      {speaker:"user",opts:["Sim! Quer comprimido ou xarope?","Coitada!","Vai ao médico."],correct:0},
      {speaker:"bia",pt:"Comprimido, por favor. Preciso de receita?",en:"Pill, please. Do I need a prescription?"},
      {speaker:"user",opts:["Não, esse não precisa. São cinco reais.","Sim.","Não sei."],correct:0}
    ]},
    {title:"Cold medicine",lines:[
      {speaker:"bia",pt:"Estou gripado! Tem algo pra gripe?",en:"I have a cold! Got anything for it?"},
      {speaker:"user",opts:["Esse xarope é bom! E compra vitamina C!","Coitado!","Vai ao médico."],correct:0},
      {speaker:"bia",pt:"E pra dor de garganta? Tem pastilha?",en:"And for sore throat? Got lozenges?"},
      {speaker:"user",opts:["Sim! E toma bastante chá com mel e limão!","Obrigado!","Melhoras!"],correct:0}
    ]},
    {title:"Quick review",lines:[
      {speaker:"bia",pt:"Vamos praticar? O que você aprendeu?",en:"Let's practice? What did you learn?"},
      {speaker:"user",opts:["Aprendi muitas palavras novas!","Bastante!","Pouco."],correct:0},
      {speaker:"bia",pt:"Ótimo! Prática é o segredo da fluência!",en:"Great! Practice is the secret to fluency!"},
      {speaker:"user",opts:["Vou continuar estudando todo dia!","Com certeza!","Sempre!"],correct:0}
    ]},
    {title:"Teaching a friend",lines:[
      {speaker:"bia",pt:"Ensina essa palavra pro seu amigo!",en:"Teach this word to your friend!"},
      {speaker:"user",opts:["Olha, em português se diz assim!","Tá bom!","Difícil."],correct:0},
      {speaker:"bia",pt:"Ele aprendeu! Você é um bom professor!",en:"He learned! You're a good teacher!"},
      {speaker:"user",opts:["Ensinar é a melhor forma de aprender!","Verdade!","Obrigado!"],correct:0}
    ]}
  ],
  146: [
    {title:"Around the house",lines:[
      {speaker:"bia",pt:"Vamos limpar a casa! Eu varro o chão.",en:"Let's clean the house! I'll sweep the floor."},
      {speaker:"user",opts:["Eu lavo a louça e passo a roupa!","Tá bom.","Não quero."],correct:0},
      {speaker:"bia",pt:"Depois vamos arrumar o quintal e a varanda!",en:"After let's tidy up the yard and porch!"},
      {speaker:"user",opts:["Combinado! A escada precisa de conserto também.","Ok!","Vamos!"],correct:0}
    ]},
    {title:"House chores",lines:[
      {speaker:"bia",pt:"O telhado tá vazando! E a escada tá solta!",en:"The roof is leaking! And the stairs are loose!"},
      {speaker:"user",opts:["Chama alguém pra consertar! E arruma o quintal!","Que problema.","Faz você mesmo."],correct:0},
      {speaker:"bia",pt:"Também preciso pintar a varanda e trocar a torneira.",en:"I also need to paint the porch and change the faucet."},
      {speaker:"user",opts:["Uma coisa de cada vez! Começa pelo telhado!","Boa!","Vou ajudar!"],correct:0}
    ]},
    {title:"Quick review",lines:[
      {speaker:"bia",pt:"Vamos praticar? O que você aprendeu?",en:"Let's practice? What did you learn?"},
      {speaker:"user",opts:["Aprendi muitas palavras novas!","Bastante!","Pouco."],correct:0},
      {speaker:"bia",pt:"Ótimo! Prática é o segredo da fluência!",en:"Great! Practice is the secret to fluency!"},
      {speaker:"user",opts:["Vou continuar estudando todo dia!","Com certeza!","Sempre!"],correct:0}
    ]},
    {title:"Practice with Bia",lines:[
      {speaker:"bia",pt:"Vamos praticar mais uma vez?",en:"Let's practice one more time?"},
      {speaker:"user",opts:["Sim! Repetição é importante pra memorizar!","Bora!","De novo?"],correct:0},
      {speaker:"bia",pt:"Muito bem! Você está melhorando rápido!",en:"Very good! You're improving fast!"},
      {speaker:"user",opts:["Valeu, Bia! Cada dia um pouco melhor!","Obrigado!","Continuando!"],correct:0}
    ]}
  ],
  147: [
    {title:"Making plans",lines:[
      {speaker:"bia",pt:"Vamos combinar de sair no sábado?",en:"Let's arrange to go out on Saturday?"},
      {speaker:"user",opts:["Bora! Vou te avisar o horário amanhã.","Talvez.","Não posso."],correct:0},
      {speaker:"bia",pt:"Combinado! Confirma depois! A gente se fala!",en:"Deal! Confirm later! We'll talk!"},
      {speaker:"user",opts:["Pode deixar! Vou mandar mensagem!","Ok!","Fechou!"],correct:0}
    ]},
    {title:"Group plan",lines:[
      {speaker:"bia",pt:"Vamos combinar o churrasco de domingo?",en:"Let's arrange Sunday's barbecue?"},
      {speaker:"user",opts:["Confirma quem vai! Avisa no grupo!","Bora!","Não posso."],correct:0},
      {speaker:"bia",pt:"Confirmado! Dez pessoas! Comunicação é tudo!",en:"Confirmed! Ten people! Communication is key!"},
      {speaker:"user",opts:["A gente se fala pra acertar os detalhes!","Fechou!","Combinado!"],correct:0}
    ]},
    {title:"Quick review",lines:[
      {speaker:"bia",pt:"Vamos praticar? O que você aprendeu?",en:"Let's practice? What did you learn?"},
      {speaker:"user",opts:["Aprendi muitas palavras novas!","Bastante!","Pouco."],correct:0},
      {speaker:"bia",pt:"Ótimo! Prática é o segredo da fluência!",en:"Great! Practice is the secret to fluency!"},
      {speaker:"user",opts:["Vou continuar estudando todo dia!","Com certeza!","Sempre!"],correct:0}
    ]},
    {title:"Real life moment",lines:[
      {speaker:"bia",pt:"Imagina que você está no Brasil agora!",en:"Imagine you're in Brazil right now!"},
      {speaker:"user",opts:["Legal! O que eu falo primeiro?","Oi Brasil!","Estou pronto!"],correct:0},
      {speaker:"bia",pt:"Usa o que aprendeu! Confia em você!",en:"Use what you learned! Trust yourself!"},
      {speaker:"user",opts:["Vou falar com confiança! Português é lindo!","Bora!","Consegui!"],correct:0}
    ]}
  ],
  148: [
    {title:"More slang",lines:[
      {speaker:"bia",pt:"Cara, essa festa tá mitando!",en:"Dude, this party is legendary!"},
      {speaker:"user",opts:["Zueira total! Todo mundo tá curtindo!","Legal!","Demais!"],correct:0},
      {speaker:"bia",pt:"O DJ tá mandando muito! Que vibe!",en:"The DJ is killing it! What a vibe!"},
      {speaker:"user",opts:["Tá ligado! Essa noite tá show de bola!","Massa!","Bora dançar!"],correct:0}
    ]},
    {title:"New words",lines:[
      {speaker:"bia",pt:"Sabe o que é 'cringe'?",en:"Know what 'cringe' is?"},
      {speaker:"user",opts:["Sei! É quando algo dá muita vergonha alheia!","Não sei.","Tipo o quê?"],correct:0},
      {speaker:"bia",pt:"E 'mitar'? Significa arrasar, ser incrível!",en:"And 'mitar'? It means to nail it, be incredible!"},
      {speaker:"user",opts:["A zueira nunca acaba! O português tá sempre evoluindo!","Verdade!","Amo gírias!"],correct:0}
    ]},
    {title:"Quick review",lines:[
      {speaker:"bia",pt:"Vamos praticar? O que você aprendeu?",en:"Let's practice? What did you learn?"},
      {speaker:"user",opts:["Aprendi muitas palavras novas!","Bastante!","Pouco."],correct:0},
      {speaker:"bia",pt:"Ótimo! Prática é o segredo da fluência!",en:"Great! Practice is the secret to fluency!"},
      {speaker:"user",opts:["Vou continuar estudando todo dia!","Com certeza!","Sempre!"],correct:0}
    ]},
    {title:"Vocabulary game",lines:[
      {speaker:"bia",pt:"Vamos jogar! Eu falo em português, você traduz!",en:"Let's play! I say it in Portuguese, you translate!"},
      {speaker:"user",opts:["Bora! Estou pronto! Manda!","Vamos!","Pode falar."],correct:0},
      {speaker:"bia",pt:"Acertou tudo! Você é craque!",en:"You got everything right! You're a star!"},
      {speaker:"user",opts:["Quero jogar de novo! É divertido aprender assim!","Mais uma!","Valeu!"],correct:0}
    ]}
  ],
  149: [
    {title:"Beach day",lines:[
      {speaker:"bia",pt:"Vamos pra praia! Pega o protetor solar!",en:"Let's go to the beach! Get the sunscreen!"},
      {speaker:"user",opts:["Bora! As ondas estão perfeitas hoje!","Tá quente.","Prefiro piscina."],correct:0},
      {speaker:"bia",pt:"Vou comprar água de coco na barraca!",en:"I'll buy coconut water at the stand!"},
      {speaker:"user",opts:["E um açaí! A areia tá quente, leva o biquíni!","Boa!","Quero cerveja!"],correct:0}
    ]},
    {title:"Surfing",lines:[
      {speaker:"bia",pt:"As ondas tão perfeitas pra surfar!",en:"The waves are perfect for surfing!"},
      {speaker:"user",opts:["Bora! Cadê a prancha? Passa o protetor!","Não sei surfar.","Tá frio."],correct:0},
      {speaker:"bia",pt:"Olha aquele surfista! Que manobra!",en:"Look at that surfer! What a trick!"},
      {speaker:"user",opts:["Incrível! Depois vamos tomar açaí na areia!","Demais!","Quero aprender!"],correct:0}
    ]},
    {title:"Quick review",lines:[
      {speaker:"bia",pt:"Vamos praticar? O que você aprendeu?",en:"Let's practice? What did you learn?"},
      {speaker:"user",opts:["Aprendi muitas palavras novas!","Bastante!","Pouco."],correct:0},
      {speaker:"bia",pt:"Ótimo! Prática é o segredo da fluência!",en:"Great! Practice is the secret to fluency!"},
      {speaker:"user",opts:["Vou continuar estudando todo dia!","Com certeza!","Sempre!"],correct:0}
    ]},
    {title:"Confidence boost",lines:[
      {speaker:"bia",pt:"Sabe o que eu percebi? Seu português melhorou muito!",en:"Know what I noticed? Your Portuguese improved a lot!"},
      {speaker:"user",opts:["Sério? Às vezes acho que não evoluo!","Obrigado!","Acha mesmo?"],correct:0},
      {speaker:"bia",pt:"Claro que sim! Olha quantas palavras você sabe!",en:"Of course! Look how many words you know!"},
      {speaker:"user",opts:["Obrigado, Bia! Vou continuar firme!","Motivado!","Valeu!"],correct:0}
    ]}
  ],
  150: [
    {title:"At the airport",lines:[
      {speaker:"bia",pt:"Qual é o portão de embarque?",en:"What's the boarding gate?"},
      {speaker:"user",opts:["Portão doze! O voo tem uma escala em São Paulo.","Não sei.","Atrasou?"],correct:0},
      {speaker:"bia",pt:"Já passou pela alfândega? Tem algo a declarar?",en:"Did you go through customs? Anything to declare?"},
      {speaker:"user",opts:["Nada a declarar! Minha bagagem já está despachada!","Não.","Tudo certo!"],correct:0}
    ]},
    {title:"Connecting flight",lines:[
      {speaker:"bia",pt:"Meu voo tem escala em Guarulhos!",en:"My flight has a layover in Guarulhos!"},
      {speaker:"user",opts:["Quanto tempo de conexão? Dá pra sair?","Que chato.","Direto é melhor."],correct:0},
      {speaker:"bia",pt:"Três horas! Vou aproveitar o duty free!",en:"Three hours! I'll check out duty free!"},
      {speaker:"user",opts:["Boa! Não perde o embarque! Fica de olho no portão!","Boa viagem!","Cuidado!"],correct:0}
    ]},
    {title:"Quick review",lines:[
      {speaker:"bia",pt:"Vamos praticar? O que você aprendeu?",en:"Let's practice? What did you learn?"},
      {speaker:"user",opts:["Aprendi muitas palavras novas!","Bastante!","Pouco."],correct:0},
      {speaker:"bia",pt:"Ótimo! Prática é o segredo da fluência!",en:"Great! Practice is the secret to fluency!"},
      {speaker:"user",opts:["Vou continuar estudando todo dia!","Com certeza!","Sempre!"],correct:0}
    ]},
    {title:"Teaching a friend",lines:[
      {speaker:"bia",pt:"Ensina essa palavra pro seu amigo!",en:"Teach this word to your friend!"},
      {speaker:"user",opts:["Olha, em português se diz assim!","Tá bom!","Difícil."],correct:0},
      {speaker:"bia",pt:"Ele aprendeu! Você é um bom professor!",en:"He learned! You're a good teacher!"},
      {speaker:"user",opts:["Ensinar é a melhor forma de aprender!","Verdade!","Obrigado!"],correct:0}
    ]}
  ]
};
