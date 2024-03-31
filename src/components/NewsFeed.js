import axios from "axios";
import React,{ useEffect, useState }  from "react";

// import Components
import Article from "./Article";

// NewsFeed functional component: display news articles to user
const NewsFeed = ({ category }) => {

    // store the article data within a Hook
    // set a loading and error property for conditional rendering
    const [ data, setData ] = useState(null);
    const [ loading, setLoading ] = useState(true);
    const [ error, setError ] = useState(null);

    // implement infinite scrolling
    const [ page, setPage ] = useState(1);
    const [ pageSize, setPageSize] = useState(10);

    // Need to access as an environment variable
    const api_key = 'e4dc062410814f3ca98895516994667c';

    // we need to make an API call with the given category to render corresponding news articles
    // use the useEffect Hook to do this
    useEffect( () => {

        // define a function that fetches the data from the API
        const fetchData = async () => {

            // API calls need to be made within an async function
            // try this code, it might cause an error
            try {

                // attempt to make a call to the NewsAPI
                const response = await axios.get(`https://newsapi.org/v2/everything?q=${category}&pageSize=${pageSize}&apiKey=${api_key}`);

                // (if no issues occurred) update our Hook with the response data
                // notify that we are no longer waiting on a response
                setData(prevData => ({ ...prevData, ...response.data }));

                setLoading(false);

            } catch (error) {

                // define how to handle errors if they arise
                setError(error);
                setLoading(false);
            }
        };

        // now that we've defined the function, call it when the component mounts
        fetchData();
    }, [ category, page]);

    // useEffect: track the users scrolling
    useEffect(() => {

        // add an event listener to track users scrolling (scroll event)
        window.addEventListener('scroll', handleScroll);
        return () => {

            // clean-up function for our event listener when component unmounts
            window.removeEventListener('scroll', handleScroll);
        }

    }, []);

    // define our scroll event handler function
    const handleScroll = () => {

        // if user has scrolled to the bottom of the page
        if (window.innerHeight + window.scrollY >= document.body.scrollHeight) {

            // test-code: log message to the console so I know this works
            console.log("End of Page!!!");
            
            // Increment page number to fetch next page (set) of data
            // Increment pageSize by 10 to fetch more results
            setPage(prevPage => prevPage + 1);
            setPageSize(prevPageSize => prevPageSize += 10);
        }
    };


    // conditional rendering: the HTML/JSX we generate is different depending on the state
    
    // if an error occurred, notify the user
    if(error) {
        return (
            <div>
                <p>Error: { error.message }</p>
            </div>
        );
    }
    // if loading, notify user
    else if(loading) {
        return (
            <div>
                <p>Loading...</p>
            </div>
        );
    }
    // if no errors occurred, generate the desired HTML/JSX (Articles)
    return (
        <div className="newsFeed">
            {
                data.articles.map((article, index) => {

                    // create an Article Component for each article element in the articles array
                    return (
                        <div className="article flexbox-container" key={index}>
                            <a className="article-link" href={article.url} target="_blank">
                                <Article articleData={article} />
                            </a>
                        </div>
                    );
                })
            }
        </div>
    );
};


// export the Component to be used in another file
export default NewsFeed;