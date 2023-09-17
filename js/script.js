let result = {

    "tag": "",
    "free": true,
    "role": false,
    "user": "nehalohia8285",
    "email": "nehalohia8285@gmail.com",
    "score": 0.64,
    "state": "deliverable",
    "domain": "gmail.com",
    "reason": "valid_mailbox",
    "mx_found": true,
    "catch_all": null,
    "disposable": false,
    "smtp_check": true,
    "did_you_mean": "",
    "format_valid": true

}

submitbtn.addEventListener("click", async (e) => {
    e.preventDefault()
    console.log("Clicked!")
    resultcont.innerHTML = `<img width="32px" src="img/loading.svg" alt="loading">`



    let key = 'ema_live_5qEF1PSS6qTJFAKQy0dr1eMwSlsI1d5MTsiymCyo'
    let email = document.getElementById("username").value

    let url = `https://api.emailvalidation.io/v1/info?apikey=${key}&email=${email}`
    let res = await fetch(url)
    let result = await res.json()

    let str = ''
    for (key of Object.keys(result)) {
        if(result[key] !== "" && result[key] !== " ") {
            str = str + `<div>${key}: ${result[key]}</div>`
        }
    }
    console.log(str)
    resultcont.innerHTML = str
})