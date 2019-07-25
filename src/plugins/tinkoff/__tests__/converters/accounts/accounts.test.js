import { convertAccount } from '../../../converters'

const accounts = [
  // мультивалютный вклад
  [
    {
      lastRenewalDate: {
        milliseconds: 1557705600000
      },
      lastReceiptDate: {
        milliseconds: 1571011200000
      },
      openDate: {
        milliseconds: 1542056400000
      },
      tariffFileHash: '8dd22e27-d0a2-4604-9430-21c5b47b6d21',
      creationDate: {
        milliseconds: 1542056400000
      },
      marketingName: 'Мультивалютный вклад ТПД 3.0',
      accountIconType: 'MULTI_DEPOSIT',
      accounts:
        [
          {
            externalAccountNumber: '42305810500010432352',
            effectiveRate: 6.59,
            depositRate: 6.5,
            currentLinkedAccount: '5102929949',
            totalExpense: {
              currency: {
                code: 643,
                name: 'RUB',
                strCode: '643'
              },
              value: 0
            },
            typeOfInterest: 'TO_DEPOSIT',
            totalIncome: {
              currency: {
                code: 643,
                name: 'RUB',
                strCode: '643'
              },
              value: 51760.91
            },
            interest: {
              currency: {
                code: 643,
                name: 'RUB',
                strCode: '643'
              },
              value: 1760.91
            },
            moneyAmount: {
              currency: {
                code: 643,
                name: 'RUB',
                strCode: '643'
              },
              value: 51760.91
            },
            currency: {
              code: 643,
              name: 'RUB',
              strCode: '643'
            },
            startAmount: {
              currency: {
                code: 643,
                name: 'RUB',
                strCode: '643'
              },
              value: 50000
            }
          }
        ],
      accountGroup: 'Вклады',
      loyalty: [],
      hidden: false,
      rateIsIncreasedAfterProlongation: true,
      rateIsIncreased: false,
      partNumber: 'TPDMC3.0',
      name: 'Мультивалютный вклад',
      period: 6,
      accountType: 'MultiDeposit',
      status: 'ACTIVE',
      dayBegForPart: {
        milliseconds: 1547240400000
      },
      plannedCloseDate: {
        milliseconds: 1573603200000
      },
      id: '3428475549'
    },
    [{
      'balance': 51760.91,
      'capitalization': true,
      'endDateOffset': 6,
      'endDateOffsetInterval': 'month',
      'id': '3428475549_RUB',
      'instrument': 'RUB',
      'payoffInterval': 'month',
      'payoffStep': 1,
      'percent': 6.5,
      startBalance: 0,
      'startDate': new Date('2018-11-13T00:00:00+03:00'),
      'syncID': ['3428475549'],
      'title': 'Мультивалютный вклад (RUB)',
      'type': 'deposit'
    }]
  ],

  // кредит наличными
  [
    {
      maxRepaymentAmount:
        {
          currency:
            {
              code: 643,
              name: 'RUB',
              strCode: '643'
            },
          value: 176789.8341
        },
      nextPaymentDate:
        {
          milliseconds: 1565989200000
        },
      marketingName: 'Кредит наличными ТПКН 4.11 RUB',
      creationDate:
        {
          milliseconds: 1545782400000
        },
      tariffFileHash: 'b16c730b-c27e-447c-8b76-132db9e0b8bd',
      smeLink: false,
      accountIconType: 'CASH_LOAN',
      standardRate: 14.9,
      accountGroup: 'Кредиты наличными',
      creditAmount:
        {
          currency:
            {
              code: 643,
              name: 'RUB',
              strCode: '643'
            },
          value: 250000
        },
      moneyAmount:
        {
          currency:
            {
              code: 643,
              name: 'RUB',
              strCode: '643'
            },
          value: 176214.36
        },
      estimatedCloseDate:
        {
          milliseconds: 1605560400000
        },
      hidden: false,
      currency:
        {
          code: 643,
          name: 'RUB',
          strCode: '643'
        },
      loyalty: [],
      partNumber: 'CL4.11',
      currentStatus: 'XXXX',
      sumPurchases: 0,
      name: 'Кредит наличными',
      activationPermitted: true,
      tariffInfo:
        {
          lowRate: 0,
          interestRate: 14.9
        },
      fullInterestRate: 14.88,
      accountSubtype: 'CL EMPLOYEE',
      totalExpense:
        {
          currency:
            {
              code: 999,
              name: 'XXX',
              strCode: '999'
            },
          value: 0
        },
      totalIncome:
        {
          currency:
            {
              code: 999,
              name: 'XXX',
              strCode: '999'
            },
          value: 0
        },
      nextPaymentAmount:
        {
          currency:
            {
              code: 643,
              name: 'RUB',
              strCode: '643'
            },
          value: 12300
        },
      accountType: 'CashLoan',
      remainingPaymentsCount: 16,
      linkedCardNumber:
        {
          value: ''
        },
      status: 'NORM',
      overdue:
        {
          currency:
            {
              code: 643,
              name: 'RUB',
              strCode: '643'
            },
          value: 0
        },
      rate: 0,
      debtAmount:
        {
          currency:
            {
              code: 643,
              name: 'RUB',
              strCode: '643'
            },
          value: -176214.36
        },
      restPay:
        {
          currency:
            {
              code: 643,
              name: 'RUB',
              strCode: '643'
            },
          value: 8325.69
        },
      minRepaymentAmount:
        {
          currency:
            {
              code: 643,
              name: 'RUB',
              strCode: '643'
            },
          value: 575.4741
        },
      overDueFee:
        {
          currency:
            {
              code: 643,
              name: 'RUB',
              strCode: '643'
            },
          value: 0
        },
      currentAccount: '5036619426',
      id: '0351635271'
    },
    {
      'balance': -176214.36,
      'capitalization': true,
      'endDateOffset': 16,
      'endDateOffsetInterval': 'month',
      'id': '0351635271',
      'instrument': 'RUB',
      'payoffInterval': 'month',
      'payoffStep': 1,
      'percent': 14.9,
      'startBalance': 250000,
      'startDate': new Date('2018-12-26T00:00:00+00:00'),
      'syncID': ['0351635271'],
      'title': 'Кредит наличными',
      'type': 'loan'
    }
  ]
]

describe('convertAccount', () => {
  for (let i = 0; i < accounts.length; i++) {
    it('should convert account #' + i, () => {
      expect(
        convertAccount(accounts[i][0])
      ).toEqual(
        accounts[i][1]
      )
    })
  }
})

xdescribe('convertOneTransaction', () => {
  const i = 1
  it('should convert transaction ' + i, () => {
    expect(
      convertAccount(accounts[i][0])
    ).toEqual(
      accounts[i][1]
    )
  })
})
