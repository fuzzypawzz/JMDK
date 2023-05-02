import { createArrayTransitionGenerator } from '@/JMDK.UI/helpers/arrays/array-transition-generator'
import { expect, it } from '@jest/globals'

const fruits = ['apple', 'pear', 'grape', 'mango']

it('yields from the beginning after yielding the last entry', () => {
  const generator = createArrayTransitionGenerator({
    array: fruits,
    startFromIndex: 0,
  })

  expect(generator.next().value).toBe(fruits[0])
  expect(generator.next().value).toBe(fruits[1])
  expect(generator.next().value).toBe(fruits[2])
  expect(generator.next().value).toBe(fruits[3])

  // Should start over
  expect(generator.next().value).toBe(fruits[0])
  expect(generator.next().value).toBe(fruits[1])
})

it('starts by yielding from the desired index', () => {
  const generator = createArrayTransitionGenerator({
    array: fruits,
    startFromIndex: 2,
  })

  expect(generator.next().value).toBe(fruits[2])
  expect(generator.next().value).toBe(fruits[3])
})
