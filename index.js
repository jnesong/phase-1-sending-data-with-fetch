// Add your code here
function submitData(name, email) {

    const configUsers = {
        method: "POST",
        headers: {
            "Content-Type" : "application/json",
            Accept: "application/json",
        },
        body:JSON.stringify(name, email)
    };

    return fetch ("http://localhost:3000/users", configUsers)
    .then (response => response.json())
    .then (jsonData => console.log(jsonData))
    .catch (error => {
        alert("Bad!");
        console.log(error.message)
    })
}