const betterDev = 'john';

function whoBetterCallback(callback, errCallback) {
    if (betterDev !== 'john' && betterDev !== 'marie') {
        errCallback({
            name: 'This is wrong',
            msg: betterDev + '? really'
        })
    } else {
        callback({
            name: betterDev,
            msg: 'devOps are the best!'
        })
    };
};

whoBetterCallback((result) => {
    console.log(result.name + '? Yeah! ' + result.msg)
}, (err) => {
    console.log(err.name + ' ' + err.msg)
});




    // this is the best scenario to turn into 'promises'. lets go:

const betterDeveloper = 'marie';

function whoIsBetterCallback(callbackP, errCallbackP) {

    return new Promise((resolve, reject) => {

        if (betterDeveloper !== 'john' && betterDeveloper !== 'marie') {
            reject({
                 name: 'This is wrong',
                msg: betterDev + '? really'
            })
        } else {
            resolve({
                name: betterDeveloper,
                msg: 'devOps are the best!'
            })
        };
    });
};
    
whoIsBetterCallback()
    .then((result) => {
        console.log(result.name + '? Yeah! ' + result.msg)
    }).catch((err) => {
        console.log(err.name + ' ' + err.msg)
    });



    
    // using the 'promise/fetch' in the real world

const ul = document.querySelector('#users')
const url = 'https://jsonplaceholder.typicode.com/users'

fetch(url)  // fetch = object es6
    .then((resp) => resp.json())  // convert to json
    .then(function (data) {  // array
        console.log(data)

        return data.map(function (user) {
            let li = document.createElement('li');
            li.textContent = `${user.name} (${user.username}) - email: ${user.email}`
            ul.appendChild(li)
        })
    })
    .catch((error) => {
        console.log('Opps! ' + error)
    });
