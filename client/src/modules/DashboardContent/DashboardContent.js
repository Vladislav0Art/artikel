import React from 'react';
import PropTypes from 'prop-types';
// components
import { LinksList, FormInput, Button } from '../../components';
// api
import { getLinksByCatId, postLink, deleteLink, updateLink } from '../../api/links';
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
          const links = response.data.links;
          setLinks(() => links.map( link => ({ ...link, isEditing: false }) ));
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
      title: newLink.title.trim(), 
      descr: newLink.descr.trim(), 
      href: newLink.href.trim(),
      catId: activeItem._id
    };

    // posting data to the db by api call
    postLink(data)
      .then(response => {
        // getting the uploaded link
        const link = response.data.link;

        // updating links in the state
        setLinks(prevLinks => [...prevLinks, { ...link, isEditing: false }]);
        // setting the state of a new link to default values
        setNewLink({
          title: '',
          descr: '',
          href: ''
        });
      })
      .catch(err => console.error(err));
  };



  // deleting link from db
  const deleteLinkFromDB = (id) => {
    deleteLink(id)
      .then(res => {
        // deleting link from local component state
        setLinks(prevLinks => prevLinks.filter(link => link._id !== id));
      })
      .catch(err => console.log(err));
  };



  // setting editing mode to true of a link matching the passed id
  const switchOnLinkEditingMode = (id) => {
    setLinks(prevLinks => prevLinks.map(link => {
      if(link._id === id) {
        link.isEditing = true;
      }
      else {
        link.isEditing = false;
      }

      return link;
    }));
  };


  // updating link in db
  const updateLinkInDB = (id, data) => {
    // updating link in db
    updateLink(id, data)
    .then(res => {
      // setting editing mode to false
      setLinks(prevLinks =>  prevLinks.map(link => {
        if(link._id === id) {
          link.isEditing = false;
        }

        return link;
      }));
    })
    .catch(err => console.log(err));
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
              deleteLink={deleteLinkFromDB}
              updateLink={updateLinkInDB}
              switchMode={switchOnLinkEditingMode}
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
                  placeholder="For example, https://example.com/"
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
