const chatContainer = document.getElementById('chat');
let step = 0;

const decisionTree = [
  {
    question: 'Você gosta de lidar com números e análises?',
    course: 'Administração'
  },
  {
    question: 'Você gosta de trabalhar com computadores e tecnologia?',
    course: 'Desenvolvimento de Sistemas'
  },
  {
    question: 'Você se interessa por construções e arquitetura?',
    course: 'Edificações'
  },
  {
    question: 'Você se interessa por saúde e cuidado com as pessoas?',
    course: 'Enfermagem'
  },
  {
    question: 'Você gosta de informática?',
    course: 'Informática'
  },
  {
    question: 'Você gosta de turismo e atendimento ao público?',
    course: 'Turismo Receptivo'
  },
  {
    question: 'Você prefere matérias relacionadas a Linguagens, Ciências Humanas e Sociais?',
    course: 'Ensino Médio – Linguagens, Ciências Humanas e Sociais'
  },
  {
    question: 'Você prefere matérias relacionadas a Ciências Humanas e Sociais Aplicadas?',
    course: 'Ensino Médio – Ciências Humanas e Sociais Aplicadas'
  },
  {
    question: 'Você prefere matérias relacionadas a Ciências Exatas e Engenharias?',
    course: 'Ensino Médio – Ciências Exatas e Engenharias 1'
  },
  {
    question: 'Você prefere matérias relacionadas a Matemática e suas Tecnologias?',
    course: 'Ensino Médio – Matemática e suas Tecnologias'
  }
];

function addMessage(message, sender) {
  const messageDiv = document.createElement('div');
  messageDiv.className = `message ${sender}-message`;
  const avatar = document.createElement('img');
  avatar.src = sender === 'bot' ? './img/bot-image.png' : './img/user-avatar.png';
  avatar.alt = sender;
  avatar.className = 'avatar';
  messageDiv.appendChild(avatar);
  const messageContent = document.createElement('div');
  messageContent.className = 'message-content';
  messageContent.textContent = message;
  messageDiv.appendChild(messageContent);
  chatContainer.appendChild(messageDiv);
}

function askQuestion() {
  if (step >= decisionTree.length) {
    const finalCourse = decisionTree[step - 1].course;
    addMessage(`Fim do questionário. Recomendamos o curso de ${finalCourse}.`, 'bot');
    document.querySelectorAll('.response-button').forEach(button => button.style.display = 'none');
    return;
  }

  const currentStep = decisionTree[step];
  addMessage(currentStep.question, 'bot');
  step++;
}

function answerQuestion(response) {
  if (step <= decisionTree.length) {
    const currentStep = decisionTree[step - 1];
    addMessage(`${response}`, 'user');

    if (response === 'Sim') {
      const finalCourse = currentStep.course;
      addMessage(`Já conseguimos achar um Curso ideal para você!! Tomando Base as suas respostas, eu recomendo o curso de ${finalCourse}. Vamos te redirecionar para a aba Cursos pra você ficar por dentro do Curso recomendado!`, 'bot');
      setTimeout(function() {
        window.location.href = "cursos.htm";
    }, 8000);
      document.querySelectorAll('.response-button').forEach(button => button.style.display = 'none');
      return;
    }

    if (step >= decisionTree.length) {
      setTimeout(() => {
        window.location.href = 'cursos.htm';
      }, 5000);
    }

    askQuestion();
  }
}

askQuestion();
