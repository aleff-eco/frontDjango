import axios from "axios";

function Registronew(){
    return (
        <div>
            <input type="text" placeholder="Username" id="username" />
            <input type="email" placeholder="Email" id="email" />
            <input type="text" placeholder="First_name" id="first_name" />
            <input type="text" placeholder="Last_name" id="last_name" />
            <input type="password" placeholder="Password1" id="password1"/>
            <input type="password" placeholder="Password2" id="password2"/>
            <button onClick={()=>{
                axios.post('http://localhost:8000/api/register/v1/registernew/',{
                    'username':document.getElementById('username').value,
                    'email':document.getElementById('email').value,
                    'first_name':document.getElementById('first_name').value,
                    'last_name':document.getElementById('last_name').value,
                    'password1':document.getElementById('password1').value,
                    'password2':document.getElementById('password2').value
                }).then(response=>{
                    console.log(response.data)
                })
            }
            }>Registrar</button>
            
        </div>
    )

}

export default Registronew