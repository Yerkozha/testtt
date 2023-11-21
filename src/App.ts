



export default {
    data: () => ({
        bla: new Foo()
    })
}


@component
class Foo {
    
}




function component ( Target, ctx ):any {
    console.log('CALLED')

    return class extends Target {
        constructor(){
            super()
        }
        name = 'Tet12'
    }   
  
}






