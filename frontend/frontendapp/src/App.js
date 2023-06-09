import './App.css';
import Entry from './containers/Entry/Entry';
import Main from './HOC/Main/Main';
import React from 'react';


function App() {

  let currentPage = JSON.parse(localStorage.getItem('currentPage'))
  let currentFullName = JSON.parse(localStorage.getItem('fullName'))
  let currentEmail = JSON.parse(localStorage.getItem('email'))



  const [fullName, setFullName] = React.useState(currentFullName || '')
  const [email, setEmail] = React.useState(currentEmail || '')
  const [page, setPage] = React.useState(currentPage || 'entry')


  React.useEffect(() => {
    localStorage.setItem('currentPage', JSON.stringify(page))
    localStorage.setItem('fullName', JSON.stringify(fullName))
    localStorage.setItem('email', JSON.stringify(email))
  }, [page, fullName, email])


  const PageJSX = React.useMemo(() => {
    switch(page){
      case 'entry':
        return <Entry setFullName={setFullName} setEmail={setEmail} setPage={setPage}></Entry>
      case 'main':
        return <Main fullName={fullName} setFullName={setFullName} setEmail={setEmail} setPage={setPage}></Main>
      default:
        return
    }
  },[page, fullName])


  return (
    <div className="App">
    {PageJSX}
    </div>
  );
}

export default App;
