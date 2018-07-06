const HelperRegistry = {
  register: function (helper, name) {
    const helperName = name || helper.name
    if (!helperName) {
      throw new Error('Helper name cannot be null or empty')
    }
    if (helperName === 'register') {
      throw new Error('Helper name cannot be equals to "register"')
    }
    if (this[helperName]) {
      console.warn(`Helper already defined: "${helperName}". It will be overide with new definition.`)
    }
    this[helperName] = helper
  }
}

export default HelperRegistry
