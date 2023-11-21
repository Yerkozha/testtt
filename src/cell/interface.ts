
export interface ICell<T> {
    title: string;
    subtitle?: string;
}

export type Avatar = {
    type: 'svg' | 'img',
    source: string
}


export interface ComponentPropsType {
    avatar: Nullable<Avatar>
}

export enum STATES {
    ERROR = 'error',
    NORMAL = 'normal'
}