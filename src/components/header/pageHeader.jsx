/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */
export default function PageHeader(props) {

    return (

        <>

            <div class="page-header">
                <nav class="navbar navbar-expand-lg d-flex justify-content-between">
                    <div class="header-title flex-fill">
                        <a href="#" id="sidebar-toggle"><i data-feather="arrow-left"></i></a>
                        <h5>{props.header}</h5>
                    </div>
                    <div class="header-search">
                        <form>
                            <input
                                class="form-control"
                                type="text"
                                placeholder="Type something.."
                                aria-label="Search"
                            />
                            <a href="#" class="close-search"><i data-feather="x"></i></a>
                        </form>
                    </div>
                    <div class="flex-fill" id="headerNav">
                        <ul class="navbar-nav">


                            <li class="nav-item dropdown">
                                <a
                                    class="nav-link notifications-dropdown"
                                    href="#"
                                    id="notificationsDropDown"
                                    role="button"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false">
                                    3
                                    <div class="spinner-grow text-danger" role="status">
                                        <span class="visually-hidden">Loading...</span>
                                    </div>
                                </a>
                                <div
                                    class="dropdown-menu dropdown-menu-end notif-drop-menu"
                                    aria-labelledby="notificationsDropDown"
                                >
                                    <h6 class="dropdown-header">Notifications</h6>
                                    <a href="#">
                                        <div class="header-notif">
                                            <div class="notif-image">
                                                <span class="notification-badge bg-info text-white">
                                                    <i class="fas fa-bullhorn"></i>
                                                </span>
                                            </div>
                                            <div class="notif-text">
                                                <p class="bold-notif-text">
                                                    faucibus dolor in commodo lectus mattis
                                                </p>
                                                <small>19:00</small>
                                            </div>
                                        </div>
                                    </a>
                                    <a href="#">
                                        <div class="header-notif">
                                            <div class="notif-image">
                                                <span
                                                    class="notification-badge bg-primary text-white"
                                                >
                                                    <i class="fas fa-bolt"></i>
                                                </span>
                                            </div>
                                            <div class="notif-text">
                                                <p class="bold-notif-text">
                                                    faucibus dolor in commodo lectus mattis
                                                </p>
                                                <small>18:00</small>
                                            </div>
                                        </div>
                                    </a>
                                    <a href="#">
                                        <div class="header-notif">
                                            <div class="notif-image">
                                                <span
                                                    class="notification-badge bg-success text-white"
                                                >
                                                    <i class="fas fa-at"></i>
                                                </span>
                                            </div>
                                            <div class="notif-text">
                                                <p>faucibus dolor in commodo lectus mattis</p>
                                                <small>yesterday</small>
                                            </div>
                                        </div>
                                    </a>
                                    <a href="#">
                                        <div class="header-notif">
                                            <div class="notif-image">
                                                <span class="notification-badge">
                                                    <img
                                                        src="http://polygons.space/neo/theme/assets/images/avatars/avatar2.jpeg"
                                                        alt=""
                                                    />
                                                </span>
                                            </div>
                                            <div class="notif-text">
                                                <p>faucibus dolor in commodo lectus mattis</p>
                                                <small>yesterday</small>
                                            </div>
                                        </div>
                                    </a>
                                    <a href="#">
                                        <div class="header-notif">
                                            <div class="notif-image">
                                                <span class="notification-badge">
                                                    <img
                                                        src="http://polygons.space/neo/theme/assets/images/avatars/avatar5.jpeg"
                                                        alt=""
                                                    />
                                                </span>
                                            </div>
                                            <div class="notif-text">
                                                <p>faucibus dolor in commodo lectus mattis</p>
                                                <small>yesterday</small>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </li>
                            <li class="nav-item dropdown">
                                <a
                                    class="nav-link profile-dropdown"
                                    href="#"
                                    id="profileDropDown"
                                    role="button"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                ><img
                                        src="http://polygons.space/neo/theme/assets/images/avatars/avatar1.jpeg"
                                        alt=""
                                    /></a>
                                <div
                                    class="dropdown-menu dropdown-menu-end profile-drop-menu"
                                    aria-labelledby="profileDropDown"
                                >
                                    <a class="dropdown-item" href="#"
                                    ><i data-feather="user"></i>Profile</a
                                    >
                                    <a class="dropdown-item" href="#"
                                    ><i data-feather="inbox"></i>Messages</a
                                    >
                                    <a class="dropdown-item" href="#"
                                    ><i data-feather="edit"></i>Activities<span
                                        class="badge rounded-pill bg-success"
                                    >12</span
                                        ></a
                                    >
                                    <a class="dropdown-item" href="#"
                                    ><i data-feather="check-circle"></i>Tasks</a
                                    >
                                    <div class="dropdown-divider"></div>
                                    <a class="dropdown-item" href="#"
                                    ><i data-feather="settings"></i>Settings</a
                                    >
                                    <a class="dropdown-item" href="#"
                                    ><i data-feather="unlock"></i>Lock</a
                                    >
                                    <a class="dropdown-item" href="#"
                                    ><i data-feather="log-out"></i>Logout</a
                                    >
                                </div>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>

        </>

    )

}