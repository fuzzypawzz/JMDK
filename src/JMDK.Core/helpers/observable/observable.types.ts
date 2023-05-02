/**
 * @type ISubscriberNotification
 * @description The type structure that all events has to conform to.
 */
export type SubscriberNotification = {
  name: string
  data?: Record<string, unknown>
}

/**
 * @type Callback
 * @description Observer event listener
 */
export type Callback<Events> = (event: Events) => unknown
