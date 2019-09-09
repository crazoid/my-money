import React from 'react'
import Rest from './rest.js'

/*
axios
  .get('https://mymoney-crazoid.firebaseio.com/valor.json')
  .then(res => {
    console.log(res.data.item)
  })
*/

/*
axios
  .post('https://mymoney-crazoid.firebaseio.com/valor.json',{
    'outro': 'Fabio Palhano'
  })
  .then(res => {
    console.log(res)
  })
*/

const baseURL = 'https://mymoney-crazoid.firebaseio.com/'
const { useGet, usePost, useDelete } = Rest(baseURL)

//const url2 = 'http://httpbin.org/ip'

function App() {
  const data = useGet('movimentacoes/2019-08')
  const [postData, post] = usePost('movimentacoes/2019-08')
  const [deleteData, remove] = useDelete()

  const doRemove = () => {
    remove('movimentacoes/2019-08/-LoGWEd4zmKd_O84rU77')
  }

  const saveNew = () => {
    post({ valor: 10, descricao: 'Olá'})
  }

  return (
    <div>
      <h1>My Money</h1>
      { JSON.stringify({data})}
      { data.loading && <p>Loading...</p>}
      <pre>{ JSON.stringify({data})}</pre>
      <button onClick={saveNew}>Salvar</button>
      <button onClick={doRemove}>Remover</button>
      <pre>{ JSON.stringify({postData})}</pre>
      <pre>{ JSON.stringify({deleteData})}</pre>
    </div>
  )
}

export default App;
