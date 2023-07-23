

function Lists(props) {
    const classes = '' + props.className;

    return (
        <div className={classes}>
            <img src={props.concept.image} alt={props.concept.title}/>
            <h2>{props.concept.title}</h2>
            <p>{props.concept.description}</p>
        </div>
    );
}

export default Lists;