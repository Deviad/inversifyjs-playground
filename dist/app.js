"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
var inversify_1 = require("inversify");
var Katana = /** @class */ (function () {
    function Katana() {
    }
    Katana.prototype.hit = function () {
        return 'cut';
    };
    Katana = __decorate([
        inversify_1.injectable()
    ], Katana);
    return Katana;
}());
var Shuriken = /** @class */ (function () {
    function Shuriken() {
    }
    Shuriken.prototype.throw = function () {
        return 'hit!';
    };
    Shuriken = __decorate([
        inversify_1.injectable()
    ], Shuriken);
    return Shuriken;
}());
var Ninja = /** @class */ (function () {
    function Ninja(katana, shuriken) {
        this._katana = katana;
        this._shuriken = shuriken;
    }
    Ninja.prototype.fight = function () { return this._katana.hit(); };
    Ninja.prototype.sneak = function () { return this._shuriken.throw(); };
    Ninja = __decorate([
        inversify_1.injectable(),
        __metadata("design:paramtypes", [Katana, Shuriken])
    ], Ninja);
    return Ninja;
}());
var container = new inversify_1.Container();
container.bind(Ninja).to(Ninja);
container.bind(Katana).to(Katana);
container.bind(Shuriken).to(Shuriken);
