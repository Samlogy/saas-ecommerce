const url = 'https://jsonplaceholder.typicode.com/users';

export const getAllUsers = async () => {
//   const res = await fetch(`${process.env.REACT_APP_API_SERVER}/books`);
    const res = await fetch(url) 

  if (!res.ok) {
    throw new Error("Something went wrong.");
  }
  
  return res.json();
};

export const getOneUser = async (id: string) => {
    //   const res = await fetch(`${process.env.REACT_APP_API_SERVER}/books`);
        const res = await fetch(`${url}/${id}`) 
    
      if (!res.ok) {
        throw new Error("Something went wrong.");
      }
      
      return res.json();
};

export const createUser = async (user: any) => {
    //   const res = await fetch(`${process.env.REACT_APP_API_SERVER}/books`);
        const res = await fetch(url, {
            method: 'POST',
            body: JSON.stringify(user),
            headers: {
                "Content-type": "application-json; charset=UTF-8"
            }
        }) 
    
      if (!res.ok) {
        throw new Error("Something went wrong.");
      }
      
      return res.json();
};

export const updateUser = async (id: string, user: any) => {
    //   const res = await fetch(`${process.env.REACT_APP_API_SERVER}/books`);
        const res = await fetch(`${url}/${id}`, {
            method: 'PUT',
            body: JSON.stringify(user),
            headers: {
                "Content-type": "application-json; charset=UTF-8"
            }
        }) 
    
      if (!res.ok) {
        throw new Error("Something went wrong.");
      }
      
      return res.json();
};

export const deleteUser = async (id: string) => {
        const res = await fetch(`${url}/${id}`, {
            method: 'DELETE',
        }) 
    
      if (!res.ok) {
        throw new Error("Something went wrong.");
      }
      
      return res.json();
};

// write api call --> as GrapghQl Queries "here"
// call these queries with react-query