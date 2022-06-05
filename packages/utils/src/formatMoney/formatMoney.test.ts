import formatMoney from '.'

describe('format Money function', () => {
  it('works with fractional euros', () => {
    expect(formatMoney(1)).toEqual('€0.01')
    expect(formatMoney(10)).toEqual('€0.10')
    expect(formatMoney(9)).toEqual('€0.09')
  })

  it('leaves off cents when its whole euros', () => {
    expect(formatMoney(100)).toEqual('€1')
    expect(formatMoney(5000)).toEqual('€50')
  })

  it('works with whole and fractional euros', () => {
    expect(formatMoney(140)).toEqual('€1.40')
    expect(formatMoney(1250)).toEqual('€12.50')
    expect(formatMoney(1001)).toEqual('€10.01')
  })
})
