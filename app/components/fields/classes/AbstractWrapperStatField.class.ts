'use strict';
import {IWrapperStatField} from "../interfaces/IWrapperStatField.interface";
import {IWrapperField} from "../interfaces/IWrapperField.interface";
import {StatField} from "./StatField.class";
import {IStat} from "../interfaces/IStat.interface";
import {WrapperFieldImpl} from "./WrapperFieldImpl.class";
import {AbstractWrapperField} from "./AbstractWrapperField.class";
/**
 * Created by Mor on 17/08/2016.
 */
export abstract class AbstractWrapperStatField extends StatField implements IWrapperStatField {
    _inherits: IWrapperField;

    constructor(obj?: IWrapperStatField) {
        super(obj);
        var cast = <AbstractWrapperStatField> obj;
        this.inherits = obj && cast.inherits || new WrapperFieldImpl();
    }

    get inherits(): IWrapperField {
        return this._inherits;
    }
    set inherits(_inherits: IWrapperField) {
        this._inherits = _inherits;
    }
    get fields(): IStat[] {
        return <IStat[]> (<AbstractWrapperField> this.inherits).fields;
    }
    set fields(_fields: IStat[]) {
        (<AbstractWrapperField> this.inherits).fields = _fields;
    }

    get(field: IStat): IStat {
        return <IStat> this.inherits.get(field);
    }
    set(field: IStat): boolean {
        return this.inherits.set(field);
    }
    add(field: IStat): boolean {
        return this.inherits.add(field);
    }
    remove(field: IStat): boolean {
        return this.inherits.remove(field);
    }
}