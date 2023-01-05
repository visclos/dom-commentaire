// add a click event listener on the form submit button

// don't forget to "prevent" the form from being sent

// create a new comment with the user name, the current date (french format: dd/mm/yyyy)

// new comments must have the same HTML structure as existing comments.




document.getElementById("comment-submit").addEventListener("click", prevDefault);

let info = document.getElementById('comment-content').value;
let autre = document.getElementById('comment-username');

function prevDefault(e) {
    console.log("L'élément #" + e.currentTarget.id + " a reçu un événement " + e.type);
    e.preventDefault();
    console.log(autre.value)
    console.log(info)
    


    let date= new Date();

    let rajout = document.getElementById('comments-list');
    let suite =document.createElement('li')
    let rajout2 = document.createElement('h5');
    rajout2.textContent = autre.value;
    let rajout3 = document.createElement('h6');
    let last = document.createElement("p");
    last.textContent = info;
    rajout.append(suite);
    suite.append(rajout2)
    suite.append(rajout3)
    suite.append(last)
    
    // console.log(suite.outerHTML);
        
    
   
   


    
    
    document.body.appendChild(rajout);

    rajout3.append (date.toLocaleDateString('fr-FR'));

   
}

   





// function bien(event){
//     let ul= document.querySelector("#comment-list");
//     event.preventDefault();
//     let name = document.getElementById("comment-username").value;
//     let message = document.getElementById("comment-content").value;
//     let date = new date();

//     let liste = document.createElement("li");
//     let utilisateur = document.createElement("h5");
//     utilisateur.textContent = name;
//     let titre6 = document.createElement("h6");
//     let envmessage =document.createElement("p");

//     liste.append(utilisateur);
//     liste.append(titre6);
//     liste.append(envmessage);
//     liste.append(date.toLocaleDateString('fr-FR'));
//     ul.append (liste);
//     console.log(liste);
// }