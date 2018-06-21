import HelperRegistry from 'registries/HelperRegistry'

export class StateHelper {

    constructor () {
    }

    getCell(state, x, y) {
        return state.app.grid.cells[x][y]
    }
}

const Helper = new StateHelper()

HelperRegistry.register(Helper, 'State')

export default Helper