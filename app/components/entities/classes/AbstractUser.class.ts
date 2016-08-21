'use strict';
import {IndexedGameEntity} from "./IndexedGameEntity.class";
import {IEntityCreator} from "../../builder/interfaces/IEntityCreator.interface";
import {IGameEntity} from "../interfaces/IGameEntity.interface";
import {IUser} from "../interfaces/IUser.interface";
import {EntityCreatorImpl} from "../../builder/classes/EntityCreatorImpl.class";
import {AbstractEntityCreator} from "../../builder/classes/AbstractEntityCreator";
import {IUserCharacterList} from "../../properties/interfaces/IUserCharacterList.interface";
import {ICharacter} from "../interfaces/ICharacter.interface";
/**
 * Created by Mor on 17/08/2016.
 */
export abstract class AbstractUser extends IndexedGameEntity implements IUser {
    _inherits: IEntityCreator;
    _charList: IUserCharacterList;
    _passwd: string;

    constructor(obj?: AbstractUser) {
        super(obj);
        this.inherits = obj && obj.inherits || new EntityCreatorImpl();
    }

    get inherits(): IEntityCreator {
        return this._inherits;
    }
    set inherits(_inherits: IEntityCreator) {
        this._inherits = _inherits;
    }
    get charList(): IUserCharacterList {
        return this._charList;
    }
    set charList(_charList: IUserCharacterList) {
        this._charList = _charList;
    }
    get passwd(): string {
        return this._passwd;
    }
    set passwd(_passwd: string) {
        this._passwd = _passwd;
    }

    create(_entity: IGameEntity): boolean {
        return (<AbstractEntityCreator> this.inherits).create(_entity);
    }
    remove(_entity: IGameEntity): boolean {
        return (<AbstractEntityCreator> this.inherits).remove(_entity);
    }
    find(_entity: IGameEntity): IGameEntity {
        return (<AbstractEntityCreator> this.inherits).find(_entity);
    }
    update(_entity: IGameEntity): boolean {
        return (<AbstractEntityCreator> this.inherits).update(_entity);
    }

    addPc(_pc: ICharacter): boolean {
        return this.charList.addPc(_pc);
    }
    removePc(_pc: ICharacter): boolean {
        return this.charList.removePc(_pc);
    }
    getPc(_pc: ICharacter): ICharacter {
        return this.charList.getPc(_pc);
    }
}