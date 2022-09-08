import { BST } from './Bst';

describe('Binary Search Tree', () => {


    test('it should false if number is not in the bst and it should true if number is in bst', () => {

        const BstObject = new BST(10)
            .insert(5)
            .insert(15)
            .insert(2)
            .insert(5)
            .insert(1)
            .insert(5)
            .insert(1)
            .insert(3)
            .insert(13)
            .insert(22)
            .insert(25)
            .insert(12)
            .insert(14)

        expect(BstObject.contains(78)).toBeFalsy();
        expect(BstObject.contains(12)).toBeTruthy();

    });

});


