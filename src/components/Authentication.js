class Authentication{
    constructor() {
        this.auth = false;
        this.role = 'none';
    }

    async login(email, password) {
        try {
            const response = await fetch('/sign-in', {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json'
                    },
                    body: JSON.stringify({
                    email: email,
                    password: password
                    })
            });
            const json = await response.json();

            if (json.confirmation === 'success') {
                this.auth = true;
                this.role = json.role;
                sessionStorage.setItem('user', JSON.stringify({
                    name: json.name,
                    role: json.role,
                    auth: true
                }));
            } else if (json.confirmation === 'failure') {
                alert(json.confirmation + '\n' + json.message);
            } else {
                alert('Something\'s Wrong\nPlease try again in other time.');
            }

        } catch (error) {
            console.log(error);
            alert('Something\'s Wrong\nPlease check your internet connection.');
        }

        return this.role;
    }
    
    getData() {
        return JSON.parse(sessionStorage.getItem('user'));
    }
    
    logout() {
        fetch('/logout');
            
        this.auth = false;
        this.role = 'none';
        sessionStorage.clear()
    }
    
}

export default new Authentication()