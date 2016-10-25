import chai from "chai";  
import jsxChai from "jsx-chai";
import React from "react";  
import ReactDOM from "react-dom";  
import TestUtils from "react-addons-test-utils";  
import shallowTestUtils from "react-shallow-testutils";
chai.use(jsxChai);
const expect = chai.expect;

import BorealisTray from '../src/borealis-tray'
import Thumbnail from '../src/borealis-thumbnail'

describe('Borealis Tray tests', () => {
  beforeEach(function() {
    const renderer = TestUtils.createRenderer();
    const assets = [{thumbnail: "http://example.com/thumb"}]
    renderer.render(
      <BorealisTray assets={assets} handler={() => {}} />
    )
    this.result = renderer.getRenderOutput()
  });

  it("renders a thumbnail", function(){  
    expect(this.result.type).to.eq('div')
    expect(this.result.props.className).to.eq('row borealis-tray')
    const [ thumb ] = this.result.props.children
    console.log(thumb)
  })
})
