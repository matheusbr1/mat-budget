export function currencyToNumber (currency: string) {
  const exreq = /\D*(\d+|\d.*?\d)(?:\D+(\d{2}))?\D*$/
  const parts = exreq.exec(currency)
  
  if(!parts) {
    return
  }
  
  const number = parseFloat(
    parts[1].replace(/\D/, '') + '.' + (parts[2] ? parts[2] : '00')
  )
  
  return parseFloat(number.toFixed(2))
}

export function numberToCurrency(currency: number) {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(currency)
}