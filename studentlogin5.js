function syllabi5(){
    var subject1=document.getElementById("syllabus").value;
    let sem1= document.getElementById("sem").value;
    let dept1= document.getElementById("dept").value;
    var syllcont=document.getElementById("syll");
    if (subject1=="EMBEDDED SYSTEMS AND INTERNET OF THINGS" && sem1=="SEMESTER-6" && dept1=="INFORMATION TECHNOLOGY"){
        syllcont.innerHTML=`
        IT5601<br><br> EMBEDDED SYSTEMS AND INTERNET OF THINGS <br><br>
        CREDITS:3<br><br>

OBJECTIVES:<br><br>
* To learn the internal architecture and programming of an embedded processor.<br>
* To introduce interfacing I/O devices to the processor.<br>
* To introduce the evolution of Internet of Things(IoT).<br>
* To build a small low-cost embedded and IoT system using Arduino/Raspberry Pi/
open platform.<br>
* To apply the concept of Internet of Things in real world scenario.<br><br>
UNIT I<br><br> 8-BIT EMBEDDED PROCESSOR <br><br>
8-Bit Microcontroller – Architecture – Instruction Set and Programming – Programming
Parallel Ports – Timers and Serial Port – Interrupt Handling.<br><br>
Suggested Activities:<br>
* Flipped classroom activity on different types of microcontrollers.<br>
* Assignment on writing simple assembly codes.<br>
* Practical - Developing simple application using assembly code.<br><br>
Suggested Evaluation Methods:<br>
* Tutorials on instruction set and programming.<br>
* Assignments on programming using machine code.<br>
* Quizzes on instruction set and programming.<br><br>
UNIT II<br><br> EMBEDDED C PROGRAMMING <br><br>
Memory And I/O Devices Interfacing – Programming Embedded Systems in C – Need For
RTOS – Multiple Tasks and Processes – Context Switching – Priority Based Scheduling
Policies.<br><br>
Suggested Activities:<br>
* Flipped classroom on different types of RTOS.<br>
* Practical - Writing simple embedded C codes.<br>
* Practical - Developing simple application using embedded C code.<br><br>
Suggested Evaluation Methods:<br>
* Tutorials on embedded C programming.<br>
* Assignment on scheduling policies.<br>
* Practical - Developing applications using embedded C.<br>
* Quizzes on Embedded C and RTOS.<br><br>
UNIT III<br><br> IOT AND ARDUINO PROGRAMMING <br><br>
ARM Processor – Introduction to the Concept of IoT Devices – IoT Devices Versus
Computers – IoT Configurations – Basic Components – Introduction to Arduino – Types of
Arduino – Arduino Toolchain – Arduino Programming Structure – Sketches – Pins –
Input/Output From Pins Using Sketches – Introduction to Arduino Shields – Integration of
Sensors and Actuators with Arduino.<br><br>
Suggested Activities:<br>
 Flipped classroom on ARM processors and its applications.<br>
 Practical - Developing simple application using Arduino.<br>
 Case study of different sensors used in IoTs.<br><br>
Suggested Evaluation Methods:<br>
* Tutorials on Arduino programming.<br>
* Assignment problems on interfacing I/O based applications with Arduino board.<br>
* Quizzes on IoT devices.<br><br>
UNIT IV<br><br> IOT COMMUNICATION AND OPEN PLATFORMS <br><br>
IoT Communication Models and APIs – IoT Communication Protocols – Bluetooth – WiFi –
ZigBee – GPS – GSM modules – Open Platform (like Raspberry Pi) – Architecture –
Programming – Interfacing – Accessing GPIO Pins – Sending and Receiving Signals Using
GPIO Pins – Connecting to the Cloud.<br><br>
Suggested Activities:<br><br>
* Flipped classroom on Bluetooth, WiFi, ZigBee, GPS, GSM etc. standards.<br>
* Practical - Developing simple application using open platform (like Raspberry Pi).<br>
* Case study of different existing IoT related standards.<br><br>
Suggested Evaluation Methods:<br><br>
* Tutorials on programming with open platforms for IoT.<br>
* Assignment on interfacing different sensors/actuators with open platform.<br>
* Quizzes on IoT communications.<br><br>
UNIT V<br><br> APPLICATIONS DEVELOPMENT <br><br>
Complete Design of Embedded Systems – Development of IoT Applications – Home
Automation – Smart Agriculture – Smart Cities – Smart Healthcare.<br><br>
Suggested Activities:<br>
* Flipped classroom activity on different existing IoT applications.<br>
* Designing simple applications.<br>
* Case study on IoT based home automation solutions.<br><br>
Suggested Evaluation Methods:<br>
* Tutorials on design and development of IoT applications.<br>
* Assignment on different IoT based smart solutions.<br>
* Demonstrating real-time applications using embedded and IOT processors.<br>
* Quizzes on Design of embedded systems and IoT applications.<br><br>
TOTAL: 45 PERIODS<br><br>
OUTCOMES:<br><br>
On completion of the course, the student will be able to:<br>
CO1: Understand and compare various embedded processors.<br>
CO2: Design and deploy timers and interrupts.<br>
CO3: Write embedded C programs.<br>
CO4: Design simple embedded applications.<br>
Co5: Design portable IoT using Arduino/Raspberry Pi /open platform.<br>
Co6: Analyze applications of IoT in real time scenario.<br><br>
TEXT BOOKS:<br><br>
1. Muhammed Ali Mazidi, Janice Gillispie Mazidi, Rolin D. McKinlay, “The 8051
Microcontroller and Embedded Systems”, Pearson Education, Second Edition, 2014.<br><br>
2. Adrian McEwen, Hakim Cassimally “Designing the Internet of Things”, John Wiley &
Sons, 2014.<br><br>
REFERENCES:<br><br>
1. Michael J. Pont, “Embedded C”, Pearson Education, 2007.<br>
2. Robert Barton, Patrick Grossetete, David Hanes, Jerome Henry, Gonzalo Salgueiro,
“IoT Fundamentals: Networking Technologies, Protocols, and Use Cases for the
Internet of Things”, CISCO Press, 2017.<br>
3. Wayne Wolf, “Computers as Components: Principles of Embedded Computer
System Design”, Elsevier, 2006.<br>
4. IOT (Internet of Things) Programming: A Simple and Fast Way of Learning,
IOT Kindle Edition.<br>
5. Andrew N Sloss, D. Symes, C. Wright, “Arm System Developers Guide”, Morgan
Kauffman/ Elsevier, 2006.<br>
6. Arshdeep Bahga, Vijay Madisetti, “Internet of Things: A Hands-on Approach”, VPT,
2014.
`;

    }
    else if (subject1=="DATA SCIENCE AND ANALYTICS" && sem1=="SEMESTER-6" && dept1=="INFORMATION TECHNOLOGY"){
        syllcont.innerHTML=`
        IT5602<br><br> DATA SCIENCE AND ANALYTICS <br><br>
        CREDITS:3<br><br>
OBJECTIVES:<br><br>
* To learn the fundamentals of data science and big data.
* To gain in-depth knowledge on descriptive data analytical techniques.
* To gain knowledge to implement simple to complex analytical. Algorithms in big data
frameworks.
* To develop programming skills using required libraries and packages to perform data
analysis in Python.<br>
* To understand and perform data visualization, web scraping, machine learning and
natural language processing using various Data Science tools.<br><br>
UNIT I <br><br>INTRODUCTION TO DATA SCIENCE AND BIG DATA <br><br>
Data Science – Fundamentals and Components – Data Scientist – Terminologies Used in
Big Data Environments – Types of Digital Data – Classification of Digital Data – Introduction
to Big Data – Characteristics of Data – Evolution of Big Data – Big Data Analytics –
Classification of Analytics – Top Challenges Facing Big Data – Importance of Big Data
Analytics – Data Analytics Tools.<br><br>
Suggested Activities:<br>
* Case studies on big data application domain.<br>
* Real world domain specific problems involving big data and listing out the challenges.<br>
* Demonstration on data analytics tools.<br><br>
Suggested Evaluation Methods:<br>
* Student assignment on case studies related to healthcare, climate change, ecommerce, retail business, manufacturing etc.<br>
* Group presentation on big data applications with societal need.<br>
* Quizzes on topics like big data terminologies, big data applications, etc.<br><br>
UNIT II<br><br> DESCRIPTIVE ANALYTICS USING STATISTICS <br><br>
Types of Data – Mean, Median and Mode – Standard Deviation and Variance – Probability –
Probability Density Function – Types of Data Distribution – Percentiles and Moments –
Correlation and Covariance – Conditional Probability – Bayes’ Theorem – Introduction to
Univariate, Bivariate and Multivariate Analysis – Dimensionality Reduction using Principal
Component Analysis and LDA – Dimensionality Reduction using Principal Component
Analysis and Linear Discriminant Analysis (LDA) – Principal Component Analysis (PCA)
example with Iris Data Set from UCI repository.<br><br>
Suggested Activities:<br>
* Solving numerical problems based on statistics and probability.<br>
* Demonstration of descriptive analysis using Python.<br>
* Demonstrate PCA using Iris data set in Python.<br><br>
Suggested Evaluation Methods:<br>
* Assignment on data understanding using open source tools.<br>
* Student Presentation of real world applications and the required descriptive analysis.<br>
* Quiz on all topics in descriptive analytics using statistics.<br><br>
UNIT III<br><br> PREDICTIVE MODELING AND MACHINE LEARNING <br><br>
Linear Regression – Polynomial Regression – Multivariate Regression – Multi Level Models
– Data Warehousing Overview – Bias/Variance Trade Off – K Fold Cross Validation – Data
Cleaning and Normalization – Cleaning Web Log Data – Normalizing Numerical Data –
Detecting Outliers – Introduction to Supervised And Unsupervised Learning – Reinforcement
Learning – Dealing with Real World Data – Machine Learning Algorithms –Clustering –
Python Based Application.<br><br>
Suggested Activities:<br>
* Solve numerical problem solving using linear regression models.<br>
* Demonstrate data cleaning using WEKA tool.<br>
* Demonstration of data preprocessing and machine learning features in Python.<br><br>
Suggested Evaluation Methods:<br><br>
* Simple lab based activities for machine learning in Python using small benchmark
datasets.<br>
* Tool based assignments on linear, polynomial and multivariate regression using real
world case studies.<br>
* Assignment on comparative analysis of two or more data sets using their features.<br><br>
UNIT IV<br><br> DATA ANALYTICAL FRAMEWORKS <br><br>
Introducing Hadoop –Hadoop Overview – RDBMS versus Hadoop – HDFS (Hadoop
Distributed File System): Components and Block Replication – Processing Data with Hadoop
– Introduction to MapReduce – Features of MapReduce – Introduction to NoSQL: CAP
theorem – MongoDB: RDBMS Vs MongoDB – Mongo DB Database Model – Data Types
and Sharding – Introduction to Hive – Hive Architecture – Hive Query Language (HQL).<br><br>
Suggested Activities:<br>
* Case studies on applications involving usage of data analytical frameworks.<br>
* Demonstration of Installation and configuring Hadoop and MapReduce.<br>
* Design and develop algorithms to be executed in Map Reduce involving numerical
methods for analytics.<br>
* Installation of MongoDB and simple data management.<br><br>
Suggested Evaluation Methods:<br>
* Mini Project (Group) – Real time data collection, saving in Hive, implement analytical
techniques using Map-Reduce Tasks and Result Projection.<br>
* Practical – Programming assignments in MongoDB.<br>
* Quiz on Hive query language.<br><br>
UNIT V <br><br>DATA SCIENCE USING PYTHON <br><br>
Introduction to Essential Data Science Packages: Numpy, Scipy, Jupyter, Statsmodels and
Pandas Package – Data Munging: Introduction to Data Munging, Data Pipeline and Machine
Learning in Python – Data Visualization Using Matplotlib – Interactive Visualization with
Advanced Data Learning Representation in Python.<br><br>
Suggested Activities:<br>
* Demonstration of simple Python scripts using NumPy and SciPy Package.<br>
* Demonstration on NumPy arrays and matrix operations.<br>
* Simple lab activities on dimensionality reduction and feature selection using Python.<br>
* Demonstration of experiments on data visualization using matplotlib functions.<br><br>
Suggested Evaluation Methods:<br>
* Mini Project using Python for data analytics with benchmark datasets.<br>
* Quiz on data visualization functions.<br><br>
TOTAL: 45 PERIODS<br><br>
OUTCOMES:<br><br>
On completion of the course, the student will be able to:<br><br>
CO1: Identify the real world business problems and model with analytical solutions.<br>
CO2: Solve analytical problem with relevant mathematics background knowledge.<br>
CO3:Convert any real world decision making problem to hypothesis and apply suitable
 statistical testing.<br>
CO4:Write and demonstrate simple applications involving analytics using Hadoop and
 MapReduce.<br>
CO5: Use open source frameworks for modeling and storing data.<br>
CO6: Perform data analytics and visualization using Python.<br><br>
TEXT BOOKS:<br><br>
1. Frank Pane, “Hands On Data Science and Python Machine Learning”, Packt
Publishers, 2017.<br><br>
2. Seema Acharya, Subhashini Chellapan, “Big Data and Analytics”, Wiley, 2015.<br><br>
REFERENCES:<br><br>
1. Alberto Boschetti, Luca Massaron, “Python Data Science Essentials”, Packt
Publications, 2nd Edition, 2016.<br><br>
2. DT Editorial Services, Big Data, Black Book, Dream Tech Press, 2015.<br><br>
3. Yuxi (Hayden) Liu, “Python Machine Learning”, Packt Publication, 2017.`;}
else if (subject1=="DISTRIBUTED AND CLOUD COMPUTING" && sem1=="SEMESTER-6" && dept1=="INFORMATION TECHNOLOGY"){
    syllcont.innerHTML=`
    IT5603<br><br> DISTRIBUTED AND CLOUD COMPUTING <br><br>
    CREDITS:3<br><br>
OBJECTIVES:<br><br>
* To learn about the concepts of distributed systems.<br>
* To understand distributed resource management.<br>
* To study the basics of cloud computing.<br>
* To study about virtualization and cloud resource management.<br>
* To be aware of different cloud platforms.<br><br>
UNIT I<br><br> INTRODUCTION TO DISTRIBUTED SYSTEM CONCEPTS <br><br>
Introduction to Distributed Systems – Characteristics – Issues in Distributed Systems –
Distributed System Model – Request/Reply Protocols – RPC – RMI – Logical Clocks and
Casual Ordering of Events – Election Algorithm – Distributed Mutual Exclusion –Distributed
Deadlock Detection Algorithms.<br><br>
Suggested Activities:<br>
* Implement RPC and Bankers algorithm.<br>
* Create and Distribute a Torrent file to share a file in LAN Environment.<br><br>
Suggested Evaluation Methods:<br>
 Demonstration and assessment of the working of the implemented algorithm.<br><br>
UNIT II <br><br>INTRODUCTION TO CLOUD COMPUTING <br><br>
Introduction to Cloud Computing – Evolution of Cloud Computing – Cloud Characteristics –
Elasticity in Cloud – On-demand Provisioning – NIST Cloud Computing Reference
Architecture– Architectural Design Challenges – Deployment Models: Public, Private and
Hybrid Clouds – Service Models: IaaS – PaaS – SaaS – Benefits of Cloud Computing.<br><br>
Suggested Activities:<br>
* Use Google Collaboration Tools: Create Google Docs, Sheets, and Slides and share
it with others.<br>
* Explore public cloud services like Amazon, Google, Sales force, and Digital Ocean
etc.<br><br>
Suggested Evaluation Methods:<br>
* Quiz on different architectural styles of cloud.<br>
* Report Submission - Comparison of various services provided by different Cloud
Service Providers (Configuration of VM, Cost, Network Bandwidth etc.).<br><br>
UNIT III<br><br> CLOUD ENABLING TECHNOLOGIES <br><br>
Introduction to Web Service and Service Oriented Architecture – SOAP – REST – Basics of
Virtualization – Full and Para Virtualization– Implementation Levels of Virtualization – Tools
and Mechanisms – Virtualization of CPU – Memory – I/O Devices – Desktop Virtualization –
Server Virtualization.<br><br>
Suggested Activities:<br>
* Create a simple web service using Python Flask /Java /any language [Web service:
Client-server model should be implemented using socket/http].<br>
* Install Oracle Virtual Box/VMware Workstation and Create a chat application [Note:
Launch two Virtual Machines for chat application].<br><br>
Suggested Evaluation Methods:<br>
* Review the web service implementation - Proper Connection should be established
between the client and server to make use of the service offered by the Server.<br>
* Review the working of Application in virtual environment.<br><br>
UNIT IV<br><br> CLOUD MANAGEMENT, STORAGE AND SECURITY <br><br>
Resource Provisioning and Methods – Cloud Management Products – Cloud Storage –
Provisioning Cloud Storage – Managed and Unmanaged Cloud Storage – Cloud Security
Overview – Cloud Security Challenges –Security Architecture design – Virtual Machine
Security – Application Security –Data Security.<br><br>
Suggested Activities:<br>
* Use security tools like ACUNETIX, ETTERCAP to scan web applications on the
cloud, cloud networks for finding vulnerabilities, verifying leakage of information to an
unauthorized third party.<br><br>
Suggested Evaluation Methods:<br>
* Report Submission - Generate a detailed report describing vulnerabilities along with
the suitable action that can be taken to remedy the loopholes.<br><br>
UNIT V <br><br>CLOUD SOFTWARE AND COMPUTING PLATFORMS <br><br>
HDFS – Map Reduce – Google App Engine (GAE) – Programming Environment for GAE –
Architecture of GFS – Case Studies: Openstack, Heroku, and Docker Containers –Amazon
EC2, AWS, Microsoft Azure, Google Compute Engine.<br><br>
Suggested Activities:<br>
* Install and configure OpenStack all-in-one using Devstack/Packstack and Launch
VMs in OpenStack through dashboard.<br><br>
Suggested Evaluation Methods:<br>
* OpenStack Dashboard should be accessed though web browser. Verify the working
of instance by logging into it / pinging the instance.<br><br>
 TOTAL: 45 PERIODS<br><br>
OUTCOMES:<br><br>
On completion of the course, the students will be able to:<br>
CO1: Appreciate distributed computing, distributed resource management.<br>
CO2: Articulate the main concepts, key technologies, strengths and limitations of cloud
 computing.<br>
CO3: Develop the ability to understand and use the architecture of compute and storage
 cloud, service and delivery models.<br>
CO4: Explain the core issues of cloud computing such as resource management and
 security.<br>
CO5: Choose the appropriate technologies, algorithms and approaches for implementation
 and use of cloud.<br>
CO6: Establish own cloud environment using Openstack and work on it.<br><br>
TEXTBOOKS:<br><br>
1. Andrew S. Tanenbaum, Maarten Van Steen, “Distributed Systems - Principles and
Paradigms”, Second Edition, Pearson, 2006.<br><br>
2. Kai Hwang, Geoffrey C Fox, Jack G Dongarra, “Distributed and Cloud Computing,
From Parallel Processing to the Internet of Things”, Morgan Kaufmann Publishers,
2012.<br><br>
REFERENCES:<br><br>
1. Mukesh Singhal, “Advanced Concepts In Operating Systems”, McGraw Hill Series in
Computer Science, 1994.<br><br>
2. Buyya R., Broberg J., Goscinski A., “Cloud Computing: Principles and Paradigm”,
John Wiley, 2011.<br><br>
3. John W. Rittinghouse, James F. Ransome, “Cloud Computing: Implementation
“Management and Security”, CRC Press, 2010.`;}
else if (subject1=="PROFESSIONAL ELECTIVE-2" && sem1=="SEMESTER-6" && dept1=="INFORMATION TECHNOLOGY"){
    syllcont.innerHTML=`
    SEMESTER VI ONWARDS<br><br>PROFESSIONAL ELECTIVES -2<br><br>
1. IT5017 Infrastructure
Management
<br><br>
2. IT5018 Quantum
Computing
<br><br>
3. IT5019 Soft Computing
<br><br>
4. IT5020 Social Network
Analysis
<br><br>
5. IT5021 Semantic Web
<br><br>
6. IT5022 Information
Retrieval
<br><br>
7. IT5023
Fundamentals
of Digital Image
Processing
<br><br>
8. IT5024 Mixed Reality
<br><br>
9. IT5025 Game
Programming
<br><br>
10. IT5026 Intellectual
Property Rights
<br><br>
11. IT5027
Software
Project
Management
<br><br>
12. IT5028
Service
Oriented
Architecture
and
Microservices
<br><br>
13. IT5029
Software
Quality Assurance
<br><br>
14. IT5030
Autonomous
Ground Vehicle
Systems
<br><br>
15. IT5031 Advanced
Networks
<br><br>
16. IT5032
Network
Programming
and
Management
<br><br>
17. IT5033
TCP/IP Design
and
Implementation
`;}
else if (subject1=="PROFESSIONAL ELECTIVE-3" && sem1=="SEMESTER-6" && dept1=="INFORMATION TECHNOLOGY"){
    syllcont.innerHTML=`
    SEMESTER VI ONWARDS<br><br>PROFESSIONAL ELECTIVES -2<br><br>
1. IT5017 Infrastructure
Management
<br><br>
2. IT5018 Quantum
Computing
<br><br>
3. IT5019 Soft Computing
<br><br>
4. IT5020 Social Network
Analysis
<br><br>
5. IT5021 Semantic Web
<br><br>
6. IT5022 Information
Retrieval
<br><br>
7. IT5023
Fundamentals
of Digital Image
Processing
<br><br>
8. IT5024 Mixed Reality
<br><br>
9. IT5025 Game
Programming
<br><br>
10. IT5026 Intellectual
Property Rights
<br><br>
11. IT5027
Software
Project
Management
<br><br>
12. IT5028
Service
Oriented
Architecture
and
Microservices
<br><br>
13. IT5029
Software
Quality Assurance
<br><br>
14. IT5030
Autonomous
Ground Vehicle
Systems
<br><br>
15. IT5031 Advanced
Networks
<br><br>
16. IT5032
Network
Programming
and
Management
<br><br>
17. IT5033
TCP/IP Design
and
Implementation
    `;}
    else if (subject1=="OPEN ELECTIVE-1" && sem1=="SEMESTER-6" && dept1=="INFORMATION TECHNOLOGY"){
        syllcont.innerHTML=`
        OPEN ELECTIVES<br><br>
    1.
    AIR POLLUTION AND CONTROL ENGINEERING<br><br>
    2. BASIC OF BIOMEDICAL INSTRUMENTATION<br><br>
    3. BASICS IF BIOINFORMATICS<br><br>
    4. BIO CHEMISTRY<br><br>
    5. DIGITAL AUDIO ENGINEERING
    <br><br>
    6. ENERGY CONSERVATION AND MANAGEMENT<br><br>
    7. FUNDAMENTALS OF NUTRITION<br><br>
    8. GEOGRAPHIC INFORMATION SYSTEM<br><br>
    9. HERBAL TECHNOLOGY<br><br>
    10. HOSPITAL WASTE MANAGEMENT<br><br>
    11. INDUSTRIAL NANOTECHNOLOGY<br><br>
    12. INTRODUCTION TO BIOENERGY AND BIOFUELS
    INDUSTRIAL SAFETY ENGINEERING<br><br>
    13. LOGIC AND DISTRIBUTED CONTROL SYSTEMS <br><br>
    14. MEDICAL PHYSICS<br><br>
    15. MICROSCOPY<br><br>
    16. PRINCIPLES OF FOOD PRESERVATION<br><br>
    17. PRODUCT DSIGN AND DEVELOPMENT<br><br>
    18. SENIORS AND T RANSDUCERS<br><br>
    19. SPACE TIME WIRELESS COMMUNICATON<br><br>
    20. SOFT COMPUTING<br><br>
    21. TELECOMMUNICATION NETWORK MANAGEMENT<br><br>
    22. TELEHEALTH TECHNOLOGY<br><br>
    23. WAVELETS AND ITS APPLICATIONS<br><br>
    24. WORLD CLASS MANUFACTURING `;}
    else if (subject1=="EMBEDDED SYSTEMS AND INTERNET OF THINGS LABORATORY" && sem1=="SEMESTER-6" && dept1=="INFORMATION TECHNOLOGY"){
        syllcont.innerHTML=`
        IT5611<br><br> EMBEDDED SYSTEMS AND INTERNET OF THINGS LABORATORY <br><br>
        CREDITS:2<br><br>
OBJECTIVES:<br><br>
* To learn tools relevant to Embedded System and IoT development.<br>
* To write simple assembly programs that use various features of the processor.<br>
* To explore Embedded C Programs for different embedded processors.<br>
* To develop simple applications using Arduino/Raspberry Pi/open platform.<br>
* To design and develop IOT application for real world scenario.<br><br>
LIST OF EXERCISES:<br><br>
1. Write 8051 Assembly Language experiments using simulator.<br><br>
2. Test data transfer between registers and memory.
3. Perform ALU operations.<br><br>
4. Using interrupts generate waveforms and test Timers.<br><br>
5. Write assembly language experiments using Kit to test interfaces and interrupts
using Traffic Generator, DAC, ADC, Stepper Motor (2).<br><br>
6. Write Basic and arithmetic Programs Using Embedded C.<br><br>
7. Write Embedded C program to test interrupt and timers.<br><br>
8. Develop Real time applications – clock generation, wave form generation, counter –
using embedded C.<br><br>
9. Explore ARM/PIC based controllers using Embedded C.<br><br>
10.Explore different communication methods with IoT devices.<br><br>
11.Develop simple application – testing infrared sensor – IoT Applications – using
Aurdino.<br><br>
12.Develop simple application – testing temperature, light sensor – IOT Application –
using open platform/Raspberry Pi.<br><br>
13.Deploy IOT applications using platforms such as Bluemix.<br><br>
TOTAL: 60 PERIODS<br><br>
OUTCOMES:<br><br>
On completion of the course, the students will be able to:<br><br>
CO1: Write and implement simple assembly programs that use various features of the
 processor.<br>
CO2: Write an Embedded C Program, debug and interpret the results.<br>
CO3: Develop micro controller based application.<br>
CO4: Test and experiment different sensors for application development.<br>
CO5: Develop IoT applications using Arduino/Raspberry Pi/open platform.<br>
CO6: Explore deployment platforms for IoT applications.`;}
else if (subject1=="DATA ANALYTICS AND CLOUD COMPUTING LABORATORY" && sem1=="SEMESTER-6" && dept1=="INFORMATION TECHNOLOGY"){
    syllcont.innerHTML=`
    IT5612 <br><br>DATA ANALYTICS AND CLOUD COMPUTING LABORATORY <br><br>
    CREDITS:2<br><br>
OBJECTIVES:<br><br>
* To provide hands-on experience to cloud and data analytics frameworks and tools.<br>
* To use the Python packages for performing analytics.<br>
* To learn using analytical tools for real world problems.<br>
* To familiarize the usage of distributed frameworks for handling voluminous data.<br>
* To write and deploy analytical algorithms as MapReduce tasks.<br><br>
LIST OF EXERCISES:<br><br>
Analytics Using Python:<br><br>
1. Download, install and explore the features of NumPy, SciPy, Jupyter, Statsmodels
and Pandas packages.<br>
(i) Reading data from text file, Excel and the web.<br>
(ii) Exploring various commands for doing descriptive analytics on Iris data set.<br><br>
2. Use the diabetes data set from UCI and Pima Indians Diabetes data set for
performing the following:<br>
(i) Univariate analysis: Frequency, Mean, Median, Mode, Variance, Standard
Deviation, Skewness and Kurtosis.<br>
(ii) Bivariate analysis: Linear and logistic regression modeling<br>
(iii) Multiple Regression analysis<br>
Also compare the results of the above analysis for the two data sets.<br><br>
3. Apply Bayesian and SVM techniques on Iris and Diabetes data set.<br><br>
4. Apply and explore various plotting functions on UCI data sets.
Cloud Computing:<br><br>
5. Installation of OpenStack.<br><br>
6. Creation of VMs and installing applications and executing simple programs in
OpenStack.<br><br>
7. Simple applications for communication across VMs.
Hadoop, MapReduce, HDFS, Hive:<br><br>
8. Install and configure Hadoop in its two operating modes: Pseudo distributed and fully
distributed.<br><br>
9. Implement the following file management tasks in Hadoop: Adding files and
directories, retrieving files and deleting files.<br><br>
10. Create a retail data base with the following tables: Product, Customer, Manufacturer,
Shipping and Time using MongoDB and perform data replication using sharding
techniques.<br><br>
11. Install HIVE and implement the above retail schema definition and perform CRUD
operations.<br><br>
 TOTAL:45 PERIODS<br><br>
OUTCOME:<br><br>
On completion of the course, the students will be able to:<br><br>
CO1: Install analytical tools and configure distributed file system.<br>
CO2: Have skills in developing and executing analytical procedures in various distributed
 frameworks and databases.<br>
CO3: Develop, implement and deploy simple applications on very large datasets.<br>
CO4: Implement simple to complex data modeling in NoSQL databases.<br>
CO5: Develop and deploy simple applications in OpenStack cloud.<br>
CO6: Implement real world applications by using suitable analytical framework and tools.`;}
else if (subject1=="SOCIALLY RELEVANT PROJECT LABORATORY" && sem1=="SEMESTER-6" && dept1=="INFORMATION TECHNOLOGY"){
    syllcont.innerHTML=`
    IT5613<br><br> SOCIALLY RELEVANT PROJECT LABORATORY <br><br>
    CREDITS:1<br><br>
OBJECTIVES:<br><br>
* To identify socially relevant problems.<br>
* To design solutions for socially relevant problems.<br>
* To develop projects based on software design process.<br>
* To implement solutions for societal valued projects using relevant state of the art
technologies.<br>
* To test the implemented project based on user needs and usefulness.<br><br>
Students are expected to take up problems that would directly benefit the society and design
and implement an IT based solution for the problem, based on the courses undertaken up to
that semester. The domains of the problems may reach out to sectors like but not limited to
Energy, Education, Material, Environment, Telecommunications, Defense, Healthcare,
Entertainment and Agriculture. <br><br>The societal value of the project is to be evaluated based on
the need of the hour and request from stakeholders. The evaluation of the project would be
based on the usefulness of the problem statement, formulation of the problem, stakeholders
need, and the usage statistics of the solution and the technical merit of the solution.
The project design, development and testing phases can be as shown below:<br><br>
REQUIREMENTS ENGINEERING PHASE:<br><br>
* Problem identification.<br><br>
* Feasibility study of domain.<br><br>
* Requirement elicitation and analysis.<br><br>
DESIGN PHASE:<br><br>
* Architectural design.<br><br>
* UI design.<br><br>
* Component Design.<br><br>
* Database design.<br><br>
IMPLEMENTATION PHASE:<br><br>
* Coding in a suitable language using necessary platforms and tools.<br><br>
TESTING AND VALIDATION PHASE:<br><br>
* Component Testing<br><br>
* System Testing<br><br>
* Acceptance Testing<br><br>
TOTAL : 30 PERIODS<br><br>
OUTCOMES:<br><br>
On completion of the course, the students will be able to:<br><br>
CO1: Analyze social problems and provide technical solutions.<br>
CO2: Benefit the society by providing IT based solutions for social problems.<br><br>
CO3: Design, develop and implement solutions for social problems.<br><br>
CO4: Develop innovative technical solutions of social relevance.<br><br>
CO5: Design, develop and implement standard solutions to social problems applying CO6:
 Software engineering methodologies.<br>
CO6: Evaluate the solution based on usefulness, effectiveness and user satisfaction.<br><br>
REFERENCES:<br><br>
1. https://www.niti.gov.in/.<br><br>
2. https://www.sih.gov.in/.
`;}

}
