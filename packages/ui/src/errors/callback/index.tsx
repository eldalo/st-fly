import localforage from 'localforage';

import { Button } from '@st-fly/ui';

export function ErrorCallback() {
  const handleUpdate = async () => {
    localStorage.clear();
    await localforage.clear();
    window.location.reload();
  };

  return (
    <section className="container h-100">
      <div className="align-items-center h-100 justify-content-center row">
        <div className="col-12 col-md-7">
          <h2 className="title-section">
            Oops, an unexpected error has occurred
          </h2>
          <Button
            type="button"
            theme="danger"
            width="width_100"
            onClick={handleUpdate}
          >
            Try Again
          </Button>
        </div>
      </div>
    </section>
  );
}
