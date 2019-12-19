export const incIterator = () => {
    return {
        type: 'INC_ITERATOR',
    }
}

export const decIterator =() => {
    return{
        type: 'DEC_ITERATOR',
    }
}

export const changeIteratorParam =(iterator) => {
    return{
        type: 'CHANGE_ITERATORPARAM',
        data: {
            iterator:iterator
        }
    }
}

