import uploadPhoto from '../5-photo-reject.js';

describe('uploadPhoto', () => {
	test('rejects with proper error message', async () => {
		await expect(uploadPhoto('guillaume.jpg')).rejects.toThrow('guillaume.jpg cannot be processed');
	});
});
