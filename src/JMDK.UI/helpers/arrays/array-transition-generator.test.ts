import {
  ERROR,
  createArrayTransitionGenerator,
} from '@/JMDK.UI/helpers/arrays/array-transition-generator'
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

it('throws if the provided array is empty', () => {
  const generator = createArrayTransitionGenerator({
    array: [],
    startFromIndex: 0,
  })

  expect(() => generator.next()).toThrow(ERROR.EMPTY_ARRAY)
})

it('throws if trying to start from an index greather than array length', () => {
  const generator = createArrayTransitionGenerator({
    array: fruits,
    startFromIndex: fruits.length + 1,
  })

  expect(() => generator.next()).toThrow(
    ERROR.START_INDEX_GREATER_THAN_ARRAY_LENGTH
  )
})
