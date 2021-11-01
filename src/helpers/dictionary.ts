export const stateDictionary: Record<string, string> = {
  alagoanes: 'Alagoas',
  amazones: 'Amazonas',
  baianes: 'Bahia',
  carioques: 'Rio de Janeiro',
  catarines: 'Santa Catarina',
  cearences: 'Ceará',
  gauches: 'Rio Grande do Sul',
  lageanes: 'Lages',
  maranhes: 'Maranhão',
  mineires: 'Minas Gerais',
  paraense: 'Pará',
  paranes: 'Paraná',
  paulistes: 'São Paulo',
  pernambuques: 'Pernambuco',
  piauies: 'Piauí',
  potiguares: 'Rio Grande do Norte',
  rondones: 'Rondonia',
  sergipanes: 'Sergipe'
}

export const getStateDescription = (state: string) => stateDictionary[state]

export const getStateByDescription = (description: string) =>
  (Object.keys(stateDictionary) as Array<string>).find(
    (key) => stateDictionary[key] === description
  )
