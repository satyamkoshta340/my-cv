/* eslint-disable react/prop-types */
// Renders a terminal command line: satyam@portfolio:~/path$ command --flags
function Prompt({ path = '~', command, flags, comment }) {
  return (
    <div className="cmd-line">
      <span className="cmd-user">satyam</span>
      <span className="cmd-at">@</span>
      <span className="cmd-host">portfolio</span>
      <span className="cmd-symbol">:</span>
      <span className="cmd-path">{path}</span>
      <span className="cmd-symbol">$</span>
      {command && <span className="cmd-text">{command}</span>}
      {flags && <span className="cmd-flag">{flags}</span>}
      {comment && <span className="cmd-comment"># {comment}</span>}
    </div>
  );
}

export default Prompt;
