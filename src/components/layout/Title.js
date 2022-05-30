import React from 'react';

//재활용하기위해 prop.title[0]
function Title(props) {
    return (
        <section className="cont__title">
            <div className="container">
                <h1>
                    <strong>{props.title[0]}</strong>
                    <em>{props.title[1]}</em>
                </h1>
            </div>
        </section>
    );
}

export default Title;
