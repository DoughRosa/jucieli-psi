import { useEffect } from 'react';
import PageDefault from '../components/PageDefault';
import Main from '../components/Main/Main';
import Container from '../components/Main/containerContent/Container';

function Instagram() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://static.elfsight.com/platform/platform.js';
    script.setAttribute('data-use-service-core', '');
    script.defer = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <PageDefault>
      <Main>
        <Container>
          <div className="elfsight-app-cc7a58a2-1e2b-4c7e-a7b2-4d839c2ae34f" data-elfsight-app-lazy></div>
        </Container>
      </Main>
    </PageDefault>
  );
}

export default Instagram;
