const mixinName = 'presenter-mixin'

export const ERROR = {
  MISSING_PRESENTER: `${mixinName}: You must place the presenter on the data property.`,
  PRESENTER_SHOULD_EXTEND_FROM_BASE: `${mixinName}: The presenter must extend from the PresenterBase.`,
  MISSING_VIEW_MODEL: `${mixinName}: You must place the viewModel on the data property.`,
}
