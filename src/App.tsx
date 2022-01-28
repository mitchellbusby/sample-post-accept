const App = () => {
  const { search } = location;
  const searchParams = new URLSearchParams(search);
  const pageTitle = searchParams.get("pageTitle") || "Post-accept sample";

  return (
    <div className="flex justify-center pv5">
    <div className="mw9 w-two-thirds">
      <div className="f1">{pageTitle}</div>
      <div className="f2 mb4">You've been redirected to this page!</div>
      <div className="f3 mb2">Supplied parameters</div>
      <div className="f4">Page ID: {searchParams.get("pageId")}</div>
      <div className="f4">Page title: {searchParams.get("pageTitle")} </div>
    </div>
    </div>
  );
};

export const renderApp = () => <App />;
