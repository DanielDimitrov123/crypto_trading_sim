CREATE table Currency(){
    id int primary key AUTO_INCREMENT,
    eventName varchar[30]
}

CREATE table CurrencyPrices(){
    id int primary key AUTO_INCREMENT,
    pricingDate DATE,
    currencyPrice INT,
    CurrencyID INT,
    FOREIGN KEY (CurrencyID) REFERENCES Currency(id)
}

CREATE table Actions(){
    id int primary key AUTO_INCREMENT,
    date DATE,
    UsersID INT,
    ActionTypeID INT,
    CurrencyPricesID INT,
    FOREIGN KEY (UsersID) REFERENCES Users(id),
    FOREIGN KEY (ActionTypeID) REFERENCES ActionType(id),
    FOREIGN KEY (CurrencyPricesID) REFERENCES CurrencyPrices(id)
}

Create table ActionType(){
    id int primary key AUTO_INCREMENT,
    typename varchar[20]
}

Create table Balance(){
    id int primary key AUTO_INCREMENT,
    UsersID INT,
    CurrencyID INT,
    FOREIGN KEY (UsersID) REFERENCES Users(id),
    FOREIGN KEY (CurrencyID) REFERENCES Currency(id)
}

Create table Users(){
    id int primary key AUTO_INCREMENT,
    userName varchar[30]
}