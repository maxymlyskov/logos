import CardDetails from "./components/CardDetails";
import NavigationBar from "./components/NavigationBar";

function App() {
  return (
    <main>
      <NavigationBar />
      <CardDetails
        title="White Mercedes"
        price="15 000"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Dignissimos, natus! Lorem ipsum dolor, sit amet consectetur
            adipisicing elit. Ad, nostrum. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Dignissimos, natus! Lorem ipsum dolor,
            sit amet consectetur adipisicing elit. Ad, nostrum."
        imageTitle="car"
        location="Albuqerque, New Mexico"
      />
    </main>
  );
}

export default App;
