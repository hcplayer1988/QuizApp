let questions = [
    {
       "question": "Was passiert, wenn man einem Känguru eine Sonnenbrille aufsetzt?",
       "answer_1": "Es verwandelt sich in einen Koala",
       "answer_2": "Es startet eine Modenschau",
       "answer_3": "Es sieht einfach nur cool aus",
       "answer_4": "Es hüpft rückwärts",
       "right_answer": 3
    },
    {
       "question": "Welche dieser Aussagen ist für eine Katze absolut logisch?",
       "answer_1": "Der Staubsauger ist das Böse in Person",
       "answer_2": "Hunde sind meine besten Freunde",
       "answer_3": "Menschen existieren, um mich zu bedienen",
       "answer_4": "Ich liebe es, nass zu werden",
       "right_answer": 3
    },
    {
       "question": "Warum hat das Huhn die Straße überquert?",
       "answer_1": "Um Pokémon zu fangen",
       "answer_2": "Weil es auf der anderen Seite WLAN gibt",
       "answer_3": "Es war auf der Suche nach einem Ei-Mac",
       "answer_4": "Niemand weiß es – es ist ein Huhn",
       "right_answer": 2
    },
    {
       "question": "Was wäre ein ungeeigneter Name für einen Pizzalieferdienst?",
       "answer_1": "Pizza Blitz",
       "answer_2": "Heiß & Knusprig",
       "answer_3": "Bella Napoli",
       "answer_4": "Schlepp & Schimmel",
       "right_answer": 4
    },
    {
       "question": "Was ist die natürlichste Reaktion, wenn man Lego barfuß betritt?",
       "answer_1": "Laut schreien und das Lego verfluchen",
       "answer_2": "Tief durchatmen und meditieren",
       "answer_3": "Ah, ein Wellnessmoment für die Füße!",
       "answer_4": "Sofort ein Haus daraus bauen",
       "right_answer": 1
    },
    {
       "question": "Was denkt ein Kühlschrank, wenn du mitten in der Nacht die Tür aufmachst?",
       "answer_1": "Schon wieder du?",
       "answer_2": "Endlich ein bisschen Licht!",
       "answer_3": "Ich hab dich gar nicht vermisst.",
       "answer_4": "Tu so, als wärst du leer.",
       "right_answer": 1
    },
];

let rightQuestions = 0;
let currentQuestion = 0;


function init() {
    document.getElementById('all_questions').innerHTML = questions.length;
    

    showQuestion()
}

// Anzeige der Frage welche Angezeigt wird und Anzeige derer
function showQuestion() {

   if (currentQuestion >= questions.length) {   // hier wird die Anzahl der Fragen verglichen (lännge vomm JSSON Array) und wenn die nächsste Frage die länge vom Array übersteigen würde bricht diese Funktion ab! 
    document.getElementById('endScreen').style = ''; //
    document.getElementById('questionBody').style = 'display: none';
    document.getElementById('questionNumbers').innerHTML = questions.length;
    document.getElementById('amountOfRightQuestions').innerHTML = rightQuestions;
  } else {
   let question = questions[currentQuestion]; /* question(variable question wird erstellt) istgleich
                                                 quetions(hier wird auf das JArray oben zugegriffen)
                                                 [currentquestion] (hier wird die stelle aufgerufen welche
                                                 in der Variable currentQuestion definiert ist. In dem
                                                 Fall, die Stelle 0) (Modul 7 Vido 7(QuizApp))*/
   document.getElementById('current_question').innerHTML = currentQuestion +1;
   document.getElementById('questiontext').innerHTML = question['question'];
   document.getElementById('answer_1').innerHTML = question['answer_1'];
   document.getElementById('answer_2').innerHTML = question['answer_2'];
   document.getElementById('answer_3').innerHTML = question['answer_3'];
   document.getElementById('answer_4').innerHTML = question['answer_4'];
   }
}


// Auswahl des geklickten Buttons
function answer(selection) {                       // in der Klammer wird eine Variable definiert der entweder der Wert answer_1, answer_2, usw. zugewiesen wird sobald auf den jeweiligen button gedrückt wird
   let question = questions[currentQuestion];      // erklärung hier siehe function showQuestion().
   let slectedQuestionNummber = selection.slice(-1); // hier zieht die slice methode aus der Variable selection den -1. Wert aus dem string. Sie fängt also von hinten an zu zählen und gibt den letzten zeichenn in ein neues Array 
   let idOfRightAnswer = `answer_${question['right_answer']}`; // hier wird die Variable für die richtige Antwort definiert umm im else Teil darauf zugreifen zu können.

   if (slectedQuestionNummber == question['right_answer']) {
      document.getElementById(selection).classList.add('bg-success'); //mit :document.getElementById(selection).parentNode.classList.add('bg-success'); -> kann dem übergeordneteten div diese klasse verliehen werden. 
      rightQuestions++;
   } else {
      document.getElementById(selection).classList.add('bg-danger');
      document.getElementById(idOfRightAnswer).classList.add('bg-success'); // diese Zeile sorgt dafür wenn eine falsche Antwort gedrückt wird dass die richtige Antwort auch angezeigt wird
   }
      document.getElementById('next_btn').disabled = false; // dass sorgt dafür, wenn die if else bedingungen erfülltsind dass der button mmit der id next_btn wieder aktiviert wird.
}


function nextQuestion() {
   currentQuestion++;   // hier wird auf die Variable currentQuestion zugegriffen und mitt ++ wird ssie jedes mal um eins erhöht sobald der butten betätigt wird!
   document.getElementById('next_btn').disabled = true; // setzt den Button wieder auf "disabled"!
   resetAnswerButtons(); // ruft die function resetAnswerButtons() auf
   showQuestion();   //ruft nach dem Button diese funktion auf und da der button den count um 1 erhöht wird die nächste Frage angezeigt
   
}


// die hier eingetragenen Zeilen entfernen die classen welche die Antworten färben von den Antworten -> wird in nextQuestion ausgeführt bevor die nächste Frage aangezeigt wird
function resetAnswerButtons() {
   document.getElementById('answer_1').classList.remove('bg-danger');
   document.getElementById('answer_1').classList.remove('bg-success');
   document.getElementById('answer_2').classList.remove('bg-danger');
   document.getElementById('answer_2').classList.remove('bg-success');
   document.getElementById('answer_3').classList.remove('bg-danger');
   document.getElementById('answer_3').classList.remove('bg-success');
   document.getElementById('answer_4').classList.remove('bg-danger');
   document.getElementById('answer_4').classList.remove('bg-success');


}


