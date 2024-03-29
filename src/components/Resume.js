import React, { useContext } from "react";
import { Context } from "../Hooks/Context";
import { motion } from "framer-motion";

export default function Resume() {

    const { width, breakpoint } = useContext(Context);


    return (
        <motion.div
            initial={{ opacity: 0, y: 1000, transition: { duration: 0.65 } }}
            animate={{ opacity: 1, y: 0, transition: { duration: 0.65 } }}
            exit={{ opacity: 0, y: 1000, transition: { duration: 0.65 } }}
            className="resume--container">

            <div className="resume--section">
                <a href="https://github.com/MediumBlock/reactportfolio/blob/d5529497ce613179095a6624bc2ebde9a0285c02/src/resources/Michael%20Paspa_%20Front-End%20Developer.pdf?raw=true">
                    <div className="resume--download">
                        <img src={require("../resources/icloud-download-475016.webp")}
                            alt="download resume link"
                        />
                        <h6>Download</h6>
                    </div>
                </a>
                {width > breakpoint ?
                    <div className="resume--left">
                        <div className="contact--left">
                            <h4>Website</h4>
                            <a href="https://mediumblock.github.io/reactportfolio/"
                                target='_blank'
                                rel="noopener"
                                aria-label="portfolio link">
                                <ul>
                                    <li className="resume--weblink">GitHub - Portfolio</li>
                                </ul>
                            </a>

                            <h4>Contact Details</h4>
                            <ul>
                                <li>Melbourne, Australia</li>
                                <li>+61 420 686 886</li>
                                <li>michael.paspa@gmail.com</li>
                            </ul>
                        </div>
                        <div className="education--left">
                            <h4>Formal Education</h4>
                            <ul>
                                <li>Bachelor of Accounting<br />UniSA (2011-2015)</li>
                                <li>Bachelor of Mechanical & Manufacturing Engineering<br />UniMelb(incomplete) (2007-2010)</li>
                            </ul>
                        </div>
                        <div className="tech--left">
                            <h4>Technologies</h4>
                            <ul>
                                <li>Javascript</li>
                                <li>React</li>
                                <li>CSS</li>
                                <li>React Router</li>
                                <li>Redux</li>
                                <li>HTML</li>
                                <li>NodeJS</li>
                                <li>Git Version Control</li>
                                <li>Visual Studio Code</li>
                            </ul>
                        </div>
                    </div>
                    : <br />
                }
                <div className="resume--right">
                    <div className="hero--right">
                        <h1>Michael Paspa</h1>
                        <h2>Front-End Developer</h2>
                        <h4>Driven with a passion for life and programming, eager to hit the ground running and reach the next level on my journey.</h4>
                        <hr />
                    </div>
                    <div className="education--right">
                        <h3>Education - Programming</h3>
                        <div className="resume--date">
                            <h4>Codecademy | Front-End Developer Course</h4>
                            <h4>April 2022 - Jan 2023 </h4>
                        </div>
                        <p>Codecademy is a paid service that offers many pathways in most programming disciplines. Enrolled in the front-end developer course over 7 months I took hundreds of classes and completed over 80 assignments & projects in the the following fields / learning objectives: </p>
                        <ul>
                            <li><b>The fundamentals of Web Design:</b> How to plan for and make a website visually appealing with topics such as colour theory, UI & Text design, site layout and how to properly plan out a website with skills such as wireframing and prototyping.</li>
                            <li><b>Early web programming fundamentals:</b> How to effectively programmatically create a simple web page with HTML, as well as basic CSS stylings such as the Box Model, CSS Selectors, Display & Positioning.</li>
                            <li><b>Responsive Design & CSS Animations:</b> How to make a website responsive by utilising CSS Grid, Flexbox, media queries, as well as how to create and implement animations using pure CSS.</li>
                            <li><b>Deploying websites:</b> Utlising GitHub for building and maintaining respositories, understanding and implementing Git operations as well as version control tools such as Branching as well as working with a team through Git.</li>
                            <li><b>Javascript:</b> studied extensively over several modules from basic Javascript functionality such as loops, operators, classes, modules and methods to more advanced concepts such as Asynchronous functions and testing with suites such as Jest & Mocha.</li>
                            <li><b>React:</b> Studied and created a slew of projects in both class and functional components, learnt JSX, the different lifecycle methods, hooks, React Router and more.</li>
                            <li><b>Redux:</b> Learnt how to deploy Redux in React, learnt and implemented the different data flows in Redux such as the store, reducers, dispatch etc. Also learnt how to refactor with Redux toolkit and how middleware and thunks can be correctly utilised.</li>
                            <li><b>Algorithms & Data structures:</b> studied both Linear & Complex data structures such as Linked lists, Hash Maps, Heaps & various Algorithms in topics such as dyanmic programming, intervals and binary trees.</li>
                        </ul>
                        <br />
                        <div className="resume--date">
                            <h4>Scrimba | React Developer Course </h4>
                            <h4>July - Aug 2022</h4>
                        </div>
                        <p>Scrimba is platform that offers both paid and free interactive visual courses in many area regarding web development, I enrolled and completed all react courses by Bob Ziroll upto and including Advanced, which had me completing over 200 coding challenges and 15 projects. In this course I studied the following:</p>
                        <ul>
                            <li><b>Utilising core tools</b> such as Conditional Rendering, React forms, Local Storage, using Asynchronous functions inside useEffect.</li>
                            <li><b>Hooks;</b> the many variations aswell as the when and how to use them, from base Hooks such as useState, useEffect up to and including useMemo, useContext, custom Hooks and more.</li>
                            <li><b>Optimisation & Reusability,</b> extensively looked at key ways to optimise an App in order to keep it running fast and smoothly as well as how to keep Apps modular in design to better be able to reuse functions / components and other key elements.</li>
                            <li><b>React Router, Pure JS Redux & React Redux.</b> Took a deep dive into the many different framesworks on how to make a single page application with React Router, as well as the other frameworks / libraries to help manage and centralise state.</li>
                        </ul>
                    </div>
                    <hr />

                    <div className="experience--right">
                        <h3>Work Summary</h3>
                        <div className="resume--date">
                            <h4>Foreign Investment Manager</h4>
                            <h4> Nov 2019 - Jan 2023</h4>
                        </div>
                        <h5>Hoa Binh Construction Group | Ho Chi Minh City, Vietnam</h5>
                        <p>Hoa Binh is Vietnam’s largest construction contracting company by revenue, it is a publicly
                            listed company specializing in building premium high-rise residential & commercial projects
                            for domestic & overseas clients while also engaging in property development & investment.
                            The role includes:</p>
                        <ul>
                            <li><b>Major investment evaluations</b> ranging from $2-20M USD in capital outlay; presenting
                                insights on viability, dangers and strategic considerations to drive management decision
                                making and strategy, including overseas markets entry, real estate development projects,
                                foreign company acquisitions, etc.</li>
                            <li><b>Financial analysis & modelling</b> to provide senior management with full financial visibility
                                and meaningful findings, e.g. labour & materials supply analysis in new foreign markets.
                            </li>

                            <li><b>Foreign market research</b> providing in-depth strategic analysis on overseas real-estate,
                                construction industry conditions and understanding of competitive advantages, and
                                potential pitfalls.</li>
                            <li><b>Preparation of board presentations and investor packs</b> to support investment for foreign
                                projects resulting in more than $2m of additional funding.</li>
                            <li><b>Domestic land-acquisition aid</b> for foreign partners entering Vietnam, including notable
                                Malaysian, Singaporean and Australian property developers.</li>
                            <li><b>Cross-cultural team coordination</b> between internal & foreign partner teams including
                                Samsung C&T for airport project in Taiwan, Canadian contractors for apartment project, US
                                engineering design firms entering Vietnam.</li>

                            <li><b>Business Development activities</b> in several countries (such as Canada, USA, Kuwait, and
                                more) order to further the goals of expanding Hoa Binh’s construction operations overseas.</li>
                        </ul>
                        <hr />

                        <div className="resume--date">
                            <h4>Accounts Manager</h4>
                            <h4>July 2016 - Sept 2019</h4>
                        </div>

                        <h5>JS Sourcing | Shanghai, China</h5>
                        <p>JS Sourcing is one of China’s leading sourcing specialists. Their services are tailored primarily
                            to wholesalers, brands e-commerce, and smaller businesses (SMEs) who buy in bulk from
                            China for cost-efficient purchasing. Responsible for a team of 3, the role included:</p>
                        <ul>
                            <li><b>Generating new business</b> by finding the best fit for potential clients based on their
                                requirements and the organisation’s supply network.</li>
                            <li><b>Negotiating</b> on behalf of the client to ensure best price and satisfaction.</li>
                            <li><b>Conducting spot checks</b> on manufacturing facilities to ensure quality and cost saving
                                controls are in place to facilitate a smooth and timely delivery goods at arms’ length.
                            </li>
                            <li><b>Tracking and reporting</b> of sales targets, customer complaints and other metrics for
                                reporting to senior management.</li>
                            <li><b>Key liaison</b> between clients and suppliers regardless of the size of the account the entire
                                process was handled from start to finish.
                            </li>
                            <li><b>Delegating and coordinating</b> between various members and departments (both internal and
                                external) based on project specifics and requirements, for example obtaining export
                                documentation from government agencies on controlled goods.
                            </li>
                        </ul>
                    </div>

                </div>

            </div>

        </motion.div>
    )
}