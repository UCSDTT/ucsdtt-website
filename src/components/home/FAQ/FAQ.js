import React, {Component} from 'react';
import {Card, CardTitle, CardText} from 'material-ui/Card';
import {Element} from 'react-scroll';
import {faqCol1, faqCol2} from './data.js';
import './FAQ.css';

const style = {
  title: {
    lineHeight: '30px',
  }
}
class FAQ extends Component {
  render() {
    return (
      <Element name="faq" className="element">
        <div className="container">
          <h1 className="header"> FAQ </h1>
          <div className="faq-container">
            <div className="faq">
              {faqCol1.map((question) => (
                <Card className="faq-card"
                  key={question.title}
                  zDepth={2}
                >
                  <CardTitle
                    title={question.title}
                    titleStyle={style.title}
                  >
                  </CardTitle>
                  <CardText className="faq-body">
                    {question.body}
                  </CardText>
                </Card>
              ))}
            </div>
            <div className="faq">
              {faqCol2.map((question) => (
                <Card className="faq-card"
                  key={question.title}
                  zDepth={2}
                >
                  <CardTitle
                    title={question.title}
                    titleStyle={style.title}
                  >
                  </CardTitle>
                  <CardText className="faq-body">
                    {question.body}
                  </CardText>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </Element>
    )
  }
}

export {FAQ};