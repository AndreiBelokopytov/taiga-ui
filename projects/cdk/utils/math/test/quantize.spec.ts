import {tuiQuantize} from '@taiga-ui/cdk';

describe('quantize', () => {
    it('round up to the closest quantum', () => {
        expect(tuiQuantize(5.5, 1)).toBe(6);
    });

    it('rounds down to the closest quantum', () => {
        expect(tuiQuantize(5.4, 1)).toBe(5);
    });

    it('works with floating quanta', () => {
        expect(tuiQuantize(1.1, 0.3)).toBe(1.2);
    });

    it('leaves number as is if it is already in the required discrete series', () => {
        expect(tuiQuantize(1.2, 0.3)).toBe(1.2);
    });
});
