
import {component, prop, field } from '@/dsl'
import {Input} from '@/shared'
import { useAuth } from '@/app/providers/store'
import { mapWritableState } from 'pinia'


@component
class Foo {
    components = {
        Input
    }
    computed = {
        ...mapWritableState(useAuth, ['token'])
    }
    
}

export default Foo.component















