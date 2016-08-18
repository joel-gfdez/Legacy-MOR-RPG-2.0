'use strict';
import {IFieldSet} from "../../fields/interfaces/IFieldSet.interface";
import {IIndexedGameEntity} from "./IIndexedGameEntity.interface";
/**
 * Created by Mor on 17/08/2016.
 */
export interface IItem extends IFieldSet {
    _inherits: IIndexedGameEntity;
    equals(obj: IIndexedGameEntity): boolean;
}