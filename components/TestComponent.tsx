export type TestComponentProps = {
  isEnabled: boolean;
  onShouldLint: () => void;
};

export const TestComponent = ({
  isEnabled,
  onShouldLint,
}: TestComponentProps) => {
  console.log("isEnabled", isEnabled);

  const handleComponentLog = () => {
    console.log("componentLog");
  };

  return (
    <>
      <div onClick={handleComponentLog}>Test 1</div>
      {/* lint error */}
      <div onClick={onShouldLint}>Test 2</div>
    </>
  );
};

export const TestComponent2 = (props: TestComponentProps) => {
  console.log("isEnabled", props.isEnabled);

  const handleComponentLog = () => {
    console.log("componentLog");
  };

  return (
    <>
      <div onClick={handleComponentLog}>Test 1</div>
      {/* no lint error */}
      <div onClick={props.onShouldLint}>Test 2</div>
    </>
  );
};
