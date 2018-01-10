import React from 'react';

const EditExpense = (props) => (
    <div>
        This is from EDIT component width id of {props.match.params.id}.
    </div>
);

export default EditExpense;