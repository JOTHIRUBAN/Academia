function redirect(){
  window.location.href="stafflogin.html";
}
function syllabus(){

    var inp=document.getElementById("sem").value;
    if (inp=="SEMESTER-1"){
      document.getElementById("subject").innerHTML="";
      document.getElementById("subject1").innerHTML="";
      document.getElementById("subject2").innerHTML="";
      document.getElementById("subject3").innerHTML="";
      document.getElementById("subject4").innerHTML="";
      document.getElementById("subject5").innerHTML="";
      document.getElementById("subject6").innerHTML="";
      document.getElementById("subject7").innerHTML="";
      document.getElementById("syll").innerHTML="";
      document.getElementById("syllabus").innerHTML="";

      var butsub=document.createElement("button");
            butsub.id="subject*"
            butsub.textContent="Submit";
            var container2 = document.getElementById("subject"); 
            container2.appendChild(butsub);
            butsub.style.backgroundColor="#1F6E8C";
            butsub.style.marginLeft="50px";
            butsub.style.borderRadius="10px";
            butsub.style.padding="7px";
            butsub.style.borderColor="#1F6E8C" ;
            butsub.style.fontSize="large";
            butsub.style.fontFamily="serif";
            butsub.style.Color="Azure" ;

        let select=document.getElementById("syllabus");
        var options = [
            { value: "TECHNICAL ENGLISH", text: "TECHNICAL ENGLISH" },
            { value: "ENGINEERING MATHEMATICS-1", text: "ENGINEERING MATHEMATICS-1" },
            { value: "ENGINEERING PHYSICS", text: "ENGINEERING PHYSICS" },
            { value: "ENGINEERING CHEMISTRY", text: "ENGINEERING CHEMISTRY" },
            { value: "PROBLEM SOLVING AND PYTHON PROGRAMMING", text: "PROBLEM SOLVING AND PYTHON PROGRAMMING" },
            { value: "BASIC SCIENCES LABORATORY", text: "BASIC SCIENCES LABORATORY" },
            { value: "PROBLEM SOLVING AND PYTHON PROGRAMMING LABORATORY", text: "PROBLEM SOLVING AND PYTHON PROGRAMMING LABORATORY" },
            { value: "TAMIL", text: "TAMIL" }
          ];
          for(let i=0;i<options.length;i++){
            let option=document.createElement("option");
            option.value=options[i].value;
            option.text=options[i].text;
            select.appendChild(option);
          }
        var container1=document.getElementById("syllabus");
        container1.appendChild(select);
        
        
        
}
else if (inp=="SEMESTER-2"){
  document.getElementById("subject").innerHTML="";
      document.getElementById("subject1").innerHTML="";
      document.getElementById("subject2").innerHTML="";
      document.getElementById("subject3").innerHTML="";
      document.getElementById("subject4").innerHTML="";
      document.getElementById("subject5").innerHTML="";
      document.getElementById("subject6").innerHTML="";
      document.getElementById("subject7").innerHTML="";
      document.getElementById("syll").innerHTML="";
      document.getElementById("syllabus").innerHTML="";
      var butsub=document.createElement("button");
            butsub.id="subject*"
            butsub.textContent="Submit";
            var container2 = document.getElementById("subject1"); 
            container2.appendChild(butsub);
            butsub.style.backgroundColor="#1F6E8C";
            butsub.style.marginLeft="50px";
            butsub.style.borderRadius="10px";
            butsub.style.padding="7px";
            butsub.style.borderColor="#1F6E8C" ;
            butsub.style.fontSize="large";
            butsub.style.fontFamily="serif";
            butsub.style.Color="Azure" ;
  let select=document.getElementById("syllabus");
  var options = [
      { value: "PROFESSIONAL COMMUNICATION", text: "PROFESSIONAL COMMUNICATION" },
      { value: "ENGINEERING MATHEMATICS-2", text: "ENGINEERING MATHEMATICS-2" },
      { value: "INFORMATION TECHNOLOGY ESSENTIALS", text: "INFORMATION TECHNOLOGY ESSENTIALS" },
      { value: "BASICS OF ELECTRICAL AND ELECTRONICS ENGINEERING", text: "BASICS OF ELECTRICAL AND ELECTRONICS ENGINEERING" },
      { value: "ENGINEERING GRAPHICS", text: "ENGINEERING GRAPHICS" },
      { value: "INFORMATION TECHNOLOGY ESSENTIALS LABORATORY", text: "INFORMATION TECHNOLOGY ESSENTIALS LABORATORY" },
      { value: "ELECTRICAL AND ELECTRONICS ENGINEERING LABORATORY", text: "ELECTRICAL AND ELECTRONICS ENGINEERING LABORATORY" },
      { value: "TAMILS AND TECHNOLOGY", text: "TAMILS AND TECHNOLOGY" },
      { value: "COMMUNICATION LABORATORY", text: "COMMUNICATION LABORATORY" }
    ];
    for(let i=0;i<options.length;i++){
      let option=document.createElement("option");
      option.value=options[i].value;
      option.text=options[i].text;
      select.appendChild(option);
    }
  var container1=document.getElementById("syllabus");
  container1.appendChild(select);
  
}
else if (inp=="SEMESTER-3"){
  document.getElementById("subject").innerHTML="";
  document.getElementById("subject1").innerHTML="";
  document.getElementById("subject2").innerHTML="";
  document.getElementById("subject3").innerHTML="";
  document.getElementById("subject4").innerHTML="";
  document.getElementById("subject5").innerHTML="";
  document.getElementById("subject6").innerHTML="";
  document.getElementById("subject7").innerHTML="";
  document.getElementById("syll").innerHTML="";
  document.getElementById("syllabus").innerHTML="";
      var butsub=document.createElement("button");
            butsub.id="subject*"
            butsub.textContent="Submit";
            var container2 = document.getElementById("subject2"); 
            container2.appendChild(butsub);
            butsub.style.backgroundColor="#1F6E8C";
            butsub.style.marginLeft="50px";
            butsub.style.borderRadius="10px";
            butsub.style.padding="7px";
            butsub.style.borderColor="#1F6E8C" ;
            butsub.style.fontSize="large";
            butsub.style.fontFamily="serif";
            butsub.style.Color="Azure" ;
  let select=document.getElementById("syllabus");
  var options = [
      { value: "DISCRETE MATHEMATICS", text: "DISCRETE MATHEMATICS" },
      { value: "DIGITAL LOGIC AND DESIGN", text: "DIGITAL LOGIC AND DESIGN" },
      { value: "PROGRAMMING AND DATA STRUCTURES", text: "PROGRAMMING AND DATA STRUCTURES" },
      { value: "DATABASE MANAGEMENT SYSTEMS", text: "DATABASE MANAGEMENT SYSTEMS" },
      { value: "SOFTWARE ENGINEERING", text: "SOFTWARE ENGINEERING" },
      { value: "ELECTIVES HUMANITIES-1", text: "ELECTIVES HUMANITIES-1" },
      { value: "PROGRAMMING AND DATA STRUCTURES LABORATORY", text: "PROGRAMMING AND DATA STRUCTURES LABORATORY" },
      { value: "DATABASE MANAGEMENT SYSTEMS LABORATORY", text: "DATABASE MANAGEMENT SYSTEMS LABORATORY" }
    ];
    for(let i=0;i<options.length;i++){
      let option=document.createElement("option");
      option.value=options[i].value;
      option.text=options[i].text;
      select.appendChild(option);
    }
  var container1=document.getElementById("syllabus");
  container1.appendChild(select);
  
}
else if (inp=="SEMESTER-4"){
  document.getElementById("subject").innerHTML="";
  document.getElementById("subject1").innerHTML="";
  document.getElementById("subject2").innerHTML="";
  document.getElementById("subject3").innerHTML="";
  document.getElementById("subject4").innerHTML="";
  document.getElementById("subject5").innerHTML="";
  document.getElementById("subject6").innerHTML="";
  document.getElementById("subject7").innerHTML="";
  document.getElementById("syll").innerHTML="";
  document.getElementById("syllabus").innerHTML="";
      var butsub=document.createElement("button");
            butsub.id="subject*"
            butsub.textContent="Submit";
            var container2 = document.getElementById("subject3"); 
            container2.appendChild(butsub);
            butsub.style.backgroundColor="#1F6E8C";
            butsub.style.marginLeft="50px";
            butsub.style.borderRadius="10px";
            butsub.style.padding="7px";
            butsub.style.borderColor="#1F6E8C" ;
            butsub.style.fontSize="large";
            butsub.style.fontFamily="serif";
            butsub.style.Color="Azure" ;
  let select=document.getElementById("syllabus");
  var options = [
      { value: "ENVIRONMENTAL SCIENCES", text: "ENVIRONMENTAL SCIENCES" },
      { value: "OBJECT ORIENTED PROGRAMMING AND ADVANCED DATA STRUCTURES", text: "OBJECT ORIENTED PROGRAMMING AND ADVANCED DATA STRUCTURES" },
      { value: "DESIGN AND ANALYSIS OF ALGORITHMS", text: "DESIGN AND ANALYSIS OF ALGORITHMS" },
      { value: "OPERATING SYSTEMS", text: "OPERATING SYSTEMS" },
      { value: "COMPUTER ARCHITECTURE", text: "COMPUTER ARCHITECTURE" },
      { value: "AUDIT COURSE-1", text: "AUDIT COURSE-1" },
      { value: "ELECTIVE HUMANITIES-2", text: "ELECTIVE HUMANITIES-2" },
      { value: "OPERATING SYSTEMS LABORATORY", text: "OPERATING SYSTEMS LABORATORY" },
      { value: "ADVANCED DATA STRUCTURES LABORATORY", text: "ADVANCED DATA STRUCTURES LABORATORY" }
    ];
    for(let i=0;i<options.length;i++){
      let option=document.createElement("option");
      option.value=options[i].value;
      option.text=options[i].text;
      select.appendChild(option);
    }
  var container1=document.getElementById("syllabus");
  container1.appendChild(select);
  
}
else if (inp=="SEMESTER-5"){
  document.getElementById("subject").innerHTML="";
  document.getElementById("subject1").innerHTML="";
  document.getElementById("subject2").innerHTML="";
  document.getElementById("subject3").innerHTML="";
  document.getElementById("subject4").innerHTML="";
  document.getElementById("subject5").innerHTML="";
  document.getElementById("subject6").innerHTML="";
  document.getElementById("subject7").innerHTML="";
  document.getElementById("syll").innerHTML="";
  document.getElementById("syllabus").innerHTML="";
      var butsub=document.createElement("button");
            butsub.id="subject*"
            butsub.textContent="Submit";
            var container2 = document.getElementById("subject4"); 
            container2.appendChild(butsub);
            butsub.style.backgroundColor="#1F6E8C";
            butsub.style.marginLeft="50px";
            butsub.style.borderRadius="10px";
            butsub.style.padding="7px";
            butsub.style.borderColor="#1F6E8C" ;
            butsub.style.fontSize="large";
            butsub.style.fontFamily="serif";
            butsub.style.Color="Azure" ;
  let select=document.getElementById("syllabus");
  var options = [
      { value: "COMPILER ENGINEERING", text: "COMPILER ENGINEERING" },
      { value: "COMPUTER NETWORKS", text: "COMPUTER NETWORKS" },
      { value: "WEB TECHNOLOGIES", text: "WEB TECHNOLOGIES" },
      { value: "ELECTIVES HUMANITIES-1", text: "ELECTIVES HUMANITIES-1" },
      { value: "PROFESSIONAL ELECTIVE-1", text: "PROFESSIONAL ELECTIVE-1" },
      { value: "AUDIT COURSE-2", text: "AUDIT COURSE-2" },
      { value: "COMPUTER NETWORKS LABORATORY", text: "COMPUTER NETWORKS LABORATORY" },
      { value: "WEB TECHNOLOGIES LABORATORY", text: "WEB TECHNOLOGIES LABORATORY" },
      { value: "SUMMER INTERNSHIP-SUMMER PROJECT", text: "SUMMER INTERNSHIP-SUMMER PROJECT" }
    ];
    for(let i=0;i<options.length;i++){
      let option=document.createElement("option");
      option.value=options[i].value;
      option.text=options[i].text;
      select.appendChild(option);
    }
  var container1=document.getElementById("syllabus");
  container1.appendChild(select);
  
}
else if (inp=="SEMESTER-6"){
  document.getElementById("subject").innerHTML="";
  document.getElementById("subject1").innerHTML="";
  document.getElementById("subject2").innerHTML="";
  document.getElementById("subject3").innerHTML="";
  document.getElementById("subject4").innerHTML="";
  document.getElementById("subject5").innerHTML="";
  document.getElementById("subject6").innerHTML="";
  document.getElementById("subject7").innerHTML="";
  document.getElementById("syll").innerHTML="";
  document.getElementById("syllabus").innerHTML="";
      var butsub=document.createElement("button");
            butsub.id="subject*"
            butsub.textContent="Submit";
            var container2 = document.getElementById("subject5"); 
            container2.appendChild(butsub);
            butsub.style.backgroundColor="#1F6E8C";
            butsub.style.marginLeft="50px";
            butsub.style.borderRadius="10px";
            butsub.style.padding="7px";
            butsub.style.borderColor="#1F6E8C" ;
            butsub.style.fontSize="large";
            butsub.style.fontFamily="serif";
            butsub.style.Color="Azure" ;
  let select=document.getElementById("syllabus");
  var options = [
      { value: "EMBEDDED SYSTEMS AND INTERNET OF THINGS", text: "EMBEDDED SYSTEMS AND INTERNET OF THINGS" },
      { value: "DATA SCIENCE AND ANALYTICS", text: "DATA SCIENCE AND ANALYTICS" },
      { value: "DISTRIBUTED AND CLOUD COMPUTING", text: "DISTRIBUTED AND CLOUD COMPUTING" },
      { value: "PROFESSIONAL ELECTIVE-2", text: "PROFESSIONAL ELECTIVE-2" },
      { value: "PROFESSIONAL ELECTIVE-3", text: "PROFESSIONAL ELECTIVE-3" },
      { value: "OPEN ELECTIVE-1", text: "OPEN ELECTIVE-1" },
      { value: "EMBEDDED SYSTEMS AND INTERNET OF THINGS LABORATORY", text: "EMBEDDED SYSTEMS AND INTERNET OF THINGS LABORATORY" },
      { value: "DATA ANALYTICS AND CLOUD COMPUTING LABORATORY", text: "DATA ANALYTICS AND CLOUD COMPUTING LABORATORY" },
      { value: "SOCIALLY RELEVANT PROJECT LABORATORY", text: "SOCIALLY RELEVANT PROJECT LABORATORY" }
    ];
    for(let i=0;i<options.length;i++){
      let option=document.createElement("option");
      option.value=options[i].value;
      option.text=options[i].text;
      select.appendChild(option);
    }
  var container1=document.getElementById("syllabus");
  container1.appendChild(select);
  
}
else if (inp=="SEMESTER-7"){
  document.getElementById("subject").innerHTML="";
  document.getElementById("subject1").innerHTML="";
  document.getElementById("subject2").innerHTML="";
  document.getElementById("subject3").innerHTML="";
  document.getElementById("subject4").innerHTML="";
  document.getElementById("subject5").innerHTML="";
  document.getElementById("subject6").innerHTML="";
  document.getElementById("subject7").innerHTML="";
  document.getElementById("syll").innerHTML="";
  document.getElementById("syllabus").innerHTML="";
      var butsub=document.createElement("button");
            butsub.id="subject*"
            butsub.textContent="Submit";
            var container2 = document.getElementById("subject6"); 
            container2.appendChild(butsub);
            butsub.style.backgroundColor="#1F6E8C";
            butsub.style.marginLeft="50px";
            butsub.style.borderRadius="10px";
            butsub.style.padding="7px";
            butsub.style.borderColor="#1F6E8C" ;
            butsub.style.fontSize="large";
            butsub.style.fontFamily="serif";
            butsub.style.Color="Azure" ;
  let select=document.getElementById("syllabus");
  var options = [
      { value: "ARTIFICIAL INTELLIGENCE", text: "ARTIFICIAL INTELLIGENCE" },
      { value: "MOBILE COMPUTING", text: "MOBILE COMPUTING" },
      { value: "CRYPTOGRAPHY AND SECURITY", text: "CRYPTOGRAPHY AND SECURITY" },
      { value: "PROFESSIONAL ELECTIVE-4", text: "PROFESSIONAL ELECTIVE-4" },
      { value: "PROFESSIONAL ELECTIVE-5", text: "PROFESSIONAL ELECTIVE-5" },
      { value: "OPEN ELECTIVE-2", text: "OPEN ELECTIVE-2" },
      { value: "MOBILE AND SECURITY LABORATORY", text: "MOBILE AND SECURITY LABORATORY" },
      { value: "PROJECT-1", text: "PROJECT-1" }
    ];
    for(let i=0;i<options.length;i++){
      let option=document.createElement("option");
      option.value=options[i].value;
      option.text=options[i].text;
      select.appendChild(option);
    }
  var container1=document.getElementById("syllabus");
  container1.appendChild(select);
  
}
else if (inp=="SEMESTER-8"){
  document.getElementById("subject").innerHTML="";
  document.getElementById("subject1").innerHTML="";
  document.getElementById("subject2").innerHTML="";
  document.getElementById("subject3").innerHTML="";
  document.getElementById("subject4").innerHTML="";
  document.getElementById("subject5").innerHTML="";
  document.getElementById("subject6").innerHTML="";
  document.getElementById("subject7").innerHTML="";
  document.getElementById("syll").innerHTML="";
  document.getElementById("syllabus").innerHTML="";
      var butsub=document.createElement("button");
            butsub.id="subject*"
            butsub.textContent="Submit";
            var container2 = document.getElementById("subject7"); 
            container2.appendChild(butsub);
            butsub.style.backgroundColor="#1F6E8C";
            butsub.style.marginLeft="50px";
            butsub.style.borderRadius="10px";
            butsub.style.padding="7px";
            butsub.style.borderColor="#1F6E8C" ;
            butsub.style.fontSize="large";
            butsub.style.fontFamily="serif";
            butsub.style.Color="Azure" ;
  let select=document.getElementById("syllabus");
  var options = [
      { value: "PROFESSIONAL ELECTIVE-6", text: "PROFESSIONAL ELECTIVE-6" },
      { value: "PROFESSIONAL ELECTIVE-7", text: "PROFESSIONAL ELECTIVE-7" },
      { value: "PROJECT-2", text: "PROJECT-2" }
    ];
    for(let i=0;i<options.length;i++){
      let option=document.createElement("option");
      option.value=options[i].value;
      option.text=options[i].text;
      select.appendChild(option);
    }
  var container1=document.getElementById("syllabus");
  container1.appendChild(select);
  
}
}
function syllabi(){
    var subject1=document.getElementById("syllabus").value;
    let sem1= document.getElementById("sem").value;
    let dept1= document.getElementById("dept").value;
    var syllcont=document.getElementById("syll");
    if (subject1=="TAMIL" && sem1=="SEMESTER-1" && dept1=="INFORMATION TECHNOLOGY"){
      syllcont.innerHTML=`GE5154<br><br> தமிழர்மரபு <br><br>
      CREDITS: 1<br><br>
     அலகு I<br> மமொழி மற்றும் இலக்கியம்: <br><br>
     இந்திய தமொழிக்குடும்பங்கள் – திரொவிட தமொழிகள் – தமிழ் ஒரு தசம்தமொழி
     – தமிழ் தசவ்விலக்கியங்கள் - சங்க இலக்கியத்தின் சமயச் சொர்பற்ற
     தன்ளம – சங்க இலக்கியத்தில் பகிர்தல் அறம் – திருக்குறளில்
     கமலொண் ளமக் கருத்துக்கள் – தமிழ்க் கொப்பியங்கள், தமிழகத்தில் சமண
     தபௌத்த சமயங்களின் தொக்கம் - பக்தி இலக்கியம், ஆழ்வொர்கள் மற்றும்
     நொயன் மொர்கள் – சிற்றிலக்கியங்கள் – தமிழில் நவீன இலக்கியத்தின்
     வளர்ச்சி – தமிழ் இலக்கிய வளர்ச்சியில் பொரதியொர் மற்றும் பொரதிதொசன்
     ஆகிகயொரின் பங்களிப்பு.<br><br>
     அலகு II<br> மரபு – பொறற ஓவியங்கள் முதல் நவீன ஓவியங்கள் வறர –
     சிற்பக் கறல: <br><br>
     நடுகல் முதல் நவீன சிற்பங்கள் வளர – ஐம்தபொன் சிளலகள்–
     பழங்குடியினர் மற்றும் அவர்கள் தயொரிக்கும் ளகவிளனப் தபொருட்கள்,
     தபொம்ளமகள் – கதர் தசய்யும் களல – சுடுமண் சிற்பங்கள் – நொட்டுப்புறத்
     ததய்வங்கள் – குமரிமுளனயில் திருவள்ளுவர் சிளல – இளசக் கருவிகள் –
     மிருதங்கம், பளற, வீளண, யொழ், நொதஸ் வரம் – தமிழர்களின் சமூக
     தபொருளொதொர வொழ்வில் ககொவில்களின் பங்கு.<br><br>
     அலகு III<br> நொட்டுப்புறக்கறலகள் மற்றும் வீர விறளயொட்டுகள்: <br><br>
     ததருக்கூத்து, கரகொட்டம், வில்லுப்பொட்டு, கணியொன் கூத்து, ஒயிலொட்டம்,
     கதொல்பொளவக் கூத்து, சிலம்பொட்டம், வளரி, புலியொட்டம், தமிழர்களின்
     விளளயொட்டுகள்.<br><br>
     அலகு IV <br>தமிழர்களின் திறைக்ககொட்பொடுகள்: <br><br>
     தமிழகத்தின் தொவரங்களும், விலங்குகளும் – ததொல்கொப்பியம் மற்றும் சங்க
     இலக்கியத்தில் அகம் மற்றும் புறக் ககொட்பொடுகள் – தமிழர்கள் கபொற்றிய
     அறக்ககொட்பொடு – சங்ககொலத்தில் தமிழகத்தில் எழுத்தறிவும், கல்வியும் –
     சங்ககொல நகரங்களும் துளற முகங்களும் – சங்ககொலத்தில் ஏற்றுமதி
     மற்றும் இறக்குமதி – கடல்கடந்த நொடுகளில் கசொழர்களின் தவற்றி.<br><br>
     அலகு V<br> இந்திய கதசிய இயக்கம் மற்றும் இந்திய பை் பொட்டிற்குத்
     தமிழர்களின் பங்களிப்பு: <br><br>
     இந்திய விடுதளலப்கபொரில் தமிழர்களின் பங்கு – இந்தியொவின்
     பிறப்பகுதிகளில் தமிழ்ப் பண் பொட்டின் தொக்கம் – சுயமரியொளத இயக்கம் –
     இந்திய மருத்துவத்தில், சித்த மருத்துவத்தின் பங்கு – கல்தவட்டுகள்,
     ளகதயழுத்துப்படிகள் - தமிழ்ப் புத்தகங்களின் அச்சு வரலொறு.<br><br>
      TOTAL : 15 PERIODS<br><br>
     TEXT-CUM-REFERENCE BOOKS<br>
     1. தமிழக வரலொறு – மக்களும் பண் பொடும் – கக.கக. பிள்ளள (தவளியீடு:
     தமிழ்நொடு பொடநூல் மற்றும்
     கல்வியியல் பணிகள் கழகம்).<br>
     2. கணினித்தமிழ் – முளனவர்இல. சுந்தரம். (விகடன் பிரசுரம்).<br>
     3. கீழடி – ளவளக நதிக்களரயில் சங்ககொல நகர நொகரிகம் (ததொல்லியல்
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
     Reference Book.<br><br><br>
     GE5154<br><br> HERITAGE OF TAMILS <br><br>
     CREDITS: 1<br><br>
    UNIT I<br> LANGUAGE AND LITERATURE <br><br>
    Language Families in India - Dravidian Languages – Tamil as a Classical Language -
    Classical Literature in Tamil – Secular Nature of Sangam Literature – Distributive Justice in
    Sangam Literature - Management Principles in Thirukural - Tamil Epics and Impact of
    Buddhism & Jainism in Tamil Land - Bakthi Literature Azhwars and Nayanmars - Forms of
    minor Poetry - Development of Modern literature in Tamil - Contribution of Bharathiyar and
    Bharathidhasan.<br><br>
    UNIT II<br> HERITAGE - ROCK ART PAINTINGS TO MODERN ART –
    SCULPTURE <br><br>
    Hero stone to modern sculpture - Bronze icons - Tribes and their handicrafts - Art of temple
    car making - - Massive Terracotta sculptures, Village deities, Thiruvalluvar Statue at
    Kanyakumari, Making of musical instruments - Mridhangam, Parai, Veenai, Yazh and
    Nadhaswaram - Role of Temples in Social and Economic Life of Tamils.<br><br>
    UNIT III<br> FOLK AND MARTIAL ARTS <br><br>
    Therukoothu, Karagattam, Villu Pattu, Kaniyan Koothu, Oyillattam, Leather puppetry,
    Silambattam, Valari, Tiger dance - Sports and Games of Tamils.<br><br>
    UNIT IV<br> THINAI CONCEPT OF TAMILS <br><br>
    Flora and Fauna of Tamils & Aham and Puram Concept from Tholkappiyam and Sangam
    Literature - Aram Concept of Tamils - Education and Literacy during Sangam Age - Ancient
    Cities and Ports of Sangam Age - Export and Import during Sangam Age - Overseas
    Conquest of Cholas.<br><br>
    UNIT V<br> CONTRIBUTION OF TAMILS TO INDIAN NATIONAL MOVEMENT AND
    INDIAN CULTURE <br><br>
    Contribution of Tamils to Indian Freedom Struggle - The Cultural Influence of Tamils over
    the other parts of India – Self-Respect Movement - Role of Siddha Medicine in Indigenous
    Systems of Medicine – Inscriptions & Manuscripts – Print History of Tamil Books.<br><br>
     TOTAL : 15 PERIODS<br><br>
    TEXT-CUM-REFERENCE BOOKS<br><br>
    1. தமிழக வரலொறு – மக்களும் பண் பொடும் – கக.கக. பிள்ளள (தவளியீடு:
    தமிழ்நொடு பொடநூல் மற்றும்
    கல்வியியல் பணிகள் கழகம்).<br>
    2. கணினித்தமிழ் – முளனவர்இல. சுந்தரம். (விகடன் பிரசுரம்).<br>
    3. கீழடி – ளவளக நதிக்களரயில் சங்ககொல நகர நொகரிகம் (ததொல்லியல்
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
    Reference Book.`;
    }
    else if (subject1=="TECHNICAL ENGLISH" && sem1=="SEMESTER-1" && dept1=="INFORMATION TECHNOLOGY"){
      syllcont.innerHTML=`
      HS5151<br><br> TECHNICAL ENGLISH <br> <br> 
      CREDITS: 4<br><br>
OBJECTIVES<br> <br> 
* To build lexical competency and accuracy that will help learners to use language
effectively.<br> 
* To learn various reading strategies that will enable learners to comprehend the
different modes of reading materials of varied levels of complexity.<br> 
* To comprehend the linguistic aspects of various rhetorical structures and
functions of Technical English and use them effectively in writing.<br> <br> 
UNIT I<br> <br>  INTRODUCING ONESELF <br><br>
Theory:<br>
Reading: Descriptive passages (From Newspapers / Magazines) – Writing: Writing a
coherent paragraph (Native Place, School Life) – Grammar: Simple present tense, Present
continuous tense – Vocabulary development: One word substitution.<br><br>
UNIT II<br><br> DIALOGUE WRITING <br><br>
Theory:<br>
Reading: Reading a print interview (Comprehension and inference questions) - Writing:
Writing a checklist - Dialogue writing – Grammar: Simple past tense – Question formation
(Wh-Questions, ‘Yes’ or ‘No’ Questions, Tag Questions) – Vocabulary Development:
Lexical items relevant to the theme of the given unit.<br><br>
UNIT III<br><br> FORMAL LETTER WRITING <br><br>
Theory:<br>
Reading: Reading motivational essays on famous Engineers and Technologists (Answering
Open – Ended and Closed Questions) – Writing: Writing formal letters/ emails – Grammar:
Future tenses, Subject and verb agreement - Vocabulary Development: Collocations –
Fixed expressions.<br><br>
UNIT IV<br><br> WRITING LETTERS OF COMPLAINT <br><br>
Theory:<br>
Reading: Reading Problem – Solution Articles/Essays Drawn From Various Sources –
Writing: Making Recommendations – Writing a complaint Letter – Letter / email to the Editor
– Note Making – Grammar: Use of modal verbs – Phrasal verbs – Cause-and-effect
sentences – Vocabulary Development: Connectives, Use Of cohesive devices in writing,
Technical vocabulary.<br><br>
UNIT V<br><br> WRITING DEFINITIONS AND PRODUCT DESCRIPTION <br><br>
Theory:<br>
Reading: Reading graphical material for comparison (Advertisements & Infographics) –
Writing: Writing Definitions - One-line & extended definition – Compare-and-contrast
paragraphs - Grammar: Adjectives – Degrees of comparison – Compound nouns –
Compound words - Vocabulary Development: Use of Discourse Markers – Suffixes
(Adjectival endings).<br><br>
TOTAL : 45 PEROIDS<br><br>
LEARNING OUTCOMES:<br><br>
On completion of the course, the students will be able to:<br>
* Use appropriate language structures and lexical items in authentic contexts.<br>
* Read both general and technical texts and comprehend their denotative and
connotative meanings.<br>
* Write different kinds of formal documents with grammatical and lexical appropriacy.
Assessment Pattern<br>
* Two written internal assessments to test learner’s progress in grammar, vocabulary,
reading and writing skills.<br>
* End Semester exam to be tested in two parts: Theory exam for three hours and
listening and speaking skills for two hours.
      `;
}
else if (subject1=="ENGINEERING MATHEMATICS-1" && sem1=="SEMESTER-1" && dept1=="INFORMATION TECHNOLOGY" ){
  syllcont.innerHTML=`
  MA5158<br><br> ENGINEERING MATHEMATICS-I<br><br>
  CREDITS: 4<br><br>
 (Common to all branches of B.E. / B.Tech. Programmes in I Semester)<br><br>
OBJECTIVES:<br><br>
* To develop the use of matrix algebra techniques that is needed by engineers for
practical applications.<br>
* To familiarize the students with differential calculus.<br>
* To familiarize the student with functions of several variables. This is needed in many
branches of engineering.<br>
* To make the students understand various techniques of integration.<br>
* To acquaint the student with mathematical tools needed in evaluating multiple
integrals and their applications.<br><br>
UNIT I<br><br> MATRICES<br><br>
Eigenvalues and Eigenvectors of a Real Matrix – Characteristic Equation – Properties of
Eigenvalues and Eigenvectors – Cayley-Hamilton Theorem – Diagonalization of Matrices –
Reduction of a Quadratic Form to Canonical Form by Orthogonal Transformation – Nature of
Quadratic Forms.<br><br>
UNIT II<br><br> DIFFERENTIAL CALCULUS<br><br>
Limit of Function – One Sided Limit – Limit Laws – Continuity – Left and Right Continuity –
Types of Discontinuities – Intermediate Value Theorem – Derivatives of a Function –
Differentiation Rules – Chain Rule – Implicit Differentiation – Logarithmic Differentiation –
Maxima and Minima – Mean Value Theorem – (Optional: Polar Coordinate System –
Differentiation in Polar Coordinates).<br><br>
UNIT III<br><br> FUNCTIONS OF SEVERAL VARIABLES<br><br>
Partial Derivatives – Homogeneous Functions and Euler’s Theorem – Total Derivative –
Differentiation of Implicit Functions – Change of Variables – Jacobians – Partial
Differentiation of Implicit Functions – Taylor’s Series for Functions of Two Variables – Errors
and Approximations – Maxima and Minima of Functions of Two Variables – Lagrange’s
Method of Undetermined Multipliers.<br><br>
UNIT IV <br><br>INTEGRAL CALCULUS <br><br>
Definite and Indefinite Integrals – Substitution Rule – Techniques of Integration – Integration
by Parts, Trigonometric Integrals, Trigonometric Substitutions, Integration of Rational
Functions by Partial Fraction, Integration of Irrational Functions – Improper Integrals.<br><br>
UNIT V <br><br>MULTIPLE INTEGRALS<br><br>
Double Integrals – Change of Order of Integration – Double Integrals in Polar Coordinates –
Area Enclosed by Plane Curves – Triple Integrals – Volume of Solids – Change of Variables
in Double and Triple Integrals.<br><br>
TOTAL : 60 PERIODS<br><br>
OUTCOMES:<br><br>
On completion of the course, the students will be able to:<br>
1. Use the matrix algebra methods for solving practical problems.<br>
2. Apply differential calculus tools in solving various application problems.<br>
3. Able to use differential calculus ideas on several variable functions.<br>
4. Apply different methods of integration in solving practical problems.<br>
5. Apply multiple integral ideas in solving areas, volumes and other practical problems.<br><br>
TEXTBOOKS:<br><br>
1. Grewal B.S., “Higher Engineering Mathematics”, Khanna Publishers, Forty Fourth
Edition, New Delhi, 2017.<br>
2. James Stewart, "Calculus with Early Transcendental Functions", Cengage Learning,
Sixth Edition, New Delhi,2013.<br>
3. Joel Hass, Christopher Heil and Maurice D.Weir, "Thomas' Calculus", Pearson,
Fourteenth Edition, New Delhi, 2018.<br>
4. Narayanan S. and Manicavachagom Pillai T. K., “Calculus" Volume I and II,<br>
S. Viswanathan Publishers Pvt. Ltd., Chennai, 2009.<br><br>
REFERENCES:<br><br>
1. Bali N., Goyal M., Watkins C., “Advanced Engineering Mathematics”, Firewall Media
(An imprint of Lakshmi Publications Pvt., Ltd.,), Seventh Edition, New Delhi, 2009.<br>
2. Erwin Kreyszig, "Advanced Engineering Mathematics", John Wiley and Sons, Tenth
Edition, New Delhi, 2015.<br>
3. Greenberg M.D., “Advanced Engineering Mathematics”, Pearson Education, Second
Edition, Fifth Reprint, Delhi, 2009.<br>
4. Jain R.K., Iyengar S.R.K., “Advanced Engineering Mathematics”,Narosa
Publications, Fifth Edition, New Delhi, 2017.<br>
5. Peter V.O’Neil, “Advanced Engineering Mathematics”, Cengage Learning India Pvt.,
Ltd, Seventh Edition, New Delhi , 2012.<br>
6. Ramana B.V., “Higher Engineering Mathematics”, Tata McGraw Hill Co. Ltd.,
Eleventh Reprint, New Delhi, 2010.<br>
  `;

}
else if (subject1=="ENGINEERING PHYSICS" && sem1=="SEMESTER-1" && dept1=="INFORMATION TECHNOLOGY" ){
  syllcont.innerHTML=`
  PH5151<br><br> ENGINEERING PHYSICS <br><br>
  CREDITS: 3<br><br>
 (Common to all branches of B.E / B.Tech programmes)<br><br>
OBJECTIVE<br><br>
* To make the students in understanding the importance of mechanics.<br>
* To equip the students on the knowledge of electromagnetic waves.<br>
* To introduce the basics of oscillations, optics and lasers.<br>
* To enable the students in understanding the importance of quantum physics.<br>
* To elucidate the application of quantum mechanics towards the formation of energy
bands in crystalline materials.<br><br>
UNIT I <br><br>MECHANICS<br><br>
Moment of Inertia (M.I) - Radius of Gyration - Theorems of M .I – M.I of Circular Disc, Solid
Cylinder , Hollow Cylinder , Solid Sphere and Hollow Sphere – K.E of a Rotating Body – M.I
of a Diatomic Molecule – Rotational Energy State of a Rigid Diatomic Molecule – Centre of
Mass – Conservation of Linear Momentum – Relation Between Torque and Angular
momentum – Torsional pendulum.<br><br>
UNIT II<br><br> ELECTROMAGNETIC WAVES <br><br>
Gauss’s Law – Faraday’s Law – Ampere’s Law – The Maxwell’s Equations – Wave
Equation; Plane Electromagnetic Waves in Vacuum, Conditions on the Wave Field –
Properties of Electromagnetic Waves: Speed, Amplitude, Phase, Orientation and Waves in
Matter – Polarization – Producing Electromagnetic Waves – Energy and Momentum in EM
Waves: Intensity, Waves From Localized Sources, Momentum and Radiation Pressure –
Cell-Phone Reception. Reflection and Transmission of Electromagnetic Waves from a NonConducting Medium – Vacuum Interface for Normal Incidence.<br><br>
UNIT III<br><br> OSCILLATIONS, OPTICS AND LASERS <br><br>
Simple Harmonic Motion – Resonance – Waves on a String – Standing Waves – Traveling
Waves – Energy Transfer of a Wave – Sound Waves – Doppler Effect – Reflection and
Refraction of Light Waves – Total Internal Reflection – Interference – Interferometers – Air
Wedge Experiment. Theory of Laser – Characteristics – Spontaneous and Stimulated
Emission – Einstein’s Coefficients – Population Inversion – Nd-YAG Laser, CO2 Laser,
Semiconductor Laser – Applications.<br><br>
UNIT IV<br><br> BASIC QUANTUM MECHANICS <br><br>
Photons and Light Waves – Electrons And Matter Waves – The Schrodinger Equation (Time
Dependent and Time Independent Forms) – Meaning of Wave Function – Normalization -
Particle in a Infinite Potential Well – Normalization, Probabilities and the Correspondence
Principle.<br><br>
UNIT V <br><br>APPLIED QUANTUM MECHANICS <br><br>
The Harmonic Oscillator – Barrier Penetration and Quantum Tunneling – Tunneling
Microscope – Resonant Diode – Finite Potential Wells – Particle in a Three Dimensional Box
– Bloch’s Theorem for Particles in a Periodic Potential, Kronig-Penney Model and Origin of
Energy Bands.<br><br>
TOTAL: 45 PERIODS<br><br>
OUTCOMES:<br><br>
On completion of the course, the students will be able to:<br>
1. Understanding the importance of mechanics.<br>
2. Express the knowledge of electromagnetic waves.<br>
3. Know the basics of oscillations, optics and lasers.<br>
4. Understanding the importance of quantum physics.<br>
5. Apply quantum mechanical principles towards the formation of energy bands in
crystalline materials.<br><br>
TEXT BOOKS<br><br>
1. D.Kleppner, R.Kolenkow., “An Introduction to Mechanics”, McGraw Hill Education,
2017.<br>
2. D.Halliday, R.Resnick, J.Walker, “Principles of Physics”. John Wiley & Sons, 2015.<br>
3. N.Garcia, A.Damask, S.Schwarz, “Physics for Computer Science Students”,
Springer- Verlag, 2012.<br><br>
REFERENCES:<br><br>
1. R.Wolfson, “Essential University Physics”, Volume 1 & 2, Pearson, 2016.<br>
2. D.J.Griffiths, “Introduction to Electrodynamics. Pearson Education”, 2015.<br>
3. K.Thyagarajan, A.Ghatak, “Lasers: Fundamentals and Applications”, Springer, 2012. `}
else if (subject1=="ENGINEERING CHEMISTRY" && sem1=="SEMESTER-1" && dept1=="INFORMATION TECHNOLOGY" ){
  syllcont.innerHTML=`
  CY5151<br><br> ENGINEERING CHEMISTRY<br><br>
  CREDITS: 3<br><br>
 (COMMON TO ALL BRANCHES)<br><br>
OBJECTIVES:<br><br>
* To introduce the basic concepts of polymers, their properties and some of the
important applications.<br>
* To impart knowledge on the basic principles and preparatory methods of
nanomaterials.<br>
* To facilitate the understanding of the laws of photochemistry, photoprocesses and
instrumentation & applications of spectroscopic techniques.<br>
* To familiarize the operating principles and applications of energy conversion, its
processes and storage devices.<br>
*To inculcate sound understanding of water quality parameters and water treatment
techniques.<br><br>
UNIT I <br><br>POLYMER CHEMISTRY <br><br>
Introduction: Functionality – Degree of Polymerization. Classification of Polymers- Natural
and Synthetic, Thermoplastic and Thermosetting. Types and Mechanism of Polymerization:
Addition (Free Radical, Cationic, Anionic And Living); Condensation and Copolymerization.
Properties of Polymers: Tg, Tacticity, Molecular Weight – Weight Average, Number Average
and Polydispersity Index. Techniques of Polymerization: Bulk, Emulsion, Solution and
Suspension. Structure, Properties and Uses Of: PE, PVC, PC, PTFE, PP, Nylon 6, Nylon
66, Bakelite, Epoxy; Conducting Polymers – Polyaniline and Polypyrrole.<br><br>
UNIT II<br><br> NANOCHEMISTRY <br><br>
Basics – Distinction Between Molecules, Nanomaterials and Bulk Materials; Size-Dependent
Properties. Types – Nanoparticle, Nanocluster, Nanorod, Nanowire and Nanotube.
Preparation of Nanomaterials: Sol-Gel, Solvothermal, Laser Ablation, Chemical Vapour
Deposition, Electrochemical Deposition and Electro Spinning. Characterization – Scanning
Electron Microscope and Transmission Electron Microscope – Principle and Instrumentation
(Block Diagram). Properties (Optical, Electrical, Mechanical and Magnetic) and Applications
of Nanomaterials – Medicine, Agriculture, Electronics and Catalysis.<br><br>
UNIT III<br><br> PHOTOCHEMISTRY AND SPECTROSCOPY <br><br>
Photochemistry: Laws of Photochemistry – Grotthuss-Draper Law, Stark-Einstein Law and
Lambert-Beer Law (Derivation and Problems). Photo Physical Processes – Jablonski
Diagram. Chemiluminescence, Photo-Sensitization and Photoquenching – Mechanism and
Examples. Spectroscopy: Electromagnetic Spectrum – Absorption of Radiation – Electronic,
Vibrational and Rotational Transitions. Width and Intensities of Spectral Lines. Atomic
Absorption Spectroscopy, UV-Vis and IR Spectroscopy – Principles, Instrumentation (Block
Diagram) and Applications.<br><br>
UNIT IV<br><br> ENERGY CONVERSIONS AND STORAGE <br><br>
Nuclear Fission – Controlled Nuclear Fission – Nuclear Fusion – Differences Between
Nuclear Fission and Fusion – Nuclear Chain Reactions – Nuclear Energy – Light Water
Nuclear Power Plant – Fast Breeder Reactor. Solar Energy Conversion – Solar Cells. Wind
Energy. Batteries – Types of Batteries – Primary Battery (Dry Cell), Secondary Battery (Lead
Acid, Nickel-Cadmium and Lithium-Ion-Battery). Fuel Cells – H2-O2 and Microbial Fuel Cell.
Explosives – Classification, Examples: TNT, RDX, Dynamite; Rocket Fuels and Propellants
– Definition and Uses.<br><br>
UNIT V<br><br> WATER TECHNOLOGY <br><br>
Water – Sources And Impurities – Water Quality Parameters: Colour, Odour, pH, Hardness,
Alkalinity, TDS, COD and BOD. Boiler Feed Water – Requirement – Troubles (Scale &
Sludge, Caustic Embrittlement, Boiler Corrosion and Priming & Foaming. Internal
Conditioning – Phosphate, Calgon and Carbonate Treatment. External Conditioning –
Zeolite (Permutit) And Ion Exchange Demineralization. Municipal Water Treatment Process
– Primary (Screening, Sedimentation and Coagulation), Secondary (Activated Sludge
Process And Trickling Filter Process) And Tertiary (Ozonolysis, UV Treatment, Chlorination,
Reverse Osmosis).<br><br>
TOTAL: 45 PERIODS<br><br>
OUTCOMES:<br><br>
On completion of the course, the students will be able to:<br>
1. Recognize and apply basic knowledge on different types of polymeric materials,
their general preparation methods and applications to futuristic material fabrication
needs.<br>
2. Identify and apply basic concepts of nanoscience and nanotechnology in designing
the synthesis of nanomaterials for engineering and technology applications.<br>
3. Identify and apply suitable spectroscopic technique for material analysis and study
different forms of photochemical reactions.<br>
4. Recognize different forms of energy resources and apply them for suitable
applications in energy sectors.<br>
5. Demonstrate the knowledge of water and their quality in using at different industries.<br><br>
TEXT BOOKS:<br><br>
1. Jain P. C., Monica Jain., “Engineering Chemistry”, Sixteenth Edition, Dhanpat Rai
Publishing Company (P) Ltd, New Delhi, 2015.<br>
2. Sivasankar B., “Engineering Chemistry”, Tata McGraw-Hill Publishing Company Ltd,
New Delhi, 2012.<br>
3. S.S.Dara, “A text book of Engineering Chemistry”, Chand Publications, 2014.<br><br>
REFERENCES:<br><br>
1. Schdeva M V, “Basics of Nano Chemistry”, Anmol Publications Pvt Ltd<br>
2. B.Sivasankar, “Instrumental Methods of Analysis”, Oxford University Press. 2012.<br>
3. Friedrich Emich, “Engineering Chemistry”, Scientific International Ltd.<br>
4. V RGowariker, N V Viswanathan, Jayadev Sreedhar, “Polymer Science”, New AGE
International Publishers, 2009.`}
else if (subject1=="PROBLEM SOLVING AND PYTHON PROGRAMMING" && sem1=="SEMESTER-1" && dept1=="INFORMATION TECHNOLOGY" ){
  syllcont.innerHTML=`
  GE5153<br><br> PROBLEM SOLVING AND PYTHON PROGRAMMING <br><br>
  CREDITS: 3<br><br>
OBJECTIVES:<br><br>
* To know the basics of algorithmic problem solving.<br>
* To develop Python programs with conditionals and loops.<br>
* To define Python functions and use function calls.<br>
* To use Python data structures - lists, tuples, dictionaries.<br>
* To do input/output with files in Python.<br><br>
UNIT I <br><br>INTRODUCTION TO COMPUTING AND PROBLEM SOLVING <br><br>
Fundamentals of Computing – Computing Devices – Identification of Computational
Problems – Pseudocodes and Flowcharts – Instructions – Algorithms – Building Blocks of
Algorithms – Introduction to Python Programming – Python Interpreter and Interactive Mode
– Variables and Identifiers – Arithmetic Operators– Values and Types – Statements.<br><br>
Suggested Activities:<br>
* Developing Pseudocodes and flowcharts for real life activities such as railway ticket
booking using IRCTC, admission process to undergraduate course, academic
schedules during a semester etc.<br>
* Developing algorithms for basic mathematical expressions using arithmetic
operations.<br>
* Installing Python.<br>
* Simple programs on print statements, arithmetic operations.<br><br>
Suggested Evaluation Methods:<br>
* Assignments on pseudocodes and flowcharts.<br>
* Tutorials on Python programs.<br><br>
UNIT II <br><br>CONDITIONALS AND FUNCTIONS <br><br>
Operators – Boolean Values – Operator Precedence – Expression – Conditionals: If-Else
Constructs – Loop Structures/Iterative Statements – While Loop – For Loop – Break
Statement – Function Call and Returning Values – Parameter Passing – Local and Global
Scope – Recursive Functions.<br><br>
Suggested Activities:<br>
* Simple Python program implementation using Operators, Conditionals, Iterative
Constructs and Functions.<br>
* Implementation of a simple calculator.<br>
* Developing simple applications like calendar, phone directory, to-do lists etc.<br>
* Flow charts for GCD, Exponent Functions, Fibonacci Series using conditionals and
iterative statements.<br>
* External learning - Recursion vs. Iteration.<br><br>
Suggested Evaluation Methods:<br>
* Tutorials on the above activities.<br>
* Group discussion on external learning.<br><br>
UNIT III<br><br>SIMPLE DATA STRUCTURES IN PYTHON <br><br>
Introduction to Data Structures – List – Adding Items to a List – Finding and Updating an
Item – Nested Lists – Cloning Lists – Looping Through a List – Sorting a List – List
Concatenation – List Slices – List Methods – List Loop – Mutability – Aliasing – Tuples:
Creation, Accessing, Updating, Deleting Elements in a Tuple, Tuple Assignment, Tuple as
Return Value, Nested Tuples, Basic Tuple Operations – Sets.<br><br>
Suggested Activities:<br>
* Implementing python program using lists, tuples, sets for the following scenario:
Simple sorting techniques
Student Examination Report<br>
Billing Scheme during shopping.<br>
* External learning - List vs. Tuple vs. Set – Implementing any application using all the
three data structures.<br><br>
Suggested Evaluation Methods:<br>
* Tutorials on the above activities.<br>
* Group Discussion on external learning component.<br><br>
UNIT IV<br><br> STRINGS, DICTIONARIES, MODULES <br><br>
Strings: Introduction, Indexing, Traversing, Concatenating, Appending, Multiplying,
Formatting, Slicing, Comparing, Iterating – Basic Built-In String Functions – Dictionary:
Creating, Accessing, Adding Items, Modifying, Deleting, Sorting, Looping, Nested
Dictionaries Built-in Dictionary Function – Finding Key and Value in a Dictionary – Modules –
Module Loading and Execution – Packages – Python Standard Libraries.<br><br>
Suggested Activities:<br>
* Implementing Python program by importing Time module, Math package etc.<br>
* Creation of any package (student’s choice) and importing into the application.<br>
Suggested Evaluation Methods:<br>
* Tutorials on the above activities.<br><br>
UNIT V<br><br> FILE HANDLING AND EXCEPTION HANDLING<br><br>
Introduction to Files – File Path – Opening and Closing Files – Reading and Writing Files –
File Position – Exception: Errors and Exceptions, Exception Handling, Multiple Exceptions.<br><br>
Suggested Activities:<br>
* Developing modules using Python to handle files and apply various operations on
files.<br>
* Usage of exceptions, multiple except blocks - for applications that use delimiters like
age, range of numerals etc.<br>
* Implementing Python program to open a non-existent file using exceptions.<br>
Suggested Evaluation Methods:<br>
* Tutorials on the above activities.<br>
* Case Studies.<br><br>
 TOTAL: 45 PERIODS<br><br>
OUTCOMES:<br><br>
On completion of the course, students will be able to:<br>
CO1: Develop algorithmic solutions to simple computational problems.<br>
CO2: Develop and execute simple Python programs.<br>
CO3: Write simple Python programs for solving problems.<br>
CO4: Decompose a Python program into functions.<br>
CO5: Represent compound data using Python lists, tuples, dictionaries etc.<br>
CO6: Read and write data from/to files in Python programs.<br><br>
TEXT BOOKS:<br><br>
1. Reema Thareja, “Python Programming: Using Problem Solving Approach”, Oxford
University Press, 2017.<br>
2. Allen B. Downey, “Think Python: How to Think Like a Computer Scientist”, Second
Edition, Shroff/O‘Reilly Publishers, 2016.
(http://greenteapress.com/wp/thinkpython/).<br><br>
REFERENCES:<br><br>
1. Guido van Rossum, Fred L. Drake Jr., “An Introduction to Python – Revised and
Updated for Python 3.2”, Network Theory Ltd., 2011.<br>
2. John V Guttag, “Introduction to Computation and Programming Using Python”,
Revised and Expanded Edition, MIT Press , 2013<br>
3. Charles Dierbach, “Introduction to Computer Science using Python”, Wiley India
Edition, 2016.<br>
4. Timothy A. Budd, “Exploring Python”, Mc-Graw Hill Education (India) Private Ltd.,
2015.<br>
5. Kenneth A. Lambert, “Fundamentals of Python: First Programs”, Cengage Learning,
2012. `}
else if (subject1=="BASIC SCIENCES LABORATORY" && sem1=="SEMESTER-1" && dept1=="INFORMATION TECHNOLOGY" ){
  syllcont.innerHTML=`
  BASIC SCIENCE LABORATORY<br><br>
CHEMISTRY LABORATORY: (Minimum of 8 experiments to be conducted)<br><br>
CREDITS:2<br><br>

OBJECTIVES:<br><br>
* To inculcate experimental skills to test basic understanding of water quality
parameters, such as, acidity, alkalinity, hardness, DO, chloride and copper.<br>
* To induce the students to familiarize with electroanalytical techniques such as, pH
metry, potentiometry and conductometry in the determination of impurities in
aqueous solutions.<br>
* To demonstrate the analysis of metals and polymers by spectroscopy and viscometry
methods.<br><br>

LIST OF EXPERIMENTS:<br><br>
1. Estimation of HCl using Na2CO3 as primary standard and Determination of alkalinity
in water sample.<br>
2. Determination of total, temporary & permanent hardness of water by EDTA method.<br>
3. Determination of DO content of water sample by Winkler‟s method.<br>
4. Determination of chloride content of water sample by argentometric method.<br>
5. Estimation of copper content of the given solution by Iodometry.<br>
6. Determination of strength of given hydrochloric acid using pH meter.<br>
7. Determination of strength of acids in a mixture of acids using conductivity meter.<br>
8. Estimation of iron content of the given solution using potentiometer.<br>
9. Estimation of iron content of the water sample using spectrophotometer (1, 10-
 Phenanthroline / thiocyanate method).<br>
10. Estimation of sodium and potassium present in water using flame photometer.<br>
11. Determination of molecular weight of polyvinylalcohol using Ostwald viscometer.<br>
12. Pseudo first order kinetics-ester hydrolysis.<br>
13. Corrosion experiment-weight loss method.<br>
14. Phase change in a solid.<br><br>
 TOTAL: 30 PERIODS<br><br>
OUTCOMES:<br><br>
On completion of the course, the students will be able to:<br><br>
1. Analyse the quality of water samples with respect to their acidity, alkalinity, hardness
and DO.<br>
2. Determine the amount of metal ions through volumetric and spectroscopic
techniques.<br>
3. Determine the molecular weight of polymers by viscometric method.<br>
4. Quantitatively analyse the impurities in solution by electroanalytical techniques.<br>
5. Design and analyse the kinetics of reactions and corrosion of metals.<br><br>
TEXT BOOKS:<br><br>
1. Laboratory Manual- Department of Chemistry, CEGC, Anna University (2014).<br>
2. Vogel‟s Textbook of Quantitative Chemical Analysis (Eighth Edition, 2014). `}
else if (subject1=="PROBLEM SOLVING AND PYTHON PROGRAMMING LABORATORY" && sem1=="SEMESTER-1" && dept1=="INFORMATION TECHNOLOGY" ){
  syllcont.innerHTML=`
  GE5161<br><br> PROBLEM SOLVING AND PYTHON PROGRAMMING LABORATORY<br><br>
CREDITS:2<br><br>
OBJECTIVES:<br><br>
* To understand the problem solving approaches.<br>
* To learn the basic programming constructs in Python.<br>
* To articulate where computing strategies support in providing Python-based solutions
to real world problems.<br>
* To use Python data structures - lists, tuples, dictionaries.<br>
* To do input/output with files in Python.<br><br>
EXPERIMENTS:<br><br>
1. Identification and solving of simple real life or scientific or technical problems, and
developing flow charts for the same.<br>
2. Python programming using simple statements and expressions.<br>
3. Scientific problems using Conditionals and Iterative loops.<br>
4. Implementing real-time/technical applications using Lists, Tuples.<br>
5. Implementing real-time/technical applications using Sets, Dictionaries.<br>
6. Implementing programs using Functions.<br>
7. Implementing programs using Strings.<br>
8. Implementing programs using written modules and Python Standard Libraries.<br>
9. Implementing real-time/technical applications using File handling.<br>
10. Implementing real-time/technical applications using Exception handling.<br>
11. Exploring Pygame tool.<br>
12. Developing a game activity using Pygame like bouncing ball, car race etc.<br><br>
 TOTAL: 60 PERIODS<br><br>
OUTCOMES:<br><br>
On completion of the course, students will be able to:<br>
CO1: Develop algorithmic solutions to simple computational problems<br>
CO2: Develop and execute simple Python programs.<br>
CO3: Structure simple Python programs for solving problems.<br>
CO4: Decompose a Python program into functions.<br>
CO5: Represent compound data using Python data structures.<br>
CO6: Apply Python features in developing software applications
  `}
  
else{
  syllcont.innerHTML="SORRY FOR THE INCONVINIENCE,WE WILL PROCESS YOUR REQUEST SOON!"
}
}
