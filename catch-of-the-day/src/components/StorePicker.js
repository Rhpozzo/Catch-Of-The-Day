import React from 'react';
import { getFunName } from '../helpers';


export const StorePicker = (props) => {
  //This is a property set to an arrow function bound to the store picker componenet.
const myInput = React.createRef();

const goToStore = (event) => {
 
    //1. Stop form from submitting
    event.preventDefault();
    //2. Get the text from the input.
    const storeName = myInput.current.value;
    //3. Change the page to the store id. Just pass props...
    console.log(props.history)
    props.history.push(`/store/${storeName}`)
}

    return(
        <>
         <form className='store-selector' onSubmit={goToStore}>
             <h2>Please Enter a Store</h2>
             <input type='text' ref={myInput} required placeholder='Store Name' defaultValue={getFunName()}></input>
             <button type='submit'>Visit Store >> </button>
        </form>
        </>
    )
}

