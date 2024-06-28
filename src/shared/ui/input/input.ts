import { component, field, prop } from "@/dsl";
import SvgIcon from '@/components/SvgIcon.vue'


@component
class Input {

    components = {
        SvgIcon
    }
    
    @prop
    secret: boolean;
    
    @prop
    type: string;

    @prop
    placeholder: string;

    @field
    isHidden: boolean = true;


    triggerPassword() {
        this.isHidden = !this.isHidden
    }
    
}

export default Input.component

