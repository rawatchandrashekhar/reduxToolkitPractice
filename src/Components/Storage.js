import React,{useState} from 'react'

function Storage() {

    const [lname, setLName] = useState('')

    const handleSaveButton = () => {
       
    }


//    let txt = lname.map(item => item)
//    alert(txt)

  return (
    <div>
          <h1>Local storage</h1>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <input type='text' placeholder='Enter text here...' onChange={(e) => setLName(e.target.value)} />
            {/* <input type='text' placeholder='Enter city' onChange={(e)=>setCity(e.target.value)} /> */}
            <button onClick={handleSaveButton} >Save data in local storage</button>
        </div>
        <h1>------------------</h1>
    </div>
  )
}

export default Storage