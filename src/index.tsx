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
          category: 'Salário', 
          type: 'income' ,
          createdAt: new Date('2021-01-21, 11:00:00')
        },
        { 
          id: 2, 
          description: 'Salário', 
          value: 'R$ 10.000,00', 
          category: 'Salário', 
          type: 'income' ,
          createdAt: new Date('2021-02-21, 11:00:00')
        },
        { 
          id: 3, 
          description: 'Compras mercado', 
          value: 'R$ 1.000,00',
          category: 'Alimentação', 
          type: 'expense' ,
          createdAt: new Date('2021-02-21, 11:00:00')
        },
        { 
          id: 4, 
          description: 'Salário', 
          value: 'R$ 10.000,00', 
          category: 'Salário', 
          type: 'income' ,
          createdAt: new Date('2021-03-21, 11:00:00')
        },
        { 
          id: 5, 
          description: 'Salário', 
          value: 'R$ 10.000,00', 
          category: 'Salário', 
          type: 'income' ,
          createdAt: new Date('2021-04-21, 11:00:00')
        },
        { 
          id: 6, 
          description: 'Aluguél', 
          value: 'R$ 1.300,00', 
          category: 'Moradia', 
          type: 'expense',
          createdAt: new Date('2021-03-25, 19:00:00')
        },
        { 
          id: 7, 
          description: 'Aluguél', 
          value: 'R$ 2.000,00', 
          category: 'Moradia', 
          type: 'expense',
          createdAt: new Date('2021-04-25, 19:00:00')
        },
        { 
          id: 8, 
          description: 'IPVA', 
          value: 'R$ 1.200,00', 
          category: 'Transporte', 
          type: 'expense',
          createdAt: new Date('2021-04-22, 19:00:00')
        },
        { 
          id: 9, 
          description: 'Gasolina', 
          value: 'R$ 150,00', 
          category: 'Transporte', 
          type: 'expense',
          createdAt: new Date('2021-04-22, 19:00:00')
        },
        { 
          id: 10, 
          description: 'Dividendos ITSA4', 
          value: 'R$ 50,00', 
          category: 'Proventos', 
          type: 'income',
          createdAt: new Date('2021-04-22, 19:00:00')
        }
      ]
    })
  },

  routes() {
    this.namespace = 'api'

    this.get('/transactions', (schema, request) => {
      let { month } = request.queryParams

      if (month) {
        const transactions = schema.all('transaction')
          .models
          .map(item => item.attrs)
         .filter(transactions => {
          return new Date(transactions.createdAt as string).getMonth() === Number(month) - 1
         })

        return { transactions } 
      } 

      return schema.all('transaction')
    })

    this.post('/transactions', (schema, request) => {
      const data = JSON.parse(request.requestBody)

      return schema.create('transaction', data)
    })
  }
})

ReactDOM.render(<App />, document.getElementById('root'))