import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { updateAge, updateName, updateStatus, fetchUserName, addNewUserData, deleteUserData, editUserData } from "../Storage/Reducer"
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import CancelIcon from '@mui/icons-material/Cancel';
import Storage from './Storage';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import '../homeStyle.css'
import MoreAndLess from './MoreAndLess';
import OverFlowPractice from './OverFlowPractice';

function Home(props) {
    console.log("PROPS>>>>>", props);

    const data = [
        { name: "Apple" },
        { name: "Banana" },
        { name: "Grapes" },
        { name: "Papaya" },
        { name: "Mango" },
        { name: "Cheery" },
        { name: "Cheery" }
    ]

    const newData = [
        { loginTime: 60, day: "Monday" },
        { loginTime: 30, day: "Saturday" },
        { loginTime: 20, day: "Sunday" },
        { loginTime: 50, day: "Friday" },
        { loginTime: 10, day: "Wednesday" },
    ]

    let dispatch = useDispatch()

    const { name, age, status, addUser } = useSelector((state) => {
        return state
    })

    //   alert(JSON.stringify(addUser))

    console.log("USER DATA>>>>>>>>>>", addUser);

    const handleUpdate = (age) => {
        dispatch(updateAge(age))
    }

    const handleName = () => {
        // const response=await fetch('https://jsonplaceholder.typicode.com/users')
        // const result=await response.json()
        // dispatch({ type: "UPDATE_NAME", payload: result[0].name })
        dispatch(fetchUserName())
    }

    const handleStatus = (status) => {
        dispatch(updateStatus(status))
    }

    const [showButton, setShowButton] = useState(false)
    const [showOneCmp, setShowOneCmp] = useState(1)
    const [itemData, setItemData] = useState(props.itemOne)
    const [addFruits, setAddFruits] = useState([])
    const [userName, setUserName] = useState("")
    const [userId, setUserId] = useState("")
    const [modalOpen, setModalOpen] = useState(false)
    const [userIdUpdate, setUserIdUpdate] = useState("")
    const [updatedUserId, setUpdatedUserId] = useState('')
    const [updatedUserName, setUpdatedUserName] = useState('')
    const [city, setCity] = useState("")
    const [inc, setInc] = useState(0)
    const [count, setCount] = useState(0);
    const [calculation, setCalculation] = useState(0);

    useEffect(() => {
        setCalculation(() => count * 2);
    }, [count]);

    useEffect(() => {
        // setCalculation(3)
        // alert(calculation)
        setTimeout(() => {
            setCalculation((calculation) => calculation + 1)
        }, 1000);
        //    alert(calculation)
    }, [])

    // alert(calculation)


    const handleItemOne = () => {
        setItemData(props.itemOne)
        setShowOneCmp(1)
    }

    const handleItemTwo = () => {
        setItemData(props.itemTwo)
        setShowOneCmp(2)
    }

    const handleItemThree = () => {
        setItemData(props.itemThree)
        setShowOneCmp(3)
    }

    // useEffect(() => {
    // setAddFruits(data)
    // }, [])


    const handleAddFruit = () => {
        let newArr = []
        let addFruitsResult = data.map((i) => {
            if (!newArr.includes(i.name))
                newArr.push(i.name)
        })
        alert(JSON.stringify(newArr))
    }

    const handleSave = () => {
        let data = { userId: userId, userName: userName }
        dispatch(addNewUserData(data))
        setUserId("")
        setUserName("")
    }

    const handleDelete = (id) => {
        dispatch(deleteUserData(id))
    }

    const handleEdit = (item) => {
        setModalOpen(true)
        // setUserIdUpdate(item)
        setUpdatedUserId(item.userId)
        setUpdatedUserName(item.userName)
    }

    const handleEditDone = () => {
        let data = { userId: updatedUserId, userName: updatedUserName }
        dispatch(editUserData(data))
        setModalOpen(false)
    }

    // let getDataLocalStorage = JSON.parse(localStorage.getItem('Note'))
    // let newDatas = (getDataLocalStorage == null) ? [] : getDataLocalStorage
    // alert(newDatas)

    // getDataLocalStorage.map((item) => {
    //     // return alert(item.Note_Text)
    // })

    const [names, setName] = useState('')

    return (<div style={{width:"100%"}}>
        <div style={{borderBottomLeftRadius:10,borderBottomRightRadius:10, zIndex: 100, position: '-webkit-sticky', position: 'sticky', top: 0, backgroundColor: 'green', border: '2px solid #4CAF50', padding: 10, color: "#fff", fontWeight: "bold", marginBottom: 15 }}>
            Sticky headbar...
        </div>
        <div style={{ position: "relative", textAlign: "center", color: "#fff" }} >
            <img src='background.jpg' width={'100%'} />
            <div style={{ position: "absolute", top: '50%', left: '50%', backgroundColor: "red" }} >Text center</div>
        </div>
        <MoreAndLess />
        <OverFlowPractice />
        <div>
            <input
                type='text'
                placeholder='Enter name'
                onChange={(e) => setName(e.target.value)}
                className={names != 0 ? 'form_control' : 'error_control'}
            />
            <button>Save</button>
        </div>
        <div className='inputWithIcon inputIconBg'>
            <input type='text' placeholder='Enter name...' />
            <div className='rupeesIcon'>
                <CurrencyRupeeIcon />
            </div>
        </div>
        {/* <div className='inputWithIcon'>
            <input type='text' placeholder='Enter name...' />
            <div className='rupeesIcon'>
                <CurrencyRupeeIcon />
            </div>
        </div> */}
        <p>Count: {count}</p>
        <button onClick={() => setCount((c) => c + 1)}>+</button>
        <p>Calculation: {calculation}</p>
        <button onClick={() => setInc((pv) => pv + 1)} >Increament</button>
        <div>{inc}</div>
        <Storage />
        <h1>Redux Toolkit</h1>
        <h4>My name is {name}</h4>
        <h4>My age is {age}</h4>
        <h4>My status is {status}</h4>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <button onClick={() => handleUpdate(40)} style={{ marginBottom: 10 }}>
                Update age
            </button>
            <button onClick={() => handleName("Chandu")} style={{ marginBottom: 10 }}>
                Update name
            </button>
            <button onClick={() => handleStatus('Coder')}>
                Update status
            </button>
            <div style={{ display: "flex", alignItems: "center" }}>
                <input style={{ width: 20, height: 20 }} type='checkbox' onChange={() => setShowButton(!showButton)} />
                <div>Please accept all policies before submit.</div>
            </div>
            <button disabled={showButton ? false : true} onClick={() => alert('Working fine')} >Submit</button>
            <div style={{ display: "flex" }}>
                <div
                    style={{
                        marginRight: 5,
                        cursor: "pointer",
                        // backgroundColor: showOneCmp===1 ? "#fff" : "#000" ,
                        // color: showOneCmp===1 ? "#000" : "#fff",
                        color: "#000",
                        padding: 10,
                        // borderRadius: 9,
                        borderBottom: showOneCmp === 1 ? '2px solid #000' : "",
                        borderBottomWidth: showOneCmp === 1 ? 4 : ''
                    }}
                    onClick={() => handleItemOne()} >One</div>
                <div
                    style={{
                        marginRight: 5,
                        cursor: "pointer",
                        // backgroundColor:showOneCmp===2 ? "#fff" : "#000" ,
                        // color:showOneCmp===2 ? "#000" : "#fff",
                        color: "#000",
                        padding: 10,
                        // borderRadius: 9,
                        borderBottom: showOneCmp === 2 ? '2px solid #000' : "",
                        borderBottomWidth: showOneCmp === 2 ? 4 : ''
                    }}
                    onClick={() => handleItemTwo()}>Two</div>
                <div
                    style={{
                        cursor: "pointer",
                        // backgroundColor:showOneCmp===3 ? "#fff" : "#000" ,
                        // color:showOneCmp===3 ? "#000" : "#fff",
                        color: "#000",
                        padding: 10,
                        // borderRadius: 9,
                        borderBottom: showOneCmp === 3 ? '2px solid #000' : "",
                        borderBottomWidth: showOneCmp === 3 ? 4 : ''
                    }}
                    onClick={() => handleItemThree()}>Three</div>
            </div>
            <div>
                {itemData}
            </div>
            <button onClick={() => handleAddFruit()}>Add Fruits</button>
            <input type='text' onChange={(e) => setUserId(e.target.value)} placeholder='Enter id' />
            <input type='text' onChange={(e) => setUserName(e.target.value)} placeholder='Enter name' />
            <button onClick={handleSave} >Save</button>
            <table>
                {addUser.length > 0 ?
                    <tr>
                        <th>Actions</th>
                        <th>ID</th>
                        <th>Name</th>
                    </tr> : <></>}
                {addUser.map((item, index) => {
                    return <tr>
                        <td>
                            <DeleteIcon style={{ width: 20, height: 20, cursor: "pointer" }} onClick={() => handleDelete(item.userId)} />
                            <EditIcon style={{ width: 20, height: 20, cursor: "pointer" }} onClick={() => handleEdit(item)} />
                        </td>
                        <td>{item.userId}</td>
                        <td>{item.userName}</td>
                    </tr>
                })}
            </table>
            {modalOpen && <div style={{ width: 400, height: 400, width: "100%", display: "flex" }}>
                <div style={{ width: "50%", backgroundColor: "#3B3B3B" }}>
                    <CancelIcon style={{ cursor: "pointer", marginLeft: "auto" }} onClick={() => setModalOpen(false)} />
                    <div>
                        <input value={updatedUserId} type='text' onChange={(e) => setUpdatedUserId(e.target.value)} placeholder='Enter id' />
                        <input value={updatedUserName} type='text' onChange={(e) => setUpdatedUserName(e.target.value)} placeholder='Enter name' />
                        <button onClick={handleEditDone} >Save</button>
                    </div>
                </div>
            </div>}
        </div>
        <div style={{ display: "flex",marginBottom:30 }}>
            {newData.map((item, index) => {
                return <div
                    style={{
                        width: '20%',
                        display: "flex",
                        alignItems: 'center',
                        alignSelf: 'flex-end',
                        flexDirection: "column"
                    }}>
                    <div>
                        {/* <Text>{chartBarHeight[0]}</Text> */}
                        <div style={{
                            fontSize: 9,
                            fontWeight: 'bold',
                            // fontFamily: FontFamily.PopinsMedium,
                            color: '#000',
                        }}>{item.loginTime}</div>
                    </div>
                    <div
                        style={{
                            width: 23,
                            height: item.loginTime / newData.length,
                            backgroundColor: '#FEA90D',
                            borderBottomWidth: 1,
                        }}
                    />
                    <div>
                        <div
                            style={{
                                fontSize: 9,
                                fontWeight: 'bold',
                                // fontFamily: FontFamily.PopinsMedium,
                                color: "#000",
                            }}>
                            {item.day}
                        </div>
                    </div>
                </div>
            })}
        </div>
        <div style={{
            position: 'fixed',
            left: 0,
            bottom: 0,
            width: '100%',
            backgroundColor: 'red',
            color: 'white',
            textAlign: 'center',
            borderTopLeftRadius:10,
            borderTopRightRadius:10
        }}
        >
            Footer
        </div>
    </div>
    )
}

export default Home