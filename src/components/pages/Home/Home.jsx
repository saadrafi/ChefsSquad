import React from 'react';
import Banner from './Banner';
import ChefSection from './ChefSection';
import Treanding from './Treanding';
import Form from './FormPage';
import FormPage from './FormPage';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <ChefSection></ChefSection>
            <Treanding></Treanding>
            <FormPage></FormPage>
        </div>
    );
};

export default Home;