'use strict';
import {AbstractUser} from "../../entities/classes/AbstractUser.class";
/**
 * Created by Mor on 15/08/2016.
 */
export interface IUserProperty {
    getOwner(): AbstractUser;
}