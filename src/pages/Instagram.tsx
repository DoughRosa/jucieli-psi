import { useEffect } from 'react';
import Body from '../components/Body/Body';
import PageDefault from '../components/PageDefault';

function Instagram() {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = '//widget.tagembed.com/embed.min.js';
        script.async = true;
        script.type = 'text/javascript';
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, []);

    return (
        <>
            <PageDefault>
                <Body>
                    <div
                        className="tagembed-widget"
                        style={{ width: '1500px', height: '100%', padding: '50px' }}
                        data-widget-id="153843"
                        data-view-url="https://widgets.tagembed.com/153843"
                    ></div>
                </Body>
            </PageDefault>
        </>
    );
}

export default Instagram;
