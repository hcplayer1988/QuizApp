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

let currentQuestion = 0;


function init() {
    document.getElementById('all_questions').innerHTML = questions.length;

    showQuestion()
}


function showQuestion() {
    let question = questions[currentQuestion]; /* question(variable question wird erstellt) istgleich
                                                 quetions(hier wird auf das JArray oben zugegriffen)
                                                 [currentquestion] (hier wird die stelle aufgerufen welche
                                                 in der Variable currentQuestion definiert ist. In dem
                                                 Fall, die Stelle 0) (Modul 7 Vido 7(QuizApp))*/
    document.getElementById('questiontext').innerHTML = question['question'];
    document.getElementById('answer_1').innerHTML = question['answer_1'];
    document.getElementById('answer_2').innerHTML = question['answer_2'];
    document.getElementById('answer_3').innerHTML = question['answer_3'];
    document.getElementById('answer_4').innerHTML = question['answer_4'];
}