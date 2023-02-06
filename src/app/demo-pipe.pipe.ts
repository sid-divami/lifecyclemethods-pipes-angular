import { Pipe, PipeTransform } from '@angular/core';
// A pipe is used to take data and transform using
// any standard operations. In-built pipes allow us to
// do things like string /date/currency methods.
// Point to be noted is that a pipe will not manipulate
// the original data and just modify it for the view.
// A custom pipe is one that allows developers to write
// custom methods for applying on data.
// Here is an example of a custom pipe that exponentiates
// a numerical value data.

/*
 * Raise the value exponentially
 * Takes an exponent argument that defaults to 1.
 * Usage:
 *   value | exponentialStrength:exponent
 * Example:
 *   {{ 2 | exponentialStrength:10 }}
 *   formats to: 1024
 */
@Pipe({ name: 'demoPipe' })
export class demoPipe implements PipeTransform {
  transform(value: number, exponent = 1): number {
    return Math.pow(value, exponent);
  }
}
