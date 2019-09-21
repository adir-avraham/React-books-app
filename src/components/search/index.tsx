import React from 'react';


export default class Search extends React.Component<any, any> {

    render() {
        const {searchOperation, searchValue, inHebrew } = this.props
        return <div>
                <div> Show Hebrew books
                  <input type="checkbox" onChange={(e) => {
                  const inHebrew = e.target.checked;
                  searchOperation(searchValue, inHebrew) 
          }} />

        </div>
        <div>
          <input placeholder="search by name" value={searchValue} onChange={(e) => {
            const searchValue = e.target.value;
            searchOperation(searchValue, inHebrew)
          }} />
        </div>
    </div>

    }



}