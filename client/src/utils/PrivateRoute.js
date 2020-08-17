import React from 'react';
import { Route, Redirect } from 'react-router-dom';
// api
import { getUser } from '../api/users';


const ProtectedRoute = ({ loader: Loader, component: Component, ...rest }) => {
  const [isUserLoading, setIsUserLoading] = React.useState(false);
  const [isUserLoaded, setIsUserLoaded] = React.useState(null);

  React.useEffect(() => {
    setIsUserLoading(true);

    getUser()
      .then(() => {
        setIsUserLoading(false);
        setIsUserLoaded(true);
      })
      .catch(err => {
        setIsUserLoading(false);
        setIsUserLoaded(false);
      });
  }, []);



  return (
    <Route
      { ...rest }
      render = { 
        (props) => {

          if(isUserLoading || isUserLoaded === null) {
            return (<div>loading</div>);
          }
          else if(isUserLoaded) {
            return (<Component {...props} />);
          }
          else {
            return (<Redirect to={{ pathname: "/login" }} />);
          }

        }
      }
    />
  )
};



export default ProtectedRoute;