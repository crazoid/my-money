import React from 'react'
import useGet from './useGet.js'

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


function App() {
  const data = useGet('https://mymoney-crazoid.firebaseio.com/movimentacoes/2019-08.json')
  const data2 = useGet('http://httpbin.org/ip')
  return (
    <div>
      <h1>My Money</h1>
      { JSON.stringify({data})}
      { data.loading && <p>Loading...</p>}
      <pre>{ JSON.stringify({data2})}</pre>
    </div>
  )
}

export default App;
