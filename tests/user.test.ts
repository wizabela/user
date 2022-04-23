import {User} from "../user";

let user: User;

beforeAll(async () => {
    user = new User();
});

test('User should not be logged in at the beginning', () => {
    expect(user.loggedIn).toEqual(false);
});
// test('User logged in state should not be modified outside the class', () => {
//     expect(() => {
//         user.loggedIn = true;
//     }).toThrow();
// });

test('User should not have an email at the beginning', () => {
    expect(user.email).toBeNull();
});
// test('User email should not be modified outside the class', () => {
//     expect(() => {
//         user.email = 'test@test.pl';
//     }).toThrow();
// });