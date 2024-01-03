import "./navigation.css";

const linksData = [
  {
    name: "about",
  },
  {
    name: "experience",
  },
  {
    name: "projects",
  },
];

function Navigation() {
  return (
    <div className="navigationDiv">
      <ul>
        {linksData.map((link) => {
          return <Link key={link.name} name={link.name} />;
        })}
      </ul>
    </div>
  );
}

function Link(props) {
  return (
    <li className="navigationLink">
      <span className="line" />
      <a href="#">{props.name.toUpperCase()}</a>
    </li>
  );
}

export default Navigation;
