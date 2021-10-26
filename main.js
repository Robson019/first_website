// ENCOMENDA
//primeira parte de js, mostrar botões escondidos

function escolherencomenda() {
  document.getElementById('frase').innerHTML =
    'Escolha <b>uma</b> das duas opções:'
  let boten = document.getElementById('sumir')
  let botzap = document.getElementById('zapzap')
  let botemail = document.getElementById('email')
  let botvoltar = document.getElementById('voltar')
  boten.classList.add('hide')
  botzap.classList.remove('hide')
  botemail.classList.remove('hide')
  botvoltar.classList.remove('hide')
}

//segunda parte de js, voltar a pág inicial, esconder botões novamente

function voltando() {
  document.getElementById('frase').innerHTML =
    'A <b>melhor</b> loja de café do Nordeste.<br />Entregamos em <b>toda</b> a região!'
  let boten = document.getElementById('sumir')
  let botzap = document.getElementById('zapzap')
  let botemail = document.getElementById('email')
  let botvoltar = document.getElementById('voltar')
  boten.classList.remove('hide')
  botzap.classList.add('hide')
  botemail.classList.add('hide')
  botvoltar.classList.add('hide')
}

// SUGESTÃO
function sugestao() {
  var nome = document.getElementById('nome')
  var email = document.getElementById('inpemail')
  var sugestao = document.getElementById('msg')
  // verificando se todos os campos foram preenchidos
  if (
    nome.value.length == 0 ||
    email.value.length == 0 ||
    sugestao.value.length == 0
  ) {
    alert(`[❌] Preencha todos os campos de texto!`)
  } else {
    // adicionando comentários, escondendo divs e adicionando imagem
    var div1 = document.getElementById('sp1')
    var div2 = document.getElementById('sp2')
    var div3 = document.getElementById('sp3')
    var sbot = document.getElementById('envbuttonsug')
    var fb = document.getElementById('feedback')
    var img = document.createElement('img')
    img.setAttribute('id', 'agradecimento')
    img.setAttribute('height', '100')
    img.setAttribute('width', '100')
    div1.classList.add('hide')
    div2.classList.add('hide')
    div3.classList.add('hide')
    sbot.classList.add('hide')
    fb.classList.remove('hide')
    var escreve1 = document.getElementById('nomef')
    var escreve2 = document.getElementById('emailf')
    var escreve3 = document.getElementById('sugf')
    escreve1.innerHTML = `<strong>${nome.value}</strong>`
    escreve2.innerHTML = `<strong>${email.value}</strong>`
    escreve3.innerHTML = `"<i>${sugestao.value}"</i>`
    img.setAttribute('src', 'obrigado.png')
    fb.appendChild(img)
  }
}

// QUIZ
function quiz() {
  var qp1 = document.getElementById('qp1')
  var qp2 = document.getElementById('qp2')
  var qp3 = document.getElementById('qp3')
  var botquiz = document.getElementById('quizbot')
  var pref1 = document.getElementsByName('radprefer')
  var pref2 = document.getElementsByName('radprefer2')
  var pref3 = document.getElementsByName('radprefer3')
  // verificando se todas as opções foram marcadas
  if (
    (pref1[0].checked || pref1[1].checked || pref1[2].checked) &&
    (pref2[0].checked || pref2[1].checked || pref2[2].checked) &&
    (pref3[0].checked || pref3[1].checked)
  ) {
    // escondendo divs
    qp1.classList.add('hide')
    qp2.classList.add('hide')
    qp3.classList.add('hide')
    botquiz.classList.add('hide')
    // primeira parte
    if (pref1[0].checked) {
      var fotocafe = document.createElement('img')
      var respquiz1 = document.getElementById('rq1')
      fotocafe.setAttribute('id', 'cafefoto')
      fotocafe.setAttribute('height', '150')
      fotocafe.setAttribute('width', '150')
      var coffeechoice = `Café Carioca`
      fotocafe.setAttribute('src', 'cafe_carioca.png')
      respquiz1.appendChild(fotocafe)
    } else if (pref1[1].checked) {
      var fotocafe = document.createElement('img')
      var respquiz1 = document.getElementById('rq1')
      fotocafe.setAttribute('id', 'cafefoto')
      fotocafe.setAttribute('height', '150')
      fotocafe.setAttribute('width', '150')
      var coffeechoice = `Café Macchiato`
      fotocafe.setAttribute('src', 'cafe_leite.png')
      respquiz1.appendChild(fotocafe)
    } else {
      var fotocafe = document.createElement('img')
      var respquiz1 = document.getElementById('rq1')
      fotocafe.setAttribute('id', 'cafefoto')
      fotocafe.setAttribute('height', '150')
      fotocafe.setAttribute('width', '150')
      var coffeechoice = `Café Freddo`
      fotocafe.setAttribute('src', 'cafe_freddo.png')
      respquiz1.appendChild(fotocafe)
    }
    // segunda parte
    if (pref2[0].checked) {
      var respquiz2 = document.getElementById('rq2')
      respquiz2.innerHTML = `<strong>Nós também amamos cafeína!</strong><br><i>"Sinta-se em casa para provar uma xícara do nosso <strong>${coffeechoice}</strong>. Vamos garantir que seu dia comece com um sorriso!"</i> 💖☕`
    } else if (pref2[1].checked) {
      var respquiz2 = document.getElementById('rq2')
      respquiz2.innerHTML = `<strong>Que tal uma xícara de café?</strong><br><i>"Aposto que você vai gostar ainda mais de café depois de nos visitar. Vamos preparar um <strong>${coffeechoice}</strong>, com amor."</i> 😉☕`
    } else {
      var respquiz2 = document.getElementById('rq2')
      respquiz2.innerHTML = `<strong>Você precisa nos visitar!</strong><br><i>"Tenho certeza que você não conhece o verdadeiro sabor da cafeína, venha provar uma xícara de <strong>${coffeechoice}</strong>. Você não vai se arrepender!"</i> 😊☕`
    }
    //terceira parte
    if (pref3[1].checked) {
      fotocafe.setAttribute('src', 'nao.png')
      respquiz1.appendChild(fotocafe)
      respquiz2.innerHTML = `<strong>Desculpe...</strong><br><i>"A pesquisa está disponível somente para <strong>futuros clientes</strong>!"</i> ❌☕`
    }
  } else {
    alert(`[❌] Responda todas as perguntas.`)
  }
}
