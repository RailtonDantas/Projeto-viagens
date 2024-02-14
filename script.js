// VARIÁVEIS PRA MUDAR O CSS
let footer = document.getElementsByTagName("footer")[0]
let ul = document.getElementsByTagName("ul")[0]
let header = document.getElementsByTagName("header")[0]
let menu = document.getElementById("menu1")
let li = document.getElementsByTagName("li")
let h1header = document.getElementById("headerh1")
let imagem = document.getElementsByClassName("img")
let identify = document.getElementsByClassName("identification")
let paragrafos = document.getElementsByClassName("paragrafos")
let pass = document.getElementsByClassName("passagem")
let pmain = document.getElementById("pmain")


// FIM
li[0].style.color = "rgb(255,255,255)"
let tag_menu = document.getElementsByTagName("menu")[0]
let main = document.getElementsByTagName("main")[0]
function abrir_menu(){
    if(tag_menu.style.display == "none" ){
       tag_menu.style.display = "block"
       header.style.height = "250px"
       tag_menu.style.translate = "0px -100px"
       main.style.translate = "0px -95px"
    }
    else{
        tag_menu.style.display = "none"
        header.style.height = "180px"
        main.style.translate = "0px 0px"
    }
}

function mudartamanho(){
    if(window.innerWidth >= 730){
        tag_menu.style.display = "block"
        header.style.height = "250px"
        main.style.translate = "0px -10px"
        tag_menu.style.translate = "0px -35px"
    }
    else{
        tag_menu.style.display = "none"
        header.style.height = "180px"
        main.style.translate = "0px 0px"  
    }
}

function praia(){
    //mudando css
    document.body.style.backgroundColor = "#85D3F2"
    
    header.style.backgroundImage = "url(imagens/header-praia.jpg)"
    header.style.backgroundPosition = "center center"
    header.style.backgroundSize = "cover"
    h1header.style.color = "rgb(3,122,166,0.8)"
    h1header.style.textShadow  = "none"

    main.style.backgroundColor = "#85D3F2"
    
    ul.style.backgroundColor = "rgb(3,120,166,0.2)"
    ul.style.borderBottom = "1px solid white"
    ul.style.borderTop = "1px solid transparent"
    ul.style.padding = "4px"
    ul.style.borderRadius = "5px"
    ul.style.boxShadow = "0px 0px 4px black"

    menu.style.color = "white"
    menu.style.textShadow = " 0px 0px 20px  black"
    
    li[0].style.color = "black"
    li[1].style.color = "white"
    li[2].style.color = "black"
    li[3].style.color = "black"
    
    
    imagem[0].style.backgroundImage = "url(imagens/praiaimg1jpg.jpg)"
    identify[0].innerHTML = "Báia do Sancho - Brasil "
    identify[0].innerHTML += `<span class="material-symbols-outlined location"> location_on </span>`
    paragrafos[0].innerHTML = `<p class = "principal">Descubra o Paraíso na Baía do Sancho, em Fernando de Noronha</p>
    
    <p>Você já sonhou em escapar para um paraíso intocado, onde as águas cristalinas se encontram com a areia dourada e macia em uma fusão de beleza natural deslumbrante? Se a resposta é sim, então você precisa conhecer a Baía do Sancho, em Fernando de Noronha, Brasil.</p>
    
    <p>Imagine-se caminhando por trilhas sinuosas, cercadas por uma vegetação exuberante e uma vida selvagem exótica. À medida que você se aproxima da costa, o som suave das ondas acaricia seus ouvidos e o cheiro salgado do mar revigora seus sentidos. Então, você emerge em uma visão de tirar o fôlego: a Baía do Sancho se desenrola diante de você, com suas águas azul-turquesa cintilantes e sua praia de areia branca como neve.</p>
    
    <p>Ao descer pelas escadas de madeira embutidas nas falésias, você sentirá uma sensação de expectativa crescente. E então, quando seus pés tocarem a areia macia, será como se você estivesse pisando em um pedaço do céu na Terra. As águas calmas e claras convidam-no a mergulhar e explorar um mundo submarino repleto de corais vibrantes, peixes tropicais e até mesmo tartarugas marinhas majestosas.</p>
    <p>Enquanto relaxa na praia, pode sentir-se envolto por uma aura de serenidade e tranquilidade. A Baía do Sancho oferece uma atmosfera de escapismo completo, onde você pode se desconectar do mundo exterior e se reconectar com a natureza em seu estado mais puro. Não há agitação urbana aqui, apenas o som suave das ondas e a brisa suave que acaricia sua pele.</p>`

    
    imagem[1].style.backgroundImage = "url(imagens/imgpraia2jpg.jpg)"
    identify[1].innerHTML = "Grace Bay, Ilhas Turcas e Caicos - Bahamas"
    identify[1].innerHTML += `<span class="material-symbols-outlined location"> location_on </span>`
    paragrafos[1].innerHTML = `
    
    <p class = "principal">Explore a Serenidade de Grace Bay nas Ilhas Turcas e Caicos</p>
    
    <p>Você já imaginou um lugar onde o tempo parece desacelerar, e cada momento é preenchido com uma sensação de paz e serenidade? Bem-vindo a Grace Bay, nas Ilhas Turcas e Caicos - um refúgio de beleza intocada e tranquilidade que cativa os corações de todos os que a visitam.</p>
    
   <p>À medida que você se aproxima da costa de Grace Bay, será recebido por uma visão que parece ter saído diretamente de um cartão postal: areias brancas e macias se estendem até onde os olhos podem ver, enquanto as águas azul-turquesa cintilam sob o sol tropical. É um convite irrecusável para mergulhar e explorar as profundezas misteriosas do oceano ou simplesmente relaxar à beira-mar.</p>
    
    <p>Uma das características mais marcantes de Grace Bay é a sua atmosfera serena e intocada. Longe das multidões e da agitação das grandes cidades, esta praia oferece um refúgio tranquilo onde você pode verdadeiramente se desconectar do mundo exterior e se reconectar com a natureza. Deixe-se levar pelo som suave das ondas batendo na costa e pela brisa suave que acaricia sua pele - aqui, o estresse e as preocupações do dia a dia simplesmente desaparecem.</p>
    
    <p>Além da beleza natural deslumbrante, Grace Bay também oferece uma variedade de atividades emocionantes para os visitantes. De mergulho com snorkel em recifes de coral vibrantes a passeios de barco ao pôr do sol, há algo para todos os gostos e interesses. E depois de um dia de aventuras, você pode se deliciar com uma refeição deliciosa em um dos restaurantes à beira-mar, onde frutos do mar frescos e vistas deslumbrantes se combinam para criar uma experiência verdadeiramente inesquecível.<p>`
    
    imagem[2].style.backgroundImage = "url(imagens/imgpraia3.jpg)"
    identify[2].innerHTML = "Anse Lazio, Seychelles - Ilhas Praslin"
    identify[2].innerHTML += `<span class="material-symbols-outlined location"> location_on </span>`
    paragrafos[2].innerHTML = `
    
    <p class = "principal">Descubra o Encanto Intocado de Anse Lazio nas Seychelles</p>
    
   <p>Quando se trata de paraísos tropicais, poucos lugares rivalizam com a beleza intocada de Anse Lazio, nas Seychelles. Aninhada na ilha de Praslin, esta jóia do Oceano Índico cativa os visitantes com suas areias douradas, águas cristalinas e vegetação exuberante. Prepare-se para uma experiência de praia verdadeiramente inesquecível, onde a serenidade e a beleza natural se combinam para criar um cenário paradisíaco.</p>
    
   <p>Ao se aventurar por trilhas sinuosas através de densas florestas tropicais, você sentirá uma sensação de excitação crescente. E então, quando emergir dos emaranhados verdes, será recebido por uma visão de tirar o fôlego: Anse Lazio se desdobrará diante de você, como uma pintura viva da mãe natureza. As águas azul-turquesa se estendem até onde os olhos podem ver, enquanto as palmeiras balançam suavemente ao vento, criando uma atmosfera de paz e tranquilidade.</p>
    
   <p>Ao descer pelas escadas esculpidas na rocha, você será transportado para um mundo de pura serenidade. As águas calmas e cristalinas convidam-no a mergulhar e explorar um reino submarino repleto de vida marinha colorida, desde peixes tropicais até raias e tubarões. E à medida que você se deita na areia macia, sob a sombra das palmeiras ondulantes, sentirá uma sensação de paz profunda e relaxamento.</p>
    
   <p>Além da beleza natural deslumbrante, Anse Lazio também oferece uma variedade de atividades para os visitantes. De caminhadas ao longo da costa até passeios de barco para explorar as ilhas vizinhas, há algo para todos os gostos e interesses. E depois de um dia de aventuras, você pode saborear a deliciosa culinária local em um dos restaurantes à beira-mar, enquanto contempla o pôr do sol espetacular sobre o oceano.</p>`

    imagem[3].style.backgroundImage = "url(imagens/imgpraia4.webp)"
    identify[3].innerHTML = "Whitehaven Beach - Austrália"
    identify[3].innerHTML += `<span class="material-symbols-outlined location"> location_on </span>`
    paragrafos[3].innerHTML = `<p class="principal">A Whitehaven Beach é uma das praias mais famosas e deslumbrantes da Austrália</p> <p>localizada no arquipélago das Whitsunday Islands, no estado de Queensland. Esta praia é conhecida mundialmente por sua areia de sílica branca imaculada e águas cristalinas de um azul deslumbrante, o que a torna um destino de sonho para os amantes de praias e entusiastas de viagens.</p>

    <p>O que torna a Whitehaven Beach verdadeiramente especial é sua areia de sílica extremamente pura, que é considerada uma das mais brancas e finas do mundo. A areia é tão macia e fina que é quase como caminhar sobre um tapete de seda. Além disso, a composição única da areia significa que ela não retém o calor, tornando-a agradavelmente fresca sob os pés mesmo nos dias mais quentes.</p>
    
    <p>As águas ao redor da Whitehaven Beach são igualmente impressionantes, com uma tonalidade azul-turquesa hipnotizante que contrasta lindamente com a areia branca. Os visitantes podem mergulhar, nadar ou simplesmente relaxar nas águas cristalinas, admirando a paisagem deslumbrante ao seu redor. Algumas áreas da praia são protegidas como parte do Parque Marinho da Grande Barreira de Coral, oferecendo aos visitantes a oportunidade de explorar a rica vida marinha através do snorkeling ou mergulho.</p>
    
    <p>Além de sua beleza natural, a Whitehaven Beach oferece uma série de atividades para os visitantes desfrutarem. Desde passeios de barco e iatismo até caminhadas e piqueniques na praia, há algo para todos os gostos. Muitos visitantes optam por fazer passeios de um dia ou excursões para a praia, enquanto outros escolhem acampar durante a noite para experimentar toda a beleza da Whitehaven Beach sob as estrelas.</p>`
    
    imagem[4].style.backgroundImage = "url(imagens/imgpraia5jpg.jpg)"
    identify[4].innerHTML = "Navagio Beach (Shipwreck Beach) - Grécia"
    identify[4].innerHTML += `<span class= "material-symbols-outlined location"> location_on</span>`
    paragrafos[4].innerHTML = `<p class="principal">A Navagio Beach é uma das praias mais famosas e fotografadas da Grécia. </p>
    <p>Localizada na ilha de Zakynthos, no Mar Jônico, esta praia é conhecida por sua beleza natural deslumbrante, sua areia dourada e pelas águas cristalinas de um azul-turquesa vibrante. O principal destaque da Navagio Beach é o navio naufragado que repousa em suas areias, acrescentando um elemento único e intrigante à paisagem.</p>

    <p>O navio naufragado, conhecido como MV Panagiotis, encalhou na praia em 1980, supostamente enquanto transportava contrabando. Desde então, tornou-se uma atração icônica e uma das imagens mais reconhecidas da Grécia. A combinação do navio encalhado com o cenário deslumbrante ao seu redor cria uma cena impressionante que atrai visitantes de todo o mundo.</p>
    
    <p>A Navagio Beach é acessível apenas por mar, o que adiciona à sua exclusividade e charme. Muitos visitantes optam por fazer passeios de barco ou excursões para a praia, partindo de Zakynthos ou de outras ilhas vizinhas. Durante o verão, a praia pode ficar bastante movimentada, com turistas ansiosos para explorar suas águas cristalinas, nadar nas enseadas e tirar fotos deslumbrantes do navio naufragado e das falésias dramáticas que cercam a praia.</p>
    
    <p>Além de sua beleza natural impressionante, a Navagio Beach oferece excelentes oportunidades para atividades como snorkeling, mergulho e passeios de barco ao redor da ilha para explorar enseadas escondidas e cavernas marinhas. A área ao redor da praia também é conhecida por sua rica vida marinha, tornando-a um destino popular para os entusiastas do mergulho.</p>`
    
    footer.style.backgroundColor = "#0378A6" 
}

function hoteis(){
    // MUDANDO CSS
    document.body.style.backgroundColor = "#8C7765"
    main.style.backgroundColor = "#8c7765"
    pmain.innerHTML = "SE HOSPEDE NOS MELHORES HOTÉIS DO MUNDO POR MENOS DE 500 REAIS POR DIA"

    header.style.backgroundImage = "url(imagens/abahotelheader.jpg)"
    h1header.style.color = "rgb(255,255,255,0.8)"

    ul.style.backgroundColor = "rgb(191,174,159,0.2)"
    ul.style.borderBottom = "1px solid white"
    ul.style.borderTop = "1px solid transparent"
    ul.style.padding = "4px"
    ul.style.borderRadius = "5px"
    ul.style.boxShadow = "0px 0px 4px black"

    li[0].style.color = "black"
    li[1].style.color = "black"
    li[2].style.color = "white"
    li[3].style.color = "black"

    imagem[0].style.backgroundImage = "url(imagens/imghotel1.jpg)"
    imagem[0].style.backgroundPosition = "bottom center"
    identify[0].innerHTML = "Four Seasons Resort Bora Bora - Polinésia"
    identify[0].innerHTML += `<span class= "material-symbols-outlined location"> location_on</span>`
    pass[0].innerHTML = "DIÁRIA APENAS 200 REAIS"
    paragrafos[0].innerHTML = `<p class="principal">Descubra o paraíso tropical definitivo no Four Seasons Resort Bora Bora</p>
    <p> onde o luxo encontra a beleza natural em uma experiência verdadeiramente inesquecível. Imagine-se acordando todas as manhãs em uma vila sobre as águas cristalinas da Polinésia Francesa, com vistas deslumbrantes do oceano em todos os cantos. Desde o momento em que você pisa neste refúgio paradisíaco, será envolvido por uma atmosfera de tranquilidade e indulgência.</p>

    <p>Desfrute de uma variedade de atividades emocionantes, desde mergulho em recifes de corais até passeios de jet ski pelas águas azul-turquesa. Mime-se com tratamentos de spa de classe mundial, onde terapeutas habilidosos cuidarão de você com massagens relaxantes e tratamentos revitalizantes. Saboreie uma culinária excepcional em restaurantes à beira-mar, onde chefs talentosos combinam ingredientes locais frescos com técnicas culinárias inovadoras.</p>
    
    <p>Além disso, o serviço excepcional do Four Seasons Resort Bora Bora garante que cada detalhe de sua estadia seja perfeito, desde a organização de atividades personalizadas até a preparação de refeições gourmet sob medida. Não importa se você está celebrando uma ocasião especial, escapando para uma lua de mel romântica ou simplesmente buscando relaxamento e rejuvenescimento, este paraíso tropical é o destino ideal.</p>
    
    <p>Então, por que esperar? Deixe-se levar pela magia do Four Seasons Resort Bora Bora e embarque em uma jornada de luxo, aventura e descoberta neste destino de sonho. Sua experiência de vida está apenas a um voo de distância.</p>`

    imagem[1].style.backgroundImage = "url(imagens/imghotel2.jpg)"
    imagem[1].style.backgroundSize = "cover"
    identify[1].innerHTML = "Amanpuri em Phuket -  Tailândia"
    identify[1].innerHTML += `<span class= "material-symbols-outlined location"> location_on</span>`
    pass[1].innerHTML = "DIÁRIA APENAS 300 REAIS"
    paragrafos[1].innerHTML = `<p class="principal">Experimente a serenidade e o luxo incomparáveis do Amanpuri em Phuket</p> 
    <p>onde cada detalhe foi meticulosamente projetado para proporcionar uma experiência de hospedagem verdadeiramente única. Situado em uma colina com vista para o Mar de Andaman, este retiro exclusivo oferece um refúgio sereno longe da agitação do mundo moderno. Desde o momento em que você pisa neste paraíso tropical, será envolvido por uma aura de calma e tranquilidade.</p>

    <p>As suítes elegantemente decoradas oferecem um santuário de luxo, onde você pode relaxar e recarregar suas energias após um dia explorando as praias intocadas e os exuberantes jardins tropicais. Delicie-se com uma variedade de tratamentos rejuvenescedores no premiado spa, onde terapeutas habilidosos utilizam técnicas ancestrais para restaurar o equilíbrio do corpo e da mente.</p>
    
    <p>Além disso, o serviço impecável do Amanpuri garante que cada aspecto de sua estadia seja cuidadosamente planejado e atendido. Desde a recepção calorosa à sua chegada até as despedidas emocionantes à sua partida, você será mimado com hospitalidade tailandesa autêntica e atenção personalizada. Seja você um viajante em busca de tranquilidade, um casal em lua de mel romântica ou uma família em férias, o Amanpuri oferece uma experiência de luxo incomparável que ficará gravada em sua memória para sempre.</p>
    
    <p>Então, por que esperar? Deixe-se levar pela magia do Amanpuri e embarque em uma jornada de relaxamento e rejuvenescimento neste refúgio tropical de classe mundial. Sua experiência de férias dos sonhos aguarda neste oásis de serenidade e beleza.</p>`


    imagem[2].style.backgroundImage = "url(imagens/imghotel3.jpg)"
    imagem[2].style.backgroundSize = "cover"
    identify[2].innerHTML = "Hotel de Crillon - França"
    identify[2].innerHTML += `<span class= "material-symbols-outlined location"> location_on</span>`
    pass[2].innerHTML = "DIÁRIA APENAS 499 REAIS"
    paragrafos[2].innerHTML = `<p class="principal">Descubra o encanto parisiense  no histórico Hotel de Crillon</p>
     <p>Situado na prestigiada Place de la Concorde. Este ícone da elegância francesa combina luxo contemporâneo com uma rica herança histórica, oferecendo uma experiência de hospedagem verdadeiramente única. Desde o momento em que você atravessa as portas deste palácio parisiense, será transportado para uma era de opulência e sofisticação.</p>

    <p>Os quartos elegantemente decorados são um testemunho do estilo parisiense atemporal, onde o conforto moderno encontra a beleza clássica. Delicie-se com uma culinária excepcional em um dos restaurantes premiados, onde chefs talentosos criam pratos que são verdadeiras obras de arte gastronômica. Ou relaxe em um dos salões opulentos, onde você pode desfrutar de uma taça de champanhe enquanto admira a beleza da cidade das luzes através das janelas adornadas.</p>
    
    <p>Além disso, o serviço impecável do Hotel de Crillon garante que cada detalhe de sua estadia seja cuidadosamente planejado e atendido. Desde o momento em que você faz o check-in até a sua partida, você será mimado com a hospitalidade calorosa e atenção personalizada que são a marca registrada do serviço francês. Seja você um aficionado por história, um amante da arte ou um viajante em busca de romance, o Hotel de Crillon oferece uma experiência de hospedagem incomparável que captura o verdadeiro espírito de Paris.</p>
    
    <p>Então, por que esperar? Deixe-se levar pela magia do Hotel de Crillon e embarque em uma jornada de luxo, elegância e sofisticação na cidade mais romântica do mundo. Sua experiência parisiense dos sonhos aguarda neste palácio de contos de fadas no coração da capital francesa.</p>`

    imagem[3].style.backgroundImage = "url(imagens/imghotel4.jpg)"
    imagem[3].style.backgroundPosition = "bottom center"
    identify[3].innerHTML = " Burj Al Arab Jumeirah - Dubai"
    identify[3].innerHTML += `<span class= "material-symbols-outlined location"> location_on</span>`
    pass[3].innerHTML = "DIÁRIA APENAS 399 REAIS"
    paragrafos[3].innerHTML = `<p class="principal">Eleve sua experiência de viagem a novas alturas no Burj Al Arab Jumeirah</p>
    <p> o ícone arquitetônico de Dubai e o único hotel 7 estrelas do mundo. Este palácio à beira-mar oferece uma experiência de hospedagem verdadeiramente única e luxuosa que é incomparável em todos os aspectos. Desde o momento em que você avista a icônica silhueta da vela até o momento em que você pisa no átrio suntuoso, você será envolvido por uma aura de opulência e extravagância.</p>

   <p> As suítes extravagantes são um testemunho do luxo sem igual, onde cada</p>
    
    <p>detalhe foi cuidadosamente considerado para garantir o conforto e a satisfação dos hóspedes mais exigentes. Desfrute de vistas deslumbrantes da cidade e do Golfo Pérsico a partir de sua suíte luxuosa, onde o serviço de mordomo pessoal está à disposição 24 horas por dia para atender a todas as suas necessidades e desejos.</p>
    
    <p>Além disso, as instalações do Burj Al Arab são simplesmente incomparáveis. Mergulhe em piscinas suspensas sobre o oceano, desfrute de tratamentos relaxantes em um dos spas de classe mundial ou saboreie uma refeição gourmet em um dos restaurantes exclusivos do hotel. Cada momento neste palácio à beira-mar é uma indulgência de luxo que deixará uma impressão duradoura em sua memória.</p>
    
    <p>Com sua arquitetura impressionante, serviço impecável e comodidades de classe mundial, o Burj Al Arab Jumeirah é mais do que apenas um hotel - é uma experiência verdadeiramente extraordinária que redefine o conceito de luxo. Então, por que esperar? Deixe-se levar pela magia do Burj Al Arab e embarque em uma jornada de indulgência e sofisticação neste destino incomparável em Dubai. Sua experiência de luxo aguarda neste ícone lendário da hospitalidade.</p>
    
    
    
    `

    imagem[4].style.backgroundImage = "url(imagens/img5hotel.jpg)"
    identify[4].innerHTML = "Ritz-Carlton Kyoto - Japão"
    identify[4] += `<span class= "material-symbols-outlined location"> location_on</span>`
    pass[4].innerHTML = "DIÁRIA APENAS 299 REAIS"
    paragrafos[4].innerHTML = `<p class="principal">Descubra a harmonia perfeita entre tradição e modernidade no Ritz-Carlton</p>
    <p>um refúgio luxuoso situado às margens do rio Kamogawa. Este hotel exala elegância e sofisticação japonesa, oferecendo uma experiência de hospedagem única que cativa os sentidos e acalma a alma. Desde o momento em que você entra neste santuário sereno, será transportado para um mundo de beleza e tranquilidade.</p>

    <p>Os quartos e suítes elegantemente decorados combinam o charme tradicional japonês com comodidades modernas, proporcionando um ambiente de luxo e conforto. Desperte para vistas deslumbrantes das montanhas ou do rio, enquanto o sol nascente banha a cidade com uma luz suave e dourada. Delicie-se com a culinária refinada em um dos restaurantes do hotel, onde chefs renomados utilizam ingredientes locais frescos para criar pratos que são verdadeiras obras de arte gastronômica.</p>
    
    <p>Além disso, as instalações do Ritz-Carlton Kyoto são um testemunho do compromisso do hotel com o luxo e o bem-estar dos hóspedes. Relaxe e rejuvenesça em um dos spas de classe mundial, onde tratamentos tradicionais japoneses são combinados com técnicas modernas para proporcionar uma experiência de relaxamento incomparável. Ou explore os arredores pitorescos da antiga cidade de Kyoto, onde templos históricos, jardins zen e santuários sagrados aguardam sua descoberta.</p>
    
    <p>Com seu serviço impecável, ambientes serenos e atmosfera de tranquilidade, o Ritz-Carlton Kyoto é mais do que apenas um hotel - é uma experiência de vida que ficará gravada em sua memória para sempre. Então, por que esperar? Deixe-se levar pela magia do Ritz-Carlton Kyoto e embarque em uma jornada de luxo, beleza e serenidade neste destino incomparável no coração do Japão. Sua experiência de luxo aguarda neste oásis de calma e sofisticação.</p>
    
    
    
    `

    footer.style.backgroundColor = "#40281A"



}