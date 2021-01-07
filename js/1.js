function createlogin() {
    let users = {
        email: email.value,
        pwd: pwd.value,
        name: username.value,
        gender: gender.value,
        phoneNumber: phoneNumber.value,
        constellation: constellation.value,
        bloodType: bloodType.value,
        Profession: Profession.value,
        createAt: new Date().toISOString().split('T')[0],
        birthday: birthday.value
    };//取得用戶註冊的資料
    firebase.auth().createUserWithEmailAndPassword(users.email, users.pwd)
        .then((user) => {
            var uid = firebase.auth().currentUser.uid;
            writeUserData(uid, users.name, users.email, users.gender, users.phoneNumber, users.constellation, users.bloodType, users.Profession, users.createAt, users.birthday)
            function writeUserData(uid, username, email, gender, phoneNumber, constellation, bloodType, Profession, createAt, birthday) {
                firebase.database().ref('users/' + uid).set({
                    username: username,
                    email: email,
                    gender: gender,
                    phoneNumber: phoneNumber,
                    constellation: constellation,
                    bloodType: bloodType,
                    Profession: Profession,
                    createAt: createAt,
                    birthday: birthday
                });
            }
            // alert('註冊成功');
            document.getElementById('sign-form').style.display = "none";
            document.getElementById('success').style.display = "block";
            // window.location.replace("index.html")
        })//如果註冊成功就存回資料庫
        .catch((error) => {
            alert('註冊失敗');
        });//否則顯示錯誤訊息
}
function login() {
    let users = {
        account: account.value,
        password: password.value
    }
    firebase.auth().signInWithEmailAndPassword(users.account, users.password)
        .then((user) => {
            alert('登入成功');
            $('.log-btn').remove();
            $('.navbar-nav').append(`<li class="nav-item">
                <a class="nav-link signOut" onClick="signOut()" href="#">登出</a>
            </li>`)
            // parent.location.href="index.html";
            var data = firebase.auth().currentUser.uid;
            var reftemp = firebase.database().ref('users/' + data + '/username');
            //快照
            reftemp.once('value', function (snapshot) {
                document.querySelector('.username').textContent = snapshot.val();
            })
            var reftemp = firebase.database().ref('users/' + data + '/username');
            // 快照
            reftemp.once('value', function (snapshot) {
                document.querySelector('.name').textContent = snapshot.val();
            })
            var reftemp = firebase.database().ref('users/' + data + '/email');
            // 快照
            reftemp.once('value', function (snapshot) {
                document.querySelector('.email').textContent = snapshot.val();
            })
            var reftemp = firebase.database().ref('users/' + data + '/gender');
            // 快照
            reftemp.once('value', function (snapshot) {
                document.querySelector('.gender').textContent = snapshot.val();
            })
            var reftemp = firebase.database().ref('users/' + data + '/Profession');
            // 快照
            reftemp.once('value', function (snapshot) {
                document.querySelector('.Profession').textContent = snapshot.val();
            })
            var reftemp = firebase.database().ref('users/' + data + '/constellation');
            // 快照
            reftemp.once('value', function (snapshot) {
                document.querySelector('.constellation').textContent = snapshot.val();
            })
            var reftemp = firebase.database().ref('users/' + data + '/bloodType');
            // 快照
            reftemp.once('value', function (snapshot) {
                document.querySelector('.blood-type').textContent = snapshot.val();
            })
            var reftemp = firebase.database().ref('users/' + data + '/phoneNumber');
            // 快照
            reftemp.once('value', function (snapshot) {
                document.querySelector('.phoneNumber').textContent = snapshot.val();
            })
            var reftemp = firebase.database().ref('users/' + data + '/birthday');
            // 快照
            reftemp.once('value', function (snapshot) {
                document.querySelector('.birthday').textContent = snapshot.val();
            })
        })
        .catch((error) => {
            alert('登入失敗')
        });

}
function signOut() {
    firebase.auth().signOut().then(function () {
        alert('登出成功');
        $('.signOut').remove();
            $('.navbar-nav').append(`<li class="nav-item">
                <a class="nav-link log-btn" href="#">登入</a>
            </li>`);
        $('.user-data span').text("尚無資料");
        $('.username').text("尚未登入");
    }).catch(function (error) {
        // An error happened.
    });
}
function updateUser() {//編輯用戶資料
    let users = {
        email: email.value,
        pwd: pwd.value,
        name: username.value,
        gender: gender.value,
        phoneNumber: phoneNumber.value,
        constellation: constellation.value,
        bloodType: bloodType.value,
        Profession: Profession.value,
        birthday: birthday.value
    };//取得用戶註冊的資料
    var person = firebase.database().ref('/users/' + user.uid);
    return person.update(users);
}
function createPost(post) {//建立新文章
    var newPostKey = firebase.database().ref().child('posts').push().key;
    var newPostRef = firebase.database().ref('/posts' + newPostKey).push();
    return newPostRef.set(post);
}
function updatePost(post, postId) {//編輯文章
    var postRef = firebase.database().ref('/posts/' + postId);
    return postRef.update(post);
}
function deletePost(postId) {//刪除文章
    var postRef = firebase.database().ref('/posts/' + postId);
    return postRef.remove();
}
function banPost(postId) {//檢舉文章
    var postRef = firebase.database().ref('/posts/' + postId);
    return postRef.update({ isBanned: true });
}
function createContent(content, postId) {
    var newContentKey = firebase.database().ref().child('posts').push().key;
    var newContent = firebase.database().ref('/posts/' + postId + newContentKey).push();
    return newContent.set(content);
}
function deletePost() {
    var msg = $('#textInput').val()
    var postRef = firebase.database().ref('/messages/' + msg);
    return postRef.remove();
}