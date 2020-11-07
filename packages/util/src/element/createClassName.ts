export function createClassName(descriptor: Record<string, unknown>): string {
    let className: string = '';

    for (const c of Object.keys(descriptor)) {
        if (descriptor[c]) {
            className += ` ${c}`;
        }
    }

    return className.trim();
}