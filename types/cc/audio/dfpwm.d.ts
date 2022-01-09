/** @noSelfInFile **/
/** @noResolution **/
declare module "cc.audio.dfpwm" {
    export function make_encoder(): (pcm: number[]) => string;
    export function encode(pcm: number[]): string;
    export function make_decoder(): (dfpwm: string) => number[];
    export function decode(dfpwm: string): number[];
}