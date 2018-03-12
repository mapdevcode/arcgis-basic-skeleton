import hello from "../app/HelloWorld"

test('returns Hello World', () => {
    expect(hello()).toBe('Hello World')
})