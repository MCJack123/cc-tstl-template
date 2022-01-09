/** @noSelfInFile **/
/** @noResolution **/
declare module "cc/expect" {
    namespace expect {
        /** @vararg **/
        function expect(index: number, value: any, ...types: string[]): any;
        /** @vararg **/
        function field(tbl: Object, index: string, ...types: string[]): any;
        function range(num: number, min?: number, max?: number): number;
    }
    function expect(index: number, value: any, ...types: string[]): any;
    export = expect;
}