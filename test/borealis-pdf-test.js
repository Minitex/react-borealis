import chai from "chai";  
import jsxChai from "jsx-chai";
import React from "react";  
import ReactDOM from "react-dom";  
import TestUtils from "react-addons-test-utils";  
import shallowTestUtils from "react-shallow-testutils";
chai.use(jsxChai);
const expect = chai.expect;

import BorealisPDF from '../src/borealis-pdf'

describe('Borealis PDF tests', () => {
  beforeEach(function() {
    const renderer = TestUtils.createRenderer();
    renderer.render(
      <BorealisPDF src="http://example.com" thumbnail="blerg" />
    )
    this.result = renderer.getRenderOutput()
  });

  it("renders a pdf", function(){  
    expect(this.result.type).to.eq('object')
    expect(this.result.props.data).to.eq('http://example.com')
    expect(this.result.props.type).to.eq('application/pdf')
    expect(this.result.props.height).to.eq(500)
    expect(this.result.props.width).to.eq(900)
    const [ img, space, link ] = this.result.props.children
    expect(img.type).to.eq('img')
    expect(img.props.src).to.eq('blerg')
    expect(link.props.href).to.eq('http://example.com')
  })
})