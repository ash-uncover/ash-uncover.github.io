import HelperRegistry from 'core/HelperRegistry'

export class RouterHelper {

    constructor () {
    }

    static get routeProject() {
        return '/project'
    }
}

const Helper = new RouterHelper()

HelperRegistry.register(Helper, 'Router')

export default Helper