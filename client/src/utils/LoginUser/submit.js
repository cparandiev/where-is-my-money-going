// import { SubmissionError } from 'redux-form'

// const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))

// function submit(values) {
//   console.log(values)
//   return sleep(1000) // simulate server latency
//     .then(() => {
//       if (![ 'john', 'paul', 'george', 'ringo' ].includes(values.username)) {
//         throw new SubmissionError({ username: 'User does not exist', _error: 'Login failed!' })
//       } else if (values.password !== 'redux-form') {
//         throw new SubmissionError({ password: 'Wrong password', _error: 'Login failed!' })
//       } else {
//         window.alert(`You submitted:\n\n${JSON.stringify(values, null, 2)}`)
//       }
//     })
// }

function submit(values){
    fetch('/users/login', { 
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