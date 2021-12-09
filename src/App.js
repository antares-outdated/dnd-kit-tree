import "./styles.css";
import SortableTree from "./components/SortableTree";

const Wrapper = ({ children }: { children: React.ReactNode }) => (
  <div
    style={{
      maxWidth: 600,
      padding: 10,
      margin: "0 auto",
      marginTop: "10%"
    }}
  >
    {children}
  </div>
);

export default function App() {
  return (
    <div className="App">
      <Wrapper>
        <SortableTree collapsible indicator removable />
      </Wrapper>
    </div>
  );
}
