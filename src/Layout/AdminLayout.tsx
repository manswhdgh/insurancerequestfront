import React from "react";
import 'globalthis/auto';
import AdminHeader from "./Header/AdminHeader";
import AdminFooter from "./Footer/AdminFooter";

const AdminLayout = (props : {children: React.ReactNode}) => {
    return (
        <div>
            <AdminHeader/>

            <main>
                {props.children}
            </main>

            <AdminFooter/>
        </div>
    );
}

export default AdminLayout;