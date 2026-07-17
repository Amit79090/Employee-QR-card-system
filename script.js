// Get Employee ID from URL
const params = new URLSearchParams(window.location.search);
const empId = params.get("id");

// Load employee data
fetch("employees.json")
    .then(response => response.json())
    .then(data => {

        // Find employee
        const emp = data.find(e => e.id == empId);

        if (!emp) {
            document.body.innerHTML = `
                <div style="text-align:center;margin-top:80px;font-family:Arial;">
                    <h2>Employee Not Found</h2>
                    <p>Please check the QR Code.</p>
                </div>
            `;
            return;
        }

        // Display employee details
        document.getElementById("name").textContent = emp.name;
        document.getElementById("id").textContent = emp.id;
        document.getElementById("department").textContent = emp.department;
        document.getElementById("designation").textContent = emp.designation;
        document.getElementById("bloodGroup").textContent = emp.bloodGroup || "-";
        document.getElementById("email").innerHTML =
`<a href="mailto:${emp.email}">${emp.email}</a>`;

document.getElementById("mobile").innerHTML =
`<a href="tel:${emp.mobile}">${emp.mobile}</a>`;
        document.getElementById("emergency").textContent = emp.emergency;

    })
    .catch(error => {
        console.error(error);
        document.body.innerHTML = `
            <div style="text-align:center;margin-top:80px;font-family:Arial;">
                <h2>Error Loading Employee Data</h2>
                <p>Please try again later.</p>
            </div>
        `;
    });
