import "./index.css";

const Coolbutton = (props) => {
  return (
    <div className="button-border">
      <p>{props.title}</p>
      <div className="button-border__corner --1"></div>
      <div className="button-border__corner --2"></div>
      <div className="button-border__corner --3"></div>
      <div className="button-border__corner --4"></div>
    </div>
  );
};
export default Coolbutton;
