import Feedback from "./Feedback/Feedback";



export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        // display: 'flex',
        // justifyContent: 'center',
        // alignItems: 'center',
        fontSize: 22,
        color: '#010101'
      }}
    >
      <Feedback
        initialValue={0}
      />
    </div>
  );
};
