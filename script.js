//textElement and optionButtonsElement are the links between the buttons and text in the HTML document and this document.
const textElement = document.getElementById('text') // Add the ID of the element you want to change
const optionButtonsElement = document.getElementById('option-buttons') // Add the ID of the element you want to change



//----- You probably don't want to touch the following block of code -----

//state stores the state that you can set with setState in textNodes.
let state = {}

//startGame starts the game at the textNode with id 1.
function startGame() {
  state = {}
  showTextNode(1)
}

//showTextNode shows and gives functionality to the text and the buttons, and code can be added to allow styling of the buttons.
function showTextNode(textNodeIndex) {
  const textNode = textNodes.find(textNode => textNode.id === textNodeIndex)
  textElement.innerText = textNode.text
  while (optionButtonsElement.firstChild) {
    optionButtonsElement.removeChild(optionButtonsElement.firstChild)
  }

  textNode.options.forEach(option => {
    if (showOption(option)) {
      const button = document.createElement('button')
      button.innerText = option.text
      //Exception; You may add a line here
      button.addEventListener('click', () => selectOption(option))
      optionButtonsElement.appendChild(button)
    }
  })
}

//showOption gives you the choices in the buttons.
function showOption(option) {
  return option.requiredState == null || option.requiredState(state)
}

//selectOption lets the button go to the assigned textNode id.
function selectOption(option) {
  const nextTextNodeId = option.nextText
  if (nextTextNodeId <= 0) {
    return startGame()
  }
  state = Object.assign(state, option.setState)
  showTextNode(nextTextNodeId)
}

//----- You probably don't want to touch the above block of code -----


//----- This is the code block to alter -----
// textNodes lets you input the text, state(s), choices and the next textNode the choices go to.
const textNodes = [
  {
    id: 1,
    text: 'Pick your character (no impact)',
    options: [
      {
        text: 'Witch (female)',
        setState: { stateOne: true },
        nextText: 2
      },
      {
        text: 'Gnome (male)',
        setState: { stateOne: true },
        nextText: 3
      },
      {
        text: 'Elf (non-binary)',
        setState: { stateOne: true },
        nextText: 4
      }
    ]
  },
  {
    id: 2,
    text: 'Hello, Whitch Maria, where would you like to go first?',
    options: [
      {
        text: 'Go to tavern',
        nextText: 5
      },
      {
        text: 'Go to the woods',
        nextText: 10
      }
    ]
  },
  {
    id: 3,
    text: 'Hello, Gnome Gustav, where would you like to go first?',
    options: [
      {
        text: 'Go to tavern',
        nextText: 5
      },
      {
        text: 'Go to the woods',
        nextText: 10
      }
    ]
  },
  {
    id: 4,
    text: 'Hello, Elf Leaf, where would you like to go first?',
    options: [
      {
        text: 'Go to tavern',
        nextText: 5
      },
      {
        text: 'Go to the woods',
        nextText: 10
      }
    ]
  },
  {
    id: 5,
    text: 'You walk to the nearest tavern and see a large job posting board on a wall. You look closer and see a notice saying that a dragon has been terrorizing the local fishermen at Lake Dragonlair',
    options: [
      {
        text: 'Take the job',
        setState: { stateOne: true },
        nextText: 6
      },
      {
        text: 'Ignore the job',
        nextText: 10

      }
      
    ]
  },
  {
    id: 6,
    text: 'You accept the callenge and make your way to Lake Dragonlair. You reach the shore and the infamous dragon emerges from the water with a big roar. How do you react?',
    options: [
      {
        text: 'Pull out your sword',
        setState: { stateOne: true },
        nextText: 7
      },
      {
        text: 'Raise your fists and scream',
        setState: { stateOne: true },
        nextText: 8
      },
      {
        text: 'Do a dragon mating dance (kiss kiss)',
        setState: { stateOne: true },
        nextText: 9
      }
      
      
    ]
  },
  {
    id: 7,
    text: 'You pull your sword from your side and stab the dragon so fast it dies instantly. You return to the tavern with a dragon scale and present it to the tavern owner. He takes the scale, congratulates you on a job well done and gives you four dublons',
    options: [
      {
        text: 'Kill the dragon',
        setState: { stateOne: true },
        nextText: 1
      }
      
      
    ]
  },
  {
    id: 8,
    text: 'The dragon recognizes your weakness and eats you in one bite. You died',
    options: [
      {
        text: 'You die',
        setState: { stateOne: true },
        nextText: 1
      }
      
      
    ]
  },
  {
    id: 9,
    text: 'You dance around wildly to seduce the dragon. It is very effective. The dragon gives you a big kiss, picks you up and you fly away on its back',
    options: [
      {
        text: 'YOU WIIN YEEEEEEY',
        setState: { stateOne: true },
        nextText: 1

      }
    ]
  },
  {
    id: 10,
    text: 'You leave the tavern and go into the woods instead',
    options: [
      {
        text: 'You walk into the thick of the woods. You hear the leaves crunching underneath your feet, when suddenly there is no more ground beneath you and fall into a deep hole. YOU DIED.',
        setState: { stateOne: true },
        nextText: 1

      }
    ]
  },
]
//----- This is the code block to alter -----

startGame()
