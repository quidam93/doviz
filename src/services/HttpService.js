export default  httpService = {
    get
}

const get = (url)=> {
return  fetch(url).then((Response) => Response.json())
    .then((ResponseJson => {
        return ResponseJson;
    }))

    .catch((error) => {
      console.log(error)
    })
}