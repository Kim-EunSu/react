import React from 'react';

//{}는 props
function Contents({ children }) {
    return <main id="main">{children}</main>;
}

export default Contents;
