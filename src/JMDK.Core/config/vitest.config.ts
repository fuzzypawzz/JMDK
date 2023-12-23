import { enableAutoUnmount, flushPromises } from '@vue/test-utils'
import { afterEach } from 'vitest'

async function waitForNextNodeProcessTick() {
  await new Promise(process.nextTick)
}

async function bootStrapApplicationForTesting() {
  // Making sure that components are removed from the DOM 'afterEach' test.
  // This cleanup is relevant for the entire app.
  enableAutoUnmount(afterEach)
}

await bootStrapApplicationForTesting()

afterEach(async () => {
  // Pause the async function execution until the next process tick,
  // which allows other pending operations to complete before moving
  // on to the next test.
  await waitForNextNodeProcessTick()

  // Wait for all micro tasks to complete.
  await flushPromises()
})
