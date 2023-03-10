//to store whether the row exists or not
var selectedRow = null;

//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
//adding event listener to the submit button
const submit = document.getElementById('sbmt');

//adding preventDefault eventListener on the submit to show the new data after opertaions
// earlier after the addition of data the data getting disappearing automatically
submit.addEventListener("click", preventDefault);
// console.log(submit);
submit.addEventListener("click", fun_submit);

//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
//adding new record to the table
function fun_submit(){
    
    const firstName = document.querySelector('#firstName');
    const lastName = document.querySelector('#lastName');
    const hobby = document.querySelector('#hobby');
    
    // alert(firstName.value);
    const msg = document.createElement("div");
    msg.classList.add('msgError');
    msg.innerHTML = "Please fill in all the fields!"

    const title = document.querySelector('#title');
    if((firstName.value == "") || (lastName.value == "") || (hobby.value == "")){
        //  alert("some fields are blank!");
        title.appendChild(msg);

        setTimeout(function(){
            title.children[1].remove();
        }, 4000);
    }
    else{
        if(selectedRow == null) // new row will be added
        addData(firstName.value, lastName.value, hobby.value);
        else // updating the previous data
        updateData(firstName.value, lastName.value, hobby.value);

        clearFields();
    }

    
}

//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
//displaying the add record in the table
function addData(firstName, lastName, hobby){
    
    // getting the table body to add the data
    const list = document.querySelector('#student-list');

    // creating the table row
    const row = document.createElement("tr");

    // alert(firstName);
    //creating the row data
    row.innerHTML = 
    `<td>${firstName}</td><td>${lastName}</td><td>${hobby}</td><td><button id="edit" onclick="editData(this)">Edit</button>
    <button id="delete" onclick="deleteData(this)">Delete</button></td>`;

    //adding row to the table
    list.appendChild(row);

    const success_msg = document.createElement("div");
    success_msg.classList.add('msgSuccess');
    success_msg.innerHTML = "Data added successfully!"

    const title = document.querySelector('#title');
        title.appendChild(success_msg);

        setTimeout(function(){
            title.children[1].remove();
        }, 4000);
}

//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
//update data
function updateData(firstName, lastName, hobby){
    // console.log(firstName + " " + lastName + " " + hobby);
    // console.log(selectedRow.children[0].innerHTML);
    // console.log(selectedRow.children[1].innerHTML);
    // console.log(selectedRow.children[2].innerHTML);

    // console.log(firstName + " " + lastName + " " + hobby);


    //clearing the input fields
    clearFields();

    // updating the data
    selectedRow.children[0].innerHTML = firstName;
    selectedRow.children[1].innerHTML = lastName;
    selectedRow.children[2].innerHTML = hobby;

    const success_msg = document.createElement("div");
    success_msg.classList.add('msgSuccess');
    success_msg.innerHTML = "Data updated successfully!"

    const title = document.querySelector('#title');
        title.appendChild(success_msg);

        setTimeout(function(){
            title.children[1].remove();
        }, 4000);
}

//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
//function to load the data after pressing edit button

function editData(td){
    // alert("editData");
    // getting the complete row (record)
    const parent = td.parentElement.parentElement;
    
    // assigning the parent to selectedRow, it will help during updation of data 
    selectedRow = parent;
    // console.log("children: " + parent.children[0].innerHTML);

    // extrating all fields
    const firstName = parent.children[0].innerHTML;
    const lastName = parent.children[1].innerHTML;
    const hobby = parent.children[2].innerHTML;

    // alert(firstName + " " + lastName + " " + hobby);

    // loading data for editing
    document.querySelector('#firstName').value = firstName;
    document.querySelector('#lastName').value = lastName;
    document.querySelector('#hobby').value = hobby;

    const success_msg = document.createElement("div");
    success_msg.classList.add('msgSuccess');
    success_msg.innerHTML = "Data loaded successfully!"

    const title = document.querySelector('#title');
        title.appendChild(success_msg);

        setTimeout(function(){
            title.children[1].remove();
        }, 4000);
}

//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// function to delete the data
function deleteData(td){
    const parent = td.parentElement.parentElement;
    
    // confirming from user before deletion
    const response = confirm("Are you sure want to delete record?");
    
    if(response)
    parent.remove();

    clearFields();
    
    const msg = document.createElement("div");
    msg.classList.add('msgError');
    msg.innerHTML = "Data deleted successfully!"

    const title = document.querySelector('#title');
    title.appendChild(msg);

    setTimeout(function(){
        title.children[1].remove();
    }, 4000);

}

//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// function to reset the input fields
function clearFields(){
    document.querySelector('#firstName').value = "";
    document.querySelector('#lastName').value = "";
    document.querySelector('#hobby').value = "";

}



// function to get the complete row data corresponding to the delete button
// function getData(value){
//     const action = document.querySelector(`#${value}`);

//     const parent = action.parentElement;
//     console.log(parent.parentElement.innerHTML);
//     return parent.parentElement;
// }

// prevent default function
function preventDefault(event){
    event.preventDefault();
}

//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@