const App = () => {
  const { search } = location;
  const searchParams = new URLSearchParams(search);
  const pageTitle = searchParams.get("surveyName") || "Post-acceptance survey";

  return (
    <div className="flex justify-center pv5">
    <div className="mw9 w-two-thirds">
      <div className="f1">{pageTitle}</div>
      <div className="f2 mb4">You've been redirected to this page to do a survey for page {searchParams.get("pageId")}!</div>
    </div>
    </div>
  );
};

export const renderApp = () => <App />;
