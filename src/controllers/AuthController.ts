export function sendRegistrationRequest(data: { [key: string]: any }) {
    /*fetch('http://localhost:8000/api/v1/login', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            "name": data["name"],
            "surname": data["surname"],
            "login": data["login"],
            "email": data["email"],
            "password": data["password"],
            "repeat-password": data["repeat-password"],
            "rules": data["rules"]
        })
    }).then((response) => {
        return response.json().then(function (resp) {
            console.log(resp);
        });
    });*/

    /*console.log(JSON.stringify({
        "name": data["name"],
        "surname": data["surname"],
        "login": data["login"],
        "email": data["email"],
        "password": data["password"],
        "repeat-password": data["repeat-password"],
        "rules": data["rules"]
    }));*/

    let rulesNotAccepted: HTMLDivElement = (document.querySelector('#message-rules-not-accepted') as HTMLDivElement);
    let fieldsNull: HTMLDivElement = (document.querySelector('#message-fields-null') as HTMLDivElement);

    if (!data["rulesNotAcceptedHidden"]) {
        rulesNotAccepted.classList.add('message-hidden');
        data["setRulesNotAcceptedHidden"](true);
    }

    if (!data["fieldsNullHidden"]) {
        fieldsNull.classList.add('message-hidden');
        data["setFieldsNullHidden"](true);
    }

    if (data["name"].trim() == '' || data["surname"].trim() == '' ||
        data["login"].trim() == '' || data["email"].trim() == '' ||
        data["password"].trim() == '' || data["password-repeat"].trim() == '') {
            fieldsNull.classList.remove('message-hidden');
            data["setFieldsNullHidden"](false);
    } else if (!data["rules"]) {
        rulesNotAccepted.classList.remove('message-hidden');
        data["setRulesNotAcceptedHidden"](false);
    } else {
        document.location = '/profile';
    }
}

export function sendLoginRequest(data: { [key: string]: string }) {
    /*fetch('http://localhost:8000/api/v1/login', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            "login": data["login"],
            "password": data["password"]
        })
    }).then((response) => {
        return response.json().then(function (resp) {
            console.log(resp);
        });
    });*/

    /*console.log(JSON.stringify({
        "login": data["login"],
        "password": data["password"]
    }));*/

    if (data["login"].trim() == '' || data["password"].trim() == '') {
        let message = document.querySelector('#message') as HTMLDivElement;
        message.classList.remove('message-hidden');
    } else {
        document.location = '/profile';
    }
}