import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import RadioGroup from "@mui/material/RadioGroup";
import Radio from "@mui/material/Radio";
import { Button } from "@mui/material";

const Checkout = ({ popUpHandler }) => {
  const handleInnerClick = (event) => {
    event.stopPropagation();
  };
  return (
    <div className="checkout" onClick={popUpHandler}>
      <Card
        className="card"
        orientation="vertical"
        size="md"
        variant={"elevation"}
        onClick={handleInnerClick}
      >
        <CardContent>
          <h2>Select Payment Method</h2>
          <List>
            <RadioGroup
            //   value={selectedPaymentMethod}
            //   onChange={handlePaymentMethodChange}
            >
              <ListItem>
                <label htmlFor="gpay">
                  <ListItemText
                    primary="Google Pay"
                    secondary="upi@example.com"
                  />
                </label>
                <Radio id="gpay" value="googlepay" />
              </ListItem>
              <ListItem>
                <label htmlFor="ppay">
                  <ListItemText
                    primary="Phone Pay"
                    secondary="upi@example.com"
                  />
                </label>
                <Radio id="ppay" value="phonepay" />
              </ListItem>
              <ListItem>
                <label htmlFor="cc">
                  <ListItemText
                    primary="Credit Card"
                    secondary="**** **** **** 1234"
                  />
                </label>
                <Radio id="cc" value="credit_card" />
              </ListItem>
              <ListItem>
                <label htmlFor="PayPal">
                  <ListItemText
                    primary="PayPal"
                    secondary="your_email@example.com"
                  />
                </label>
                <Radio id="PayPal" value="paypal" />
              </ListItem>
              <ListItem>
                <label htmlFor="cod">
                  <ListItemText
                    primary="Cash on delivery"
                    secondary="Extra charges applicable"
                  />
                </label>
                <Radio id="cod" value="cashOnDelivery" />
              </ListItem>
              <ListItem>
                <ListItemText primary="" />
                <Button variant="contained">Proceed</Button>
              </ListItem>
            </RadioGroup>
          </List>
        </CardContent>
      </Card>
    </div>
  );
};

export default Checkout;
