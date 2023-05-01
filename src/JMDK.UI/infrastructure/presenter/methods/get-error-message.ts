enum ERROR_IDENTIFIER {
  VIEW_MODEL_INVALID = 'VIEW_MODEL_INVALID',
  VIEW_ALREADY_ATTACHED = 'VIEW_ALREADY_ATTACHED',
}

export function getErrorMessage(
  componentName: string | undefined
): Record<ERROR_IDENTIFIER, string> {
  return {
    [ERROR_IDENTIFIER.VIEW_MODEL_INVALID]: `
        Presenter: You must implement a view model for "${componentName}" as a public computed property on the presenter.
        Make sure to wrap the 'viewModel' property in vue.computed().
      `,

    [ERROR_IDENTIFIER.VIEW_ALREADY_ATTACHED]: `
        Presenter: View with name ${componentName} is already attached.
        Detach the view when it's destroyed in order to properly re-attach.
      `,
  }
}
