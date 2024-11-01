/* eslint-disable react/no-unknown-property */
import Sidebar from "../components/sidebars/sidebar";
import SearchContainer from "../components/containers/searchContainer";
import PageHeader from "../components/header/pageHeader";
export default function Sessions() {

    return (

        <>

            <div class="page-sidebar-collapsed">
                <div class="page-container">
                    <Sidebar />
                    <div class="page-content">
                        <PageHeader header="Sessions"/>
                        <div class="main-wrapper">
                            
                        </div>
                        <div class="page-footer">
                            <a href="crypto.html" class="page-footer-item page-footer-item-right"
                            >Crypto<i data-feather="arrow-right" class="footer-right"></i
                            ></a>
                        </div>

                    </div>
                </div>
                <SearchContainer />

            </div>

        </>

    )

}