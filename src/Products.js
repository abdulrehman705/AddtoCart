import { types, flow } from "mobx-state-tree"
import axios from "axios";

const Product = types.model("data", {
    id: types.number,
    title: types.string,
    price: types.number,
    description: types.string,
    image: types.string,
    // quantity: types.number,
});

const Store = types.model({
    items: types.array(Product),
}).actions(self => ({
    fetchProducts: flow(function* () {

        const response = yield axios.get("https://fakestoreapi.com/products?limit=4");
        response.data.map((item) => {
            self.items.push({
                id: item.id,
                title: item.title,
                price: item.price,
                description: item.description,
                image: item.image,
                // quantity: item.quantity,
            })
        });
        // self.items = products;
        // console.log("ask", self.items);

    }),
}));

export const Data = Store.create({
    items: [],
});