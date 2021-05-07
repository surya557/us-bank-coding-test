// 1. output first four key value pairs as output
// 2. on the new output arrange the object in ascending order
// 3. After ascending order, print key value pair where price is greater than 500

import { useState } from 'react'
import './test.css';

export default function Test(props) {
    const { testArr } = props;
    const [ testStateArr, setTestStateArr ] = useState([]);

    const handleSubmit = () => {
        // setTestStateArr(testArr);
        let newArr = testArr.map(testObj => {
            return {
                name: testObj.name,
                price: testObj.price
            }
        }).sort((a, b) => a.price - b.price)
        setTestStateArr([...newArr]);
        console.log(newArr);
    }
    const handleRestore = () => {
        console.log(
            testArr.filter(a => a.price > 500)
        )
    }
    return (
        <>
            <button className={'submitBtn'} onClick={handleSubmit}>Submit</button>
            <button className={'submitBtn'} onClick={handleRestore}>Restore</button>

            {/* print new array */}
            <table>
                <thead>
                    <td>Name</td>
                    <td>Price</td>
                </thead>
                <tbody>
                {testStateArr.map((val, indx) => {
                    return (
                        <tr key={indx}>
                            <td>{val.name}</td>
                            <td>{val.price}</td>
                        </tr>)
                })}

                </tbody>
            </table>
        </>
    )
}