import React from 'react';
import MarkdownInput from './markdownInput';
import PreviewOutput from './previewOutput';

const Previewer = React.createClass({
  getInitialState: function() {
    return {
      markdown: '',
      sampleURL: 'https://raw.githubusercontent.com/github/markup/master/README.md'
    };
  },
  updateMarkdown: function(markdown) {
    this.setState({markdown: markdown});
  },
  sampleURLChange: function(event) {
    this.setState({sampleURL: event.target.value});
  },
  enterSampleMarkdown: function() {
    $.get(this.state.sampleURL, function(data) {
      this.setState({markdown: data});
    }.bind(this));
  },
  clearMarkdown: function() {
    this.setState({markdown: ''});
  },
  render: function() {
    return(
      <div className="row">
        <div className="col-xs-12">
          <div className="row">
            <div className="col-xs-12">
              <div className="form-group">
                <label for="inputURL">Sample URL</label>
                <input type="text" className="form-control" placeholder="Enter URL for sample Markdown" value={this.state.sampleURL} onChange={this.sampleURLChange} />
              </div>
            </div>
            <div className="col-xs-12 text-center">
              <div className="btn-group" role="group">
                <button type="button" className="btn btn-success btn-lg" onClick={this.enterSampleMarkdown}>Enter Sample Markdown</button>
                <button type="button" className="btn btn-danger btn-lg" onClick={this.clearMarkdown}>Clear Markdown</button>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xs-12 col-md-6">
              <div className="panel panel-success">
                <div className="panel-heading"><h2>Markdown Input</h2></div>
                <div className="panel-body">
                  <MarkdownInput markdown={this.state.markdown} updateMarkdown={this.updateMarkdown}/>
                </div>
              </div>
            </div>
            <div className="col-xs-12 col-md-6">
              <div className="panel panel-success">
                <div className="panel-heading"><h2>Rendered HTML Output</h2></div>
                <div className="panel-body">
                  <PreviewOutput markdown={this.state.markdown} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
});

export default Previewer;
