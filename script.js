// Read Employee ID from URL
const params = new URLSearchParams(window.location.search);
const empId = params.get("id");

// Load Employee Data
fetch("employees.json")
.then(response => response.json())
.then(data => {

    // Find employee by ID
    const emp = data.find(e => e.id == empId);

    // Employee not found
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
                width:400px;
            ">

                <h1 style="color:#005BAC;">
                    MAITHON POWER LIMITED
                </h1>

                <h2 style="color:red;">
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

    // Display Employee Details

    document.getElementById("name").textContent = emp.name;

    document.getElementById("id").textContent = emp.id;

    document.getElementById("department").textContent = emp.department;

    document.getElementById("designation").textContent = emp.designation;

    document.getElementById("bloodGroup").innerHTML =
        `<span class="blood">${emp.bloodGroup || "-"}</span>`;

    document.getElementById("email").innerHTML =
        `<a href="mailto:${emp.email}">${emp.email}</a>`;

    document.getElementById("mobile").innerHTML =
        `<a href="tel:${emp.mobile}">${emp.mobile}</a>`;

    document.getElementById("emergency").innerHTML =
        `<a href="tel:${emp.emergency}">${emp.emergency}</a>`;

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
            width:420px;
        ">

            <h1 style="color:#005BAC;">
                MAITHON POWER LIMITED
            </h1>

            <h2 style="color:red;">
                Unable to Load Employee Data
            </h2>

            <p>
                Please contact the system administrator.
            </p>

        </div>

    </div>
    `;

});
