import jest from "jest";
import cantorPair from "../../container/CantorPairing"

describe('Cantor Pairing test', () => 
    it('should return 0 for origin', () => {
        const cantorPairedValue = cantorPair(0, 0);
        expect(cantorPairedValue).toBe(0);
    }),

    it('should return 1 for (0, 1)', () => {
        const cantorPairedValue = cantorPair(0, 1);
        expect(cantorPairedValue).toBe(1);
    }),

    it('should return 3 for (1, 1)', () => {
        const cantorPairedValue = cantorPair(1, 0);
        expect(cantorPairedValue).toBe(3);
    })
)