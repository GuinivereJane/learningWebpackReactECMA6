


import React from 'react';
import ReactDOM from 'react-dom';

import {Hello} from './components/hello.jsx';
import {World} from './components/world.jsx';
import {CommentBox} from './components/CommentBox.jsx';

ReactDOM.render(<Hello/>, document.getElementById('hello'));
ReactDOM.render(<World/>, document.getElementById('world'));
ReactDOM.render(
        <CommentBox url="/api/comments" pollInterval={3000} />,
        document.getElementById('content')
      );
