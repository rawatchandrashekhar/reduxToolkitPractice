import React, { useState, useEffect } from 'react'

function MoreAndLess() {

    const datas = ['Jay', 'Chandu', 'Dheeraj', 'Raj', 'Singh', 'xxxxxxxx', 'mmmmmmmmm']

    const [fakeData, setFakeData] = useState([])
    const [loadMore, setLoadMore] = useState(false)
    const [showMoreTxt, setShowMoreTxt] = useState('Show more...')

    const loadCount = loadMore ? fakeData.length : 2

    // alert(loadCount)

    useEffect(() => {
        setFakeData(datas)
    }, [])

    const handleShowMore = () => {
        setLoadMore(true)
        setShowMoreTxt('Show less...')
    }

    const handleShowLess = () => {
        setLoadMore(false)
        setShowMoreTxt('Show more...')
    }

    return (
        <div>

            {fakeData.slice(0, loadCount).map((item) => {
                return <div style={{
                    backgroundColor: "#2980b9",
                    color: "#fff",
                    margin: 5,
                    padding: 10,
                    borderRadius: 10,
                    cursor: "pointer"
                }}>
                    {item}
                </div>
            })}
            {fakeData.length > 2 && <div style={{
                cursor: "pointer",
                display: "flex",
                justifyContent: "flex-end",
                marginRight: 10,
                fontWeight: 500,
                fontSize: 13
            }}
                onClick={() => {
                    if (showMoreTxt == 'Show less...')
                        handleShowLess()
                    else
                        handleShowMore()
                }} >{showMoreTxt}</div>}
        </div>
    )
}

export default MoreAndLess