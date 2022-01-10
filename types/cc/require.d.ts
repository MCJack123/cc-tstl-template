/** @noSelfInFile **/
/** @noResolution **/
declare module "cc.require" {
    export function make(env: Object|LuaTable, dir: string): LuaMultiReturn<[(name: string) => any, Object|LuaTable]>;
}