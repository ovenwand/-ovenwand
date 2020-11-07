import { expect } from 'chai';
import { SidebarState, SidebarStore, store } from '../src';

describe('@ovenwand/svelte-sidebar', () => {
    describe('store', () => {
        let globalId: string = 'test-id';
        let expanded: boolean = false;
        let source: SidebarState = { expand: expanded };
        let sidebar: SidebarStore<SidebarState> = store.add(globalId, source);

        sidebar.subscribe((state) => {
            expanded = state.expand;
        });

        it('creates stores', () => {
            const testId = 'create';
            expect(typeof store.get(testId)).to.equal('undefined');
            store.add(testId);
            expect(typeof store.get(testId)).to.not.equal('undefined');
        });

        it('destroys stores', () => {
            const testId = 'delete';
            store.add(testId);
            expect(typeof store.get(testId)).to.not.equal('undefined');
            store.remove(testId);
            expect(typeof store.get(testId)).to.equal('undefined');
        });

        it('expands sidebars', () => {
            expect(expanded).to.equal(false);
            store.expand(globalId);
            expect(expanded).to.equal(true);
        });

        it('contracts sidebars', () => {
            expect(expanded).to.equal(true);
            store.contract(globalId);
            expect(expanded).to.equal(false);
        });
    });
});