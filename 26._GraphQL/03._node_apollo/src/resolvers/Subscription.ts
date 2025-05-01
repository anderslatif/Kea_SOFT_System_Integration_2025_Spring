import pubsub from "../database/pubsubUtil.js";

const Subscription = {
    bookAdded: { subscribe: () => pubsub.asyncIterator('BOOK_ADDED') }
}

export default Subscription;
