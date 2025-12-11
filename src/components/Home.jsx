import React, { useState } from "react";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { addToCart, calculatePrice } from "../redux/reducers";
import {
  createTheme,
  ThemeProvider,
  Pagination,
  Button,
  CardActions,
  Card,
} from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import st1 from "../assets/st1.jpg";
import st2 from "../assets/st3.jpg";
import st3 from "../assets/st2.jpg";
import productList from "./productList";

const Home = () => {
  const itemsPerPage = 8;
  const totalItems = productList.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const [currentPage, setCurrentPage] = useState(1);
  const handlePageChange = (event, page) => {
    setCurrentPage(page);
  };

  const dispatch = useDispatch();

  const addToCartHandler = (options) => {
    dispatch(addToCart(options));
    dispatch(calculatePrice());
    toast.success("Added to cart");
  };

  return (
    <div className="home">
      <Card className="home-card" sx={{ backgroundColor: "transparent", boxShadow: "none" }}>
        <div className="heroImageBg">
          <div className="heroImageSubDiv">
            <div className="heading">
              <h1>Welcome to ShopNest</h1>
              <p>Best Shopping platform for all your needs</p>
            </div>
            <div className="imageDiv">
              <img src={st2} alt="" />
              <img src={st1} alt="" />
              <img src={st3} alt="" />
            </div>
          </div>
          <KeyboardArrowDownIcon
            className="arrowDown"
            style={{ fontSize: "4rem", width: "100%", textAlign: "center" }}
          />
        </div>
        <div className="itemsContainer">
          {productList
            .slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)
            .map((item) => (
              <ProductCard
                key={item.id}
                imgSrc={item.imgSrc}
                name={item.name}
                price={item.price}
                id={item.id}
                handler={addToCartHandler}
              />
            ))}
        </div>
        <CardActions sx={{ justifyContent: "center", marginTop: "16px", paddingBottom: "2rem" }}>
          <ThemeProvider theme={paginationTheme}>
            <Pagination
              className="pagination"
              count={totalPages}
              page={currentPage}
              onChange={handlePageChange}
              size="large"
            />
          </ThemeProvider>
        </CardActions>
      </Card>
    </div>
  );
};

const ProductCard = ({ name, id, price, handler, imgSrc }) => (
  <div className="productCard">
    <img src={imgSrc} alt={name} />
    <p>{name}</p>
    <h4>${price}</h4>
    <Button
      variant="contained"
      onClick={() => handler({ name, price, id, quantity: 1, imgSrc })}
      sx={{
        backgroundColor: "#2563eb",
        "&:hover": { backgroundColor: "#1d4ed8" },
      }}
    >
      Add to Cart
    </Button>
  </div>
);

const paginationTheme = createTheme({
  components: {
    MuiPagination: {
      styleOverrides: {
        root: {
          "& .MuiPaginationItem-ellipsis": {
            color: "white",
          },
          "& button": {
            color: "white",
            borderColor: "white",
            fontSize: "1.1rem",
            "&:hover": {
              backgroundColor: "rgba(255,255,255,0.1)",
            }
          },
          "& .MuiPaginationItem-root.Mui-selected": {
            backgroundColor: "#2563eb",
            color: "white",
            "&:hover": {
              backgroundColor: "#1d4ed8",
            }
          },
        },
      },
    },
  },
});

export default Home;
