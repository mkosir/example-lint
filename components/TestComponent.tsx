export type TestComponentProps = {
  isEnabled: boolean;
  shouldLint: () => void; // should be named onShouldLint
};

export const TestComponent = ({
  isEnabled,
  shouldLint,
}: TestComponentProps) => {
  console.log("isEnabled", isEnabled);

  // should be named handleComponentLog
  const componentLog = () => {
    console.log("componentLog");
  };

  return (
    <>
      <div onClick={componentLog}>Test</div>
      <div onClick={shouldLint}>Test</div>
    </>
  );
};