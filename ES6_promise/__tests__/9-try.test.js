import guardrail from '../9-try.js';

describe('guardrail', () => {
	test('returns correct queue when function succeeds', () => {
		const queue = guardrail(() => 100);
		expect(queue).toEqual([100, 'Guardrail was processed']);
	});

	test('returns correct queue when function throws error', () => {
		const queue = guardrail(() => { throw new Error('BOOM') });
		expect(queue).toEqual(['Error: BOOM', 'Guardrail was processed']);
	});
});
