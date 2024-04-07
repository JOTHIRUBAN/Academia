function syllabi4(){
    var subject1=document.getElementById("syllabus").value;
    let sem1= document.getElementById("sem").value;
    let dept1= document.getElementById("dept").value;
    var syllcont=document.getElementById("syll");
    if (subject1=="COMPILER ENGINEERING" && sem1=="SEMESTER-5" && dept1=="INFORMATION TECHNOLOGY"){
        syllcont.innerHTML=`
        IT5502<br><br> COMPILER ENGINEERING <br><br>
        CREDITS:3<br><br>
OBJECTIVES:<br><br>
* To learn about automata theory and regular expressions.<br>
* To learn the concepts in the design of compilers.<br>
* To learn about the runtime store organization.<br>
* To know the data structures used to implement symbol tables.<br>
* To be familiar with garbage collection.<br><br>
UNIT I<br><br> INTRODUCTION TO AUTOMATA THEORY AND REGULAR<br><br>
 EXPRESSIONS <br><br>
Finite Automata – Deterministic Finite Automata – Non-deterministic Finite Automata – NFA
to DFA – Finite Automata with Epsilon Transitions – Epsilon-NFA to DFA – Kleene’s
Theorem – Minimization of Automata – Regular Expressions – Equivalence between
Regular Expression and Automata – Properties of Regular Expressions.<br><br>
Suggested Activities:<br>
* Flipped classroom on Finite Automata and Regular Expressions.<br>
* External learning - Automata, Basics of Finite Automata, NFA, DFA ,Finite state
machines - Regular expressions.<br>
* Practical - Study of Lexical analysis tools and lexer generators.<br><br>
Suggested Evaluation Methods:<br>
* Tutorials on minimization of automata.<br>
* Assignments on regular expressions.<br>
* Quizzes on automata.<br><br>
UNIT II <br><br>LEXICAL ANALYSIS <br><br>
Introduction – The Structure of Compiler – Evolution of Programming Languages – Application
of Compiler Technology – Programming Languages Basics – Lexical Analysis – Role of
Lexical Analyzer – Specification and Recognition of Tokens – Lexical Analyzer Generators.<br><br>
Suggested Activities:<br>
* Flipped classroom on Compilers and Interpreters, The compilation process and the
anatomy of a compiler, Bootstrapping.<br>
* External learning - The role of the lexical analyzer, Finite state machines - Regular
expressions.<br>
* Practical - Perform lexical analysis and use lexical analyzer generators,
Implementation of lexers using FLEX.<br><br>
Suggested Evaluation Methods:<br>
* Tutorials on structure of the compiler.<br>
* Assignments on lexical analysis.<br>
* Quizzes on lexical generators.<br><br>
UNIT III<br><br> SYNTAX ANALYSIS <br><br>
Introduction – Context Free Grammar – Top Down Parsing – Recursive Descend Parsing –
Predictive Parsing – Non-Recursive Predictive Parsing – Error Recovery – Bottom Up
Parsing – LR Parsers – Construction of SLR (1) Parsing Table, Canonical LR (1) Parsing
Table and LALR (1) Parsing Table – Parser Generators.<br><br>
Suggested Activities:<br>
* Flipped classroom on languages, writing grammars for programming languages,
transformations on grammars.<br>
* External learning - Parser generators.<br>
* Practical - Read and write grammars for programming language constructs, Perform
top-down parsing, bottom-up parsing and use parser generators, Implementation of
Parsers using YACC in Unix Environment.<br><br>
Suggested Evaluation Methods:<br>
* Tutorials on context-free grammar.<br>
* Assignments on various parsers.<br>
* Quizzes on parsers.<br><br>
UNIT IV<br><br> INTERMEDIATE CODE GENERATION <br><br>
Symbol Table – Construction – Syntax Directed Definitions – Evaluation Orders for Syntax
Directed Definitions – Applications of Syntax Directed Translation – Intermediate Code
Generation – Three Address Code – Types and Declarations – Expression Translation –
Type Checking – Back Patching.<br><br>
Suggested Activities:<br>
* Flipped classroom on attributes grammars.<br>
* External learning - Type checking, intermediate code and abstract machines.<br>
* Practical - Perform semantic analysis including static checking, intermediate
representations and attribute grammars, implementation of semantic analyzers using
YACC.<br><br>
Suggested Evaluation Methods:<br>
* Tutorials on syntax directed definitions.<br>
* Assignments on type checking.<br>
* Quizzes on intermediate code generation.<br><br>
UNIT V <br><br>CODE GENERATION AND OPTIMIZATION <br><br>
Issues – Design of Code Generator – Addresses in the Target Code – Basic Blocks in Flow
Graph – Simple Code Generator – Peephole Optimization – Machine Independent
Optimization – Principal Sources of Optimizations – Bootstrapping a Compiler – Compiling
Compilers – Full Bootstrap.<br><br>
Suggested Activities:<br>
* Flipped classroom on Target machine.<br>
* External learning - Code generation, Elementary optimizations. Basicblocks,
Dataflow analysis.<br>
* Practical - Perform code generation.<br><br>
Suggested Evaluation Methods:<br>
* Tutorials on code generation.<br>
* Assignment problems flow graph.<br>
* Quizzes on code optimization.<br><br>
 TOTAL: 45 PERIODS<br><br>
OUTCOMES:<br><br>
On completion of the course, the students will be able to:<br>
CO1: Understand the concept of lexical analysis and construction of deterministic and non-
 deterministic automata.<br>
CO2: Understand the concept of parsing and construction of parser.
 Develop an Intermediate Code generator.<br>
CO3: Study programming language design, target machine design and run time environment
 of compilers.<br>
CO4: Study about the compiler construction tools.<br>
CO5: Obtain knowledge to construct a prototype compiler for a subset of a programming
 language.<br><br>
TEXT BOOKS:<br><br>
1. Alfred V. Aho, Monica S. Lam, Ravi Sethi, and Jeffrey D. Ullman, “Compilers:
Principles, Techniques, and Tools”, Second Edition, Pearson Education, 2009.<br><br>
2. John Hopcroft, Rajeev Motwani, Jeffrey Ullman, “Introduction To Automata Theory
Languages, and Computation”, Third Edition, Pearson Education, 2007.<br><br>
REFERENCES:<br><br>
1. Torbengidius Mogensen, “Basics of Compiler Design”, Springer, 2011.<br><br>
2. Charles N, Ron K Cytron, Richard J LeBlanc Jr., “Crafting a Complier”, Pearson
Education, 2010.<br><br>
3. K. D. Cooper, L. Torczon, “Engineering a Compiler”, Morgan-Kaufmann, Second
Edition, 2011.<br><br>
4. Micheal Sipser, “Introduction to the Theory of Computation”, Third Edition,2014.`;

    }
    else if (subject1=="COMPUTER NETWORKS" && sem1=="SEMESTER-5" && dept1=="INFORMATION TECHNOLOGY"){
        syllcont.innerHTML=`
        IT5551<br><br> COMPUTER NETWORKS <br><br>
        CREDITS:3<br><br>
OBJECTIVES:<br><br>
* To understand the concept of layering in networks.<br>
* To know the functions of protocols of each layer of TCP/IP protocol suite.<br>
* To visualize the end-to-end flow of information.<br>
* To understand the components required to build different types of networks.<br>
* To learn concepts related to network addressing and routing.<br><br>
UNIT I<br><br> INTRODUCTION AND APPLICATION LAYER <br><br>
Building network – Network Edge and Core – Layered Architecture – OSI Model – Internet
Architecture (TCP/IP) Networking Devices: Hubs, Bridges, Switches, Routers, and Gateways
– Performance Metrics – Introduction to Sockets – Application Layer protocols – HTTP –
FTP Email Protocols – DNS.<br><br>
Suggested Activities:<br>
* In-class activity - Solving problems on performance metrics.<br>
* In-class activity - HTTP problems.<br>
* Accessing HTTP and SMTP server through Telnet.<br>
* External learning - HTTP/DNS format using a tool like Wireshark.<br>
* External learning - POP3 and IMAP protocols of email application.<br><br>
Suggested Evaluation Methods:<br>
* Quiz on Wireshark.<br>
* Quiz on POP3 and IMAP.<br>
* Assignment problems different protocols.<br><br>
UNIT II<br><br> TRANSPORT LAYER <br><br>
Transport Layer functions – Multiplexing and Demultiplexing – User Datagram Protocol –
UDP Applications – Transmission Control Protocol – Flow Control – Retransmission
Strategies – Congestion Control.<br><br>
Suggested Activities:<br>
* Flipped Classroom on UDP Applications.<br>
* External learning - Wireshark for UDP, TCP packet formats.<br>
* External learning - Transport for Real Time Applications.<br>
* External learning - Understanding RFCs.<br>
* Assignments on flow control analysis in class.<br><br>
Suggested Evaluation Methods:<br>
* Quiz on UDP applications.<br>
* Quiz on real time transport protocols.<br>
* Discussion/assignment on RFC.<br>
* Interpreting Wireshark output.<br><br>
UNIT III<br><br> NETWORK LAYER <br><br>
Network Layer: Switching concepts – Internet Protocol – IPV4 Packet Format – IP
Addressing – Subnetting – Classless Inter Domain Routing (CIDR) – Variable Length Subnet
Mask (VLSM) – DHCP – ARP – Network Address Translation (NAT) – ICMP – Concept of
SDN.<br><br>
Suggested Activities:<br>
* In-class activity - IP addressing.<br>
* External learning - IPV4 Packet Format using Wireshark.<br>
* In-class activity - Subnetting for different scenarios.<br>
* Flipped classroom on CIDR.<br>
* External learning - Ping and trace-route commands.<br>
* Mini-project on the implementation of a protocol based on an RFC.<br><br>
Suggested Evaluation Methods:<br>
* Quiz on CIDR.<br>
* Check ability to use commands.<br><br>
UNIT IV<br><br> ROUTING <br><br>
Routing Principles – Distance Vector Routing – Link State Routing – RIP – OSPF – BGP –
IPV6 – Introduction to Quality of Service (QoS).<br><br>
Suggested Activities:<br>
* In-class activity - Distance Vector Routing, Link State Routing.<br>
* External learning - RIP, OSPF packet formats.<br>
* Assignment on Link state routing for different network graphs.<br>
* In-class activity - Error Detection and Correction.<br>
* Flipped classroom on IPV6.<br>
* External learning - Study on global IP address assignment.<br><br>
Suggested Evaluation Methods:<br>
* Quizzes on RIP, OSPF packet format.<br>
* Quiz on IPv6.<br><br>
UNIT V <br><br>DATA LINK AND PHYSICAL LAYERS <br><br>
Data Link Layer – Framing – Flow control – Error control – Media Access Control – Ethernet
Basics – CSMA/CD – Virtual LAN – Wireless LAN (802.11) – Physical layer – Signals –
Bandwidth and Data Rate – Encoding – Multiplexing – Shift Keying – Transmission Media.<br><br>
Suggested Activities:<br>
* In-class activity - Problems on encoding techniques.<br>
* External learning - Virtual LAN , Wireless LAN (802.11) formats.<br>
* Flipped Classroom on recent developments in transmission media.<br>
* Design a protocol for some application.<br>
* Trace the end-to-end flow of packets through the network.<br><br>
Suggested Evaluation Methods:<br>
* Quizzes on VLAN and 802.11 formats.<br>
* Presentation/Implementation of design.<br>
* Demonstration of RFC implementation project.<br><br>
TOTAL : 45 PERIODS<br><br>
OUTCOMES:<br><br>
On the completion of the course, the student will be able to:<br>
CO1: Highlight the significance of the functions of each layer in the network.<br>
CO2: Identify the devices and protocols to design a network and implement it.<br>
CO3: Build network applications using the right set of protocols and estimate their
 performances.<br>
CO4: Trace packet flows and interpret packet formats.<br>
CO5: Apply addressing principles such as subnetting and VLSM for efficient routing.<br>
CO6: Explain media access and communication techniques.<br><br>
TEXT BOOKS:<br><br>
1. James F. Kurose, Keith W. Ross, “Computer Networking: A Top-Down Approach”,
Seventh Edition, Pearson Education, 2017.<br><br>
2. Larry L. Peterson, Bruce S. Davie, “Computer Networks: A Systems Approach”, Fifth
Edition, Morgan Kaufmann Publishers Inc., 2011.<br><br>
REFERENCES:<br><br>
1. William Stallings, “Data and Computer Communications”, Tenth Edition, Pearson
Education, 2014.<br><br>
2. Ying-Dar Lin, Ren-Hung Hwang, Fred Baker, “Computer Networks: An Open Source
Approach”, McGraw Hill, 2012.
`;}
else if (subject1=="WEB TECHNOLOGIES" && sem1=="SEMESTER-5" && dept1=="INFORMATION TECHNOLOGY"){
    syllcont.innerHTML=`
    IT5501<br><br> WEB TECHNOLOGIES <br><br>
    CREDITS:3<br><br>
OBJECTIVES:<br><br>
* To learn the basic object oriented concepts using Java language.<br>
* To understand the advanced features of Java language.<br>
* To understand the essential client side technologies for web programming.<br>
* To develop applications using database connectivity and server side programming in
Java environment.<br>
* To develop smart device based web application and deploy in different platforms.<br><br>
UNIT I<br><br> JAVA BASICS <br><br>
Introduction to Java – Input / Output and Operators – Control Statements – Methods –
Arrays – Lists – Classes and Objects – Strings – Inheritance – Polymorphism and Interfaces
– Regular Expressions – Exception Handling.<br><br>
Suggested Activities:<br>
* Simple Java programming using control statements, strings, arrays,
ArrayList, passing and returning object with exception handling.<br>
* Exploring class hierarchy using inheritance and implementing Interface based run–
time polymorphism.<br>
* String manipulation and regular expression based examples.<br><br>
Suggested Evaluation Methods:<br>
* Grading system to evaluate simple java exercises.<br>
* Tutorials on program writing skills.<br>
* Simple application development using all the above mentioned features.<br><br>
UNIT II <br><br>JAVA GUI, FILE STREAM AND CONCURRENCY <br><br>
GUI Development using SWING – I/O Streams and Object Serialization – Generic
Collections – Concurrency – Thread States and Life Cycles – Thread Synchronization –
Java Networking.<br><br>
Suggested Activities:<br>
* Applet and frame based application development using Swing.<br>
* File stream and object serialization on text and binary data.<br>
* Thread priorities and synchronization based application development.<br>
* Simple networking programs like chat application.<br><br>
Suggested Evaluation Methods:<br>
* Grading system to evaluate simple java exercises.<br>
* Tutorials on various GUI control based applet and frame applications with event
handling.<br>
* Application development based on I/O stream and thread manipulation.<br><br>
UNIT III <br><br>CLIENT SIDE ESSENTIALS <br><br>
Java Script Objects and Functions – JQuery – Accessing DOM Elements using Java Script
and JQuery Objects – Java Script Event Handling – XML DOM – AJAX Enabled Rich
Internet Applications with XML and JSON – Dynamic Access and Manipulation of Web
Pages using Java Script and JQuery – Web Speech API – Speech Synthesis Markup
Language.<br><br>
Suggested Activities:<br>
* Programming exercises on HTML forms with Java script and JQuery objects.<br>
* XML and JSON based AJAX enabled rich Internet application.<br>
* Tutorials on web speech API.<br><br>
Suggested Evaluation Methods:<br>
* Case studies on simple web site with HTML, Java script and JQuery objects.<br>
* AJAX enabled web site realization.<br>
* Java script based speech API implementation.<br><br>
UNIT IV<br><br> SERVER SIDE ESSENTIALS <br><br>
Overview of Servlet – Life Cycle of Servlet – Servlet Configuration – Running Servlet with
Database Connectivity – Servlet Support for Cookies – Session Tracking – Basics of JSP –
Java Server Faces – Multitier Application Architecture – MVC Architecture of JSF Apps –
JSF Components – Session Tracking – Developing Dynamic Data Driven Websites.<br><br>
Suggested Student Activities:<br>
* Servlet programming with database connectivity and session tracking.<br>
* JSF applications with database connectivity and session management.<br><br>
Suggested Evaluation Methods:<br>
* Demonstration of simple web application using Servlet and JSF.<br>
* Session management demos using Servlet and JSF.<br><br>
UNIT V <br><br>SERVERLESS AND MOBILE BASED WEB DEVELOPMENT <br><br>
Node Programming Fundamentals – Asynchronous Programming Techniques – Sequencing
Asynchronous Logic – Node JS – Global Objects – Event Listeners – J2ME Basics – MIDlet
–Mobile Web Application Frameworks – Simple Android Based Development – Cloud Based
Applications Deployment.<br><br>
Suggested Student Activities:<br>
● Asynchronous web application development.<br>
● Android based mobile application development.<br>
● Practical - Application deployment in web servers.<br><br>
Suggested Evaluation Methods:<br>
● Evaluating asynchronous application development.<br>
● Evaluation of online web hosting.<br>
● Modular design factors like cohesion and coupling used to evaluate proper modules
breakup.<br><br>
OUTCOMES:<br><br>
On completion of the course, the student will be able to:<br>
CO1: Implement object oriented concepts using Java language.<br>
CO2: Develop GUI application by including I/O streams and threads.<br>
CO3: Create web pages with proper client–side features.<br>
CO4: Design dynamic web pages with server–side and other technologies.<br>
CO5: Develop simple android based mobile application.<br>
CO6: Deploy web applications in a cloud based environment.<br><br>
TOTAL: 45 PERIODS<br><br>
TEXT BOOKS:<br><br>
1. Paul Deitel, Harvey Deitel, “Java SE 8 for Programmers”, Pearson Education, 2015.<br><br>
2. “Core and Advanced Java”, Black book, DreamTech Press, 2018.<br><br>
REFERENCES:<br><br>
1. Uttam K. Roy, “Web Technologies”, Oxford University Press, 2011.<br><br>
2. Harvey Deitel, Abbey Deitel, “Internet and World Wide Web How To Program”, 5th
Edition, Pearson Publication, 2012.<br><br>
3. Reto Meier, “Professional Android 4 Application Development”, Wiley India Pvt Ltd,
2012.<br><br>
4. Mike Cantelon, Marc Harter, TJ Holowaychuk and Nathan Rajlich, “Node.js in
Action”, Manning Publications, 2013.
`;}
else if (subject1=="COMPUTER NETWORKS LABORATORY" && sem1=="SEMESTER-5" && dept1=="INFORMATION TECHNOLOGY"){
    syllcont.innerHTML=`
    IT5511<br><br> COMPUTER NETWORKS LABORATORY <br><br>
    CREDITS:2<br><br>
OBJECTIVES:<br><br>
* To explore various network commands in different operating systems.<br>
* To understand and practice the configuration of various network devices.<br>
* To implement functionalities using raw sockets.<br>
* To understand and implement the network programming concepts using APIs.<br>
* To explore the various network simulators for analysing network behaviour.<br><br>
EXERCISES:<br><br>
1. Practice different network commands available in Windows and Linux Operating
Systems and troubleshoot the network.<br>
2. Configure the network devices such as Router, Switch, Hub, Bridge and Repeater.<br>
3. Write socket programs to simulate the operation of the following application layer
protocols:<br><br>
a) HTTP<br>
b) FTP<br>
c) DNS<br>
d) SMTP and POP3<br><br>
4. Simulate ECHO and CHAT applications using the following transport layer protocols:<br>
e) TCP<br>
f) UDP<br><br>
5. Implement the functionality of Ping and traceroute commands using raw sockets.<br>
6. Analysing the Network traffic using Packet Analyser (Wireshark) and understanding
the various protocol headers.<br>
7. Configure IPv4 and IPv6 addressing for a network using static and dynamic
approaches (SLAAC and DHCP).<br>
8. Configure Dynamic Routing mechanism using RIP and OSPF protocols.<br>
9. Simulate TCP congestion control mechanism using NS2/NS3/OPNET.<br>
10. Performance analysis of Network using NS2/NS3/OPNET (Delay, Bandwidth etc.)<br><br>
TOTAL: 60 PERIODS<br><br>
OUTCOMES:<br><br>
On completion of the course, the student will be able to:<br>
CO1: Configure various networking devices.<br>
CO2: Understand the nuances of various network programming APIs and protocols of
 application layer protocols.<br>
CO3: Program with raw sockets for network protocol implementation.<br>
CO4: Configure IP addressing and routing for a network.<br>
CO5: Understand the behaviour of TCP for congestion via simulation.<br>
CO6: Work with network simulators.
`;}
else if (subject1=="WEB TECHNOLOGIES LABORATORY" && sem1=="SEMESTER-5" && dept1=="INFORMATION TECHNOLOGY"){
    syllcont.innerHTML=`
    IT5512 <br><br>WEB TECHNOLOGIES LABORATORY <br><br>
    CREDITS:2<br><br>
OBJECTIVES:<br><br>
* To develop simple Java programs using object orientation concepts.<br>
* To program using files and threads for concurrent operations.<br>
* To design attractive GUI using framework.<br>
* To create dynamic web pages using CSS, JavaScript and AJAX.<br>
* To develop mobile based web applications in cloud environment.<br><br>
LIST OF EXPERIMENTS:<br><br>
1. Simple Java programs using arrays and lists.<br>
2. Object orientation program using inheritance and polymorphism.<br>
3. Simple association using objects (pass & return by reference).<br>
4. Simple GUI application development using applet and SWING.<br>
5. Implement multithreaded program for concurrent operations.<br>
6. Develop program to set priority and synchronize java threads.<br>
7. Input and Output manipulation on files (Read/Write).<br>
8. Java programs on generic and collections.<br>
9. Client-Server network application using java sockets.<br>
10. Dynamic web page creation using Javascript, Jquery and AJAX.<br>
11. Develop servlet and JSF application with JDBC access.<br>
12. Manage sessions in JSP using cookies.<br>
13. Create simple Node Javascript functions for server.<br>
14. Android application for location based service.<br>
15. Develop Cloud based web application.<br><br>
TOTAL: 60 PERIODS<br><br>
OUTCOMES:<br><br>
On completion of the course, the student will be able to<br><br>
CO1: Implement object oriented concepts using Java language.<br>
CO2: Develop GUI application by including I/O streams and threads.<br>
CO3: Create web pages with proper client-side features.<br>
CO4: Design dynamic web pages with server-side and other technologies.<br>
CO5: Develop simple android based mobile application.<br>
CO6: Deploy web applications in a cloud based environment.`;}
else if (subject1=="ELECTIVES HUMANITIES-1" && sem1=="SEMESTER-5" && dept1=="INFORMATION TECHNOLOGY"){
    syllcont.innerHTML=`
    HSMC <br><br> ELECTIVES – HUMANITIES I (ODD SEMESTER)<br><br>

1.
HU5171 Language and
Communication
<br><br>
2. HU5172 Values and Ethics <br><br>
3. HU5173 Human Relations at Work <br><br>
4. HU5174 Psychological Processes <br><br>
5. HU5175 Education, Technology and
Society
<br><br>
6. HU5176 Philosophy <br><br>
7. HU5177 Applications of Psychology
in Everyday Life`;}
else if (subject1=="PROFESSIONAL ELECTIVE-1" && sem1=="SEMESTER-5" && dept1=="INFORMATION TECHNOLOGY"){
    syllcont.innerHTML=`
    LIST OF PROFESSIONAL ELECTIVES<br><br>
    SEMESTER V ONWARDS<br><br>
1. IT5001 Virtualization<br><br>
2. IT5002 Unix Internals <br><br>
3. IT5003 Heterogeneous
Computing <br><br>
4. IT5004 Graph Theory <br><br>
5. IT5005
Human
Computer
Interaction<br><br>

6. IT5006
Logic and
Applications in
Computer
Science
<br><br>
7. IT5007 Advances in
Databases <br><br>
8. IT5008 Computer
Graphics <br><br>
9. IT5009 Multimedia
Technologies <br><br>
10. IT5010
Fundamentals
Digital Signal
Processing
<br><br>
11. IT5011
Multimedia
Coding
Techniques
<br><br>
12. IT5012 Pattern
Recognition <br><br>
13. IT5013 Visualization
Techniques <br><br>
14. IT5014 C# and .NET
Programming <br><br>
15. IT5015 Software
Testing<br><br>
16. IT5016 E-Learning
Techniques `;}
else if (subject1=="AUDIT COURSE-2" && sem1=="SEMESTER-5" && dept1=="INFORMATION TECHNOLOGY"){
    syllcont.innerHTML=`
    AUDIT COURSES (AC)<br><br>
    Registration for any of these courses is optional to students<br><br>
    1. AD5091 Constitution of India <br><br>
    2. AD5092 Value Education <br><br>
    3. AD5093 Pedagogy Studies <br><br>
    4. AD5094 Stress Management by Yoga <br><br>
    5. AD5095
    Personality Development
    Through Life Enlightenment
    Skills<br><br>
    6. AD5096 Unnat Bharat Abhiyan <br><br>
    7. AD5097 Essence of Indian Knowledge
    Tradition <br><br>
    8. AD5098
    Sanga Tamil Literature
    Appreciation <br><br>
    Total Credits: 24 `;}
    else if (subject1=="SUMMER INTERNSHIP-SUMMER PROJECT" && sem1=="SEMESTER-5" && dept1=="INFORMATION TECHNOLOGY"){
        syllcont.innerHTML=`
        CONTACT RESPECTIVE FACULTY OR THE HEAD OF THE DEPARTMENT.`;}
}
