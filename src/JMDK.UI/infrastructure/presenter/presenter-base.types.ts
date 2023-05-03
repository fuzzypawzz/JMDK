/**
 * @author Jannik Maag (fuzzypawzz)
 * @type FrameworkSpecificView
 * @returns Your view properties merged with basic general Vue instance functionality.
 */
export type FrameworkSpecificView<View> = View & {
  uid?: number
  type: { __name: string }
}
