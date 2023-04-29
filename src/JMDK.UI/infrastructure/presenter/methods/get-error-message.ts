enum ERROR_IDENTIFIER {
  VIEW_MODEL_FUNCTION_MISSING = 'VIEW_MODEL_FUNCTION_MISSING',
  VIEW_ALREADY_ATTACHED = 'VIEW_ALREADY_ATTACHED',
}

export function getErrorMessage(
  componentName: string | undefined
): Record<ERROR_IDENTIFIER, string> {
  return {
    [ERROR_IDENTIFIER.VIEW_MODEL_FUNCTION_MISSING]: `
        Presenter: The 'vm' property is missing in the presenter or is not a function.
        Make sure to add the 'vm' method in the presenter.
      `,

    [ERROR_IDENTIFIER.VIEW_ALREADY_ATTACHED]: `
        Presenter: View with name ${componentName} is already attached.
        Detach the view when it's destroyed in order to properly re-attach.
      `,
  }
}
