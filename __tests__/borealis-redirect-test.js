import React from 'react';
import { shallow } from 'enzyme';
import BorealisRoute from '../src/react-borealis-route';

describe('Borealis', () => {
  it('should render correctly', () => {
    const config = {
      pdf: {
        transcript: {
          texts: ['P.D.F ya\'ll'],
          label: 'PDF',
        },
        thumbnail: 'https://cdm16022.contentdm.oclc.org/utils/getthumbnail/collection/p16022coll35/id/0',
        config: {
          height: 800,
        },
        values: [
          {
            src: 'http://cdm16022.contentdm.oclc.org/utils/getfile/collection/p16022coll52/id/16/filename',
            thumbnail: 'http://lib-mdl-dev.oit.umn.edu/thumbnails/p16022coll52:16',
            transcript: {
              texts: ['1 Cecelia Boone Narrator Sara Ring Interviewer June 9, 2011 Minitex Oral History Project Minneapolis, Minnesota SR: Tell us how you got started working at Minitex. How did you end up in the job you are doing right now? CB: As always, there is a story. blah blah'],
              label: 'PDF',
            },
          },
          {
            src: 'http://cdm16022.contentdm.oclc.org/utils/getfile/collection/p16022coll52/id/17/filename',
            thumbnail: 'http://lib-mdl-dev.oit.umn.edu/thumbnails/p16022coll52:17',
            transcript: {
              texts: ['blah blah blah, second pdf here'],
              label: 'PDF',
            },
          },
        ],
      },
    };

    const component = shallow(<BorealisRoute config={config} basename="/" />);
    expect(component).toMatchSnapshot();
  });
});
