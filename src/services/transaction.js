export function getTransactionData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            fetch("/data/transactions.json")
                .then((response) => {
                    // console.log("response => ", response);

                    if (!response.ok) throw new Error("Something went wrong!");
                    return response.json();
                })
                .then((data) => resolve(data))
                .catch((err) => reject(err));
        }, 1500);
    });
};


export function getTransactionDataByCustomerId(customer_id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            fetch("/data/transactions.json")
                .then((response) => {
                    // console.log("response => ", response);

                    if (!response.ok) throw new Error("Something went wrong!");
                    return response.json();
                })
                .then((data) => {
                    const _data = data.filter((transaction) => transaction.customerId === customer_id);
                    resolve(_data);
                })
                .catch((err) => reject(err || "Something went wrong!"));
        }, 1500);
    });
}