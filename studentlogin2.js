function syllabi2(){
    var subject1=document.getElementById("syllabus").value;
    let sem1= document.getElementById("sem").value;
    let dept1= document.getElementById("dept").value;
    var syllcont=document.getElementById("syll");
    if (subject1=="DISCRETE MATHEMATICS" && sem1=="SEMESTER-3" && dept1=="INFORMATION TECHNOLOGY"){
        syllcont.innerHTML=`
        MA5302<br><br> DISCRETE MATHEMATICS <br><br>
        CREDITS:4<br><br>
OBJECTIVES:<br><br>
* To introduce Mathematical Logic, Inference Theory and proof methods.<br>
* To provide fundamental principles of combinatorial counting techniques.<br>
* To introduce graph models, their representation, connectivity and traversability.<br>
* To explain the fundamental algebraic structures, groups and their algebraic
properties.<br>
* To provide exposure to the development of the algebraic structures, lattices and
Boolean algebra and to demonstrate the utility of Boolean laws.<br><br>
UNIT I <br><br>LOGIC AND PROOFS <br><br>
Propositional Logic – Propositional Equivalences – Predicates and Quantifiers – Nested
Quantifiers – Rules of Inference – Introduction to Proofs – Proof Methods and Strategy.<br><br>
UNIT II<br><br> COMBINATORICS <br><br>
Mathematical Induction – Strong Induction and Well Ordering – The Basics of Counting -
The Pigeonhole Principle – Permutations and Combinations – Recurrence Relations -
Solving Linear Recurrence Relations Using Generating Functions – Inclusion – Exclusion –
Principle and Its Applications.<br><br>
UNIT III<br><br> GRAPHS <br><br>
Graphs and Graph Models – Graph Terminology and Special Types of Graphs – Matrix
Representation of Graphs and Graph Isomorphism – Connectivity – Euler and Hamilton
Paths.<br><br>
UNIT IV <br><br>ALGEBRAIC STRUCTURES <br><br>
Groups – Subgroups – Homomorphisms – Normal Subgroup and Coset – Lagrange‘S
Theorem – Definitions and Examples of Rings and Fields.<br><br>
UNIT V<br><br> LATTICES AND BOOLEAN ALGEBRA <br><br>
Partial Ordering – Posets – Lattices as Posets – Properties of Lattices – Lattices as
Algebraic Systems – Sub Lattices – Direct Product And Homomorphism – Some Special
Lattices – Boolean Algebra.<br><br>
TOTAL: 60 PERIODS<br><br>
OUTCOMES:<br><br>
On completion of the course, the students will be able to:<br>
1. Understand the validity of the logical arguments, mathematical proofs and
correctness of the algorithm.<br>
2. Apply combinatorial counting techniques in solving combinatorial related problems.<br>
3. Use graph models and their connectivity, traversability in solving real world problems.<br>
4. Understand the significance of algebraic structural ideas used in coding theory and
cryptography.<br>
5. Apply Boolean laws and Boolean functions in combinatorial circuit designs.<br><br>
TEXTBOOKS:<br><br>
1. Kenneth H.Rosen, “Discrete Mathematics and its Applications”, Tata Mc Graw Hill
Pub. Co.Ltd., Seventh Edition, Special Indian Edition, New Delhi, 2011.<br>
2. Tremblay J.P. and Manohar R, “Discrete Mathematical Structures with Applications
to Computer Science”, Tata McGraw Hill Pub. Co. Ltd, Thirtieth Reprint, New Delhi,
2011.<br><br>
REFERENCES:<br><br>
1. Ralph. P. Grimaldi, “Discrete and Combinatorial Mathematics: An Applied
Introduction”, Pearson Education, Fifth Edition, New Delhi, 2014.<br>
2. Seymour Lipschutz and Mark Lipson, ”Discrete Mathematics”, Schaum‘s Outlines,
Tata McGraw Hill Pub. Co. Ltd., Third Edition, New Delhi, 2013.<br>
3. Thomas Koshy,” Discrete Mathematics with Applications”, Elsevier
Publications, Boston, 2004.
 `; }
else if (subject1=="DIGITAL LOGIC AND DESIGN" && sem1=="SEMESTER-3" && dept1=="INFORMATION TECHNOLOGY"){
    syllcont.innerHTML=`
    IT5301<br><br> DIGITAL LOGIC AND DESIGN <br><br>
    CREDITS:3<br><br>
OBJECTIVES:<br><br>
* To learn Boolean algebra and simplification of Boolean functions.<br>
* To learn to design and analyze different combinational circuits.<br>
* To study the basics of synchronous sequential logic, analyze and design sequential
circuits.<br>
* To learn about basic memory devices and programmable logic devices to build
simple digital systems.<br>
* To learn to write code in Hardware Definition Language for designing larger digital
systems.<br><br>
UNIT I <br><br>BOOLEAN ALGEBRA AND GATES <br><br>
Number Systems: Binary, Octal, Hexadecimal – Representation of Negative Numbers – 1’s
and 2’s Complements – Arithmetic Operations – Binary Codes – Boolean Algebra –
Theorems and Postulates – Functions – Truth Table – Logic Gates – Universal gates–
Canonical and Standard Forms – Minterms and Maxterms – Sum of Products and Product
of Sums.<br><br>
Suggested Activities:<br>
* In-class activity - Number systems, problems in number conversion and
complements.<br>
* Flipped classroom and activity on various binary codes.<br>
* Proofs and simplification of basic theorems and properties of Boolean algebra in
class.<br>
* External learning - Exclusive OR function.<br><br>
Suggested Evaluation Methods:<br>
* Verifying the correctness of the activity.<br>
* Checking the understanding of the equivalence among various binary codes for
decimal digits.<br>
* Quiz on logic gates.<br><br>
UNIT II <br><br>KARNAUGH MAP AND COMBINATIONAL LOGIC <br><br>
Simplification of Boolean Functions –Karnaugh Map – 2, 3, 4 variables – NAND/NOR
Implementations – Combinational Circuits – Arithmetic Circuits – Half and Full Adders –
Subtractors – Introduction to HDL.<br><br>
Suggested Activities:<br>
*Assignments on simplification of Boolean functions using 3 and 4 variable K-map.<br>
* External learning - HDL for simple circuits.<br><br>
Suggested Evaluation Methods:<br>
* Verifying the correctness and alternate ways of solving the assignment problems.<br>
* Quiz on HDL for simple circuits.<br><br>
UNIT III<br><br> COMBINATIONAL LOGIC <br><br>
Binary Parallel Adder – Carry Look-ahead Adder – BCD Adder – Binary Multiplier –
Magnitude Comparator – Code Converters – Decoder – Encoder – Priority Encoder –
Mux/Demux – Applications.<br><br>
Suggested Activities:<br>
* pplications of combinational circuits - activity in class. For example: Identifying the
role of the combinational circuits in designing circuits like digital boards.<br>
* External learning - HDL for the combinational circuits.<br>
* Assignments on applications of MUX/DeMUX circuits.<br><br>
Suggested Evaluation Methods:<br>
* Verifying HDL code for combinational circuits.<br>
* Peer evaluation to check circuits for correctness.<br>
* Verifying the alternate ways used, if any, for solving the assignment problems.<br><br>
UNIT IV <br><br>SEQUENTIAL LOGIC <br><br>
RS Latch – D Latch – Flip Flops – JK, T, D – Master/Slave Flip Flop – Flip flop excitation
tables – Analysis of clocked sequential circuits – Moore /Mealy models – Registers: Shift
Registers, Universal Shift Register – Counters – Asynchronous Ripple Counters,
Synchronous Counters.<br><br>
Suggested Activities:<br><br>
* Assignments on analysis of different sequential circuits.<br>
* External learning - Up-down, ring, decade, modulus and cascaded counters.<br>
* External learning - HDL for sequential circuits.<br><br>
Suggested Evaluation Methods:<br>
* Verifying the correctness of the analysis of the given circuits.<br>
* Quiz on counters.<br><br>
UNIT V <br><br>SYSTEM DESIGN <br><br>
Memory Systems – RAM – ROM – Memory Decoding – Digital System Design using PLA,
PAL and FPGA.<br><br>
Suggested Activities:<br>
* Assignments on memory decoding, PAL/PLA design.<br>
* Flipped classroom on basic memory types.<br><br>
Suggested Evaluation Methods:<br>
* Verifying the design for various inputs.<br>
* Quiz on memory types.<br><br>
PRACTICAL EXERCISES <br><br>
1. Verification of Boolean theorems using logic gates. (2 hrs)<br>
2. Design and implementation of combinational circuits using gates for arbitrary
functions. (2 hrs)<br>
3. Implementation of 4-bit binary adder/subtractor circuits and getting started with HDL.
(2 hrs)<br>
4. Implementation of combinational circuits using code converters. (2 hrs)<br>
5. Implementation of BCD adder, encoder and decoder circuits. (4 hrs)<br>
6. Implementation of any one of the synchronous counters. (2 hrs)<br>
7. Implementation of a Universal Shift register. (2 hrs)<br>
8. HDL coding for any of the combinational and sequential circuits. ( 4 hrs)<br>
9. Mini project on design of a digital circuit for solving practical problems.<br><br>
OUTCOMES:<br><br>
On completion of the course, the students will be able to:<br>
CO1: Simplify complex Boolean functions.<br>
CO2: Implement digital circuits using combinational logic ICs and PLDs.<br>
CO3: Understand the characteristics of various Flip-Flops.<br>
CO4: Design digital circuits with combinational and sequential components.<br>
CO5: Use HDL to build digital systems.<br>
CO6: Analyze digital system designs.<br>
TOTAL: 60 PERIODS<br><br>
TEXT BOOK:<br><br>
1. M. Morris Mano, Michael D. Ciletti, “Digital Design”, Fifth Edition, Pearson Education,
2013.<br><br>
REFERENCES:<br><br>
1. Charles H. Roth Jr., “Fundamentals of Logic Design”, Fifth Edition, Jaico Publishing
House, 2003.<br>
2. John F. Wakerly, “Digital Design Principles and Practices”, Fourth Edition, Pearson
Education, 2007.<br>
3. Donald D. Givone, “Digital Principles and Design”, Tata McGraw Hill, 2003.<br>
4. G. K. Kharate, “Digital Electronics”, Oxford University Press, 2010.`;}
else if (subject1=="PROGRAMMING AND DATA STRUCTURES" && sem1=="SEMESTER-3" && dept1=="INFORMATION TECHNOLOGY"){
    syllcont.innerHTML=`
    IT5352<br><br> PROGRAMMING AND DATA STRUCTURES <br><br>
    CREDITS:3<br><br>
OBJECTIVES:<br>
* To introduce the basics of C programming language.<br>
* To learn the concepts of advanced features of C.<br>
* To understand the concepts of ADTs and linear data structures.<br>
* To know the concepts of non-linear data structure and hashing.<br>
* To familiarize the concepts of sorting and searching techniques.<br><br>
UNIT I<br><br> C PROGRAMMING FUNDAMENTALS <br><br>
Data Types – Variables – Operations – Expressions and Statements – Conditional
Statements – Functions – Recursive Functions – Arrays – Single and Multi-Dimensional
Arrays.<br><br>
Suggested Activities:<br>
* Implementing programs using data types, arithmetic operators and basic input/output
operations.<br>
* Developing programs using if-else, do-while, while, for, switch, break, continue,
enum.<br>
* Write an application to perform operations like finding the maximum, minimum,
average values using single dimensional integer and float arrays.<br>
* Develop an application to perform matrix operations using multi-dimensional arrays.<br>
* Create an application that performs operations like concatenation, finding a substring
from a given string, etc. using character arrays.<br>
* Develop any application (student’s choice) using User-defined functions and
Recursive functions.<br><br>
Suggested Evaluation Methods:<br>
* Tutorials on conditionals and loops.<br>
* Evaluation of the programs implemented.<br>
UNIT II<br><br> C PROGRAMMING - ADVANCED FEATURES <br><br>
Structures – Union – Enumerated Data Types – Pointers: Pointers to Variables, Arrays and
Functions – File Handling – Preprocessor Directives.<br><br>
Suggested Activities:<br>
* Implementing applications using Structures, Unions, Enumerations.<br>
* Demonstration of C programs using pointers to variables, arrays, functions and using
address arithmetic.<br>
* Demonstration of programs using dynamic memory.<br>
* Demonstration of real world applications using file operations.<br><br>
Suggested Evaluation Methods:<br>
* Tutorials on file handling.<br>
* Checking output of programs implemented.<br><br>
UNIT III<br><br> LINEAR DATA STRUCTURES <br><br>
Abstract Data Types (ADTs) – List ADT – Array-Based Implementation – Linked List –
Doubly-Linked Lists – Circular Linked List – Stack ADT – Implementation of Stack –
Applications – Queue ADT – Priority Queues – Queue Implementation – Applications.<br><br>
Suggested Activities:<br>
* Converting an algorithm from recursive to non-recursive using stack.<br>
* Demonstrating stack for Towers of Hanoi application.<br>
* Developing any application (student’s choice) using all the linear data structures.<br><br>
Suggested Evaluation Methods:<br>
* Tutorials on applications of linear data structures.<br>
* Checking output of programs implemented.<br><br>
UNIT IV <br><br>NON-LINEAR DATA STRUCTURES <br><br>
Trees – Binary Trees – Tree Traversals – Expression Trees – Binary Search Tree – Hashing
- Hash Functions – Separate Chaining – Open Addressing – Linear Probing– Quadratic
Probing – Double Hashing – Rehashing.<br><br>
Suggested Activities:<br>
* Implementing binary tree and tree traversals.<br>
* Solving expressions using expression trees by determining infix, prefix and postfix
expressions.<br>
* Implementation of phone directory using hash tables.<br>
* Developing any application using trees.<br><br>
Suggested Evaluation Methods:<br>
* Tutorials on hashing.<br>
* Check output of programs implemented.<br>
* Quiz on various topics of the unit.<br><br>
UNIT V<br><br> SORTING AND SEARCHING TECHNIQUES <br><br>
Insertion Sort – Quick Sort – Heap Sort – Merge Sort –Linear Search – Binary Search.<br><br>
Suggested Activities:<br>
* External learning - External sorting implementation.<br>
* Implementation of all sorting techniques in C language.<br>
* Demonstration of searching techniques under best and worst case inputs.<br><br>
Suggested Evaluation Methods:<br>
* Tutorials on external sorting.<br>
* Checking output of programs implemented.<br><br>
TOTAL: 45 PERIODS<br><br>
OUTCOMES:<br><br>
On completion of the course, the students will be able to:<br>
CO1: Develop C programs for any real world/technical application.<br>
Co2: Apply advanced features of C in solving problems.<br>
CO3: Write functions to implement linear and non–linear data structure operations.<br>
CO4: Suggest and use appropriate linear/non–linear data structure operations for solving a
 given problem.<br>
CO5: Appropriately use sort and search algorithms for a given application.<br>
CO6: Apply appropriate hash functions that result in a collision free scenario for data storage
 and retrieval.<br><br>
TEXT BOOKS:<br><br>
1. Mark Allen Weiss, “Data Structures and Algorithm Analysis in C”, Second
Edition, Pearson Education, 1997.<br>
2. Reema Thareja, “Programming in C”, Second Edition, Oxford University Press, 2016.<br><br>
REFERENCES:<br>
1. Brian W. Kernighan, Rob Pike, “The Practice of Programming”, Pearson Education,
1999.<br>
2. Paul J. Deitel, Harvey Deitel, “C How to Program”, Seventh Edition, Pearson
Education, 2013.<br>
3. Alfred V. Aho, John E. Hopcroft, Jeffrey D. Ullman, “Data Structures and Algorithms”,
Pearson Education,1983.<br>
4. Ellis Horowitz, Sartaj Sahni and Susan Anderson, “Fundamentals of Data Structures”,
Galgotia, 2008.
`;}
else if (subject1=="DATABASE MANAGEMENT SYSTEMS" && sem1=="SEMESTER-3" && dept1=="INFORMATION TECHNOLOGY"){
    syllcont.innerHTML=
`IT5351 <br><br>DATABASE MANAGEMENT SYSTEMS <br><br>
CREDITS:3<br><br>
OBJECTIVES:<br><br>
* To learn the fundamentals of data models, conceptualize and depict a database
system using ER diagram.<br>
* To study the principles to be followed to create an effective relational database and
write SQL queries to store/retrieve data to/from database systems.<br>
* To know the fundamental concepts of transaction processing, concurrency control
techniques and recovery procedure.<br>
* To learn about the internal storage structures using different file and indexing
techniques and the basics of query processing and optimization.<br>
* To study the basics of distributed databases, semi-structured and un-structured data
models.<br><br>
UNIT I<br><br> RELATIONAL DATABASES <br><br>
Purpose of Database System – Views of Data – Data Models – Database System
Architecture – Introduction to Relational Databases – Relational Model – Keys – Relational
Algebra – Relational Calculus – SQL Fundamentals – Advanced SQL features – Triggers –
Embedded SQL.<br><br>
Suggested Activities:<br>
* Creating tables with key constraints, adding and removing constraints with referential
integrity using DDL commands.<br>
* Flipped classroom on relational algebra operations (selection, projection, joins etc.).<br>
* Write SQL queries for demonstrating CRUD operations, aggregate functions and
various join operations using DML commands.<br>
* Create stored procedures for executing complex SQL transactions.<br>
* Create triggers for alerting user/system while manipulating data.<br><br>
Suggested Evaluation Methods:<br>
* Tutorials on DDL, DML and DCL queries.<br>
* Quizzes on relational algebra operations.<br>
* Demonstration of created stored procedures and triggers.<br><br>
UNIT II<br><br> DATABASE DESIGN <br><br>
Entity-Relationship Model – ER Diagrams – Functional Dependencies – Non-Loss
Decomposition Functional Dependencies – First Normal Form – Second Normal Form –
Third Normal Form – Dependency Preservation – Boyce/Codd Normal Form – Multi-Valued
Dependencies and Fourth Normal Form – Join Dependencies and Fifth Normal Form.<br><br>
Suggested Activities:<br>
* Simple database application design using ER diagram.<br>
* Practical - ER modeling using open source tools and realizing database.<br>
* Study of various anomalies and normalizing table (1NF, 2NF, 3NF, BCNF).<br>
* Flipped classroom on topics of database design and normalization.<br><br>
Suggested Evaluation Methods:<br>
* Tutorials on application specific ER Diagram.<br>
* Tutorials on normalization and database design.<br><br>
UNIT III<br><br> TRANSACTION MANAGEMENT <br><br>
Transaction Concepts – ACID Properties – Serializability – Transaction Isolation Levels –
Concurrency Control – Need for Concurrency – Lock-Based Protocols – Deadlock Handling
– Recovery System – Failure Classification – Recovery Algorithm.<br><br>
Suggested Activities:<br>
* Checking serializability among transactions.<br>
* Flipped classroom on concurrency control protocols.<br>
* Study of crash recovery algorithm (ARIES).<br><br>
Suggested Evaluation Methods:<br>
* Tutorials on serializability and crash recovery algorithm<br>
* Quizzes on concurrency control protocols.<br><br>
UNIT IV <br><br>IMPLEMENTATION TECHNIQUES <br><br>
Overview of Physical Storage Media – RAID – File Organization – Organization of Records
in Files – Indexing and Hashing – Ordered Indices – B+ tree Index Files – Static Hashing –
Dynamic Hashing – Query Processing Overview – Catalog Information for Cost Estimation –
Query Optimization.<br><br>
Suggested Student Activities:<br>
* Study of different RAID levels and its uses in different applications.<br>
* Practical - Creation of B+ tree with insertion and deletion operations.<br>
* Assignments on cost estimation of different types of queries.<br><br>
Suggested Evaluation Methods:<br>
* Report on applications of RAID levels.<br>
* Tutorials on B+ Tree manipulation.<br>
* Quizzes on hashing mechanisms.<br>
* Exercise on cost estimation for various SQL queries.<br>
* Evaluation of the practical assignments.<br><br>
UNIT V<br><br> ADVANCED TOPICS <br><br>
Overview of Distributed Databases – Data Fragmentation – Replication – XML Databases –
XML Schema – NOSQL Database: Characteristics – CAP theorem – Types of NoSQL
Datastores: Column Oriented, Document, Key-Value and Graph Types – Applications –
Current Trends.<br><br>
Suggested Student Activities:<br>
* Design of distributed database using fragmentation.<br>
* Creation of XML document based on XML schema.<br>
* Creation of document and column oriented databases and simple manipulation.<br>
Suggested Evaluation Methods:<br>
* Tutorials on fragmenting database tables and writing simple SQL queries.<br>
* Assignments on creation of XML schema and validating XML documents.<br>
* Demonstration of created document and column-oriented databases.<br><br>
TOTAL: 45 PERIODS<br><br>
OUTCOMES:<br><br>
On completion of the course, the student will be able to:<br>
CO1: Model an application’s data requirements using conceptual modeling and design
database schemas based on the conceptual model.<br>
CO2: Formulate solutions to a broad range of query problems using relational algebra/SQL.<br>
CO3: Demonstrate an understanding of normalization theory and apply such knowledge to
the normalization of a database.<br>
CO4: Run transactions and estimate the procedures for controlling the consequences of
concurrent data access.<br>
CO5: Explain basic database storage structures, access techniques and query processing.<br>
CO6: Describe distributed, semi-structured and unstructured database systems.<br><br>
TEXT BOOKS:<br><br>
1. Abraham Silberschatz, Henry F. Korth, S. Sudharshan, “Database System
Concepts”, Sixth Edition, Tata McGraw Hill, 2014.<br>
2. Ramez Elmasri, Shamkant B. Navathe, “Fundamentals of Database Systems”,
Seventh Edition, Pearson Education, 2017.<br><br>
REFERENCES:<br><br>
1. C. J. Date, A. Kannan, S. Swamynathan, “An Introduction to Database Systems”,
Eighth Edition, Pearson Education, 2006.<br>
2. Raghu Ramakrishnan, Johannes Gehrke, “Database Management Systems”, Fourth
Edition, Tata McGraw Hill, 2010.<br>
3. G. K. Gupta, “Database Management Systems”, Tata McGraw Hill, 2011.<br>
4. Carlos Coronel, Steven Morris, Peter Rob, “Database Systems: Design,
Implementation and Management”, Ninth Edition, Cengage Learning, 2011.`;}
else if (subject1=="SOFTWARE ENGINEERING" && sem1=="SEMESTER-3" && dept1=="INFORMATION TECHNOLOGY"){
    syllcont.innerHTML=
`
IT5302 <br><br>SOFTWARE ENGINEERING <br><br>
CREDITS:3<br><br>
OBJECTIVES:<br>
* To gain knowledge about various software development lifecycle (SDLC) models.<br>
* To learn how to elicit and formulate requirements.<br>
* To be aware of designing a software considering the various perspectives of end
user.<br>
* To learn to develop a software component using coding standards and facilitate code
reuse.<br>
* To analyze the software using metrics and measurement and predict the complexity
and the risk associated.<br><br>
UNIT I<br><br> PRODUCT AND PROCESS <br><br>
The Nature of Software – The changing nature of Software – The Software Process –
Process models – Prescriptive Process Models – Specialized Process Models – Agile
Development – Extreme Programming (XP) – Other Agile Process Models.<br><br>
Suggested Activities:<br>
* In-class activity - Application specific product and process view.<br>
* External learning - Impact of unified process models on quality software development
methods and JIT software.<br><br>
Suggested Evaluation Methods:<br>
* Assignments on selection of suitable software process models for a given software
specification.<br>
* Tutorials on identification of sample application for each process model and justify
the same stating reasons.<br>
* Assignments on selection of appropriate standards for each phase in software
development.<br><br>
UNIT II<br><br> REQUIREMENTS ANALYSIS AND SPECIFICATION <br><br>
Requirements Analysis – Software Requirements – Requirements Engineering – Eliciting
Requirements – Developing Use Cases – Building the Requirements Model – Negotiating
and Validating Requirements.<br><br>
Suggested Activities:<br>
* External learning - Using open source tools for requirement engineering to
understand the requirements traceability and interdependency among the
functionalities provided by the software project.<br>
* External learning - Using open source tools for conceptual data modeling of a sample
application, scenario based modeling of a problem statement and class based
modeling for given software requirements.<br><br>
Suggested Evaluation Methods:<br>
* Quiz on requirements elicitation mechanisms and selection of an appropriate
strategy.<br>
* Assignments on requirement categorization (considering contradicting, omission,
commission of requirements) in a software project; Data Modeling of Sample
application; Designing use case diagram and activity diagram to analyze the
requirements obtained from the customer and segregate them as use cases and
determine the possible set of activities from the end user; Determining the flow of
data/events among the processes in the application under consideration.<br><br>
UNIT III<br><br> ANALYSIS AND DESIGN <br><br>
Requirements Modeling: Scenarios, Information, Analysis Classes – Scenario Based
Modeling – Data Modeling – Class-Based Modeling – Flow Oriented Models – Behavioral
Models.
Design Process and Concepts – Design Model: Data Design Elements – Architectural
Design – Component Level Design – Deployment Level Design – User Interface Design –
Pattern-Based Design.<br><br>
Suggested Activities:<br>
* External learning - Use open source tools to perform different modeling approaches.<br>
* Model the object classes that might be used in the system implementation to
represent a mailbox and an e-mail message.<br>
* Develop a software design for any socially relevant project.<br><br>
Suggested Evaluation Methods:<br>
* Quizzes on different modeling approaches and design methodologies.<br>
* Identification of the data and flow of the software design.<br>
* Creation of UML diagrams using a tool such as StarUML.<br><br>
UNIT IV <br><br>SOFTWARE TESTING <br><br>
Software Testing Strategies – System Testing – Debugging – White Box Testing – Black Box
Testing – Model Based Testing – Testing for Specialized Environments, Architectures and
Applications – Testing Object-Oriented and Web Based Applications – User Interface
Testing – Configuration Testing – Security Testing – Performance Testing.<br><br>
Suggested Activities:<br>
* External learning - Understanding the requirements (SRS) and designing a suitable
test suite; Determining valid interfaces for integration testing and designing
necessary stub and driver modules; Software test documentation.<br>
* External learning - Testing a simple online application on selected test cases.<br>
* Tutorials on automation software for testing.<br>
* In-class activity - Equivalence class partitioning, boundary value analysis.<br><br>
suggested Evaluation Methods:<br>
* Quiz and discussion on testing strategies, types of testing and their methods.<br>
* Assignments on testing of sample application using any OSS on software test
automation.<br>
* Assignments on testing sample application using Black Box approaches and
understanding the differences in selecting of test cases from the test suite.<br><br>
UNIT V<br><br> SOFTWARE PROJECT MANAGAMENT <br><br>
Software Project Management Concepts – Process and Project Metrics – Estimation for
Software Projects – Project Scheduling – Risk Management – Software Configuration
Management – Software Process Improvements (SPI) – The SPI Process – Capability
Machine Model Integration (CMMI) – Other SPI Frameworks.<br><br>
Suggested Activities:<br>
* External learning - Tools for estimating software cost.<br>
* Flipped classroom on software project management, risk management & mitigation,
configuration management, software documentation standards.<br><br>
Suggested Evaluation Methods:<br>
* Tutorials on identification of potential risks for a software project during development/
maintenance and tabulate.<br>
* Assignments on using a software configuration management template for a software
project.<br>
* Quizzes on various metrics of project management.<br><br>
TOTAL: 45 PERIODS<br><br>
OUTCOMES:<br><br>
On completion of the course, the students will be able to:<br>
CO1: Obtain an insight into the concepts of software engineering.<br>
CO2: Analyze and resolve information technology problems through the application of
 systematic approaches and diagnostic tools for end to end solutions.<br>
CO3: Elicit the requirements for real-time problems.<br>
CO4: Estimate the cost of software, risks of handling, do software planning and
 configuration management.<br>
CO5: Have knowledge about the role of software tester and be aware of testing
 methodologies and tools.<br>
CO6: Maintain documentation for software engineering process.<br><br>
TEXT BOOK:<br><br>
1. Roger S. Pressman, “Software Engineering: A Practitioner‘s Approach” , McGraw Hill
International Edition, Seventh Edition, 2009.<br><br>
REFERENCES:<br><br>
1. Ian Sommerville, “Software Engineering”, Ninth Edition, Pearson Education, 2008.<br>
2. Watts S. Humphrey, “A Discipline For Software Engineering” , Pearson Education,
2007.<br>
3. Shari Lawrence Pfleeger, Joanne M. Atlee, “Software Engineering: Theory and
Practice”, Fourth Edition, Pearson Education, 2010.<br>
4. ISO STANDARDS https://www.iso.org/home.html.`;}
else if (subject1=="PROGRAMMING AND DATA STRUCTURES LABORATORY" && sem1=="SEMESTER-3" && dept1=="INFORMATION TECHNOLOGY"){
    syllcont.innerHTML=
`
IT5311<br><br> PROGRAMMING AND DATA STRUCTURES LABORATORY <br><br>
CREDITS:2<br><br>
OBJECTIVES:<br><br>
* To introduce the concepts of structured programming language and writing ADTs.<br>
* To familiarize with the advanced features of C language.<br>
* To introduce the concepts of primitive data structures.<br>
* To introduce the concepts of hashing and sorting.<br>
* To understand the searching process in linear and non-linear data structures.<br><br>
LIST OF EXERCISES:<br><br>
1. Practice of C Programming on real world/technical applications using statements,
expressions, decision making constructs.<br>
2. Practice of C Programming on real world/technical applications using Iterative and
branching constructs, Structures, arrays, functions, pointers and File handling.<br>
3. Implementation of Linked List.<br>
4. Implementation of Stack using Arrays and Linked List.<br>
5. Implementation of Queue using Arrays and Linked List.<br>
6. Implementation of Stack and Queue applications.<br>
7. Implementation of Binary Search Tree.<br>
8. Implementation of Priority Queue.<br>
9. Implementation of Insertion Sort, Heap Sort.<br>
10. Implementation of Quick Sort, Merge Sort.<br>
11. Implementation any application using Linear Search.<br>
12. Implementation any application using Binary Search.<br><br>
TOTAL: 60 PERIODS<br><br>
OUTCOMES:<br><br>
On completion of the course, the students will be able to:<br>
CO1: Develop C programs for any real world/technical situations.<br>
CO2: Apply advanced features of C in solving problems.<br>
CO3: Implement data structures using C language.<br>
CO4: Write code using linear and non-linear data structure operations.<br>
CO5: Implement various sorting and searching techniques.<br>
CO6: Analyze and implement hashing techniques that solve in linear time.`;}
else if (subject1=="DATABASE MANAGEMENT SYSTEMS LABORATORY" && sem1=="SEMESTER-3" && dept1=="INFORMATION TECHNOLOGY"){
    syllcont.innerHTML=
`IT5312<br><br> DATABASE MANAGEMENT SYSTEMS LABORATORY <br><br>
CREDITS:2<br><br>
OBJECTIVES:<br><br>
* To learn and implement important commands in SQL.<br>
* To learn the usage of nested and joint queries.<br>
* To understand functions, procedures and procedural extensions of databases.<br>
* To understand design and implementation of typical database applications.<br>
* To be familiar with the use of a front end tool for GUI based application development.<br><br>
LABORATORY EXERCISES:<br><br>
1. Create a database table, add constraints (primary key, unique, check, Not null),
insert rows, update and delete rows using SQL DDL and DML commands.<br>
2. Create set of tables, add foreign key constraints and incorporate referential integrity.<br>
3. Query the database tables using different ‘where’ clause conditions and also
implement aggregate functions.<br>
4. Query the database tables and explore sub queries and simple join operations.<br>
5. Query the database tables and explore natural, equi and outer joins.<br>
6. Write user defined functions and stored procedures in SQL.<br>
7. Execute complex transactions and realize DCL and TCL commands.<br>
8. Write SQL Triggers for insert, delete, and update operations in database table.<br>
9. Create View and index for database tables with large number of records.<br>
10. Create a XML database and validate it using XML schema.<br>
11. Create Document, column and graph based data using NOSQL database tools.<br>
12. Develop a simple GUI based database application and incorporate all the abovementioned features.<br><br>
TOTAL: 60 PERIODS<br><br>
OUTCOMES:<br><br>
On completion of the course, the student will be able to:<br>
CO1: Create databases with different types of key constraints.<br>
CO2: Write simple and complex SQL queries using DML and DCL commands.<br>
CO3: Realize database design using 3NF and BCNF.<br>
CO4: Use advanced features such as stored procedures and triggers and incorporate in GUI
based application development.<br>
CO5: Create XML database and validate with meta-data (XML schema).<br>
CO6: Create and manipulate data using NOSQL database. `;}
else if (subject1=="ELECTIVES HUMANITIES-1" && sem1=="SEMESTER-3" && dept1=="INFORMATION TECHNOLOGY"){
    syllcont.innerHTML=
`HSMC– ELECTIVES – HUMANITIES I (ODD SEMESTER)<br><br>
1.
HU5171 Language and
Communication
<br><br>
2. HU5172 Values and Ethics <br><br>
3. HU5173 Human Relations at Work <br><br>
4. HU5174 Psychological Processes <br><br>
5. HU5175 Education, Technology and
Society<br><br>
6. HU5176 Philosophy <br><br>
7. HU5177 Applications of Psychology
in Everyday Life `;}

}
