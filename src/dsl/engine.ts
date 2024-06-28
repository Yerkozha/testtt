


export function component<T extends {new(): any, component: {}}>(Constructor: T , context: ClassDecoratorContext): any {
    const initialValue = new Constructor()
    const parent = Object.getPrototypeOf(Constructor)
    console.log({initialValue})
    console.log({prot: Constructor.prototype})
    
    console.log({context})
    console.log()

    console.log(Object.getPrototypeOf(Constructor), 'parent')
    
    const componentInf = {methods: {}, props: []}

    if( Object.hasOwn(initialValue, 'components')  ) {
        componentInf['components'] = initialValue['components'] 
    }

    if(isClass(parent)) {
        // scale 
    }

    if(Object.hasOwn(initialValue, 'computed') ) {
        componentInf['computed'] = initialValue.computed
    }
    
    initialValue?.actions && Object.keys(initialValue.actions).forEach((method) => componentInf.methods[method] = initialValue.actions[method])

    for (const method of Object.getOwnPropertyNames(Constructor.prototype)) {
        if(method != 'constructor') {
            componentInf.methods[method] = Constructor.prototype[method]
        }
        
    }
    const reactiveData = {}

    if( Object.hasOwn(context.metadata, 'fields') ) {
        for (const [key, _] of Object.entries(context.metadata.fields)) {
            reactiveData[key] = initialValue[key]
        }
    }
    console.log("Object.keys(context.metadata.props)",context.metadata.props)
    if( Object.hasOwn(context.metadata, 'props') ) {
        
        componentInf.props = Object.keys(context.metadata.props)
    }
    Object.assign(componentInf, {
        data() {
            return reactiveData
        }
    }) 
    console.log('componentInf1', componentInf)
    function instance () {}
    
    Object.defineProperty(instance, 'component', {
        value: componentInf,
        enumerable: true,
        writable: true,
        configurable: true
    })
    
    return instance
}

export function field(target, ctx) {
    console.log('field', target)
    if(!Object.hasOwn(ctx.metadata, 'fields')) {
        ctx.metadata.fields = {}
    }
    Object.defineProperty(ctx.metadata.fields, ctx.name, {
        value: ctx,
        configurable: true,
        writable: true,
        enumerable: true
    })
    
}

export function prop(target, ctx) {
    console.log('prop', target, ctx)
    if(!Object.hasOwn(ctx.metadata, 'props')) {
        ctx.metadata.props = {}
    }
    Object.defineProperty(ctx.metadata.props, ctx.name, {
        value: ctx,
        configurable: true,
        writable: true,
        enumerable: true
    })
}


export function computed(value: boolean) {
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
      descriptor.configurable = value;
    };
}


function isClass(obj) {
    const isCtorClass = obj.constructor
        && obj.constructor.toString().substring(0, 5) === 'class'
    if(obj.prototype === undefined) {
      return isCtorClass
    }
    const isPrototypeCtorClass = obj.prototype.constructor 
      && obj.prototype.constructor.toString
      && obj.prototype.constructor.toString().substring(0, 5) === 'class'
    return isCtorClass || isPrototypeCtorClass
  }