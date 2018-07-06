import HelperRegistry from 'core/HelperRegistry'

export class RouterHelper {
  static get routeProject () {
    return '/project'
  }
}

const Helper = new RouterHelper()

HelperRegistry.register(Helper, 'Router')

export default Helper
