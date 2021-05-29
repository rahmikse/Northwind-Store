import React from 'react';

const FormSuccess =()=> {

        return (
            <div className={"form-content-right"}>
                <div className={"form-success"}>
                    We have received your request   -
                    <a href={"/product"}> Go to the store</a>
                </div>
                <img className='form-img-2' src={"https://raw.githubusercontent.com/briancodex/react-form-v1/286f4a4603bda257ae001dc57c74d7f30bd4eedb/public/img/img-3.svg"} alt='spaceship' />
            </div>
        );

}

export default FormSuccess;