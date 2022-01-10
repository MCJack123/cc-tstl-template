/** @noSelfInFile **/
/** @noResolution **/
declare module "cc.pretty" {
    type Doc = {};
    export const empty: Doc;
    export const space: Doc;
    export const line: Doc;
    export const space_line: Doc;
    export function text(text: string, color?: number): Doc;
    export function concat(...args: (Doc|string)[]): Doc;
    export function nest(depth: number, doc: Doc): Doc;
    export function group(doc: Doc): Doc;
    export function write(doc: Doc, ribbon_frac?: number): void;
    export function print(doc: Doc, ribbon_frac?: number): void;
    export function render(doc: Doc, width?: number, ribbon_frac?: number): string;
    export function pretty(obj: any, options?: {function_args?: boolean, function_source: boolean}): Doc;
    export function pretty_print(obj: any, options?: {function_args?: boolean, function_source: boolean}, ribbon_frac?: number): void;
}