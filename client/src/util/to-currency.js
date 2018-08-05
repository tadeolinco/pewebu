const toCurrency = money => {
  if (isNaN(money)) return 'NaN'

  const prefix = money < 0 ? '-P' : 'P'

  let moneyString = money.toString().split('.')[0]

  if (money < 0) moneyString = moneyString.slice(1)

  let value = ''
  let count = 0
  for (let i = moneyString.length - 1; i >= 0; --i) {
    value = moneyString[i] + value
    count++
    if (i && count === 3) {
      value = ',' + value
      count = 0
    }
  }

  return prefix + value
}

export default toCurrency
