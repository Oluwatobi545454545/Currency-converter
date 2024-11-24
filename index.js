let signuppage = document.getElementById('signuppage')
let homepage = document.getElementById('homepage')
let email = document.getElementById('email')
let amount = document.getElementById('amountinput')
let select = document.getElementById('select')
let select2 = document.getElementById('select2')
let password1 = document.getElementById('password1')
let password2 = document.getElementById('password2')
let error = document.getElementById('error')
let errors = document.getElementById('errors')
let allerror = document.getElementById('allerror')
let error1 = document.getElementById('error1')
let error2 = document.getElementById('error2')
let error3 = document.getElementById('error3')
let error4 = document.getElementById('error4')
let spinner = document.getElementById('spinner')
let spinnerdiv = document.getElementById('spinnerdiv')
let convertedamount = document.getElementById('convertedamount')
function signup() {
    signuppage.style.display = 'flex'
    homepage.style.display = 'none'
}
function createaccount() {
    let regex1 = /^(?=.{8,20}$).*/ //8-20 characters
    let regex2 = /^(?=[A-Z])./ //one uppercase at least
    let regex3 = /^(?=[0-9])./ //one number at least
    let regex4 = /^(?=.[!@#$%^&*{};:'<>,./?]).*/ //one special characters
    

    if (email.value == '' || password1.value == '' || password2.value == '') {
        error.innerHTML = 'Pls fill all fields'


    } else if (password1.value != password2.value) {
        error.innerHTML = 'Password does not match'

    } else if (password1.value != password2.value) {
        error.innerHTML = 'Password does not match'

    } else {
        email.value = ''; password1.value = ''; password2.value = ''; error.innerHTML = '';
        signuppage.style.display = 'none'
        homepage.style.display = 'block'
        localStorage.setItem('userdetail', email )
    }


    if (regex1.test(!password1.value)) {
        error1.style.color = 'red'
    } else {
        error1.style.color = 'red'
    }
    if (regex2.test(password1.value)) {
        error2.style.color = 'lime'
    } else {
        error2.style.color = 'red'
    }
    if (regex3.test(password1.value)) {
        error3.style.color = 'lime'
    } else {
        error3.style.color = 'red'
    }
    if (regex4.test(password1.value)) {
        error4.style.color = 'lime'
    } else {
        error4.style.color = 'red'
    }
}

const getCurrency = async () => {
    try {
        const data = await fetch('https://api.currencyapi.com/v3/latest?apikey=cur_live_ATzfIXFR8Pr6oKvxkFhDFzdeIqOykW2gwlLtqa4f')
        // console.log(data);
        const actualData = await data.json()
        // console.log(actualData);
        const other = actualData.data;
        // console.log("other", other);
        for (const key in other) {
            select.innerHTML += `<option value="${other[key].value}">${other[key].code}</option>`;
            select2.innerHTML += `<option value="${other[key].value}">${other[key].code}</option>`;
        }
    } catch (error) {
        spinnerdiv.style.display = 'block'
        homepage.style.display = 'none'
        errors.style.display = 'flex'
    }
};
function convert() {
    let calculate = (amount.value / (select.value)) * select2.value
    console.log(calculate);
    convertedamount.innerHTML =  `${'='} ${calculate}`;

}

getCurrency()

