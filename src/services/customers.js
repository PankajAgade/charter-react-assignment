export function getCustomerData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            fetch("/data/customers.json")
                .then((response) => {
                    // console.log("response => ", response);

                    if (!response.ok) throw new Error("Something went wrong!");
                    return response.json();
                })
                .then((data) => resolve(data))
                .catch((err) => reject(err || "Something went wrong!"));
        }, 1000);
    });
};

export function getCustomerDataByID(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            fetch("/data/customers.json")
                .then((response) => {

                    if (!response.ok) throw new Error("Something went wrong!");
                    return response.json();
                })
                .then((data) => {
                    const _data = data.find((customer) => customer.customerId === id);
                    if (_data) {
                        resolve(_data);
                    } else {
                        reject("Customer not found!");
                    }
                })
                .catch((err) => reject(err || "Something went wrong!"));
        }, 1000);
    });
}