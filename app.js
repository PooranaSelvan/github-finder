const github = new Github();
const ui = new UI();

let inputText = document.getElementById('searchUser')

document.getElementById('userform').addEventListener("click", (e) => {

    e.preventDefault();

    if(inputText.value != ""){

        github.getUser(inputText.value)
        .then( data => {
            ui.display(data)
        })
        .catch( err => console.log(err));
    }
});