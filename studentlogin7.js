function syllabi7(){
    var subject1=document.getElementById("syllabus").value;
    let sem1= document.getElementById("sem").value;
    let dept1= document.getElementById("dept").value;
    var syllcont=document.getElementById("syll");
    if (subject1=="PROJECT-2" && sem1=="SEMESTER-8" && dept1=="INFORMATION TECHNOLOGY"){
        syllcont.innerHTML="CONTACT RESPECTIVE FACULTY OR THE HEAD OF THE DEPARTMENT";

    }
    else if (subject1=="PROFESSIONAL ELECTIVE-6" && sem1=="SEMESTER-8" && dept1=="INFORMATION TECHNOLOGY"){
        syllcont.innerHTML=`
        PROFESSIONAL ELECTIVES<br><br>
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
    Forensics`;}
    else if (subject1=="PROFESSIONAL ELECTIVE-7" && sem1=="SEMESTER-8" && dept1=="INFORMATION TECHNOLOGY"){
            syllcont.innerHTML=`
            PROFESSIONAL ELECTIVES<br><br>
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
    Forensics`;}

}
