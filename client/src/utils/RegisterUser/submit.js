function submit(values){
    fetch('/users/register', { 
        method: 'POST',
        credentials: "same-origin",
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values)
      })
      .then(function(response) {
        return response.json()
      }).then(function(body) {
        console.log(body);
      });
}

export default submit