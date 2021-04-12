import ReactDOM from 'react-dom'
import App from './App'

import { createServer, Model } from 'miragejs'

createServer({
  models: {
    transaction: Model
  },

  seeds(server) {
    server.db.loadData({
      transactions: [
        { 
          id: 1, 
          description: 'Salário', 
          value: 'R$ 10.000,00', 
          category: 'Empresa', 
          type: 'income' ,
          createdAt: new Date('2021-04-21, 11:00:00')
        },
        { 
          id: 2, 
          description: 'Aluguél', 
          value: 'R$ 2.000,00', 
          category: 'Casa', 
          type: 'expense',
          createdAt: new Date('2021-04-25, 19:00:00')
        },
        { 
          id: 3, 
          description: 'Salário', 
          value: 'R$ 10.000,00', 
          category: 'Empresa', 
          type: 'income' ,
          createdAt: new Date('2021-03-21, 11:00:00')
        },
        { 
          id: 4, 
          description: 'Aluguél', 
          value: 'R$ 2.000,00', 
          category: 'Casa', 
          type: 'expense',
          createdAt: new Date('2021-03-25, 19:00:00')
        },
        { 
          id: 5, 
          description: 'IPVA', 
          value: 'R$ 1.200,00', 
          category: 'Casa', 
          type: 'expense',
          createdAt: new Date('2021-03-22, 19:00:00')
        }
      ]
    })
  },

  routes() {
    this.namespace = 'api'

    this.get('/transactions', () => {
      return this.schema.all('transaction')
    })

    this.post('/transactions', (schema, request) => {
      const data = JSON.parse(request.requestBody)

      return schema.create('transaction', data)
    })
  }
})

ReactDOM.render(<App />, document.getElementById('root'))