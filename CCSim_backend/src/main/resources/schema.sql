CREATE table CryptoCurrency(){
    id int primary key AUTO_INCREMENT,
    eventName varchar[30]
}

CREATE table CryptoCurrencyPrices(){
    id int primary key AUTO_INCREMENT,
    pricingDate DATE,
    currencyPrice INT,
    CryptoCurrencyID INT,
    FOREIGN KEY (CryptoCurrencyID) REFERENCES CryptoCurrency(id)
}

CREATE table Actions(){
    id int primary key AUTO_INCREMENT,
    date DATE,
    UsersID INT,
    ActionTypeID INT,
    CryptoCurrencyPricesID INT,
    FOREIGN KEY (UsersID) REFERENCES Users(id),
    FOREIGN KEY (ActionTypeID) REFERENCES ActionType(id),
    FOREIGN KEY (CryptoCurrencyPricesID) REFERENCES CryptoCurrencyPrices(id)
}

Create table ActionType(){
    id int primary key AUTO_INCREMENT,
    typename varchar[20]
}

Create table Users(){
    id int primary key AUTO_INCREMENT,
    userName varchar[30]
}