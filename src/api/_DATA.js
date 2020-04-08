let users = {
    fjord: {
        id: 'fjord',
        name: 'Fjord',
        avatarURL: '../assests/images/fjord.png',
        answers: {
            "8xf0y6ziyjabvozdd253nd": 'optionOne',
            "6ni6ok3ym7mf1p33lnez": 'optionTwo',
            "am8ehyc8byjqgar0jgpub9": 'optionTwo',
            "loxhs1bqm25b708cmbf3g": 'optionTwo',
            "wmeycdnesgkpj7swubmga2": 'optionOne',
            "xj352vofupe1dqz9emx13r": 'optionOne',
            "xdzbs7cd69dn57wy9x2pax": 'optionOne',
            "th9twwf68z66puf2rs5tj4": 'optionOne'
        },
        questions: ['8xf0y6ziyjabvozdd253nd', 'am8ehyc8byjqgar0jgpub9', 'xdzbs7cd69dn57wy9x2pax']
    },
    beau: {
        id: 'beau',
        name: 'Baue',
        avatarURL: '../assests/images/beau.png',
        answers: {
            "6ni6ok3ym7mf1p33lnez": 'optionTwo',
            "vthrdm985a262al8qx3do": 'optionOne',
            "xj352vofupe1dqz9emx13r": 'optionsTwo',
            "th9twwf68z66puf2rs5tj4": 'optionOne'
        },
        questions: ['6ni6ok3ym7mf1p33lnez', 'xj352vofupe1dqz9emx13r', 'gbpjmybkp7cj2z8kbfj6dq'],
    },
    caleb: {
        id: 'caleb',
        name: 'Caleb',
        avatarURL: '../assests/images/caleb.png',
        answers: {
            "8xf0y6ziyjabvozdd253nd": 'optionTwo',
            "loxhs1bqm25b708cmbf3g": 'optionOne',
            "vthrdm985a262al8qx3do": 'optionTwo',
            "xj352vofupe1dqz9emx13r": 'optionsTwo',
            "gbpjmybkp7cj2z8kbfj6dq": 'optionTwo',
            "th9twwf68z66puf2rs5tj4": 'optionOne'
        },
        questions: ['6ni6ok3ym7mf1p33lnez', 'xj352vofupe1dqz9emx13r'],
    },
    jester: {
        id: 'jester',
        name: 'Jester',
        avatarURL: '../assests/images/jester.png',
        answers: {
            "6ni6ok3ym7mf1p33lnez": 'optionTwo',
            "v9qbru7w2jdn7suksenv44": "optionTwo",
            "wmeycdnesgkpj7swubmga2": "optionTwo",
            "th9twwf68z66puf2rs5tj4": 'optionTwo'
        },
        questions: ['6ni6ok3ym7mf1p33lnez', 'xj352vofupe1dqz9emx13r', 'wmeycdnesgkpj7swubmga2', 'djgzuxdmncqaeu2anzg2vz'],
    },
    nott: {
        id: 'nott',
        name: 'Nott the Brave',
        avatarURL: '../assests/images/nott.png',
        answers: {
            "vthrdm985a262al8qx3do": 'optionTwo',
            "gbpjmybkp7cj2z8kbfj6dq": 'optionTwo',
            "th9twwf68z66puf2rs5tj4": 'optionOne'
        },
        questions: ['vthrdm985a262al8qx3do', 'a9sz67yp3kxxxk8s38gnux', 'th9twwf68z66puf2rs5tj4'],
    },
    caduceus: {
        id: 'caduceus',
        name: 'Caduceus',
        avatarURL: '../assests/images/caduceus.png',
        answers: {
            "xj352vofupe1dqz9emx13r": 'optionOne',
            "v9qbru7w2jdn7suksenv44": "optionOne"
        },
        questions: ['loxhs1bqm25b708cmbf3g', 'v9qbru7w2jdn7suksenv44'],
    },
    yasha: {
        id: 'yasha',
        name: 'Yasha',
        avatarURL: '../assests/images/yasha.png',
        answers: {
            "xj352vofupe1dqz9emx13r": 'optionOne',
            "gj52f6pxz2vj24cmhsxv96": 'optionOne',
            "gbpjmybkp7cj2z8kbfj6dq": 'optionOne'
        },
        questions: ['6ni6ok3ym7mf1p33lnez', 'xj352vofupe1dqz9emx13r', 'gj52f6pxz2vj24cmhsxv96'],
    }
}

let questions = {
    "8xf0y6ziyjabvozdd253nd": {
        id: '8xf0y6ziyjabvozdd253nd',
        author: 'fjord',
        timestamp: 1467166872634,
        optionOne: {
            votes: ['fjord'],
            text: 'change the future',
        },
        optionTwo: {
            votes: ['caleb'],
            text: 'change the past'
        }
    },
    "6ni6ok3ym7mf1p33lnez": {
        id: '6ni6ok3ym7mf1p33lnez',
        author: 'beau',
        timestamp: 1468479767190,
        optionOne: {
            votes: [],
            text: 'travel alone',
        },
        optionTwo: {
            votes: ['beau', 'fjord', 'jester'],
            text: 'travel with a group'
        }
    },
    "am8ehyc8byjqgar0jgpub9": {
        id: 'am8ehyc8byjqgar0jgpub9',
        author: 'fjord',
        timestamp: 1488579767190,
        optionOne: {
            votes: [],
            text: 'spend a day in a slaad colony',
        },
        optionTwo: {
            votes: ['fjord'],
            text: 'spend a week in a house shaped friendly mimic'
        }
    },
    "loxhs1bqm25b708cmbf3g": {
        id: 'loxhs1bqm25b708cmbf3g',
        author: 'caduceus',
        timestamp: 1482579767190,
        optionOne: {
            votes: ['caleb'],
            text: 'have a Bag of Holding that has a couple unknown (but powerful) scrolls inside it',
        },
        optionTwo: {
            votes: ['fjord'],
            text: 'have the ability to cast any cantrip spell whenever you want'
        }
    },
    "vthrdm985a262al8qx3do": {
        id: 'vthrdm985a262al8qx3do',
        author: 'nott',
        timestamp: 1489579767190,
        optionOne: {
            votes: ['beau'],
            text: 'kill the vampire warlord who has killed thousands of innocents',
        },
        optionTwo: {
            votes: ['caleb', 'nott'],
            text: 'save your best friend resulting in losing the one chance to stop the vampire'
        }
    },
    "xj352vofupe1dqz9emx13r": {
        id: 'xj352vofupe1dqz9emx13r',
        author: 'beau',
        timestamp: 1493579767190,
        optionOne: {
            votes: ['fjord', 'caduceus'],
            text: 'lose your new +1 sword to its "rightful" owners',
        },
        optionTwo: {
            votes: ['caleb', 'beau', 'yasha'],
            text: 'stash it, knowing it can never be wielded while in human lands'
        }
    },
    "gj52f6pxz2vj24cmhsxv96": {
        id: 'gj52f6pxz2vj24cmhsxv96',
        author: 'yasha',
        timestamp: 1493579767190,
        optionOne: {
            votes: ['yasha'],
            text: 'punch a beholder in its big eye',
        },
        optionTwo: {
            votes: [],
            text: 'give a dragon a foot rub'
        }
    },
    "a9sz67yp3kxxxk8s38gnux": {
        id: 'a9sz67yp3kxxxk8s38gnux',
        author: 'nott',
        timestamp: 1493579767190,
        optionOne: {
            votes: [],
            text: 'Have fingers for legs',
        },
        optionTwo: {
            votes: [],
            text: 'legs for fingers'
        }
    },
    "v9qbru7w2jdn7suksenv44": {
        id: 'v9qbru7w2jdn7suksenv44',
        author: 'caduceus',
        timestamp: 1493579767190,
        optionOne: {
            votes: ['caduceus'],
            text: 'see a purple cow',
        },
        optionTwo: {
            votes: ['jester'],
            text: 'be a purple Dragon and it\'s only ability is to fart lavender'
        }
    },
    "wmeycdnesgkpj7swubmga2": {
        id: 'wmeycdnesgkpj7swubmga2',
        author: 'jester',
        timestamp: 1493579767190,
        optionOne: {
            votes: ['yasha', 'fjord'],
            text: 'be a dragon',
        },
        optionTwo: {
            votes: ['caduceus', 'jester'],
            text: 'be a unicorn'
        }
    },
    "gbpjmybkp7cj2z8kbfj6dq": {
        id: 'gbpjmybkp7cj2z8kbfj6dq',
        author: 'beau',
        timestamp: 1493579767190,
        optionOne: {
            votes: ['yasha'],
            text: 'be engulfed by a gelatinous cube',
        },
        optionTwo: {
            votes: ['nott', 'caleb'],
            text: 'swim in the sewer'
        }
    },
    "djgzuxdmncqaeu2anzg2vz": {
        id: 'djgzuxdmncqaeu2anzg2vz',
        author: 'jester',
        timestamp: 1493579767190,
        optionOne: {
            votes: [],
            text: 'fight 10 1ft tall rabid ducks',
        },
        optionTwo: {
            votes: [],
            text: 'fight 1 10ft tall rabid duck'
        }
    },
    "xdzbs7cd69dn57wy9x2pax": {
        id: 'xdzbs7cd69dn57wy9x2pax',
        author: 'fjord',
        timestamp: 1493579767190,
        optionOne: {
            votes: [],
            text: 'use a sword',
        },
        optionTwo: {
            votes: ['fjord'],
            text: 'use a ranged weapon'
        }
    },
    "th9twwf68z66puf2rs5tj4": {
        id: 'th9twwf68z66puf2rs5tj4',
        author: 'nott',
        timestamp: 1493579767190,
        optionOne: {
            votes: ['fjord', 'caleb', 'beau', 'nott'],
            text: 'take a shot for every time you made a bad decision',
        },
        optionTwo: {
            votes: ['jester'],
            text: 'wake up as a donut'
        }
    }
}

function generateUID () {
    return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
}

export function _getUsers () {
    return new Promise((res, rej) => {
        setTimeout(() => res({...users}), 1000)
    })
}

export function _getQuestions () {
    return new Promise((res, rej) => {
        setTimeout(() => res({...questions}), 1000)
    })
}

export function formatQuestion ({ optionOneText, optionTwoText, author }) {
    return {
        id: generateUID(),
        timestamp: Date.now(),
        author,
        optionOne: {
            votes: [],
            text: optionOneText,
        },
        optionTwo: {
            votes: [],
            text: optionTwoText,
        }
    }
}

export function _saveQuestion (question) {
    return new Promise((res, rej) => {
        const authedUser = question.author;
        const formattedQuestion = formatQuestion(question);

        setTimeout(() => {
            questions = {
                ...questions,
                [formattedQuestion.id]: formattedQuestion
            }

            users = {
                ...users,
                [authedUser]: {
                    ...users[authedUser],
                    questions: users[authedUser].questions.concat([formattedQuestion.id])
                }
            }

            res(formattedQuestion)
        }, 1000)
    })
}

export function _saveQuestionAnswer ({ authedUser, qid, answer }) {
    return new Promise((res, rej) => {
        setTimeout(() => {
            users = {
                ...users,
                [authedUser]: {
                    ...users[authedUser],
                    answers: {
                        ...users[authedUser].answers,
                        [qid]: answer
                    }
                }
            }

            questions = {
                ...questions,
                [qid]: {
                    ...questions[qid],
                    [answer]: {
                        ...questions[qid][answer],
                        votes: questions[qid][answer].votes.concat([authedUser])
                    }
                }
            }

            res()
        }, 500)
    })
}