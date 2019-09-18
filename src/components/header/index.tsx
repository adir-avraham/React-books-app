import React from 'react';


export default class Header extends React.Component<any, any> {

    constructor(props: any) {
        super(props)
    } 

    render() {
        const {title , style} = this.props
        return <div>
            <h1 style={style}>{title}</h1>
        </div>
    }
}
