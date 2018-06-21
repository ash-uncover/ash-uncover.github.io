import HelperRegistry from 'registries/HelperRegistry'

export class ActionHelper {

    constructor () {
    }
}

const Helper = new ActionHelper()

HelperRegistry.register(Helper, 'Action')

export default Helper