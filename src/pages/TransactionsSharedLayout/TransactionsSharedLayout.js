import { Outlet } from "react-router-dom";

const TransactionsSharedLayout = () => {
    //header
    //sidebar
    //outlet
    return <>
        <h1>Transactions Shared Layout</h1>
        <Outlet/>
    </>
}

export default TransactionsSharedLayout;