'use strict';
import {AbstractDataField} from "../../fields/classes/AbstractDataField.class";
import {IBuilder} from "../interfaces/IBuilder.interface";
import {AbstractFieldBuilder} from "./AbstractFieldBuilder.class";
import {IStatModificatorSource} from "../../modificators/interfaces/IStatModificatorSource.interface";
import {StatModificatorSourceImpl} from "../../modificators/classes/StatModificatorSourceImpl.class";
/**
 * Created by becari on 12/09/2016.
 */
export abstract class AbstractDataFieldBuilder extends AbstractFieldBuilder implements IBuilder<AbstractDataField> {
    _grants: IStatModificatorSource;

    constructor(obj?: AbstractDataFieldBuilder) {
        super(obj);
        this.grants = obj && obj.grants || new StatModificatorSourceImpl();
    }

    setGrants(_grants: IStatModificatorSource): AbstractDataFieldBuilder {
        this.grants = _grants;
        return this;
    }
    build(): AbstractDataField {
        var ret: AbstractDataField = <AbstractDataField> super.build();
        ret.grants = this.grants;
        return ret;
    }

    get grants(): IStatModificatorSource {
        return this._grants;
    }
    set grants(_grants: IStatModificatorSource) {
        this._grants = _grants;
    }
}