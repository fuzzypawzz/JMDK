import { enableAutoUnmount, flushPromises } from '@vue/test-utils'
import { afterEach } from 'vitest'

async function bootStrapApplicationForTesting() {
  // Making sure that components are removed from the DOM 'afterEach' test.
  // This cleanup is relevant for the entire app.
  enableAutoUnmount(afterEach)
}

await bootStrapApplicationForTesting()
