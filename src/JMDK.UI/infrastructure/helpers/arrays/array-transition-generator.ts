export const ERROR = {
  EMPTY_ARRAY: 'The array must have at least one entry',
  START_INDEX_GREATER_THAN_ARRAY_LENGTH:
    'startFromIndex must not be greater than the length of the array.',
}

/**
 * @author Jannik Maag (fuzzypawzz)
 */
export function* createArrayTransitionGenerator({
  array,
  startFromIndex,
}: {
  array: unknown[]
  startFromIndex: number
}) {
  if (array.length === 0) throw new Error(ERROR.EMPTY_ARRAY)

  if (startFromIndex > array.length) {
    throw new Error(ERROR.START_INDEX_GREATER_THAN_ARRAY_LENGTH)
  }

  let index = startFromIndex

  function resetIndex(): void {
    index = 0
  }

  while (true) {
    if (index === array.length) resetIndex()

    yield array[index++]
  }
}
