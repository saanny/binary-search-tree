export class BST {
    value: number;
    left: BST | null;
    right: BST | null;

    constructor(value: number) {
        this.value = value;
        this.left = null;
        this.right = null;
    }

    insert(value: number) {
        let currentNode: BST = this;

        const trueFlag = true;
        while (trueFlag) {
            if (value < currentNode.value) {
                if (currentNode.left === null) {
                    currentNode.left = new BST(value);
                    break;
                } else {
                    currentNode = currentNode.left;
                }
            } else {
                if (currentNode.right === null) {
                    currentNode.right = new BST(value)
                    break;
                } else {
                    currentNode = currentNode.right;
                }

            }
        }

        return this;
    }

    contains(value: number) {
        let currentNode: BST | null = this;
        while (currentNode !== null) {
            if (value < currentNode.value) {
                currentNode = currentNode.left;
            } else if (value > currentNode.value) {
                currentNode = currentNode.right;
            } else {
                return true;
            }
        }
        return false;
    }
}

// const BstObject = new BST(10)
//     .insert(5)
//     .insert(15)
//     .insert(2)
//     .insert(5)
//     .insert(1)
//     .insert(5)
//     .insert(1)
//     .insert(3)
//     .insert(13)
//     .insert(22)
//     .insert(25)
//     .insert(12)
//     .insert(14)



// console.log(BstObject.contains(15));