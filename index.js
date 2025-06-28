
  const questions = [
    { question: "Quem é o protagonista de 'O Homem que Calculava'?", options: ["Beremiz Samir", "Malba Tahan", "Califa Harun", "Ali Babá"], answer: 0 },
    { question: "Qual é o talento especial de Beremiz?", options: ["Filosofia", "Culinária", "Matemática", "Música oriental"], answer: 2 },
    { question: "O autor Malba Tahan é, na verdade, um pseudônimo. Qual é o nome verdadeiro do autor?", options: ["Monteiro Lobato", "Júlio César de Mello e Souza", "Carlos Drummond de Andrade", "João Guimarães Rosa"], answer: 1 },
    { question: "O livro mistura histórias orientais com problemas matemáticos.", options: ["Verdadeiro", "Falso"], answer: 0 },
    { question: "Em uma das histórias, Beremiz resolve a partilha de 35 camelos entre três irmãos. O que ele faz?", options: ["Dá camelos extras para todos", "Multiplica os camelos", "Adiciona um camelo e resolve o problema", "Subtrai camelos até o número ser divisível"], answer: 2 },
    { question: "Qual é o principal objetivo do livro?", options: ["Ensinar álgebra avançada", "Divertir com piadas sobre matemática", "Mostrar a beleza da matemática com histórias", "Apresentar a cultura brasileira"], answer: 2 },
    { question: "Beremiz usava suas habilidades matemáticas para:", options: ["Ganhar apostas", "Resolver conflitos e impressionar sábios", "Evitar a escola", "Enriquecer com truques"], answer: 1 },
    { question: "Qual destes valores é fortemente presente na obra?", options: ["Vaidade", "Egoísmo", "Justiça e sabedoria", "Orgulho"], answer: 2 },
    { question: "A narrativa se passa em um ambiente futurista e tecnológico.", options: ["Verdadeiro", "Falso"], answer: 1 },
    { question: "Qual o estilo narrativo predominante no livro?", options: ["Científico", "Jornalístico", "Contos orientais com fundo matemático", "Crônica moderna"], answer: 2 }
  ];

  let current = 0, score = 0;
  const qTitle = document.getElementById('question-title');
  const optionsDiv = document.getElementById('options');
  const resultDiv = document.getElementById('result');

  function loadQuestion() {
    const q = questions[current];
    qTitle.innerText = `${current + 1}. ${q.question}`;
    optionsDiv.innerHTML = '';
    resultDiv.innerHTML = '';
    q.options.forEach((opt, i) => {
      const btn = document.createElement('button');
      btn.innerText = opt;
      btn.onclick = () => {
        if (i === q.answer) score += 10;
        current++;
        if (current < questions.length) {
          loadQuestion();
        } else {
          qTitle.innerText = "Calculando sua pontuação...";
          optionsDiv.innerHTML = '';
          resultDiv.innerHTML = '';
          setTimeout(showResult, 5000); // Espera 5s antes de mostrar o resultado
        }
      };
      optionsDiv.appendChild(btn);
    });
  }

  function showResult() {
    qTitle.innerText = "Fim do Quiz!";
    optionsDiv.innerHTML = '';
    resultDiv.innerHTML = `Sua pontuação: ${score} / 100<br>`;
    if (score >= 80) {
      resultDiv.innerHTML += "Gênio como Beremiz!";
    } else if (score >= 60) {
      resultDiv.innerHTML += "Excelente! Seu raciocínio é afiado.";
    } else if (score >= 40) {
      resultDiv.innerHTML += "Bom, mas leia mais sobre Beremiz.";
    } else {
      resultDiv.innerHTML += "Hora de revisitar a obra e aprender com o Homem que Calculava!";
    }

    // 🔁 Após 5 segundos, reinicia o quiz
    setTimeout(resetQuiz, 5000);
  }

  function resetQuiz() {
    current = 0;
    score = 0;
    loadQuestion();
  }

  // Inicializa o quiz
  loadQuestion();

