const dayjs = require('dayjs')

function calculaData(Birthday){
  const Birth = dayjs(Birthday)
  const now = dayjs()
  const idadeAtual = now.diff(Birth, 'year')
  let NextBirth = Birth.add(idadeAtual + 1, 'year')
  const daysLeft = NextBirth.diff(now, 'day')
  NextBirth = NextBirth.format('DD/MM/YYYY')
  console.log(`a idade atual é ${idadeAtual} e faltam ${daysLeft + 1} dia(s) para o próximo aniversário, que será ${NextBirth}`)
}

calculaData('2004-09-25')