export class Color{
    r: number;
    g: number;
    b: number;
    a: number;
	constructor(r:number, g:number, b:number, a:number){
		this.r = r;
		this.g = g;
		this.b = b;
		this.a = a;
	}
}

export const RED = new Color(255,0,0,255);
export const GREEN = new Color(0,255,0,255);
export const BLUE = new Color(0,0,255,255);
