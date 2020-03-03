document.getElementById('get-users').addEventListener('click', getUsers);

function getUsers() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(data => {
            console.log(data)
            let outputUsers = '<h2>Users</h2>';
            data.forEach(user => {
                outputUsers += `
                <div class="user-info" id=${user.id}>
                  <ul>
                    <li>Id: ${user.id}</li>
                    <li>Name: ${user.name}</li>
                    <li >Username: <a id="user-name" href="#">${user.username}</a></li>
                    <li>Email: ${user.email}</li>
                    <li>Address: st.${user.address.street} ${user.address.suite}, ${user.address.city}, ${user.address.zipcode}</li>
                    <li>Phone: ${user.phone}</li>
                    <li>Website: ${user.website}</li>
                    <li>Company: ${user.company.name}</li>
                </ul>  
                    <button id="edit-user-button" type="button" class="btn btn-success mr-4">Edit User</button>
                    <button id="delete-user" type="button" class="btn btn-danger">Delete User</button>              
                </div>
                `;
            });
            document.getElementById('users-list').innerHTML = outputUsers;
            document.getElementById('users-list').style.display = 'block';
            document.getElementById('edit-user').style.display = 'none';
            location.hash = ''
        })
}

document.addEventListener('click', deleteUser)

function deleteUser(user) {
    if (!user.target.matches('#delete-user')) return;
    alert('Are you sure you want to delete this user');
    let userId = user.target.parentNode.getAttribute('id');
    fetch('https://jsonplaceholder.typicode.com/users/${userId}', {
        method: 'DELETE'
    })
        .then(response => {
            if (response.ok) {
                console.log(`User with id:${userId} was removed`)
            } else {
                "Failed to delete user"
            }
        })
    user.target.parentNode.style.display = 'none';
}

document.addEventListener('click', editUser);

// window.addEventListener('hashchange', function () {
//     console.log('hash changed')
//     if (location.hash.includes('edit-user')) {
//         parent.style.display = 'none'
//     }
// })
function editUser(user) {
    if (!user.target.matches('#edit-user-button')) return;
    let userId = user.target.parentNode.getAttribute('id');
    let parent = user.target.parentNode.parentNode;
    parent.style.display = 'none';
    location.hash = `/edit-user/${userId}`

    fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
        .then(response => response.json())
        .then(user => {
            '<div id="user-info"></div>';
            let outputUser = `
            <h3>User Info</h3>
            <div class="user-form" id=${user.id}>
              <form>
              <div>
              <label for="id">Id: </label>
              <input type="text" name="id" id="id" value=${user.id}>
              </div>
              <div>
              <label for="name">Name: </label>
              <input type="text" name="name" id="name" value=${user.name}>
              </div>
              <div>
              <label for="username">Username: </label>
              <input type="text" name="username" id="username" value=${user.username}>
              </div>
              <div>
              <label for="email">Email: </label>
              <input type="text" name="email" id="email" value=${user.email}>
              </div>
              <div>
              <label for="address">Address: </label>
              <input type="text" name="address" id="address" value = ${user.address.street} ${user.address.suite}, ${user.address.city}, ${user.address.zipcode}>
              </div>
              <div>
              <label for="phone">Phone: </label>
              <input type="text" name="phone" id="phone" value=${user.phone}>
              </div>
              <div>
              <label for="website">Website: </label>
              <input type="text" name="website" id="website" value=${user.website}>
              </div>
              <div>
              <label for="company">Company: </label>
              <input type="text" name="company" id="company" value=${user.company.name}>
              </div>
              <button id="save-user" type="button" class="btn btn-success">Save</button>
              `
            let editUserForm = document.getElementById('edit-user')
            editUserForm.innerHTML = outputUser;
            editUserForm.style.display = 'block'
        })
}

document.addEventListener('click', updateUserInfo);

function updateUserInfo(user) {
    if (!user.target.matches('#save-user')) return;
    let userId = document.getElementById('id').value;
    // let useremail = document.getElementById('email').value;
    console.log(userId)
    fetch(`https://jsonplaceholder.typicode.com/user/${userId}`, {
        method: 'PUT',
        headers: {
            'Accept': 'application/json',
            'Content-type': 'application/json'
        },
        body: JSON.stringify({
            email: document.getElementById('email').value
        })
    }
    )
        .then(response => {
            if (response.ok) {
                console.log(`User with id:${userId} was updated`)
            } else {
                "Failed to update user"
            }
        })
}

document.addEventListener('click', getUserPosts);

function getUserPosts(user) {
    if (!user.target.matches('#user-name')) return;
    let userId = user.target.parentNode.parentNode.parentNode.getAttribute('id');
    let parent = user.target.parentNode.parentNode.parentNode.parentNode;
    // console.log(parent)
    // console.log(userId)
    parent.style.display = 'none';
    location.hash = `${userId}`

    fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
        .then(response => response.json())
        // .then(data => console.log(data))
        .then(data => {
            console.log(data)
            let outputPosts = '<h3>Posts</h3>';
            data.forEach(post => {
                console.log(post.id)
                outputPosts += `
                <h4>${post.title}</h4>
                <p>${post.body}</p>
                `
                fetch(`https://jsonplaceholder.typicode.com/comments?postId=${post.id}`)
                    .then(response => response.json())
                    .then(data => {
                        let outputComments = '<h4>Comments</h4>';
                        data.forEach(comment => {
                            outputComments += `
                        <h5>${comment.name}</h5>
                        <p><i>${comment.email}</i></p>
                        <p>${comment.body}</p>
                        `
                        })
                        console.log(outputComments)
                        outputPosts += outputComments;
                    })

            })
            document.getElementById('posts').innerHTML = outputPosts;
        })


}