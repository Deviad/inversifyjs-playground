export interface IWeapon {
}

export interface IKatana extends IWeapon {
    hit(): any;
}

export interface IShuriken extends IWeapon {
    throw(): any;
}

export interface INinja {
}
