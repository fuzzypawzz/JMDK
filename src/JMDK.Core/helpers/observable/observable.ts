import type { Callback, SubscriberNotification } from './observable.types'
import { observers } from './symbols'

/**
 * @author Jannik Maag (fuzzypawzz)
 */
export class Observable<TEvent extends SubscriberNotification> {
  private [observers]: Callback<TEvent>[]

  constructor() {
    this[observers] = []
  }

  /**
   * @method subscribe
   * @param callback listener callback.
   * @returns an unsubscribe callback to easily unsubscribe the listener later on.
   */
  public subscribe(callback: Callback<TEvent>): () => void {
    this[observers].push(callback)

    return () => this.unsubscribe(callback)
  }

  public notify(event: TEvent): void {
    this[observers].forEach((observer) => observer(event))
  }

  public unsubscribe(func: Callback<TEvent>): void {
    const index = this[observers].findIndex((callback) => callback === func)

    if (index !== -1) this[observers].splice(index, 1)
  }

  public unsubscribeAll(): void {
    this[observers].forEach((callback) => this.unsubscribe(callback))
  }
}
