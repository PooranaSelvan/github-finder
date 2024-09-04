class UI{

    constructor(){
        this.result = document.getElementById('profile')
    }

    display(data){

        if(data.message === "Not Found"){
            this.result.innerHTML = Swal.fire("User Not Found!!");
        }else{

            this.result.innerHTML = `
            
            <div class="card card-body">
                    <div class="row">
                        <div class="col-md-3">
                        <img class="mb-3" width="100%" src=${data.avatar_url} alt="">
                        <a href=${data.html_url} target="_blank" class="btn btn-primary">View Profile</a>
                        </div>
                        <div class="col-md-9">
                        <span class="badge bg-primary">Public Repos : ${data.public_repos}</span>
                        <span class="badge bg-secondary">Followers : ${data.followers}</span>
                        <span class="badge bg-info">Following : ${data.following}</span>

                        <br>
                        <br>

                        <ul class="list-group">
                            <li class="list-group-item">Company : ${data.company}</li>
                            <li class="list-group-item">Location : ${data.location}</li>
                            <li class="list-group-item">Bio : ${data.bio}</li>
                        </ul>
                        </div>
                    </div>
                </div>
            
            `

            document.getElementById('remove-button').addEventListener('click', (e) => {
                e.preventDefault();

                this.result.innerHTML = ""

                document.getElementById('searchUser').value = "";
            })
        }
    }
}