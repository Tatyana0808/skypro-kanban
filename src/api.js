const token = 'asb4c4boc86gasb4c4boc86g37w3cc3bo3b83k4g37k3bk3cg3c03ck4k';
const API_URL_USER = 'https://wedev-api.sky.pro/api/user';
const  API_URL = 'https://wedev-api.sky.pro/api/kanban';


export async function login({ login, password }) {
    const response = await fetch(API_URL_USER + '/login', {
        method: 'POST',
        
        body: JSON.stringify({
          login,
          password,
        })
    })

    const data = await response.json();
    return data;
}

export async function getTasks({ token }) {
    
    const response = await fetch(API_URL, {
        method: 'GET',
        headers: {
            Authorization: `Bearer ${token}`,
        }
    });
    if (!response.ok){
        throw new Error("Ошибка сервера")
    }
    const data = await response.json();
    return data;
}

export async function userRegistation({ login, name, password }) {
    const response = await fetch(API_URL_USER, {
      method: "POST",
      body: JSON.stringify({
        login,
        name,
        password,
      }),
    });
    if(response.ok){
      const data = await response.json(); 
      
    } else {
      const error = await response.json()
      
      throw new Error(error.error)
  
    }

    
}

export async function addTasks({ title, topic, status, description, date }){
  const response = await fetch(API_URL, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
    },
    
    body: JSON.stringify({
      title, 
      topic, 
      status, 
      description, 
      date, 
    }),
})
return response.json()

}

export async function deleteTask({ id, token }) {
  // const navigate = useNavigate();
  console.log('deleteTask id: ' + id);
  console.log('deleteTask token: ' + token);
  
  return fetch(API_URL + `/${id}`, {
    method: 'DELETE',
    headers: {
      Authorization: `Bearer ${token}`,
      
    },
    
    
  // }).then(() => {
  //   navigate(appRoutes.MAIN)
  }) 
    
  .then((response) => {
    if (response.status !== 201) {
      alert('Something went wrong');
      throw new Error("Something went wrong");
    } else {
      return response.json()
    

    }
  
  })


}

export async function editTasks({id, title, topic, status, description, date}){
  const response = await fetch(API_URL + `/${id}`, {
    method: 'PUT',
    
    body: JSON.stringify({
      title, 
      topic, 
      status, 
      description, 
      date, 
    }),
    headers: {
      Authorization: `Bearer ${token}`,
    },
})





}
