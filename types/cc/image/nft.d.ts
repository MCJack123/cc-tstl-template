/** @noSelfInFile **/
/** @noResolution **/
declare module "cc.image.nft" {
    type Image = {text: string, foreground: string, background: string}[];
    export function parse(image: string): Image;
    export function load(path: string): Image;
    export function draw(image: Image, xPos: number, yPos: number, target?: ITerminal);
}