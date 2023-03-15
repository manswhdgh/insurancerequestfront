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
            {/*<Route path='/chooseBeneficiary' element={<ChooseBeneficiary/>}/>*/}
        </Routes>
      </BrowserRouter>
  );
}

export default App;
