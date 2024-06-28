import { Avatar, ICell, STATES } from '@c/interface'


abstract class Base {

    cellType: 'island' | 'full' = 'island';
    
    _state: 'normal' | 'error' = 'normal';

    cssType: 'big' | 'normal' = 'normal';
    cssSize = {
        island: {
            bigSinle: "76px",
            firstBigInGroup: "70px",
            lastBigInGroup: "70px",
            middleBig: "64px",
            singleNormal: "56px",
            firstNormalInGroup: "56px",
            lastNormalInGroup: "56px",
            middleNormal: "56px"            
        },
        full: {
            firstNomal: "56px",
            firstBig: "64px"
        }
    }
}

/**
 * Provide api for Cell component
 */
export class Cell<T> extends Base implements ICell<T> {
    #title: string = 'Title';
    private _subtitle: Nullable<string> = null;

    constructor( private  _avatar: Avatar, private readonly _cellContainer: HTMLDivElement, subtitle: string ) {
        super()
        this._subtitle = subtitle;

        if( _avatar ) {
            this._cellContainer.style.setProperty("height", this.cssSize.island.bigSinle )
        }
    }

    get title() {
        return this.#title
    }

    set title( newTitle ) {
        this.#title = newTitle;
    }

    get subtitle() {
        return this._subtitle
    }

    set subtitle( newSubtitle ) {
        if ( newSubtitle?.length > 0 ) {
            this._cellContainer.style.setProperty("height", this.cssSize.full.firstBig )
        } else {
            this._cellContainer.style.setProperty("height", this.cssSize.full.firstNomal )
        }
        this._subtitle = newSubtitle;
    }
    
    set state( newState ) {
        if( newState === STATES.ERROR ) {
            this._cellContainer.style.setProperty("background-color", "#FEF1EB")
        } else {
            this._cellContainer.style.setProperty("background-color", "#F4F5F6")
        }
        this._state = newState;
    }
    get state() {
        return this._state
    }

    /**
     * @param { Object } some - Something
     * @returns { SomeType } - ...
     */

}