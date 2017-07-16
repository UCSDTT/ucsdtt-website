import React, {Component} from 'react';
import * as BS from 'react-bootstrap';


class MemberList extends Component {
  render() {
    return (
      <div className="member-list">
        <BS.PageHeader className="title">This is the Member List Module</BS.PageHeader>
      </div>
    );
  }
}

export {MemberList};
