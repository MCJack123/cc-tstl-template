/** @noSelfInFile **/
/** @noResolution **/
declare module "cc.completion" {
    export function choice(text: string, choices: string[], add_space?: boolean): string[];
    export function peripheral(text: string, add_space?: boolean): string[];
    export function side(text: string, add_space?: boolean): string[];
    export function setting(text: string, add_space?: boolean): string[];
    export function command(text: string, add_space?: boolean): string[];
}