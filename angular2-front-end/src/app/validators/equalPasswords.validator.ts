/**
 * Created by PPan on 2/08/2017.
 */
import {FormGroup} from '@angular/forms';

export class EqualPasswordsValidator {

    public static validate(firstField, secondField) {

        return (c:FormGroup) => {

            return (c.controls && c.controls[firstField].value == c.controls[secondField].value) ? null : {
                passwordsEqual: {
                    valid: false
                }
            };
        }
    }
}
