const test = require('brittle')
const safetyCatch = require('./')

test('safetyCatch(falsy) does not throw', (t) => {
  safetyCatch(null)
  safetyCatch(undefined)
  safetyCatch(false)
  t.pass()
})

test('safetyCatch(regular error) does not throw', (t) => {
  safetyCatch(new Error('regular'))
  t.pass()
})

test('safetyCatch(error with random code) does not throw', (t) => {
  const err = new Error('with code')
  err.code = 'ENOENT'
  safetyCatch(err)
  t.pass()
})
