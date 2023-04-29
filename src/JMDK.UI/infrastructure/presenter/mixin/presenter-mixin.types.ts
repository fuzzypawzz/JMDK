import type { PresenterBase } from '..'

export type ComponentInstance = {
  presenter: PresenterBase<any, never, any>
  viewModel: ReturnType<PresenterBase<any, never, any>['viewModel']['snapshot']>
}
