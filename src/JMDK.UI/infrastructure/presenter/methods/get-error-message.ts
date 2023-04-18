enum ERROR_IDENTIFIER {
  VIEWMODEL_NOT_REGISTRERED = 'VIEWMODEL_NOT_REGISTRERED',
  VIEWMODEL_ALREADY_ATTACHED = 'VIEWMODEL_ALREADY_ATTACHED',
  VIEW_ALREADY_ATTACHED = 'VIEW_ALREADY_ATTACHED',
}

export function getErrorMessage(
  componentName: string | undefined
): Record<ERROR_IDENTIFIER, string> {
  return {
    [ERROR_IDENTIFIER.VIEWMODEL_NOT_REGISTRERED]: `
        Presenter: A view model for has not been registrered.
        Have you called 'registerViewModel' in your presenter constructor?
      `,

    [ERROR_IDENTIFIER.VIEWMODEL_ALREADY_ATTACHED]: `
        Presenter: A view model has already been registered for the presenter.
        Make sure you're not calling 'registerViewModel twice.'
      `,

    [ERROR_IDENTIFIER.VIEW_ALREADY_ATTACHED]: `
        Presenter: View with name ${componentName} is already attached.
        Detach the view when it's destroyed in order to properly re-attach.
      `,
  }
}
