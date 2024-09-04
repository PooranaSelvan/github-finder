class Github{

    constructor(){
        this.client_id = "Ov23liwwF629MoOKjyLA";
        this.client_secret = "2fa18b30e0f8e44af3698894053a96c749a07600";
    }

    async getUser(user){

        const profile =  await fetch(`https://api.github.com/users/${user}?client_id${this.client_id}&client_secret${this.client_secret}`);

            const data = profile.json();
            return data;
    }
}