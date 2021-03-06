import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import HomeIcon from "@material-ui/icons/Home";
import FlagIcon from "@material-ui/icons/Flag";
import SubscriptionsIcon from "@material-ui/icons/Subscriptions";
import StorefrontIcon from "@material-ui/icons/Storefront";
import SupervisedUserCircleIcon from "@material-ui/icons/SupervisedUserCircle";
import { Avatar, IconButton } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import ForumIcon from "@material-ui/icons/Forum";
import NotificationsActiveIcon from "@material-ui/icons/NotificationsActive";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
const Header = () => {
  return (
    <div className="header">
      <div className="header__left">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/1024px-Facebook_Logo_%282019%29.png"
          alt=""
        />
      </div>
      <div className="header__input">
        <SearchIcon />
        <input placeholder="Search Facebook" type="text" />
      </div>

      <div className="header__center"></div>
      <div className="header__option header__option--active">
        <HomeIcon fontSize="large" />
      </div>
      <div className="header__option">
        <FlagIcon fontSize="large" />
      </div>
      <div className="header__option">
        <SubscriptionsIcon fontSize="large" />
      </div>
      <div className="header__option">
        <StorefrontIcon fontSize="large" />
      </div>
      <div className="header__option">
        <SupervisedUserCircleIcon fontSize="large" />
      </div>

      <div className="header__right">
        <div className="header__info">
          <Avatar src="https://images.squarespace-cdn.com/content/v1/5ad77a37b40b9d311bfbdb76/1526404809371-6NT43LO3SJVZ7666CL3C/shutterstock_370707923.jpg?format=1500w" />
          <h4>Timur</h4>
        </div>

        <IconButton>
          <AddIcon />
        </IconButton>

        <IconButton>
          <ForumIcon />
        </IconButton>

        <IconButton>
          <NotificationsActiveIcon />
        </IconButton>

        <IconButton>
          <ExpandMoreIcon />
        </IconButton>
      </div>
    </div>
  );
};

export default Header;
