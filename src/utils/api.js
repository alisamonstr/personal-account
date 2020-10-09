export const fetchContactList = (query) => {
  return fetch(`http://localhost:4000/contacts?q=${query}`).then((x) => x.json())
}

export const addNewContact = (data) => {
  return fetch('http://localhost:4000/contacts', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
}

export const deleteContact = (id) => {
  return fetch(`http://localhost:4000/contacts/${id}`, {
    method: 'DELETE',
  })
}

export const updateContact = (data) => {
  return fetch(`http://localhost:4000/contacts/${data.id}`, {
    method: 'PUT',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
}

export const fetchLogin = (data) => {
  return fetch(
    `http://localhost:4000/users?login_like=${data.login}&password_like=${data.password}`,
  ).then((x) => x.json())
}
