import React from "react";
import { motion } from "framer-motion";

export default function Resume() {

    return (
        <motion.div
            initial={{ opacity: 0, y: 1000, transition: { duration: 0.8 } }}
            animate={{ opacity: 1, y: 0, transition: { duration: 0.8 } }}
            exit={{ opacity: 0, y: 1000, transition: { duration: 0.8 } }}
            className="resume--container">
            <div className="resume--section">
                <div className="resume--left">
                    <div className="contact--left">
                        <h4>Details</h4>
                        <ul>
                            <li>Melbourne, Australia</li>
                            <li>+61 420 686 886</li>
                            <li>m.paspaliaris@gmail.com</li>
                        </ul>
                    </div>
                    <div className="tech--left">
                        <h4>Core Technologies</h4>
                        <ul>
                            <li>Javascript</li>
                            <li>React</li>
                            <li>CSS</li>
                            <li>React Router</li>
                            <li>Redux</li>
                            <li>HTML</li>
                        </ul>

                    </div>
                    <div className="education--left">
                        <h4>Formal Education</h4>
                        <ul>
                            <li>Bachelor of Accounting<br />University of South Australia</li>
                            <li>Bachelor of Mechanical & Manufacturing Engineering <br />University of Melbourne(incomplete)</li>
                        </ul>
                    </div>
                </div>
                <div className="resume--right">
                    <div className="hero--right">
                        <h1>Michael Paspa</h1>
                        <h2>Aspiring Developer.</h2>
                        <h4>Driven with a passion for life and programming, eager to hit the ground running and see what the future holds.</h4>
                        <hr />
                    </div>
                    <div className="education--right">
                        <h3>Education - Programming</h3>
                        <div className="resume--date">
                            <h4>Codecademy | Front-End Developer Course</h4>
                            <h4>April - December 2022 </h4>
                        </div>
                        <p>Codecademy is a paid service that offers many pathways in many different programming disciplines, in the front-end developer course over 7 months I took hundreds of classes and completed over 80 assignments & projects in the the following fields / learning objectives: </p>
                        <ul>
                            <li><b>The fundamentals of Web Design:</b> How to plan for and make a website visually appealing with topics such as colour theory, UI & Text design, site layout and how to properly plan out a website with skills such as wireframing and prototyping</li>
                            <li><b>Early web programming fundamentals:</b> How to effectively programmatically create a simple web page with HTML, as well as basic CSS stylings such as the Box Model, CSS Selectors, Display & Positioning.</li>
                            <li><b>Responsive Design & CSS Animations:</b> How to make a website responsive by utilising CSS Grid, Flexbox, media queries, as well as how to create and implement animations using pure CSS.</li>
                            <li><b>Deploying websites:</b> Utlising GitHub for building and maintaining respositories, understanding and implementing Git operations as well as version control tools such as Branching as well as working with a team through Git</li>
                            <li><b>Javascript:</b> studied extensively over several modules from basic Javascript functionality such as loops, operators, classes, modules and methods to more advanced concepts such as Asynchronous functions and testing with suites such as Jest & Mocha.</li>
                            <li><b>React:</b> Extensively studied and created a whole slew of projects with both class based and functional components, learnt JSX, the different lifecycle methods, hooks, React Router and more.</li>
                            <li><b>Redux:</b> Learnt how to deploy Redux in React, learnt and implemented the different data flows in Redux such as the store, reducers, dispatch etc. Also learnt how to refactor with Redux toolkit and how middleware and thunks can be correctly utilised.</li>
                            <li><b>Algorithms & Data structures:</b> studied both Linear & Complex data structures such as Linked lists, Hash Maps, Heaps & Algorithms such as bubble sort and merge sort.</li>
                        </ul>
                        <div className="resume--date">
                            <h4>Scrimba | React Developer Course </h4>
                            <h4>July - August 2022</h4>
                        </div>
                        <p>Scrimba is platform that offers both paid and free interactive visual courses in many area regarding web deveopment, I enrolled and completed all react curses by Bob Ziroll upto and including Advanced, which had me completing over 200 coding challenges and 15 projects. In this course I studied the following:</p>
                        <ul>
                            <li>Conditional Rendering, React forms, Local Storage with React, Async functions inside useEffect</li>
                            <li>React Hooks including useMemo, useContext</li>
                            <li>Optimisation & Reusability</li>
                            <li>React Router, Pure JS Redux & React Redux</li>
                        </ul>
                    </div>
                    <hr />

                    <div className="experience--right">
                        <h3>Work Summary</h3>
                        <h4>Foreign Investment Manager</h4>
                        <h5>Hoa Binh Construction Group | Ho Chi Minh City, Vietnam | Nov 2019 - August 2022</h5>
                        <p>Hoa Binh is Vietnam’s largest construction contracting company by revenue, it is a publicly
                            listed company specializing in building premium high-rise residential & commercial projects
                            for domestic & overseas clients while also engaging in property development & investment.
                            The role includes:</p>
                        <ul>
                            <li>Major investment evaluations ranging from $2-20M USD in capital outlay; presenting
                                insights on viability, dangers and strategic considerations to drive management decision
                                making and strategy, including overseas markets entry, real estate development projects,
                                foreign company acquisitions etc</li>
                            <li>Financial analysis & modelling to provide senior management with full financial visibility
                                and meaningful findings, e.g. labour & materials supply analysis in new foreign markets.
                            </li>
                            <li>Foreign market research providing in-depth strategic analysis on overseas real-estate,
                                construction industry conditions and understanding of competitive advantages, and
                                potential pitfalls.</li>
                            <li>Preparation of board presentations and investor packs to support investment for foreign
                                projects resulting in more than $2m of additional funding.</li>
                            <li>Domestic land-acquisition aid for foreign partners entering Vietnam, including notable
                                Malaysian, Singaporean and Australian property developers.</li>
                            <li>Cross-cultural team coordination between internal & foreign partner teams including
                                Samsung C&T for airport project in Taiwan, Canadian contractors for apartment project, US
                                engineering design firms entering Vietnam</li>
                            <li>Business Development activities in several countries (such as Canada, USA, Kuwait, and
                                more) order to further the goals of expanding Hoa Binh’s construction operations overseas</li>
                        </ul>
                        <hr />
                        <h4>Accounts Manager</h4>
                        <h5>JS Sourcing | Shanghai, China | July 2016 - September 2019</h5>
                        <p>JS Sourcing is one of China’s leading sourcing specialists. Their services are tailored primarily
                            to wholesalers, brands e-commerce, and smaller businesses (SMEs) who buy in bulk from
                            China for cost-efficient purchasing. Responsible for a team of 3, the role included:</p>
                        <ul>
                            <li>Generating new business by finding the best fit for potential clients based on their
                                requirements and the organisation’s supply network.</li>
                            <li>Negotiating on behalf of the client to ensure best price and satisfaction.</li>
                            <li>Conducting spot checks on manufacturing facilities to ensure quality and cost saving
                                controls are in place to facilitate a smooth and timely delivery goods at arms’ length.
                            </li>
                            <li>Tracking and reporting of sales targets, customer complaints and other metrics for
                                reporting to senior management.</li>
                            <li>Key liaison between clients and suppliers regardless of the size of the account the entire
                                process was handled from start to finish.
                            </li>
                            <li>Delegating and coordinating between various members and departments (both internal and
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