import Sidebar from './layout/Sidebar/Sidebar.js'
import Form from './layout/Form/Form.js'

const App = () => {

  return `
    <div class='app'>
      ${Sidebar()}
      ${Form()}
    </div>
  `
}


export default App