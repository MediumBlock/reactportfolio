

export const data = [

    {
        link: 'https://mediumblock.github.io/',
        name: 'portfolio',
        logo: "favicon.png",
        thumbnail: 'portfolio-ss.png',
        description: '',
        features: ''
    },
    {
        link: 'https://mediumblock.github.io/minireddit/',
        name: 'minireddit',
        logo: "minireddit.png",
        thumbnail: 'minireddit-ss.png',
        description: {
            p1: `MiniReddit is an app to simplify the reddit browsing experience, allowing for a larger focus on the content with less distractions than the official website.`,
            p2: `The scope of MiniReddit was simple enough; creating a more steamlined version, but the execution proved to be more difficult, especially with regards to the reddit API.`,
            p3: `One difficulty in dealing with the Reddit API was dealing with the different types of Media (video, image, text) and file types (.png, .gif), this issue was overcome by storing the relevant data to an object after the API call and filtering the data using conditionals to detect what format and type the data was listed in.`,
            p4: `Since the data has been effectively filtered, we then made use of the Context Hook to drill the data down to the apporopriate components to display in the standard format used App wide.`,
            p5: `The App also incorporates responsive design encompassing most phones, tablets and personal computers`
        },
        features: ['React', 'React Context', 'React Hooks', 'Api Manipulation', '7 days']
    },
    {
        link: 'https://mediumblock.github.io/picsome',
        name: 'picsome',
        logo: "picsome.png",
        thumbnail: 'picsome-ss.png',
        description: '',
        features: ''
    },
    {
        link: 'https://mediumblock.github.io/opentrivia/',
        name: 'Quizzical',
        logo: "quizzical.png",
        thumbnail: 'quizzical-ss.png',
        description: '',
        features: ''
    },
    {
        link: 'https://mediumblock.github.io/tenzies/',
        name: 'tenzies',
        logo: "tenzies.png",
        thumbnail: 'tenzies-ss.png',
        description: '',
        features: ''
    },
    {
        link: 'https://mediumblock.github.io/typespeed/',
        name: 'typespeed',
        logo: "typespeed.png",
        thumbnail: 'typespeed-ss.png',
        description: '',
        features: ''
    }
]