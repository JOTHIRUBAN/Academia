function syllabi1(){
    var subject1=document.getElementById("syllabus").value;
    let sem1= document.getElementById("sem").value;
    let dept1= document.getElementById("dept").value;
    var syllcont=document.getElementById("syll");
    if (subject1=="PROFESSIONAL COMMUNICATION" && sem1=="SEMESTER-2" && dept1=="INFORMATION TECHNOLOGY"){
        syllcont.innerHTML=`
        HS5251 <br><br>PROFESSIONAL COMMUNICATION <br><br>
        CREDITS:2<br><br>
OBJECTIVES<br><br>
* To comprehend various reading materials relevant to technical context and
understand the main and supporting ideas of the reading materials.<br>
* To write effective job applications along with detailed CV for internship or
placements.<br>
* To explore definitions, essay and report writing techniques and practice them in order
to develop associated skills.<br><br>
UNIT I<br><br> TECHNICAL COMMUNICATION <br><br>
Theory:<br>
Reading: Reading the Interview of an Achiever and Completing Exercises (Skimming,
Scanning and Predicting) – Writing: Writing a Short Biography of an Achiever Based on
Given Hints – Grammar: Asking and Answering Questions, Punctuation in Writing,
Prepositional Phrases<br><br>
UNIT II<br><br> SUMMARY WRITING <br><br>
Theory:<br>
Reading: Reading Technical Essays/ Articles and Answering Comprehension Questions –
Writing: Summary Writing – Grammar: Participle Forms, Relative Clauses<br><br>
UNIT III<br><br> PROCESS DESCRIPTION <br><br>
Theory:<br>
Reading: Reading Instruction Manuals – Writing: Writing Process Descriptions – Writing
Instructions – Grammar: Use of Imperatives, Active and Passive Voice, Sequence Words<br><br>
UNIT IV<br><br> REPORT WRITING <br><br>
Theory:<br>
Reading: Reading and Interpreting Charts/Tables and Diagrams – Writing: Interpreting
Charts/Tables and Diagrams, Writing a Report – Grammar: Direct into Indirect Speech, Use
of Phrases<br><br>
UNIT V <br><br>WRITING JOB APPLICATIONS <br><br>
Theory:<br>
Reading: Reading a Job Interview, SOP, Company Profile and Completing Comprehension
Exercises – Writing: Job Applications and Resumes And Sops-Grammar: Present Perfect
and Continuous Tenses.<br><br>
TOTAL : 30 PERIODS<br><br>
LEARNING OUTCOMES<br>
On completion of the course, the students will be able to:<br>
* Read and comprehend technical texts effortlessly.<br>
* Write technical reports and job application for internship or placement.<br>
* Learn to use language effectively in a professional context.<br><br>
Assessment Pattern<br><br>
* Two written internal assessments to test learner’s progress in grammar, reading and
writing skills.<br>
* End Semester exam to be tested in two parts: Theory exam for three hours and
listening and speaking skills along with vocabulary for two hours.`;

    }
 else if (subject1=="ENGINEERING MATHEMATICS-2" && sem1=="SEMESTER-2" && dept1=="INFORMATION TECHNOLOGY"){
    syllcont.innerHTML=`
    MA5252<br><br> ENGINEERING MATHEMATICS – II <br><br>
(Common to all branches of B.E. / B.Tech. Programmes in II Semester)<br><br>
CREDITS:4<br><br>
OBJECTIVES:<br><br>
* To acquaint the students with the concepts of vector calculus which naturally arises
in many engineering problems.<br>
* To develop an understanding of the standard techniques of complex variable theory
in particular analytic function and its mapping property.<br>
* To familiarize the students with complex integration techniques and contour
integration techniques which can be used in real integrals.<br>
* To acquaint the students with Differential Equations which are significantly used in
Engineering problems.<br>
* To make the students appreciate the purpose of using transforms to create a new
domain in which it is easier to handle the problem that is being investigated.<br><br>
UNIT I<br><br> VECTOR CALCULUS <br><br>
Gradient and Directional Derivative – Divergence and Curl – Irrotational and Solenoidal
Vector Fields – Line Integral Over A Plane Curve – Surface Integral – Area of a Curved
Surface – Volume Integral – Green’s Theorem, Stoke’s Theorem and Gauss Divergence
Theorem – Verification and Application In Evaluating Line, Surface and Volume Integrals.
UNIT II<br><br> ANALYTIC FUNCTION <br><br>
Analytic Functions – Necessary and Sufficient Conditions for Analyticity – Properties –
Harmonic Conjugates – Construction of Analytic Function - Conformal Mapping – Mapping
by Functions – Bilinear Transformation<br><br>
UNIT III<br><br> COMPLEX INTEGRATION <br><br>
Line Integral - Cauchy’s Integral Theorem – Cauchy’s Integral Formula – Taylor’s and
Laurent’s Series – Singularities – Residues – Residue Theorem – Application of Residue
Theorem for Evaluation of Real Integrals – Use of Circular Contour and Semicircular Contour
With No Pole on Real Axis.<br><br>
UNIT IV <br><br>DIFFERENTIAL EQUATIONS <br><br>
Method of Variation of Parameters – Method of Undetermined Coefficients – Homogenous
Equations of Euler’s and Legendre’s Type – System of Simultaneous Linear Differential
Equations with Constant Coefficients.<br><br>
UNIT V <br><br>LAPLACE TRANSFORMS <br><br>
Existence Conditions – Transforms of Elementary Functions – Transform of Unit Step
Function and Unit Impulse Function – Basic Properties – Shifting Theorems – Transforms of
Derivatives and Integrals – Initial and Final Value Theorems – Inverse Transforms –
Convolution Theorem – Transform of Periodic Functions – Application to Solution of Linear
Ordinary Differential Equations With Constant Coefficients.<br><br>
TOTAL : 60 PERIODS<br><br>
OUTCOMES:<br><br>
On completion of the course, students will be able to:<br>
1. Calculate grad, div and curl and use Gauss, Stokes and Greens theorems to simplify
calculations of integrals.<br>
2. Construct analytic functions and use their conformal mapping property in application
problems.<br>
3. Evaluate real and complex integrals using the Cauchy’s integral formula and residue
theorem.<br>
4. Apply various methods of solving differential equation which arise in many application
problems.<br>
5. Apply Laplace transform methods for solving linear differential equations.<br><br>
TEXTBOOKS:<br><br>
1. Erwin Kreyszig, "Advanced Engineering Mathematics", John Wiley and Sons, Tenth
Edition, New Delhi, 2015.<br>
2. Grewal B.S., “Higher Engineering Mathematics”, Khanna Publishers, Forty fourth
Edition, New Delhi, 2017.<br><br>
REFERENCES:<br><br>
1. Bali N., Goyal M., Watkins C., “Advanced Engineering Mathematics”, Firewall Media
(An imprint of Lakshmi Publications Pvt., Ltd.,), Seventh Edition, New Delhi, 2009.<br>
2. Glyn James, “Advanced Modern Engineering Mathematics”, Pearson Education,
Fourth Edition, New Delhi, 2011.<br>
3. Jain R.K., Iyengar S.R.K., “Advanced Engineering Mathematics”, Narosa
Publications, Fifth Edition, New Delhi, 2017.<br>
4. Peter V.O’Neil, “Advanced Engineering Mathematics”, Cengage Learning India Pvt.,
Ltd, Seventh Edition, New Delhi, 2012.<br>
5. Ramana B.V., “Higher Engineering Mathematics”, Tata McGraw Hill Co. Ltd.,
Eleventh Reprint, New Delhi, 2010.`;
 }
 else if (subject1=="INFORMATION TECHNOLOGY ESSENTIALS" && sem1=="SEMESTER-2" && dept1=="INFORMATION TECHNOLOGY"){
    syllcont.innerHTML=`
    IT5201<br><br> INFORMATION TECHNOLOGY ESSENTIALS <br><br>
CREDITS:3<br><br>
OBJECTIVES:<br><br>
*To design and develop web pages using HTML and CSS.<br>
* To understand the general concepts of PHP scripting language and MySQL
functionalities for the development of simple data-centric applications.<br>
* To provide a basic knowledge of computer hardware and software.<br>
* To familiarize with the basic taxonomy and terminology of computer networking and
mobile communications.<br>
* To understand various types of information systems and their complexities.<br><br>
UNIT I <br><br>WEB AND SCRIPTING ESSENTIALS <br><br>
Internet Basics – Browser Fundamentals – Authoring Tools – Introduction to HTML5 –
HTML5 Tags – HTML5 Forms – Cascading Style Sheets (CSS3) Fundamentals – Need for
Scripting Languages – Introduction to JavaScript/ Angular JS.<br><br>
Suggested Activities:<br>
* Browse the internet on special topics given by instructor.<br>
* Learn HTML basic tags for web page design.<br>
* Identify different types of form validations in the websites that are commonly used.<br>
* Practical - Design of a small simple website, interlinking set of web pages created
using the HTML tags and CSS.<br><br>
Suggested Evaluation Methods:<br>
* Quizzes on all the topics of the unit.<br>
* Discussion on form validation.<br>
* Peer evaluation of the simple web-sites created.<br><br>
UNIT II <br><br>SERVER-SIDE ESSENTIALS (PHP) <br><br>
Introduction to PHP – PHP Variables – Constants – Operators – Flow Control and Looping –
Arrays – Strings – Functions – File Handling – Exception Handling – PHP and HTML –
Database Management – Introduction to MySQL – MySQL Commands – MySQL Database
Creation – Connecting MySQL and PHP – Querying MySQL Database with PHP – Session
and Cookies.<br><br>
Suggested Activities:<br>
* Practical - Simple programs using PHP.<br>
* Design of a dynamic web pages using PHP.<br>
* Practical - Database creation using MySQL and PHP scripts.<br>
* Practical - Creation of session and cookies.<br><br>
Suggested Evaluation Methods:<br><br>
* Quizzes on different topics of the unit.<br>
* Demonstration of the implementations.<br>
* Group discussions design of web page.<br><br>
UNIT III<br><br> HARDWARE ESSENTIALS <br><br>
Motherboard – Networking Cards – Graphics Card – Processors – Hard Drive – USB Port –
Monitor Ports – Servers – Types of Servers – Web Server – Database Server – Data Center
and Cloud Servers – Server Management.<br><br>
Suggested Activities:<br>
* Understanding Personal Computer and various components.<br>
* Case studies on different types of servers.<br>
* Survey on data centre, cloud server and high-end server.<br><br>
Suggested Evaluation Methods:<br>
* Quizzes on hardware components.<br>
* Presentations of case studies and survey.<br><br>
UNIT IV <br><br>NETWORK ESSENTIALS <br><br>
Basics of Computer System – Data Transmission Fundamentals – Communication Medium
–Fundamentals of Computer Networking – Types of Computer Networks – Network
Topologies – Network Standards: OSI Model, TCP/IP Model – Network Protocols: TCP,
UDP, IP – Network Components – Introduction to Mobile Communication – Generations of
Cellular Networks – GSM.<br><br>
Suggested Activities:<br>
* Flipped classroom on generations of cellular networks.<br>
* Explore the web to know more about the networking concepts and recent
technologies. Students may present their findings orally or by a written report or
through discussion forums.<br>
* Explore the networking devices used in laboratories and homes, and their
configurations.<br><br>
Suggested Evaluation Methods:<br>
* Quizzes on network transmission and communication.<br>
* Report evaluation by peers.<br>
* Discussion on network devices.<br><br>
UNIT V<br><br> APPLICATION ESSENTIALS<br><br>
Creation of Simple Interactive Applications – Simple Database Applications – Introduction to
Information Systems – Personal Information System – Information Retrieval System – Social
Networking Applications.<br><br>
Suggested Activities:<br>
* Flipped classroom on social networking applications.<br>
* Explore the web to know more about the concepts and technologies used for the
design of Information Systems. Students may present their findings orally or by a
written report.<br>
* Design a simple web or mobile application.<br>
* Explore and analyze some of the visual analytics software.<br><br>
Suggested Evaluation Methods:<br>
* Quizzes on features of social networking applications.<br>
* Presentations on various information systems.<br>
* Demonstration of application.<br>
* Discussions through forums.<br><br>
TOTAL :45 PERIODS<br><br>
OUTCOMES:<br><br>
On completion of the course, the student will be able to:<br>
CO1: Create dynamic website/web based applications using HTML, PHP, and MYSQL
 database.<br>
CO2: Design websites that meet specified needs and interests using basic elements to
 control layout and style.<br>
CO3: Debug the programs by applying concepts and error handling techniques of HTML,
 JavaScript, PHP and MYSQL.<br>
CO4: Understand the basic concepts of data communications and networking.<br>
CO5: Describe the basic principles of mobile communication systems.<br>
CO6: Identify the fundamental concepts and key issues in the design of commonly used
 applications.<br><br>
TEXT BOOKS:<br><br>
1. Robin Nixon, “Learning PHP, MySQL, JavaScript, CSS & HTML5: A Step-by-Step
Guide to Creating Dynamic Websites”, O'Reilly Media, Inc, 2014.<br>
2. James Kurose and Keith Ross, “Computer Networking: A Top-Down Approach”,
Seventh Edition, 2017.<br><br>
REFERENCES:<br><br>
1. Steven Holzner, “PHP: The Complete Reference”, Fifth Edition, Mc Graw Hill, 2017.<br>
2. Niederst Robbins, Jennifer, “Learning Web Design: A Beginner's Guide to HTML,
CSS, Javascript, and Web Graphics”, Fifth Edition, O'Reilly Media, 2018.<br>
3. Laura Lemay, Rafe Colburn, Jennifer Kyrnin, “Mastering HTML, CSS & JavaScript
Web Publishing”, BPB Publications, 2016.<br>
4. Douglas E. Comer, “Computer Networks and Internets”, Sixth Edition, Prentice Hall,
2015.<br>
5. Jochen Schiller, “Mobile Communications”, Pearson Education, 2012.<br>
6. R. Kelly Rainer, Casey G. Cegielski, Brad Prince, “Introduction to Information
Systems”, Fifth Edition, Wiley Publication, 2014.
`;}
else if (subject1=="BASICS OF ELECTRICAL AND ELECTRONICS ENGINEERING" && sem1=="SEMESTER-2" && dept1=="INFORMATION TECHNOLOGY"){
    syllcont.innerHTML=`
    EE5251<br><br> BASICS OF ELECTRICAL AND ELECTRONICS ENGINEERING <br><br>
CREDITS:3<br><br>
OBJECTIVES:<br><br>
* To understand the basic concepts of electric circuits, magnetic circuits and wiring.<br>
* To understand the operation of AC and DC machines.<br>
* To understand the working principle of electronic devices and circuits.<br><br>
UNIT I <br><br>BASIC CIRCUITS AND DOMESTIC WIRING <br><br>
Electrical Circuit Elements (R, L and C)-Dependent And Independent Sources – Ohm’s LawKirchhoff’s Laws – Mesh Current and Node Voltage Methods (Analysis with only
Independent Source) – Phasors – RMS-Average Values – Sinusoidal Steady State
Response of Simple RLC Circuits. Types of Wiring – Domestic Wiring – Specification of
Wires – Earthing-Methods – Protective Devices.<br><br>
UNIT II <br><br>THREE PHASE CIRCUITS AND MAGNETIC CIRCUITS <br><br>
Three Phase Supply – Star Connection – Delta Connection – Balanced and Unbalanced
Loads- Power in Three-Phase Systems – Comparison of Star and Delta Connections –
Advantages-Magnetic Circuits-Definitions – MMF, Flux, Reluctance, Magnetic Field
Intensity, Flux Density, Fringing, Self and Mutual Inductances-Simple Problems.<br><br>
UNIT III<br><br> ELECTRICAL MACHINES <br><br>
Working Principle of DC Generator, Motor-EMF And Torque Equation-Types – Shunt, Series
and Compound-Applications. Working Principle of Transformer-EMF Equation – Operating
Principles of Three Phase and Single Phase Induction Motor – Applications. Working
Principles of Alternator – EMF Equation – Operating Principles of Synchronous Motor,
Stepper Motor-Applications.<br><br>
UNIT IV<br><br> BASICS OF ELECTRONICS <br><br>
Intrinsic Semiconductors, Extrinsic Semiconductors – P-type and N-type, P-N Junction, VI
Characteristics of PN Junction diode, Zener Effect, Zener Diode, Zener Diode
Characteristics-Rectifier Circuits – Wave Shaping.
UNIT V CURRENT CONTROLLED AND VOLTAGE CONTROLLED DEVICES <br><br>
Working Principle and Characteristics – BJT, SCR, JFET, MOSFET.<br><br>
TOTAL: 45 PERIODS<br><br>
OUTCOMES:<br><br>
CO1: To be able to understand the concepts related with electrical circuits and wiring.<br>
CO2: To be able to study the different three phase connections and the concepts of
 magnetic circuits.<br>
CO3: Capable of understanding the operating principle of AC and DC machines.<br>
CO4: To be able to understand the working principle of electronic devices such as diode
 and zener diode.<br>
CO5: To be able to understand the characteristics and working of current controlled and
voltage controlled devices.<br><br>
TEXT BOOKS:<br><br>
1. Kothari DP and I.J Nagrath, “Basic Electrical and Electronics Engineering”, McGraw
Hill Education, 2014<br>
2. Del Toro, “Electrical Engineering Fundamentals”, Second edition, Pearson
Education, New Delhi,1989.<br>
3. John Bird, “Electrical Circuit theory and technology”, Routledge, Fifth edition, 2013.<br><br>
REFERENCES:<br><br>
1. Thomas L. Floyd, ‘Electronic Devices’, 10th Edition, Pearson Education, 2018.<br>
2. Albert Malvino, David Bates, ‘Electronic Principles, McGraw Hill Education; 7th
edition, 2017<br>
3. Kothari DP and I.J Nagrath, “Basic Electrical Engineering”, McGraw Hill, 2010.<br>
4. Muhammad H.Rashid, “Spice for Circuits and electronics”, 4th ed., Cengage
India,2019.
`;}
else if (subject1=="ENGINEERING GRAPHICS" && sem1=="SEMESTER-2" && dept1=="INFORMATION TECHNOLOGY"){
    syllcont.innerHTML=`
    GE5151<br><br> ENGINEERING GRAPHICS <br><br>
CREDITS:3<br><br>
COURSE OBJECTIVES:<br><br>
* To draw free hand sketches of basic geometrical shapes and multiple views of
objects.<br>
* To draw orthographic projections of lines and planes.<br>
* To draw orthographic projections of solids.<br>
* To draw the development of surfaces of objects.<br>
* To draw isometric and perspective views of simple solids.<br><br>
CONCEPTS AND CONVENTIONS (NOT FOR EXAMINATION) <br><br>
Importance of Graphics in Engineering Applications – Use of Drafting Instruments – BIS
Conventions and Specifications – Size, Layout and Folding of Drawing Sheets – Lettering
and Dimensioning.<br><br>
UNIT I<br><br> PLANE CURVES AND FREE HANDSKETCHING <br><br>
Basic Geometrical Constructions, Curves Used in Engineering Practices – Conics –
Construction of Ellipse, Parabola and Hyperbola by Different Methods – Construction of
Cycloid – Construction of Involutes of Square and Circle – Drawing of Tangents and Normal
to the Above Curves. Visualization Concepts and Free Hand Sketching: Visualization
Principles – Representation of Three – Dimensional Objects – Layout of Views- Free Hand
Sketching of Multiple Views From Pictorial Views of Objects.<br><br>
UNIT II<br><br> PROJECTION OF POINTS, LINES AND PLANE SURFACES <br><br>
Orthographic Projection – Principles – Principle Planes – First Angle Projection – Projection
of Points. Projection of Straight Lines (Only First Angle Projections) Inclined to Both the
Principal Planes – Determination of True Lengths and True Inclinations by Rotating Line
Method and Trapezoidal Method and Traces Projection of Planes (Polygonal and Circular
Surfaces) Inclined to Both the Principal Planes by Rotating Object Method.<br><br>
UNIT III<br><br> PROJECTION OF SOLIDS <br><br>
Projection of Simple Solids like Prisms, Pyramids, Cylinder, Cone and Truncated Solids
When the Axis is Inclined to Both the Principal Planes by Rotating Object Method and
Auxiliary Plane Method.<br><br>
UNIT IV <br><br>PROJECTION OF SECTIONED SOLIDS AND DEVELOPMENT OF
 SURFACES <br><br>
Sectioning of Solids in Simple Vertical Position When the Cutting Plane is Inclined to the
One of the Principal Planes and Perpendicular to the other – Obtaining True Shape of
Section. Development of Lateral Surfaces of Simple and Sectioned Solids – Prisms,
Pyramids Cylinders and Cones. Development of Lateral Surfaces Of Solids With Cut-Outs
and Holes.<br><br>
UNIT V <br><br>ISOMETRIC AND PERSPECTIVE PROJECTIONS <br><br>
Principles of Isometric Projection – Isometric Scale – Isometric Projections of Simple Solids
And Truncated Solids – Prisms, Pyramids, Cylinders, Cones – Combination of Two Solid
Objects in Simple Vertical Positions and Miscellaneous Problems. Perspective Projection of
Simple Solids – Prisms Pyramids and Cylinders by Visual Ray Method And Vanishing Point
Method.<br><br>
COMPUTER AIDED DRAFTING (DEMONSTRATION ONLY) <br><br>
Introduction to Drafting Packages and Demonstration of Their Use.<br>
TOTAL (L: 15 + P: 60):75 PERIODS<br><br>
COURSE OUTCOMES:<br><br>
On completion of this course, the students will be able to:<br>
1. Draw free hand sketching of basic geometrical shapes and multiple views of objects.<br>
2. Draw orthographic projections of lines and planes<br>
3. Draw orthographic projections of solids<br>
4. Draw development of the surfaces of objects<br>
5. Draw isometric and perspective views of simple solids.<br><br>
TEXT BOOKS:<br><br>
1. Bhatt, N. D.,Panchal V M and Pramod R. Ingle, “Engineering Drawing”, Charotar
Publishing House, 53rd Edition, 2014.<br>
2. Parthasarathy, N. S. and Vela Murali, “Engineering Drawing”, Oxford University
Press, 2015<br><br>
REFERENCES:<br><br>
1. Agrawal, B. and Agrawal C.M., “Engineering Drawing”, Tata McGraw, N.Delhi, 2008.<br>
2. Gopalakrishna, K. R., “Engineering Drawing”, Subhas Stores, Bangalore, 2007.<br>
3. Natarajan, K. V., “A text book of Engineering Graphics”, 28thEd., Dhanalakshmi
Publishers, Chennai, 2015.<br>
4. Shah, M. B., and Rana, B. C., “Engineering Drawing”, Pearson, 2ndEd., 2009.<br>
5. Venugopal, K. and Prabhu Raja, V., “Engineering Graphics”, New Age,2008.<br>
Publication of Bureau of Indian Standards:<br><br>
1. IS 10711 – 2001: Technical products Documentation – Size and lay out of drawing
sheets<br>
2. IS 9609 (Parts 0 & 1) – 2001: Technical products Documentation – Lettering.<br>
3. IS 10714 (Part 20) – 2001 & SP 46 – 2003: Lines for technical drawings.<br>
4. IS 11669 – 1986 & SP 46 – 2003: Dimensioning of Technical Drawings.<br>
5. IS 15021 (Parts 1 to 4) – 2001: Technical drawings – Projection Methods.<br><br>
Special Points Applicable to University Examinations on Engineering Graphics:<br>
1. There will be five questions, each of either or type covering all units of the syllabus.<br>
2. All questions will carry equal marks of 20 each making a total of 100.<br>
3. The answer paper shall consist of drawing sheets of A3 size only.<br>
4. The students will be permitted to use appropriate scale to fit solution within A3 size.<br>
The examination will be conducted in appropriate sessions on the same day.`;}
else if (subject1=="TAMILS AND TECHNOLOGY" && sem1=="SEMESTER-2" && dept1=="INFORMATION TECHNOLOGY"){
    syllcont.innerHTML=`
    GE5252<br><br> TAMILS AND TECHNOLOGY <br><br>
    CREDITS:1<br><br>
UNIT I<br><br> WEAVING AND CERAMIC TECHNOLOGY <br><br>
Weaving Industry during Sangam Age – Ceramic technology – Black and Red Ware
Potteries (BRW) – Graffiti on Potteries.<br><br>
UNIT II <br><br>DESIGN AND CONSTRUCTION TECHNOLOGY <br><br>
Designing and Structural construction House & Designs in household materials during
Sangam Age - Building materials and Hero stones of Sangam age – Details of Stage
Constructions in Silappathikaram - Sculptures and Temples of Mamallapuram - Great
Temples of Cholas and other worship places - Temples of Nayaka Period - Type study
(Madurai Meenakshi Temple)- Thirumalai Nayakar Mahal - Chetti Nadu Houses, Indo -
Saracenic architecture at Madras during British Period.<br><br>
UNIT III <br><br>MANUFACTURING TECHNOLOGY <br><br>
Art of Ship Building - Metallurgical studies - Iron industry - Iron smelting,steel -Copper and
gold- Coins as source of history - Minting of Coins – Beads making-industries Stone beads
-Glass beads - Terracotta beads -Shell beads/ bone beats - Archeological evidences - Gem
stone types described in Silappathikaram.<br><br>
UNIT IV <br><br>AGRICULTURE AND IRRIGATION TECHNOLOGY <br><br>
Dam, Tank, ponds, Sluice, Significance of Kumizhi Thoompu of Chola Period, Animal
Husbandry - Wells designed for cattle use - Agriculture and Agro Processing - Knowledge
of Sea - Fisheries – Pearl - Conche diving - Ancient Knowledge of Ocean - Knowledge
Specific Society.<br><br>
UNIT V <br><br>SCIENTIFIC TAMIL & TAMIL COMPUTING <br><br>
Development of Scientific Tamil - Tamil computing – Digitalization of Tamil Books –
Development of Tamil Software – Tamil Virtual Academy – Tamil Digital Library – Online
Tamil Dictionaries – Sorkuvai Project.<br><br>
TOTAL : 15 PERIODS<br><br>
TEXT-CUM-REFERENCE BOOKS<br><br>
1. தமிழக வரலொறு – மக்களும் பண் பொடும் – கக.கக. பிள்ளள (தவளியீடு:
தமிழ்நொடு பொடநூல் மற்றும்
கல்வியியல் பணிகள் கழகம்).<br>
2. கணினித்தமிழ் – முளனவர்இல. சுந்தரம். (விகடன் பிரசுரம்).<br>
3. கீழடி – ளவளக நதிக்களரயில் சங்ககொல நகர நொகரிகம் (தொல்லியல்
துளற தவளியீடு)<br>
4. பொருள – ஆற்றங்களர நகரிகம். (தொல்லியல் துளற தவளியீடு)<br>
5. Social Life of Tamils (Dr.K.K.Pillay) A joint publication of TNTB & ESC and RMRL –
(in print)<br>
6. Social Life of the Tamils - The Classical Period (Dr.S.Singaravelu) (Published by:
International Institute of Tamil Studies.<br>
7. Historical Heritage of the Tamils (Dr.S.V.Subatamanian, Dr.K.D.
Thirunavukkarasu) (Published by: International Institute of Tamil Studies).<br>
8. The Contributions of the Tamils to Indian Culture (Dr.M.Valarmathi) (Published by:
International Institute of Tamil Studies.)<br>
9. Keeladi - ‘Sangam City C ivilization on the banks of river Vaigai’ (Jointly
Published by: Department of Archaeology & Tamil Nadu Text Book and Educational
Services Corporation, Tamil Nadu)<br>
10. Studies in the History of India with Special Reference to Tamil Nadu (Dr.K.K.Pillay)
(Publishedby: The Author)<br>
11. Porunai Civilization (Jointly Published by: Department of Archaeology & Tamil Nadu
Text Bookand Educational Services Corporation, Tamil Nadu)<br>
12. Journey of Civilization Indus to Vaigai (R.Balakrishnan) (Published by: RMRL) –
Reference Book.<br><br><br>
GE5252<br><br> தமிழரும் மதொழில்நுட்பமும் <br><br>
அலகு I<br><br> மநசவு மற்றும் பொறனத்மதொழில்நுட்பம்: <br><br>
சங்க கொலத்தில் தநசவுத் ததொழில் – பொளனத் ததொழில்நுட்பம் - கருப்பு
சிவப்பு பொண் டங்கள் – பொண் டங்களில் கீறல் குறியீடுகள்.
அலகு II<br><br> வடிவறமப்பு மற்றும் கட்டிடத்மதொழில்நுட்பம்: <br><br>
சங்க கொலத்தில் வடிவளமப்பு மற்றும் கட்டுமொனங்கள் & சங்க கொலத்தில்
வீட்டுப் தபொருட்களில் வடிவளமப்பு- சங்க கொலத்தில் கட்டுமொன
தபொருட்களும் நடுகல்லும் – சிலப்பதிகொரத்தில் கமளட அளமப்பு பற்றிய
விவரங்கள் - மொமல்லபுரச் சிற்பங்களும், ககொவில்களும் – கசொழர் கொலத்துப்
தபருங்ககொயில்கள் மற்றும் பிற வழிபொட்டுத் தலங்கள் – நொயக்கர் கொலக்
ககொயில்கள் - மொதிரி கட்டளமப்புகள் பற்றி அறிதல், மதுளர மீனொட்சி
அம்மன் ஆலயம் மற்றும் திருமளல நொயக்கர்மஹொல் – தசட்டிநொட்டு வீடுகள்
– பிரிட்டிஷ் கொலத்தில் தசன்ளனயில் இந்கதொ-சொகரொதசனிக்கட்டிடக் களல.<br><br>
அலகு III<br><br> உற்பத்தித்மதொழில் நுட்பம்: <br><br>
கப்பல் கட்டும் களல – உகலொகவியல் – இரும்புத் ததொழிற்சொளல – இரும்ளப
உருக்குதல், எஃகு – வரலொற்றுச் சொன்றுகளொக தசம்பு மற்றும் தங்க
நொணயங்கள் – நொணயங்கள் அச்சடித்தல் – மணி உருவொக்கும்
ததொழிற்சொளலகள் – கல்மணிகள், கண் ணொடி மணிகள் – சுடுமண் மணிகள்
– சங்கு மணிகள் – எலும்புத்துண் டுகள் – ததொல்லியல் சொன்றுகள் –
சிலப்பதிகொரத்தில் மணிகளின் வளககள்.<br><br>
அலகு IV<br><br> கவளொை் றம மற்றும் நீ ர்ப்பொசனத்மதொழில் நுட்பம்: <br><br>
அளண, ஏரி, குளங்கள், மதகு – கசொழர்கொலக் குமுழித் தூம்பின்
முக்கியத்துவம் – கொல்நளட பரொமரிப்பு – கொல்நளடகளுக்கொக
வடிவளமக்கப்பட்ட கிணறுகள் – கவளொண் ளம மற்றும் கவளொண் ளமச்
சொர்ந்த தசயல்பொடுகள் – கடல்சொர் அறிவு – மீன்வளம் – முத்து மற்றும்
முத்துக்குளித்தல் – தபருங்கடல் குறித்த பண் ளடய அறிவு – அறிவுசொர்
சமூகம்.<br><br>
அலகு V<br><br> அறிவியல் தமிழ் மற்றும் கைித்தமிழ்: <br><br>
அறிவியல் தமிழின் வளர்ச்சி –கணித்தமிழ் வளர்ச்சி - தமிழ் நூல்களள
மின் பதிப்பு தசய்தல் – தமிழ் தமன் தபொருட்கள் உருவொக்கம் – தமிழ்
இளணயக் கல்விக்கழகம் – தமிழ் மின் நூலகம் – இளணயத்தில் தமிழ்
அகரொதிகள் – தசொற்குளவத்திட்டம்.<br><br>
TOTAL : 15 PERIODS<br><br>
TEXT-CUM-REFERENCE BOOKS<br><br>
1. தமிழக வரலொறு – மக்களும் பண் பொடும் – கக.கக. பிள்ளள (தவளியீடு:
தமிழ்நொடு பொடநூல் மற்றும்
கல்வியியல் பணிகள் கழகம்).<br>
2. கணினித்தமிழ் – முளனவர்இல. சுந்தரம். (விகடன் பிரசுரம்).<br>
3. கீழடி – ளவளக நதிக்களரயில் சங்ககொல நகர நொகரிகம் (தொல்லியல்
துளற தவளியீடு)<br>
4. தபொருளந – ஆற்றங்களர நொகரிகம். (ததொல்லியல் துளற தவளியீடு)<br>
5. Social Life of Tamils (Dr.K.K.Pillay) A joint publication of TNTB & ESC and RMRL –
(in print)<br>
6. Social Life of the Tamils - The Classical Period (Dr.S.Singaravelu) (Published by:
International Institute of Tamil Studies.<br>
7. Historical Heritage of the Tamils (Dr.S.V.Subatamanian, Dr.K.D.
Thirunavukkarasu) (Published by: International Institute of Tamil Studies).<br>
8. The Contributions of the Tamils to Indian Culture (Dr.M.Valarmathi) (Published by:
International Institute of Tamil Studies.)<br>
9. Keeladi - ‘Sangam City C ivilization on the banks of river Vaigai’ (Jointly
Published by: Department of Archaeology & Tamil Nadu Text Book and Educational
Services Corporation, Tamil Nadu)<br>
10. Studies in the History of India with Special Reference to Tamil Nadu (Dr.K.K.Pillay)
(Publishedby: The Author)<br>
11. Porunai Civilization (Jointly Published by: Department of Archaeology & Tamil Nadu
Text Bookand Educational Services Corporation, Tamil Nadu)<br>
12. Journey of Civilization Indus to Vaigai (R.Balakrishnan) (Published by: RMRL) –
Reference Book`}
else if (subject1=="INFORMATION TECHNOLOGY ESSENTIALS LABORATORY" && sem1=="SEMESTER-2" && dept1=="INFORMATION TECHNOLOGY"){
    syllcont.innerHTML=`
    IT5211<br><br> INFORMATION TECHNOLOGY ESSENTIALS LABORATORY <br><br>
    CREDITS:2<br><br>
OBJECTIVES:<br><br>
1. To design and develop static web pages using HTML5.<br>
2. To create attractive web pages using CSS (internal & external style sheets).<br>
3. To introduce the JavaScript/Angular JS for client-side validation of the web forms.<br>
4. To understand the concepts of PHP programming.<br>
5. To introduce PHP scripting language and MySQL functionalities for the development
of simple data-centric applications.<br><br>
LABORATORY EXERCISES:<br><br>
1. Design of static webpage primarily with text and CSS.<br>
2. Apply the inline and block level elements to identify the difference in the layout.<br>
3. Design the HTML forms (text boxes, text areas, radio buttons, check boxes and other
elements by understanding the input types and specified needs).<br>
4. Include image/audio and video elements in the web pages.<br>
5. Format and position the text using CSS borders, background and color by
understanding the box model.<br>
6. Validate the HTML form elements by creating small client-side validation scripts
using JavaScript/Angular JS.<br>
7. Create small PHP scripts to manipulate data using various operators and PHP
functions and display the results.<br>
8. Write two different PHP scripts to demonstrate passing variables to a URL.<br>
9. Create Website Registration Form using text box, check box, radio button, select,
submit button, and display user inserted value in new PHP page.<br>
10. Write two different PHP scripts to demonstrate passing variables with sessions and
cookies.<br>
11. Write PHP script to connect MySQL server from the website incorporating errorhandling using exceptions.<br>
12. Create a dynamic web site using PHP and MySQL.<br><br>
TOTAL: 60 PERIODS`;}
else if (subject1=="ELECTRICAL AND ELECTRONICS ENGINEERING LABORATORY" && sem1=="SEMESTER-2" && dept1=="INFORMATION TECHNOLOGY"){
    syllcont.innerHTML=`
    EE5261<br><br> ELECTRICAL AND ELECTRONICS ENGINEERING LABORATORY <br><br>
OBJECTIVES<br><br>
* To impart hands on experience in verification of circuit laws and measurement of
circuit parameters<br>
* To train the students in performing various tests on electrical motors.<br>
* To give practical exposure to the usage of CRO, power sources & function
generators<br><br>
LIST OF EXPERIMENTS<br><br>
1. Verification of Kirchhoff’s Law.<br>
2. Steady state response of AC and DC circuits (Mesh, Node Analysis)
3. Frequency response of RLC circuits.<br>
4. Measurement power in three phase circuits by two-watt meter method.<br>
5. Regulation of single phase transformer.<br>
6. Performance characteristics of DC shunt generator.<br>
7. Performance characteristics of single phase induction motor.<br>
8. Characteristics of PN diode and Zener diode.<br>
9. Characteristics of Zener diode.<br>
10. Half wave and full wave Rectifiers.<br>
11. Application of Zener diode as shunt regulator.<br>
12. Characteristics of BJT and JFET<br><br>
TOTAL: 60 PERIODS<br><br>
OUTCOMES:<br><br>
On completion of the course, the students will be able to:<br>
1. Become familiar with the basic circuit components and know how to connect them to
make a real electrical circuit.<br>
2. Perform speed characteristic of different electrical machines.<br>
3. Use logic gates and Flip flops.`;}
else if (subject1=="COMMUNICATION LABORATORY" && sem1=="SEMESTER-2" && dept1=="INFORMATION TECHNOLOGY"){
    syllcont.innerHTML=`
    GE5262<br><br> COMMUNICATION LABORATORY <br><br>
    CREDITS:4<br><br>
OBJECTIVES<br><br>
* To identify varied group discussion skills and apply them to take part in effective
discussions in a professional context.<br>
* To be able to communicate effectively through writing.<br><br>
UNIT I <br><br>
Speaking-Role Play Exercises Based on Workplace Contexts, - talking about competitiondiscussing progress 
toward goals-talking about experiences- talking about events in lifediscussing past events-W
riting: writing emails ( formal & semi-formal).<br><br>
UNIT II <br><br>
Speaking: discussing news stories-talking about frequency-talking about travel problemsdiscussing travel 
procedures- talking about travel problems- making arrangementsdescribing arrangements-discussing plans 
and decisions- discussing purposes and reasonsunderstanding common technology terms-Writing: - writing different types of emails.<br><br>
UNIT III <br><br>
Speaking: discussing predictions-describing the climate-discussing forecasts and scenariostalking 
about purchasing-discussing advantages and disadvantages- making comparisonsdiscussing likes and 
dislikes- discussing feelings about experiences-discussing imaginary
scenarios Writing: short essays and reports-formal/semi-formal letters.<br><br>
UNIT IV <br><br>
Speaking: discussing the natural environment-describing systems-describing position and
movement- explaining rules-( example- discussing rental arrangements)- understanding
technical instructions-Writing: writing instructions-writing a short article.<br><br>
UNIT V <br><br>
Speaking: describing things relatively-describing clothing-discussing safety issues( making
recommendations) talking about electrical devices-describing controlling actions- Writing: job
application( Cover letter + Curriculum vitae)-writing recommendations.<br><br>
TOTAL: 60 PERIODS<br><br>
LEARNING OUTCOMES<br><br>
* Speak effectively in group discussions held in a formal/semi formal contexts.<br>
* Write emails and effective job applications.<br><br>
Assessment Pattern<br><br>
* One online / app based assessment to test speaking and writing skills<br>
* Proficiency certification is given on successful completion of speaking and writing.
`;}
}
