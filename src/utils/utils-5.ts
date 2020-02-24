export type Call = {
    phone: string;
    planDate: Date;
}

export type Meeting = {
    address: string;
    planDate: Date;
}

export type Outflow = {
    planDate: Date;
    product: string;
}

// Изменить типизацию так, чтобы избежать многословности
function printEventDate(event: Call | Meeting | Outflow) {
    console.log(event.planDate);
}
