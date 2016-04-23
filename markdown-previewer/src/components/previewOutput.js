import React from 'react';
import marked from 'marked';

const PreviewOutput = React.createClass({
  propTypes: {
    markdown: React.PropTypes.string.isRequired
  },
  generateHTMLFromMarkdown: function(text) {
    return { __html: marked(text, { gfm: true, breaks: false, sanitize: true }) };
  },
  render: function() {
    return(
      <div className=" markdown-preview">
        <div dangerouslySetInnerHTML={this.generateHTMLFromMarkdown(this.props.markdown)} />
      </div>
    );
  }
});

export default PreviewOutput;
