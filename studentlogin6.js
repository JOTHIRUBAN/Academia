function syllabi6(){
    var subject1=document.getElementById("syllabus").value;
    let sem1= document.getElementById("sem").value;
    let dept1= document.getElementById("dept").value;
    var syllcont=document.getElementById("syll");
    if (subject1=="ARTIFICIAL INTELLIGENCE" && sem1=="SEMESTER-7" && dept1=="INFORMATION TECHNOLOGY"){
        syllcont.innerHTML=`
        IT5701<br><br> ARTIFICIAL INTELLIGENCE <br><br>
        CREDITS:3<br><br>
OBJECTIVES:<br><br>
* To know the underlying structure behind intelligence mathematically.<br>
* To know the logical implications in computational intelligence.<br>
* To know the automated learning techniques.<br>
* To study the techniques of knowledge representation.<br>
* To explore the adaption of artificial intelligence techniques in real-time scenarios.<br><br>
UNIT I <br><br>INTELLIGENT AGENTS AND SEARCH TECHNIQUES <br><br>
Agents and Environments – Good Behavior: The Concepts of Rationality – The Nature of
Environments – The Structure of Agents – Problem Solving by Search – Uninformed Search
– Searching with Costs – Informed State Space Search – Heuristic Search: Greedy – A*
Search – Problem Reduction Search – Game Search – Constraint Satisfaction Problems.<br><br>
Suggested Activities:<br><br>
* Flipped classroom on structure of agents.<br>
* Uninformed search - Searching with costs.<br>
* Solve puzzles with uninformed and informed searches.<br>
* Practical - Implementation of search through Python/other languages.<br><br>
Suggested Evaluation Methods:<br>
* Tutorials on various topics of the unit.<br>
* Assignments on puzzles with uninformed and informed searches.<br>
* Quizzes on agents, environments and search<br>
* Evaluation of the programming exercises.<br><br>
UNIT II<br><br> REASONING WITH LOWER ORDER LOGICS <br><br>
Logical Agent – Proposition Logic – Syntax and Semantics – Theorem Proving – Model
Checking – Inference in First Order Logic: Forward Chaining – Backward Chaining –
Resolution.<br><br>
Suggested Activities:<br>
● Reasoning methods through puzzles and real life scenarios.<br>
● Practical - Inference through Prolog/Python.<br>
● Practical - Programming through Prolog/ Python for various topics such as reasoning
through resolution.<br><br>
Suggested Evaluation Methods:<br>
* Tutorials on reasoning methods.<br>
* Assignment problems on different topics of the unit.<br>
* Quizzes on inference techniques in logic.<br>
* Evaluation of the programming exercises.<br><br>

UNIT III<br><br> KNOWLEDGE REPRESENTATION <br><br>
Knowledge Representation Issues – Approaches for Knowledge Representation: Simple
Relational Knowledge – Inherited Knowledge – Semantic Nets – Frames – Semantic Web –
Ontology.<br><br>
Suggested Activities:<br>
* Examples of knowledge representation through different methods and reasoning.<br>
* Practical - Ontology creation using a tool like Protégé.<br><br>
Suggested Evaluation Methods:<br>
* Tutorials on different topics of the unit.<br>
* Assignments on knowledge representation through different methods and reasoning.<br>
* Quizzes on different methods of knowledge representation.<br>
* Evaluation of the programming exercise.<br><br>

UNIT IV<br><br> AI PLANNING AND NATURAL LANGUAGE PROCESSING <br><br>
Classical Planning – Types – Partial Order Planning – Graph Plan and SAT Plan – Natural
Language Processing Basics: Syntax – Semantics – Introduction to Statistical NLP.<br><br>
Suggested Activities:<br>
● Flipped classroom on planning types and the background of plan.<br>
● Out of class activity – Classical Planning, Boolean satisfiability.<br>
● In class – Graph plan.<br>
● Practical - Programming through PDDL/Python to develop a plan for block world,
cargo world etc.<br><br>
Suggested Evaluation Methods:<br>
● Tutorials on planning types and the background of plan.<br>
● Assignments on graph plan.<br>
● Quizzes on planning and natural language processing basics.<br>
● Evaluation of the programming exercise.<br><br>
UNIT V<br><br> LEARNING AND APPLICATIONS <br><br>
Logical Formulation of Learning – Knowledge in Learning – Explanation-based Learning –
Learning using Relevance Information – Application with NLP: Developing a Simple Chatbot
– Types of Chatbot.<br><br>
Suggested Activities:<br>
* Flipped classroom on knowledge in learning.<br>
* Assignments on problem solving in learning techniques.<br>
* Practical - Programming exercises using Python/other programming languages such
as: Programming for HMM.<br>
* Explore the available Chatbot models such as Watson and adapt to a specific
domain such as Education or Customer relations.<br><br>
Suggested Evaluation Methods:<br>
* Tutorials on knowledge in learning.<br>
* Evaluation of the programming exercise.<br>
* Quizzes on knowledge in learning.<br><br>
TOTAL : 45 PERIODS<br><br>
OUTCOMES:<br><br>
On completion of the course, the student will be able to:<br><br>
CO1: Understand the search techniques.<br>
CO2: Apply the search techniques to real-time problems.<br>
CO3: Apply the reasoning techniques to real world problems.<br>
CO4: Understand the representation of knowledge.<br>
CO5: Understand the learning techniques.<br>
CO6: Apply AI techniques in developing real world applications.<br><br>
TEXT BOOKS:<br><br>
1. Stuart J. Russell, Peter Norvig, “Artificial Intelligence - A Modern Approach”, Third
Edition, Pearson Publishers, 2015.<br><br>
2. Elaine Rich, Kevin Knight, Shivashankar B. Nair, “Artificial Intelligence”, Third Edition,
Tata McGraw-Hill Education, 2008.<br><br>
REFERENCES:<br><br>
1. Dheepak Khemani, “A first course in Artificial Intelligence”, McGraw Hill Education
Pvt Ltd., NewDelhi, 2013.<br><br>
2. Steven Bird, Ewan Klein and Edward Loper, “Natural Language Processing with
Python”, O’Reilly, 2009, https://www.nltk.org/book/.<br><br>
3. Nils J. Nilsson, “Artificial Intelligence: A New Synthesis”, Morgan Kaufmaan
Publishers Inc; Second Edition, 2003.<br><br>
4. NPTEL, “Artificial Intelligence”, http://nptel.ac.in/courses/106105079/2.<br><br>
5. Udacity, “Introduction to Artificial Intelligence”, https://in.udacity.com/course/intro-toartificial-intelligence--cs271.`;

    }
    else if (subject1=="MOBILE COMPUTING" && sem1=="SEMESTER-7" && dept1=="INFORMATION TECHNOLOGY"){
        syllcont.innerHTML=`
        IT5702<br><br> MOBILE COMPUTING <br><br>
        CREDITS:3<br><br>
OBJECTIVES:<br><br>
* To learn the basics of wireless communication and cellular networks.<br>
* To study the popular cellular networking technologies.<br>
* To explore various protocols that support mobility at network layer and transport
layer.<br>
* To understand the intricacies of UI required by mobile applications and the design
aspects of mobile application.<br>
* To study various mobile app development platforms and learn developing mobile
applications.<br><br>
UNIT I<br><br> WIRELESS COMMUNICATION AND CELLULAR NETWORKS <br><br>
Electromagnetic Spectrum – Antenna – Propagation Ranges and Effects – Multipath
Propagation – Spread Spectrum –Multiple Access Techniques: FDMA, TDMA, CDMA,
OFDMA – Duplexing Techniques: FDD, TDD – Cellular Networks – Tessellation, Frequency
Reuse and Handoff – Generations of Cellular Networks – 2G Systems.<br><br>
Suggested Activities:<br>
* External learning - Performing a survey of popular mobile phones and exploring their
configuration (performance in terms of processor core, clock speed, RAM), display
(technology, screen size and resolution), camera features and battery features,
LTESim and Players in 5G networks and exploring the structure and operation of a
cell phone tower.<br>
* Exploring frequency reuse and reuse factor in cellular network deployment.<br>
* Flipped classroom on CDMA2000, WCDMA, HSPA, HSDPA, HSUPA and HSPA+.<br><br>
Suggested Evaluation Methods:<br>
* Assignments on features of modern mobile phones and structure and operation of a
cell phone tower.<br>
* Solving frequency reuse relayed problems.<br>
* Quiz and discussion on CDMA and its variants and HSPA and its variants.<br><br>
UNIT II<br><br> 3G AND 4G WIRELESS MOBILE NETWORKS <br><br>
3GPP – UMTS and IMT-2000: Architecture, User Equipment, RNS, UTRAN, Node B, RNC
Functions – IP Multimedia Subsystem – 4G Cellular Networks – LTE – Control Plane – NAS
and RRC – User Plane – PDCP, RLC And NAC – IMT– Advanced Standard – Features Of
LTE– Advanced.<br><br>
Suggested Activities:<br>
* External learning - Explore 5G networks.<br>
* Flipped classroom on IP multimedia subsystem.<br>
* Analysis and requirements of cellular networks.<br><br>
Suggested Evaluation Methods:<br>
* Assignments on 5G networks.<br>
* Quiz and discussion on IP multimedia subsystem.<br>
* Design a cellular network for the given case study.<br><br>
UNIT III <br><br>MOBILITY SUPPORT IN IP AND TCP <br><br>
Mobile IP – Mobile Agent, Foreign Agent, Care of Address, Registration, Advertisement and
Discovery, Tunneling, IP within IP – Mobility Support in IPV6 – Mobility Header, Mobility
Options, Dynamic Home Agent Address Discovery, Cache Management, Bidirectional
Tunneling – TCP Over Wireless Networks – Indirect TCP –Snoop TCP – Mobile TCP.<br><br>
Suggested Activities:<br>
* External learning - Performing a survey of popular wireless routers and exploring
their configuration (Built in radio interfaces in terms of IEEE 802.11 and its variants,
support for MU - MIMO technology, external antennas, clock speed of the processor,
data rate supported).<br>
* Exploring the task list required to configure mobile IP and getting familiar with the
networking operating system commands required to configure mobile IP.<br>
* Flipped classroom on mobility support in IPv6.<br><br>
Suggested Evaluation Methods:<br>
* Assignments on features of wireless routers and their configuration.<br>
* Configuring mobile IP using network operating system commands.<br>
* Quiz and discussion on mobility support in IPv6.<br><br>
UNIT IV <br><br>APPLICATION DESIGN <br><br>
Aspects of Mobility – Middleware and Gateways – Mobile Devices and Profiles – Generic UI
Development – Multimodal and Multichannel UI – Mobile Memory Management – Design
Patterns for Limited Memory – Work Flow for Application Development – Techniques for
Composing Applications – Dynamic Linking – Plug-ins and Rule of Thumb for Using DLLs –
Concurrency and Resource Management – Look and Feel, Intents and Services – Storing
and Retrieving Data – Communication via the Web – Notification and Alarms.<br><br>
Suggested Activities:<br>
* External learning - Exploring XForms processing model and location based services.<br>
* Flipped classroom on GUI features supported in WAP, J2ME, BREW and Microsoft
platforms.<br>
* Analyzing problems in designing mobile applications where location and energy are
the constraints.<br><br>
Suggested Evaluation Methods:<br>
* Assignments on XForms and location based services.<br>
* Quiz and discussion on GUI features supported in WAP, J2ME, BREW and MS
platforms.<br>
* Designing and implementing location and energy constrained mobile applications.<br><br>
UNIT V <br><br>APPLICATION DEVELOPMENT <br><br>
Google Android Platform – Eclipse Simulator – Android Application Architecture – Event
Based Programming – Apple Iphone Platform – UI Tool Kit Interfaces – Cross Platform
Design and Tools – Event Handling and Graphics Services – Layer Animation – Location
Based Services – Resilient Programming Practices – Packaging and Deployment – Security
And Hacking.<br><br>
Suggested Activities:<br>
* Flipped classroom on Android emulator, DDMS, Debug– bridge, SQLite quick– start
guides.<br>
* External learning - Performing a comparative study of Android TV vs. Google
Chromecast.<br>
* Developing mobile apps using Android web APIs, location based services APIs.<br>
* Flipped classroom on targeting different device configurations and languages.<br><br>
Suggested Evaluation Methods:<br>
* Quiz and discussion on Android emulator, DDMS, Debug-bridge and SQLite.<br>
* Assignments on Android TV and Google chromecast.<br>
* Developing and testing simple mobile apps in Android and Apple iOS.<br>
* Quiz and discussion on device configurations and languages.<br><br>
TOTAL: 45 PERIODS<br><br>
OUTCOMES:<br><br>
On completion of the course, the students will be able to:<br><br>
1. Have knowledge on the architecture and protocols of 2G, 3G, and 4G cellular
system.<br>
2. Deploy various protocols that support mobility at network layer and transport layer.<br>
3. Design and implement the user interfaces for mobile applications.<br>
4. Design the mobile applications that are aware of the resource constraints of mobile
devices.<br>
5. Develop advanced mobile applications that access the databases and the web.<br>
6. Understand the intricacies in deploying cellular networks and developing mobile
applications based on resilient programming practices.<br><br>
TEXT BOOKS:<br><br>
1. Clint Smith, Daniel Collins, “Wireless Networks”, Third Edition, McGraw Hill
Publications, 2014.<br><br>
2. Share Conder, Lauren Darcey, “Android Wireless Application Development”, Volume
I, Third Edition, Pearson, 2014.<br><br>
REFERENCES:<br><br>
1. Jochen Schiller, “Mobile Communications”, Second Edition, Pearson, 2009.<br><br>
2. Paul Bedell, “Cellular networks: Design and Operation – A real world Perspective”,
Outskirts Press, 2014.<br><br>
3. Zigurd Mednieks, Laird Dornin, G, Blake Meike and Masumi Nakamura,
“Programming Android”, O’Reilly, 2011.<br><br>
4. Alasdair Allan, “iPhone Programming”, O’Reilly, 2010.<br><br>
5. Donny Wals, “Mastering iOS 12 Programming”, Packt, 2018.<br><br>
6. Reza B’Far, “Mobile Computing principles”, Cambridge University Press, 2005.
        `;}
        else if (subject1=="CRYPTOGRAPHY AND SECURITY" && sem1=="SEMESTER-7" && dept1=="INFORMATION TECHNOLOGY"){
            syllcont.innerHTML=`
            IT5703<br><br> CRYPTOGRAPHY AND SECURITY <br><br>
            CREDITS:3<br><br>
OBJECTIVES:<br><br>
* To understand the fundamentals of cryptography and number theory.<br>
* To use the standard security algorithms to provide confidentiality, integrity and
authentication for any applications.<br>
* To make use of application protocols to design and manage a secure system.<br>
* To learn the configuration and manage Firewall and WLAN Security.<br>
* To understand the importance of system security and its vulnerabilities.<br><br>
UNIT I <br><br>INTRODUCTION TO SECURITY AND NUMBER THEORY <br><br>
Basics of Security – CIA Triad – Threats, Attacks and Services – Classical Cryptography –
Substitution – Transposition – One-time Pad – Cryptanalysis – Number Theory – Modular
Arithmetic – Euclidean Theorem – Extended Euclidean Theorem – Algebraic Structures –
Galois Field – Prime Numbers – Fermat’s Theorem – Euler’s Phi function – Euler's Theorem
– Chinese Remainder theorem – Modular Exponentiation –Logarithms – Elliptic Curve
Arithmetic.<br><br>
Suggested Activities:<br>
* In-class activity - Practice cryptanalysis of classical cryptography and break the
classical algorithms using cryptographic attack.<br>
* In-class activity - Solve modular exponentiation and multiplicative inverse using
Fermat and Euler theorem.<br>
* Practical - Classical cryptography algorithms using Cryptool.<br><br>
Suggested Evaluation Methods:<br>
* Assignments on cryptanalysis of classical cryptography, additive Inverse,
Multiplicative Inverse and modular exponentiation using the theorem.<br>
* Quiz on classical cryptography and number theory.<br>
* Demonstration of the classical cryptography algorithms using Cryptool.<br><br>
UNIT II<br><br> SYMMETRIC CRYPTOGRAPHY <br><br>
Modern Cryptography – Symmetric Cipher – Block and Stream Cipher – Feistel Ciphers –
Data Encryption Standard (DES) – DES Structure – Key Generation – Simplified DES –
Linear and Differential cryptanalysis –Triple DES – Advanced Encryption Standard (AES) –
Basic Structure – Transformations – Key Expansions Process – Analysis of AES – Modes of
operation – RC4.<br><br>
Suggested Activities:<br>
* Explain the importance of key size and explore some examples with brute force
attack to break the key.<br>
* Demonstrate the working of DES and AES algorithms using CrypTool.<br>
* Demonstrate various cryptographic attacks on DES and AES.<br><br>
Suggested Evaluation Methods:<br>
* Assignments on key generation, linear and differential cryptanalysis of symmetric
cryptography.<br>
* Quiz on modes of operation and internal structure of DES and AES.<br><br>
UNIT III<br><br> ASYMMETRIC KEY CRYPTOGRAPHY <br><br>
Public Key Cryptosystems – RSA Algorithm – ElGamal Cryptosystems – Diffie-Hellman key
exchange – Elliptic curve cryptography – Hash functions – Hash algorithms – Secure Hash
Algorithm SHA – MD5 – Message Authentication Codes – Quantum Cryptography –
Quantum Key Distribution – Threshold Cryptography.<br><br>
Suggested Activities:<br>
* Highlight the mathematics behind RSA, Diffie-Hellman Key exchange and Elliptic
Curve Cryptography.<br>
* Demonstrate the Hash code generation using MD5 and SHA 256 algorithm.<br>
* Practical - Verify the Message Integrity using Hashing Techniques such as MD5 and
SHA256.<br>
* Case studies on Quantum and Threshold Cryptography.<br><br>
Suggested Evaluation Methods:<br>
* Assignments on RSA and ECC generation for encryption and decryption process.<br>
* Quiz on mathematics behind the public key algorithms, Quantum and Threshold
Cryptography.<br><br>
UNIT IV<br><br> SECURITY APPLICATIONS <br><br>
Digital Signatures Schemes– Digital Certificate – Key Management – Kerberos – Key
Agreement and Distribution – PKI – X.509 Certificate – E-Mail Security – PGP – S/MIME –
IP security – Virtual Private Network (VPN) – Web Security – Secure Socket Layer (SSL) –
Transport Layer Security – Secure Electronic Transaction (SET) – Blockchain.<br><br>
Suggested Activities:<br>
* Case studies on understand the components of X.509 Certificate and Blockchain.<br>
* Demonstrate IP security and configure VPN connection.<br>
* Implement the SSL/TLS in Web Server for a Web Application.<br><br>
Suggested Evaluation Methods:<br>
* Assignment on configuration of IP security and VPN connection in networks and
Blockchain.<br>
* Quizzes on Key Management, SSL, TLS and Blockchain.<br><br>
UNIT V<br><br> FIREWALL & WIRELESS SECURITY <br><br>
Buffer Overflow and Malicious Software – Password Management – Introduction to Firewall
– Firewall Generations – Intrusion Detection System – Types of IDS – Intrusion Prevention
System – Wireless LAN – Wireless LAN Security – Network Access Control and Cloud
Security.<br><br>
Suggested Activities:<br>
* Teaching with case studies: access control and cloud security.<br>
* Configure the Access Control List and using firewall, mitigate DoS attack.<br>
* Understand the safety measures during the implementation of security in WLAN.<br>
* Simulate the importance of various security standards in WLAN.<br><br>
Suggested Evaluation Methods:<br>
* Assignments on buffer overflow, malicious software and types of IDS.<br>
* Quizzes on firewall generation, WLAN security and cloud security.<br><br>
TOTAL: 45 PERIODS<br><br>
OUTCOMES:<br><br>
On completion of the course, the students will be able to:<br><br>
1. Apply the basic security algorithms and policies required for a computing system.<br>
2. Predict the vulnerabilities across any computing system and hence be able to design
security solution for any computing system.<br>
3. To identify any network security issues and resolve the issues.<br>
4. To manage the firewall and WLAN security.<br>
5. Evaluate the system related vulnerabilities and mitigation.<br>
6. To design secured web applications in real-time.<br><br>
TEXT BOOKS:<br><br>
1. William Stallings, “Cryptography and Network security Principles and Practices”,
Pearson/PHI, Seventh Edition, 2017.
REFERENCES:
1. Wenbo Mao, “Modern Cryptography Theory and Practice”, Pearson Education, 2004.<br><br>
2. Pfleeger and Pfleeger, “Security in computing”, Third Edition , PHI/Pearson, 2003.<br><br>
3. Behourz Forouzan, Debdeep Mukhopadyay, “Cryptography and Network Security”,
Tata McGraw Hill Education Pvt. Ltd, New Delhi, 2010.<br><br>
4. Gilles van Assche, “Quantum Cryptography and Secret-Key Distillation”, Cambridge
University Press, 2010.`;}
else if (subject1=="MOBILE COMPUTING" && sem1=="SEMESTER-7" && dept1=="INFORMATION TECHNOLOGY"){
    syllcont.innerHTML=`
    IT5711<br><br> MOBILE AND SECURITY LABORATORY <br><br>
    CREDITS:2<br><br>
OBJECTIVES:<br><br>
* To do several hands-on exercises to reinforce the students’ knowledge and
understanding of the various security aspects.<br>
* To explore the sequence of cryptographic algorithms by implementing using a
programming language.<br>
* To understand vulnerabilities and security flaws in the various applications.<br>
* To develop simple and location specific applications in android environment.<br>
* To analyse the performance of mobile networks using Network simulator.<br><br>
LIST OF EXERCISES:<br><br>
The following exercises are based on the cryptographic algorithms. They can be
implemented using any Programming Language.<br><br>
1. Write a program to perform encryption and decryption using the following algorithms:<br>
a. Caesar cipher<br>
b. Affine Cipher<br>
c. Hill Cipher<br>
d. Transposition Cipher.<br><br>
2. Perform cryptographic attack on the cipher-text generated using any of the
algorithms implemented in exercise 1.<br><br>
3. Write a program to demonstrate symmetric key encryption process using DES and
AES algorithm.<br><br>
4. Write a program to implement RSA algorithm and demonstrate the key generation
and encryption process.<br><br>
5. Write a program to generate message digest for the given message using the
SHA/MD5 algorithm and verify the integrity of message.<br><br>
6. Write a program to sign and verify a document using DSA algorithm.<br><br>
7. Perform Penetration testing on a web application to gather information about the
system, then initiate XSS and SQL injection attacks using tools like kali Linux.<br><br>
8. Develop a Mobile application for event handling and push notification in Android.<br><br>
9. Create animations and graphical primitives in Android environment.<br><br>
10. Develop a Location based services such as tracking, geofencing, and activity
recognition using Google play services.<br><br>
11. Develop a Mobile application for recognizing and authorizing using camera and
sensors.<br><br>
12. Performance analysis of various node deployment strategies in mobile environment
using network simulators such as NS2/NS3/OPNET/GloMoSim/NetSim.<br><br>
TOTAL: 60 PERIODS<br><br>
OUTCOMES:<br><br>
On completion of the course, the students will be able to:<br><br>
1. Attain knowledge to program both symmetric and asymmetric key cryptography.<br>
2. Implement specific encryption/decryption algorithms.<br>
3. Analyse the vulnerabilities in any application using penetration testing.<br>
4. Develop basic mobile applications in Android environment.<br>
5. Use both hardware and sensors to develop applications.<br>
6. Explore the performance analysis of mobile network using network simulator`;}
else if (subject1=="PROFESSIONAL ELECTIVE-4" && sem1=="SEMESTER-7" && dept1=="INFORMATION TECHNOLOGY"){
    syllcont.innerHTML=`PROFESSIONAL ELECTIVES<br><br>
    1. IT5034 Blockchain
Technologies
<br><br>
2. IT5035 IoT Based
Smart Systems
<br><br>
3. IT5036 Machine
Learning
<br><br>
4. IT5037 Cognitive
Computing
<br><br>
5. IT5038 Computational
Linguistics
<br><br>
6. IT5039 Deep Learning
<br><br>
7. MA5002
Probability and
Random
Processes
<br><br>
8. MA5356
Linear Algebra
and Numerical
Methods
<br><br>
9. IT5040
Video
Processing
and Analytics
<br><br>
10. IT5041
Full Stack
Software Development
<br><br>
11. IT5042
Wireless
Sensor and
Mesh
Networks
<br><br>
12. IT5043 Ethical
Hacking
<br><br>
13. IT5044
Next
Generation
Networks
<br><br>
14. IT5045 Computer
Forensics

    `;}
    else if (subject1=="PROFESSIONAL ELECTIVE-5" && sem1=="SEMESTER-7" && dept1=="INFORMATION TECHNOLOGY"){
        syllcont.innerHTML=`PROFESSIONAL ELECTIVES<br><br>
        1. IT5034 Blockchain
    Technologies
    <br><br>
    2. IT5035 IoT Based
    Smart Systems
    <br><br>
    3. IT5036 Machine
    Learning
    <br><br>
    4. IT5037 Cognitive
    Computing
    <br><br>
    5. IT5038 Computational
    Linguistics
    <br><br>
    6. IT5039 Deep Learning
    <br><br>
    7. MA5002
    Probability and
    Random
    Processes
    <br><br>
    8. MA5356
    Linear Algebra
    and Numerical
    Methods
    <br><br>
    9. IT5040
    Video
    Processing
    and Analytics
    <br><br>
    10. IT5041
    Full Stack
    Software Development
    <br><br>
    11. IT5042
    Wireless
    Sensor and
    Mesh
    Networks
    <br><br>
    12. IT5043 Ethical
    Hacking
    <br><br>
    13. IT5044
    Next
    Generation
    Networks
    <br><br>
    14. IT5045 Computer
    Forensics
    
        `;}
        else if (subject1=="OPEN ELECTIVE-2" && sem1=="SEMESTER-7" && dept1=="INFORMATION TECHNOLOGY"){
            syllcont.innerHTML=`
            OPEN ELECTIVES<br><br>
            1.
            AGRICULTURAL FINANCE,BANKING AND CO-OPERATION<br><br>
            2. BASIC CIRCUIT THEORY<br><br>
            3. BASICS OF HUMANS ANATOMY AND PHYSIOLOGY<br><br>
            4. CLIMATE CHANGE AND ITS IMPACT<br><br>
            5. CLINICAL TRIALS
            <br><br>
            6. ELECTRONIC DEVICES<br><br>
            7. ELECTRONIC MATERIALS<br><br>
            8. ENERGY TECHNOLOGY<br><br>
            9. ENVIRONMENTAL AND SOCIAL IMPACT ASSESMENT<br><br>
            10. FUNDAMENTALS OF PLANETARY AND REMOTE SENSING<br><br>
            11. GREEN BUILDING DESIGN<br><br>
            12. HOSPITAL MANAGEMENT<br><br>
            13. INTRODUCTION OF REBEWABLE ENERGY SYSTEM<br><br>
            14. INTRODUCTION OF CELL BIOLOGY<br><br>
            15. LEAN SIX SIGMA<br><br>
            16. LOW COST AUTOMATION<br><br>
            17. MEDICAL ELECTRONICS<br><br>
            18. MEMS ABD NEMS<br><br>
            19. MICROBIOLOGY<br><br>
            20. PROCESSS MODELING AND SIMULATION<br><br>
            21. ROBOTICS<br><br>
            22. SIGNAL AND SYSTEMS<br><br>
            23. SUPPLY CHAIN MANAGEMENT<br><br>
            24. SYSTEMS ENGINEERING<br><br>
            25. TELECOMMUNICATION SYSTEM MODELLING AND SIMULATION<br><br>
            26. WASTE WATER TREATMENT`;}
            else if (subject1=="PROJECT-1" && sem1=="SEMESTER-7" && dept1=="INFORMATION TECHNOLOGY"){
                syllcont.innerHTML=`
                CONTACT RESPECTIVE FACULTY OR THE HEAD OF THE DEPARTMENT.`;}

}
