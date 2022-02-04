

function addFunction(event){
    event.preventDefault();
const firstname = document.getElementById('firstName').value;
const lastName = document.getElementById('lastName').value;
const email = document.getElementById('email').value;
const password = document.getElementById('password').value;
 let input ={
     firstname:firstname,
     lastName:lastName,
     email:email,
     password:password
 }
 const submitInput = addItem(input);
console.log(submitInput);
}

const addItem = async(input) =>{
    try{
        const response = await axios.post('http://localhost:6000/signup/',input);
        const newItem = response.data;
        console.log('added a new Todo!',newItem);
        return newItem;
    } catch(errors){
        console.log(errors);
    }
}