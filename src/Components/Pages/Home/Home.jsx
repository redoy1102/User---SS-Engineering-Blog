import { Helmet } from 'react-helmet-async';

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Home - SS Blog</title>
                {/*<link rel="canonical" href="https://www.tacobell.com/" />*/}
            </Helmet>
            <h1 className="text-4xl text-center">SS Engineering & Construction</h1>
        </div>
    );
};

export default Home;