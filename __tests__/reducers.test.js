import reducers from '../client/reducers/reducers.js'


describe('Message Array Reducers', () => {
    let state;

    beforeEach(()=> {
        state = {
            messageArray : []
        };
    })

    //If there are no arguments given to the reducer function we want the state to default to itself
    describe('default state',() => {
        it('should return a default state when given an undefined input', () => {
            expect(reducers(undefined, {type: undefined})).toEqual(state);
        })
    });

    describe('unrecognized action types', () => {
        it('should return the original state without duplication', () => {
            const action = {type:'asdlkfja;fdj'}
            expect(reducers(state, action)).toBe(state);
        })
    });

    describe('ADD_MESSAGE', () => {
        const action = {type: 'ADD_MESSAGE',
                        payload: 'HI THERE'};
        
        it('adds a message to the message array in state and increases total messages count by 1', () => {
            const { messageArray } = reducers(state, action);
            expect(messageArray[0]).toEqual('HI THERE');
            expect(messageArray.length).toEqual(1);
        })

    })


})