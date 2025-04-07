import createInt8TypedArray from '../5-typed_arrays.js';

describe('createInt8TypedArray', () => {
	test('creates a DataView with the correct value', () => {
		const view = createInt8TypedArray(10, 2, 89);
		expect(view).toBeInstanceOf(DataView);
		expect(view.getInt8(2)).toBe(89);
	});

	test('throws error if position is outside range', () => {
		expect(() => createInt8TypedArray(5, 10, 20)).toThrowError('Position outside range');
	});
});
