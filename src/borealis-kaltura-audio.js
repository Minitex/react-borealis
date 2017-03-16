import React from 'react';
import KalturaPlayer from './borealis-kaltura';

export default props => (<KalturaPlayer {...props.config.kaltura_audio} />);
