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
    text: 'Hello, Which Maria, where would you like to go first?',
    options: [
      {
        text: 'Go to tavern',
        nextText: 5
      },
      {
        text: 'Go to the woods',
        nextText: 6
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
        nextText: 6
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
        nextText: 6
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
        nextText: 2

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
      
      
    ]
  },
  {
    id: 7,
    text: 'Kill the dragon',
    options: [
      {
        text: 'Pull out your sword',
        setState: { stateOne: true },
        nextText: 2
      }
      
      
    ]
  },
  {
    id: 8,
    text: 'The dragon eats you',
    options: [
      {
        text: 'You die',
        setState: { stateOne: true },
        nextText: 1
      }
      
      
    ]
  },
  {
    id: 5,
    text: 'Perhaps it is better to take another look',
    options: [
      {
        text: 'Ignore',
        setState: { stateOne: true },
        nextText: 2
      },
      {
        text: 'Zoom in',
        nextText: 2

      }
    ]
  },
]
//----- This is the code block to alter -----

startGame()
