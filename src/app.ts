import 'reflect-metadata';
import { Container, injectable  } from 'inversify';
import {IKatana, INinja, IShuriken} from './interfaces';
@injectable()
class Katana implements IKatana {
    public hit(): String {
        return 'cut';
    }
}

@injectable()
class Shuriken implements IShuriken {
    public throw(): String {
        return 'hit!';
    }
}

@injectable()
class Ninja implements INinja {
    private _katana: IKatana;
    private _shuriken: IShuriken;

    public constructor(katana: Katana, shuriken: Shuriken) {
        this._katana = katana;
        this._shuriken = shuriken;
    }
    public fight(): any { return this._katana.hit(); }
    public sneak(): any { return this._shuriken.throw(); }
}


const container: Container = new Container();
container.bind<Ninja>(Ninja).toSelf();
container.bind<Katana>(Katana).toSelf();
container.bind<Shuriken>(Shuriken).toSelf();


let ninja: any = container.get<Ninja>(Ninja);

console.log(ninja.fight());






