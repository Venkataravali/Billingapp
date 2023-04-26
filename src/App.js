
import React from 'react';
import Adminapp from './admin/adminapp';
import Userapp from './user/userapp';

function App() {
 if (localStorage.getItem("sellerid") == null)
{

return ( <Userapp />);
}
else{
  return ( <Adminapp/>);

}
}
export default App;
