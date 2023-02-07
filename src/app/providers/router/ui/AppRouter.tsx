import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { routeConfig } from '../routeConfig/routeConfig';

const AppRouter = () => {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Routes>
                {Object.values(routeConfig).map(({element, path}) => (
                    <Route 
                        key={path}
                        path={path} 
                        element={<div className='module-wrapper'>{element}</div>} />
                ))}
            </Routes>
        </Suspense>
    );
};

export default AppRouter;