export function middlewarePipeline (context, middleware, index) {
    const nextMiddleware = middleware[index]

    if(!nextMiddleware){
        return context.next;
    }

    return () => {
        const nextPipeline = middlewarePipeline(
            context, middleware, index + 1
        )
        nextMiddleware({
            ...context,
            next: nextPipeline
        })
    }
    
}

export function auth ({ next, store, token }) {
        
    if( !token ){
        return next({
            name: 'auth',
            
        })
    }
    return next()
}



export function guest({ next, store, token }) {
    if( token ){
        return next({
            name: 'main'
        })
    }
    return next()
}
