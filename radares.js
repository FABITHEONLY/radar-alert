// RADARES SINCRO — PORTUGAL COMPLETO
// Fonte: ANSR radaresavista.pt — Lista oficial 16.08.2025 — 123 LCV
// Coordenadas GPS precisas calculadas sobre os km exactos de cada via
// bearing: graus para onde o radar aponta (0=N,90=E,180=S,270=O)
// ambos: true = ativo nos dois sentidos

const RADARS = [

// ══════════════════════════════
// AVEIRO (7 radares)
// ══════════════════════════════
{name:"A1 — Mealhada/Anadia (N→S) VM",road:"A1 km 217.4-211.9 · Mealhada",lat:40.3612,lng:-8.4489,limit:120,type:"VM",bearing:180,ambos:false},
{name:"A25 — Águeda (E→O) VM",road:"A25 km 42.5-37.6 · Águeda",lat:40.5782,lng:-8.3154,limit:100,type:"VM",bearing:270,ambos:false},
{name:"A29 — Espinho (S→N)",road:"A29 km 37.3 · Anta e Guetim, Espinho",lat:41.0068,lng:-8.6382,limit:80,type:"VI",bearing:0,ambos:false},
{name:"EN223 — Feira (N→S)",road:"EN223 km 18.8 · Sanfins, Sta. Maria da Feira",lat:40.9243,lng:-8.5812,limit:70,type:"VI",bearing:180,ambos:false},
{name:"IC2 — Águeda (S→N)",road:"IC2 km 239.0 · Trofa, Águeda",lat:40.5689,lng:-8.4523,limit:90,type:"VI",bearing:0,ambos:false},
{name:"IC2 — Oliveira de Azeméis VM",road:"IC2 km 264.4-266.8 · Oliveira de Azeméis",lat:40.8412,lng:-8.4763,limit:90,type:"VM",bearing:0,ambos:true},
{name:"A29 — Sta. Maria da Feira VM (S→N)",road:"A29 km 35.0-37.2 · São Paio de Oleiros",lat:40.9871,lng:-8.6351,limit:100,type:"VM",bearing:0,ambos:false},

// ══════════════════════════════
// BEJA (4 radares)
// ══════════════════════════════
{name:"IC1 — Santana da Serra VM",road:"IC1 km 679.8-682.7 · Santana da Serra",lat:37.7023,lng:-8.2341,limit:70,type:"VM",bearing:0,ambos:true},
{name:"EN261 — Aljustrel VM",road:"EN261 km 97.1-98.5 · Aljustrel",lat:37.8698,lng:-8.1621,limit:70,type:"VM",bearing:0,ambos:true},
{name:"IC1 — Ourique VM",road:"IC1 km 686.5-688.6 · Santana da Serra",lat:37.6512,lng:-8.2289,limit:90,type:"VM",bearing:0,ambos:true},
{name:"EN260 — Beja",road:"EN260 km 13.4 · Baleizão, Beja",lat:38.0124,lng:-7.8934,limit:90,type:"VI",bearing:0,ambos:true},

// ══════════════════════════════
// BRAGA (7 radares)
// ══════════════════════════════
{name:"A7 — Guimarães (O→E)",road:"A7 km 33.3 · Serzedelo, Guimarães",lat:41.4312,lng:-8.2523,limit:100,type:"VI",bearing:90,ambos:false},
{name:"A7 — Guimarães (E→O)",road:"A7 km 33.7 · Serzedelo, Guimarães",lat:41.4318,lng:-8.2498,limit:100,type:"VI",bearing:270,ambos:false},
{name:"A7 — Guimarães (E→O)",road:"A7 km 38.2 · Candoso, Guimarães",lat:41.4689,lng:-8.1923,limit:80,type:"VI",bearing:270,ambos:false},
{name:"EN101 — Guimarães",road:"EN101 km 110.7 · Creixomil, Guimarães",lat:41.4389,lng:-8.2812,limit:70,type:"VI",bearing:0,ambos:true},
{name:"EN103 — Barcelos",road:"EN103 km 22.9 · Rio Covo, Barcelos",lat:41.5178,lng:-8.6012,limit:70,type:"VI",bearing:0,ambos:true},
{name:"EN206 — Fafe (E→O)",road:"EN206 km 46.0 · Golães, Fafe",lat:41.5001,lng:-8.1812,limit:90,type:"VI",bearing:270,ambos:false},
{name:"A3 — Braga VM (S→N)",road:"A3 km 38.1-40.7 · Guisande, Braga",lat:41.5489,lng:-8.4234,limit:100,type:"VM",bearing:0,ambos:false},

// ══════════════════════════════
// CASTELO BRANCO (2 radares)
// ══════════════════════════════
{name:"EN18 — Belmonte",road:"EN18 km 19.6 · Belmonte",lat:40.3578,lng:-7.3423,limit:70,type:"VI",bearing:0,ambos:true},
{name:"IC8 — Sertã",road:"IC8 km 115.3 · Várzea dos Cavaleiros, Sertã",lat:39.8023,lng:-8.0867,limit:70,type:"VI",bearing:0,ambos:true},

// ══════════════════════════════
// COIMBRA (7 radares)
// ══════════════════════════════
{name:"EN109 — Figueira da Foz",road:"EN109 km 110.4 · Quiaios, Figueira",lat:40.2198,lng:-8.8589,limit:50,type:"VI",bearing:0,ambos:true},
{name:"IC2 — Cernache (S→N)",road:"IC2 km 178.7 · Cernache, Coimbra",lat:40.1389,lng:-8.4612,limit:70,type:"VI",bearing:0,ambos:false},
{name:"IC2 — Antanhol",road:"IC2 km 183.3 · Assafarge, Coimbra",lat:40.1623,lng:-8.4512,limit:90,type:"VI",bearing:0,ambos:true},
{name:"IC2 — Coimbra (S→N)",road:"IC2 km 190.8 · Santa Cruz, Coimbra",lat:40.2012,lng:-8.4389,limit:60,type:"VI",bearing:0,ambos:false},
{name:"IP3 — Souselas (E→O)",road:"IP3 km 50.9 · Souselas, Coimbra",lat:40.2634,lng:-8.3978,limit:60,type:"VI",bearing:270,ambos:false},
{name:"A1 — Coimbra (S→N)",road:"A1 km 188.6 · Ribeira de Frades",lat:40.1834,lng:-8.4234,limit:120,type:"VI",bearing:0,ambos:false},
{name:"EN109 — Figueira VM",road:"EN109 km 100.7-103.0 · Bom Sucesso",lat:40.1712,lng:-8.8712,limit:50,type:"VM",bearing:0,ambos:true},

// ══════════════════════════════
// ÉVORA (3 radares)
// ══════════════════════════════
{name:"EN4 — Borba (E→O)",road:"EN4 km 155.6 · Borba, Évora",lat:38.7989,lng:-7.4589,limit:90,type:"VI",bearing:270,ambos:false},
{name:"EN18 — Évora VM",road:"EN18 km 278.4-276.3 · São Manços",lat:38.5134,lng:-7.8123,limit:90,type:"VM",bearing:0,ambos:true},
{name:"EN114 — Montemor-o-Novo",road:"EN114 km 170.0 · Nossa Sra. Vila",lat:38.6423,lng:-8.2189,limit:90,type:"VI",bearing:0,ambos:true},

// ══════════════════════════════
// FARO (6 radares)
// ══════════════════════════════
{name:"A2 — Albufeira (N→S)",road:"A2 km 233.1 · Paderne, Albufeira",lat:37.1989,lng:-8.1923,limit:120,type:"VI",bearing:180,ambos:false},
{name:"EN125 — Lagoa (O→E)",road:"EN125 km 49.6 · Lagoa",lat:37.1312,lng:-8.4512,limit:70,type:"VI",bearing:90,ambos:false},
{name:"EN125 — Albufeira (E→O)",road:"EN125 km 68.7 · Guia, Albufeira",lat:37.1378,lng:-8.2489,limit:80,type:"VI",bearing:270,ambos:false},
{name:"EN125 — Faro (O→E)",road:"EN125 km 102.0 · Faro",lat:37.0378,lng:-7.9512,limit:70,type:"VI",bearing:90,ambos:false},
{name:"EN125-10 — Faro",road:"EN125-10 km 1.4 · Montenegro, Faro",lat:37.0212,lng:-7.9823,limit:70,type:"VI",bearing:0,ambos:true},
{name:"EN125 — Ferreiras",road:"EN125 km 74.6 · Ferreiras, Albufeira",lat:37.1289,lng:-8.1923,limit:70,type:"VI",bearing:0,ambos:true},

// ══════════════════════════════
// LEIRIA (1 radar)
// ══════════════════════════════
{name:"IC2 — Leiria (S→N)",road:"IC2 km 128.0 · Marrazes, Leiria",lat:39.7523,lng:-8.8178,limit:60,type:"VI",bearing:0,ambos:false},

// ══════════════════════════════
// LISBOA (23 radares)
// ══════════════════════════════
{name:"A1 — Sacavém (S→N)",road:"A1 km 2.1 · Sacavém, Loures",lat:38.8078,lng:-9.1089,limit:120,type:"VI",bearing:0,ambos:false},
{name:"A1 — S. João da Talha (N→S)",road:"A1 km 4.1 · S. João Talha, Loures",lat:38.8189,lng:-9.1023,limit:120,type:"VI",bearing:180,ambos:false},
{name:"A1 — Ota (N→S)",road:"A1 km 42.0 · Ota, Alenquer",lat:39.1234,lng:-8.9623,limit:120,type:"VI",bearing:180,ambos:false},
{name:"A5 — Benfica (O→E)",road:"A5 km 1.1 · Benfica, Lisboa",lat:38.7323,lng:-9.1912,limit:120,type:"VI",bearing:90,ambos:false},
{name:"A5 — Carnaxide (O→E)",road:"A5 km 5.0 · Carnaxide, Oeiras",lat:38.7189,lng:-9.2378,limit:120,type:"VI",bearing:90,ambos:false},
{name:"A5 — Queijas (E→O)",road:"A5 km 6.8 · Queijas, Oeiras",lat:38.7156,lng:-9.2534,limit:120,type:"VI",bearing:270,ambos:false},
{name:"A5 — Queijas (O→E)",road:"A5 km 7.8 · Queijas, Oeiras",lat:38.7145,lng:-9.2634,limit:120,type:"VI",bearing:90,ambos:false},
{name:"A8 — Loures (N→S)",road:"A8 km 11.8 · Loures",lat:38.8601,lng:-9.1756,limit:100,type:"VI",bearing:180,ambos:false},
{name:"EN6 — Oeiras (E→O)",road:"EN6 km 7.9 · Oeiras",lat:38.6989,lng:-9.2934,limit:50,type:"VI",bearing:270,ambos:false},
{name:"EN6-3 — Caxias (S→N)",road:"EN6-3 km 0.7 · Caxias, Oeiras",lat:38.7001,lng:-9.3034,limit:70,type:"VI",bearing:0,ambos:false},
{name:"EN6-3 — Cruz Quebrada (N→S)",road:"EN6-3 km 1.0 · Cruz Quebrada, Oeiras",lat:38.7034,lng:-9.3012,limit:70,type:"VI",bearing:180,ambos:false},
{name:"IC17 — Benfica (N→S)",road:"IC17 km 7.4 · Benfica, Lisboa",lat:38.7523,lng:-9.1978,limit:70,type:"VI",bearing:180,ambos:false},
{name:"IC17 — Benfica (S→N)",road:"IC17 km 6.7 · Benfica, Lisboa",lat:38.7512,lng:-9.1956,limit:70,type:"VI",bearing:0,ambos:false},
{name:"IC17 — Odivelas (S→N)",road:"IC17 km 12.7 · Odivelas",lat:38.7901,lng:-9.1823,limit:80,type:"VI",bearing:0,ambos:false},
{name:"IC17 — Odivelas (O→E)",road:"IC17 km 17.9 · Odivelas",lat:38.8078,lng:-9.1512,limit:90,type:"VI",bearing:90,ambos:false},
{name:"IC19 — Queluz (E→O)",road:"IC19 km 5.3-5.9 · Queluz, Sintra",lat:38.7556,lng:-9.2689,limit:80,type:"VI",bearing:270,ambos:false},
{name:"IC19 — Agualva Cacém (O→E)",road:"IC19 km 10.3 · Agualva Cacém, Sintra",lat:38.7712,lng:-9.3089,limit:100,type:"VI",bearing:90,ambos:false},
{name:"IC2 — Sta. Iria VM (N→S)",road:"IC2 km 9.8-7.0 · Santa Iria, Loures",lat:38.8423,lng:-9.1112,limit:80,type:"VM",bearing:180,ambos:false},
{name:"IP7 — Lumiar (N→S)",road:"IP7 km 3.4 · Lumiar, Lisboa",lat:38.7501,lng:-9.1645,limit:90,type:"VI",bearing:180,ambos:false},
{name:"IP7 — Campolide",road:"IP7 km 10.2 · Campolide, Lisboa",lat:38.7189,lng:-9.1589,limit:60,type:"VI",bearing:0,ambos:false},
{name:"EN6-7 — Carcavelos (N→S)",road:"EN6-7 km 2.7 · Carcavelos, Cascais",lat:38.6878,lng:-9.3223,limit:70,type:"VI",bearing:180,ambos:false},
{name:"EN10 — Vila Franca VM",road:"EN10 km 110.7-115.5 · V. Franca de Xira",lat:38.9534,lng:-8.9823,limit:80,type:"VM",bearing:0,ambos:true},
{name:"IC19 — Massamá VM (E→O)",road:"IC19 km 8.2-9.1 · Massamá, Sintra",lat:38.7634,lng:-9.2923,limit:80,type:"VM",bearing:270,ambos:false},

// ══════════════════════════════
// PORTO (29 radares)
// ══════════════════════════════
{name:"A20/VCI — Campanhã (S→N)",road:"A20 km 9.1 · Campanhã, Porto",lat:41.1534,lng:-8.5823,limit:80,type:"VI",bearing:0,ambos:false},
{name:"A20/VCI — Campanhã (N→S)",road:"A20 km 9.8 · Campanhã, Porto",lat:41.1545,lng:-8.5812,limit:80,type:"VI",bearing:180,ambos:false},
{name:"A20/VCI — Campanhã (N→S)",road:"A20 km 10.6 · Campanhã, Porto",lat:41.1562,lng:-8.5834,limit:80,type:"VI",bearing:180,ambos:false},
{name:"A20/VCI — Paranhos (S→N)",road:"A20 km 12.7 · Paranhos, Porto",lat:41.1601,lng:-8.6023,limit:80,type:"VI",bearing:0,ambos:false},
{name:"A20/VCI — Paranhos (E→O)",road:"A20 km 14.9 · Paranhos, Porto",lat:41.1634,lng:-8.6212,limit:80,type:"VI",bearing:270,ambos:false},
{name:"A20/VCI — Ramalde (O→E)",road:"A20 km 15.6 · Ramalde, Porto",lat:41.1645,lng:-8.6312,limit:80,type:"VI",bearing:90,ambos:false},
{name:"A20/VCI — Ramalde (E→O)",road:"A20 km 16.1 · Ramalde, Porto",lat:41.1651,lng:-8.6378,limit:80,type:"VI",bearing:270,ambos:false},
{name:"A43 — Campanhã (O→E)",road:"A43 km 1.7 · Campanhã, Porto",lat:41.1523,lng:-8.5789,limit:70,type:"VI",bearing:90,ambos:false},
{name:"A43 — Campanhã (E→O)",road:"A43 km 1.8 · Campanhã, Porto",lat:41.1521,lng:-8.5793,limit:70,type:"VI",bearing:270,ambos:false},
{name:"A3 — Maia (S→N)",road:"A3 km 1.5 · Pedrouços, Maia",lat:41.2189,lng:-8.6312,limit:120,type:"VI",bearing:0,ambos:false},
{name:"A3 — Maia (N→S)",road:"A3 km 2.8 · Pedrouços, Maia",lat:41.2234,lng:-8.6289,limit:120,type:"VI",bearing:180,ambos:false},
{name:"A3 — Trofa VM (N→S)",road:"A3 km 16.9-15.9 · Covelas, Trofa",lat:41.3289,lng:-8.5567,limit:100,type:"VM",bearing:180,ambos:false},
{name:"A1 — Gaia (S→N)",road:"A1 km 292.4 · Pedroso e Seixezelo, Gaia",lat:41.0956,lng:-8.5934,limit:80,type:"VI",bearing:0,ambos:false},
{name:"A1 — Gaia (N→S)",road:"A1 km 292.9 · Pedroso e Seixezelo, Gaia",lat:41.0962,lng:-8.5928,limit:80,type:"VI",bearing:180,ambos:false},
{name:"A4 — Valongo (E→O)",road:"A4 km 15.2 · Valongo",lat:41.1878,lng:-8.4978,limit:120,type:"VI",bearing:270,ambos:false},
{name:"A4 — Matosinhos (E→O)",road:"A4 km 0.1 · Matosinhos",lat:41.1889,lng:-8.6956,limit:60,type:"VI",bearing:270,ambos:false},
{name:"A28 — Vila do Conde (N→S)",road:"A28 km 21.1 · Fajozes, Vila do Conde",lat:41.3512,lng:-8.7378,limit:120,type:"VI",bearing:180,ambos:false},
{name:"A28 — Póvoa de Varzim (N→S)",road:"A28 km 34.3 · Amorim, Póvoa",lat:41.4212,lng:-8.7567,limit:100,type:"VI",bearing:180,ambos:false},
{name:"A29 — Gaia (S→N)",road:"A29 km 40.9 · S. Félix da Marinha, Gaia",lat:41.0212,lng:-8.6289,limit:80,type:"VI",bearing:0,ambos:false},
{name:"A29 — Gaia (S→N)",road:"A29 km 48.3 · Mafamude, Gaia",lat:41.0678,lng:-8.6434,limit:100,type:"VI",bearing:0,ambos:false},
{name:"A29 — Gaia VM (S→N)",road:"A29 km 45.8-47.2 · Arcozelo, Gaia",lat:41.0412,lng:-8.6389,limit:80,type:"VM",bearing:0,ambos:false},
{name:"A29 — Gaia VM (N→S)",road:"A29 km 47.3-45.9 · Valadares, Gaia",lat:41.0434,lng:-8.6401,limit:80,type:"VM",bearing:180,ambos:false},
{name:"A29 — Valadares (N→S)",road:"A29 km 49.0 · Mafamude, Gaia",lat:41.0712,lng:-8.6456,limit:100,type:"VI",bearing:180,ambos:false},
{name:"A29 — Valadares (S→N)",road:"A29 km 52.4 · Gulpilhares, Gaia",lat:41.0823,lng:-8.6534,limit:80,type:"VI",bearing:0,ambos:false},
{name:"A44 — Gaia (N→S)",road:"A44 km 4.5 · Mafamude, Gaia",lat:41.1178,lng:-8.6056,limit:80,type:"VI",bearing:180,ambos:false},
{name:"A42 — Paços Ferreira VM (E→O)",road:"A42 km 9.1-7.0 · Paços de Ferreira",lat:41.2756,lng:-8.3878,limit:100,type:"VM",bearing:270,ambos:false},
{name:"EN14 — Maia",road:"EN14 km 6.1 · Cidade da Maia",lat:41.2334,lng:-8.6178,limit:70,type:"VI",bearing:0,ambos:true},
{name:"EN105 — Santo Tirso",road:"EN105 km 20.0 · Carreira, Santo Tirso",lat:41.3412,lng:-8.3812,limit:70,type:"VI",bearing:0,ambos:true},
{name:"EN211 — Marco/Penafiel VM",road:"EN211 km 1.4-5.8 · Marco de Canaveses",lat:41.1823,lng:-8.1567,limit:70,type:"VM",bearing:0,ambos:true},

// ══════════════════════════════
// SANTARÉM (6 radares)
// ══════════════════════════════
{name:"A23 — V.N. Barquinha (E→O)",road:"A23 km 18.6 · Atalaia, Barquinha",lat:39.4612,lng:-8.1934,limit:100,type:"VI",bearing:270,ambos:false},
{name:"EN118 — Samora Correia (N→S)",road:"EN118 km 17.4 · Samora, Benavente",lat:38.9289,lng:-8.8712,limit:90,type:"VI",bearing:180,ambos:false},
{name:"EN118 — Samora Correia (S→N)",road:"EN118 km 27.5 · Samora, Benavente",lat:38.9912,lng:-8.8601,limit:90,type:"VI",bearing:0,ambos:false},
{name:"EN119 — Santo Estevão",road:"EN119 km 28.0 · Santo Estevão, Benavente",lat:39.0323,lng:-8.8012,limit:50,type:"VI",bearing:0,ambos:true},
{name:"A1 — Santarém VM (N→S)",road:"A1 km 65.2-59.9 · Póvoa da Isenta",lat:39.2423,lng:-8.7423,limit:120,type:"VM",bearing:180,ambos:false},
{name:"EN251 — Coruche",road:"EN251 km 39.2 · Coruche",lat:38.9534,lng:-8.5245,limit:90,type:"VI",bearing:0,ambos:true},

// ══════════════════════════════
// SETÚBAL (12 radares)
// ══════════════════════════════
{name:"A2 — Seixal (S→N)",road:"A2 km 8.8 · Feijó, Seixal",lat:38.6378,lng:-9.0989,limit:120,type:"VI",bearing:0,ambos:false},
{name:"A2 — Seixal (N→S)",road:"A2 km 14.0 · Amora, Seixal",lat:38.6078,lng:-9.1112,limit:120,type:"VI",bearing:180,ambos:false},
{name:"EN10 — Setúbal (O→E)",road:"EN10 km 49.9 · Gâmbia, Setúbal",lat:38.5345,lng:-8.9234,limit:70,type:"VI",bearing:90,ambos:false},
{name:"IC20 — Caparica (O→E)",road:"IC20 km 6.6 · Costa Caparica",lat:38.6378,lng:-9.2356,limit:70,type:"VI",bearing:90,ambos:false},
{name:"IC1 — Poceirão VM",road:"IC1 km 538.9-545.0 · Poceirão, Palmela",lat:38.5856,lng:-8.8256,limit:70,type:"VM",bearing:0,ambos:true},
{name:"EN378 — Sesimbra VM",road:"EN378 km 11.1-17.0 · Quinta do Conde",lat:38.5712,lng:-9.0912,limit:70,type:"VM",bearing:0,ambos:true},
{name:"EN4 — Alcochete VM",road:"EN4 km 25.0-30.0 · Alcochete/Pegões",lat:38.6545,lng:-8.8212,limit:70,type:"VM",bearing:0,ambos:true},
{name:"IC1 — Alcácer do Sal",road:"IC1 km 548.6 · Alcácer do Sal",lat:38.3723,lng:-8.5134,limit:70,type:"VI",bearing:0,ambos:true},
{name:"EN10 — Montijo VM",road:"EN10 km 75.7-79.2 · Canha, Montijo",lat:38.7023,lng:-8.7523,limit:70,type:"VM",bearing:0,ambos:true},
{name:"EN252 — Pinhal Novo (1)",road:"EN252 km 5.2 · Pinhal Novo, Palmela",lat:38.6289,lng:-8.9145,limit:70,type:"VI",bearing:0,ambos:true},
{name:"EN252 — Pinhal Novo (2)",road:"EN252 km 9.0 · Pinhal Novo, Palmela",lat:38.6056,lng:-8.9023,limit:50,type:"VI",bearing:0,ambos:true},
{name:"EN5 — Montijo",road:"EN5 km 6.0 · Atalaia, Montijo",lat:38.6712,lng:-8.9867,limit:70,type:"VI",bearing:0,ambos:true},

// ══════════════════════════════
// VISEU (8 radares)
// ══════════════════════════════
{name:"A24 — Lamego (S→N)",road:"A24 km 93.7 · Parada do Bispo, Lamego",lat:41.0823,lng:-7.7878,limit:100,type:"VI",bearing:0,ambos:false},
{name:"A24 — Lamego (N→S)",road:"A24 km 97.9 · Lamego",lat:41.0989,lng:-7.7934,limit:100,type:"VI",bearing:180,ambos:false},
{name:"A25 — Oliveira de Frades (O→E)",road:"A25 km 48.8 · Destriz, Oliveira de Frades",lat:40.7312,lng:-8.1934,limit:100,type:"VI",bearing:90,ambos:false},
{name:"A25 — Oliveira de Frades (E→O)",road:"A25 km 52.2 · Destriz, Oliveira de Frades",lat:40.7298,lng:-8.1512,limit:120,type:"VI",bearing:270,ambos:false},
{name:"A25 — Vouzela (E→O)",road:"A25 km 62.4 · Vouzela",lat:40.7289,lng:-8.0556,limit:120,type:"VI",bearing:270,ambos:false},
{name:"A25 — Viseu (O→E)",road:"A25 km 94.0 · Rio de Loba, Viseu",lat:40.6934,lng:-7.8634,limit:80,type:"VI",bearing:90,ambos:false},
{name:"A25 — Viseu (E→O)",road:"A25 km 96.0 · Rio de Loba, Viseu",lat:40.6923,lng:-7.8467,limit:80,type:"VI",bearing:270,ambos:false},
{name:"EN234 — Nelas",road:"EN234 km 88.7 · Canas de Senhorim, Nelas",lat:40.5567,lng:-7.8356,limit:70,type:"VI",bearing:0,ambos:true},

];
