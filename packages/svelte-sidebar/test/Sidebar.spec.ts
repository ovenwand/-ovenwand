import { render as _render } from '@testing-library/svelte';
import { testAttribute, testClassName } from '@ovenwand/util/dist/test';
import Sidebar, { DEFAULT_ID } from '../src';

function render(props: Record<string, unknown> = {}) {
    return _render(Sidebar, {
        props,
    });
}

describe('@ovenwand/svelte-sidebar', () => {
    describe('Sidebar', () => {
        it('has a default id', testAttribute(() => ({
            attributeName: 'id',
            attributeValue: DEFAULT_ID,
            wrapper: render(),
        })));

        it('passes down id', testAttribute(() => ({
            attributeName: 'id',
            attributeValue: 'id',
            wrapper: render({ id: 'id' }),
        })));

        it('passes down classNames', testClassName(() => ({
            wrapper: render(),
        })));
    });
});
