import MySecondComponent from "./MySecondComponent";

const MyFirstComponent = () => {
  return (
    <section>
      <h1>Hello from my first component</h1>
      <MySecondComponent />
    </section>
  );
};
export default MyFirstComponent;
