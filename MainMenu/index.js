var firebaseConfig = {
    apiKey: "AIzaSyA3XwxWAXFUZ_78nNNrqAIXjBtm3Qg1yaQ",
    authDomain: "dbzc-login.firebaseapp.com",
    projectId: "dbzc-login",
    storageBucket: "dbzc-login.appspot.com",
    messagingSenderId: "55300042822",
    appId: "1:55300042822:web:dfe7b562a06e584b8c9a47",
    measurementId: "G-H2JPL632X4"
};

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth()
const database = firebase.database()

function register() {

    email = document.getElementById('email').value
    password = document.getElementById('password').value
    full_name = document.getElementById('full_name').value

    if (validate_email(email) == false || validate_password(password) == false) {
        alert('Email or Password is Outta Line!!')
        return
    }

    auth.createUserWithEmailAndPassword(email, password)
        .then(function () {

            var user = auth.currentUser

            var database_ref = database.ref()

            var user_data = {
                email: email,
                full_name: full_name,
                last_login: Date.now(),
                powerLevel: 0,
                FriezaFight: false,
                FatBuuFight: false,
                BeerusFight: false,
                JirenFight: false
            }

            database_ref.child('users/' + user.uid).set(user_data)

            var userRef = database_ref.child('users/' + user.uid)

            userRef.on('value', function (snapshot) {
                var data = snapshot.val()

                currentPowerLevel = data.powerLevel;
                FriezaFight = data.FriezaFight;
                FatBuuFight = data.FatBuuFight;
                BeerusFight = data.BeerusFight;
                JirenFight = data.JirenFight;
            }, function (error) {
                console.error('Error reading variables:', error);
            })

            alert('Account Created!')
        })
        .catch(function (error) {

            var error_code = error.code
            var error_message = error.message

            alert(error_message)
        })
}


function login() {

    email = document.getElementById('email').value
    password = document.getElementById('password').value


    if (validate_email(email) == false || validate_password(password) == false) {
        alert('Email or Password is Outta Line!!')
        return
    }

    auth.signInWithEmailAndPassword(email, password)
        .then(function () {

            var user = auth.currentUser

            var database_ref = database.ref()

            var user_data = {
                last_login: Date.now()
            }

            window.addEventListener('load', function () {

                database_ref.child('users/' + user.uid).update(user_data)
                if (localStorage.getItem("powerLevel")) {
                    currentPowerLevel = parseInt(localStorage.getItem("powerLevel"));
                    var powerLevel = document.getElementById('powerLevel');
                    if (powerLevel) {
                        powerLevel.innerHTML = currentPowerLevel;
                    } else {
                        console.error('Error: element with ID "powerLevel" not found');
                    }
                }

                firebase.auth().onAuthStateChanged(function (user) {
                    if (user) {
                        var userId = user.uid;
                        var userRef = firebase.database().ref('users/' + userId);

                        userRef.on('value', function (snapshot) {
                            var data = snapshot.val();
                            var powerLevel = data.powerLevel || 0;
                            localStorage.setItem('PowerLevel', powerLevel);
                            console.log('powerLevel synced from firebase to local storage');

                            var powerLevel = document.getElementById('powerLevel');
                            if (powerLevel) {
                                powerLevel.innerHTML = powerLevel;
                            } else {
                                console.error('Error: element with ID "powerLevel" not found');
                            }
                        }, function (error) {
                            console.error('Error syncing powerLevel:', error);
                        });
                    }
                });
            });

            alert('Logged in!');
            window.location.href = "../CharSelect/CharSelect.html";
        })

        .catch(function (error) {
            var error_code = error.code
            var error_message = error.message

            alert(error_message)
        })
}







function validate_email(email) {
    expression = /^[^@]+@\w+(\.\w+)+\w$/
    if (expression.test(email) == true) {
        return true
    } else {
        return false
    }
}

function validate_password(password) {
    if (password < 6) {
        return false
    } else {
        return true
    }
}

function validate_field(field) {
    if (field == null) {
        return false
    }

    if (field.length <= 0) {
        return false
    } else {
        return true
    }
}


firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
        var userId = user.uid;
        var userRef = firebase.database().ref('users/' + userId);

        userRef.on('value', function (snapshot) {
            var data = snapshot.val();

            var powerLevel = parseInt(data.powerLevel);

            var FriezaFight = data.FriezaFight;
            var FatBuuFight = data.FatBuuFight;
            var BeerusFight = data.BeerusFight;
            var JirenFight = data.JirenFight;

            console.log(powerLevel);
            console.log(FriezaFight);
            console.log(FatBuuFight);
            console.log(BeerusFight);
            console.log(JirenFight);

            localStorage.setItem('powerLevel', powerLevel);
        }, function (error) {
            console.error('Error reading variables:', error);
        });
    } else {
        console.log('No user is signed in');
        localStorage.setItem('powerLevel', 0);
    }

    setInterval(function () {
        firebase.auth().onAuthStateChanged(function (user) {
            if (user) {
                var userId = user.uid;
                var userRef = firebase.database().ref('users/' + userId);
                currentPowerLevel = parseInt(localStorage.getItem('powerLevel'));

                userRef.update({ powerLevel: currentPowerLevel }, function (error) {
                    if (error) {
                        console.error('Error updating currentPowerLevel:', error);
                    } else {
                        console.log('currentPowerLevel updated successfully');
                    }
                });
            } else {
                console.log('No user is signed in');
            }
        });
    }, 30000);
})
