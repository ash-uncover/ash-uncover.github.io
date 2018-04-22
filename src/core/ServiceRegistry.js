const ServiceRegistry = {
    register: function (service, name)  {
        let serviceName = name || service.name
        if (!serviceName) {
            throw 'Service name cannot be null or empty'
        }
        if (serviceName === 'register') {
            throw 'Service name cannot be equals to "register"'
        }
        if (this[serviceName]) {
            console.warn('Service already defined: "' + serviceName +'". It will be overide with new definition.')
        }
        this[serviceName] = service
    }
}

export default ServiceRegistry