import './style.css';

import { useEffect, useState } from 'react';

import ContentCopyIcon from '@mui/icons-material/ContentCopy';

import CopyAlert from '../../components/CopyAlert';
import { useCopy } from '../../contexts/copyContext';
import generateUUID from '../../utils/generateUUID';

function Home() {
  const { copy } = useCopy();
  const [id, setId] = useState('');

  useEffect(() => {
    const [uuid] = generateUUID(1);

    setId(uuid);
  }, []);

  return (
    <CopyAlert>
      <div className="App">
        <header>
          <h1 className="title">UUID Generator</h1>
        </header>
        <main className="container">
          <div className="uuid-wrapper">
            <p className="uuid">{id}</p>
            <button
              type="button"
              className="copy-btn"
              onClick={() => {
                copy(id);
              }}
            >
              <ContentCopyIcon fontSize="small" /> Copy
            </button>
          </div>
          <p className="refresh">
            <a className="refresh-link" href={`${window.location.pathname}`}>
              Refresh
            </a>{' '}
            the page to generate another UUID
          </p>
        </main>
      </div>
    </CopyAlert>
  );
}

export default Home;
