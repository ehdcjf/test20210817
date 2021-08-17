export const createRequest = async (data) => {
    const { name,content,pw } = data;
    let url = `http://localhost:3002/request`;
    let options = {
      method: "POST",
      mode: "cors",
      credentials: "include",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        name,content,pw
      }),
    };
  
    const response = await fetch(url, options);
    const result = await response.json();
    return result;
  };
  
  export const showRequest = async (data) => {
    const { skip } = data;
    let url = `http://localhost:3002/request/${skip}`;
    let options = {
      method: "GET",
      mode: "cors",
      credentials: "include",
    };
  
    const response = await fetch(url, options);
    const result = await response.json();
    return result;
  };
  
  export const destroyrequst = async (data) => {
    const { id, writer } = data;
    let url = `http://localhost:3002/board/requst/${id}/${writer}`;
    let options = {
      method: "DELETE",
      mode: "cors",
      credentials: "include",
    };
  
    const response = await fetch(url, options);
    const result = await response.json();
    return result;
  };
  
  export const updaterequst = async (data) => {
    const { id, writer, content } = data;
    let url = `http://localhost:3002/board/requst/${id}/${writer}`;
    let options = {
      method: "PATCH",
      mode: "cors",
      credentials: "include",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        content: content,
      }),
    };
  
    const response = await fetch(url, options);
    const result = await response.json();
    return result;
  };