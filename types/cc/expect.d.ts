/** @noSelfInFile **/
/** @noResolution **/
declare module "cc/expect" {
    namespace expect {
        function expect(index: number, value: any, ...types: string[]): any;
        function field(tbl: Object|LuaTable, index: string, ...types: string[]): any;
        function range(num: number, min?: number, max?: number): number;
    }
    function expect(index: number, value: any, ...types: string[]): any;
    export = expect;
}