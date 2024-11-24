import { Evento } from "../evento";

const eventos: Evento[] = [
  {
    id: "3391d8ad-960d-4e73-9240-0c2eb6dff1c1",
    alias: "evento-fullstack",
    senha: "senha123",
    nome: "Evento de Desenvolvimento Fullstack",
    data: new Date("2024-12-01T10:00:00Z"),
    local: "São Paulo, SP",
    descricao:
      "Um evento completo para aprender desenvolvimento fullstack do zero.",
    imagem:
      "https://images.prismic.io/vaultinum/0458a9f1-e149-4037-b9aa-aa4b4fb53c25_propriete-intellectuelle-code-source-protection-compressed.jpg?auto=compress,format&rect=0,0,2400,981&w=2400&h=981",
    imagemBackground:
      "https://images.prismic.io/vaultinum/0458a9f1-e149-4037-b9aa-aa4b4fb53c25_propriete-intellectuelle-code-source-protection-compressed.jpg?auto=compress,format&rect=0,0,2400,981&w=2400&h=981",
    publicoEsperado: 200,
    convidados: [
      {
        id: "616d55f1-7137-462e-84a7-fb4f8b74f666",
        nome: "Alice Silva",
        email: "alice@example.com",
        confirmado: true,
        possuiAcompanhantes: true,
        qtdeAcompanhantes: 1,
      },
      {
        id: "b9f3b253-36b9-4448-961b-f5853a2264a4",
        nome: "Carlos Pereira",
        email: "carlos@example.com",
        confirmado: false,
        possuiAcompanhantes: false,
        qtdeAcompanhantes: 0,
      },
      {
        id: "665e2b84-f161-489f-b33f-c82aa8e36de6",
        nome: "Beatriz Lima",
        email: "beatriz@example.com",
        confirmado: true,
        possuiAcompanhantes: true,
        qtdeAcompanhantes: 2,
      },
    ],
  },
  {
    id: "6179811c-b54e-4960-bc28-221456e6096b",
    alias: "evento-js-avancado",
    senha: "js2024",
    nome: "Workshop Avançado de JavaScript",
    data: new Date("2024-11-20T15:00:00Z"),
    local: "Rio de Janeiro, RJ",
    descricao: "Um workshop avançado para programadores JavaScript.",
    imagem:
      "https://www.datocms-assets.com/48401/1628644950-javascript.png?auto=format&fit=max&w=1200",
    imagemBackground:
      "https://blog.cronapp.io/wp-content/uploads/2020/09/javascript-1.jpg",
    publicoEsperado: 100,
    convidados: [
      {
        id: "f0c7ffe6-5635-4344-9334-3d6d9e6be09a",
        nome: "Eduardo Santos",
        email: "eduardo@example.com",
        confirmado: true,
        possuiAcompanhantes: false,
        qtdeAcompanhantes: 0,
      },
      {
        id: "fc8d0adf-7074-4943-b37c-a04546be16da",
        nome: "Fernanda Costa",
        email: "fernanda@example.com",
        confirmado: true,
        possuiAcompanhantes: true,
        qtdeAcompanhantes: 1,
      },
    ],
  },
  // {
  //   id: "4e29c705-e05d-4c24-8698-1f5ede111ab2",
  //   alias: "evento-dev-frontend",
  //   senha: "front123",
  //   nome: "Bootcamp de Desenvolvimento Frontend",
  //   data: new Date("2024-11-15T09:00:00Z"),
  //   local: "Belo Horizonte, MG",
  //   descricao: "Aprenda a criar interfaces incríveis e responsivas.",
  //   imagem:
  //     "https://www.simplilearn.com/ice9/free_resources_article_thumb/recact_angular_vue.jpg",
  //   imagemBackground:
  //     "https://www.frontendmag.com/wp-content/uploads/2023/01/easiest-front-end-framework.jpeg",
  //   publicoEsperado: 150,
  //   convidados: [
  //     {
  //       id: "387ba8a3-e06f-459e-ad93-f90a0536ff26",
  //       nome: "Gabriela Rocha",
  //       email: "gabriela@example.com",
  //       confirmado: true,
  //       possuiAcompanhantes: true,
  //       qtdeAcompanhantes: 1,
  //     },
  //     {
  //       id: "cd69b94f-57fd-4d20-a087-dbd4f12a09f1",
  //       nome: "Hugo Nogueira",
  //       email: "hugo@example.com",
  //       confirmado: false,
  //       possuiAcompanhantes: false,
  //       qtdeAcompanhantes: 0,
  //     },
  //     {
  //       id: "ae9b34ac-e54e-4274-9487-a7ed8ae3f5cd",
  //       nome: "Isabela Martins",
  //       email: "isabela@example.com",
  //       confirmado: true,
  //       possuiAcompanhantes: false,
  //       qtdeAcompanhantes: 0,
  //     },
  //   ],
  // },
  // {
  //   id: "8745237b-182e-4681-a444-7ec092c43d5f",
  //   alias: "casamento-alberto-marina",
  //   senha: "casamento2024",
  //   nome: "Casamento do Alberto e Marina",
  //   data: new Date("2024-11-25T16:00:00Z"),
  //   local: "Florianópolis, SC",
  //   descricao:
  //     "Celebração do casamento de Alberto e Marina com amigos e familiares.",
  //   imagem:
  //     "https://i.em.com.br/IQ1l_dkc9VYK5P8PW-EaTphOuF4=/790x/smart/imgsapp.em.com.br/app/noticia_127983242361/2023/05/21/1496049/uma-cor-que-esta-totalmente-proibida-para-as-convidadas-de-acordo-com-a-etiqueta-de-casamento-e-o-branco-que-esta-reservado-para-as-noivas-a-nao-ser-que-o-casamento-seja-na-praia_1_55583.jpg",
  //   imagemBackground:
  //     "https://www.psicologo.com.br/wp-content/uploads/casamento-feliz-um-guia-para-casamentos-felizes.jpg",
  //   publicoEsperado: 150,
  //   convidados: [
  //     {
  //       id: "c5f275bb-cd82-489a-a3e5-641a349c0596",
  //       nome: "Bruno Cardoso",
  //       email: "bruno@example.com",
  //       confirmado: true,
  //       possuiAcompanhantes: true,
  //       qtdeAcompanhantes: 1,
  //     },
  //     {
  //       id: "79fc9b01-9d73-44ff-b116-b83c0fee108a",
  //       nome: "Carla Mendes",
  //       email: "carla@example.com",
  //       confirmado: true,
  //       possuiAcompanhantes: false,
  //       qtdeAcompanhantes: 0,
  //     },
  //   ],
  // },
  // {
  //   id: "80805dad-cf66-4cbb-8e6d-9e4d7a58f935",
  //   alias: "aniversario-joao",
  //   senha: "joao2024",
  //   nome: "Aniversário do João - 30 Anos",
  //   data: new Date("2024-12-05T18:00:00Z"),
  //   local: "Curitiba, PR",
  //   descricao:
  //     "Comemoração dos 30 anos de João com amigos próximos e familiares.",
  //   imagem:
  //     "https://img.elo7.com.br/product/600x380/4C55C74/capa-painel-redondo-tema-feliz-aniversario-em-tecido-1-50m-festa.jpg",
  //   imagemBackground:
  //     "https://img.freepik.com/vetores-gratis/fundo-da-celebracao-dos-baloes-e-confetti_1048-2223.jpg",
  //   publicoEsperado: 80,
  //   convidados: [
  //     {
  //       id: "f736b393-3e55-4efd-aa12-d4d31b96fab3",
  //       nome: "Maria Souza",
  //       email: "maria@example.com",
  //       confirmado: true,
  //       possuiAcompanhantes: true,
  //       qtdeAcompanhantes: 2,
  //     },
  //     {
  //       id: "74a42bcb-f170-48e3-9cf4-0abbc9b07151",
  //       nome: "José Almeida",
  //       email: "jose@example.com",
  //       confirmado: false,
  //       possuiAcompanhantes: false,
  //       qtdeAcompanhantes: 0,
  //     },
  //   ],
  // },
  // {
  //   id: "69c97c83-2901-4cb1-af7c-35c3ff31bd10",
  //   alias: "inauguracao-loja-estrela",
  //   senha: "estrela2024",
  //   nome: "Inauguração da Loja Estrela",
  //   data: new Date("2024-12-10T09:00:00Z"),
  //   local: "Porto Alegre, RS",
  //   descricao:
  //     "Evento de inauguração da nova loja Estrela com brindes e promoções.",
  //   imagem:
  //     "https://cosmeticinnovation.com.br/wp-content/uploads/2018/01/estrela_cosmeticos.png",
  //   imagemBackground:
  //     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQ-0_VdF_lcXATRHDUaaI0AQCt8R6Y_ShR3A&s",
  //   publicoEsperado: 300,
  //   convidados: [
  //     {
  //       id: "8f2367bc-dd3b-44d2-83c5-1488fdb4dbb8",
  //       nome: "Cláudia Lima",
  //       email: "claudia@example.com",
  //       confirmado: true,
  //       possuiAcompanhantes: true,
  //       qtdeAcompanhantes: 3,
  //     },
  //     {
  //       id: "4b794f4b-d6d5-4043-8ed0-e0a3cdd4800f",
  //       nome: "Ricardo Barbosa",
  //       email: "ricardo@example.com",
  //       confirmado: true,
  //       possuiAcompanhantes: false,
  //       qtdeAcompanhantes: 0,
  //     },
  //   ],
  // },
  // {
  //   id: "542e6a9c-9bdd-4a55-86b3-9b08bf036809",
  //   alias: "reuniao-familia-oliveira",
  //   senha: "familia2024",
  //   nome: "Reunião da Família Oliveira",
  //   data: new Date("2024-12-15T12:00:00Z"),
  //   local: "Salvador, BA",
  //   descricao: "Reunião de fim de ano da família Oliveira.",
  //   imagem:
  //     "https://www.themonastery.org/assets/themonastery/blog/scaled/duggars.jpg",
  //   imagemBackground:
  //     "https://img.freepik.com/fotos-premium/ondas-abstratas-brilhantes-de-celebracao-do-arco-iris-fluem-suavemente-geradas-por-ia_188544-9530.jpg?semt=ais_hybrid",
  //   publicoEsperado: 50,
  //   convidados: [
  //     {
  //       id: "f6778fae-5394-44d8-bf6a-6d3b528b9713",
  //       nome: "Thiago Oliveira",
  //       email: "thiago@example.com",
  //       confirmado: true,
  //       possuiAcompanhantes: true,
  //       qtdeAcompanhantes: 4,
  //     },
  //     {
  //       id: "a3f82778-b769-42a5-bbeb-cf8da21ab1f1",
  //       nome: "Letícia Oliveira",
  //       email: "leticia@example.com",
  //       confirmado: true,
  //       possuiAcompanhantes: false,
  //       qtdeAcompanhantes: 0,
  //     },
  //   ],
  // },
];

export default eventos;
