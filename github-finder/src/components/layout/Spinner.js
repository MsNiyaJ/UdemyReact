import React, { Fragment } from 'react'
import spinner from './spinner.gif';
// import { Fragment } from 'react/cjs/react.production.min';

export const Spinner = () => {
    return (
        <Fragment>
            <img src={spinner} alt='Loading...' 
            style={{ width: '200px', margin: 'auto', display: 'block'}} />
        </Fragment>
    )
}
