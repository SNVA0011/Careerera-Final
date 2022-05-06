import React from 'react'

export default function Cariculambyid(props) {
    const final = props.data;

    return (
        <>
            <div className="curriculum-assimilate certification-courseslight full-w scroll-spbx" id="carriculum">
                <div className="container pt-16 pb-4">
                    <div className="sec_title">
                        <h2 className="text-2xl md:text-3xl font-bold">
                            Program <span className="orange-clrsite">Curriculum</span>
                        </h2>
                        <p className="text-gray-500 text-base md:text-lg fw-medium">
                            See which topics you will have to assimilate.
                        </p>
                        <hr className="w-20 hr mb-4 bg-blue-400 sepfoll-hr" />
                    </div>


                    {final ?
                        <div className="curriculum-masterid full-w">
 
                            {final[0].curriculum_id == '259' ?
                                <div> {final[0].curriculum_id + ', ' + final[0].filename}</div>
                                : ''}
                            


                            
                            {final[0].curriculum_id == '166' ?
                                <>
                                    <div className="course-list-header">
                                        <div id="pg-91-1" className="panel-grid faq-mob">
                                            <div id="pgc-91-1-1" className="panel-grid-cell">
                                                <div
                                                    id="panel-91-1-1-0"
                                                    className="so-panel widget widget_accordion panel-first-child panel-last-child"
                                                >
                                                    <div className="thim-widget-accordion thim-widget-accordion-base new-accord">
                                                        <div className="thim-widget-accordion">
                                                            <span className="line" />
                                                            <div
                                                                aria-multiselectable="true"
                                                                role="tablist"
                                                                className=""
                                                                id="accordion_56b58d47cf7a3"
                                                            >
                                                                <div className="panel panel-default">
                                                                    <div
                                                                        id="heading_accordion_1"
                                                                        role="tab"
                                                                        className="panel-heading"
                                                                    >
                                                                        <h4 className="panel-title">
                                                                            <a
                                                                                aria-controls="collapse_accordion_1"
                                                                                aria-expanded="false"
                                                                                href="#collapse_accordion_1"
                                                                                data-parent="#accordion_1"
                                                                                data-toggle="collapse"
                                                                                className="collapsed"
                                                                                role="button"
                                                                            >
                                                                                Statistical Learning
                                                                            </a>
                                                                        </h4>
                                                                    </div>
                                                                    <div
                                                                        aria-labelledby="heading_accordion_1"
                                                                        role="tabpanel"
                                                                        className="panel-collapse collapse in"
                                                                        id="collapse_accordion_1"
                                                                        style={{}}
                                                                        aria-expanded="true"
                                                                    >
                                                                        <div className="panel-body">
                                                                            <ul>
                                                                                <li>Statistical analysis concepts</li>
                                                                                <li>Descriptive statistics</li>
                                                                                <li>Introduction to probability and Bayes theorem</li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="panel panel-default">
                                                                    <div
                                                                        id="heading_accordion_2"
                                                                        role="tab"
                                                                        className="panel-heading"
                                                                    >
                                                                        <h4 className="panel-title">
                                                                            {" "}
                                                                            <a
                                                                                aria-controls="collapse_accordion_2"
                                                                                aria-expanded="false"
                                                                                href="#collapse_accordion_2"
                                                                                data-parent="#accordion_2"
                                                                                data-toggle="collapse"
                                                                                className="collapsed"
                                                                                role="button"
                                                                            >
                                                                                Gradient Descent
                                                                            </a>
                                                                        </h4>
                                                                    </div>
                                                                    <div
                                                                        aria-labelledby="heading_accordion_2"
                                                                        role="tabpanel"
                                                                        className="panel-collapse collapse in"
                                                                        id="collapse_accordion_2"
                                                                        style={{}}
                                                                        aria-expanded="true"
                                                                    >
                                                                        <div className="panel-body">
                                                                            <ul>
                                                                                <li>Probability distributions</li>
                                                                                <li>Hypothesis testing &amp; scores</li>
                                                                                <li>Experiential learning project</li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="panel panel-default">
                                                                    <div
                                                                        id="heading_accordion_2"
                                                                        role="tab"
                                                                        className="panel-heading"
                                                                    >
                                                                        <h4 className="panel-title">
                                                                            {" "}
                                                                            <a
                                                                                aria-controls="collapse_accordion_2"
                                                                                aria-expanded="false"
                                                                                href="#collapse_accordion_2"
                                                                                data-parent="#accordion_2"
                                                                                data-toggle="collapse"
                                                                                className="collapsed"
                                                                                role="button"
                                                                            >
                                                                                Python for AI &amp; Machine Learning
                                                                            </a>
                                                                        </h4>
                                                                    </div>
                                                                    <div
                                                                        aria-labelledby="heading_accordion_2"
                                                                        role="tabpanel"
                                                                        className="panel-collapse collapse in"
                                                                        id="collapse_accordion_2"
                                                                        style={{}}
                                                                        aria-expanded="true"
                                                                    >
                                                                        <div className="panel-body">
                                                                            <ul>
                                                                                <li>Python Overview</li>
                                                                                <li>Python Basics</li>
                                                                                <li>Python functions, packages and routines</li>
                                                                                <li>Pandas, NumPy, Matplotlib introduction</li>
                                                                                <li>
                                                                                    Pandas for Pre-Processing and Exploratory Data Analysis
                                                                                </li>
                                                                                <li>Numpy for Statistical Analysis</li>
                                                                                <li>Seaborn for Data Visualization</li>
                                                                                <li>Sci-kit Library</li>
                                                                                <li>Case Studies and careers</li>
                                                                                <li>Experiential Learning project</li>
                                                                                <li>
                                                                                    Introduction to Anaconda/Jupyter for coding/data
                                                                                    visualisation
                                                                                </li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="panel panel-default">
                                                                    <div
                                                                        id="heading_accordion_2"
                                                                        role="tab"
                                                                        className="panel-heading"
                                                                    >
                                                                        <h4 className="panel-title">
                                                                            {" "}
                                                                            <a
                                                                                aria-controls="collapse_accordion_2"
                                                                                aria-expanded="false"
                                                                                href="#collapse_accordion_2"
                                                                                data-parent="#accordion_2"
                                                                                data-toggle="collapse"
                                                                                className="collapsed"
                                                                                role="button"
                                                                            >
                                                                                Data Science
                                                                            </a>
                                                                        </h4>
                                                                    </div>
                                                                    <div
                                                                        aria-labelledby="heading_accordion_2"
                                                                        role="tabpanel"
                                                                        className="panel-collapse collapse in"
                                                                        id="collapse_accordion_2"
                                                                        style={{}}
                                                                        aria-expanded="true"
                                                                    >
                                                                        <div className="panel-body">
                                                                            <ul>
                                                                                <li>Introduction to Data Science, ML, AI</li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="panel panel-default">
                                                                    <div
                                                                        id="heading_accordion_2"
                                                                        role="tab"
                                                                        className="panel-heading"
                                                                    >
                                                                        <h4 className="panel-title">
                                                                            {" "}
                                                                            <a
                                                                                aria-controls="collapse_accordion_2"
                                                                                aria-expanded="false"
                                                                                href="#collapse_accordion_2"
                                                                                data-parent="#accordion_2"
                                                                                data-toggle="collapse"
                                                                                className="collapsed"
                                                                                role="button"
                                                                            >
                                                                                Machine Learning
                                                                            </a>
                                                                        </h4>
                                                                    </div>
                                                                    <div
                                                                        aria-labelledby="heading_accordion_2"
                                                                        role="tabpanel"
                                                                        className="panel-collapse collapse in"
                                                                        id="collapse_accordion_2"
                                                                        style={{}}
                                                                        aria-expanded="true"
                                                                    >
                                                                        <div className="panel-body">
                                                                            <ul>
                                                                                <li>
                                                                                    <b>Supervised Learning</b>
                                                                                    <ul>
                                                                                        <li> Introduction to Machine Learning</li>
                                                                                        <li> Supervised Learning concepts</li>
                                                                                        <li>
                                                                                            {" "}
                                                                                            Linear Regression (both Univariate and Multivariate)
                                                                                        </li>
                                                                                        <li>
                                                                                            {" "}
                                                                                            Polynomial Regression (both Univariate and
                                                                                            Multivariate)
                                                                                        </li>
                                                                                        <li> Logistic Regression (Binary Class)</li>
                                                                                        <li> Logistic Regression (Multi Class)</li>
                                                                                        <li> K-NN Classification</li>
                                                                                        <li> Naive Bayesian classifiers</li>
                                                                                        <li> SVM - Support Vector Machines</li>
                                                                                        <li> Experiential Learning project</li>
                                                                                    </ul>
                                                                                </li>
                                                                                <li>
                                                                                    <b>Unsupervised Learning</b>
                                                                                    <ul>
                                                                                        <li>Unsupervised Learning concepts</li>
                                                                                        <li>Clustering approaches</li>
                                                                                        <li>K Means clustering</li>
                                                                                        <li>Hierarchical clustering</li>
                                                                                        <li>High-dimensional clustering</li>
                                                                                        <li>Expectation Maximization</li>
                                                                                    </ul>
                                                                                </li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="panel panel-default">
                                                                    <div
                                                                        id="heading_accordion_2"
                                                                        role="tab"
                                                                        className="panel-heading"
                                                                    >
                                                                        <h4 className="panel-title">
                                                                            {" "}
                                                                            <a
                                                                                aria-controls="collapse_accordion_2"
                                                                                aria-expanded="false"
                                                                                href="#collapse_accordion_2"
                                                                                data-parent="#accordion_2"
                                                                                data-toggle="collapse"
                                                                                className="collapsed"
                                                                                role="button"
                                                                            >
                                                                                Ensemble technique
                                                                            </a>
                                                                        </h4>
                                                                    </div>
                                                                    <div
                                                                        aria-labelledby="heading_accordion_2"
                                                                        role="tabpanel"
                                                                        className="panel-collapse collapse in"
                                                                        id="collapse_accordion_2"
                                                                        style={{}}
                                                                        aria-expanded="true"
                                                                    >
                                                                        <div className="panel-body">
                                                                            <ul>
                                                                                <li>Decision Trees</li>
                                                                                <li>Introduction to Ensemble Learning</li>
                                                                                <li>Different Ensemble Learning Techniques</li>
                                                                                <li>Bagging</li>
                                                                                <li>Boosting</li>
                                                                                <li>Random Forests</li>
                                                                                <li>Stacking</li>
                                                                                <li>Experiential Learning project</li>
                                                                                <li>
                                                                                    PCA (Principal Component Analysis) and Its Applications
                                                                                </li>
                                                                                <li>Confusion Matrix</li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="panel panel-default">
                                                                    <div
                                                                        id="heading_accordion_2"
                                                                        role="tab"
                                                                        className="panel-heading"
                                                                    >
                                                                        <h4 className="panel-title">
                                                                            {" "}
                                                                            <a
                                                                                aria-controls="collapse_accordion_2"
                                                                                aria-expanded="false"
                                                                                href="#collapse_accordion_2"
                                                                                data-parent="#accordion_2"
                                                                                data-toggle="collapse"
                                                                                className="collapsed"
                                                                                role="button"
                                                                            >
                                                                                Reinforcement Learning
                                                                            </a>
                                                                        </h4>
                                                                    </div>
                                                                    <div
                                                                        aria-labelledby="heading_accordion_2"
                                                                        role="tabpanel"
                                                                        className="panel-collapse collapse in"
                                                                        id="collapse_accordion_2"
                                                                        style={{}}
                                                                        aria-expanded="true"
                                                                    >
                                                                        <div className="panel-body">
                                                                            <ul>
                                                                                <li>Value based methods Q-learning</li>
                                                                                <li>Policy based methods</li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="panel panel-default">
                                                                    <div
                                                                        id="heading_accordion_2"
                                                                        role="tab"
                                                                        className="panel-heading"
                                                                    >
                                                                        <h4 className="panel-title">
                                                                            {" "}
                                                                            <a
                                                                                aria-controls="collapse_accordion_2"
                                                                                aria-expanded="false"
                                                                                href="#collapse_accordion_2"
                                                                                data-parent="#accordion_2"
                                                                                data-toggle="collapse"
                                                                                className="collapsed"
                                                                                role="button"
                                                                            >
                                                                                Recommendation Systems
                                                                            </a>
                                                                        </h4>
                                                                    </div>
                                                                    <div
                                                                        aria-labelledby="heading_accordion_2"
                                                                        role="tabpanel"
                                                                        className="panel-collapse collapse in"
                                                                        id="collapse_accordion_2"
                                                                        style={{}}
                                                                        aria-expanded="true"
                                                                    >
                                                                        <div className="panel-body">
                                                                            <ul>
                                                                                <li>User &amp; item based recommendation systems</li>
                                                                                <li>Collaborative filtering</li>
                                                                                <li>Content based filtering</li>
                                                                                <li>Hybrid recommendation systems</li>
                                                                                <li>Performance measurement</li>
                                                                                <li>Experiential Learning project</li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="panel panel-default">
                                                                    <div
                                                                        id="heading_accordion_2"
                                                                        role="tab"
                                                                        className="panel-heading"
                                                                    >
                                                                        <h4 className="panel-title">
                                                                            {" "}
                                                                            <a
                                                                                aria-controls="collapse_accordion_2"
                                                                                aria-expanded="false"
                                                                                href="#collapse_accordion_2"
                                                                                data-parent="#accordion_2"
                                                                                data-toggle="collapse"
                                                                                className="collapsed"
                                                                                role="button"
                                                                            >
                                                                                Featurization , model selection &amp; tuning
                                                                            </a>
                                                                        </h4>
                                                                    </div>
                                                                    <div
                                                                        aria-labelledby="heading_accordion_2"
                                                                        role="tabpanel"
                                                                        className="panel-collapse collapse in"
                                                                        id="collapse_accordion_2"
                                                                        style={{}}
                                                                        aria-expanded="true"
                                                                    >
                                                                        <div className="panel-body">
                                                                            <ul>
                                                                                <li>Text Analytics</li>
                                                                                <li>Feature extraction</li>
                                                                                <li>Model Defects &amp; Evaluation Metrics</li>
                                                                                <li>Model selection and tuning</li>
                                                                                <li>Comparison of Machine Learning models</li>
                                                                                <li>Experiential Learning project</li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="panel panel-default">
                                                                    <div
                                                                        id="heading_accordion_2"
                                                                        role="tab"
                                                                        className="panel-heading"
                                                                    >
                                                                        <h4 className="panel-title">
                                                                            {" "}
                                                                            <a
                                                                                aria-controls="collapse_accordion_2"
                                                                                aria-expanded="false"
                                                                                href="#collapse_accordion_2"
                                                                                data-parent="#accordion_2"
                                                                                data-toggle="collapse"
                                                                                className="collapsed"
                                                                                role="button"
                                                                            >
                                                                                Tools and Techniques
                                                                            </a>
                                                                        </h4>
                                                                    </div>
                                                                    <div
                                                                        aria-labelledby="heading_accordion_2"
                                                                        role="tabpanel"
                                                                        className="panel-collapse collapse in"
                                                                        id="collapse_accordion_2"
                                                                        style={{}}
                                                                        aria-expanded="true"
                                                                    >
                                                                        <div className="panel-body">
                                                                            <ul>
                                                                                <li>Python (Pandas, Numpy, Scipy,</li>
                                                                                <li>Matplotlib, Seaborn and Scikit-Learn)</li>
                                                                                <li>Mini Projects</li>
                                                                                <li>Machine Learning Lab session</li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="panel panel-default">
                                                                    <div
                                                                        id="heading_accordion_2"
                                                                        role="tab"
                                                                        className="panel-heading"
                                                                    >
                                                                        <h4 className="panel-title">
                                                                            {" "}
                                                                            <a
                                                                                aria-controls="collapse_accordion_2"
                                                                                aria-expanded="false"
                                                                                href="#collapse_accordion_2"
                                                                                data-parent="#accordion_2"
                                                                                data-toggle="collapse"
                                                                                className="collapsed"
                                                                                role="button"
                                                                            >
                                                                                Artificial Intelligence
                                                                            </a>
                                                                        </h4>
                                                                    </div>
                                                                    <div
                                                                        aria-labelledby="heading_accordion_2"
                                                                        role="tabpanel"
                                                                        className="panel-collapse collapse in"
                                                                        id="collapse_accordion_2"
                                                                        style={{}}
                                                                        aria-expanded="true"
                                                                    >
                                                                        <div className="panel-body">
                                                                            <ul>
                                                                                <li>
                                                                                    <b>Deep Learning</b>
                                                                                    <ul>
                                                                                        <li>Neural Network Basics</li>
                                                                                        <li>Artificial Neural Network (ANN)</li>
                                                                                        <li>Forward Propagation</li>
                                                                                        <li>Backward Propagation</li>
                                                                                        <li>Deep Neural Networks</li>
                                                                                        <li>Recurrent Neural Networks (RNN)</li>
                                                                                        <li>Deep Learning applied to images using CNN</li>
                                                                                        <li>
                                                                                            Tensor Flow for Neural Networks &amp; Deep Learning{" "}
                                                                                        </li>
                                                                                    </ul>
                                                                                </li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="panel panel-default">
                                                                    <div
                                                                        id="heading_accordion_2"
                                                                        role="tab"
                                                                        className="panel-heading"
                                                                    >
                                                                        <h4 className="panel-title">
                                                                            {" "}
                                                                            <a
                                                                                aria-controls="collapse_accordion_2"
                                                                                aria-expanded="false"
                                                                                href="#collapse_accordion_2"
                                                                                data-parent="#accordion_2"
                                                                                data-toggle="collapse"
                                                                                className="collapsed"
                                                                                role="button"
                                                                            >
                                                                                Computer Vision
                                                                            </a>
                                                                        </h4>
                                                                    </div>
                                                                    <div
                                                                        aria-labelledby="heading_accordion_2"
                                                                        role="tabpanel"
                                                                        className="panel-collapse collapse in"
                                                                        id="collapse_accordion_2"
                                                                        style={{}}
                                                                        aria-expanded="true"
                                                                    >
                                                                        <div className="panel-body">
                                                                            <ul>
                                                                                <li>Convolutional Neural Networks</li>
                                                                                <li>Keras library for deep learning in Python</li>
                                                                                <li>Pre-processing image Data</li>
                                                                                <li>Object &amp; face recognition</li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="panel panel-default">
                                                                    <div
                                                                        id="heading_accordion_2"
                                                                        role="tab"
                                                                        className="panel-heading"
                                                                    >
                                                                        <h4 className="panel-title">
                                                                            {" "}
                                                                            <a
                                                                                aria-controls="collapse_accordion_2"
                                                                                aria-expanded="false"
                                                                                href="#collapse_accordion_2"
                                                                                data-parent="#accordion_2"
                                                                                data-toggle="collapse"
                                                                                className="collapsed"
                                                                                role="button"
                                                                            >
                                                                                Visualization
                                                                            </a>
                                                                        </h4>
                                                                    </div>
                                                                    <div
                                                                        aria-labelledby="heading_accordion_2"
                                                                        role="tabpanel"
                                                                        className="panel-collapse collapse in"
                                                                        id="collapse_accordion_2"
                                                                        style={{}}
                                                                        aria-expanded="true"
                                                                    >
                                                                        <div className="panel-body">
                                                                            <ul>
                                                                                <li>Visualizing features &amp; kernels</li>
                                                                                <li>
                                                                                    TensorBoard – Visualizing Learning, Graph Visualization
                                                                                </li>
                                                                                <li>Synthesis and style transfer</li>
                                                                                <li>
                                                                                    Case Study: Visualizing a convoluted neural network
                                                                                </li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="panel panel-default">
                                                                    <div
                                                                        id="heading_accordion_2"
                                                                        role="tab"
                                                                        className="panel-heading"
                                                                    >
                                                                        <h4 className="panel-title">
                                                                            {" "}
                                                                            <a
                                                                                aria-controls="collapse_accordion_2"
                                                                                aria-expanded="false"
                                                                                href="#collapse_accordion_2"
                                                                                data-parent="#accordion_2"
                                                                                data-toggle="collapse"
                                                                                className="collapsed"
                                                                                role="button"
                                                                            >
                                                                                Natural Language Processing
                                                                            </a>
                                                                        </h4>
                                                                    </div>
                                                                    <div
                                                                        aria-labelledby="heading_accordion_2"
                                                                        role="tabpanel"
                                                                        className="panel-collapse collapse in"
                                                                        id="collapse_accordion_2"
                                                                        style={{}}
                                                                        aria-expanded="true"
                                                                    >
                                                                        <div className="panel-body">
                                                                            <ul>
                                                                                <li>NLP library NLTK</li>
                                                                                <li>Statistical NLP and text similarity</li>
                                                                                <li>Syntax and parsing techniques</li>
                                                                                <li>Text summarization techniques</li>
                                                                                <li>Semantics and Generation </li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="panel panel-default">
                                                                    <div
                                                                        id="heading_accordion_2"
                                                                        role="tab"
                                                                        className="panel-heading"
                                                                    >
                                                                        <h4 className="panel-title">
                                                                            {" "}
                                                                            <a
                                                                                aria-controls="collapse_accordion_2"
                                                                                aria-expanded="false"
                                                                                href="#collapse_accordion_2"
                                                                                data-parent="#accordion_2"
                                                                                data-toggle="collapse"
                                                                                className="collapsed"
                                                                                role="button"
                                                                            >
                                                                                Intelligent Agents
                                                                            </a>
                                                                        </h4>
                                                                    </div>
                                                                    <div
                                                                        aria-labelledby="heading_accordion_2"
                                                                        role="tabpanel"
                                                                        className="panel-collapse collapse in"
                                                                        id="collapse_accordion_2"
                                                                        style={{}}
                                                                        aria-expanded="true"
                                                                    >
                                                                        <div className="panel-body">
                                                                            <ul>
                                                                                <li>Uninformed and heuristic-based search techniques</li>
                                                                                <li>Adversarial search and its uses</li>
                                                                                <li>Planning and constraint satisfaction techniques</li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="panel panel-default">
                                                                    <div
                                                                        id="heading_accordion_2"
                                                                        role="tab"
                                                                        className="panel-heading"
                                                                    >
                                                                        <h4 className="panel-title">
                                                                            {" "}
                                                                            <a
                                                                                aria-controls="collapse_accordion_2"
                                                                                aria-expanded="false"
                                                                                href="#collapse_accordion_2"
                                                                                data-parent="#accordion_2"
                                                                                data-toggle="collapse"
                                                                                className="collapsed"
                                                                                role="button"
                                                                            >
                                                                                Lanugage &amp; tools
                                                                            </a>
                                                                        </h4>
                                                                    </div>
                                                                    <div
                                                                        aria-labelledby="heading_accordion_2"
                                                                        role="tabpanel"
                                                                        className="panel-collapse collapse in"
                                                                        id="collapse_accordion_2"
                                                                        style={{}}
                                                                        aria-expanded="true"
                                                                    >
                                                                        <div className="panel-body">
                                                                            <ul>
                                                                                <li>Python</li>
                                                                                <li>Data libraries like Pandas, Numpy, Scipy</li>
                                                                                <li>Python ML library scikit-learn</li>
                                                                                <li>Python visualization library Matplotlib</li>
                                                                                <li>NLP library NLTK</li>
                                                                                <li>Tensor Flow</li>
                                                                                <li>Keras</li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="panel panel-default">
                                                                    <div
                                                                        id="heading_accordion_2"
                                                                        role="tab"
                                                                        className="panel-heading"
                                                                    >
                                                                        <h4 className="panel-title">
                                                                            {" "}
                                                                            <a
                                                                                aria-controls="collapse_accordion_2"
                                                                                aria-expanded="false"
                                                                                href="#collapse_accordion_2"
                                                                                data-parent="#accordion_2"
                                                                                data-toggle="collapse"
                                                                                className="collapsed"
                                                                                role="button"
                                                                            >
                                                                                Capstone project
                                                                            </a>
                                                                        </h4>
                                                                    </div>
                                                                    <div
                                                                        aria-labelledby="heading_accordion_2"
                                                                        role="tabpanel"
                                                                        className="panel-collapse collapse in"
                                                                        id="collapse_accordion_2"
                                                                        style={{}}
                                                                        aria-expanded="true"
                                                                    >
                                                                        <div className="panel-body">
                                                                            <ul>
                                                                                <li>Group Presentation</li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </>
                                : ''}
                            


                            
                            {final[0].curriculum_id == '167' ?
                                <>
                                    <div className="course-list-header">
                                        <div id="pg-91-1" className="panel-grid faq-mob">
                                            <div id="pgc-91-1-1" className="panel-grid-cell">
                                                <div
                                                    id="panel-91-1-1-0"
                                                    className="so-panel widget widget_accordion panel-first-child panel-last-child"
                                                >
                                                    <div className="thim-widget-accordion thim-widget-accordion-base new-accord">
                                                        <div className="thim-widget-accordion">
                                                            <span className="line" />
                                                            <div
                                                                aria-multiselectable="true"
                                                                role="tablist"
                                                                className=""
                                                                id="accordion_56b58d47cf7a3"
                                                            >
                                                                <div className="panel panel-default">
                                                                    <div
                                                                        id="heading_accordion_1"
                                                                        role="tab"
                                                                        className="panel-heading"
                                                                    >
                                                                        <h4 className="panel-title">
                                                                            {" "}
                                                                            <a
                                                                                aria-controls="collapse_accordion_1"
                                                                                aria-expanded="false"
                                                                                href="#collapse_accordion_1"
                                                                                data-parent="#accordion_1"
                                                                                data-toggle="collapse"
                                                                                className="collapsed"
                                                                                role="button"
                                                                            >
                                                                                Introduction to Data Science
                                                                            </a>{" "}
                                                                        </h4>
                                                                    </div>
                                                                    <div
                                                                        aria-labelledby="heading_accordion_1"
                                                                        role="tabpanel"
                                                                        className="panel-collapse collapse in"
                                                                        id="collapse_accordion_1"
                                                                        style={{}}
                                                                        aria-expanded="true"
                                                                    >
                                                                        <div className="panel-body">
                                                                            <ul>
                                                                                <li>Basics of Maths/Computer Programming</li>
                                                                                <li>Statistics</li>
                                                                                <li>Introduction to R</li>
                                                                                <li>
                                                                                    Introduction to Python (Basic Python, data science
                                                                                    related libraries, like NumPy, Scikit etc.
                                                                                </li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="panel panel-default">
                                                                    <div
                                                                        id="heading_accordion_2"
                                                                        role="tab"
                                                                        className="panel-heading"
                                                                    >
                                                                        <h4 className="panel-title">
                                                                            {" "}
                                                                            <a
                                                                                aria-controls="collapse_accordion_2"
                                                                                aria-expanded="false"
                                                                                href="#collapse_accordion_2"
                                                                                data-parent="#accordion_2"
                                                                                data-toggle="collapse"
                                                                                className="collapsed"
                                                                                role="button"
                                                                            >
                                                                                Basics of Data management
                                                                            </a>{" "}
                                                                        </h4>
                                                                    </div>
                                                                    <div
                                                                        aria-labelledby="heading_accordion_2"
                                                                        role="tabpanel"
                                                                        className="panel-collapse collapse in"
                                                                        id="collapse_accordion_2"
                                                                        style={{}}
                                                                        aria-expanded="true"
                                                                    >
                                                                        <div className="panel-body">
                                                                            <ul>
                                                                                <li>
                                                                                    Introduction to SQL/DataBase (RDBMS, Oracle, MySQL etc.)
                                                                                </li>
                                                                                <li>
                                                                                    Introduction to Big Data (Introduction to
                                                                                    NoSQL/Spark/Hadoop/exadata etc.)
                                                                                </li>
                                                                                <li>Data Mining</li>
                                                                                <li>Visualisation (tableau, powerBI etc.)</li>
                                                                                <li>Advance statistics</li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="panel panel-default">
                                                                    <div
                                                                        id="heading_accordion_2"
                                                                        role="tab"
                                                                        className="panel-heading"
                                                                    >
                                                                        <h4 className="panel-title">
                                                                            {" "}
                                                                            <a
                                                                                aria-controls="collapse_accordion_2"
                                                                                aria-expanded="false"
                                                                                href="#collapse_accordion_2"
                                                                                data-parent="#accordion_2"
                                                                                data-toggle="collapse"
                                                                                className="collapsed"
                                                                                role="button"
                                                                            >
                                                                                Machine Learning
                                                                            </a>{" "}
                                                                        </h4>
                                                                    </div>
                                                                    <div
                                                                        aria-labelledby="heading_accordion_2"
                                                                        role="tabpanel"
                                                                        className="panel-collapse collapse in"
                                                                        id="collapse_accordion_2"
                                                                        style={{}}
                                                                        aria-expanded="true"
                                                                    >
                                                                        <div className="panel-body">
                                                                            <ul>
                                                                                <li>Machine Learning Algorithm Overview</li>
                                                                                <li>Supervised Learning Algorithms</li>
                                                                                <li>Regression: Polynomial</li>
                                                                                <li>Classification: Binary</li>
                                                                                <li>Classification: KNN</li>
                                                                                <li>Classification: Multiclass</li>
                                                                                <li>Classification: SVM</li>
                                                                                <li>Classification: Decision Trees</li>
                                                                                <li>Classification: Random Forest</li>
                                                                                <li>
                                                                                    Concepts: Gradient Descent, Train_Test_Split, K Fold
                                                                                    Cross Validation, Feature selection,Feature Scaling etc.
                                                                                </li>
                                                                                <li>
                                                                                    Concepts: Overfiting, Confusion Matrix, ROC curve etc.
                                                                                </li>
                                                                                <li>Classification: Neural Networks</li>
                                                                                <li>Unsupervised Learning</li>
                                                                                <li>KMA/Clustering</li>
                                                                                <li>Recommendation Engine/Movie Ratings etc.</li>
                                                                                <li>Reinforcement Learning</li>
                                                                                <li>Capstone Project</li>
                                                                                <li>ML Hackathon</li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="panel panel-default">
                                                                    <div
                                                                        id="heading_accordion_2"
                                                                        role="tab"
                                                                        className="panel-heading"
                                                                    >
                                                                        <h4 className="panel-title">
                                                                            {" "}
                                                                            <a
                                                                                aria-controls="collapse_accordion_2"
                                                                                aria-expanded="false"
                                                                                href="#collapse_accordion_2"
                                                                                data-parent="#accordion_2"
                                                                                data-toggle="collapse"
                                                                                className="collapsed"
                                                                                role="button"
                                                                            >
                                                                                Deep Learning
                                                                            </a>{" "}
                                                                        </h4>
                                                                    </div>
                                                                    <div
                                                                        aria-labelledby="heading_accordion_2"
                                                                        role="tabpanel"
                                                                        className="panel-collapse collapse in"
                                                                        id="collapse_accordion_2"
                                                                        style={{}}
                                                                        aria-expanded="true"
                                                                    >
                                                                        <div className="panel-body">
                                                                            <ul>
                                                                                <li>Building blocks</li>
                                                                                <li>Advanced Python Libraries (Tensorflow)</li>
                                                                                <li>
                                                                                    Data Science on Cloud (Google Colab, Microsoft Azure ML
                                                                                    Studio)
                                                                                </li>
                                                                                <li>NLP</li>
                                                                                <li>Basics of NLP, cosine algorithm etc.</li>
                                                                                <li>Chatbot</li>
                                                                                <li>Image/Video Processing</li>
                                                                                <li>CNN, RCNN, Faster-RCNN, Yolo</li>
                                                                                <li>Face Recognition</li>
                                                                                <li>Object Recognition</li>
                                                                                <li>Hackathon</li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="panel panel-default">
                                                                    <div
                                                                        id="heading_accordion_2"
                                                                        role="tab"
                                                                        className="panel-heading"
                                                                    >
                                                                        <h4 className="panel-title">
                                                                            {" "}
                                                                            <a
                                                                                aria-controls="collapse_accordion_2"
                                                                                aria-expanded="false"
                                                                                href="#collapse_accordion_2"
                                                                                data-parent="#accordion_2"
                                                                                data-toggle="collapse"
                                                                                className="collapsed"
                                                                                role="button"
                                                                            >
                                                                                Industry specific Case studies
                                                                            </a>{" "}
                                                                        </h4>
                                                                    </div>
                                                                    <div
                                                                        aria-labelledby="heading_accordion_2"
                                                                        role="tabpanel"
                                                                        className="panel-collapse collapse in"
                                                                        id="collapse_accordion_2"
                                                                        style={{}}
                                                                        aria-expanded="true"
                                                                    >
                                                                        <div className="panel-body">
                                                                            <ul>
                                                                                <li>Time Series Forecasting</li>
                                                                                <li>
                                                                                    Web &amp; Social Media Analytics (Industry Case study)
                                                                                </li>
                                                                                <li>
                                                                                    Finance &amp; Risk Analytics (Industry Case study)
                                                                                </li>
                                                                                <li>
                                                                                    Market &amp; Retail Analytics (Industry Case study)
                                                                                </li>
                                                                                <li>
                                                                                    Supply Chain &amp; Logistics Analytics (Industry Case
                                                                                    study)
                                                                                </li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="panel panel-default">
                                                                    <div
                                                                        id="heading_accordion_2"
                                                                        role="tab"
                                                                        className="panel-heading"
                                                                    >
                                                                        <h4 className="panel-title">
                                                                            {" "}
                                                                            <a
                                                                                aria-controls="collapse_accordion_2"
                                                                                aria-expanded="false"
                                                                                href="#collapse_accordion_2"
                                                                                data-parent="#accordion_2"
                                                                                data-toggle="collapse"
                                                                                className="collapsed"
                                                                                role="button"
                                                                            >
                                                                                Capstone project
                                                                            </a>{" "}
                                                                        </h4>
                                                                    </div>
                                                                    <div
                                                                        aria-labelledby="heading_accordion_2"
                                                                        role="tabpanel"
                                                                        className="panel-collapse collapse in"
                                                                        id="collapse_accordion_2"
                                                                        style={{}}
                                                                        aria-expanded="true"
                                                                    >
                                                                        <div className="panel-body">
                                                                            <ul>
                                                                                <li>Group Presentation</li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="panel panel-default">
                                                                    <div
                                                                        id="heading_accordion_2"
                                                                        role="tab"
                                                                        className="panel-heading"
                                                                    >
                                                                        <h4 className="panel-title">
                                                                            {" "}
                                                                            <a
                                                                                aria-controls="collapse_accordion_2"
                                                                                aria-expanded="false"
                                                                                href="#collapse_accordion_2"
                                                                                data-parent="#accordion_2"
                                                                                data-toggle="collapse"
                                                                                className="collapsed"
                                                                                role="button"
                                                                            >
                                                                                Teaching &amp; Assessment Methodology
                                                                            </a>{" "}
                                                                        </h4>
                                                                    </div>
                                                                    <div
                                                                        aria-labelledby="heading_accordion_2"
                                                                        role="tabpanel"
                                                                        className="panel-collapse collapse in"
                                                                        id="collapse_accordion_2"
                                                                        style={{}}
                                                                        aria-expanded="true"
                                                                    >
                                                                        <div className="panel-body">
                                                                            <ul>
                                                                                <li>
                                                                                    50:50 on Theory/Lab.. As for every 4 hours block, 2 hour
                                                                                    would be theory + 2 hour lab/handson
                                                                                </li>
                                                                                <li>Home Assignments</li>
                                                                                <li>MCQ quizes as part of Theory part</li>
                                                                                <li>Two hackathons of 8 hours each</li>
                                                                                <li>
                                                                                    For each Algorithm, coaching flow would be as under:
                                                                                </li>
                                                                                <ul>
                                                                                    <li>1. Related Mathematics </li>
                                                                                    <li>2. Concept/Algorithm</li>
                                                                                    <li>
                                                                                        3. Intro to Python or R library, and actual
                                                                                        implementation
                                                                                    </li>
                                                                                </ul>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </>
                                : ''}
                            


                            
                            {final[0].curriculum_id == '114' ?
                                <>
                                    <div className="course-list-header">
                                        <div id="pg-91-1" className="panel-grid faq-mob">
                                            <div id="pgc-91-1-1" className="panel-grid-cell">
                                                <div
                                                    id="panel-91-1-1-0"
                                                    className="so-panel widget widget_accordion panel-first-child panel-last-child"
                                                >
                                                    <div className="thim-widget-accordion thim-widget-accordion-base new-accord">
                                                        <div className="thim-widget-accordion">
                                                            <span className="line" />
                                                            <div
                                                                aria-multiselectable="true"
                                                                role="tablist"
                                                                className=""
                                                                id="accordion_56b58d47cf7a3"
                                                            >
                                                                <div className="panel panel-default">
                                                                    <div
                                                                        id="heading_accordion_1"
                                                                        role="tab"
                                                                        className="panel-heading"
                                                                    >
                                                                        <h4 className="panel-title">
                                                                            <a
                                                                                aria-controls="collapse_accordion_1"
                                                                                aria-expanded="false"
                                                                                href="#collapse_accordion_1"
                                                                                data-parent="#accordion_1"
                                                                                data-toggle="collapse"
                                                                                className="collapsed"
                                                                                role="button"
                                                                            >
                                                                                Cloud Foundations
                                                                            </a>
                                                                        </h4>
                                                                    </div>
                                                                    <div
                                                                        aria-labelledby="heading_accordion_1"
                                                                        role="tabpanel"
                                                                        className="panel-collapse collapse in"
                                                                        id="collapse_accordion_1"
                                                                        style={{}}
                                                                        aria-expanded="true"
                                                                    >
                                                                        <div className="panel-body">
                                                                            <ul>
                                                                                <li>What is Cloud Computing</li>
                                                                                <li>Deployment Models</li>
                                                                                <li>Service Models</li>
                                                                                <li>Advantages of Cloud Computing</li>
                                                                                <li>Disadvantages of Cloud Computing</li>
                                                                                <li>Characteristics of Cloud Computing</li>
                                                                                <li>
                                                                                    Introduction to Virtualization (VM’s and Containers)
                                                                                </li>
                                                                                <li>Service Delivery &amp; Deployment Models</li>
                                                                                <li>Cloud Attributes and Services Taxonomy</li>
                                                                                <li>Introduction to Infrastructure Automation</li>
                                                                                <li>Key Aspects of IaaS, PaaS and SaaS</li>
                                                                                <li>Quiz</li>
                                                                                <li>Lab</li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="panel panel-default">
                                                                    <div
                                                                        id="heading_accordion_2"
                                                                        role="tab"
                                                                        className="panel-heading"
                                                                    >
                                                                        <h4 className="panel-title">
                                                                            {" "}
                                                                            <a
                                                                                aria-controls="collapse_accordion_2"
                                                                                aria-expanded="false"
                                                                                href="#collapse_accordion_2"
                                                                                data-parent="#accordion_2"
                                                                                data-toggle="collapse"
                                                                                className="collapsed"
                                                                                role="button"
                                                                            >
                                                                                Containers &amp; Microservices
                                                                            </a>{" "}
                                                                        </h4>
                                                                    </div>
                                                                    <div
                                                                        aria-labelledby="heading_accordion_2"
                                                                        role="tabpanel"
                                                                        className="panel-collapse collapse in"
                                                                        id="collapse_accordion_2"
                                                                        style={{}}
                                                                        aria-expanded="true"
                                                                    >
                                                                        <div className="panel-body">
                                                                            <ul>
                                                                                <li>Docker</li>
                                                                                <li>Microservices</li>
                                                                                <li>Architecture &amp; Design Patterns</li>
                                                                                <li>Microservices Architecture &amp; Design</li>
                                                                                <li>Anti Patterns</li>
                                                                                <li>Event Driven Architecture &amp; CQRS Framework</li>
                                                                                <li>Migrating a Monolith</li>
                                                                                <li>Quiz</li>
                                                                                <li>Lab</li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="panel panel-default">
                                                                    <div
                                                                        id="heading_accordion_2"
                                                                        role="tab"
                                                                        className="panel-heading"
                                                                    >
                                                                        <h4 className="panel-title">
                                                                            {" "}
                                                                            <a
                                                                                aria-controls="collapse_accordion_2"
                                                                                aria-expanded="false"
                                                                                href="#collapse_accordion_2"
                                                                                data-parent="#accordion_2"
                                                                                data-toggle="collapse"
                                                                                className="collapsed"
                                                                                role="button"
                                                                            >
                                                                                Big Data Management &amp; Analytics
                                                                            </a>{" "}
                                                                        </h4>
                                                                    </div>
                                                                    <div
                                                                        aria-labelledby="heading_accordion_2"
                                                                        role="tabpanel"
                                                                        className="panel-collapse collapse in"
                                                                        id="collapse_accordion_2"
                                                                        style={{}}
                                                                        aria-expanded="true"
                                                                    >
                                                                        <div className="panel-body">
                                                                            <ul>
                                                                                <li>SQL vs NoSQL Databases</li>
                                                                                <li>NoSQL Databases - Cassandra &amp; DynamoDB</li>
                                                                                <li>Partitioner, Replication, Snitch</li>
                                                                                <li>Query Driven Design &amp; Distributed Development</li>
                                                                                <li>Hadoop, Amazon EMR, Hive</li>
                                                                                <li>Quiz</li>
                                                                                <li>Lab</li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="panel panel-default">
                                                                    <div
                                                                        id="heading_accordion_2"
                                                                        role="tab"
                                                                        className="panel-heading"
                                                                    >
                                                                        <h4 className="panel-title">
                                                                            {" "}
                                                                            <a
                                                                                aria-controls="collapse_accordion_2"
                                                                                aria-expanded="false"
                                                                                href="#collapse_accordion_2"
                                                                                data-parent="#accordion_2"
                                                                                data-toggle="collapse"
                                                                                className="collapsed"
                                                                                role="button"
                                                                            >
                                                                                Cloud Adoption &amp; Migration
                                                                            </a>{" "}
                                                                        </h4>
                                                                    </div>
                                                                    <div
                                                                        aria-labelledby="heading_accordion_2"
                                                                        role="tabpanel"
                                                                        className="panel-collapse collapse in"
                                                                        id="collapse_accordion_2"
                                                                        style={{}}
                                                                        aria-expanded="true"
                                                                    >
                                                                        <div className="panel-body">
                                                                            <ul>
                                                                                <li>Migration Maturity Index and Enterprise Migration</li>
                                                                                <li>API based Integration</li>
                                                                                <li>Cloud Adoption Strategies</li>
                                                                                <li>Application Characterization &amp; Evaluation</li>
                                                                                <li>Workload Analysis</li>
                                                                                <li>Typical Migration Services</li>
                                                                                <li>Quiz</li>
                                                                                <li>Lab</li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="panel panel-default">
                                                                    <div
                                                                        id="heading_accordion_2"
                                                                        role="tab"
                                                                        className="panel-heading"
                                                                    >
                                                                        <h4 className="panel-title">
                                                                            {" "}
                                                                            <a
                                                                                aria-controls="collapse_accordion_2"
                                                                                aria-expanded="false"
                                                                                href="#collapse_accordion_2"
                                                                                data-parent="#accordion_2"
                                                                                data-toggle="collapse"
                                                                                className="collapsed"
                                                                                role="button"
                                                                            >
                                                                                Private Cloud
                                                                            </a>{" "}
                                                                        </h4>
                                                                    </div>
                                                                    <div
                                                                        aria-labelledby="heading_accordion_2"
                                                                        role="tabpanel"
                                                                        className="panel-collapse collapse in"
                                                                        id="collapse_accordion_2"
                                                                        style={{}}
                                                                        aria-expanded="true"
                                                                    >
                                                                        <div className="panel-body">
                                                                            <ul>
                                                                                <li>OpenStack Essentials</li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="panel panel-default">
                                                                    <div
                                                                        id="heading_accordion_2"
                                                                        role="tab"
                                                                        className="panel-heading"
                                                                    >
                                                                        <h4 className="panel-title">
                                                                            {" "}
                                                                            <a
                                                                                aria-controls="collapse_accordion_2"
                                                                                aria-expanded="false"
                                                                                href="#collapse_accordion_2"
                                                                                data-parent="#accordion_2"
                                                                                data-toggle="collapse"
                                                                                className="collapsed"
                                                                                role="button"
                                                                            >
                                                                                Cloud Computing on AWS
                                                                            </a>{" "}
                                                                        </h4>
                                                                    </div>
                                                                    <div
                                                                        aria-labelledby="heading_accordion_2"
                                                                        role="tabpanel"
                                                                        className="panel-collapse collapse in"
                                                                        id="collapse_accordion_2"
                                                                        style={{}}
                                                                        aria-expanded="true"
                                                                    >
                                                                        <div className="panel-body">
                                                                            <ul>
                                                                                <li>AWS Organization &amp; Identity</li>
                                                                                <li>Compute, Storage &amp; Networking</li>
                                                                                <li>
                                                                                    Auto Scaling, Load Balancing &amp; Fault Tolerance
                                                                                </li>
                                                                                <li>Quiz</li>
                                                                                <li>Lab</li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="panel panel-default">
                                                                    <div
                                                                        id="heading_accordion_2"
                                                                        role="tab"
                                                                        className="panel-heading"
                                                                    >
                                                                        <h4 className="panel-title">
                                                                            {" "}
                                                                            <a
                                                                                aria-controls="collapse_accordion_2"
                                                                                aria-expanded="false"
                                                                                href="#collapse_accordion_2"
                                                                                data-parent="#accordion_2"
                                                                                data-toggle="collapse"
                                                                                className="collapsed"
                                                                                role="button"
                                                                            >
                                                                                Managed Services on AWS
                                                                            </a>{" "}
                                                                        </h4>
                                                                    </div>
                                                                    <div
                                                                        aria-labelledby="heading_accordion_2"
                                                                        role="tabpanel"
                                                                        className="panel-collapse collapse in"
                                                                        id="collapse_accordion_2"
                                                                        style={{}}
                                                                        aria-expanded="true"
                                                                    >
                                                                        <div className="panel-body">
                                                                            <ul>
                                                                                <li>Database Services (RDS, DynamoDB)</li>
                                                                                <li>AWS CloudWatch, Kinesis, Athena &amp; QuickSight</li>
                                                                                <li>AWS SNS, SQS and Trusted Advisor</li>
                                                                                <li>Messaging &amp; S3 events</li>
                                                                                <li>ElastiCache &amp; CloudFront</li>
                                                                                <li>Quiz</li>
                                                                                <li>Lab</li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="panel panel-default">
                                                                    <div
                                                                        id="heading_accordion_2"
                                                                        role="tab"
                                                                        className="panel-heading"
                                                                    >
                                                                        <h4 className="panel-title">
                                                                            {" "}
                                                                            <a
                                                                                aria-controls="collapse_accordion_2"
                                                                                aria-expanded="false"
                                                                                href="#collapse_accordion_2"
                                                                                data-parent="#accordion_2"
                                                                                data-toggle="collapse"
                                                                                className="collapsed"
                                                                                role="button"
                                                                            >
                                                                                DevOps on AWS
                                                                            </a>{" "}
                                                                        </h4>
                                                                    </div>
                                                                    <div
                                                                        aria-labelledby="heading_accordion_2"
                                                                        role="tabpanel"
                                                                        className="panel-collapse collapse in"
                                                                        id="collapse_accordion_2"
                                                                        style={{}}
                                                                        aria-expanded="true"
                                                                    >
                                                                        <div className="panel-body">
                                                                            <ul>
                                                                                <li>
                                                                                    Container Orchestration (e.g. ECS,Kubernetes Engine)
                                                                                </li>
                                                                                <li>Continuous Integration and Continuous Deployment</li>
                                                                                <li>
                                                                                    Deployment Pipeline(e.g. AWS CodePipeline, CodeCommit,
                                                                                    CodeBuild,
                                                                                </li>
                                                                                <li>CodeDeploy)</li>
                                                                                <li>Plan, Build, Deploy and Monitor</li>
                                                                                <li>Infrastructure as Code (Terraform)</li>
                                                                                <li>Quiz</li>
                                                                                <li>Lab</li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="panel panel-default">
                                                                    <div
                                                                        id="heading_accordion_2"
                                                                        role="tab"
                                                                        className="panel-heading"
                                                                    >
                                                                        <h4 className="panel-title">
                                                                            {" "}
                                                                            <a
                                                                                aria-controls="collapse_accordion_2"
                                                                                aria-expanded="false"
                                                                                href="#collapse_accordion_2"
                                                                                data-parent="#accordion_2"
                                                                                data-toggle="collapse"
                                                                                className="collapsed"
                                                                                role="button"
                                                                            >
                                                                                Developing on Cloud
                                                                            </a>{" "}
                                                                        </h4>
                                                                    </div>
                                                                    <div
                                                                        aria-labelledby="heading_accordion_2"
                                                                        role="tabpanel"
                                                                        className="panel-collapse collapse in"
                                                                        id="collapse_accordion_2"
                                                                        style={{}}
                                                                        aria-expanded="true"
                                                                    >
                                                                        <div className="panel-body">
                                                                            <ul>
                                                                                <li>NIST Cloud Reference Architecture</li>
                                                                                <li>AWS Reference Architectures</li>
                                                                                <li>Stateless and Singleton design</li>
                                                                                <li>Thinking Adapters</li>
                                                                                <li>Serverless Development - AWS Lambda</li>
                                                                                <li>PaaS - Elastic Beanstalk</li>
                                                                                <li>Elastic Container Services – ECS</li>
                                                                                <li>Quiz</li>
                                                                                <li>Lab</li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="panel panel-default">
                                                                    <div
                                                                        id="heading_accordion_2"
                                                                        role="tab"
                                                                        className="panel-heading"
                                                                    >
                                                                        <h4 className="panel-title">
                                                                            {" "}
                                                                            <a
                                                                                aria-controls="collapse_accordion_2"
                                                                                aria-expanded="false"
                                                                                href="#collapse_accordion_2"
                                                                                data-parent="#accordion_2"
                                                                                data-toggle="collapse"
                                                                                className="collapsed"
                                                                                role="button"
                                                                            >
                                                                                Solutions Architect-Official AWS Educate Learning Pathway
                                                                            </a>{" "}
                                                                        </h4>
                                                                    </div>
                                                                    <div
                                                                        aria-labelledby="heading_accordion_2"
                                                                        role="tabpanel"
                                                                        className="panel-collapse collapse in"
                                                                        id="collapse_accordion_2"
                                                                        style={{}}
                                                                        aria-expanded="true"
                                                                    >
                                                                        <div className="panel-body">
                                                                            <ul>
                                                                                <li>Networking</li>
                                                                                <li>Managed Services Overview</li>
                                                                                <li>Cloud Security</li>
                                                                                <li>Quiz</li>
                                                                                <li>Lab</li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="panel panel-default">
                                                                    <div
                                                                        id="heading_accordion_2"
                                                                        role="tab"
                                                                        className="panel-heading"
                                                                    >
                                                                        <h4 className="panel-title">
                                                                            {" "}
                                                                            <a
                                                                                aria-controls="collapse_accordion_2"
                                                                                aria-expanded="false"
                                                                                href="#collapse_accordion_2"
                                                                                data-parent="#accordion_2"
                                                                                data-toggle="collapse"
                                                                                className="collapsed"
                                                                                role="button"
                                                                            >
                                                                                Application Developer-Official AWS Educate Learning
                                                                                Pathway
                                                                            </a>{" "}
                                                                        </h4>
                                                                    </div>
                                                                    <div
                                                                        aria-labelledby="heading_accordion_2"
                                                                        role="tabpanel"
                                                                        className="panel-collapse collapse in"
                                                                        id="collapse_accordion_2"
                                                                        style={{}}
                                                                        aria-expanded="true"
                                                                    >
                                                                        <div className="panel-body">
                                                                            <ul>
                                                                                <li>Architecture &amp; DevOps</li>
                                                                                <li>Platforms</li>
                                                                                <li>Data &amp; Databases</li>
                                                                                <li>Mobile &amp; Gaming</li>
                                                                                <li>Quiz</li>
                                                                                <li>Lab </li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="panel panel-default">
                                                                    <div
                                                                        id="heading_accordion_2"
                                                                        role="tab"
                                                                        className="panel-heading"
                                                                    >
                                                                        <h4 className="panel-title">
                                                                            {" "}
                                                                            <a
                                                                                aria-controls="collapse_accordion_2"
                                                                                aria-expanded="false"
                                                                                href="#collapse_accordion_2"
                                                                                data-parent="#accordion_2"
                                                                                data-toggle="collapse"
                                                                                className="collapsed"
                                                                                role="button"
                                                                            >
                                                                                Microsoft Azure
                                                                            </a>{" "}
                                                                        </h4>
                                                                    </div>
                                                                    <div
                                                                        aria-labelledby="heading_accordion_2"
                                                                        role="tabpanel"
                                                                        className="panel-collapse collapse in"
                                                                        id="collapse_accordion_2"
                                                                        style={{}}
                                                                        aria-expanded="true"
                                                                    >
                                                                        <div className="panel-body">
                                                                            <ul>
                                                                                <li>Identity Solutions</li>
                                                                                <li>Azure Data Implementation</li>
                                                                                <li>Managed Services</li>
                                                                                <li>Azure Compute Infrastructure</li>
                                                                                <li>Network, Security &amp; Ops</li>
                                                                                <li>Quiz</li>
                                                                                <li>Lab</li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="panel panel-default">
                                                                    <div
                                                                        id="heading_accordion_2"
                                                                        role="tab"
                                                                        className="panel-heading"
                                                                    >
                                                                        <h4 className="panel-title">
                                                                            {" "}
                                                                            <a
                                                                                aria-controls="collapse_accordion_2"
                                                                                aria-expanded="false"
                                                                                href="#collapse_accordion_2"
                                                                                data-parent="#accordion_2"
                                                                                data-toggle="collapse"
                                                                                className="collapsed"
                                                                                role="button"
                                                                            >
                                                                                Google Cloud
                                                                            </a>{" "}
                                                                        </h4>
                                                                    </div>
                                                                    <div
                                                                        aria-labelledby="heading_accordion_2"
                                                                        role="tabpanel"
                                                                        className="panel-collapse collapse in"
                                                                        id="collapse_accordion_2"
                                                                        style={{}}
                                                                        aria-expanded="true"
                                                                    >
                                                                        <div className="panel-body">
                                                                            <ul>
                                                                                <li>Organization &amp; IAM</li>
                                                                                <li>Compute</li>
                                                                                <li>Storage</li>
                                                                                <li>Networking</li>
                                                                                <li>Operations</li>
                                                                                <li>BigTable</li>
                                                                                <li>Quiz</li>
                                                                                <li>Lab</li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="panel panel-default">
                                                                    <div
                                                                        id="heading_accordion_2"
                                                                        role="tab"
                                                                        className="panel-heading"
                                                                    >
                                                                        <h4 className="panel-title">
                                                                            {" "}
                                                                            <a
                                                                                aria-controls="collapse_accordion_2"
                                                                                aria-expanded="false"
                                                                                href="#collapse_accordion_2"
                                                                                data-parent="#accordion_2"
                                                                                data-toggle="collapse"
                                                                                className="collapsed"
                                                                                role="button"
                                                                            >
                                                                                Capstone project
                                                                            </a>{" "}
                                                                        </h4>
                                                                    </div>
                                                                    <div
                                                                        aria-labelledby="heading_accordion_2"
                                                                        role="tabpanel"
                                                                        className="panel-collapse collapse in"
                                                                        id="collapse_accordion_2"
                                                                        style={{}}
                                                                        aria-expanded="true"
                                                                    >
                                                                        <div className="panel-body">
                                                                            <ul>
                                                                                <li>Group Presentation</li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </>
                                : ''}
                            


                            
                            {final[0].curriculum_id == '118' ?
                                <>
                                    <div className="course-list-header">
                                        <div id="pg-91-1" className="panel-grid faq-mob">
                                            <div id="pgc-91-1-1" className="panel-grid-cell">
                                                <div
                                                    id="panel-91-1-1-0"
                                                    className="so-panel widget widget_accordion panel-first-child panel-last-child"
                                                >
                                                    <div className="thim-widget-accordion thim-widget-accordion-base new-accord">
                                                        <div className="thim-widget-accordion">
                                                            <span className="line" />
                                                            <div
                                                                aria-multiselectable="true"
                                                                role="tablist"
                                                                className=""
                                                                id="accordion_56b58d47cf7a3"
                                                            >
                                                                <h4>Module 1:</h4>
                                                                <div className="panel panel-default">
                                                                    <div
                                                                        id="heading_accordion_1"
                                                                        role="tab"
                                                                        className="panel-heading"
                                                                    >
                                                                        <h4 className="panel-title">
                                                                            <a
                                                                                aria-controls="collapse_accordion_1"
                                                                                aria-expanded="false"
                                                                                href="#collapse_accordion_1"
                                                                                data-parent="#accordion_1"
                                                                                data-toggle="collapse"
                                                                                className="collapsed"
                                                                                role="button"
                                                                            >
                                                                                About Digital Marketing outline
                                                                            </a>
                                                                        </h4>
                                                                    </div>
                                                                    <div
                                                                        aria-labelledby="heading_accordion_1"
                                                                        role="tabpanel"
                                                                        className="panel-collapse collapse in"
                                                                        id="collapse_accordion_1"
                                                                        style={{}}
                                                                        aria-expanded="true"
                                                                    >
                                                                        <div className="panel-body">
                                                                            <ul>
                                                                                <li>What do you mean by digital marketing?</li>
                                                                                <li>
                                                                                    Why Digital Marketing is mostly preferred in the
                                                                                    industry?
                                                                                </li>
                                                                                <li>Understanding the process of Digital Marketing.</li>
                                                                                <li>Enlightening Brand visibility</li>
                                                                                <li>Niche Targeted Traffic Concepts</li>
                                                                                <li>Implementing Strategies for lead Generation</li>
                                                                                <li>ways of Converting Traffic into Leads and sales</li>
                                                                                <li>Ways Visitors Engagement</li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <h4>Module 2:</h4>
                                                                <div className="panel panel-default">
                                                                    <div
                                                                        id="heading_accordion_2"
                                                                        role="tab"
                                                                        className="panel-heading"
                                                                    >
                                                                        <h4 className="panel-title">
                                                                            {" "}
                                                                            <a
                                                                                aria-controls="collapse_accordion_2"
                                                                                aria-expanded="false"
                                                                                href="#collapse_accordion_2"
                                                                                data-parent="#accordion_2"
                                                                                data-toggle="collapse"
                                                                                className="collapsed"
                                                                                role="button"
                                                                            >
                                                                                Website Creation
                                                                            </a>{" "}
                                                                        </h4>
                                                                    </div>
                                                                    <div
                                                                        aria-labelledby="heading_accordion_2"
                                                                        role="tabpanel"
                                                                        className="panel-collapse collapse in"
                                                                        id="collapse_accordion_2"
                                                                        style={{}}
                                                                        aria-expanded="true"
                                                                    >
                                                                        <div className="panel-body">
                                                                            <ul>
                                                                                <li>Website Planning</li>
                                                                                <li>Registering Domain &amp; Webhosting</li>
                                                                                <li>Mapping Domain Name to web Server</li>
                                                                                <li>Significance of Responsive</li>
                                                                                <li>Creating Blueprint for website</li>
                                                                                <li>Creating web pages &amp; content (WordPress)</li>
                                                                                <li>Integrating themes and Plugins</li>
                                                                                <li>Engagement Options</li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <h4>Module 3:</h4>
                                                                <div className="panel panel-default">
                                                                    <div
                                                                        id="heading_accordion_2"
                                                                        role="tab"
                                                                        className="panel-heading"
                                                                    >
                                                                        <h4 className="panel-title">
                                                                            {" "}
                                                                            <a
                                                                                aria-controls="collapse_accordion_2"
                                                                                aria-expanded="false"
                                                                                href="#collapse_accordion_2"
                                                                                data-parent="#accordion_2"
                                                                                data-toggle="collapse"
                                                                                className="collapsed"
                                                                                role="button"
                                                                            >
                                                                                Search Engine Optimization:
                                                                            </a>{" "}
                                                                        </h4>
                                                                    </div>
                                                                    <div
                                                                        aria-labelledby="heading_accordion_2"
                                                                        role="tabpanel"
                                                                        className="panel-collapse collapse in"
                                                                        id="collapse_accordion_2"
                                                                        style={{}}
                                                                        aria-expanded="true"
                                                                    >
                                                                        <div className="panel-body">
                                                                            <ul>
                                                                                <li>
                                                                                    Domain Registrations
                                                                                    <ul>
                                                                                        <li>Domain for SEO Standards</li>
                                                                                        <li>Top servers for Hosting Space</li>
                                                                                        <li>Mapping your Domains</li>
                                                                                        <li>Tools to find expired Domains</li>
                                                                                    </ul>
                                                                                </li>
                                                                                <li>
                                                                                    Introduction for SEO
                                                                                    <ul>
                                                                                        <li>Introduction to SERP</li>
                                                                                        <li>Types of search engines</li>
                                                                                        <li>How search engines work</li>
                                                                                        <li>SEO Importance</li>
                                                                                    </ul>
                                                                                </li>
                                                                                <li>
                                                                                    Google algorithm and latest Updates
                                                                                    <ul>
                                                                                        <li>How Google algorithm works</li>
                                                                                        <li>
                                                                                            Latest updates of Panda, Penguin &amp; Humming Bird
                                                                                        </li>
                                                                                        <li>How Panda, Penguin &amp; Humming Bird Works</li>
                                                                                        <li>Fixing Panda, Penguin &amp; Humming Bird</li>
                                                                                    </ul>
                                                                                </li>
                                                                                <li>
                                                                                    On-Page Optimization
                                                                                    <ul>
                                                                                        <li>Keyword Planning</li>
                                                                                        <li>keywords and its importance for SEO</li>
                                                                                        <li>Niche Targeted Keyword Research</li>
                                                                                        <li>Tools for keyword research</li>
                                                                                        <li>Tools for Competitor analysis</li>
                                                                                        <li>
                                                                                            Steps to Fixing the right keywords Importance of
                                                                                            Title tag
                                                                                        </li>
                                                                                        <li>Importance of Meta Keyword and description</li>
                                                                                        <li>Website Structure</li>
                                                                                        <li>Static &amp; Dynamic web optimization</li>
                                                                                        <li>Understanding URL's Structures</li>
                                                                                        <li>Importance of Content</li>
                                                                                        <li>Optimizing Web Pages</li>
                                                                                        <li>Importance of Blogs</li>
                                                                                        <li>Creation &amp; Integration of Sitemaps</li>
                                                                                        <li>Google Analytics and webmaster integration</li>
                                                                                        <li>Website analysis Checklist</li>
                                                                                    </ul>
                                                                                </li>
                                                                                <li>
                                                                                    Off-Page Optimization
                                                                                    <ul>
                                                                                        <li>Introduction to off-page optimization</li>
                                                                                        <li>Importance of Domain &amp; Page Authority</li>
                                                                                        <li>Importance of Trust flow &amp; Citation</li>
                                                                                        <li>How to increase Domain authority?</li>
                                                                                        <li>Types of backlinks</li>
                                                                                        <li>Importance of link building</li>
                                                                                        <li>Types of link building</li>
                                                                                        <li>Do’s and Don’ts of link building</li>
                                                                                        <li>
                                                                                            Strategies &amp; Techniques for Link building (Page
                                                                                            rank is no more)
                                                                                        </li>
                                                                                    </ul>
                                                                                </li>
                                                                                <li>
                                                                                    Local SEO:
                                                                                    <ul>
                                                                                        <li>Local Business Listing</li>
                                                                                        <li>Google places optimization</li>
                                                                                        <li>Improving Rankings</li>
                                                                                    </ul>
                                                                                </li>
                                                                                <li>
                                                                                    SEO Reports
                                                                                    <ul>
                                                                                        <li>SEO Tools List</li>
                                                                                        <li>SEO On-page &amp; Off-Page Audit Report</li>
                                                                                        <li>Monitoring SEO Process</li>
                                                                                    </ul>
                                                                                </li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <h4>Module 4:</h4>
                                                                <div className="panel panel-default">
                                                                    <div
                                                                        id="heading_accordion_2"
                                                                        role="tab"
                                                                        className="panel-heading"
                                                                    >
                                                                        <h4 className="panel-title">
                                                                            {" "}
                                                                            <a
                                                                                aria-controls="collapse_accordion_2"
                                                                                aria-expanded="false"
                                                                                href="#collapse_accordion_2"
                                                                                data-parent="#accordion_2"
                                                                                data-toggle="collapse"
                                                                                className="collapsed"
                                                                                role="button"
                                                                            >
                                                                                Search Engine Marketing:
                                                                            </a>
                                                                        </h4>
                                                                    </div>
                                                                    <div
                                                                        aria-labelledby="heading_accordion_2"
                                                                        role="tabpanel"
                                                                        className="panel-collapse collapse in"
                                                                        id="collapse_accordion_2"
                                                                        style={{}}
                                                                        aria-expanded="true"
                                                                    >
                                                                        <div className="panel-body">
                                                                            <ul>
                                                                                <li>
                                                                                    Introduction - Success with AdWords Campaigns
                                                                                    <ul>
                                                                                        <li>Introduction to Pay Per Click</li>
                                                                                        <li>Advantages of PPC</li>
                                                                                        <li>Entities Involved in PPC Advertising</li>
                                                                                        <li>BluePrint of a PPC Ad</li>
                                                                                        <li>Properties of a Compelling PPC Ad</li>
                                                                                        <li>General Formula for Calculating PPC</li>
                                                                                    </ul>
                                                                                </li>
                                                                                <li>
                                                                                    Landing Pages
                                                                                    <ul>
                                                                                        <li>Introduction for landing pages</li>
                                                                                        <li>Types of Landing pages</li>
                                                                                        <li>Creating Niche targeted Landing Pages</li>
                                                                                    </ul>
                                                                                </li>
                                                                                <li>
                                                                                    Quality Score Defines Your Success
                                                                                    <ul>
                                                                                        <li>
                                                                                            What is the Quality Score &amp;what is its
                                                                                            importance?
                                                                                        </li>
                                                                                        <li>How High Should Your Quality Score Ranking?</li>
                                                                                        <li>Google Lets the Users Rank Your Ads by CTR</li>
                                                                                        <li>
                                                                                            The Yellow/Pink Top Three Position in Google Ad
                                                                                            Words
                                                                                        </li>
                                                                                        <li>
                                                                                            How You Can get the Quality Score of Your Keywords
                                                                                        </li>
                                                                                        <li>How You Can Safeguard a High-Quality Score</li>
                                                                                        <li>Landing Page Quality Score Guidelines</li>
                                                                                    </ul>
                                                                                </li>
                                                                                <li>
                                                                                    AdWords billing Account and Campaign Structure
                                                                                    <ul>
                                                                                        <li>Building the Account</li>
                                                                                        <li>Prepay Budget</li>
                                                                                        <li>Post-pay Budget</li>
                                                                                        <li>Billing Method</li>
                                                                                        <li>Monthly Invoicing</li>
                                                                                        <li>Keyword Grouping</li>
                                                                                    </ul>
                                                                                </li>
                                                                                <li>
                                                                                    AdWords Tools
                                                                                    <ul>
                                                                                        <li>Keyword Tool</li>
                                                                                        <li>IP Exclusion</li>
                                                                                        <li>Traffic Estimator</li>
                                                                                        <li>Insights for Search</li>
                                                                                        <li>Ads Diagnostics Tool</li>
                                                                                        <li>The Google Ad Words Universe</li>
                                                                                        <li>Google Search Partners</li>
                                                                                        <li>Google Display Network</li>
                                                                                        <li>Google Video Network</li>
                                                                                        <li>Google Apps Network</li>
                                                                                        <li>Google Product</li>
                                                                                        <li>Mobile Ad network</li>
                                                                                    </ul>
                                                                                </li>
                                                                                <li>
                                                                                    Settings in Google Search AdWords
                                                                                    <ul>
                                                                                        <li>Locations and Languages</li>
                                                                                        <li>Networks and Devices</li>
                                                                                        <li>Bidding and Budget</li>
                                                                                        <li>Delivery Method (Advanced)</li>
                                                                                        <li>Ad Extensions</li>
                                                                                        <li>Location Extension Example</li>
                                                                                        <li>Call Extension Example</li>
                                                                                        <li>Advanced Settings</li>
                                                                                        <li>Ad Delivery: Ad Rotation, Frequency Capping</li>
                                                                                    </ul>
                                                                                </li>
                                                                                <li>
                                                                                    Settings for Google Ad Words Search Campaign
                                                                                    <ul>
                                                                                        <li>Language</li>
                                                                                        <li>Networks</li>
                                                                                        <li>Bidding and Budget</li>
                                                                                        <li>Ad Extensions</li>
                                                                                        <li>Advanced Settings</li>
                                                                                    </ul>
                                                                                </li>
                                                                                <li>
                                                                                    Keywords
                                                                                    <ul>
                                                                                        <li>Broad Match Keywords</li>
                                                                                        <li>Broad Match Modifier</li>
                                                                                        <li>Phrase Match</li>
                                                                                        <li>Exact Match</li>
                                                                                        <li>Keyword Research</li>
                                                                                        <li>Let Google Work for You</li>
                                                                                    </ul>
                                                                                </li>
                                                                                <li>
                                                                                    Negative Keywords
                                                                                    <ul>
                                                                                        <li>How Do Negative Keywords Work?</li>
                                                                                        <li>Sculpt Campaigns with Negative Keywords</li>
                                                                                        <li>Building a Great Negative Keyword List</li>
                                                                                        <li>How Do You Add Negative Keywords?</li>
                                                                                    </ul>
                                                                                </li>
                                                                                <li>
                                                                                    Google Ad Words Campaign Tracking
                                                                                    <ul>
                                                                                        <li>Google Ad Words Conversion Tracking</li>
                                                                                        <li>Linking with Google Analytics</li>
                                                                                        <li>Importing Goals from Google Analytics</li>
                                                                                        <li>Ad Words Search Funnel</li>
                                                                                    </ul>
                                                                                </li>
                                                                                <li>
                                                                                    Bid Management and Your Daily Budget
                                                                                    <ul>
                                                                                        <li>How to Set the Right Bid the First Time?</li>
                                                                                        <li>The Ad Words Auction</li>
                                                                                        <li>Shaping Your Daily Budget</li>
                                                                                        <li>Small Trick for Campaigns</li>
                                                                                        <li>
                                                                                            Ad Group Level vs. Keyword Level Bid Management
                                                                                        </li>
                                                                                    </ul>
                                                                                </li>
                                                                                <li>
                                                                                    Landing Pages–The Google Ad Words Extension
                                                                                    <ul>
                                                                                        <li>Test Your Current Landing Pages</li>
                                                                                        <li>Imitate Successful Ads and Their Wording</li>
                                                                                        <li>General Landing Page Advice</li>
                                                                                        <li>Remember Your Quality Score</li>
                                                                                    </ul>
                                                                                </li>
                                                                                <li>
                                                                                    Optimizing Your Ad Words Campaigns
                                                                                    <ul>
                                                                                        <li>It's All One Big A/B Test</li>
                                                                                        <li>How Much Time Do You Need?</li>
                                                                                        <li>Ad Optimization</li>
                                                                                        <li>Bid Management</li>
                                                                                        <li>Escalating Your Keyword List</li>
                                                                                        <li>Negative Keywords</li>
                                                                                        <li>Include Current Offers and</li>
                                                                                        <li>Quality Score Optimization</li>
                                                                                        <li>Importance of Conversion Tracking</li>
                                                                                    </ul>
                                                                                </li>
                                                                                <li>
                                                                                    The Ad Words Interface
                                                                                    <ul>
                                                                                        <li>Networks</li>
                                                                                        <li>Ad Extensions</li>
                                                                                        <li>Dimensions</li>
                                                                                        <li>
                                                                                            Which is the Metrics that you will need in Your Ad
                                                                                            Words Interface?
                                                                                        </li>
                                                                                        <li>Features in the Ad Words Interface</li>
                                                                                    </ul>
                                                                                </li>
                                                                                <li>
                                                                                    AdWords Editor
                                                                                    <ul>
                                                                                        <li>
                                                                                            Introduction &amp; Importance of AdWords editor
                                                                                        </li>
                                                                                    </ul>
                                                                                </li>
                                                                                <li>
                                                                                    My Client Center (MCC) Account in Google Ad Words
                                                                                    <ul>
                                                                                        <li>How Do You Get an MCC Account?</li>
                                                                                    </ul>
                                                                                </li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <h4>Module 5:</h4>
                                                                <div className="panel panel-default">
                                                                    <div
                                                                        id="heading_accordion_2"
                                                                        role="tab"
                                                                        className="panel-heading"
                                                                    >
                                                                        <h4 className="panel-title">
                                                                            {" "}
                                                                            <a
                                                                                aria-controls="collapse_accordion_2"
                                                                                aria-expanded="false"
                                                                                href="#collapse_accordion_2"
                                                                                data-parent="#accordion_2"
                                                                                data-toggle="collapse"
                                                                                className="collapsed"
                                                                                role="button"
                                                                            >
                                                                                Social Media Marketing:
                                                                            </a>{" "}
                                                                        </h4>
                                                                    </div>
                                                                    <div
                                                                        aria-labelledby="heading_accordion_2"
                                                                        role="tabpanel"
                                                                        className="panel-collapse collapse in"
                                                                        id="collapse_accordion_2"
                                                                        style={{}}
                                                                        aria-expanded="true"
                                                                    >
                                                                        <div className="panel-body">
                                                                            <ul>
                                                                                <li>
                                                                                    Overview of Social Media Marketing
                                                                                    <ul>
                                                                                        <li>Introduction</li>
                                                                                        <li>Promotion Types</li>
                                                                                        <li>Importance of landing Page</li>
                                                                                        <li>
                                                                                            Tools that you should use in Social Media Marketing
                                                                                        </li>
                                                                                    </ul>
                                                                                </li>
                                                                                <li>
                                                                                    Facebook Marketing (B2B &amp; B2C Promotions)
                                                                                    <ul>
                                                                                        <li>Introduction to Facebook advertising in 2016</li>
                                                                                        <li>Evaluating your Competitive Facebook ads</li>
                                                                                        <li>Working on the power editor tool</li>
                                                                                        <li>Creating Facebook ads</li>
                                                                                        <li>Creating Facebook Ads Reports</li>
                                                                                        <li>Create Instagram Ads using Facebook Ads</li>
                                                                                        <li>Studying and improving Instagram Ads</li>
                                                                                    </ul>
                                                                                </li>
                                                                                <li>
                                                                                    LinkedIn Marketing (B2B Promotions)
                                                                                    <ul>
                                                                                        <li>Introduction to LinkedIn Ads</li>
                                                                                        <li>Competitive analysis on LinkedIn Ads</li>
                                                                                        <li>Crafting LinkedIn Ads</li>
                                                                                        <li>Makingof Analysis Reports</li>
                                                                                    </ul>
                                                                                </li>
                                                                                <li>
                                                                                    Twitter Marketing
                                                                                    <ul>
                                                                                        <li>Twitter Ads Campaign for Business</li>
                                                                                        <li>Analysis Report</li>
                                                                                    </ul>
                                                                                </li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <h4>Module 6:</h4>
                                                                <div className="panel panel-default">
                                                                    <div
                                                                        id="heading_accordion_2"
                                                                        role="tab"
                                                                        className="panel-heading"
                                                                    >
                                                                        <h4 className="panel-title">
                                                                            {" "}
                                                                            <a
                                                                                aria-controls="collapse_accordion_2"
                                                                                aria-expanded="false"
                                                                                href="#collapse_accordion_2"
                                                                                data-parent="#accordion_2"
                                                                                data-toggle="collapse"
                                                                                className="collapsed"
                                                                                role="button"
                                                                            >
                                                                                Online Display Marketing:
                                                                            </a>{" "}
                                                                        </h4>
                                                                    </div>
                                                                    <div
                                                                        aria-labelledby="heading_accordion_2"
                                                                        role="tabpanel"
                                                                        className="panel-collapse collapse in"
                                                                        id="collapse_accordion_2"
                                                                        style={{}}
                                                                        aria-expanded="true"
                                                                    >
                                                                        <div className="panel-body">
                                                                            <ul>
                                                                                <li>Overview of Display Ads</li>
                                                                                <li>Importance of Display Ads</li>
                                                                                <li>Types of Display Ads</li>
                                                                                <li>Display VS Contextual Ads</li>
                                                                                <li>Working with Display Ad Networks</li>
                                                                                <li>Tracking &amp; Measuring ROI</li>
                                                                                <li>Generating Reports</li>
                                                                                <li>
                                                                                    Multiple ad formats, targeting criteria and remarketing
                                                                                </li>
                                                                                <li>Learn to adverse video on YouTube using AdWords</li>
                                                                                <li>
                                                                                    Adverse on the display network using the mobile platform
                                                                                </li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <h4>Module 7:</h4>
                                                                <div className="panel panel-default">
                                                                    <div
                                                                        id="heading_accordion_2"
                                                                        role="tab"
                                                                        className="panel-heading"
                                                                    >
                                                                        <h4 className="panel-title">
                                                                            {" "}
                                                                            <a
                                                                                aria-controls="collapse_accordion_2"
                                                                                aria-expanded="false"
                                                                                href="#collapse_accordion_2"
                                                                                data-parent="#accordion_2"
                                                                                data-toggle="collapse"
                                                                                className="collapsed"
                                                                                role="button"
                                                                            >
                                                                                Email Marketing:
                                                                            </a>{" "}
                                                                        </h4>
                                                                    </div>
                                                                    <div
                                                                        aria-labelledby="heading_accordion_2"
                                                                        role="tabpanel"
                                                                        className="panel-collapse collapse in"
                                                                        id="collapse_accordion_2"
                                                                        style={{}}
                                                                        aria-expanded="true"
                                                                    >
                                                                        <div className="panel-body">
                                                                            <ul>
                                                                                <li>
                                                                                    Why Use Email Marketing at All
                                                                                    <ul>
                                                                                        <li>
                                                                                            The objective behind using a Professional Email
                                                                                            Marketing Service?
                                                                                        </li>
                                                                                        <li>Blue print of Email Marketing</li>
                                                                                        <li>Reasons to choose Email Marketing</li>
                                                                                        <li>Importance of Advertising Industry</li>
                                                                                        <li>
                                                                                            Difference between Email Marketing and Advertising?
                                                                                        </li>
                                                                                    </ul>
                                                                                </li>
                                                                                <li>
                                                                                    Types of Email Marketing
                                                                                    <ul>
                                                                                        <li>Opt-in email</li>
                                                                                        <li>Double-Opt in</li>
                                                                                        <li>Broadcast email</li>
                                                                                        <li>Auto Responder email</li>
                                                                                    </ul>
                                                                                </li>
                                                                                <li>
                                                                                    Setting up Email Campaigns
                                                                                    <ul>
                                                                                        <li>Creating Landing pages</li>
                                                                                        <li>Design and construction</li>
                                                                                        <li>Completion, testing and sending</li>
                                                                                        <li>Creating bulk emailing campaign</li>
                                                                                        <li>Advanced Tracking Segments</li>
                                                                                    </ul>
                                                                                </li>
                                                                                <li>
                                                                                    Tips for Email Campaign
                                                                                    <ul>
                                                                                        <li>Spam Violates</li>
                                                                                        <li>Guidelines for CAN-SPAM Compliance</li>
                                                                                        <li>
                                                                                            Tips to send emails directly to inbox instead of the
                                                                                            spam folder
                                                                                        </li>
                                                                                        <li>Top email marketing software’s list</li>
                                                                                        <li>Implementing A/B testing to increase ROI</li>
                                                                                    </ul>
                                                                                </li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <h4>Module 8:</h4>
                                                                <div className="panel panel-default">
                                                                    <div
                                                                        id="heading_accordion_2"
                                                                        role="tab"
                                                                        className="panel-heading"
                                                                    >
                                                                        <h4 className="panel-title">
                                                                            {" "}
                                                                            <a
                                                                                aria-controls="collapse_accordion_2"
                                                                                aria-expanded="false"
                                                                                href="#collapse_accordion_2"
                                                                                data-parent="#accordion_2"
                                                                                data-toggle="collapse"
                                                                                className="collapsed"
                                                                                role="button"
                                                                            >
                                                                                Online Reputation Management:
                                                                            </a>{" "}
                                                                        </h4>
                                                                    </div>
                                                                    <div
                                                                        aria-labelledby="heading_accordion_2"
                                                                        role="tabpanel"
                                                                        className="panel-collapse collapse in"
                                                                        id="collapse_accordion_2"
                                                                        style={{}}
                                                                        aria-expanded="true"
                                                                    >
                                                                        <div className="panel-body">
                                                                            <ul>
                                                                                <li>Overview of ORM</li>
                                                                                <li>ORM Importance</li>
                                                                                <li>Understanding of ORM Concepts</li>
                                                                                <li>How can you deal with criticism online</li>
                                                                                <li>Top 10 ORM Commandments</li>
                                                                                <li>Creating a positive brand image online</li>
                                                                                <li>Monitoring Tools for ORM</li>
                                                                                <li>Top Examples of ORM</li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <h4>Module 9:</h4>
                                                                <div className="panel panel-default">
                                                                    <div
                                                                        id="heading_accordion_2"
                                                                        role="tab"
                                                                        className="panel-heading"
                                                                    >
                                                                        <h4 className="panel-title">
                                                                            {" "}
                                                                            <a
                                                                                aria-controls="collapse_accordion_2"
                                                                                aria-expanded="false"
                                                                                href="#collapse_accordion_2"
                                                                                data-parent="#accordion_2"
                                                                                data-toggle="collapse"
                                                                                className="collapsed"
                                                                                role="button"
                                                                            >
                                                                                Google Analytics:
                                                                            </a>{" "}
                                                                        </h4>
                                                                    </div>
                                                                    <div
                                                                        aria-labelledby="heading_accordion_2"
                                                                        role="tabpanel"
                                                                        className="panel-collapse collapse in"
                                                                        id="collapse_accordion_2"
                                                                        style={{}}
                                                                        aria-expanded="true"
                                                                    >
                                                                        <div className="panel-body">
                                                                            <ul>
                                                                                <li>Overview of Google analytics</li>
                                                                                <li>What is the mechanism of Google analytics?</li>
                                                                                <li>Summary of Google analytics structure</li>
                                                                                <li>Significance of analytics insights</li>
                                                                                <li>The prominence of cookie tracking</li>
                                                                                <li>Google Analytics Cookie Usage on Websites</li>
                                                                                <li>Google analytics account set up</li>
                                                                                <li>Addition of analytics code in a website</li>
                                                                                <li>Status of goals and conversions</li>
                                                                                <li>How can you setup goals conversions?</li>
                                                                                <li>Bounce Rate &amp; Exit Rate Importance</li>
                                                                                <li>How are funnels vital</li>
                                                                                <li>Set up funnels in goals</li>
                                                                                <li>Integrating AdWords and analytics account</li>
                                                                                <li>Marketing Strategies via Google analytics</li>
                                                                                <li>Outline of Tag Manager</li>
                                                                                <li>How to set up link tagging</li>
                                                                                <li>Significance of filters and segments</li>
                                                                                <li>Monitoring traffic sources &amp; behavior</li>
                                                                                <li>Web Analytics Reports</li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <h4>Module 10:</h4>
                                                                <div className="panel panel-default">
                                                                    <div
                                                                        id="heading_accordion_2"
                                                                        role="tab"
                                                                        className="panel-heading"
                                                                    >
                                                                        <h4 className="panel-title">
                                                                            {" "}
                                                                            <a
                                                                                aria-controls="collapse_accordion_2"
                                                                                aria-expanded="false"
                                                                                href="#collapse_accordion_2"
                                                                                data-parent="#accordion_2"
                                                                                data-toggle="collapse"
                                                                                className="collapsed"
                                                                                role="button"
                                                                            >
                                                                                Mobile Marketing:
                                                                            </a>{" "}
                                                                        </h4>
                                                                    </div>
                                                                    <div
                                                                        aria-labelledby="heading_accordion_2"
                                                                        role="tabpanel"
                                                                        className="panel-collapse collapse in"
                                                                        id="collapse_accordion_2"
                                                                        style={{}}
                                                                        aria-expanded="true"
                                                                    >
                                                                        <div className="panel-body">
                                                                            <ul>
                                                                                <li>
                                                                                    Mobile app fundamentals
                                                                                    <ul>
                                                                                        <li>Introduction to mobile apps for business</li>
                                                                                        <li>Platforms Apps development</li>
                                                                                        <li>Types of Apps Stores</li>
                                                                                    </ul>
                                                                                </li>
                                                                                <li>
                                                                                    Launching App like Pro
                                                                                    <ul>
                                                                                        <li>Ways to launch App</li>
                                                                                        <li>Pros and Cons of App</li>
                                                                                    </ul>
                                                                                </li>
                                                                                <li>
                                                                                    Make Money from App
                                                                                    <ul>
                                                                                        <li>Free VS Paid installs</li>
                                                                                        <li>Making money from App</li>
                                                                                        <li>Strategies for Making money from App</li>
                                                                                    </ul>
                                                                                </li>
                                                                                <li>
                                                                                    APP Store Optimization
                                                                                    <ul>
                                                                                        <li>Introduction</li>
                                                                                        <li>Keyword Research</li>
                                                                                        <li>Competitive Analysis</li>
                                                                                    </ul>
                                                                                </li>
                                                                                <li>
                                                                                    Ways to promote and market your app
                                                                                    <ul>
                                                                                        <li>Increasing Positive app signals</li>
                                                                                        <li>Strategies for Reviews to rank higher</li>
                                                                                        <li>Improving Apps download regularly</li>
                                                                                    </ul>
                                                                                </li>
                                                                                <li>
                                                                                    Apps tools
                                                                                    <ul>
                                                                                        <li>App analysis tools</li>
                                                                                        <li>App keyword research tools</li>
                                                                                    </ul>
                                                                                </li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <h4>Module 11:</h4>
                                                                <div className="panel panel-default">
                                                                    <div
                                                                        id="heading_accordion_2"
                                                                        role="tab"
                                                                        className="panel-heading"
                                                                    >
                                                                        <h4 className="panel-title">
                                                                            {" "}
                                                                            <a
                                                                                aria-controls="collapse_accordion_2"
                                                                                aria-expanded="false"
                                                                                href="#collapse_accordion_2"
                                                                                data-parent="#accordion_2"
                                                                                data-toggle="collapse"
                                                                                className="collapsed"
                                                                                role="button"
                                                                            >
                                                                                Affiliate Marketing:
                                                                            </a>{" "}
                                                                        </h4>
                                                                    </div>
                                                                    <div
                                                                        aria-labelledby="heading_accordion_2"
                                                                        role="tabpanel"
                                                                        className="panel-collapse collapse in"
                                                                        id="collapse_accordion_2"
                                                                        style={{}}
                                                                        aria-expanded="true"
                                                                    >
                                                                        <div className="panel-body">
                                                                            <ul>
                                                                                <li>About Affiliate Marketing</li>
                                                                                <li>Models of Affiliate Marketing</li>
                                                                                <li>How to produce and convert leads?</li>
                                                                                <li>Affiliate Marketing Strategies and secrets</li>
                                                                                <li>inaugurate as an affiliate</li>
                                                                                <li>How can you make money in affiliate marketing?</li>
                                                                                <li>Top affiliated networks</li>
                                                                                <li>
                                                                                    How to get accepted as an affiliate by the top affiliate
                                                                                    networks
                                                                                </li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="panel panel-default">
                                                                    <div
                                                                        id="heading_accordion_2"
                                                                        role="tab"
                                                                        className="panel-heading"
                                                                    >
                                                                        <h4 className="panel-title">
                                                                            {" "}
                                                                            <a
                                                                                aria-controls="collapse_accordion_2"
                                                                                aria-expanded="false"
                                                                                href="#collapse_accordion_2"
                                                                                data-parent="#accordion_2"
                                                                                data-toggle="collapse"
                                                                                className="collapsed"
                                                                                role="button"
                                                                            >
                                                                                Capstone project
                                                                            </a>{" "}
                                                                        </h4>
                                                                    </div>
                                                                    <div
                                                                        aria-labelledby="heading_accordion_2"
                                                                        role="tabpanel"
                                                                        className="panel-collapse collapse in"
                                                                        id="collapse_accordion_2"
                                                                        style={{}}
                                                                        aria-expanded="true"
                                                                    >
                                                                        <div className="panel-body">
                                                                            <ul>
                                                                                <li>Group Presentation</li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </>
                                : ''}
                            


                            
                            {final[0].curriculum_id == '168' ?
                                <>
                                    <div className="course-list-header">
                                        <div id="pg-91-1" className="panel-grid faq-mob">
                                            <div id="pgc-91-1-1" className="panel-grid-cell">
                                                <div
                                                    id="panel-91-1-1-0"
                                                    className="so-panel widget widget_accordion panel-first-child panel-last-child"
                                                >
                                                    <div className="thim-widget-accordion thim-widget-accordion-base new-accord">
                                                        <div className="thim-widget-accordion">
                                                            <span className="line" />
                                                            <div
                                                                aria-multiselectable="true"
                                                                role="tablist"
                                                                className=""
                                                                id="accordion_56b58d47cf7a3"
                                                            >
                                                                <h2 className='font-semibold mt-3 mb-2 text-xl md:text-2xl'>PGP- Cyber Security</h2>
                                                                <div className="panel panel-default">
                                                                    <div
                                                                        id="heading_accordion_1"
                                                                        role="tab"
                                                                        className="panel-heading"
                                                                    >
                                                                        <h4 className="panel-title">
                                                                            <a
                                                                                aria-controls="collapse_accordion_1"
                                                                                aria-expanded="false"
                                                                                href="#collapse_accordion_1"
                                                                                data-parent="#accordion_1"
                                                                                data-toggle="collapse"
                                                                                className="collapsed"
                                                                                role="button"
                                                                            >
                                                                                Computers and Cyber Security
                                                                            </a>
                                                                        </h4>
                                                                    </div>
                                                                    <div
                                                                        aria-labelledby="heading_accordion_1"
                                                                        role="tabpanel"
                                                                        className="panel-collapse collapse in"
                                                                        id="collapse_accordion_1"
                                                                        style={{}}
                                                                        aria-expanded="true"
                                                                    >
                                                                        <div className="panel-body">
                                                                            <ul>
                                                                                <li>Cyber Laws</li>
                                                                                <li>Introduction to Computers</li>
                                                                                <li>Computer History</li>
                                                                                <li>Software &amp; Hardware</li>
                                                                                <li>Classification of Computer</li>
                                                                                <li>Input-Output Devices</li>
                                                                                <li>Windows</li>
                                                                                <li>
                                                                                    DOS Prompt Commands. Linux/Mac Terminal and Commands
                                                                                </li>
                                                                                <li>Basic Computer Terminology</li>
                                                                                <li>Computer Security models</li>
                                                                                <li>Computer Security terms &amp; Ethics</li>
                                                                                <li>Business and Professional Ethics</li>
                                                                                <li>Need for cyber security</li>
                                                                                <li>Cyber Frauds and crimes</li>
                                                                                <li>Digital Digital Payments</li>
                                                                                <li>Various Search Engines</li>
                                                                                <li>Introduction to Auditing</li>
                                                                                <li>Deep Web</li>
                                                                                <li>VAPT</li>
                                                                                <li>Smartphone Operating systems</li>
                                                                                <li>Introduction to compliances</li>
                                                                                <li>Globalization and border less world</li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="panel panel-default">
                                                                    <div
                                                                        id="heading_accordion_2"
                                                                        role="tab"
                                                                        className="panel-heading"
                                                                    >
                                                                        <h4 className="panel-title">
                                                                            {" "}
                                                                            <a
                                                                                aria-controls="collapse_accordion_2"
                                                                                aria-expanded="false"
                                                                                href="#collapse_accordion_2"
                                                                                data-parent="#accordion_2"
                                                                                data-toggle="collapse"
                                                                                className="collapsed"
                                                                                role="button"
                                                                            >
                                                                                Cyber Laws
                                                                            </a>{" "}
                                                                        </h4>
                                                                    </div>
                                                                    <div
                                                                        aria-labelledby="heading_accordion_2"
                                                                        role="tabpanel"
                                                                        className="panel-collapse collapse in"
                                                                        id="collapse_accordion_2"
                                                                        style={{}}
                                                                        aria-expanded="true"
                                                                    >
                                                                        <div className="panel-body">
                                                                            <ul>
                                                                                <ul>
                                                                                    <li>Need for Cyber Regulations;</li>
                                                                                    <li>
                                                                                        Scope and Significance of Cyber laws : Information
                                                                                        Technology Act 2000;
                                                                                    </li>
                                                                                    <li>Network and Network Security,</li>
                                                                                    <li>Access and Unauthorized Access,</li>
                                                                                    <li>Data Security,</li>
                                                                                    <li>E Contracts and E Forms</li>
                                                                                    <li>Penal Provisions for Phishing,</li>
                                                                                    <li>Spam,</li>
                                                                                    <li>Virus,</li>
                                                                                    <li>Worms,</li>
                                                                                    <li>Malware,</li>
                                                                                    <li>Hacking,</li>
                                                                                    <li>Trespass and Stalking;</li>
                                                                                    <li>Human rights in cyberspace,</li>
                                                                                    <li>
                                                                                        International C International Co-operation in
                                                                                        investigating
                                                                                    </li>
                                                                                    <li>Cyber crimes</li>
                                                                                </ul>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="panel panel-default">
                                                                    <div
                                                                        id="heading_accordion_2"
                                                                        role="tab"
                                                                        className="panel-heading"
                                                                    >
                                                                        <h4 className="panel-title">
                                                                            {" "}
                                                                            <a
                                                                                aria-controls="collapse_accordion_2"
                                                                                aria-expanded="false"
                                                                                href="#collapse_accordion_2"
                                                                                data-parent="#accordion_2"
                                                                                data-toggle="collapse"
                                                                                className="collapsed"
                                                                                role="button"
                                                                            >
                                                                                Introduction to Network Security
                                                                            </a>{" "}
                                                                        </h4>
                                                                    </div>
                                                                    <div
                                                                        aria-labelledby="heading_accordion_2"
                                                                        role="tabpanel"
                                                                        className="panel-collapse collapse in"
                                                                        id="collapse_accordion_2"
                                                                        style={{}}
                                                                        aria-expanded="true"
                                                                    >
                                                                        <div className="panel-body">
                                                                            <ul>
                                                                                <li>Types of networks,</li>
                                                                                <li>IP Address,</li>
                                                                                <li>NAT ,</li>
                                                                                <li>IP Subnets,</li>
                                                                                <li>DHCP Server,</li>
                                                                                <li>Ports,</li>
                                                                                <li>DNS,</li>
                                                                                <li>Proxy Servers,</li>
                                                                                <li>Virtual Private Networks,</li>
                                                                                <li>DNS Server,</li>
                                                                                <li>OSI and TCP IP Model,</li>
                                                                                <li>Routers ,</li>
                                                                                <li>Switches,</li>
                                                                                <li>Endpoint</li>
                                                                                <li>Solutions,</li>
                                                                                <li>Access Directory,</li>
                                                                                <li>TOR Network.</li>
                                                                                <li>Networking Devices (Layer1,2,3) -Different types</li>
                                                                                <li>of network layer attacks – Firewall (ACL, Packet</li>
                                                                                <li>Filtering, DMZ,Alerts and Audit Trails) – IDS,</li>
                                                                                <li>IPS and its types (Signature based,</li>
                                                                                <li>Anomaly based,</li>
                                                                                <li>Policy based, Honeypot based)</li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="panel panel-default">
                                                                    <div
                                                                        id="heading_accordion_2"
                                                                        role="tab"
                                                                        className="panel-heading"
                                                                    >
                                                                        <h4 className="panel-title">
                                                                            {" "}
                                                                            <a
                                                                                aria-controls="collapse_accordion_2"
                                                                                aria-expanded="false"
                                                                                href="#collapse_accordion_2"
                                                                                data-parent="#accordion_2"
                                                                                data-toggle="collapse"
                                                                                className="collapsed"
                                                                                role="button"
                                                                            >
                                                                                Virtual Private Networks
                                                                            </a>{" "}
                                                                        </h4>
                                                                    </div>
                                                                    <div
                                                                        aria-labelledby="heading_accordion_2"
                                                                        role="tabpanel"
                                                                        className="panel-collapse collapse in"
                                                                        id="collapse_accordion_2"
                                                                        style={{}}
                                                                        aria-expanded="true"
                                                                    >
                                                                        <div className="panel-body">
                                                                            <ul>
                                                                                <li>
                                                                                    VPN and its types –Tunneling Protocols – Tunnel and
                                                                                    Transport Mode – Authentication HeaderEncapsulation
                                                                                    Security Payload (ESP)- IPSEC Protocol Suite – IKE PHASE
                                                                                    1, II – Generic Routing Encapsulation (GRE).
                                                                                </li>
                                                                                <li>Implementation of VPNs</li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="panel panel-default">
                                                                    <div
                                                                        id="heading_accordion_2"
                                                                        role="tab"
                                                                        className="panel-heading"
                                                                    >
                                                                        <h4 className="panel-title">
                                                                            {" "}
                                                                            <a
                                                                                aria-controls="collapse_accordion_2"
                                                                                aria-expanded="false"
                                                                                href="#collapse_accordion_2"
                                                                                data-parent="#accordion_2"
                                                                                data-toggle="collapse"
                                                                                className="collapsed"
                                                                                role="button"
                                                                            >
                                                                                Network Attacks Part
                                                                            </a>{" "}
                                                                        </h4>
                                                                    </div>
                                                                    <div
                                                                        aria-labelledby="heading_accordion_2"
                                                                        role="tabpanel"
                                                                        className="panel-collapse collapse in"
                                                                        id="collapse_accordion_2"
                                                                        style={{}}
                                                                        aria-expanded="true"
                                                                    >
                                                                        <div className="panel-body">
                                                                            <ul>
                                                                                <li>Network Sniffing</li>
                                                                                <li>Wireshark</li>
                                                                                <li>Packet analysis</li>
                                                                                <li>Display and capture filters</li>
                                                                                <li>Ettercap</li>
                                                                                <li>DNS</li>
                                                                                <li>Poisoning</li>
                                                                                <li>ARP Poisoning</li>
                                                                                <li>Denial of services</li>
                                                                                <li>Vulnerability scanning</li>
                                                                                <li>Nessus</li>
                                                                                <li>Network</li>
                                                                                <li>Policies</li>
                                                                                <li>Open VAS</li>
                                                                                <li>Sparta</li>
                                                                                <li>Network Scanning Report Generation</li>
                                                                                <li>System hardening.</li>
                                                                                <li>Secure system configurations.</li>
                                                                                <li>SSL Striping.</li>
                                                                                <li>Setup network IDS/IPS.</li>
                                                                                <li>Router attacks.</li>
                                                                                <li>VPN Pentesting.</li>
                                                                                <li>VOIP Pentesting</li>
                                                                                <li>Network Exploitation OS Detection in network,</li>
                                                                                <li>Nmap, open ports,</li>
                                                                                <li>Filtered ports,</li>
                                                                                <li>Virtual Private Networks</li>
                                                                                <li>Network Attacks Part 1</li>
                                                                                <li>Service detection,</li>
                                                                                <li>Metasploit framework,</li>
                                                                                <li>Interface of metasploit framework,</li>
                                                                                <li>Network vulnerability</li>
                                                                                <li>Assessment,</li>
                                                                                <li>Evade anti viruses and firewalls,</li>
                                                                                <li>Metasploit scriptin Metasploit scripting,</li>
                                                                                <li>Exploits,</li>
                                                                                <li>Vulnerabilities,</li>
                                                                                <li>Payloads,</li>
                                                                                <li>Custom payloads,</li>
                                                                                <li>Nmap configuration,</li>
                                                                                <li>Social Engineering toolkit,</li>
                                                                                <li>Xero sploit</li>
                                                                                <li>Framework,</li>
                                                                                <li>Exploits delivery.</li>
                                                                                <li>End Point Security</li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="panel panel-default">
                                                                    <div
                                                                        id="heading_accordion_2"
                                                                        role="tab"
                                                                        className="panel-heading"
                                                                    >
                                                                        <h4 className="panel-title">
                                                                            {" "}
                                                                            <a
                                                                                aria-controls="collapse_accordion_2"
                                                                                aria-expanded="false"
                                                                                href="#collapse_accordion_2"
                                                                                data-parent="#accordion_2"
                                                                                data-toggle="collapse"
                                                                                className="collapsed"
                                                                                role="button"
                                                                            >
                                                                                Wireless Attacks
                                                                            </a>{" "}
                                                                        </h4>
                                                                    </div>
                                                                    <div
                                                                        aria-labelledby="heading_accordion_2"
                                                                        role="tabpanel"
                                                                        className="panel-collapse collapse in"
                                                                        id="collapse_accordion_2"
                                                                        style={{}}
                                                                        aria-expanded="true"
                                                                    >
                                                                        <div className="panel-body">
                                                                            <ul>
                                                                                <li>Protocols,</li>
                                                                                <li>MAC Filtering,</li>
                                                                                <li>Packet Encryption,</li>
                                                                                <li>Packet Sniffing,</li>
                                                                                <li>Types of authentication,</li>
                                                                                <li>ARP</li>
                                                                                <li>Replay attack,</li>
                                                                                <li>Fake Authentication Attack,</li>
                                                                                <li>De authentication,</li>
                                                                                <li>Attacks on WEP ,</li>
                                                                                <li>WPA andWPA-2 Encryption,</li>
                                                                                <li>Fake hotspots,</li>
                                                                                <li>Evil twin attack,</li>
                                                                                <li>Fluxion framework</li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="panel panel-default">
                                                                    <div
                                                                        id="heading_accordion_2"
                                                                        role="tab"
                                                                        className="panel-heading"
                                                                    >
                                                                        <h4 className="panel-title">
                                                                            {" "}
                                                                            <a
                                                                                aria-controls="collapse_accordion_2"
                                                                                aria-expanded="false"
                                                                                href="#collapse_accordion_2"
                                                                                data-parent="#accordion_2"
                                                                                data-toggle="collapse"
                                                                                className="collapsed"
                                                                                role="button"
                                                                            >
                                                                                Encoding
                                                                            </a>{" "}
                                                                        </h4>
                                                                    </div>
                                                                    <div
                                                                        aria-labelledby="heading_accordion_2"
                                                                        role="tabpanel"
                                                                        className="panel-collapse collapse in"
                                                                        id="collapse_accordion_2"
                                                                        style={{}}
                                                                        aria-expanded="true"
                                                                    >
                                                                        <div className="panel-body">
                                                                            <ul>
                                                                                <li>Encoding: Char set</li>
                                                                                <li>ASCII</li>
                                                                                <li>UNICODE</li>
                                                                                <li>URL Encoding</li>
                                                                                <li>Base64</li>
                                                                                <li>Illustration: ISBN/ QR Code/Barcode</li>
                                                                                <li>
                                                                                    Binary hamming codes and Binary Binary hamming codes and
                                                                                    Binary Reedmuller codes
                                                                                </li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="panel panel-default">
                                                                    <div
                                                                        id="heading_accordion_2"
                                                                        role="tab"
                                                                        className="panel-heading"
                                                                    >
                                                                        <h4 className="panel-title">
                                                                            {" "}
                                                                            <a
                                                                                aria-controls="collapse_accordion_2"
                                                                                aria-expanded="false"
                                                                                href="#collapse_accordion_2"
                                                                                data-parent="#accordion_2"
                                                                                data-toggle="collapse"
                                                                                className="collapsed"
                                                                                role="button"
                                                                            >
                                                                                Web Application Architecture
                                                                            </a>{" "}
                                                                        </h4>
                                                                    </div>
                                                                    <div
                                                                        aria-labelledby="heading_accordion_2"
                                                                        role="tabpanel"
                                                                        className="panel-collapse collapse in"
                                                                        id="collapse_accordion_2"
                                                                        style={{}}
                                                                        aria-expanded="true"
                                                                    >
                                                                        <div className="panel-body">
                                                                            <ul>
                                                                                <li>HTML Basics,</li>
                                                                                <li>XAMPP Server Setup,</li>
                                                                                <li>Hosting Websites Linux,</li>
                                                                                <li>Apache,</li>
                                                                                <li>Virtualization,</li>
                                                                                <li>Server</li>
                                                                                <li>Configurations,</li>
                                                                                <li>Web Application Firewalls</li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="panel panel-default">
                                                                    <div
                                                                        id="heading_accordion_2"
                                                                        role="tab"
                                                                        className="panel-heading"
                                                                    >
                                                                        <h4 className="panel-title">
                                                                            {" "}
                                                                            <a
                                                                                aria-controls="collapse_accordion_2"
                                                                                aria-expanded="false"
                                                                                href="#collapse_accordion_2"
                                                                                data-parent="#accordion_2"
                                                                                data-toggle="collapse"
                                                                                className="collapsed"
                                                                                role="button"
                                                                            >
                                                                                Cyber Security &amp; Ethical Hacking
                                                                            </a>{" "}
                                                                        </h4>
                                                                    </div>
                                                                    <div
                                                                        aria-labelledby="heading_accordion_2"
                                                                        role="tabpanel"
                                                                        className="panel-collapse collapse in"
                                                                        id="collapse_accordion_2"
                                                                        style={{}}
                                                                        aria-expanded="true"
                                                                    >
                                                                        <div className="panel-body">
                                                                            <ul>
                                                                                <li>Basics of Networking</li>
                                                                                <li>Introduction to Cyber Security.</li>
                                                                                <li>Information Gathering.</li>
                                                                                <li>Physical Security</li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="panel panel-default">
                                                                    <div
                                                                        id="heading_accordion_2"
                                                                        role="tab"
                                                                        className="panel-heading"
                                                                    >
                                                                        <h4 className="panel-title">
                                                                            {" "}
                                                                            <a
                                                                                aria-controls="collapse_accordion_2"
                                                                                aria-expanded="false"
                                                                                href="#collapse_accordion_2"
                                                                                data-parent="#accordion_2"
                                                                                data-toggle="collapse"
                                                                                className="collapsed"
                                                                                role="button"
                                                                            >
                                                                                Application Attacks
                                                                            </a>{" "}
                                                                        </h4>
                                                                    </div>
                                                                    <div
                                                                        aria-labelledby="heading_accordion_2"
                                                                        role="tabpanel"
                                                                        className="panel-collapse collapse in"
                                                                        id="collapse_accordion_2"
                                                                        style={{}}
                                                                        aria-expanded="true"
                                                                    >
                                                                        <div className="panel-body">
                                                                            <ul>
                                                                                <li>Windows-10 Analysis &amp; Hacking</li>
                                                                                <li>Google Hacking</li>
                                                                                <li>Application Password Hacking</li>
                                                                                <li>
                                                                                    Reverse Engineering &amp; Software Cracking Techniques
                                                                                </li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="panel panel-default">
                                                                    <div
                                                                        id="heading_accordion_2"
                                                                        role="tab"
                                                                        className="panel-heading"
                                                                    >
                                                                        <h4 className="panel-title">
                                                                            {" "}
                                                                            <a
                                                                                aria-controls="collapse_accordion_2"
                                                                                aria-expanded="false"
                                                                                href="#collapse_accordion_2"
                                                                                data-parent="#accordion_2"
                                                                                data-toggle="collapse"
                                                                                className="collapsed"
                                                                                role="button"
                                                                            >
                                                                                Network Attacks
                                                                            </a>{" "}
                                                                        </h4>
                                                                    </div>
                                                                    <div
                                                                        aria-labelledby="heading_accordion_2"
                                                                        role="tabpanel"
                                                                        className="panel-collapse collapse in"
                                                                        id="collapse_accordion_2"
                                                                        style={{}}
                                                                        aria-expanded="true"
                                                                    >
                                                                        <div className="panel-body">
                                                                            <ul>
                                                                                <li>Email Hacking &amp; Tracing.</li>
                                                                                <li>
                                                                                    Malware Attacks, Backdoors &amp; Handheld Devices
                                                                                    Analysis.
                                                                                </li>
                                                                                <li>Encoding</li>
                                                                                <li>Web Application Architecture</li>
                                                                                <li>Cyber Security &amp; Ethical Hacking</li>
                                                                                <li>Application Attacks</li>
                                                                                <li>Network Attacks</li>
                                                                                <li>DoS, DDoS &amp; Buffer Overflow Attacks</li>
                                                                                <li>Network Packet Analysis &amp; Sniffing</li>
                                                                                <li>Spamming</li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="panel panel-default">
                                                                    <div
                                                                        id="heading_accordion_2"
                                                                        role="tab"
                                                                        className="panel-heading"
                                                                    >
                                                                        <h4 className="panel-title">
                                                                            {" "}
                                                                            <a
                                                                                aria-controls="collapse_accordion_2"
                                                                                aria-expanded="false"
                                                                                href="#collapse_accordion_2"
                                                                                data-parent="#accordion_2"
                                                                                data-toggle="collapse"
                                                                                className="collapsed"
                                                                                role="button"
                                                                            >
                                                                                Cyber Security Analysis &amp; Countermeasures
                                                                            </a>{" "}
                                                                        </h4>
                                                                    </div>
                                                                    <div
                                                                        aria-labelledby="heading_accordion_2"
                                                                        role="tabpanel"
                                                                        className="panel-collapse collapse in"
                                                                        id="collapse_accordion_2"
                                                                        style={{}}
                                                                        aria-expanded="true"
                                                                    >
                                                                        <div className="panel-body">
                                                                            <ul>
                                                                                <li>Firewall Technologies.</li>
                                                                                <li>IDS, IPS &amp; Honeypots Analysis.</li>
                                                                                <li>Hacking Routers, Cable Modems and Firewall.</li>
                                                                                <li>Cryptography with different Applications.</li>
                                                                                <li>Message authentication code and Hash Functions</li>
                                                                                <li>Public Key Cryptography and Bitcoin</li>
                                                                                <li>Secret Key Cryptography</li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="panel panel-default">
                                                                    <div
                                                                        id="heading_accordion_2"
                                                                        role="tab"
                                                                        className="panel-heading"
                                                                    >
                                                                        <h4 className="panel-title">
                                                                            {" "}
                                                                            <a
                                                                                aria-controls="collapse_accordion_2"
                                                                                aria-expanded="false"
                                                                                href="#collapse_accordion_2"
                                                                                data-parent="#accordion_2"
                                                                                data-toggle="collapse"
                                                                                className="collapsed"
                                                                                role="button"
                                                                            >
                                                                                Advance Security Analysis
                                                                            </a>{" "}
                                                                        </h4>
                                                                    </div>
                                                                    <div
                                                                        aria-labelledby="heading_accordion_2"
                                                                        role="tabpanel"
                                                                        className="panel-collapse collapse in"
                                                                        id="collapse_accordion_2"
                                                                        style={{}}
                                                                        aria-expanded="true"
                                                                    >
                                                                        <div className="panel-body">
                                                                            <ul>
                                                                                <li>Internet Content Filtering Techniques</li>
                                                                                <li>Securing Gadgets</li>
                                                                                <li>Introduction to ISO 27001 &amp; Security Policies</li>
                                                                                <li>Disaster Recovery &amp; Planning</li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="panel panel-default">
                                                                    <div
                                                                        id="heading_accordion_2"
                                                                        role="tab"
                                                                        className="panel-heading"
                                                                    >
                                                                        <h4 className="panel-title">
                                                                            {" "}
                                                                            <a
                                                                                aria-controls="collapse_accordion_2"
                                                                                aria-expanded="false"
                                                                                href="#collapse_accordion_2"
                                                                                data-parent="#accordion_2"
                                                                                data-toggle="collapse"
                                                                                className="collapsed"
                                                                                role="button"
                                                                            >
                                                                                Indian Information Technology Act
                                                                            </a>{" "}
                                                                        </h4>
                                                                    </div>
                                                                    <div
                                                                        aria-labelledby="heading_accordion_2"
                                                                        role="tabpanel"
                                                                        className="panel-collapse collapse in"
                                                                        id="collapse_accordion_2"
                                                                        style={{}}
                                                                        aria-expanded="true"
                                                                    >
                                                                        <div className="panel-body">
                                                                            <ul>
                                                                                <li>Information Technology Amendments Act 2008</li>
                                                                                <li>Case Studies &amp; Hacking News</li>
                                                                                <li>PC Auditing &amp; Virus Analysis</li>
                                                                                <li>Corporate &amp; Economic Espionage</li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="panel panel-default">
                                                                    <div
                                                                        id="heading_accordion_2"
                                                                        role="tab"
                                                                        className="panel-heading"
                                                                    >
                                                                        <h4 className="panel-title">
                                                                            {" "}
                                                                            <a
                                                                                aria-controls="collapse_accordion_2"
                                                                                aria-expanded="false"
                                                                                href="#collapse_accordion_2"
                                                                                data-parent="#accordion_2"
                                                                                data-toggle="collapse"
                                                                                className="collapsed"
                                                                                role="button"
                                                                            >
                                                                                Vulnerabilities &amp; Attacks
                                                                            </a>{" "}
                                                                        </h4>
                                                                    </div>
                                                                    <div
                                                                        aria-labelledby="heading_accordion_2"
                                                                        role="tabpanel"
                                                                        className="panel-collapse collapse in"
                                                                        id="collapse_accordion_2"
                                                                        style={{}}
                                                                        aria-expanded="true"
                                                                    >
                                                                        <div className="panel-body">
                                                                            <ul>
                                                                                <li>Web Application Vulnerabilities</li>
                                                                                <li>Session Hijacking &amp; SQL Injection</li>
                                                                                <li>Phishing &amp; Financial Frauds</li>
                                                                                <li>Security Protocols</li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="panel panel-default">
                                                                    <div
                                                                        id="heading_accordion_2"
                                                                        role="tab"
                                                                        className="panel-heading"
                                                                    >
                                                                        <h4 className="panel-title">
                                                                            {" "}
                                                                            <a
                                                                                aria-controls="collapse_accordion_2"
                                                                                aria-expanded="false"
                                                                                href="#collapse_accordion_2"
                                                                                data-parent="#accordion_2"
                                                                                data-toggle="collapse"
                                                                                className="collapsed"
                                                                                role="button"
                                                                            >
                                                                                Penetrating Testing
                                                                            </a>{" "}
                                                                        </h4>
                                                                    </div>
                                                                    <div
                                                                        aria-labelledby="heading_accordion_2"
                                                                        role="tabpanel"
                                                                        className="panel-collapse collapse in"
                                                                        id="collapse_accordion_2"
                                                                        style={{}}
                                                                        aria-expanded="true"
                                                                    >
                                                                        <div className="panel-body">
                                                                            <ul>
                                                                                <li>Linux Hacking</li>
                                                                                <li>Hacking Wireless Networks</li>
                                                                                <li>Exploit Analysis</li>
                                                                                <li>Network &amp; Web Audits</li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="panel panel-default">
                                                                    <div
                                                                        id="heading_accordion_2"
                                                                        role="tab"
                                                                        className="panel-heading"
                                                                    >
                                                                        <h4 className="panel-title">
                                                                            {" "}
                                                                            <a
                                                                                aria-controls="collapse_accordion_2"
                                                                                aria-expanded="false"
                                                                                href="#collapse_accordion_2"
                                                                                data-parent="#accordion_2"
                                                                                data-toggle="collapse"
                                                                                className="collapsed"
                                                                                role="button"
                                                                            >
                                                                                Data Acquisition &amp; Forensics
                                                                            </a>{" "}
                                                                        </h4>
                                                                    </div>
                                                                    <div
                                                                        aria-labelledby="heading_accordion_2"
                                                                        role="tabpanel"
                                                                        className="panel-collapse collapse in"
                                                                        id="collapse_accordion_2"
                                                                        style={{}}
                                                                        aria-expanded="true"
                                                                    >
                                                                        <div className="panel-body">
                                                                            <ul>
                                                                                <li>Data Acquisition &amp; Forensics Data Recovery</li>
                                                                                <li>Operating System Forensics</li>
                                                                                <li>Cloud Forensics</li>
                                                                                <li>
                                                                                    Hacking Mobile Phones, PDA &amp; its Countermeasures
                                                                                </li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="panel panel-default">
                                                                    <div
                                                                        id="heading_accordion_2"
                                                                        role="tab"
                                                                        className="panel-heading"
                                                                    >
                                                                        <h4 className="panel-title">
                                                                            {" "}
                                                                            <a
                                                                                aria-controls="collapse_accordion_2"
                                                                                aria-expanded="false"
                                                                                href="#collapse_accordion_2"
                                                                                data-parent="#accordion_2"
                                                                                data-toggle="collapse"
                                                                                className="collapsed"
                                                                                role="button"
                                                                            >
                                                                                Data Acquisition &amp; Forensics
                                                                            </a>{" "}
                                                                        </h4>
                                                                    </div>
                                                                    <div
                                                                        aria-labelledby="heading_accordion_2"
                                                                        role="tabpanel"
                                                                        className="panel-collapse collapse in"
                                                                        id="collapse_accordion_2"
                                                                        style={{}}
                                                                        aria-expanded="true"
                                                                    >
                                                                        <div className="panel-body">
                                                                            <ul>
                                                                                <li>Cyber Crime Investigation</li>
                                                                                <li>Cyber Warfare, Terrorism &amp; Social Networking</li>
                                                                                <li>Cyber Forensics and Incident Handling</li>
                                                                                <li>Case Study</li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="panel panel-default">
                                                                    <div
                                                                        id="heading_accordion_2"
                                                                        role="tab"
                                                                        className="panel-heading"
                                                                    >
                                                                        <h4 className="panel-title">
                                                                            {" "}
                                                                            <a
                                                                                aria-controls="collapse_accordion_2"
                                                                                aria-expanded="false"
                                                                                href="#collapse_accordion_2"
                                                                                data-parent="#accordion_2"
                                                                                data-toggle="collapse"
                                                                                className="collapsed"
                                                                                role="button"
                                                                            >
                                                                                Capstone project
                                                                            </a>{" "}
                                                                        </h4>
                                                                    </div>
                                                                    <div
                                                                        aria-labelledby="heading_accordion_2"
                                                                        role="tabpanel"
                                                                        className="panel-collapse collapse in"
                                                                        id="collapse_accordion_2"
                                                                        style={{}}
                                                                        aria-expanded="true"
                                                                    >
                                                                        <div className="panel-body">
                                                                            <ul>
                                                                                <li>Group Presentation</li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </>
                                : ''}
                            


                            
                            {final[0].curriculum_id == '169' ?
                                <>
                                    <div className="course-list-header">
                                        <div id="pg-91-1" className="panel-grid faq-mob">
                                            <div id="pgc-91-1-1" className="panel-grid-cell">
                                                <div
                                                    id="panel-91-1-1-0"
                                                    className="so-panel widget widget_accordion panel-first-child panel-last-child"
                                                >
                                                    <div className="thim-widget-accordion thim-widget-accordion-base new-accord">
                                                        <div className="thim-widget-accordion">
                                                            <span className="line" />
                                                            <div
                                                                aria-multiselectable="true"
                                                                role="tablist"
                                                                className=""
                                                                id="accordion_56b58d47cf7a3"
                                                            >
                                                                <div className="panel panel-default">
                                                                    <div
                                                                        id="heading_accordion_1"
                                                                        role="tab"
                                                                        className="panel-heading"
                                                                    >
                                                                        <h4 className="panel-title">
                                                                            <a
                                                                                aria-controls="collapse_accordion_1"
                                                                                aria-expanded="false"
                                                                                href="#collapse_accordion_1"
                                                                                data-parent="#accordion_1"
                                                                                data-toggle="collapse"
                                                                                className="collapsed"
                                                                                role="button"
                                                                            >
                                                                                Introduction to Analytics
                                                                            </a>
                                                                        </h4>
                                                                    </div>
                                                                    <div
                                                                        aria-labelledby="heading_accordion_1"
                                                                        role="tabpanel"
                                                                        className="panel-collapse collapse in"
                                                                        id="collapse_accordion_1"
                                                                        style={{}}
                                                                        aria-expanded="true"
                                                                    >
                                                                        <div className="panel-body">
                                                                            <ul>
                                                                                <li>Introduction to Business Analytics</li>
                                                                                <li>R for Data Science</li>
                                                                                <li>Introduction to R and R-Studio</li>
                                                                                <li>Dealing with Data using R</li>
                                                                                <li>Visualization using R</li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="panel panel-default">
                                                                    <div
                                                                        id="heading_accordion_2"
                                                                        role="tab"
                                                                        className="panel-heading"
                                                                    >
                                                                        <h4 className="panel-title">
                                                                            {" "}
                                                                            <a
                                                                                aria-controls="collapse_accordion_2"
                                                                                aria-expanded="false"
                                                                                href="#collapse_accordion_2"
                                                                                data-parent="#accordion_2"
                                                                                data-toggle="collapse"
                                                                                className="collapsed"
                                                                                role="button"
                                                                            >
                                                                                Statistical Method for Decision Making:-
                                                                            </a>{" "}
                                                                        </h4>
                                                                    </div>
                                                                    <div
                                                                        aria-labelledby="heading_accordion_2"
                                                                        role="tabpanel"
                                                                        className="panel-collapse collapse in"
                                                                        id="collapse_accordion_2"
                                                                        style={{}}
                                                                        aria-expanded="true"
                                                                    >
                                                                        <div className="panel-body">
                                                                            <ul>
                                                                                <li>Descriptive Statistics</li>
                                                                                <li>Introduction to Probability</li>
                                                                                <li>Probability Distributions</li>
                                                                                <li>Hypothesis Testing and Estimation</li>
                                                                                <li>Goodness of Fit</li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="panel panel-default">
                                                                    <div
                                                                        id="heading_accordion_2"
                                                                        role="tab"
                                                                        className="panel-heading"
                                                                    >
                                                                        <h4 className="panel-title">
                                                                            {" "}
                                                                            <a
                                                                                aria-controls="collapse_accordion_2"
                                                                                aria-expanded="false"
                                                                                href="#collapse_accordion_2"
                                                                                data-parent="#accordion_2"
                                                                                data-toggle="collapse"
                                                                                className="collapsed"
                                                                                role="button"
                                                                            >
                                                                                Business Finance:-
                                                                            </a>{" "}
                                                                        </h4>
                                                                    </div>
                                                                    <div
                                                                        aria-labelledby="heading_accordion_2"
                                                                        role="tabpanel"
                                                                        className="panel-collapse collapse in"
                                                                        id="collapse_accordion_2"
                                                                        style={{}}
                                                                        aria-expanded="true"
                                                                    >
                                                                        <div className="panel-body">
                                                                            <ul>
                                                                                <li>Fundamentals of Finance</li>
                                                                                <li>Working Capital Management</li>
                                                                                <li>Capital Budgeting</li>
                                                                                <li>Capital Structure</li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="panel panel-default">
                                                                    <div
                                                                        id="heading_accordion_2"
                                                                        role="tab"
                                                                        className="panel-heading"
                                                                    >
                                                                        <h4 className="panel-title">
                                                                            {" "}
                                                                            <a
                                                                                aria-controls="collapse_accordion_2"
                                                                                aria-expanded="false"
                                                                                href="#collapse_accordion_2"
                                                                                data-parent="#accordion_2"
                                                                                data-toggle="collapse"
                                                                                className="collapsed"
                                                                                role="button"
                                                                            >
                                                                                Marketing and CRM:-
                                                                            </a>{" "}
                                                                        </h4>
                                                                    </div>
                                                                    <div
                                                                        aria-labelledby="heading_accordion_2"
                                                                        role="tabpanel"
                                                                        className="panel-collapse collapse in"
                                                                        id="collapse_accordion_2"
                                                                        style={{}}
                                                                        aria-expanded="true"
                                                                    >
                                                                        <div className="panel-body">
                                                                            <ul>
                                                                                <li>Core Concepts of Marketing</li>
                                                                                <li>Customer Life Time Value</li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <h3>Analytics techniques</h3>
                                                                <div className="panel panel-default">
                                                                    <div
                                                                        id="heading_accordion_2"
                                                                        role="tab"
                                                                        className="panel-heading"
                                                                    >
                                                                        <h4 className="panel-title">
                                                                            {" "}
                                                                            <a
                                                                                aria-controls="collapse_accordion_2"
                                                                                aria-expanded="false"
                                                                                href="#collapse_accordion_2"
                                                                                data-parent="#accordion_2"
                                                                                data-toggle="collapse"
                                                                                className="collapsed"
                                                                                role="button"
                                                                            >
                                                                                Introduction to Analytics:-
                                                                            </a>{" "}
                                                                        </h4>
                                                                    </div>
                                                                    <div
                                                                        aria-labelledby="heading_accordion_2"
                                                                        role="tabpanel"
                                                                        className="panel-collapse collapse in"
                                                                        id="collapse_accordion_2"
                                                                        style={{}}
                                                                        aria-expanded="true"
                                                                    >
                                                                        <div className="panel-body">
                                                                            <ul>
                                                                                <li> Analysis of Variance</li>
                                                                                <li>Regression Analysis</li>
                                                                                <li>Dimension Reduction Techniques</li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="panel panel-default">
                                                                    <div
                                                                        id="heading_accordion_2"
                                                                        role="tab"
                                                                        className="panel-heading"
                                                                    >
                                                                        <h4 className="panel-title">
                                                                            {" "}
                                                                            <a
                                                                                aria-controls="collapse_accordion_2"
                                                                                aria-expanded="false"
                                                                                href="#collapse_accordion_2"
                                                                                data-parent="#accordion_2"
                                                                                data-toggle="collapse"
                                                                                className="collapsed"
                                                                                role="button"
                                                                            >
                                                                                Data Mining:-
                                                                            </a>{" "}
                                                                        </h4>
                                                                    </div>
                                                                    <div
                                                                        aria-labelledby="heading_accordion_2"
                                                                        role="tabpanel"
                                                                        className="panel-collapse collapse in"
                                                                        id="collapse_accordion_2"
                                                                        style={{}}
                                                                        aria-expanded="true"
                                                                    >
                                                                        <div className="panel-body">
                                                                            <ul>
                                                                                <li>
                                                                                    Introduction to Supervised and Unsupervised Learning
                                                                                </li>
                                                                                <li>Clustering</li>
                                                                                <li>Decision Trees</li>
                                                                                <li> Random Forest</li>
                                                                                <li>Neural Networks</li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="panel panel-default">
                                                                    <div
                                                                        id="heading_accordion_2"
                                                                        role="tab"
                                                                        className="panel-heading"
                                                                    >
                                                                        <h4 className="panel-title">
                                                                            {" "}
                                                                            <a
                                                                                aria-controls="collapse_accordion_2"
                                                                                aria-expanded="false"
                                                                                href="#collapse_accordion_2"
                                                                                data-parent="#accordion_2"
                                                                                data-toggle="collapse"
                                                                                className="collapsed"
                                                                                role="button"
                                                                            >
                                                                                Predictive Modeling:-
                                                                            </a>{" "}
                                                                        </h4>
                                                                    </div>
                                                                    <div
                                                                        aria-labelledby="heading_accordion_2"
                                                                        role="tabpanel"
                                                                        className="panel-collapse collapse in"
                                                                        id="collapse_accordion_2"
                                                                        style={{}}
                                                                        aria-expanded="true"
                                                                    >
                                                                        <div className="panel-body">
                                                                            <ul>
                                                                                <li>Multiple Linear Regression</li>
                                                                                <li>Logistic Regression</li>
                                                                                <li>Linear Discriminant Analysis</li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="panel panel-default">
                                                                    <div
                                                                        id="heading_accordion_2"
                                                                        role="tab"
                                                                        className="panel-heading"
                                                                    >
                                                                        <h4 className="panel-title">
                                                                            {" "}
                                                                            <a
                                                                                aria-controls="collapse_accordion_2"
                                                                                aria-expanded="false"
                                                                                href="#collapse_accordion_2"
                                                                                data-parent="#accordion_2"
                                                                                data-toggle="collapse"
                                                                                className="collapsed"
                                                                                role="button"
                                                                            >
                                                                                Time Series Forecasting:-
                                                                            </a>{" "}
                                                                        </h4>
                                                                    </div>
                                                                    <div
                                                                        aria-labelledby="heading_accordion_2"
                                                                        role="tabpanel"
                                                                        className="panel-collapse collapse in"
                                                                        id="collapse_accordion_2"
                                                                        style={{}}
                                                                        aria-expanded="true"
                                                                    >
                                                                        <div className="panel-body">
                                                                            <ul>
                                                                                <li>Introduction to Time Series</li>
                                                                                <li>Correlation</li>
                                                                                <li>Forecasting</li>
                                                                                <li>Autoregressive models</li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="panel panel-default">
                                                                    <div
                                                                        id="heading_accordion_2"
                                                                        role="tab"
                                                                        className="panel-heading"
                                                                    >
                                                                        <h4 className="panel-title">
                                                                            {" "}
                                                                            <a
                                                                                aria-controls="collapse_accordion_2"
                                                                                aria-expanded="false"
                                                                                href="#collapse_accordion_2"
                                                                                data-parent="#accordion_2"
                                                                                data-toggle="collapse"
                                                                                className="collapsed"
                                                                                role="button"
                                                                            >
                                                                                Machine Learning:-
                                                                            </a>{" "}
                                                                        </h4>
                                                                    </div>
                                                                    <div
                                                                        aria-labelledby="heading_accordion_2"
                                                                        role="tabpanel"
                                                                        className="panel-collapse collapse in"
                                                                        id="collapse_accordion_2"
                                                                        style={{}}
                                                                        aria-expanded="true"
                                                                    >
                                                                        <div className="panel-body">
                                                                            <ul>
                                                                                <li>Handling Unstructured Data</li>
                                                                                <li>Machine Learning Algorithms</li>
                                                                                <li>Bias Variance trade-off</li>
                                                                                <li>Handling Unbalanced Data</li>
                                                                                <li>Boosting</li>
                                                                                <li>Model Validation</li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="panel panel-default">
                                                                    <div
                                                                        id="heading_accordion_2"
                                                                        role="tab"
                                                                        className="panel-heading"
                                                                    >
                                                                        <h4 className="panel-title">
                                                                            {" "}
                                                                            <a
                                                                                aria-controls="collapse_accordion_2"
                                                                                aria-expanded="false"
                                                                                href="#collapse_accordion_2"
                                                                                data-parent="#accordion_2"
                                                                                data-toggle="collapse"
                                                                                className="collapsed"
                                                                                role="button"
                                                                            >
                                                                                Optimization Techniques:-
                                                                            </a>{" "}
                                                                        </h4>
                                                                    </div>
                                                                    <div
                                                                        aria-labelledby="heading_accordion_2"
                                                                        role="tabpanel"
                                                                        className="panel-collapse collapse in"
                                                                        id="collapse_accordion_2"
                                                                        style={{}}
                                                                        aria-expanded="true"
                                                                    >
                                                                        <div className="panel-body">
                                                                            <ul>
                                                                                <li>Linear programming</li>
                                                                                <li>Goal Programming</li>
                                                                                <li>Integer Programming</li>
                                                                                <li>Mixed Integer Programming</li>
                                                                                <li>Distribution and Network Models</li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <h3>Domain exposure</h3>
                                                                <div className="panel panel-default">
                                                                    <div
                                                                        id="heading_accordion_2"
                                                                        role="tab"
                                                                        className="panel-heading"
                                                                    >
                                                                        <h4 className="panel-title">
                                                                            {" "}
                                                                            <a
                                                                                aria-controls="collapse_accordion_2"
                                                                                aria-expanded="false"
                                                                                href="#collapse_accordion_2"
                                                                                data-parent="#accordion_2"
                                                                                data-toggle="collapse"
                                                                                className="collapsed"
                                                                                role="button"
                                                                            >
                                                                                Marketing and Retail Analytics:-
                                                                            </a>{" "}
                                                                        </h4>
                                                                    </div>
                                                                    <div
                                                                        aria-labelledby="heading_accordion_2"
                                                                        role="tabpanel"
                                                                        className="panel-collapse collapse in"
                                                                        id="collapse_accordion_2"
                                                                        style={{}}
                                                                        aria-expanded="true"
                                                                    >
                                                                        <div className="panel-body">
                                                                            <ul>
                                                                                <li>Marketing and Retail Terminologies</li>
                                                                                <li>Customer Analytics</li>
                                                                                <li>KNIME</li>
                                                                                <li>Retail Dashboard</li>
                                                                                <li>Customer Churn</li>
                                                                                <li>Association Rules Mining</li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="panel panel-default">
                                                                    <div
                                                                        id="heading_accordion_2"
                                                                        role="tab"
                                                                        className="panel-heading"
                                                                    >
                                                                        <h4 className="panel-title">
                                                                            {" "}
                                                                            <a
                                                                                aria-controls="collapse_accordion_2"
                                                                                aria-expanded="false"
                                                                                href="#collapse_accordion_2"
                                                                                data-parent="#accordion_2"
                                                                                data-toggle="collapse"
                                                                                className="collapsed"
                                                                                role="button"
                                                                            >
                                                                                Web &amp; Social Media Analytics:-
                                                                            </a>{" "}
                                                                        </h4>
                                                                    </div>
                                                                    <div
                                                                        aria-labelledby="heading_accordion_2"
                                                                        role="tabpanel"
                                                                        className="panel-collapse collapse in"
                                                                        id="collapse_accordion_2"
                                                                        style={{}}
                                                                        aria-expanded="true"
                                                                    >
                                                                        <div className="panel-body">
                                                                            <ul>
                                                                                <li>Web Analytics: Understanding the metrics</li>
                                                                                <li>Basic &amp; Advanced Web Metrics</li>
                                                                                <li>Google Analytics: Demo &amp; Hands on</li>
                                                                                <li>Campaign Analytics</li>
                                                                                <li>Text Mining</li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="panel panel-default">
                                                                    <div
                                                                        id="heading_accordion_2"
                                                                        role="tab"
                                                                        className="panel-heading"
                                                                    >
                                                                        <h4 className="panel-title">
                                                                            {" "}
                                                                            <a
                                                                                aria-controls="collapse_accordion_2"
                                                                                aria-expanded="false"
                                                                                href="#collapse_accordion_2"
                                                                                data-parent="#accordion_2"
                                                                                data-toggle="collapse"
                                                                                className="collapsed"
                                                                                role="button"
                                                                            >
                                                                                Finance &amp; Risk Analytics:-
                                                                            </a>{" "}
                                                                        </h4>
                                                                    </div>
                                                                    <div
                                                                        aria-labelledby="heading_accordion_2"
                                                                        role="tabpanel"
                                                                        className="panel-collapse collapse in"
                                                                        id="collapse_accordion_2"
                                                                        style={{}}
                                                                        aria-expanded="true"
                                                                    >
                                                                        <div className="panel-body">
                                                                            <ul>
                                                                                <li>Why Credit Risk-Using a market case study</li>
                                                                                <li>Comparison of Credit Risk Models</li>
                                                                                <li>Overview of Probability of Default (PD) Modeling</li>
                                                                                <li>
                                                                                    PD Models, types of models, Steps to make a good model
                                                                                </li>
                                                                                <li>Market Risk</li>
                                                                                <li>Value at Risk - using stock case study</li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="panel panel-default">
                                                                    <div
                                                                        id="heading_accordion_2"
                                                                        role="tab"
                                                                        className="panel-heading"
                                                                    >
                                                                        <h4 className="panel-title">
                                                                            {" "}
                                                                            <a
                                                                                aria-controls="collapse_accordion_2"
                                                                                aria-expanded="false"
                                                                                href="#collapse_accordion_2"
                                                                                data-parent="#accordion_2"
                                                                                data-toggle="collapse"
                                                                                className="collapsed"
                                                                                role="button"
                                                                            >
                                                                                Supply Chain &amp; logistics Analytics:-
                                                                            </a>{" "}
                                                                        </h4>
                                                                    </div>
                                                                    <div
                                                                        aria-labelledby="heading_accordion_2"
                                                                        role="tabpanel"
                                                                        className="panel-collapse collapse in"
                                                                        id="collapse_accordion_2"
                                                                        style={{}}
                                                                        aria-expanded="true"
                                                                    >
                                                                        <div className="panel-body">
                                                                            <ul>
                                                                                <li>Introduction to Supply Chain</li>
                                                                                <li>Dealing with Demand uncertainty</li>
                                                                                <li>Designing Optimal Strategy using Case Study</li>
                                                                                <li>Inventory Control &amp; Management</li>
                                                                                <li>Inventory classification</li>
                                                                                <li>Inventory Modeling</li>
                                                                                <li>Costs Involved in Inventory</li>
                                                                                <li>Economic Order Quantity</li>
                                                                                <li>Forecasting</li>
                                                                                <li>Advanced Forecasting Methods</li>
                                                                                <li>Examples &amp; Case Studies</li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <h3>Visualization and insights</h3>
                                                                <div className="panel panel-default">
                                                                    <div
                                                                        id="heading_accordion_2"
                                                                        role="tab"
                                                                        className="panel-heading"
                                                                    >
                                                                        <h4 className="panel-title">
                                                                            {" "}
                                                                            <a
                                                                                aria-controls="collapse_accordion_2"
                                                                                aria-expanded="false"
                                                                                href="#collapse_accordion_2"
                                                                                data-parent="#accordion_2"
                                                                                data-toggle="collapse"
                                                                                className="collapsed"
                                                                                role="button"
                                                                            >
                                                                                Data Visualization using Tableau:-
                                                                            </a>{" "}
                                                                        </h4>
                                                                    </div>
                                                                    <div
                                                                        aria-labelledby="heading_accordion_2"
                                                                        role="tabpanel"
                                                                        className="panel-collapse collapse in"
                                                                        id="collapse_accordion_2"
                                                                        style={{}}
                                                                        aria-expanded="true"
                                                                    >
                                                                        <div className="panel-body">
                                                                            <ul>
                                                                                <li>Introduction to Data Visualization</li>
                                                                                <li>Introduction to Tableau</li>
                                                                                <li>Basic charts and dashboard</li>
                                                                                <li>Descriptive Statistics, Dimensions and Measures</li>
                                                                                <li>Visual analytics: Storytelling through data</li>
                                                                                <li>Dashboard design &amp; principles</li>
                                                                                <li>
                                                                                    Advanced design components/ principles : Enhancing the
                                                                                    power of dashboards
                                                                                </li>
                                                                                <li>Special chart types</li>
                                                                                <li>Case Study: Hands on using Tableau</li>
                                                                                <li>Integrate Tableau with Google Sheets</li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="panel panel-default">
                                                                    <div
                                                                        id="heading_accordion_2"
                                                                        role="tab"
                                                                        className="panel-heading"
                                                                    >
                                                                        <h4 className="panel-title">
                                                                            {" "}
                                                                            <a
                                                                                aria-controls="collapse_accordion_2"
                                                                                aria-expanded="false"
                                                                                href="#collapse_accordion_2"
                                                                                data-parent="#accordion_2"
                                                                                data-toggle="collapse"
                                                                                className="collapsed"
                                                                                role="button"
                                                                            >
                                                                                Languages and tools
                                                                            </a>{" "}
                                                                        </h4>
                                                                    </div>
                                                                    <div
                                                                        aria-labelledby="heading_accordion_2"
                                                                        role="tabpanel"
                                                                        className="panel-collapse collapse in"
                                                                        id="collapse_accordion_2"
                                                                        style={{}}
                                                                        aria-expanded="true"
                                                                    >
                                                                        <div className="panel-body">
                                                                            <ul>
                                                                                <li>R and Python</li>
                                                                                <li>Tableau</li>
                                                                                <li>SAS (Online Module)</li>
                                                                                <li>Hackathons</li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="panel panel-default">
                                                                    <div
                                                                        id="heading_accordion_2"
                                                                        role="tab"
                                                                        className="panel-heading"
                                                                    >
                                                                        <h4 className="panel-title">
                                                                            {" "}
                                                                            <a
                                                                                aria-controls="collapse_accordion_2"
                                                                                aria-expanded="false"
                                                                                href="#collapse_accordion_2"
                                                                                data-parent="#accordion_2"
                                                                                data-toggle="collapse"
                                                                                className="collapsed"
                                                                                role="button"
                                                                            >
                                                                                Capstone project
                                                                            </a>{" "}
                                                                        </h4>
                                                                    </div>
                                                                    <div
                                                                        aria-labelledby="heading_accordion_2"
                                                                        role="tabpanel"
                                                                        className="panel-collapse collapse in"
                                                                        id="collapse_accordion_2"
                                                                        style={{}}
                                                                        aria-expanded="true"
                                                                    >
                                                                        <div className="panel-body">
                                                                            <ul>
                                                                                <li>Group Presentation</li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </>
                                : ''}
                            


                            
                            {final[0].curriculum_id == '170' ?
                                <>
                                    <div className="course-list-header">
                                        <div id="pg-91-1" className="panel-grid faq-mob">
                                            <div id="pgc-91-1-1" className="panel-grid-cell">
                                                <div
                                                    id="panel-91-1-1-0"
                                                    className="so-panel widget widget_accordion panel-first-child panel-last-child"
                                                >
                                                    <div className="thim-widget-accordion thim-widget-accordion-base new-accord">
                                                        <div className="thim-widget-accordion">
                                                            <span className="line" />
                                                            <div
                                                                aria-multiselectable="true"
                                                                role="tablist"
                                                                className=""
                                                                id="accordion_56b58d47cf7a3"
                                                            >
                                                                <div className="panel panel-default">
                                                                    <div
                                                                        id="heading_accordion_1"
                                                                        role="tab"
                                                                        className="panel-heading"
                                                                    >
                                                                        <h4 className="panel-title">
                                                                            <a
                                                                                aria-controls="collapse_accordion_1"
                                                                                aria-expanded="false"
                                                                                href="#collapse_accordion_1"
                                                                                data-parent="#accordion_1"
                                                                                data-toggle="collapse"
                                                                                className="collapsed"
                                                                                role="button"
                                                                            >
                                                                                1st Semester
                                                                            </a>
                                                                        </h4>
                                                                    </div>
                                                                    <div
                                                                        aria-labelledby="heading_accordion_1"
                                                                        role="tabpanel"
                                                                        className="panel-collapse collapse in"
                                                                        id="collapse_accordion_1"
                                                                        style={{}}
                                                                        aria-expanded="true"
                                                                    >
                                                                        <div className="panel-body">
                                                                            <ul>
                                                                                <li>
                                                                                    {" "}
                                                                                    Principles of Management and Organizational Behavior
                                                                                </li>
                                                                                <li> Managerial Economics</li>
                                                                                <li> Accounting and Finance for Managers</li>
                                                                                <li> Marketing Management</li>
                                                                                <li> Human Resource Management</li>
                                                                                <li> Research Methods for Management</li>
                                                                                <li> Distribution and Supply Chain Management</li>
                                                                                <li> Retail and Sales Management</li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="panel panel-default">
                                                                    <div
                                                                        id="heading_accordion_2"
                                                                        role="tab"
                                                                        className="panel-heading"
                                                                    >
                                                                        <h4 className="panel-title">
                                                                            {" "}
                                                                            <a
                                                                                aria-controls="collapse_accordion_2"
                                                                                aria-expanded="false"
                                                                                href="#collapse_accordion_2"
                                                                                data-parent="#accordion_2"
                                                                                data-toggle="collapse"
                                                                                className="collapsed"
                                                                                role="button"
                                                                            >
                                                                                2nd Semester
                                                                            </a>{" "}
                                                                        </h4>
                                                                    </div>
                                                                    <div
                                                                        aria-labelledby="heading_accordion_2"
                                                                        role="tabpanel"
                                                                        className="panel-collapse collapse in"
                                                                        id="collapse_accordion_2"
                                                                        style={{}}
                                                                        aria-expanded="true"
                                                                    >
                                                                        <div className="panel-body">
                                                                            <ul>
                                                                                <li>Productions and Operations Management</li>
                                                                                <li>Executive Communication</li>
                                                                                <li>Business Environment and Ethics</li>
                                                                                <li>System Essentials</li>
                                                                                <li>Strategic Management</li>
                                                                                <li>International Business</li>
                                                                                <li>Data Warehousing &amp; Data Mining</li>
                                                                                <li>Dissertation</li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="panel panel-default">
                                                                    <div
                                                                        id="heading_accordion_2"
                                                                        role="tab"
                                                                        className="panel-heading"
                                                                    >
                                                                        <h4 className="panel-title">
                                                                            {" "}
                                                                            <a
                                                                                aria-controls="collapse_accordion_2"
                                                                                aria-expanded="false"
                                                                                href="#collapse_accordion_2"
                                                                                data-parent="#accordion_2"
                                                                                data-toggle="collapse"
                                                                                className="collapsed"
                                                                                role="button"
                                                                            >
                                                                                Capstone project
                                                                            </a>{" "}
                                                                        </h4>
                                                                    </div>
                                                                    <div
                                                                        aria-labelledby="heading_accordion_2"
                                                                        role="tabpanel"
                                                                        className="panel-collapse collapse in"
                                                                        id="collapse_accordion_2"
                                                                        style={{}}
                                                                        aria-expanded="true"
                                                                    >
                                                                        <div className="panel-body">
                                                                            <ul>
                                                                                <li>Group Presentation</li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </>
                                : ''}
                            


                            
                            {final[0].curriculum_id == '171' || final[0].curriculum_id == '223' ?
                                <>
                                    <div className="course-list-header">
                                        <div id="pg-91-1" className="panel-grid faq-mob">
                                            <div id="pgc-91-1-1" className="panel-grid-cell">
                                                <div
                                                    id="panel-91-1-1-0"
                                                    className="so-panel widget widget_accordion panel-first-child panel-last-child"
                                                >
                                                    <div className="thim-widget-accordion thim-widget-accordion-base new-accord">
                                                        <div className="thim-widget-accordion content-spritbx">
                                                            <span className="line" />
                                                            <div
                                                                aria-multiselectable="true"
                                                                role="tablist"
                                                                className=""
                                                                id="accordion_56b58d47cf7a3"
                                                            >
                                                                <div className="panel panel-default">
                                                                    <div
                                                                        id="heading_accordion_1"
                                                                        role="tab"
                                                                        className="panel-heading"
                                                                    >
                                                                        <h4 className="panel-title">
                                                                            {" "}
                                                                            <a
                                                                                aria-controls="collapse_accordion_1"
                                                                                aria-expanded="false"
                                                                                href="#collapse_accordion_1"
                                                                                data-parent="#accordion_1"
                                                                                data-toggle="collapse"
                                                                                className="collapsed"
                                                                                role="button"
                                                                            >
                                                                                COURSE – Foundation
                                                                            </a>
                                                                        </h4>
                                                                    </div>
                                                                    <div
                                                                        aria-labelledby="heading_accordion_1"
                                                                        role="tabpanel"
                                                                        className="panel-collapse collapse in"
                                                                        id="collapse_accordion_1"
                                                                        style={{}}
                                                                        aria-expanded="true"
                                                                    >
                                                                        <div className="panel-body">
                                                                            <ul className="roman ul-list-bul">
                                                                                <li>Program Structure &amp; Basic Principles </li>
                                                                                <li>
                                                                                    Programming Constructs - Loops, Functions, Arrays, etc.{" "}
                                                                                </li>
                                                                                <li>
                                                                                    An Introduction to Version Control, Git, Command-line
                                                                                    Scripting{" "}
                                                                                </li>
                                                                                <li>Basic HTML, CSS</li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="panel panel-default">
                                                                    <div
                                                                        id="heading_accordion_2"
                                                                        role="tab"
                                                                        className="panel-heading"
                                                                    >
                                                                        <h4 className="panel-title">
                                                                            {" "}
                                                                            <a
                                                                                aria-controls="collapse_accordion_2"
                                                                                aria-expanded="false"
                                                                                href="#collapse_accordion_2"
                                                                                data-parent="#accordion_2"
                                                                                data-toggle="collapse"
                                                                                className="collapsed"
                                                                                role="button"
                                                                            >
                                                                                COURSE - BACK-END SOFTWARE DEVELOPMENT
                                                                            </a>
                                                                        </h4>
                                                                    </div>
                                                                    <div
                                                                        aria-labelledby="heading_accordion_2"
                                                                        role="tabpanel"
                                                                        className="panel-collapse collapse in"
                                                                        id="collapse_accordion_2"
                                                                        style={{}}
                                                                        aria-expanded="true"
                                                                    >
                                                                        <div className="panel-body">
                                                                            <h5>
                                                                                <b>OBJECT-ORIENTED PROGRAMMING </b>
                                                                            </h5>
                                                                            <ul>
                                                                                <li>
                                                                                    Object-Oriented Paradigms of Java Programming (Classes,
                                                                                    Objects, etc.){" "}
                                                                                </li>
                                                                                <li>Object-Oriented Design </li>
                                                                                <li>
                                                                                    Exception Handling, Collections, Concurrency, etc.
                                                                                </li>
                                                                            </ul>
                                                                            <br />
                                                                            <h5>
                                                                                <b>DATA STRUCTURES</b>
                                                                            </h5>
                                                                            <ul>
                                                                                <li>
                                                                                    Linear Data Structures (Arrays, Strings, Stacks, Queues,
                                                                                    Linked Lists, etc.){" "}
                                                                                </li>
                                                                                <li>
                                                                                    Binary Trees and Binary Search Trees, Tree traversals
                                                                                </li>
                                                                            </ul>
                                                                            <br />
                                                                            <h5>
                                                                                <b>ALGORITHMS</b>
                                                                            </h5>
                                                                            <ul>
                                                                                <li>
                                                                                    Basic Algorithms: Recursion, Searching and Sorting
                                                                                    Algorithms, Greedy Algorithms{" "}
                                                                                </li>
                                                                                <li>
                                                                                    Analysis of Algorithms and Evaluating the right
                                                                                    algorithm for a problem{" "}
                                                                                </li>
                                                                                <li>
                                                                                    Advanced algorithms – Graphs, Dynamic Programming,
                                                                                    Hashing Algorithms
                                                                                </li>
                                                                            </ul>
                                                                            <br />
                                                                            <h5>
                                                                                <b>DATABASE DESIGN &amp; SYSTEMS </b>
                                                                            </h5>
                                                                            <ul>
                                                                                <li>
                                                                                    Processing, Storing &amp; Organizing Data: Data Models,{" "}
                                                                                </li>
                                                                                <li>
                                                                                    Tables, Views, SQL Queries - Simple &amp; Complex{" "}
                                                                                </li>
                                                                                <li>Database Schemas, Normalization, Keys, Indexes </li>
                                                                                <li>JDBC </li>
                                                                                <li>Introduction to NoSQL databases </li>
                                                                            </ul>
                                                                            <br />
                                                                            <h5>
                                                                                <b>SERVER-SIDE DEVELOPMENT &amp; FRAMEWORKS </b>
                                                                            </h5>
                                                                            <ul>
                                                                                <li>Spring MVC Architecture </li>
                                                                                <li>Backend Development Using Springboot Framework </li>
                                                                                <li>ORM &amp; Hibernate </li>
                                                                                <li>REST APIs</li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="panel panel-default">
                                                                    <div
                                                                        id="heading_accordion_2"
                                                                        role="tab"
                                                                        className="panel-heading"
                                                                    >
                                                                        <h4 className="panel-title">
                                                                            {" "}
                                                                            <a
                                                                                aria-controls="collapse_accordion_2"
                                                                                aria-expanded="false"
                                                                                href="#collapse_accordion_2"
                                                                                data-parent="#accordion_2"
                                                                                data-toggle="collapse"
                                                                                className="collapsed"
                                                                                role="button"
                                                                            >
                                                                                COURSE - FRONT END SOFTWARE DEVELOPMENT
                                                                            </a>
                                                                        </h4>
                                                                    </div>
                                                                    <div
                                                                        aria-labelledby="heading_accordion_2"
                                                                        role="tabpanel"
                                                                        className="panel-collapse collapse in"
                                                                        id="collapse_accordion_2"
                                                                        style={{}}
                                                                        aria-expanded="true"
                                                                    >
                                                                        <div className="panel-body">
                                                                            <h5>
                                                                                <b>FRONT-END DEVELOPMENT – HTML &amp; CSS </b>
                                                                            </h5>
                                                                            <ul>
                                                                                <li>
                                                                                    HTML &amp; CSS Interaction, CSS: Styling, Selectors, Box
                                                                                    Model, Border, Margin, Padding, etc{" "}
                                                                                </li>
                                                                                <li>Bootstrap 3 </li>
                                                                                <li>Advanced CSS and Bootstrap 4</li>
                                                                                <li>Migrating to Bootstrap 5</li>
                                                                            </ul>
                                                                            <br />
                                                                            <h5>
                                                                                <b>FRONT-END DEVELOPMENT – JAVASCRIPT </b>
                                                                            </h5>
                                                                            <ul>
                                                                                <li>
                                                                                    JavaScript Fundamentals, Hoisting, Callbacks, Promises,
                                                                                    Asynchronous JavaScript, DOM Manipulation, JSON, AJAX
                                                                                    Calls, Communication with Server, Event Listeners, Local
                                                                                    and Session Storage, etc.{" "}
                                                                                </li>
                                                                                <li>
                                                                                    Advanced JavaScript –ES6, Let &amp; Const, Arrow
                                                                                    Functions, Array Destructuring, Async/Await, Babel,
                                                                                    Webpack, etc{" "}
                                                                                </li>
                                                                            </ul>
                                                                            <br />
                                                                            <h5>
                                                                                <b>JAVASCRIPT FRAMEWORKS – Angular</b>
                                                                            </h5>
                                                                            <ul>
                                                                                <li>Overview</li>
                                                                                <li>
                                                                                    Angular Services, Routing and Single Page Applications
                                                                                </li>
                                                                                <li>Angular Forms, Angular and Reactive JavaScript</li>
                                                                                <li>Client-Server Communication</li>
                                                                            </ul>
                                                                            <br />
                                                                            <h5>
                                                                                <b>JAVASCRIPT FRAMEWORKS – REACT </b>
                                                                            </h5>
                                                                            <ul>
                                                                                <li>
                                                                                    React Introduction, React Router, Components and Single
                                                                                    Page Applications{" "}
                                                                                </li>
                                                                                <li>React Forms, Flow Architecture </li>
                                                                                <li>Redux &amp; Client-Server Communication, etc</li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="panel panel-default">
                                                                    <div
                                                                        id="heading_accordion_2"
                                                                        role="tab"
                                                                        className="panel-heading"
                                                                    >
                                                                        <h4 className="panel-title">
                                                                            {" "}
                                                                            <a
                                                                                aria-controls="collapse_accordion_2"
                                                                                aria-expanded="false"
                                                                                href="#collapse_accordion_2"
                                                                                data-parent="#accordion_2"
                                                                                data-toggle="collapse"
                                                                                className="collapsed"
                                                                                role="button"
                                                                            >
                                                                                COURSE -Mobile Application Development
                                                                            </a>
                                                                        </h4>
                                                                    </div>
                                                                    <div
                                                                        aria-labelledby="heading_accordion_2"
                                                                        role="tabpanel"
                                                                        className="panel-collapse collapse in"
                                                                        id="collapse_accordion_2"
                                                                        style={{}}
                                                                        aria-expanded="true"
                                                                    >
                                                                        <div className="panel-body">
                                                                            <h5>INTRODUCTION </h5>
                                                                            <ul>
                                                                                <li>Introduction to mobile applications </li>
                                                                                <li>Embedded systems </li>
                                                                                <li>
                                                                                    Market and business drivers for mobile applications{" "}
                                                                                </li>
                                                                                <li>Publishing and delivery of mobile applications </li>
                                                                                <li>
                                                                                    Requirements gathering and validation for mobile
                                                                                    applications.
                                                                                </li>
                                                                            </ul>
                                                                            <br />
                                                                            <h5>BASIC DESIGN </h5>
                                                                            <ul>
                                                                                <li>Introduction Basics of embedded systems design </li>
                                                                                <li>Embedded OS </li>
                                                                                <li>
                                                                                    Design constraints for mobile applications, both
                                                                                    hardware and software related{" "}
                                                                                </li>
                                                                                <li>Architecting mobile applications </li>
                                                                                <li>User interfaces for mobile applications </li>
                                                                                <li>touch events and gestures </li>
                                                                                <li>
                                                                                    Achieving quality constraints – performance, usability,
                                                                                    security, availability and modifiability.
                                                                                </li>
                                                                            </ul>
                                                                            <br />
                                                                            <h5>ADVANCED DESIGN </h5>
                                                                            <ul>
                                                                                <li>
                                                                                    Designing applications with multimedia and web access
                                                                                    capabilities{" "}
                                                                                </li>
                                                                                <li>
                                                                                    Integration with GPS and social media networking
                                                                                    applications{" "}
                                                                                </li>
                                                                                <li>
                                                                                    Accessing applications hosted in a cloud computing
                                                                                    environment{" "}
                                                                                </li>
                                                                                <li>Design patterns for mobile applications. </li>
                                                                            </ul>
                                                                            <br />
                                                                            <h5>ANDROID </h5>
                                                                            <ul>
                                                                                <li>
                                                                                    Introduction Establishing the development environment{" "}
                                                                                </li>
                                                                                <li>Android architecture </li>
                                                                                <li>Activities and views </li>
                                                                                <li>Interacting with UI </li>
                                                                                <li>Persisting data using SQLite </li>
                                                                                <li>Packaging and deployment </li>
                                                                                <li>Interaction with server-side applications </li>
                                                                                <li>
                                                                                    Using Google Maps, GPS and WIFI –Integration with social
                                                                                    media applications.
                                                                                </li>
                                                                            </ul>
                                                                            <br />
                                                                            <h5>IOS </h5>
                                                                            <ul>
                                                                                <li>Introduction to Objective C </li>
                                                                                <li>iOS features </li>
                                                                                <li>UI implementation </li>
                                                                                <li>Touch frameworks </li>
                                                                                <li>Data persistence using Core Data and SQLite </li>
                                                                                <li>
                                                                                    Location-aware applications using Core Location and Map
                                                                                    Kit{" "}
                                                                                </li>
                                                                                <li>
                                                                                    Integrating calendar and address book with social media
                                                                                    application{" "}
                                                                                </li>
                                                                                <li>Using WIFI </li>
                                                                                <li>iPhone marketplace. </li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="panel panel-default">
                                                                    <div
                                                                        id="heading_accordion_2"
                                                                        role="tab"
                                                                        className="panel-heading"
                                                                    >
                                                                        <h4 className="panel-title">
                                                                            {" "}
                                                                            <a
                                                                                aria-controls="collapse_accordion_2"
                                                                                aria-expanded="false"
                                                                                href="#collapse_accordion_2"
                                                                                data-parent="#accordion_2"
                                                                                data-toggle="collapse"
                                                                                className="collapsed"
                                                                                role="button"
                                                                            >
                                                                                COURSE -CLOUD COMPUTING
                                                                            </a>
                                                                        </h4>
                                                                    </div>
                                                                    <div
                                                                        aria-labelledby="heading_accordion_2"
                                                                        role="tabpanel"
                                                                        className="panel-collapse collapse in"
                                                                        id="collapse_accordion_2"
                                                                        style={{}}
                                                                        aria-expanded="true"
                                                                    >
                                                                        <div className="panel-body">
                                                                            <h5>VIRTUALIZATION </h5>
                                                                            <ul>
                                                                                <li>
                                                                                    Basics of Virtual Machines - Process Virtual Machines{" "}
                                                                                </li>
                                                                                <li>
                                                                                    System Virtual Machines –Emulation – Interpretation{" "}
                                                                                </li>
                                                                                <li>
                                                                                    Binary Translation - Taxonomy of Virtual Machines.
                                                                                    Virtualization –Management Virtualization{" "}
                                                                                </li>
                                                                                <li>Hardware Maximization – Architectures </li>
                                                                                <li>
                                                                                    Virtualization Management – Storage Virtualization –
                                                                                    Network Virtualization.
                                                                                </li>
                                                                            </ul>
                                                                            <br />
                                                                            <h5>VIRTUALIZATION INFRASTRUCTURE </h5>
                                                                            <ul>
                                                                                <li>
                                                                                    Comprehensive Analysis Resource Pool – Testing
                                                                                    Environment{" "}
                                                                                </li>
                                                                                <li>
                                                                                    Server Virtualization – Virtual Workloads – Provision
                                                                                    Virtual Machines{" "}
                                                                                </li>
                                                                                <li>
                                                                                    Desktop Virtualization – Application Virtualization{" "}
                                                                                </li>
                                                                                <li>
                                                                                    Implementation levels of virtualization – virtualization
                                                                                    structure{" "}
                                                                                </li>
                                                                                <li>virtualization of CPU, Memory and I/O devices </li>
                                                                                <li>
                                                                                    Virtual clusters and Resource Management –
                                                                                    Virtualization for data centre automation.{" "}
                                                                                </li>
                                                                            </ul>
                                                                            <br />
                                                                            <h5>CLOUD PLATFORM ARCHITECTURE </h5>
                                                                            <ul>
                                                                                <li>
                                                                                    Cloud deployment models: public, private, hybrid,
                                                                                    community{" "}
                                                                                </li>
                                                                                <li>
                                                                                    Categories of cloud computing: Everything as a service:
                                                                                    Infrastructure, platform, software
                                                                                </li>
                                                                                <li>A Generic Cloud Architecture Design </li>
                                                                                <li>Layered cloud Architectural Development </li>
                                                                                <li>Virtualization Support and Disaster Recovery </li>
                                                                                <li>
                                                                                    Architectural Design Challenges - Public Cloud
                                                                                    Platforms: GAE, AWS{" "}
                                                                                </li>
                                                                                <li>Inter-cloud Resource Management Tentative </li>
                                                                            </ul>
                                                                            <br />
                                                                            <h5>PROGRAMMING MODEL </h5>
                                                                            <ul>
                                                                                <li>
                                                                                    Introduction to Hadoop Framework - MapReduce, Input
                                                                                    splitting, map and reduce functions, specifying input
                                                                                    and output parameters, configuring and running a job{" "}
                                                                                </li>
                                                                                <li>Developing Map Reduce Applications –</li>
                                                                                <li>
                                                                                    Design of Hadoop file system –Setting up Hadoop Cluster{" "}
                                                                                </li>
                                                                                <li>
                                                                                    Cloud Software Environments -Eucalyptus, Open Nebula,
                                                                                    Open Stack, Nimbus{" "}
                                                                                </li>
                                                                            </ul>
                                                                            <br />
                                                                            <h5>CLOUD SECURITY </h5>
                                                                            <ul>
                                                                                <li>
                                                                                    Cloud Infrastructure security: network, host, and
                                                                                    application-level{" "}
                                                                                </li>
                                                                                <li>
                                                                                    aspects of data security, provider data and its
                                                                                    security,{" "}
                                                                                </li>
                                                                                <li>Identity and access management architecture, </li>
                                                                                <li>
                                                                                    IAM practices in the cloud, SaaS, PaaS, IaaS
                                                                                    availability in the cloud{" "}
                                                                                </li>
                                                                                <li>Key privacy issues in the cloud</li>
                                                                                <li>Cloud Security and Trust Management </li>
                                                                            </ul>
                                                                            <br />
                                                                            <h5>CLOUD AND DEVOPS </h5>
                                                                            <ul>
                                                                                <li>
                                                                                    DevOps: Motivation-Cloud as a platform-Operations-
                                                                                </li>
                                                                                <li>
                                                                                    Deployment Pipeline: Overall Architecture Building and
                                                                                    Testing-Deployment- Case study: Migrating to
                                                                                    Microservices
                                                                                </li>
                                                                                <li>
                                                                                    Origin of DevOps - The developers versus operations
                                                                                    dilemma{" "}
                                                                                </li>
                                                                                <li>
                                                                                    Key characteristics of a DevOps culture – Deploying a
                                                                                    Web Application - Creating and configuring an account{" "}
                                                                                </li>
                                                                                <li>
                                                                                    Creating a web server - Managing infrastructure with
                                                                                    Cloud Formation{" "}
                                                                                </li>
                                                                                <li>Adding a configuration management system </li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="panel panel-default">
                                                                    <div
                                                                        id="heading_accordion_2"
                                                                        role="tab"
                                                                        className="panel-heading"
                                                                    >
                                                                        <h4 className="panel-title">
                                                                            {" "}
                                                                            <a
                                                                                aria-controls="collapse_accordion_2"
                                                                                aria-expanded="false"
                                                                                href="#collapse_accordion_2"
                                                                                data-parent="#accordion_2"
                                                                                data-toggle="collapse"
                                                                                className="collapsed"
                                                                                role="button"
                                                                            >
                                                                                COURSE -Full Stack Security
                                                                            </a>
                                                                        </h4>
                                                                    </div>
                                                                    <div
                                                                        aria-labelledby="heading_accordion_2"
                                                                        role="tabpanel"
                                                                        className="panel-collapse collapse in"
                                                                        id="collapse_accordion_2"
                                                                        style={{}}
                                                                        aria-expanded="true"
                                                                    >
                                                                        <div className="panel-body">
                                                                            <h5>INFORMATION SECURITY MANAGEMENT </h5>
                                                                            <ul>
                                                                                <li>Scope of Information Security Management </li>
                                                                                <li>Domains of Information Security </li>
                                                                                <li>
                                                                                    Threat - Common Attacks - Impact of Security Breaches
                                                                                </li>
                                                                                <li>Protecting Mission Critical Systems</li>
                                                                                <li>Information Security from the Ground Up </li>
                                                                                <li>Physical Security </li>
                                                                                <li>Data Security </li>
                                                                                <li>Network and System Security </li>
                                                                                <li>
                                                                                    Wireless Security; Security Monitoring and Effectiveness{" "}
                                                                                </li>
                                                                            </ul>
                                                                            <br />
                                                                            <h5>HACKING METHODOLOGY </h5>
                                                                            <ul>
                                                                                <li>History of Hacking </li>
                                                                                <li>Recognizing Web Application Security </li>
                                                                                <li>
                                                                                    Threats – Preventing Break-ins by thinking like a
                                                                                    Hacker.{" "}
                                                                                </li>
                                                                                <li>
                                                                                    How to Avoid Becoming a Code Grinder: Thinking Creative
                                                                                    When Coding{" "}
                                                                                </li>
                                                                                <li>Building Functional and Secure Web Applications </li>
                                                                            </ul>
                                                                            <br />
                                                                            <h5>CODE AUDITING AND REVERSE ENGINEERING </h5>
                                                                            <ul>
                                                                                <li>Introduction </li>
                                                                                <li>How to Effectively Trace through a Program </li>
                                                                                <li>
                                                                                    Auditing and Reviewing Selected Programming Languages{" "}
                                                                                </li>
                                                                                <li>Looking for Vulnerabilities </li>
                                                                            </ul>
                                                                            <br />
                                                                            <h5>SECURING JAVA CODE</h5>
                                                                            <h6>
                                                                                <b>Introduction</b>
                                                                            </h6>
                                                                            <ul>
                                                                                <li>Overview of the Java Security Architecture </li>
                                                                                <li>How Java Handles Security </li>
                                                                                <li>Potential Security Weakness in Java </li>
                                                                            </ul>
                                                                            <br />
                                                                            <h5>DEVELOPING SECURITY-ENABLED APPLICATIONS </h5>
                                                                            <ul>
                                                                                <li>Introduction </li>
                                                                                <li>
                                                                                    The Benefits of using Security Enabled Applications{" "}
                                                                                </li>
                                                                                <li>Types of Security used in Applications </li>
                                                                                <li>Basics of PKI </li>
                                                                                <li>Using PKI to secure Web Applications </li>
                                                                                <li>Testing your Security Implementation </li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="panel panel-default">
                                                                    <div
                                                                        id="heading_accordion_2"
                                                                        role="tab"
                                                                        className="panel-heading"
                                                                    >
                                                                        <h4 className="panel-title">
                                                                            {" "}
                                                                            <a
                                                                                aria-controls="collapse_accordion_2"
                                                                                aria-expanded="false"
                                                                                href="#collapse_accordion_2"
                                                                                data-parent="#accordion_2"
                                                                                data-toggle="collapse"
                                                                                className="collapsed"
                                                                                role="button"
                                                                            >
                                                                                COURSE -Agile
                                                                            </a>
                                                                        </h4>
                                                                    </div>
                                                                    <div
                                                                        aria-labelledby="heading_accordion_2"
                                                                        role="tabpanel"
                                                                        className="panel-collapse collapse in"
                                                                        id="collapse_accordion_2"
                                                                        style={{}}
                                                                        aria-expanded="true"
                                                                    >
                                                                        <div className="panel-body">
                                                                            <h5>INTRODUCTION</h5>
                                                                            <ul>
                                                                                <li>Software is new product development </li>
                                                                                <li>Iterative development </li>
                                                                                <li>
                                                                                    Risk (Driven and Client (Driven iterative planning{" "}
                                                                                </li>
                                                                                <li>Time boxed iterative development </li>
                                                                                <li>
                                                                                    During the Iteration, No changes from external
                                                                                    stakeholders –Evolutionary and adaptive Development
                                                                                    (Evolutionary requirements analysis{" "}
                                                                                </li>
                                                                                <li>
                                                                                    Early “Top Ten” high (level requirements and skilful
                                                                                    analysis Evolutionary and adaptive planning{" "}
                                                                                </li>
                                                                                <li>Incremental delivery </li>
                                                                                <li>Evolutionary delivery </li>
                                                                                <li>The most common mistake </li>
                                                                                <li>Specific iterative and Evolutionary methods.</li>
                                                                            </ul>
                                                                            <br />
                                                                            <h5>AGILE AND ITS SIGNIFICANCE </h5>
                                                                            <ul>
                                                                                <li>Agile development </li>
                                                                                <li>Classification of methods </li>
                                                                                <li>The agile manifesto and Principles </li>
                                                                                <li>Agile project management </li>
                                                                                <li>Embrace communication and feedback </li>
                                                                                <li>Simple practices and project tools </li>
                                                                                <li>Empirical Vs defined and prescriptive Process </li>
                                                                                <li>
                                                                                    Principle (based versus Rule (Based – Sustainable
                                                                                    discipline: The human touch{" "}
                                                                                </li>
                                                                                <li>Team as a complex adaptive system </li>
                                                                                <li>
                                                                                    Agile hype – Specific agile methods. The facts of change
                                                                                    on software projects
                                                                                </li>
                                                                                <li>Key motivations for iterative Development </li>
                                                                                <li>Meeting the requirements challenge iteratively </li>
                                                                                <li>Problems with the Waterfall. Research evidence </li>
                                                                                <li>Early historical project evidence </li>
                                                                                <li>Standards (Body evidence </li>
                                                                                <li>Expert and thought leader evidence </li>
                                                                                <li>A Business case for iterative development </li>
                                                                                <li>The historical accident of waterfall validity.</li>
                                                                            </ul>
                                                                            <br />
                                                                            <h5>AGILE METHODOLOGY </h5>
                                                                            <ul>
                                                                                <li>Method overview </li>
                                                                                <li>
                                                                                    Lifecycle – Work products, Roles and Practices values{" "}
                                                                                </li>
                                                                                <li>Common mistakes and misunderstandings </li>
                                                                                <li>Sample projects </li>
                                                                                <li>Process mixtures </li>
                                                                                <li>Adoption strategies – Fact versus fantasy </li>
                                                                                <li>Strengths versus “Other” history.</li>
                                                                            </ul>
                                                                            <br />
                                                                            <h5>SCRUM </h5>
                                                                            <ul>
                                                                                <li>Concepts –deliverable and methods. XP: </li>
                                                                                <li>
                                                                                    Concepts –deliverable and methods Unified process:{" "}
                                                                                </li>
                                                                                <li>
                                                                                    Concepts- deliverable-methods. EVE: Concepts-
                                                                                    Methods-deliverable.{" "}
                                                                                </li>
                                                                                <li>
                                                                                    EVO: Method Overview, Lifecycle, Work Products, Roles
                                                                                    and practices, Common mistakes and Misunderstandings,
                                                                                    Sample Projects.{" "}
                                                                                </li>
                                                                            </ul>
                                                                            <br />
                                                                            <h5>AGILE PRACTICING AND TESTING </h5>
                                                                            <ul>
                                                                                <li>Project management </li>
                                                                                <li>Environment </li>
                                                                                <li>Requirements </li>
                                                                                <li>Test </li>
                                                                                <li>The agile alliances </li>
                                                                                <li>The manifesto </li>
                                                                                <li>Supporting the values </li>
                                                                                <li>Agile testing </li>
                                                                                <li>
                                                                                    Nine principles and six concrete practices for testing
                                                                                    on agile teams
                                                                                </li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="panel panel-default">
                                                                    <div
                                                                        id="heading_accordion_2"
                                                                        role="tab"
                                                                        className="panel-heading"
                                                                    >
                                                                        <h4 className="panel-title">
                                                                            {" "}
                                                                            <a
                                                                                aria-controls="collapse_accordion_2"
                                                                                aria-expanded="false"
                                                                                href="#collapse_accordion_2"
                                                                                data-parent="#accordion_2"
                                                                                data-toggle="collapse"
                                                                                className="collapsed"
                                                                                role="button"
                                                                            >
                                                                                COURSE -Design Thinking for Innovation
                                                                            </a>
                                                                        </h4>
                                                                    </div>
                                                                    <div
                                                                        aria-labelledby="heading_accordion_2"
                                                                        role="tabpanel"
                                                                        className="panel-collapse collapse in"
                                                                        id="collapse_accordion_2"
                                                                        style={{}}
                                                                        aria-expanded="true"
                                                                    >
                                                                        <div className="panel-body">
                                                                            <h5>INTRODUCTION</h5>
                                                                            <ul>
                                                                                <li>Why Design? - Four Questions, Ten Tools </li>
                                                                                <li>Principles of Design Thinking </li>
                                                                                <li>The process of Design Thinking </li>
                                                                                <li>How to plan a Design Thinking project. </li>
                                                                            </ul>
                                                                            <br />
                                                                            <h5>UNDERSTAND, OBSERVE AND DEFINE THE PROBLEM </h5>
                                                                            <ul>
                                                                                <li>Search field determination </li>
                                                                                <li>Problem clarification </li>
                                                                                <li>Understanding of the problem </li>
                                                                                <li>Problem analysis </li>
                                                                                <li>Reformulation of the problem </li>
                                                                                <li>Observation Phase </li>
                                                                                <li>Empathetic design </li>
                                                                                <li>Tips for observing </li>
                                                                                <li>Methods for Empathetic Design </li>
                                                                                <li>Point-of-View Phase </li>
                                                                                <li>Characterization of the target group </li>
                                                                                <li>Description of customer needs. </li>
                                                                            </ul>
                                                                            <br />
                                                                            <h5>IDEATION AND PROTOTYPING </h5>
                                                                            <ul>
                                                                                <li>Ideate Phase </li>
                                                                                <li>The creative process and creative principles </li>
                                                                                <li>Creativity techniques </li>
                                                                                <li>Evaluation of ideas </li>
                                                                                <li>Prototype Phase </li>
                                                                                <li>Lean Startup Method for Prototype Development </li>
                                                                                <li>Visualization and presentation techniques. </li>
                                                                            </ul>
                                                                            <br />
                                                                            <h5>TESTING AND IMPLEMENTATION </h5>
                                                                            <ul>
                                                                                <li>Test Phase </li>
                                                                                <li>Tips for interviews </li>
                                                                                <li>Tips for surveys </li>
                                                                                <li>Kano Model </li>
                                                                                <li>Desirability Testing - How to conduct workshops </li>
                                                                                <li>Requirements for the space </li>
                                                                                <li>Material requirements </li>
                                                                                <li>Agility for Design Thinking. </li>
                                                                            </ul>
                                                                            <br />
                                                                            <h5>FUTURE </h5>
                                                                            <ul>
                                                                                <li>Design Thinking meets the corporation </li>
                                                                                <li>The New Social Contract </li>
                                                                                <li>Design Activism </li>
                                                                                <li>Designing Tomorrow. </li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="panel panel-default">
                                                                    <div
                                                                        id="heading_accordion_1"
                                                                        role="tab"
                                                                        className="panel-heading"
                                                                    >
                                                                        <h4 className="panel-title">
                                                                            {" "}
                                                                            <a
                                                                                aria-controls="collapse_accordion_1"
                                                                                aria-expanded="false"
                                                                                href="#collapse_accordion_1"
                                                                                data-parent="#accordion_1"
                                                                                data-toggle="collapse"
                                                                                className="collapsed"
                                                                                role="button"
                                                                            >
                                                                                COURSE -Project Management
                                                                            </a>
                                                                        </h4>
                                                                    </div>
                                                                    <div
                                                                        aria-labelledby="heading_accordion_1"
                                                                        role="tabpanel"
                                                                        className="panel-collapse collapse in"
                                                                        id="collapse_accordion_1"
                                                                        style={{}}
                                                                        aria-expanded="true"
                                                                    >
                                                                        <div className="panel-body">
                                                                            <h6>PMP &gt; 5 yrs Exp</h6>
                                                                            <h5>Creating A High Performing Team</h5>
                                                                            <ul>
                                                                                <li>Build A Team</li>
                                                                                <li>Define Team Ground Rules</li>
                                                                                <li>Negotiate Project Agreements</li>
                                                                                <li>Empower Team Members and Stakeholders</li>
                                                                                <li>Train Team Members and Stakeholders</li>
                                                                                <li>Engage And Support Virtual Teams</li>
                                                                                <li>Build Shared Understanding About a Project</li>
                                                                            </ul>
                                                                            <br />
                                                                            <h5>Starting The Project</h5>
                                                                            <ul>
                                                                                <li>
                                                                                    Determine Appropriate Project Methodology/Methods And
                                                                                    Practices
                                                                                </li>
                                                                                <li>Plan And Manage Scope</li>
                                                                                <li>Plan And Manage Budget And Resources</li>
                                                                                <li>Plan And Manage Schedule</li>
                                                                                <li>
                                                                                    Plan And Manage Quality Of Products And Deliverables
                                                                                </li>
                                                                                <li>Integrate Project Planning Activities</li>
                                                                                <li>Plan And Manage Procurement</li>
                                                                                <li>Establish Project Governance Structure</li>
                                                                                <li>Plan And Manage Project/Phase Closure</li>
                                                                            </ul>
                                                                            <br />
                                                                            <h5>Doing The Work</h5>
                                                                            <ul>
                                                                                <li>Assess And Manage Risks</li>
                                                                                <li>Execute Project To Deliver Business Value</li>
                                                                                <li>Manage Communications</li>
                                                                                <li>Engage Stakeholders</li>
                                                                                <li>Create Project Artifacts</li>
                                                                                <li>Manage Project Changes</li>
                                                                                <li>Manage Project Issues</li>
                                                                                <li>Ensure Knowledge Transfer for Project Continuity</li>
                                                                            </ul>
                                                                            <br />
                                                                            <h5>Keeping The Team On Track</h5>
                                                                            <ul>
                                                                                <li>Lead A Team</li>
                                                                                <li>Support Team Performance</li>
                                                                                <li>
                                                                                    Address And Remove Impediments, Obstacles, And Blockers
                                                                                </li>
                                                                                <li>Manage Conflict</li>
                                                                                <li>Collaborate With Stakeholders</li>
                                                                                <li>Mentor Relevant Stakeholders</li>
                                                                                <li>
                                                                                    Apply Emotional Intelligence to Promote Team Performance
                                                                                </li>
                                                                            </ul>
                                                                            <br />
                                                                            <h5>Keeping The Business In Mind</h5>
                                                                            <ul>
                                                                                <li>Manage Compliance Requirements</li>
                                                                                <li>Evaluate And Deliver Project Benefits and Value</li>
                                                                                <li>Evaluate And Address Internal and External</li>
                                                                                <li>Business Environment Changes</li>
                                                                                <li>Support Organizational Change</li>
                                                                                <li>Employ Continuous Process Improvement</li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="panel panel-default">
                                                                    <div
                                                                        id="heading_accordion_1"
                                                                        role="tab"
                                                                        className="panel-heading"
                                                                    >
                                                                        <h4 className="panel-title">
                                                                            {" "}
                                                                            <a
                                                                                aria-controls="collapse_princecr"
                                                                                aria-expanded="false"
                                                                                href="#collapse_princecr"
                                                                                data-parent="#accordion_1"
                                                                                data-toggle="collapse"
                                                                                className="collapsed"
                                                                                role="button"
                                                                            >
                                                                                OR - COURSE - PRINCE 2 FOUNDATION PRACTITIONER TRAINING
                                                                                &gt;5 yrs. Exp
                                                                            </a>
                                                                        </h4>
                                                                    </div>
                                                                    <div
                                                                        aria-labelledby="heading_accordion_1"
                                                                        role="tabpanel"
                                                                        className="panel-collapse collapse in"
                                                                        id="collapse_princecr"
                                                                        style={{}}
                                                                        aria-expanded="true"
                                                                    >
                                                                        <div className="panel-body">
                                                                            <h5>Foundation</h5>
                                                                            <ul>
                                                                                <li>
                                                                                    Introduction to PRINCE2<sup>®</sup> and Project
                                                                                    Management
                                                                                </li>
                                                                                <li>
                                                                                    The 7 Principles of PRINCE2<sup>®</sup>
                                                                                </li>
                                                                                <li>
                                                                                    The 7 Themes of PRINCE2<sup>®</sup>
                                                                                </li>
                                                                                <li>
                                                                                    The 7 Processes of PRINCE2<sup>®</sup>
                                                                                </li>
                                                                                <li>
                                                                                    The Tailoring of PRINCE2<sup>®</sup>
                                                                                </li>
                                                                            </ul>
                                                                            <br />
                                                                            <h5>PRACTITIONER</h5>
                                                                            <ul>
                                                                                <li>Starting Up a Project (SU)and its products</li>
                                                                                <li>Initiating a Project (IP) and its products</li>
                                                                                <li>Managing Stage Boundaries (SB) and its products</li>
                                                                                <li>Closing a Project (CP)and its products</li>
                                                                                <li>
                                                                                    The Tailoring of PRINCE2<sup>®</sup>
                                                                                </li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </>
                                : ''}
                            


                            
                            {final[0].curriculum_id == '267' ?
                                <>
                                    <div className="course-list-header">
                                        <div id="pg-91-1" className="panel-grid faq-mob">
                                            <div id="pgc-91-1-1" className="panel-grid-cell">
                                                <div
                                                    id="panel-91-1-1-0"
                                                    className="so-panel widget widget_accordion panel-first-child panel-last-child"
                                                >
                                                    <div className="thim-widget-accordion thim-widget-accordion-base new-accord">
                                                        <div className="thim-widget-accordion">
                                                            <span className="line" />
                                                            <div
                                                                aria-multiselectable="true"
                                                                role="tablist"
                                                                className=""
                                                                id="accordion_56b58d47cf7a3"
                                                            >
                                                                <div className="panel panel-default">
                                                                    <div
                                                                        id="heading_accordion_1"
                                                                        role="tab"
                                                                        className="panel-heading"
                                                                    >
                                                                        <h4 className="panel-title">
                                                                            <a
                                                                                aria-controls="collapse_accordion_1"
                                                                                aria-expanded="false"
                                                                                href="#collapse_accordion_1"
                                                                                data-parent="#accordion_1"
                                                                                data-toggle="collapse"
                                                                                className="collapsed"
                                                                                role="button"
                                                                            >
                                                                                Introduction
                                                                            </a>
                                                                        </h4>
                                                                    </div>
                                                                    <div
                                                                        aria-labelledby="heading_accordion_1"
                                                                        role="tabpanel"
                                                                        className="panel-collapse collapse in"
                                                                        id="collapse_accordion_1"
                                                                        style={{}}
                                                                        aria-expanded="true"
                                                                    >
                                                                        <div className="panel-body">
                                                                            <h5>PHP [Hypertext Preprocessor]</h5>
                                                                            <p>
                                                                                PHP is the most popular server side scripting language
                                                                                used to develop dynamic web applications. It is an Open
                                                                                Source. In PHP there are many frameworks which follow MVC
                                                                                Design Pattern like Larvel , Code Igniter , Zend etc and
                                                                                CMS also like Word press , Drupal , Magneto etc.]
                                                                            </p>
                                                                            <br />
                                                                            <h5 className='mt-5'>Hyper Text Markup Language (HTML 5)</h5>
                                                                            <ul>
                                                                                <li> Introduction To HTML</li>
                                                                                <li> Structure of HTML</li>
                                                                                <li> Attributes &amp; Values</li>
                                                                                <li> Tags Image Tag</li>
                                                                                <li> Link Tags (Text &amp;Image) Marquee Tag</li>
                                                                                <li> List Tag (Ordered &amp;Unordered) Table Tag</li>
                                                                                <li> Form Tags</li>
                                                                                <li> Audio , Video</li>
                                                                                <li> BlockLevel and InlineElements</li>
                                                                                <li> DIV Tag</li>
                                                                            </ul>
                                                                            <h5 className='mt-5'>HTML5 New Tags</h5>
                                                                            <ul>
                                                                                <li> Header , Footer , Nav</li>
                                                                                <li> Section , Article ,Aside </li>
                                                                                <li> Form Elements</li>
                                                                            </ul>
                                                                            <h5 className='mt-5'>Style Sheet (CSS 3)</h5>
                                                                            <ul>
                                                                                <li> Types of style sheet</li>
                                                                                <li> About CSS Selectors</li>
                                                                                <li> About CSS Properties</li>
                                                                                <li> Background Properties</li>
                                                                                <li> Box Properties</li>
                                                                                <li> Border Properties</li>
                                                                                <li> Positioning Properties</li>
                                                                                <li> CSS Menu Design</li>
                                                                                <li> CSS Animation</li>
                                                                            </ul>
                                                                            <h5 className='mt-5'>Bootstrap 4 (Responsive Design)</h5>
                                                                            <ul>
                                                                                <li> Introduction to Responsive Design</li>
                                                                                <li> Introduction to Bootstrap</li>
                                                                                <li> Bootstrap Grid System</li>
                                                                                <li> Grid Classes</li>
                                                                                <li> Equal Columns , Unequal Columns</li>
                                                                                <li> Layout Creation</li>
                                                                                <li> Colors , Tables , Images</li>
                                                                                <li> List Groups and Nav Bars</li>
                                                                                <li> Pagination , DropDown , Carousel</li>
                                                                                <li> Form Inputs and Buttons</li>
                                                                                <li> Modal , Toast , Alert </li>
                                                                            </ul>
                                                                            <h5 className='mt-5'>PHP language building blocks</h5>
                                                                            <ul>
                                                                                <li>Installation of PHP</li>
                                                                                <li>PHP delimiters</li>
                                                                                <li>Variable initialization with PHP</li>
                                                                                <li>PHP Data types</li>
                                                                                <li>PHP Constants</li>
                                                                                <li>PHP Operators</li>
                                                                            </ul>
                                                                            <h5 className='mt-5'>Conditional Statements</h5>
                                                                            <ul>
                                                                                <li>If else</li>
                                                                                <li>If else if else</li>
                                                                                <li>Nested If</li>
                                                                                <li>Switch Case</li>
                                                                                <li>Jump Statements ( Break , Continue , Exit )</li>
                                                                            </ul>
                                                                            <h5 className='mt-5'>Looping (Iteration)</h5>
                                                                            <ul>
                                                                                <li>For loop</li>
                                                                                <li>While loop</li>
                                                                                <li>Do While Loop</li>
                                                                                <li>Nested Loop</li>
                                                                            </ul>
                                                                            <h5 className='mt-5'>INTRODUCING ARRAY</h5>
                                                                            <ul>
                                                                                <li>Index based arrays</li>
                                                                                <li>Associative Array</li>
                                                                                <li>ulti-Dimensional Array</li>
                                                                            </ul>
                                                                            <h5 className='mt-5'>MANIPULATION USER INPUT</h5>
                                                                            <ul>
                                                                                <li>Presenting the user with input</li>
                                                                                <li>
                                                                                    Retrieving form data with $_POST,$_GET and $_ REQUEST
                                                                                </li>
                                                                                <li>Preserving Data in Form inputs</li>
                                                                            </ul>
                                                                            <h5 className='mt-5'>FUNCTION</h5>
                                                                            <ul>
                                                                                <li>Introducing Functions</li>
                                                                                <li>Deﬁne functions</li>
                                                                                <li>Using parameters</li>
                                                                                <li>Returning values</li>
                                                                                <li>Call By Value &amp; Call By reference</li>
                                                                                <li>Reusing Codes</li>
                                                                                <li>Array , String , Math , Date functions</li>
                                                                                <li>Super Global Array Variables</li>
                                                                                <li>Deleting Cookies</li>
                                                                                <li>Implementing Query String</li>
                                                                            </ul>
                                                                            <h5 className='mt-5'>INTRODUCING WITH THE FILE SYSTEM (FILE & HANDLING)</h5>
                                                                            <ul>
                                                                                <li>Saving data for later using ﬁle system.</li>
                                                                                <li>Opening aﬁle</li>
                                                                                <li>Creating and Writing to a ﬁle</li>
                                                                                <li>Creating and Writing to a ﬁle</li>
                                                                                <li>Using other useful ﬁle functions</li>
                                                                                <li>Create a directory</li>
                                                                                <li>Remove a directory</li>
                                                                                <li>File Uploading &amp; Downloading</li>
                                                                                <li>File uploading Concepts</li>
                                                                                <li>Multiple File Upload</li>
                                                                            </ul>
                                                                            <h5 className='mt-5'>STATE MANAGEMENT</h5>
                                                                            <ul>
                                                                                <li>Session, Cookie , Query String , Hidden Field</li>
                                                                                <li>What is Session ?</li>
                                                                                <li>Starting a Session</li>
                                                                                <li>
                                                                                    Registering Session variables Using Session Variables
                                                                                </li>
                                                                                <li>Destroying the variablesandSession</li>
                                                                                <li>What is a Cookie?</li>
                                                                                <li>
                                                                                    Setting Cookies with PHP Using Cookies with Sessions
                                                                                </li>
                                                                                <li>Deleting Cookies</li>
                                                                                <li>Implementing Query String</li>
                                                                            </ul>
                                                                            <h5 className='mt-5'>MYSQL DATABASE</h5>
                                                                            <ul>
                                                                                <li>Relational Database Concept and technology </li>
                                                                                <li>Web Database Design</li>
                                                                                <li>Web Database Architecture</li>
                                                                                <li>Creating a MySQL Database</li>
                                                                                <li>Creating Database</li>
                                                                                <li>Tables Column</li>
                                                                                <li>Data Types</li>
                                                                                <li>Implementing Insert/Delete/Update and select</li>
                                                                                <li>Query Aggregate</li>
                                                                                <li>Functions</li>
                                                                                <li>Having and Group By Clause Joining Table</li>
                                                                                <li>
                                                                                    Implementing Primary key, Unique Key, Composite key,
                                                                                    foreign key, default constraint etc.
                                                                                </li>
                                                                                <li>Joining Table</li>
                                                                                <li>Dropping Tables and Databases</li>
                                                                                <li>Introduction to Phpmyadmin</li>
                                                                            </ul>
                                                                            <h5 className='mt-5'> DATABASE CONNECTION</h5>
                                                                            <ul>
                                                                                <li>My SQL Connectivity</li>
                                                                                <li>Procedural Connectivity</li>
                                                                                <li>Object Oriented Connectivity</li>
                                                                                <li>PDO Connectivity</li>
                                                                            </ul>
                                                                            <h5 className='mt-5'>JQUERY WITH AJAX</h5>
                                                                            <ul>
                                                                                <li>jQuery introduction</li>
                                                                                <li>jQuery Selectors , events , DOM , animations</li>
                                                                                <li>jQuery accordions, carousel, tab</li>
                                                                                <li>Ajax Implementation</li>
                                                                                <li>CRUD Operation with AJAX</li>
                                                                            </ul>
                                                                            <h5 className='mt-5'>OBJECT ORIENTED PHP</h5>
                                                                            <ul>
                                                                                <li>Object oriented concepts</li>
                                                                                <li>Classes, objects and operations</li>
                                                                                <li>Class attributes</li>
                                                                                <li>Access Modiﬁer Constructor &amp; Destructor</li>
                                                                                <li>Inheritance Static method Type</li>
                                                                                <li>Hinting Object</li>
                                                                                <li>Cloning Abstract class</li>
                                                                                <li>Final keyword Inheritance</li>
                                                                            </ul>
                                                                            <h5 className='mt-5'>ADVANCE PHP TECHNIQUES</h5>
                                                                            <ul>
                                                                                <li>Implementing Captcha , PDF Generation</li>
                                                                                <li>Excel or CSV Generation Email with PHP</li>
                                                                                <li>Implementing Pagination</li>
                                                                                <li>SQL Injection</li>
                                                                                <li>Web Services with JSON</li>
                                                                                <li>Payment Gateway</li>
                                                                                <li>Integration Error tracking and debugging</li>
                                                                                <li>Exception Handling</li>
                                                                            </ul>
                                                                            <h5 className='mt-5'>DEVELOPING A DYNAMIC WEB APPLICATION</h5>
                                                                            <h5>CODEIGNITER (Frameworks&nbsp;)&nbsp;</h5>
                                                                            <h5 className='mt-3'>Introduction</h5>
                                                                            <ul>
                                                                                <li>Inroduction Of Controller</li>
                                                                                <li>
                                                                                    CI_ Controller , Request Parameters, Actions Controller
                                                                                </li>
                                                                                <li>Methods &amp; Attributes</li>
                                                                                <li>Creating</li>
                                                                                <li>Core Controller Class</li>
                                                                            </ul>
                                                                            <h5 className='mt-5'>VIEWS</h5>
                                                                            <ul>
                                                                                <li>Creating Views</li>
                                                                                <li>Layouts (Use Image, CSS, Bootstrap, JS)</li>
                                                                                <li>Calling in controller</li>
                                                                                <li>Helpers (FormHelper , HTML Helpers) in Views</li>
                                                                            </ul>
                                                                            <h5 className='mt-5'>MODELS</h5>
                                                                            <ul>
                                                                                <li>Creating Model</li>
                                                                                <li>How to Load in contorller</li>
                                                                                <li>Calling in Controller</li>
                                                                                <li>Apply The Business logic</li>
                                                                                <li>Creating Core Model Class</li>
                                                                            </ul>
                                                                            <h5 className='mt-5'>HELPERS</h5>
                                                                            <ul>
                                                                                <li>Introduction</li>
                                                                                <li>How to load Helper</li>
                                                                                <li>Apply To Controller and Views</li>
                                                                                <li>Creating Own Helper</li>
                                                                                <li>How to override other Helper</li>
                                                                                <li> Seeding Forms and Validation </li>
                                                                                <li> Setting up laravel form </li>
                                                                                <li> Validation a form </li>
                                                                                <li> Creating Admin Pos </li>
                                                                                <li> Creating a Frontend</li>
                                                                                <li> Setting up the Blog</li>
                                                                                <li> Securing the admin panel </li>
                                                                                <li> Handling routing </li>
                                                                                <li> Establishing an HTML View</li>
                                                                                <li> Creating Tables with Schema Builder</li>
                                                                                <li> Enabling Version Control with Migrations </li>
                                                                                <li> Querying with eloquent</li>
                                                                                <li> ORM Displaying </li>
                                                                                <li> Laravel Code</li>
                                                                                <li> Working with Blade</li>
                                                                                <li> Templating Deﬁning</li>
                                                                                <li> Conditions Integrating form elements</li>
                                                                                <li> Setting up Authentication</li>
                                                                                <li> Creating a registeration form</li>
                                                                                <li> Securing Content</li>
                                                                                <li> Authenticating users in Laravel Application</li>
                                                                                <li> Restful API’s Creation </li>
                                                                                <li>
                                                                                    {" "}
                                                                                    Lumen : Micro-framework (API’s and Micro Services)
                                                                                </li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </>
                                : ''}
                            


                            
                            {final[0].curriculum_id == '1' ?
                                <>
                                    <div className="course-list-header">
                                        <div id="pg-91-1" className="panel-grid faq-mob">
                                            <div id="pgc-91-1-1" className="panel-grid-cell">
                                                <div
                                                    id="panel-91-1-1-0"
                                                    className="so-panel widget widget_accordion panel-first-child panel-last-child"
                                                >
                                                    <div className="thim-widget-accordion thim-widget-accordion-base new-accord">
                                                        <div className="thim-widget-accordion">
                                                            <span className="line" />
                                                            <div
                                                                aria-multiselectable="true"
                                                                role="tablist"
                                                                className=""
                                                                id="accordion_56b58d47cf7a3"
                                                            >
                                                                <div className="panel panel-default">
                                                                    <div
                                                                        id="heading_accordion_1"
                                                                        role="tab"
                                                                        className="panel-heading"
                                                                    >
                                                                        <h4 className="panel-title">
                                                                            <a
                                                                                aria-controls="collapse_accordion_1"
                                                                                aria-expanded="false"
                                                                                href="#collapse_accordion_1"
                                                                                data-parent="#accordion_1"
                                                                                data-toggle="collapse"
                                                                                className="collapsed"
                                                                                role="button"
                                                                            >
                                                                                PMP Course Curriculum:
                                                                            </a>
                                                                        </h4>
                                                                    </div>
                                                                    <div
                                                                        aria-labelledby="heading_accordion_1"
                                                                        role="tabpanel"
                                                                        className="panel-collapse collapse in"
                                                                        id="collapse_accordion_1"
                                                                        style={{}}
                                                                        aria-expanded="true"
                                                                    >
                                                                        <div className="panel-body">
                                                                            <h5>Lesson 01 - Creating A High Performing Team </h5>
                                                                            <ul>
                                                                                <li> Build A Team </li>
                                                                                <li> Define Team Ground Rules </li>
                                                                                <li> Negotiate Project Agreements </li>
                                                                                <li> Empower Team Members And Stakeholders </li>
                                                                                <li> Train Team Members And Stakeholders </li>
                                                                                <li> Engage And Support Virtual Teams </li>
                                                                                <li> Build Shared Understanding About A Project </li>
                                                                            </ul>
                                                                            <h5 className='mt-5'>Lesson 02 - Starting The Project </h5>
                                                                            <ul>
                                                                                <li>
                                                                                    {" "}
                                                                                    Determine Appropriate Project Methodology/Methods And
                                                                                    Practices{" "}
                                                                                </li>
                                                                                <li> Plan And Manage Scope </li>
                                                                                <li> Plan And Manage Budget And Resources </li>
                                                                                <li> Plan And Manage Schedule </li>
                                                                                <li>
                                                                                    {" "}
                                                                                    Plan And Manage Quality Of Products And Deliverables{" "}
                                                                                </li>
                                                                                <li> Integrate Project Planning Activities </li>
                                                                                <li> Plan And Manage Procurement </li>
                                                                                <li> Establish Project Governance Structure </li>
                                                                                <li> Plan And Manage Project/Phase Closure </li>
                                                                            </ul>
                                                                            <h5 className='mt-5'>Lesson 03 - Doing The Work </h5>
                                                                            <ul>
                                                                                <li> Assess And Manage Risks </li>
                                                                                <li> Execute Project To Deliver Business Value </li>
                                                                                <li> Manage Communications </li>
                                                                                <li> Engage Stakeholders </li>
                                                                                <li> Create Project Artifacts </li>
                                                                                <li> Manage Project Changes</li>
                                                                                <li> Manage Project Issues </li>
                                                                                <li>
                                                                                    {" "}
                                                                                    Ensure Knowledge Transfer For Project Continuity{" "}
                                                                                </li>
                                                                            </ul>
                                                                            <h5 className='mt-5'>Lesson 04 - Keeping The Team On Track </h5>
                                                                            <ul>
                                                                                <li> Lead A Team </li>
                                                                                <li> Support Team Performance </li>
                                                                                <li>
                                                                                    {" "}
                                                                                    Address And Remove Impediments, Obstacles, And Blockers{" "}
                                                                                </li>
                                                                                <li> Manage Conflict </li>
                                                                                <li> Collaborate With Stakeholders </li>
                                                                                <li> Mentor Relevant Stakeholders </li>
                                                                                <li>
                                                                                    {" "}
                                                                                    Apply Emotional Intelligence To Promote Team Performance{" "}
                                                                                </li>
                                                                            </ul>
                                                                            <h5 className='mt-5'>Lesson 05 - Keeping The Business In Mind </h5>
                                                                            <ul>
                                                                                <li> Manage Compliance Requirements </li>
                                                                                <li> Evaluate And Deliver Project Benefits And Value </li>
                                                                                <li> Evaluate And Address Internal And External </li>
                                                                                <li> Business Environment Changes </li>
                                                                                <li> Support Organizational Change </li>
                                                                                <li> Employ Continuous Process Improvement </li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </>
                                : ''}
                            


                            
                            {final[0].curriculum_id == '182' ?
                                <>
                                    <div className="course-list-header">
                                        <div id="pg-91-1" className="panel-grid faq-mob">
                                            <div id="pgc-91-1-1" className="panel-grid-cell">
                                                <div
                                                    id="panel-91-1-1-0"
                                                    className="so-panel widget widget_accordion panel-first-child panel-last-child"
                                                >
                                                    <div className="thim-widget-accordion thim-widget-accordion-base new-accord">
                                                        <div className="thim-widget-accordion">
                                                            <span className="line" />
                                                            <div
                                                                aria-multiselectable="true"
                                                                role="tablist"
                                                                className=""
                                                                id="accordion_56b58d47cf7a3"
                                                            >
                                                                <div className="panel panel-default">
                                                                    <div
                                                                        id="heading_accordion_1"
                                                                        role="tab"
                                                                        className="panel-heading"
                                                                    >
                                                                        <h4 className="panel-title">
                                                                            {" "}
                                                                            <a
                                                                                aria-controls="collapse_accordion_1"
                                                                                aria-expanded="false"
                                                                                href="#collapse_accordion_1"
                                                                                data-parent="#accordion_1"
                                                                                data-toggle="collapse"
                                                                                className="collapsed"
                                                                                role="button"
                                                                            >
                                                                                The Path to Digital Journey
                                                                            </a>{" "}
                                                                        </h4>
                                                                    </div>
                                                                    <div
                                                                        aria-labelledby="heading_accordion_1"
                                                                        role="tabpanel"
                                                                        className="panel-collapse collapse in"
                                                                        id="collapse_accordion_1"
                                                                        style={{}}
                                                                        aria-expanded="true"
                                                                    >
                                                                        <div className="panel-body">
                                                                            <ul>
                                                                                <li> What is Marketing &amp; Marketing Management?</li>
                                                                                <li> How has Marketing changed over the years?</li>
                                                                                <li>
                                                                                    {" "}
                                                                                    How is Digital Marketing different from Marketing?
                                                                                    (Deliverability, Measurability etc)
                                                                                </li>
                                                                                <li> Understanding the Digital Consumer</li>
                                                                                <li> Digital Marketing Channels</li>
                                                                                <li> Digital Marketing Metrics</li>
                                                                                <li> Marketing Refresher</li>
                                                                                <li> Digital Marketing Overview</li>
                                                                                <li> Basics of Website</li>
                                                                                <li> Website Design and Copywriting</li>
                                                                                <li> Basics of Wordpress</li>
                                                                                <li> Quiz</li>
                                                                                <li> Lab</li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="panel panel-default">
                                                                    <div
                                                                        id="heading_accordion_2"
                                                                        role="tab"
                                                                        className="panel-heading"
                                                                    >
                                                                        <h4 className="panel-title">
                                                                            {" "}
                                                                            <a
                                                                                aria-controls="collapse_accordion_2"
                                                                                aria-expanded="false"
                                                                                href="#collapse_accordion_2"
                                                                                data-parent="#accordion_2"
                                                                                data-toggle="collapse"
                                                                                className="collapsed"
                                                                                role="button"
                                                                            >
                                                                                Brand Digital Presence &amp; Optimization
                                                                            </a>{" "}
                                                                        </h4>
                                                                    </div>
                                                                    <div
                                                                        aria-labelledby="heading_accordion_2"
                                                                        role="tabpanel"
                                                                        className="panel-collapse collapse in"
                                                                        id="collapse_accordion_2"
                                                                        style={{}}
                                                                        aria-expanded="true"
                                                                    >
                                                                        <div className="panel-body">
                                                                            <ul>
                                                                                <li>Identify &amp; Set Up Brands Digital Presence</li>
                                                                                <li> Execute Website UI &amp; UX</li>
                                                                                <li> Web Analytics Basics</li>
                                                                                <li> Quiz</li>
                                                                                <li> Lab</li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="panel panel-default">
                                                                    <div
                                                                        id="heading_accordion_2"
                                                                        role="tab"
                                                                        className="panel-heading"
                                                                    >
                                                                        <h4 className="panel-title">
                                                                            {" "}
                                                                            <a
                                                                                aria-controls="collapse_accordion_2"
                                                                                aria-expanded="false"
                                                                                href="#collapse_accordion_2"
                                                                                data-parent="#accordion_2"
                                                                                data-toggle="collapse"
                                                                                className="collapsed"
                                                                                role="button"
                                                                            >
                                                                                Strategic Social Media Marketing
                                                                            </a>{" "}
                                                                        </h4>
                                                                    </div>
                                                                    <div
                                                                        aria-labelledby="heading_accordion_2"
                                                                        role="tabpanel"
                                                                        className="panel-collapse collapse in"
                                                                        id="collapse_accordion_2"
                                                                        style={{}}
                                                                        aria-expanded="true"
                                                                    >
                                                                        <div className="panel-body">
                                                                            <ul>
                                                                                <li>Building Social Real estate</li>
                                                                                <li>
                                                                                    Using Channels - Facebook, twitter, Crowd sourcing etc
                                                                                </li>
                                                                                <li> Using Strategies to Connect to audience</li>
                                                                                <li>
                                                                                    Measuring Performance - Social Engagement &amp; Traffic
                                                                                    back to site
                                                                                </li>
                                                                                <li>Online reputation management</li>
                                                                                <li>
                                                                                    {" "}
                                                                                    Analytics, Strategy and Operations in Digital Marketing
                                                                                </li>
                                                                                <li>Setting Up the Web Analytics</li>
                                                                                <li> Working with Google Analytics</li>
                                                                                <li> Digital Marketing Strategy</li>
                                                                                <li> Digital Marketing Operation</li>
                                                                                <li>Introduction to Social Media Management</li>
                                                                                <li>Facebook Marketing</li>
                                                                                <li>LinkedIn Marketing</li>
                                                                                <li> Twitter Marketing</li>
                                                                                <li>Other Social Media Channels</li>
                                                                                <li>Managing Social Media Channels</li>
                                                                                <li>Quiz</li>
                                                                                <li>Lab</li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="panel panel-default">
                                                                    <div
                                                                        id="heading_accordion_2"
                                                                        role="tab"
                                                                        className="panel-heading"
                                                                    >
                                                                        <h4 className="panel-title">
                                                                            {" "}
                                                                            <a
                                                                                aria-controls="collapse_accordion_2"
                                                                                aria-expanded="false"
                                                                                href="#collapse_accordion_2"
                                                                                data-parent="#accordion_2"
                                                                                data-toggle="collapse"
                                                                                className="collapsed"
                                                                                role="button"
                                                                            >
                                                                                Search Engine Optimization
                                                                            </a>{" "}
                                                                        </h4>
                                                                    </div>
                                                                    <div
                                                                        aria-labelledby="heading_accordion_2"
                                                                        role="tabpanel"
                                                                        className="panel-collapse collapse in"
                                                                        id="collapse_accordion_2"
                                                                        style={{}}
                                                                        aria-expanded="true"
                                                                    >
                                                                        <div className="panel-body">
                                                                            <ul>
                                                                                <li>SEO Basics &amp; 101 Checklist</li>
                                                                                <li>Identifying Keyword Themes</li>
                                                                                <li>Measuring SEO Impact</li>
                                                                                <li>Content Marketing</li>
                                                                                <li> Inbound Marketing</li>
                                                                                <li>Basics of Search Engines</li>
                                                                                <li>Onsite Content Optimization</li>
                                                                                <li>Onsite Technical Optimization</li>
                                                                                <li>Off-Page Optimisation</li>
                                                                                <li>SEO Management</li>
                                                                                <li>Quiz</li>
                                                                                <li>Lab</li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="panel panel-default">
                                                                    <div
                                                                        id="heading_accordion_2"
                                                                        role="tab"
                                                                        className="panel-heading"
                                                                    >
                                                                        <h4 className="panel-title">
                                                                            {" "}
                                                                            <a
                                                                                aria-controls="collapse_accordion_2"
                                                                                aria-expanded="false"
                                                                                href="#collapse_accordion_2"
                                                                                data-parent="#accordion_2"
                                                                                data-toggle="collapse"
                                                                                className="collapsed"
                                                                                role="button"
                                                                            >
                                                                                Search Engine Marketing
                                                                            </a>{" "}
                                                                        </h4>
                                                                    </div>
                                                                    <div
                                                                        aria-labelledby="heading_accordion_2"
                                                                        role="tabpanel"
                                                                        className="panel-collapse collapse in"
                                                                        id="collapse_accordion_2"
                                                                        style={{}}
                                                                        aria-expanded="true"
                                                                    >
                                                                        <div className="panel-body">
                                                                            <ul>
                                                                                <li>Trends in SEM</li>
                                                                                <li> Google Search Basics</li>
                                                                                <li> Google Search Optimizations</li>
                                                                                <li>Google Shopping Campaigns</li>
                                                                                <li> Gmail Sponsored Promotions (GSP)</li>
                                                                                <li>Google Ads 101</li>
                                                                                <li> Search Advertising in Google</li>
                                                                                <li> Display Advertising in Google</li>
                                                                                <li> Video Advertising in Google</li>
                                                                                <li> Mobile Advertisement in Google</li>
                                                                                <li> Shopping Advertisement in Google</li>
                                                                                <li> Managing Google Ads</li>
                                                                                <li> Quiz</li>
                                                                                <li>Lab</li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="panel panel-default">
                                                                    <div
                                                                        id="heading_accordion_2"
                                                                        role="tab"
                                                                        className="panel-heading"
                                                                    >
                                                                        <h4 className="panel-title">
                                                                            {" "}
                                                                            <a
                                                                                aria-controls="collapse_accordion_2"
                                                                                aria-expanded="false"
                                                                                href="#collapse_accordion_2"
                                                                                data-parent="#accordion_2"
                                                                                data-toggle="collapse"
                                                                                className="collapsed"
                                                                                role="button"
                                                                            >
                                                                                Display Marketing
                                                                            </a>{" "}
                                                                        </h4>
                                                                    </div>
                                                                    <div
                                                                        aria-labelledby="heading_accordion_2"
                                                                        role="tabpanel"
                                                                        className="panel-collapse collapse in"
                                                                        id="collapse_accordion_2"
                                                                        style={{}}
                                                                        aria-expanded="true"
                                                                    >
                                                                        <div className="panel-body">
                                                                            <ul>
                                                                                <li> Display advertising basics</li>
                                                                                <li> Google Display Network</li>
                                                                                <li> Quiz</li>
                                                                                <li> Lab</li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="panel panel-default">
                                                                    <div
                                                                        id="heading_accordion_2"
                                                                        role="tab"
                                                                        className="panel-heading"
                                                                    >
                                                                        <h4 className="panel-title">
                                                                            {" "}
                                                                            <a
                                                                                aria-controls="collapse_accordion_2"
                                                                                aria-expanded="false"
                                                                                href="#collapse_accordion_2"
                                                                                data-parent="#accordion_2"
                                                                                data-toggle="collapse"
                                                                                className="collapsed"
                                                                                role="button"
                                                                            >
                                                                                Retargeting / Remarketing
                                                                            </a>{" "}
                                                                        </h4>
                                                                    </div>
                                                                    <div
                                                                        aria-labelledby="heading_accordion_2"
                                                                        role="tabpanel"
                                                                        className="panel-collapse collapse in"
                                                                        id="collapse_accordion_2"
                                                                        style={{}}
                                                                        aria-expanded="true"
                                                                    >
                                                                        <div className="panel-body">
                                                                            <ul>
                                                                                <li> Understanding Remarketing</li>
                                                                                <li>
                                                                                    {" "}
                                                                                    Types &amp; Remarketing Strategies &amp; Communication
                                                                                </li>
                                                                                <li>
                                                                                    {" "}
                                                                                    Analyzing remarketing List performance &amp;
                                                                                    Optimizations
                                                                                </li>
                                                                                <li> Quiz</li>
                                                                                <li>Lab</li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="panel panel-default">
                                                                    <div
                                                                        id="heading_accordion_2"
                                                                        role="tab"
                                                                        className="panel-heading"
                                                                    >
                                                                        <h4 className="panel-title">
                                                                            {" "}
                                                                            <a
                                                                                aria-controls="collapse_accordion_2"
                                                                                aria-expanded="false"
                                                                                href="#collapse_accordion_2"
                                                                                data-parent="#accordion_2"
                                                                                data-toggle="collapse"
                                                                                className="collapsed"
                                                                                role="button"
                                                                            >
                                                                                Content Marketing
                                                                            </a>{" "}
                                                                        </h4>
                                                                    </div>
                                                                    <div
                                                                        aria-labelledby="heading_accordion_2"
                                                                        role="tabpanel"
                                                                        className="panel-collapse collapse in"
                                                                        id="collapse_accordion_2"
                                                                        style={{}}
                                                                        aria-expanded="true"
                                                                    >
                                                                        <div className="panel-body">
                                                                            <ul>
                                                                                <li> Create Editorial Calendar</li>
                                                                                <li> Content Distribution Strategies</li>
                                                                                <li> Content Marketing Analyze &amp; Act</li>
                                                                                <li> Content Marketing</li>
                                                                                <li> Inbound Marketing</li>
                                                                                <li> Quiz</li>
                                                                                <li> Lab</li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="panel panel-default">
                                                                    <div
                                                                        id="heading_accordion_2"
                                                                        role="tab"
                                                                        className="panel-heading"
                                                                    >
                                                                        <h4 className="panel-title">
                                                                            {" "}
                                                                            <a
                                                                                aria-controls="collapse_accordion_2"
                                                                                aria-expanded="false"
                                                                                href="#collapse_accordion_2"
                                                                                data-parent="#accordion_2"
                                                                                data-toggle="collapse"
                                                                                className="collapsed"
                                                                                role="button"
                                                                            >
                                                                                Effective Email Marketing
                                                                            </a>{" "}
                                                                        </h4>
                                                                    </div>
                                                                    <div
                                                                        aria-labelledby="heading_accordion_2"
                                                                        role="tabpanel"
                                                                        className="panel-collapse collapse in"
                                                                        id="collapse_accordion_2"
                                                                        style={{}}
                                                                        aria-expanded="true"
                                                                    >
                                                                        <div className="panel-body">
                                                                            <ul>
                                                                                <li> What is an email from a marketing point of view?</li>
                                                                                <li> Building an email list</li>
                                                                                <li> Managing an email list</li>
                                                                                <li> Email automation</li>
                                                                                <li> Measuring impact and optimization</li>
                                                                                <li> Quiz</li>
                                                                                <li> Lab</li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="panel panel-default">
                                                                    <div
                                                                        id="heading_accordion_2"
                                                                        role="tab"
                                                                        className="panel-heading"
                                                                    >
                                                                        <h4 className="panel-title">
                                                                            {" "}
                                                                            <a
                                                                                aria-controls="collapse_accordion_2"
                                                                                aria-expanded="false"
                                                                                href="#collapse_accordion_2"
                                                                                data-parent="#accordion_2"
                                                                                data-toggle="collapse"
                                                                                className="collapsed"
                                                                                role="button"
                                                                            >
                                                                                AdTech &amp; MarTech Ecosystem
                                                                            </a>{" "}
                                                                        </h4>
                                                                    </div>
                                                                    <div
                                                                        aria-labelledby="heading_accordion_2"
                                                                        role="tabpanel"
                                                                        className="panel-collapse collapse in"
                                                                        id="collapse_accordion_2"
                                                                        style={{}}
                                                                        aria-expanded="true"
                                                                    >
                                                                        <div className="panel-body">
                                                                            <ul>
                                                                                <li> Role of AdTech &amp; MarTech</li>
                                                                                <li>AdTech Platforms</li>
                                                                                <li>MarTech Platforms</li>
                                                                                <li> Billing Model</li>
                                                                                <li> Target Audience</li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="panel panel-default">
                                                                    <div
                                                                        id="heading_accordion_2"
                                                                        role="tab"
                                                                        className="panel-heading"
                                                                    >
                                                                        <h4 className="panel-title">
                                                                            {" "}
                                                                            <a
                                                                                aria-controls="collapse_accordion_2"
                                                                                aria-expanded="false"
                                                                                href="#collapse_accordion_2"
                                                                                data-parent="#accordion_2"
                                                                                data-toggle="collapse"
                                                                                className="collapsed"
                                                                                role="button"
                                                                            >
                                                                                Mobile App Marketing
                                                                            </a>{" "}
                                                                        </h4>
                                                                    </div>
                                                                    <div
                                                                        aria-labelledby="heading_accordion_2"
                                                                        role="tabpanel"
                                                                        className="panel-collapse collapse in"
                                                                        id="collapse_accordion_2"
                                                                        style={{}}
                                                                        aria-expanded="true"
                                                                    >
                                                                        <div className="panel-body">
                                                                            <ul>
                                                                                <li> Mobile App Marketing Basics</li>
                                                                                <li> Traffic Strategies for Mobile App</li>
                                                                                <li> Mobile Advertising</li>
                                                                                <li> Analyzing Mobile App Performance</li>
                                                                                <li> Quiz</li>
                                                                                <li> Lab</li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="panel panel-default">
                                                                    <div
                                                                        id="heading_accordion_2"
                                                                        role="tab"
                                                                        className="panel-heading"
                                                                    >
                                                                        <h4 className="panel-title">
                                                                            {" "}
                                                                            <a
                                                                                aria-controls="collapse_accordion_2"
                                                                                aria-expanded="false"
                                                                                href="#collapse_accordion_2"
                                                                                data-parent="#accordion_2"
                                                                                data-toggle="collapse"
                                                                                className="collapsed"
                                                                                role="button"
                                                                            >
                                                                                Digital Analytics and Metrics
                                                                            </a>{" "}
                                                                        </h4>
                                                                    </div>
                                                                    <div
                                                                        aria-labelledby="heading_accordion_2"
                                                                        role="tabpanel"
                                                                        className="panel-collapse collapse in"
                                                                        id="collapse_accordion_2"
                                                                        style={{}}
                                                                        aria-expanded="true"
                                                                    >
                                                                        <div className="panel-body">
                                                                            <ul>
                                                                                <li>GA Walk Though - Identify relevant KPIs</li>
                                                                                <li> Identify Traffic Sources</li>
                                                                                <li> Track Traffic mapped to Consumer Funnel</li>
                                                                                <li> Setting Up the Web Analytics</li>
                                                                                <li> Working with Google Analytics</li>
                                                                                <li> Digital Marketing Strategy</li>
                                                                                <li> Digital Marketing Operation</li>
                                                                                <li> Quiz</li>
                                                                                <li> Lab</li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="panel panel-default">
                                                                    <div
                                                                        id="heading_accordion_2"
                                                                        role="tab"
                                                                        className="panel-heading"
                                                                    >
                                                                        <h4 className="panel-title">
                                                                            {" "}
                                                                            <a
                                                                                aria-controls="collapse_accordion_2"
                                                                                aria-expanded="false"
                                                                                href="#collapse_accordion_2"
                                                                                data-parent="#accordion_2"
                                                                                data-toggle="collapse"
                                                                                className="collapsed"
                                                                                role="button"
                                                                            >
                                                                                Digital Strategy &amp; Planning
                                                                            </a>{" "}
                                                                        </h4>
                                                                    </div>
                                                                    <div
                                                                        aria-labelledby="heading_accordion_2"
                                                                        role="tabpanel"
                                                                        className="panel-collapse collapse in"
                                                                        id="collapse_accordion_2"
                                                                        style={{}}
                                                                        aria-expanded="true"
                                                                    >
                                                                        <div className="panel-body">
                                                                            <ul>
                                                                                <li> Digital Marketing Maturity Model</li>
                                                                                <li> Evaluate Channel Goal completions</li>
                                                                                <li> Create Marketing Dashboards</li>
                                                                                <li> Optimize Channels</li>
                                                                                <li> Building Marketing Plans</li>
                                                                                <li> Quiz</li>
                                                                                <li> Lab</li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </>
                                : ''}
                            


                            
                            {final[0].curriculum_id == '111' ?
                                <>
                                    <div className="course-list-header">
                                        <div id="pg-91-1" className="panel-grid faq-mob">
                                            <div id="pgc-91-1-1" className="panel-grid-cell">
                                                <div
                                                    id="panel-91-1-1-0"
                                                    className="so-panel widget widget_accordion panel-first-child panel-last-child"
                                                >
                                                    <div className="thim-widget-accordion thim-widget-accordion-base new-accord">
                                                        <div className="thim-widget-accordion">
                                                            <span className="line" />
                                                            <div
                                                                aria-multiselectable="true"
                                                                role="tablist"
                                                                className=""
                                                                id="accordion_56b58d47cf7a3"
                                                            >
                                                                <div className="panel panel-default">
                                                                    <div
                                                                        id="heading_accordion_1"
                                                                        role="tab"
                                                                        className="panel-heading"
                                                                    >
                                                                        <h4 className="panel-title">
                                                                            <a
                                                                                aria-controls="collapse_accordion_1"
                                                                                aria-expanded="false"
                                                                                href="#collapse_accordion_1"
                                                                                data-parent="#accordion_1"
                                                                                data-toggle="collapse"
                                                                                className="collapsed"
                                                                                role="button"
                                                                            >
                                                                                Python for AI &amp; ML
                                                                            </a>
                                                                        </h4>
                                                                    </div>
                                                                    <div
                                                                        aria-labelledby="heading_accordion_1"
                                                                        role="tabpanel"
                                                                        className="panel-collapse collapse in"
                                                                        id="collapse_accordion_1"
                                                                        style={{}}
                                                                        aria-expanded="true"
                                                                    >
                                                                        <div className="panel-body">
                                                                            <ul>
                                                                                <li>Python Functions and Packages</li>
                                                                                <li>Working with Data Structures,</li>
                                                                                <li>Arrays, Vectors &amp; Data Frames</li>
                                                                                <li>Functions &amp; Methods</li>
                                                                                <li>Pandas, NumPy, Matplotlib, Seaborn</li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="panel panel-default">
                                                                    <div
                                                                        id="heading_accordion_2"
                                                                        role="tab"
                                                                        className="panel-heading"
                                                                    >
                                                                        <h4 className="panel-title">
                                                                            {" "}
                                                                            <a
                                                                                aria-controls="collapse_accordion_2"
                                                                                aria-expanded="false"
                                                                                href="#collapse_accordion_2"
                                                                                data-parent="#accordion_2"
                                                                                data-toggle="collapse"
                                                                                className="collapsed"
                                                                                role="button"
                                                                            >
                                                                                Applied Statistics
                                                                            </a>{" "}
                                                                        </h4>
                                                                    </div>
                                                                    <div
                                                                        aria-labelledby="heading_accordion_2"
                                                                        role="tabpanel"
                                                                        className="panel-collapse collapse in"
                                                                        id="collapse_accordion_2"
                                                                        style={{}}
                                                                        aria-expanded="true"
                                                                    >
                                                                        <div className="panel-body">
                                                                            <ul>
                                                                                <li>Descriptive Statistics</li>
                                                                                <li>Conditional Probability</li>
                                                                                <li>Bell curve </li>
                                                                                <li>Gaussian Distribution</li>
                                                                                <li>Normal Distribution </li>
                                                                                <li>Pearson Correlation</li>
                                                                                <li>Hypothesis Testing</li>
                                                                                <li>Inferential Statistics</li>
                                                                                <li>Probability Distributions</li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="panel panel-default">
                                                                    <div
                                                                        id="heading_accordion_3"
                                                                        role="tab"
                                                                        className="panel-heading"
                                                                    >
                                                                        <h4 className="panel-title">
                                                                            {" "}
                                                                            <a
                                                                                aria-controls="collapse_accordion_3"
                                                                                aria-expanded="false"
                                                                                href="#collapse_accordion_3"
                                                                                data-parent="#accordion_2"
                                                                                data-toggle="collapse"
                                                                                className="collapsed"
                                                                                role="button"
                                                                            >
                                                                                Machine Learning-Supervised learning
                                                                            </a>{" "}
                                                                        </h4>
                                                                    </div>
                                                                    <div
                                                                        aria-labelledby="heading_accordion_3"
                                                                        role="tabpanel"
                                                                        className="panel-collapse collapse in"
                                                                        id="collapse_accordion_3"
                                                                        style={{}}
                                                                        aria-expanded="true"
                                                                    >
                                                                        <div className="panel-body">
                                                                            <ul>
                                                                                <li>Linear Regression</li>
                                                                                <li>Multiple Variable Linear Regression</li>
                                                                                <li>Logistic Regression</li>
                                                                                <li>Decision Tree Algorithm</li>
                                                                                <li>Naive Bayes Classifiers</li>
                                                                                <li>K-NN Classification</li>
                                                                                <li>Support Vector Machines</li>
                                                                                <li>Model Hyperparameter Tuning</li>
                                                                                <li>Case Study</li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="panel panel-default">
                                                                    <div
                                                                        id="heading_accordion_3"
                                                                        role="tab"
                                                                        className="panel-heading"
                                                                    >
                                                                        <h4 className="panel-title">
                                                                            {" "}
                                                                            <a
                                                                                aria-controls="collapse_accordion_3"
                                                                                aria-expanded="false"
                                                                                href="#collapse_accordion_3"
                                                                                data-parent="#accordion_2"
                                                                                data-toggle="collapse"
                                                                                className="collapsed"
                                                                                role="button"
                                                                            >
                                                                                Unsupervised learning
                                                                            </a>{" "}
                                                                        </h4>
                                                                    </div>
                                                                    <div
                                                                        aria-labelledby="heading_accordion_3"
                                                                        role="tabpanel"
                                                                        className="panel-collapse collapse in"
                                                                        id="collapse_accordion_3"
                                                                        style={{}}
                                                                        aria-expanded="true"
                                                                    >
                                                                        <div className="panel-body">
                                                                            <ul>
                                                                                <li>K-means Clustering</li>
                                                                                <li>Hierarchical Clustering</li>
                                                                                <li>DBSCAN</li>
                                                                                <li>
                                                                                    Dimension Reduction-Principal Component Analysi (PCA)
                                                                                </li>
                                                                                <li>Case Study</li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="panel panel-default">
                                                                    <div
                                                                        id="heading_accordion_3"
                                                                        role="tab"
                                                                        className="panel-heading"
                                                                    >
                                                                        <h4 className="panel-title">
                                                                            {" "}
                                                                            <a
                                                                                aria-controls="collapse_accordion_3"
                                                                                aria-expanded="false"
                                                                                href="#collapse_accordion_3"
                                                                                data-parent="#accordion_2"
                                                                                data-toggle="collapse"
                                                                                className="collapsed"
                                                                                role="button"
                                                                            >
                                                                                Recommendation Systems
                                                                            </a>{" "}
                                                                        </h4>
                                                                    </div>
                                                                    <div
                                                                        aria-labelledby="heading_accordion_3"
                                                                        role="tabpanel"
                                                                        className="panel-collapse collapse in"
                                                                        id="collapse_accordion_3"
                                                                        style={{}}
                                                                        aria-expanded="true"
                                                                    >
                                                                        <div className="panel-body">
                                                                            <ul>
                                                                                <li>Introduction to Recommendation Systems</li>
                                                                                <li>Popularity based model</li>
                                                                                <li>Content based</li>
                                                                                <li>RecommendationSystem</li>
                                                                                <li>
                                                                                    Collaborative Filtering (User similarity &amp; Item
                                                                                    similarity)
                                                                                </li>
                                                                                <li>Hybrid Models</li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="panel panel-default">
                                                                    <div
                                                                        id="heading_accordion_3"
                                                                        role="tab"
                                                                        className="panel-heading"
                                                                    >
                                                                        <h4 className="panel-title">
                                                                            {" "}
                                                                            <a
                                                                                aria-controls="collapse_accordion_3"
                                                                                aria-expanded="false"
                                                                                href="#collapse_accordion_3"
                                                                                data-parent="#accordion_2"
                                                                                data-toggle="collapse"
                                                                                className="collapsed"
                                                                                role="button"
                                                                            >
                                                                                Ensemble Techniques
                                                                            </a>{" "}
                                                                        </h4>
                                                                    </div>
                                                                    <div
                                                                        aria-labelledby="heading_accordion_3"
                                                                        role="tabpanel"
                                                                        className="panel-collapse collapse in"
                                                                        id="collapse_accordion_3"
                                                                        style={{}}
                                                                        aria-expanded="true"
                                                                    >
                                                                        <div className="panel-body">
                                                                            <ul>
                                                                                <li>Bagging</li>
                                                                                <li>Boosting </li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="panel panel-default">
                                                                    <div
                                                                        id="heading_accordion_3"
                                                                        role="tab"
                                                                        className="panel-heading"
                                                                    >
                                                                        <h4 className="panel-title">
                                                                            {" "}
                                                                            <a
                                                                                aria-controls="collapse_accordion_3"
                                                                                aria-expanded="false"
                                                                                href="#collapse_accordion_3"
                                                                                data-parent="#accordion_2"
                                                                                data-toggle="collapse"
                                                                                className="collapsed"
                                                                                role="button"
                                                                            >
                                                                                Introduction to Neural Networks and Deep Learning
                                                                            </a>{" "}
                                                                        </h4>
                                                                    </div>
                                                                    <div
                                                                        aria-labelledby="heading_accordion_3"
                                                                        role="tabpanel"
                                                                        className="panel-collapse collapse in"
                                                                        id="collapse_accordion_3"
                                                                        style={{}}
                                                                        aria-expanded="true"
                                                                    >
                                                                        <div className="panel-body">
                                                                            <ul>
                                                                                <li>Introduction to Perceptron &amp; Neural Networks</li>
                                                                                <li>Activation and Loss functions</li>
                                                                                <li>Gradient Descent</li>
                                                                                <li>Hyper Parameter Tuning</li>
                                                                                <li>Tensor Flow &amp; Keras for Neural Networks</li>
                                                                                <li>Introduction to Deep Learning</li>
                                                                                <li>Shallow Neural Networks Deep Neural Networks</li>
                                                                                <li>Introduction to RNN</li>
                                                                                <li>Introduction to CNN</li>
                                                                                <li>Introduction to ANN</li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="panel panel-default">
                                                                    <div
                                                                        id="heading_accordion_3"
                                                                        role="tab"
                                                                        className="panel-heading"
                                                                    >
                                                                        <h4 className="panel-title">
                                                                            {" "}
                                                                            <a
                                                                                aria-controls="collapse_accordion_3"
                                                                                aria-expanded="false"
                                                                                href="#collapse_accordion_3"
                                                                                data-parent="#accordion_2"
                                                                                data-toggle="collapse"
                                                                                className="collapsed"
                                                                                role="button"
                                                                            >
                                                                                NLP Basics(Natural Language Processing)
                                                                            </a>{" "}
                                                                        </h4>
                                                                    </div>
                                                                    <div
                                                                        aria-labelledby="heading_accordion_3"
                                                                        role="tabpanel"
                                                                        className="panel-collapse collapse in"
                                                                        id="collapse_accordion_3"
                                                                        style={{}}
                                                                        aria-expanded="true"
                                                                    >
                                                                        <div className="panel-body">
                                                                            <ul>
                                                                                <li>Introduction to NLP</li>
                                                                                <li>Stop Words</li>
                                                                                <li>Tokenization</li>
                                                                                <li>Stemming and lemmatization</li>
                                                                                <li>Bag of Words Model</li>
                                                                                <li>Word Vectorizer</li>
                                                                                <li>TF-IDF</li>
                                                                                <li>POS Tagging</li>
                                                                                <li>Named Entity Recognition</li>
                                                                                <li>Sequential Models and NLP</li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="panel panel-default">
                                                                    <div
                                                                        id="heading_accordion_3"
                                                                        role="tab"
                                                                        className="panel-heading"
                                                                    >
                                                                        <h4 className="panel-title">
                                                                            {" "}
                                                                            <a
                                                                                aria-controls="collapse_accordion_3"
                                                                                aria-expanded="false"
                                                                                href="#collapse_accordion_3"
                                                                                data-parent="#accordion_2"
                                                                                data-toggle="collapse"
                                                                                className="collapsed"
                                                                                role="button"
                                                                            >
                                                                                Introduction to Sequential data
                                                                            </a>{" "}
                                                                        </h4>
                                                                    </div>
                                                                    <div
                                                                        aria-labelledby="heading_accordion_3"
                                                                        role="tabpanel"
                                                                        className="panel-collapse collapse in"
                                                                        id="collapse_accordion_3"
                                                                        style={{}}
                                                                        aria-expanded="true"
                                                                    >
                                                                        <div className="panel-body">
                                                                            <ul>
                                                                                <li>RNNs and its mechanisms</li>
                                                                                <li>Vanishing &amp; Exploding gradients in RNNs</li>
                                                                                <li>LSTMs - Long short-term memory</li>
                                                                                <li>GRUs - Gated recurrent unit</li>
                                                                                <li>LSTMs Applications</li>
                                                                                <li>Time series analysis</li>
                                                                                <li>LSTMs with attention mechanism</li>
                                                                                <li>Neural Machine Translation</li>
                                                                                <li>Advanced Language Models:</li>
                                                                                <li>Transformers, BERT, XLNet</li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="panel panel-default">
                                                                    <div
                                                                        id="heading_accordion_3"
                                                                        role="tab"
                                                                        className="panel-heading"
                                                                    >
                                                                        <h4 className="panel-title">
                                                                            {" "}
                                                                            <a
                                                                                aria-controls="collapse_accordion_3"
                                                                                aria-expanded="false"
                                                                                href="#collapse_accordion_3"
                                                                                data-parent="#accordion_2"
                                                                                data-toggle="collapse"
                                                                                className="collapsed"
                                                                                role="button"
                                                                            >
                                                                                Computer Vision
                                                                            </a>{" "}
                                                                        </h4>
                                                                    </div>
                                                                    <div
                                                                        aria-labelledby="heading_accordion_3"
                                                                        role="tabpanel"
                                                                        className="panel-collapse collapse in"
                                                                        id="collapse_accordion_3"
                                                                        style={{}}
                                                                        aria-expanded="true"
                                                                    >
                                                                        <div className="panel-body">
                                                                            <ul>
                                                                                <li>Introduction to Convolutional Neural Networks</li>
                                                                                <li>
                                                                                    Convolution, Pooling, Padding &amp; its mechanisms
                                                                                </li>
                                                                                <li>Forward Propagation</li>
                                                                                <li>Backpropagation for CNNs</li>
                                                                                <li>
                                                                                    CNN architectures like AlexNet, VGGNet, InceptionNet
                                                                                    &amp; ResNet
                                                                                </li>
                                                                                <li>Transfer Learning</li>
                                                                                <li>
                                                                                    How to Build and Train Deep Neural networks, and apply
                                                                                    it to Computer Vision.
                                                                                </li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="panel panel-default">
                                                                    <div
                                                                        id="heading_accordion_3"
                                                                        role="tab"
                                                                        className="panel-heading"
                                                                    >
                                                                        <h4 className="panel-title">
                                                                            {" "}
                                                                            <a
                                                                                aria-controls="collapse_accordion_3"
                                                                                aria-expanded="false"
                                                                                href="#collapse_accordion_3"
                                                                                data-parent="#accordion_2"
                                                                                data-toggle="collapse"
                                                                                className="collapsed"
                                                                                role="button"
                                                                            >
                                                                                Introduction to GANs (Generative adversarial networks)
                                                                            </a>{" "}
                                                                        </h4>
                                                                    </div>
                                                                    <div
                                                                        aria-labelledby="heading_accordion_3"
                                                                        role="tabpanel"
                                                                        className="panel-collapse collapse in"
                                                                        id="collapse_accordion_3"
                                                                        style={{}}
                                                                        aria-expanded="true"
                                                                    >
                                                                        <div className="panel-body">
                                                                            <ul>
                                                                                <li>Introduction to GANs</li>
                                                                                <li>Generative Networks</li>
                                                                                <li>Adversarial Networks</li>
                                                                                <li>How GANs work?</li>
                                                                                <li>DCGANs - Deep Convolution GANs</li>
                                                                                <li>Applications of GANs</li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="panel panel-default">
                                                                    <div
                                                                        id="heading_accordion_3"
                                                                        role="tab"
                                                                        className="panel-heading"
                                                                    >
                                                                        <h4 className="panel-title">
                                                                            {" "}
                                                                            <a
                                                                                aria-controls="collapse_accordion_3"
                                                                                aria-expanded="false"
                                                                                href="#collapse_accordion_3"
                                                                                data-parent="#accordion_2"
                                                                                data-toggle="collapse"
                                                                                className="collapsed"
                                                                                role="button"
                                                                            >
                                                                                Introduction to ReinforcementLearning (RL)
                                                                            </a>{" "}
                                                                        </h4>
                                                                    </div>
                                                                    <div
                                                                        aria-labelledby="heading_accordion_3"
                                                                        role="tabpanel"
                                                                        className="panel-collapse collapse in"
                                                                        id="collapse_accordion_3"
                                                                        style={{}}
                                                                        aria-expanded="true"
                                                                    >
                                                                        <div className="panel-body">
                                                                            <ul>
                                                                                <li>RL Framework</li>
                                                                                <li>Component of RL Framework</li>
                                                                                <li>Examples of RL Systems</li>
                                                                                <li>Types of RL Systems</li>
                                                                                <li>Q-learning</li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </>
                                : ''}
                            



                        </div>
                        : ''}

                </div>
            </div>

        </>
    )
}
