import chai from "chai";  
import jsxChai from "jsx-chai";
import React from "react";  
import ReactDOM from "react-dom";  
import TestUtils from "react-addons-test-utils";  
import shallowTestUtils from "react-shallow-testutils";
chai.use(jsxChai);
const expect = chai.expect;

import BorealisAudio from '../src/borealis-audio'

describe('BorealisAudio Tests', () => {
  beforeEach(function() {
    const renderer = TestUtils.createRenderer();
    renderer.render(
      <BorealisAudio src="http://example.com" />
    )
    this.result = renderer.getRenderOutput()
  });

  it("renders an audio", function(){  
    const renderer = TestUtils.createRenderer();
    renderer.render(
      <BorealisAudio src="http://example.com" />
    )
    let result = renderer.getRenderOutput()
    expect(result.type).to.eq('audio')
    expect(result.props.controls).to.be.true
    expect(result.props.className).to.eq('audio-player')
    expect(result.props.children[0].type).to.eq('source');
    expect(result.props.children[0].props.src).to.eq('http://example.com');
    expect(result.props.children[1]).to.eq('Your browser does not support the audio element.');
  })
})
