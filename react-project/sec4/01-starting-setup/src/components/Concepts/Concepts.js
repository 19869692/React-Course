import ConceptItem from "./ConceptItem";
import "./Concepts.css";

function Concepts(props) {
  return (
    <ul className="concepts">
      <ConceptItem
        image={props.item[0].image}
        title={props.item[0].title}
        description={props.item[0].description}
      ></ConceptItem>
      <ConceptItem
        image={props.item[1].image}
        title={props.item[1].title}
        description={props.item[1].description}
      ></ConceptItem>
      <ConceptItem
        image={props.item[2].image}
        title={props.item[2].title}
        description={props.item[2].description}
      ></ConceptItem>
    </ul>
  );
}

export default Concepts;
