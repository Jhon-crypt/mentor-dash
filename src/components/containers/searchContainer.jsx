/* eslint-disable react/no-unknown-property */
export default function SearchContainer() {

    return (

        <>

            <div class="search-results">
                <div class="container">
                    <div class="row">
                        <div class="col-12">
                            <div class="search-results-header">
                                <h5>Search Results</h5>
                                <a href="#" id="closeSearch"
                                ><i class="material-icons">close</i></a
                                >
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-4">
                            <ul class="search-result-list user-search">
                                <li>
                                    <img
                                        src="http://polygons.space/neo/theme/assets/images/avatars/avatar2.jpeg"
                                        alt=""
                                    />
                                    <p>
                                        John Doe<br />(Works at
                                        <span class="search-input-value">hj</span>)
                                    </p>
                                </li>
                                <li>
                                    <img
                                        src="http://polygons.space/neo/theme/assets/images/avatars/avatar3.jpeg"
                                        alt=""
                                    />
                                    <p>
                                        Anna doe<br />(Lives in
                                        <span class="search-input-value">hj</span>)
                                    </p>
                                </li>
                                <li>
                                    <img
                                        src="http://polygons.space/neo/theme/assets/images/avatars/avatar4.jpeg"
                                        alt=""
                                    />
                                    <p>
                                        People near:<br /><span class="search-input-value">hj</span>
                                    </p>
                                </li>
                            </ul>
                        </div>
                        <div class="col-md-4">
                            <ul class="search-result-list social-search">
                                <li>
                                    <div class="social-search-icon facebook-icon-bg">
                                        <i class="fab fa-facebook-f"></i>
                                    </div>
                                    <div class="social-search-text">
                                        <p><span class="search-input-value">hj</span> on Facebook</p>
                                    </div>
                                </li>
                                <li>
                                    <div class="social-search-icon twitter-icon-bg">
                                        <i class="fab fa-twitter"></i>
                                    </div>
                                    <div class="social-search-text">
                                        <p><span class="search-input-value">hj</span> on Twitter</p>
                                    </div>
                                </li>
                                <li>
                                    <div class="social-search-icon google-icon-bg">
                                        <i class="fab fa-google"></i>
                                    </div>
                                    <div class="social-search-text">
                                        <p><span class="search-input-value">hj</span> on Google</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div class="col-md-4">
                            <ul class="search-result-list article-search">
                                <li>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur
                                        <span class="search-input-value">hj</span> adipiscing elit,
                                        sunt in culpa quifdaasd quis.
                                    </p>
                                    <span class="search-article-date">06 Jul, 2021</span>
                                </li>
                                <li>
                                    <p>
                                        Duis non semper sapien. Morbi imperdiet velit in
                                        <span class="search-input-value">hj</span> bibendum lobortis.
                                        Integer arcu urna, elementum in pellentesque nec, finibus at
                                        nisi.
                                    </p>
                                    <span class="search-article-date">19 Mar, 2017</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

        </>

    )

}