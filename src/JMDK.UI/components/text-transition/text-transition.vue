<template>
  <div ref="slotRef">
    <slot />
  </div>
</template>

<script setup lang="ts">
import { createArrayTransitionGenerator } from '@/JMDK.UI/infrastructure/helpers/arrays/array-transition-generator'
import { onBeforeUnmount, onMounted, ref, watchPostEffect } from 'vue'

const componentName = 'text-transition'

const props = defineProps({
  values: {
    type: Object as () => string[],
    required: true,
    validator: (propValue) => Array.isArray(propValue),
  },

  transitionSpeedInMs: {
    type: Number,
    default: 3000,
  },

  elementId: {
    type: String,
    required: true,
  },
})

const slotRef = ref(null as null | Element)
const targetElementReference = ref(null as null | undefined | Element)
const renderedText = ref(props.values[0])

function queryElementWithinSlot(id: string): Element {
  const element = slotRef.value?.querySelector(`#${id}`)

  if (!element) {
    throw new Error(`${componentName}: Could not locate element with id: ${id}`)
  }

  return element
}

onMounted(() => {
  targetElementReference.value = queryElementWithinSlot(props.elementId)
})

const dispose = watchPostEffect(() => {
  if (!targetElementReference.value) return

  targetElementReference.value!.innerHTML = renderedText.value
})

onBeforeUnmount(dispose)

const transition = createArrayTransitionGenerator({
  array: props.values,
  startFromIndex: 1,
})

setInterval(() => {
  renderedText.value = transition.next().value as string
}, props.transitionSpeedInMs)
</script>
