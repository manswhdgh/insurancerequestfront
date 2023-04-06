import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import InsuranceMain from "./Main/InsuranceMain";
import Agree from "./Agree/Agree";
import SelectCompany from "./Select/SelectCompany";
import VirtualFax from "./virtualFax/VirtualFax";
import Write from "./Write/Write";
import Choose from "./Choose/Choose";
import ChooseBeneficiary from "./Write/ChooseBeneficiary";
import ChooseSendType from "./Transmit/ChooseSendType";
import Complete from "./Complete/Complete";
import Introduce from "./Introduce/Introduce";
import Final from './Complete/Final';
import WriteBeneficiary from "./Write/WriteBeneficiary";
import AdminMain from "./Admin/AdminMain";
import AdminManagement from "./Admin/AdminManagement";
import AdminInsuranceResultDetail from "./Admin/Detail/AdminInsuranceResultDetail";

function App() {
  return (
      <BrowserRouter>
        <Routes>
            <Route path='/' element={<Introduce />} />
            <Route path='/insuranceMain' element={<InsuranceMain />} />
            <Route path='/agree' element={<Agree />} />
            <Route path='/select' element={<SelectCompany />} />
            <Route path='/virtualfax' element={<VirtualFax/>} />
            <Route path='/choose' element={<Choose/>} />
            <Route path='/write' element={<Write/>} />
            <Route path='/chooseBeneficiary' element={<ChooseBeneficiary/>}/>
            <Route path='/chooseSendType' element={<ChooseSendType/>}/>
            <Route path='/complete' element={<Complete/>}/>
            <Route path='/final' element={<Final/>}/>
            <Route path='/writeBeneficiary' element={<WriteBeneficiary />} />

            {/* 관리자페이지 라우팅*/}
            <Route path='/admin' element={<AdminMain />} />
            <Route path='/admin/management' element={<AdminManagement />} />
            <Route path='/admin/insuranceDetail/' element={<AdminInsuranceResultDetail />} />
            {/*<Route path='/chooseBeneficiary' element={<ChooseBeneficiary/>}/>*/}
        </Routes>
      </BrowserRouter>
  );
}

export default App;
