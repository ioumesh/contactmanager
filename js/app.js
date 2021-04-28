if(localStorage.getItem("contacts")==undefined){
    localStorage.setItem("contacts", "[]")
}
var result="";
var contacts=JSON.parse(localStorage.getItem("contacts"));
for(i=0; i<contacts.length; i++){
    result+=`
    <div class="contact_item">
                    <i class="fas fa-user fa-2x color-primary"></i>
                    <div class="contact_item_info">
                        <h4>${contacts[i].name}</h4>
                        <p>${contacts[i].number}</p>
                    </div>
                    <i class="fa fa-times-circle color-primary" aria-hidden="true" onclick="deletecontact(${contacts[i].id})"></i>
                </div>  
       `
}
document.getElementsByClassName("contact_body")[0].innerHTML=result;
function submitcontact(event){
    event.preventDefault();
    var contact_name=document.getElementById("name").value;
    var contact_number=document.getElementById("number").value;
    var contacts=JSON.parse(localStorage.getItem("contacts"));
    
    var contact={
        id:Math.random().toString(36).substr(2,9),
        name:contact_name,
        number:contact_number
    }
    contacts.unshift(contact);
    localStorage.setItem("contacts", JSON.stringify(contacts));
    document.getElementById("name").value="";
    document.getElementById("number").value="";
    location.reload();
}

function deletecontact(id){
    var contacts=JSON.parse(localStorage.getItem("contacts"));
    contacts=contacts.filter(function(contact){
        return contact.id !=id;
    });
    localStorage.setItem("contacts", JSON.stringify(contacts));
    location.reload();
    console.log(contacts);

}