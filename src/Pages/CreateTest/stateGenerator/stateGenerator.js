function getAnswers(number){
    return {
        type: 'text',
        label: 'Вариант' + number,
        value: '',
        id: number,
        isTouched: false,
        isValid: false,
        errorMessage: 'Поле не должно быть пустым'
    }
}

export default getAnswers;