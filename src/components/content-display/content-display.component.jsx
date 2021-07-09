import './content-display.styles.css';

const ContentDisplay = (props) => (
  <div>
    <img 
      className="content-img"
      src={props.item.url}
      alt="dog"></img>
  </div>
)

export default ContentDisplay;
