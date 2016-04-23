import React from 'react';

const MarkdownInput = React.createClass({
  propTypes: {
    markdown: React.PropTypes.string.isRequired,
    updateMarkdown: React.PropTypes.func.isRequired
  },
  markdownChange: function(event) {
    this.props.updateMarkdown(event.target.value);
  },
  render: function() {
    return(
      <div className="markdown-input">
        <textarea className="form-control" value={this.props.markdown} onChange={this.markdownChange} />
      </div>
    );
  }
});

export default MarkdownInput;
