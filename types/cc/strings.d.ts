/** @noSelfInFile **/
/** @noResolution **/
declare module "cc.strings" {
    export function wrap(text: string, width?: number): string[];
    export function ensure_width(text: string, width?: number): string;
}