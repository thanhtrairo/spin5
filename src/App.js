import { Box } from '@material-ui/core'
import React from 'react'
import SmartDetail from './SmartRetails'

export default function App() {
  return (
    <Box style={{ display: 'flex', backgroundColor: '#f7f7f7' }}>
      <Box style={{ width: 240 }}></Box>
      <Box style={{ width: 1680 }}>
        <SmartDetail />
      </Box>
    </Box>
  )
}
// import React, { useRef } from 'react'
// import moment from 'moment'

// import * as htmlToImage from 'html-to-image'

// function App() {
//   const domEl = useRef(null)

//   const downloadImage = async (chart) => {
//     const dataUrl = await htmlToImage.toPng(domEl.current, { backgroundColor: '#fff' })

//     // download image
//     const link = document.createElement('a')
//     link.download = `${chart}_${moment().format('YYYYMMDD_HHMMSSSSS')}`
//     link.href = dataUrl
//     link.click()
//   }

//   return (
//     <div className="App">
//       <button onClick={() => downloadImage('Customer Traffic')}>Download Image</button>

//       <div id="domEl" ref={domEl}>
//         <h3>Convert HTML element or document into Image in React</h3>
//         <h3>
//           <a href="https://www.cluemediator.com/" target="_blank" rel="noopener">
//             Clue Mediator
//           </a>
//         </h3>
//       </div>
//     </div>
//   )
// }

// export default App
