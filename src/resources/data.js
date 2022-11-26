

export const data = [

    {
        link: 'https://mediumblock.github.io/',
        name: 'Portfolio',
        logo: "favicon.png",
        thumbnail: 'portfolio-ss.png',
        description: {
            p1: `The portfolio you are viewing right now has been my most ambitious project to date in both content and complexity.`,
            p2: `It's used to showcase my skills as a developer by culminating most if not all of my studies since April 2022.`,
            p3: `It incorporates React Hooks, Data management, conditional rendering, React Router as well as many different libraries `,
            p4: `Since the data has been effectively filtered, we then made use of the Context Hook to drill the data down to the apporopriate components to display in the standard format used App wide.`,
            p5: `The App also incorporates responsive design encompassing most phones, tablets and personal computers`
        },
        features: ['React', 'React Context', 'Hooks', 'Api Manipulation'],
        time: "7 days"
    },
    {
        link: 'https://mediumblock.github.io/minireddit/',
        name: 'MiniReddit',
        logo: "minireddit.png",
        thumbnail: 'minireddit-ss.png',
        description: {
            p1: `MiniReddit is an app to simplify the reddit browsing experience, allowing for a larger focus on the content with less distractions than the official website.`,
            p2: `The scope of MiniReddit was simple enough; creating a more steamlined version, but the execution proved to be more difficult, especially with regards to the reddit API.`,
            p3: `One difficulty in dealing with the Reddit API was dealing with the different types of Media (video, image, text) and file types (.png, .gif), this issue was overcome by storing the relevant data to an object after the API call and filtering the data using conditionals to detect what format and type the data was listed in.`,
            p4: `Since the data has been effectively filtered, we then made use of the Context Hook to drill the data down to the apporopriate components to display in the standard format used App wide.`,
            p5: `The App also incorporates responsive design encompassing most phones, tablets and personal computers`
        },
        features: ['React', 'React Context', 'Hooks', 'Api Manipulation'],
        time: "7 days"
    },
    {
        link: 'https://mediumblock.github.io/picsome',
        name: 'Picsome',
        logo: "picsome.png",
        thumbnail: 'picsome-ss.png',
        description: {
            p1: `Picsome was made for an end of course project from the learning platform Scrimba in the React Course`,
            p2: `It was made to emulate the the minimum viable functionality of a mock e-commerce store, allowing you to 'like' and add photos to cart, it utilises React Router to navigate between the Cart and Main components.`,
            p3: `It also made use of Custom Hooks as well as React Context to streamline the functionality App-wide whilst also reducing the number of lines of code required.`,
            p4: `The App made extensive use of conditional rendering to show and hide certain icons based on user interaction such as showing the 'like' and 'add to cart' icons only being shown whilst being hovered over.`,
            
        },
        features: ['React', 'React Context', 'Hooks', 'Custom Hooks'],
        time: "2 days"
    },
    {
        link: 'https://mediumblock.github.io/opentrivia/',
        name: 'Quizzical',
        logo: "quizzical.png",
        thumbnail: 'quizzical-ss.png',
        description: {
            p1: `Quizzical is a fun trivia style app, on initiation of the App the user gets a choice of 5 random multiple choice questions from the OpenTriviaDB API, the user is then able to select their desired answers and and check their answers, once the correct / incorrect answers are shown they are then able to start a new game from a new pool of randomly generated questions.`,
            p2: `This App was made as part of an end of course challenge for React Hooks; it makes extensive use of State and conditional rendering.`,
            p3: `The main challenge of creating this App was the data management from the API call such as randomising the placement of each correct answer on each line and then relating that position back to state on the user finalising their answers.`,
        },
        features: ['React', 'Hooks', 'API / data management', 'Conditional Rendering'],
        time: "4 days"
    },
    {
        link: 'https://mediumblock.github.io/tenzies/',
        name: 'Tenzies',
        logo: "tenzies.png",
        thumbnail: 'tenzies-ss.png',
        description: {
            p1: `Tenzies is another fun game where users are can play the game 'Tenzi' in digital form, simply put, Tenzies is a game where you get 10 sets of dice and the goal is to roll the dice until all are the same number, you can 'hold' any number of dice between rolls.`,
            p2: `This App was made as a course challenge on the useEffect and useState hooks, it helped to solidify these specific hooks and present them in a fun and simple to play game`,
            p3: `It was imperative to break down the functionality of this app into small resuseable blocks of fucntions to be able to be called at any time, especially to generate new dice values and for the game to auto detect using useEffect when the game was finished.`,
        },
        features: ['React', 'Hooks', 'API / data management', 'Conditional Rendering'],
        time: "4 days"
    },
    {
        link: 'https://mediumblock.github.io/typespeed/',
        name: 'Typespeed',
        logo: "typespeed.png",
        thumbnail: 'typespeed-ss.png',
        description: {
            p1: `Typespeed is an app to test your typing speed, it runs on a 15 second timer and the goal is for the user to type as many full words as possible in the time allocated. `,
            p2: `The App makes extensive use of the useEffect hook in order to keep track of all the side effects such as the timer countdown, it also uses the useRef hook to keep focus in the typing area.`,
            p3: `The main difficulty was ensuring that the timer correctly counted down and did not create infinte event listeners as well as correct tallied up the amount of words input by the user.`,
        },
        features: ['React', 'Hooks', 'Custom Hooks', 'Conditional Rendering'],
        time: "2 days"
    }
]