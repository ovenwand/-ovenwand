import { cubicOut } from 'svelte/easing';

export function expand(node: Element, { delay = 0, duration = 400, easing = cubicOut, width = 0 }: any): any {
    const style = getComputedStyle(node);
    const targetWidth = parseInt(style.width, 10);
    const wd = targetWidth - width;

    return {
        delay,
        duration,
        easing,
        css: (t: number, u: number) => `
          width: ${targetWidth - (wd * u)}px;
        `,
    };
}
