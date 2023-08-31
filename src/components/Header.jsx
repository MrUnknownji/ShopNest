import React, { useMemo, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import {
  Search as SearchIcon,
  AccountCircleOutlined as AccountCircleOutlinedIcon,
  ShoppingCartOutlined as ShoppingCartOutlinedIcon,
  HomeOutlined as HomeOutlinedIcon,
} from "@mui/icons-material";
import {
  Button,
  Card,
  TextField,
  Autocomplete,
  CardActions,
} from "@mui/material";
import productList from "./productList";

const autocompleteTheme = createTheme({
  components: {
    MuiAutocomplete: {
      styleOverrides: {
        root: {
          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              border: "none",
            },
            "&:hover fieldset": {
              border: "none",
            },
            "&.Mui-focused fieldset": {
              border: "none",
              boxShadow: "none",
            },
          },
        },
      },
    },
  },
});

const Header = ({ logoSrc, altText }) => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  const isProfilePage = location.pathname === "/profile";
  const isCartPage = location.pathname === "/cart";

  const handleAutocompleteChange = (event, value) => {
    setSelectedProduct(value);
    console.info(value);
  };

  const handleSearchButtonClick = () => {
    if (selectedProduct) {
      window.location.href = `/product/${selectedProduct.id}`;
    }
  };

  const autocompleteOptions = useMemo(
    () => productList.map((product) => product.name),
    []
  );

  const cartItems = useSelector((state) => state.cart.cartItems);
  return (
    <nav className="nav">
      <div>
        <Link to={"/"}>
          <img src={logoSrc} alt={altText} />
        </Link>
        <Link to={"/"}>
          <h2>ShopNest</h2>
        </Link>
      </div>
      <div>
        <Card
          className="customSearchCard"
          variant={"elevation"}
          sx={{
            borderRadius: "1rem",
          }}
        >
          <ThemeProvider theme={autocompleteTheme}>
            <Autocomplete
              disablePortal
              freeSolo
              options={autocompleteOptions}
              fullWidth
              onChange={handleAutocompleteChange}
              renderInput={(params) => <TextField {...params} label="Search" />}
            />
          </ThemeProvider>
          <CardActions
            className="customSearchAction"
            sx={{ justifyContent: "center", margin: "0px", padding: "0px" }}
          >
            <Button
              variant="contained"
              color="primary"
              onClick={handleSearchButtonClick}
              sx={{
                boxShadow: "none",
              }}
            >
              <SearchIcon className="searchIcon" />
              <h2>Search</h2>
            </Button>
          </CardActions>
        </Card>
      </div>
      <div>
        {!isHomePage && (
          <Link to={"/"}>
            <HomeOutlinedIcon />
          </Link>
        )}
        {!isCartPage && (
          <Link to={"/cart"}>
            <ShoppingCartOutlinedIcon />
            <p>{Object.keys(cartItems)?.length}</p>
          </Link>
        )}
        {!isProfilePage && (
          <Link to={"/profile"}>
            <AccountCircleOutlinedIcon />
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Header;
