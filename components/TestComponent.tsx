export type TestComponentProps = {
  isEnabled: boolean;
  onShouldLint: () => void; // should be named onShouldLint
};

export const TestComponent = ({
  isEnabled,
  onShouldLint,
}: TestComponentProps) => {
  console.log("isEnabled", isEnabled);

  // should be named handleComponentLog
  const handleComponentLog = () => {
    console.log("componentLog");
  };

  return (
    <>
      <div onClick={handleComponentLog}>Test 1</div>
      <div onClick={onShouldLint}>Test 2</div>
    </>
  );
};
