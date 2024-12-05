  const questions = [
          {
         
                question: "Questão 1: Qual destas ações ajuda a reduzir a pegada de carbono?",
                choices: ["Usar transporte público", "Comer carne todos os dias", "Manter luzes acesas o dia todo", "Evitar reciclagem"],
                correctAnswer: 0
            },
            {
                question: "Questão 2: Qual energia é considerada renovável?",
                choices: ["Carvão", "Petróleo", "Solar", "Gás natural"],
                correctAnswer: 2
                
            },
            {
                question: "Questão 3: Qual gás é o maior responsável pelo efeito estufa?",
                choices: ["Oxigênio", "Dióxido de Carbono (CO2)", "Nitrogênio", "Hidrogênio"],
                correctAnswer: 1
            },
            {
                question: "Questão 4: O que significa ‘pegada de carbono’?",
                choices: ["Quantidade de carbono em nosso corpo", "Área ocupada por árvores", "Impacto ambiental de nossas ações", "Peso de uma pessoa"],
                correctAnswer: 2
            },
            {
                question: "Questão 5: Qual destas práticas ajuda a combater as mudanças climáticas?",
                choices: ["Desmatamento", "Uso de carvão", "Plantio de árvores", "Aumento do consumo de carne"],
                correctAnswer: 2
            },
            {
                question: "Questão 6: Qual setor é um dos maiores emissores de CO2?",
                choices: ["Tecnologia", "Agricultura", "Transporte", "Entretenimento"],
                correctAnswer: 2
            },
            {
                question: "Questão 7:Qual é a principal causa do aquecimento global?",
                choices: ["Poluição sonora", "Emissões de gases de efeito estufa", "Vento forte", "Poluição das águas"],
                correctAnswer: 1
            },
            {
                question: "Questão 8:Qual dessas alternativas é uma fonte de energia limpa?",
                choices: ["Carvão", "Energia eólica", "Óleo diesel", "Gás natural"],
                correctAnswer: 1
            },
            {
                question: "Questão 9: Qual é um efeito comum das mudanças climáticas?",
                choices: ["Redução da temperatura global", "Secas e tempestades extremas", "Aumento da camada de gelo polar", "Mais estações do ano"],
                correctAnswer: 1
            },
            {
                question: "Questão 10: O que significa ‘neutralidade de carbono’?",
                choices: ["Não emitir nenhum gás", "Compensar emissões com absorção equivalente", "Aumentar as emissões de carbono", "Eliminar o uso de carbono em tudo"],
                correctAnswer: 1
            },
            {
                question: "Questão 11: O que é uma medida sustentável para reduzir o desperdício de água?",
                choices: ["Lavar carro todo dia", "Tomar banhos curtos", "Deixar a torneira aberta", "Usar água mineral para tudo"],
                correctAnswer: 1
            },
            {
                question: "Questão 12: Qual é uma prática simples para reduzir o consumo de plástico?",
                choices: ["Usar canudos de plástico", "Levar sacola reutilizável", "Comprar produtos em embalagens plásticas", "Descartar plástico em qualquer lugar"],
                correctAnswer: 1
            },
            {
                question: "Questão 13: Como podemos ajudar a reduzir a emissão de gases de efeito estufa no transporte?",
                choices: ["Andar de bicicleta", "Dirigir sozinho", "Usar carro com motor a diesel", "Evitar transporte público"],
                correctAnswer: 0
            },
            {
                question: "Questão 14: Qual é um exemplo de recurso natural renovável?",
                choices: ["Carvão", "Petróleo", "Sol", "Minério de ferro"],
                correctAnswer: 2
            },
            {
                question: "Questão 15: Por que as florestas são importantes para o clima?",
                choices: ["Elas emitem CO2", "Elas absorvem CO2", "Elas aumentam a temperatura", "Elas causam chuva ácida"],
                correctAnswer: 1
            },
            {
                question: "Questão 16: O que é uma forma eficaz de conservar energia em casa?",
                choices: ["Usar lâmpadas LED", "Deixar luzes acesas o tempo todo", "Abrir a geladeira com frequência", "Usar aquecedor no verão"],
                correctAnswer: 0
            },
            {
                question: "Questão 17: Qual desses é um impacto negativo do aquecimento global nos oceanos?",
                choices: ["Aumento da biodiversidade", "Diminuição do nível do mar", "Branqueamento de corais", "Redução de tempestades"],
                correctAnswer: 2
            },
            {
                question: "Questão 18: Como o desperdício de alimentos afeta o meio ambiente?",
                choices: ["Ajuda na reciclagem", "Reduz a pegada de carbono", "Aumenta as emissões de gases do efeito estufa", "Não tem impacto ambiental"],
                correctAnswer: 2
            },
            {
                question: "Questão 19: Qual desses materiais demora mais para se decompor no meio ambiente?",
                choices: ["Papel", "Plástico", "Casca de banana", "Vidro"],
                correctAnswer: 3
            },
            {
                question: "Questão 20: O que é reciclagem?",
                choices: ["Processo de reutilizar resíduos", "Destruir plásticos", "Aumentar produção de lixo", "Deixar resíduos na natureza"],
                correctAnswer: 0
            }
        
        
        ];
      

        let currentQuestionIndex = 0;
        let score = 0;
        
        function showQuestion() {
            const questionEl = document.getElementById("question");
            const choicesEl = document.getElementById("choices");
        
            // Carregar a pergunta
            questionEl.textContent = questions[currentQuestionIndex].question;
        
            // Limpar as opções antigas
            choicesEl.innerHTML = "";
        
            // Mostrar as novas opções
            questions[currentQuestionIndex].choices.forEach((choice, index) => {
                const button = document.createElement("button");
                button.textContent = choice;
                button.onclick = () => checkAnswer(index, button); // Passar o botão clicado
                choicesEl.appendChild(button);
            });
        }
        
        function checkAnswer(answerIndex, selectedButton) {
            // Mudar a cor do botão selecionado
            selectedButton.style.backgroundColor = 'blue'; // Altere para a cor desejada
            // Resetar a cor dos outros botões
            const buttons = document.querySelectorAll("#choices button");
            buttons.forEach(button => {
                if (button !== selectedButton) {
                    button.style.backgroundColor = ''; // Remove a cor
                }
            });
        
            if (answerIndex === questions[currentQuestionIndex].correctAnswer) {
                score++;
            }
            document.getElementById("next-button").style.display = "block";
        }
        
        function nextQuestion() {
            currentQuestionIndex++;
            document.getElementById("next-button").style.display = "none";
            
            if (currentQuestionIndex < questions.length) {
                showQuestion();
            } else {
                showResult();
            }
        }
        
        function showResult() {
            document.getElementById("quiz").classList.add("hidden");
            document.getElementById("result").classList.remove("hidden");
            document.getElementById("score").textContent = `Você acertou ${score} de ${questions.length} questões!`;
        }
        
        function resetQuiz() {
            score = 0;
            currentQuestionIndex = 0;
            document.getElementById("result").classList.add("hidden");
            document.getElementById("quiz").classList.remove("hidden");
            showQuestion();
        }
        
        // Iniciar o quiz ao carregar a página
        showQuestion();