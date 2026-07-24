// ==========================================
// MAITHON POWER LIMITED
// Employee Digital Identity Card
// ==========================================


// Get Employee ID from QR URL

const params = new URLSearchParams(window.location.search);

const empId = params.get("id");



// Check if Employee ID exists

if (!empId) {


    document.body.innerHTML = `

    <div style="
        display:flex;
        justify-content:center;
        align-items:center;
        height:100vh;
        font-family:Poppins,sans-serif;
        background:#f5f7fa;
    ">

        <div style="
            background:#fff;
            padding:40px;
            border-radius:20px;
            box-shadow:0 10px 30px rgba(0,0,0,.15);
            text-align:center;
            max-width:420px;
        ">

            <h1 style="color:#005BAC;">
                MAITHON POWER LIMITED
            </h1>

            <h2 style="color:#d32f2f;">
                Invalid QR Code
            </h2>

            <p>
                Employee ID is missing from the QR Code.
            </p>

        </div>

    </div>

    `;


    throw new Error("Employee ID missing.");

}




// Load Employee Data

fetch("employees.json")


.then(response => {


    if (!response.ok) {

        throw new Error("Unable to load employees.json");

    }


    return response.json();


})



.then(data => {



    // Search Employee

    const emp = data.find(e => e.id === empId);





    // Employee Not Found

    if (!emp) {



        document.body.innerHTML = `

        <div style="
            display:flex;
            justify-content:center;
            align-items:center;
            height:100vh;
            background:#f5f7fa;
            font-family:Poppins,sans-serif;
        ">


            <div style="
                background:white;
                padding:40px;
                border-radius:20px;
                box-shadow:0 10px 30px rgba(0,0,0,.15);
                text-align:center;
                max-width:420px;
            ">


                <h1 style="color:#005BAC;">
                    MAITHON POWER LIMITED
                </h1>


                <h2 style="color:#d32f2f;">
                    Employee Not Found
                </h2>


                <p>
                    Invalid Employee ID or QR Code.
                </p>


            </div>


        </div>

        `;


        return;


    }





    // Browser Title

    document.title = emp.name + " | Employee Card";





    // ==========================
    // PROFILE IMAGE
    // ==========================


    const photo = document.getElementById("photo");


    if(photo){


        photo.src = emp.image || "images/default.jpg";


        photo.onerror = function(){

            photo.src = "images/default.jpg";

        };


    }






    // ==========================
    // EMPLOYEE DETAILS
    // ==========================



    document.getElementById("name").textContent =
        emp.name || "Not Available";



    document.getElementById("id").textContent =
        emp.id || "Not Available";



    document.getElementById("department").textContent =
        emp.department || "Not Available";



    document.getElementById("designation").textContent =
        emp.designation || "Not Available";





    const designation2 = document.getElementById("designation2");


    if(designation2){

        designation2.textContent =
        emp.designation || "Not Available";

    }





    // ==========================
    // BLOOD GROUP
    // ==========================


    document.getElementById("bloodGroup").innerHTML =

    `<span class="blood">

    ${emp.bloodGroup || "Not Available"}

    </span>`;






    // ==========================
    // CONTACT DETAILS
    // ==========================



    document.getElementById("email").innerHTML =

    `<a href="mailto:${emp.email}">

        ${emp.email || "Not Available"}

    </a>`;




    document.getElementById("mobile").innerHTML =

    `<a href="tel:${emp.mobile}">

        ${emp.mobile || "Not Available"}

    </a>`;





    document.getElementById("emergency").innerHTML =

    `<a href="tel:${emp.emergency}">

        ${emp.emergency || "Not Available"}

    </a>`;







    // ==========================
    // BUTTONS
    // ==========================



    const callButton =
    document.getElementById("callButton");



    if(callButton){

        callButton.href =
        "tel:" + emp.mobile;

    }





    const mailButton =
    document.getElementById("mailButton");



    if(mailButton){

        mailButton.href =
        "mailto:" + emp.email;

    }





})






.catch(error => {



    console.error(error);



    document.body.innerHTML = `


    <div style="
        display:flex;
        justify-content:center;
        align-items:center;
        height:100vh;
        background:#f5f7fa;
        font-family:Poppins,sans-serif;
    ">



        <div style="
            background:white;
            padding:40px;
            border-radius:20px;
            box-shadow:0 10px 30px rgba(0,0,0,.15);
            text-align:center;
            max-width:420px;
        ">


            <h1 style="color:#005BAC;">
                MAITHON POWER LIMITED
            </h1>



            <h2 style="color:#d32f2f;">
                Unable to Load Employee Data
            </h2>



            <p>
                Please contact the system administrator.
            </p>



        </div>



    </div>



    `;



});
