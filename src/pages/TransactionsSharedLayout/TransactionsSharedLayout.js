import { Outlet } from "react-router-dom";
import Wrapper from "../../wrappers/TransactionsSharedLayout";
import TransactionHeader from "../../components/TransactionsHeader";
import Sidebar from "../../components/Sidebar";

const TransactionsSharedLayout = () => {
    //header
    //sidebar
    //outlet
    return <Wrapper>
        <TransactionHeader/>
        <Sidebar/>
        <Outlet/>
    </Wrapper>
}

export default TransactionsSharedLayout;