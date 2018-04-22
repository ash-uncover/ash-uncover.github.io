const ComponentRegistry = {
    register: function (component, name)  {
        let componentName = name || component.name
        if (!componentName) {
            throw 'Component name cannot be null or empty'
        }
        if (this[componentName]) {
            throw 'Component already defined: ' + componentName
        }
        this[componentName] = component
    }
}

export default ComponentRegistry