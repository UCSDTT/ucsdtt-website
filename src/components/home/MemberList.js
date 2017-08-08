import React, {Component} from 'react';
import * as BS from 'react-bootstrap';
import members from '../../db.js'

class MemberList extends Component {
	getInitialState() {
    return {
      value: '',
      members: members.pictures
    }
  }

  render() {
    return (
    	<BS.Grid>
    		<BS.Row className="no-margin">
      		<BS.Col>
        		<BS.PageHeader id="title">
        			<h1 className="bob">
        				OUR BROTHERS
        			</h1>
        		</BS.PageHeader>
      		</BS.Col>
				</BS.Row>
				<BS.Row>
					<BS.Col>
						<BS.Image id="fam-pic" src={require('../../../public/images/WhoWeAre.jpg')} responsive/>
					</BS.Col>
				</BS.Row>
				<BS.Row className="search-margin">
					<BS.Col xsOffset={2} xs={4} className="top-margin">
						<form>
        			<BS.FormGroup controlId="formBasicText">
          			<BS.FormControl
          				className="add-border"
			            type="text"
			            value={this.state.value}
			            onChange={this.handleChange}
         				 />
        			</BS.FormGroup>
     			 	</form>
					</BS.Col>
					<BS.Col xs={3}>
						<h3> SEARCH BY </h3>
					</BS.Col>
					<BS.Col xs={2}>
						<BS.DropdownButton id="dropdown" className="remove-border" title="Major">
      				<BS.MenuItem eventKey="1">Action</BS.MenuItem>
      				<BS.MenuItem eventKey="2">Another action</BS.MenuItem>
      				<BS.MenuItem eventKey="3" active>Active Item</BS.MenuItem>
      			</BS.DropdownButton>
					</BS.Col>
				</BS.Row>
				<BS.Row>
					<BS.Col xs={2}>
						<h3 className="logo-header"> COMPUTER SCIENCE </h3>
						<BS.Image src={require('../../../public/images/cs.png')} responsive rounded/>
					</BS.Col>
          {this.state.members.map(function(item){                                        
            return (
            	<BS.Col xsOffset={2}>
	            	<BS.Col xs={2}>
	              	<BS.Image src={item.url} responsive rounded/>
	              	<p> {item.name} </p>
	              	<p> {item.class} </p>
	              </BS.Col>
              </BS.Col>
          	);                
          }, this)}
				</BS.Row>
			</BS.Grid>
    );
  }
}

export {MemberList};
