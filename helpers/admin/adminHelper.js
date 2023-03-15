const defaultOptionSelect = (select, compare) => {
    return select === compare;
}

const radioNotChecked = (status) => {
    console.log(status === true);
    return status === true;
}

exports.defaultOptionSelect = defaultOptionSelect
exports.radioNotChecked = radioNotChecked