/**
 * @author Jannik Maag (fuzzypawzz)
 */
export function* createArrayTransitionGenerator({
  array,
  startFromIndex,
}: {
  array: any[]
  startFromIndex: number
}) {
  let index = startFromIndex

  function resetIndex(): void {
    index = 0
  }

  while (true) {
    if (index === array.length) resetIndex()

    yield array[index++]
  }
}
