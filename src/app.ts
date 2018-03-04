import 'reflect-metadata';
import { Container, injectable, inject } from 'inversify';
import {IKatana, IShuriken, INinja } from './interfaces';
@injectable()
class Katana {
    public hit(): String {
        return 'cut';
    }
}

@injectable()
class Shuriken {
    public throw(): String {
        return 'hit!';
    }
}

@injectable()
class Ninja implements INinja {
    private _katana: Katana;
    private _shuriken: Shuriken;

    public constructor(katana: Katana, shuriken: Shuriken) {
        this._katana = katana;
        this._shuriken = shuriken;
    }
    public fight(): any { return this._katana.hit(); }
    public sneak(): any { return this._shuriken.throw(); }
}

const container: Container = new Container();
container.bind<INinja>(Ninja).to(Ninja);
container.bind<Katana>(Katana).to(Katana);
container.bind<Shuriken>(Shuriken).to(Shuriken);

