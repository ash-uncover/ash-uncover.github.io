import { StringLabel } from 'utils/StringUtils'

const ActionRegistry = {
    register: function (actionName, args)  {
        if (!actionName) {
            throw 'Action must be given a name in upper snake case'
        }
        let name = new StringLabel(actionName, '_')
        if (this[name.serpent]) {
            throw 'ActionRegistry.register - Action already defined: ' + name.serpent
        }
        this[name.serpent] = name.serpent
        this[name.camel] = function () {
            let myArgs = {}
            args && args.forEach((arg, index) => {
                myArgs[arg] = arguments.length > index ? arguments[index] : null
            })
            return {
                args: myArgs,
                type: name.serpent
            }
        }
    }
}

export default ActionRegistry