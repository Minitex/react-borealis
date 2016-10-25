import chai from "chai";  
import jsxChai from "jsx-chai";
import React from "react";  
import ReactDOM from "react-dom";  
import TestUtils from "react-addons-test-utils";  
import shallowTestUtils from "react-shallow-testutils";
chai.use(jsxChai);
const expect = chai.expect;

import BorealisThumbnail from '../src/borealis-thumbnail'

describe('Borealis thumbnail tests', () => {
  beforeEach(function() {
    const renderer = TestUtils.createRenderer();
    renderer.render(
      <BorealisThumbnail src="http://example.com" thumbnail="blerg" handler={() => {}} />
    )
    this.result = renderer.getRenderOutput()
  });

  it("renders a thumbnail", function(){  
    expect(this.result.type).to.eq('div')
    expect(this.result.props.className).to.eq('col-md-2')
    let link = this.result.props.children    
    expect(link.type).to.eq('a')
    let img = link.props.children
    expect(img.type).to.eq('img')
    expect(img.props.src).to.eq('http://example.com')
  })
})
