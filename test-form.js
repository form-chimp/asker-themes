
let container = document.getElementById('askerContainer')

let questions = {
    q1:{
        type:'info',
        text: `You are about to go through a form`,
        content: `Are you ready? Go ahead!`,
        next: 'q2'
    },

    q2:{
        type: 'text',
        text: "What did the brown fox say?",
        description: `Think about what it said for a moment before you give an answer.`,
        next: 'q3'
    },

    q3:{
        type: 'paragraph',
        text: "What did the brown fox say?",
        description: `Think about what it said for a moment before you give an answer.`,
        next: 'q4'
    },

    q4:{
        type: 'singleChoice',
        text: "What did the brown fox say?",
        description: `Choose only one answer. A single choice question.`,
        choices:[
            'Nothing',
            'Something cool',
            'Something lame',
        ],
        other: true,
        next: 'q5'
    },

    q5:{
        type: 'singleChoice',
        text: "What did the brown fox say?",
        description: `Choose all that apply. A multi-choice question.`,
        choices:[
            'choice 1',
            'choice 2',
            'choice 3',
            'choice 4',
        ],
        other: true,
        next:'q6'
    },

    q6:{
        type: 'file',
        text: "What did the brown fox say?",
        description: `Upload a file. A file question.`,
        next: 'q1'
    }

}

let form = new Askerjs.default(container, questions)

form.ask(questions.q1)