const rp = require("request-promise");
const users = require('./users.json');

const mutationQuery = `
mutation createUser($name: String!, $avatar: String){
  createUser(
    name: $name,
    avatar: $avatar,
  ) {
    id, name
  }
}
`;

function createUser(user) {
  return rp({
    url: 'https://api.graph.cool/simple/v1/cj5w8vqez05b50105pzg1erpt',
    method: 'POST',
    json: true,
    body: {
      query: mutationQuery,
      variables: JSON.stringify(user)
    }
  }).then(x => console.log('created', user.name));
}

users
.map(u => {
  return {
    name: u.name,
    avatar: u.avatarURL.endsWith('user_no_image.gif') ? null : u.avatarURL,
  };
})
.reduce((acc, u) => {
  return acc.then(() => createUser(u));
}, Promise.resolve())
;
