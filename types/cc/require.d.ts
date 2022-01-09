/** @noSelfInFile **/
/** @noResolution **/
declare module "cc.require" {
    export function make(env: Object, dir: string): MultiReturn<[(name: string) => any, Object]>;
}