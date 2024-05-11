function submit(event) {
    const firstName = document.getElementById('firstName').value.trim();
    const lastName = document.getElementById('lastName').value.trim();
    const phoneNumber = document.getElementById('phoneNumber').value.trim();
    console.log(phoneNumber.length)
    if (firstName == "" || lastName == "" || phoneNumber.length !== 10) {
        alert("Please Enter a valid Data");
    } else {
        
        const tableBody = document.getElementById('contactTable');
     const row = document.createElement('tr');
     row.innerHTML = `
       <td>${firstName}</td>
       <td>${lastName}</td>
       <td>${phoneNumber}</td>
       <td><button onclick="deleteContact(this)">Delete</button>
       <button onclick="updateContact(this)">Update</button></td>
     `;
     tableBody.appendChild(row);
     document.getElementById('firstName').value = '';
     document.getElementById('lastName').value = '';
     document.getElementById('phoneNumber').value = '';
    }

};


function deleteContact(button) {
   
            button.closest('tr').remove(); // Remove the table row on successful deletion
    
}

function updateContact(button) {

    let row = button.parentNode.parentNode;
    let updFirstName = row.children[0].textContent;
    let updLastName = row.children[1].textContent;
    let updPhoneNumber = row.children[2].textContent;
    document.getElementById('firstName').value = updFirstName;
    document.getElementById('lastName').value = updLastName;
    document.getElementById('phoneNumber').value = updPhoneNumber;
    

    button.closest('tr').remove()
}



loadContacts(); // Initial load of contacts
