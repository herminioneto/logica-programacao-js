// OBS: EXECUTAR NO JSFIDDLE, POIS O VSCODE NÃO RODA

const API_URL = 'https://jsonplaceholder.typicode.com/users'

async function getUsers () {
	const response = await fetch(API_URL)
  const data = await response.json()
  
  const userEmails = data.map(({email}) => {
  	return {
    	email
    }
  })
  console.log(userEmails)
}

getUsers()