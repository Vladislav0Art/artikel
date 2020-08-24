import React from 'react';
import PropTypes from 'prop-types';
// components
import { LinksList, FormInput, Button } from '../../components';
// api
import { getLinksByCatId, postLink } from '../../api/links';
// styles
import './DashboardContent.scss';
import './DashboardContent-media.scss';



const DashboardContent = ({ activeItem }) => {
  const [links, setLinks] = React.useState([]);

  const [newLink, setNewLink] = React.useState({
    title: '',
    descr: '',
    href: ''
  });
  

  // getting all links by category id
  React.useEffect(() => {
    if(activeItem) {
      getLinksByCatId(activeItem._id)
        .then(response => {
          setLinks(response.data.links);
        })
        .catch(err => console.error(err));
    }
  }, [activeItem]);



  // handle input
  const handleInput = (e) => {
    e.persist();
    // setting each value in state to the value of an input
    setNewLink(prevLink => ({
      ...prevLink,
      [e.target.name]: e.target.value
    }));
  };



  // creating a new link
  const createNewLink = () => {
    // data object
    const data = {
      title: newLink.title, 
      descr: newLink.descr, 
      href: newLink.href,
      catId: activeItem._id
    };

    // posting data to the db by api call
    postLink(data)
      .then(response => {
        // getting the uploaded link
        const link = response.data.link;

        // updating links in the state
        setLinks(prevLinks => [...prevLinks, link]);
        // setting the state of a new link to default values
        setNewLink({
          title: '',
          descr: '',
          href: ''
        });
      })
      .catch(err => console.error(err));

  };


  return (
    <div className="articles__content">
      {
        activeItem ? 
          <React.Fragment>
            <h3 className="articles__content-title">{ activeItem.title }</h3>

            <LinksList
              classNames={['articles__content-linksList']}
              links={links}
            />

            <div className="articles__content-createBlock">
              <h4 className="articles__content-subtitle">Create a new link:</h4>
              <div className="articles__content-inputs">
                <FormInput 
                  name="title"
                  type="text"
                  placeholder="Type the title of a new link"
                  onChange={handleInput}
                  value={newLink.title}
                  label="Title:"
                />

                <FormInput 
                  name="descr"
                  type="text"
                  placeholder="Type the description of a new link"
                  onChange={handleInput}
                  value={newLink.descr}
                  label="Description:"
                />

                <FormInput 
                  name="href"
                  type="text"
                  placeholder="Type a link to a resource"
                  onChange={handleInput}
                  value={newLink.href}
                  label="Link to a resource:"
                />
              </div>

              <div className="articles__content-btnBlock">
                <Button 
                  text="Create new link"
                  onClick={createNewLink}
                />
              </div>

            </div> 
          </React.Fragment>
        :
          <h2 className="articles__content-title">Select a category to view its content</h2>
      }
    </div>
  );
};

DashboardContent.propTypes = {
  activeItem: PropTypes.object
};


export default DashboardContent;
